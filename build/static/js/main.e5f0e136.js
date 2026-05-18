/*! For license information please see main.e5f0e136.js.LICENSE.txt */
(()=>{"use strict";var e={4(e,t,n){var r=n(853),i=n(43),o=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function d(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function h(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=h(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),w=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope");var k=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var C=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var L=Symbol.iterator;function $(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var I=Symbol.for("react.client.reference");function P(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===I?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case x:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case j:return"Suspense";case S:return"SuspenseList";case k:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return e.displayName||"Context";case y:return(e._context.displayName||"Context")+".Consumer";case E:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:P(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return P(e(t))}catch(ke){}}return null}var F=Array.isArray,R=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},z=[],D=-1;function B(e){return{current:e}}function M(e){0>D||(e.current=z[D],z[D]=null,D--)}function G(e,t){D++,z[D]=e.current,e.current=t}var H,W,U=B(null),_=B(null),Y=B(null),Q=B(null);function Z(e,t){switch(G(Y,t),G(_,e),G(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=vu(t=bu(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(U),G(U,e)}function V(){M(U),M(_),M(Y)}function q(e){null!==e.memoizedState&&G(Q,e);var t=U.current,n=vu(t,e.type);t!==n&&(G(_,e),G(U,n))}function X(e){_.current===e&&(M(U),M(_)),Q.current===e&&(M(Q),uh._currentValue=N)}function J(e){if(void 0===H)try{throw Error()}catch(ke){var t=ke.stack.trim().match(/\n( *(at )?)/);H=t&&t[1]||"",W=-1<ke.stack.indexOf("\n    at")?" (<anonymous>)":-1<ke.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+H+e+W}var K=!1;function ee(e,t){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(ke){var r=ke}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(a){if(a&&r&&"string"===typeof a.stack)return[a.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),a=o[0],l=o[1];if(a&&l){var s=a.split("\n"),c=l.split("\n");for(i=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===s.length||i===c.length)for(r=s.length-1,i=c.length-1;1<=r&&0<=i&&s[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(s[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||s[r]!==c[i]){var d="\n"+s[r].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}}while(1<=r&&0<=i);break}}}finally{K=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function te(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&null!==t?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return J("Activity");default:return""}}function ne(e){try{var t="",n=null;do{t+=te(e,n),n=e,e=e.return}while(e);return t}catch(ke){return"\nError generating stack: "+ke.message+"\n"+ke.stack}}var re=Object.prototype.hasOwnProperty,ie=r.unstable_scheduleCallback,oe=r.unstable_cancelCallback,ae=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,de=r.unstable_ImmediatePriority,ue=r.unstable_UserBlockingPriority,he=r.unstable_NormalPriority,pe=r.unstable_LowPriority,fe=r.unstable_IdlePriority,ge=r.log,me=r.unstable_setDisableYieldValue,xe=null,be=null;function ve(e){if("function"===typeof ge&&me(e),be&&"function"===typeof be.setStrictMode)try{be.setStrictMode(xe,e)}catch(t){}}var ye=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(we(e)/Ee|0)|0},we=Math.log,Ee=Math.LN2;var je=256,Se=262144,Te=4194304;function Ae(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ce(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~o)?i=Ae(r):0!==(a&=l)?i=Ae(a):n||0!==(n=l&~e)&&(i=Ae(n)):0!==(l=r&~o)?i=Ae(l):0!==a?i=Ae(a):n||0!==(n=r&~e)&&(i=Ae(n)),0===i?0:0!==t&&t!==i&&0===(t&o)&&((o=i&-i)>=(n=t&-t)||32===o&&0!==(4194048&n))?t:i}function Le(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Ie(){var e=Te;return 0===(62914560&(Te<<=1))&&(Te=4194304),e}function Pe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fe(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Re(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ye(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function Oe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Ne(e,t){var n=t&-t;return 0!==((n=0!==(42&n)?1:ze(n))&(e.suspendedLanes|t))?0:n}function ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Be(){var e=O.p;return 0!==e?e:void 0===(e=window.event)?32:kh(e.type)}function Me(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var Ge=Math.random().toString(36).slice(2),He="__reactFiber$"+Ge,We="__reactProps$"+Ge,Ue="__reactContainer$"+Ge,_e="__reactEvents$"+Ge,Ye="__reactListeners$"+Ge,Qe="__reactHandles$"+Ge,Ze="__reactResources$"+Ge,Ve="__reactMarker$"+Ge;function qe(e){delete e[He],delete e[We],delete e[_e],delete e[Ye],delete e[Qe]}function Xe(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ue]||n[He]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=zu(e);null!==e;){if(n=e[He])return n;e=zu(e)}return t}n=(e=n).parentNode}return null}function Je(e){if(e=e[He]||e[Ue]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function Ke(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function et(e){var t=e[Ze];return t||(t=e[Ze]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tt(e){e[Ve]=!0}var nt=new Set,rt={};function it(e,t){ot(e,t),ot(e+"Capture",t)}function ot(e,t){for(rt[e]=t,e=0;e<t.length;e++)nt.add(t[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},st={};function ct(e,t,n){if(i=t,re.call(st,i)||!re.call(lt,i)&&(at.test(i)?st[i]=!0:(lt[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function dt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ut(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ft(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&"undefined"!==typeof r&&"function"===typeof r.get&&"function"===typeof r.set){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function mt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var xt=/[\n"\\]/g;function bt(e){return e.replace(xt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function vt(e,t,n,r,i,o,a,l){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?wt(e,a,ht(t)):null!=n?wt(e,a,ht(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=o&&(e.defaultChecked=!!o),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ht(l):e.removeAttribute("name")}function yt(e,t,n,r,i,o,a,l){if(null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.type=o),null!=t||null!=n){if(!("submit"!==o&&"reset"!==o||void 0!==t&&null!==t))return void ft(e);n=null!=n?""+ht(n):"",t=null!=t?""+ht(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a),ft(e)}function wt(e,t,n){"number"===t&&mt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Et(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function jt(e,t,n){null==t||((t=""+ht(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ht(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function St(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(F(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ht(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r),ft(e)}function Tt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var At=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||At.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&kt(e,i,r)}else for(var o in t)t.hasOwnProperty(o)&&kt(e,o,t[o])}function Lt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $t=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),It=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pt(e){return It.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ft(){}var Rt=null;function Ot(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Nt=null,zt=null;function Dt(e){var t=Je(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(vt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[We]||null;if(!i)throw Error(a(90));vt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&gt(r)}break e;case"textarea":jt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&Et(e,!!n.multiple,t,!1)}}}var Bt=!1;function Mt(e,t,n){if(Bt)return e(t,n);Bt=!0;try{return e(t)}finally{if(Bt=!1,(null!==Nt||null!==zt)&&(ed(),Nt&&(t=Nt,e=zt,zt=Nt=null,Dt(t),e)))for(t=0;t<e.length;t++)Dt(e[t])}}function Gt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[We]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Ht=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Wt=!1;if(Ht)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){Wt=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch(Jh){Wt=!1}var _t=null,Yt=null,Qt=null;function Zt(){if(Qt)return Qt;var e,t,n=Yt,r=n.length,i="value"in _t?_t.value:_t.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Qt=i.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Xt(){return!1}function Jt(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?qt:Xt,this.isPropagationStopped=Xt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Kt,en,tn,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=Jt(nn),on=p({},nn,{view:0,detail:0}),an=Jt(on),ln=p({},on,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&"mousemove"===e.type?(Kt=e.screenX-tn.screenX,en=e.screenY-tn.screenY):en=Kt=0,tn=e),Kt)},movementY:function(e){return"movementY"in e?e.movementY:en}}),sn=Jt(ln),cn=Jt(p({},ln,{dataTransfer:0})),dn=Jt(p({},on,{relatedTarget:0})),un=Jt(p({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),hn=Jt(p({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Jt(p({},nn,{data:0})),fn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=mn[e])&&!!t[e]}function bn(){return xn}var vn=Jt(p({},on,{key:function(e){if(e.key){var t=fn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?gn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),yn=Jt(p({},ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),wn=Jt(p({},on,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bn})),En=Jt(p({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),jn=Jt(p({},ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Sn=Jt(p({},nn,{newState:0,oldState:0})),Tn=[9,13,27,32],An=Ht&&"CompositionEvent"in window,kn=null;Ht&&"documentMode"in document&&(kn=document.documentMode);var Cn=Ht&&"TextEvent"in window&&!kn,Ln=Ht&&(!An||kn&&8<kn&&11>=kn),$n=String.fromCharCode(32),In=!1;function Pn(e,t){switch(e){case"keyup":return-1!==Tn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Rn=!1;var On={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!On[e.type]:"textarea"===t}function zn(e,t,n,r){Nt?zt?zt.push(r):zt=[r]:Nt=r,0<(t=iu(t,"onChange")).length&&(n=new rn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Bn=null;function Mn(e){qd(e,0)}function Gn(e){if(gt(Ke(e)))return e}function Hn(e,t){if("change"===e)return t}var Wn=!1;if(Ht){var Un;if(Ht){var _n="oninput"in document;if(!_n){var Yn=document.createElement("div");Yn.setAttribute("oninput","return;"),_n="function"===typeof Yn.oninput}Un=_n}else Un=!1;Wn=Un&&(!document.documentMode||9<document.documentMode)}function Qn(){Dn&&(Dn.detachEvent("onpropertychange",Zn),Bn=Dn=null)}function Zn(e){if("value"===e.propertyName&&Gn(Bn)){var t=[];zn(t,Bn,e,Ot(e)),Mt(Mn,t)}}function Vn(e,t,n){"focusin"===e?(Qn(),Bn=n,(Dn=t).attachEvent("onpropertychange",Zn)):"focusout"===e&&Qn()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Bn)}function Xn(e,t){if("click"===e)return Gn(t)}function Jn(e,t){if("input"===e||"change"===e)return Gn(t)}var Kn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function er(e,t){if(Kn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!re.call(t,i)||!Kn(e[i],t[i]))return!1}return!0}function tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nr(e,t){var n,r=tr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tr(r)}}function rr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?rr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ir(e){for(var t=mt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=mt((e=t.contentWindow).document)}return t}function or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ar=Ht&&"documentMode"in document&&11>=document.documentMode,lr=null,sr=null,cr=null,dr=!1;function ur(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;dr||null==lr||lr!==mt(r)||("selectionStart"in(r=lr)&&or(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},cr&&er(cr,r)||(cr=r,0<(r=iu(sr,"onSelect")).length&&(t=new rn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},fr={},gr={};function mr(e){if(fr[e])return fr[e];if(!pr[e])return e;var t,n=pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in gr)return fr[e]=n[t];return e}Ht&&(gr=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);var xr=mr("animationend"),br=mr("animationiteration"),vr=mr("animationstart"),yr=mr("transitionrun"),wr=mr("transitionstart"),Er=mr("transitioncancel"),jr=mr("transitionend"),Sr=new Map,Tr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Sr.set(e,t),it(t,[e])}Tr.push("scrollEnd");var kr="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},Cr=[],Lr=0,$r=0;function Ir(){for(var e=Lr,t=$r=Lr=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var i=Cr[t];Cr[t++]=null;var o=Cr[t];if(Cr[t++]=null,null!==r&&null!==i){var a=r.pending;null===a?i.next=i:(i.next=a.next,a.next=i),r.pending=i}0!==o&&Or(n,i,o)}}function Pr(e,t,n,r){Cr[Lr++]=e,Cr[Lr++]=t,Cr[Lr++]=n,Cr[Lr++]=r,$r|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Fr(e,t,n,r){return Pr(e,t,n,r),Nr(e)}function Rr(e,t){return Pr(e,null,null,t),Nr(e)}function Or(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(i=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,i&&null!==t&&(i=31-ye(n),null===(r=(e=o.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),o):null}function Nr(e){if(50<_c)throw _c=0,Yc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var zr={};function Dr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Br(e,t,n,r){return new Dr(e,t,n,r)}function Mr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Gr(e,t){var n=e.alternate;return null===n?((n=Br(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Wr(e,t,n,r,i,o){var l=0;if(r=e,"function"===typeof e)Mr(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,U.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case k:return(e=Br(31,n,t,i)).elementType=k,e.lanes=o,e;case x:return Ur(n.children,i,o,t);case b:l=8,i|=24;break;case v:return(e=Br(12,n,t,2|i)).elementType=v,e.lanes=o,e;case j:return(e=Br(13,n,t,i)).elementType=j,e.lanes=o,e;case S:return(e=Br(19,n,t,i)).elementType=S,e.lanes=o,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case w:l=10;break e;case y:l=9;break e;case E:l=11;break e;case T:l=14;break e;case A:l=16,r=null;break e}l=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=Br(l,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Ur(e,t,n,r){return(e=Br(7,e,r,t)).lanes=n,e}function _r(e,t,n){return(e=Br(6,e,null,t)).lanes=n,e}function Yr(e){var t=Br(18,null,null,0);return t.stateNode=e,t}function Qr(e,t,n){return(t=Br(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zr=new WeakMap;function Vr(e,t){if("object"===typeof e&&null!==e){var n=Zr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ne(t)},Zr.set(e,t),t)}return{value:e,source:t,stack:ne(t)}}var qr=[],Xr=0,Jr=null,Kr=0,ei=[],ti=0,ni=null,ri=1,ii="";function oi(e,t){qr[Xr++]=Kr,qr[Xr++]=Jr,Jr=e,Kr=t}function ai(e,t,n){ei[ti++]=ri,ei[ti++]=ii,ei[ti++]=ni,ni=e;var r=ri;e=ii;var i=32-ye(r)-1;r&=~(1<<i),n+=1;var o=32-ye(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,ri=1<<32-ye(t)+i|n<<i|r,ii=o+e}else ri=1<<o|n<<i|r,ii=e}function li(e){null!==e.return&&(oi(e,1),ai(e,1,0))}function si(e){for(;e===Jr;)Jr=qr[--Xr],qr[Xr]=null,Kr=qr[--Xr],qr[Xr]=null;for(;e===ni;)ni=ei[--ti],ei[ti]=null,ii=ei[--ti],ei[ti]=null,ri=ei[--ti],ei[ti]=null}function ci(e,t){ei[ti++]=ri,ei[ti++]=ii,ei[ti++]=ni,ri=t.id,ii=t.overflow,ni=e}var di=null,ui=null,hi=!1,pi=null,fi=!1,gi=Error(a(519));function mi(e){throw Ei(Vr(Error(a(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),gi}function xi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[He]=e,t[We]=r,n){case"dialog":Xd("cancel",t),Xd("close",t);break;case"iframe":case"object":case"embed":Xd("load",t);break;case"video":case"audio":for(n=0;n<Zd.length;n++)Xd(Zd[n],t);break;case"source":Xd("error",t);break;case"img":case"image":case"link":Xd("error",t),Xd("load",t);break;case"details":Xd("toggle",t);break;case"input":Xd("invalid",t),yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Xd("invalid",t);break;case"textarea":Xd("invalid",t),St(t,r.value,r.defaultValue,r.children)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||du(t.textContent,n)?(null!=r.popover&&(Xd("beforetoggle",t),Xd("toggle",t)),null!=r.onScroll&&Xd("scroll",t),null!=r.onScrollEnd&&Xd("scrollend",t),null!=r.onClick&&(t.onclick=Ft),t=!0):t=!1,t||mi(e,!0)}function bi(e){for(di=e.return;di;)switch(di.tag){case 5:case 31:case 13:return void(fi=!1);case 27:case 3:return void(fi=!0);default:di=di.return}}function vi(e){if(e!==di)return!1;if(!hi)return bi(e),hi=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||yu(e.type,e.memoizedProps)),t=!t),t&&ui&&mi(e),bi(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));ui=Nu(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));ui=Nu(e)}else 27===n?(n=ui,ku(e.type)?(e=Ou,Ou=null,ui=e):ui=n):ui=di?Ru(e.stateNode.nextSibling):null;return!0}function yi(){ui=di=null,hi=!1}function wi(){var e=pi;return null!==e&&(null===Ic?Ic=e:Ic.push.apply(Ic,e),pi=null),e}function Ei(e){null===pi?pi=[e]:pi.push(e)}var ji=B(null),Si=null,Ti=null;function Ai(e,t,n){G(ji,t._currentValue),t._currentValue=n}function ki(e){e._currentValue=ji.current,M(ji)}function Ci(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Li(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var o=i.dependencies;if(null!==o){var l=i.child;o=o.firstContext;e:for(;null!==o;){var s=o;o=i;for(var c=0;c<t.length;c++)if(s.context===t[c]){o.lanes|=n,null!==(s=o.alternate)&&(s.lanes|=n),Ci(o.return,n,e),r||(l=null);break e}o=s.next}}else if(18===i.tag){if(null===(l=i.return))throw Error(a(341));l.lanes|=n,null!==(o=l.alternate)&&(o.lanes|=n),Ci(l,n,e),l=null}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===e){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}}function $i(e,t,n,r){e=null;for(var i=t,o=!1;null!==i;){if(!o)if(0!==(524288&i.flags))o=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var l=i.alternate;if(null===l)throw Error(a(387));if(null!==(l=l.memoizedProps)){var s=i.type;Kn(i.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(i===Q.current){if(null===(l=i.alternate))throw Error(a(387));l.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(uh):e=[uh])}i=i.return}null!==e&&Li(t,e,n,r),t.flags|=262144}function Ii(e){for(e=e.firstContext;null!==e;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pi(e){Si=e,Ti=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Fi(e){return Oi(Si,e)}function Ri(e,t){return null===Si&&Pi(e),Oi(e,t)}function Oi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Ti){if(null===e)throw Error(a(308));Ti=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ti=Ti.next=t;return n}var Ni="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},zi=r.unstable_scheduleCallback,Di=r.unstable_NormalPriority,Bi={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mi(){return{controller:new Ni,data:new Map,refCount:0}}function Gi(e){e.refCount--,0===e.refCount&&zi(Di,function(){e.controller.abort()})}var Hi=null,Wi=0,Ui=0,_i=null;function Yi(){if(0===--Wi&&null!==Hi){null!==_i&&(_i.status="fulfilled");var e=Hi;Hi=null,Ui=0,_i=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Qi=R.S;R.S=function(e,t){Rc=se(),"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Hi){var n=Hi=[];Wi=0,Ui=Wd(),_i={status:"pending",value:void 0,then:function(e){n.push(e)}}}Wi++,t.then(Yi,Yi)}(0,t),null!==Qi&&Qi(e,t)};var Zi=B(null);function Vi(){var e=Zi.current;return null!==e?e:gc.pooledCache}function qi(e,t){G(Zi,null===t?Zi.current:t.pool)}function Xi(){var e=Vi();return null===e?null:{parent:Bi._currentValue,pool:e}}var Ji=Error(a(460)),Ki=Error(a(474)),eo=Error(a(542)),to={then:function(){}};function no(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ro(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Ft,Ft),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e;default:if("string"===typeof t.status)t.then(Ft,Ft);else{if(null!==(e=gc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw lo(e=t.reason),e}throw oo=t,Ji}}function io(e){try{return(0,e._init)(e._payload)}catch(ke){if(null!==ke&&"object"===typeof ke&&"function"===typeof ke.then)throw oo=ke,Ji;throw ke}}var oo=null;function ao(){if(null===oo)throw Error(a(459));var e=oo;return oo=null,e}function lo(e){if(e===Ji||e===eo)throw Error(a(483))}var so=null,co=0;function uo(e){var t=co;return co+=1,null===so&&(so=[]),ro(so,e,t)}function ho(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function po(e,t){if(t.$$typeof===f)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Gr(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=_r(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var o=n.type;return o===x?u(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===A&&io(o)===t.type)?(ho(t=i(t,n.props),n),t.return=e,t):(ho(t=Wr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function d(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Qr(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function u(e,t,n,r,o){return null===t||7!==t.tag?((t=Ur(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=_r(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case g:return ho(n=Wr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Qr(t,e.mode,n)).return=e,t;case A:return h(e,t=io(t),n)}if(F(t)||$(t))return(t=Ur(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return h(e,uo(t),n);if(t.$$typeof===w)return h(e,Ri(e,t),n);po(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case g:return n.key===i?c(e,t,n,r):null;case m:return n.key===i?d(e,t,n,r):null;case A:return p(e,t,n=io(n),r)}if(F(n)||$(n))return null!==i?null:u(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,uo(n),r);if(n.$$typeof===w)return p(e,t,Ri(e,n),r);po(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case g:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case m:return d(t,e=e.get(null===r.key?n:r.key)||null,r,i);case A:return f(e,t,n,r=io(r),i)}if(F(r)||$(r))return u(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return f(e,t,n,uo(r),i);if(r.$$typeof===w)return f(e,t,n,Ri(t,r),i);po(t,r)}return null}function b(s,c,d,u){if("object"===typeof d&&null!==d&&d.type===x&&null===d.key&&(d=d.props.children),"object"===typeof d&&null!==d){switch(d.$$typeof){case g:e:{for(var v=d.key;null!==c;){if(c.key===v){if((v=d.type)===x){if(7===c.tag){n(s,c.sibling),(u=i(c,d.props.children)).return=s,s=u;break e}}else if(c.elementType===v||"object"===typeof v&&null!==v&&v.$$typeof===A&&io(v)===c.type){n(s,c.sibling),ho(u=i(c,d.props),d),u.return=s,s=u;break e}n(s,c);break}t(s,c),c=c.sibling}d.type===x?((u=Ur(d.props.children,s.mode,u,d.key)).return=s,s=u):(ho(u=Wr(d.type,d.key,d.props,null,s.mode,u),d),u.return=s,s=u)}return l(s);case m:e:{for(v=d.key;null!==c;){if(c.key===v){if(4===c.tag&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(s,c.sibling),(u=i(c,d.children||[])).return=s,s=u;break e}n(s,c);break}t(s,c),c=c.sibling}(u=Qr(d,s.mode,u)).return=s,s=u}return l(s);case A:return b(s,c,d=io(d),u)}if(F(d))return function(i,a,l,s){for(var c=null,d=null,u=a,g=a=0,m=null;null!==u&&g<l.length;g++){u.index>g?(m=u,u=null):m=u.sibling;var x=p(i,u,l[g],s);if(null===x){null===u&&(u=m);break}e&&u&&null===x.alternate&&t(i,u),a=o(x,a,g),null===d?c=x:d.sibling=x,d=x,u=m}if(g===l.length)return n(i,u),hi&&oi(i,g),c;if(null===u){for(;g<l.length;g++)null!==(u=h(i,l[g],s))&&(a=o(u,a,g),null===d?c=u:d.sibling=u,d=u);return hi&&oi(i,g),c}for(u=r(u);g<l.length;g++)null!==(m=f(u,i,g,l[g],s))&&(e&&null!==m.alternate&&u.delete(null===m.key?g:m.key),a=o(m,a,g),null===d?c=m:d.sibling=m,d=m);return e&&u.forEach(function(e){return t(i,e)}),hi&&oi(i,g),c}(s,c,d,u);if($(d)){if("function"!==typeof(v=$(d)))throw Error(a(150));return function(i,l,s,c){if(null==s)throw Error(a(151));for(var d=null,u=null,g=l,m=l=0,x=null,b=s.next();null!==g&&!b.done;m++,b=s.next()){g.index>m?(x=g,g=null):x=g.sibling;var v=p(i,g,b.value,c);if(null===v){null===g&&(g=x);break}e&&g&&null===v.alternate&&t(i,g),l=o(v,l,m),null===u?d=v:u.sibling=v,u=v,g=x}if(b.done)return n(i,g),hi&&oi(i,m),d;if(null===g){for(;!b.done;m++,b=s.next())null!==(b=h(i,b.value,c))&&(l=o(b,l,m),null===u?d=b:u.sibling=b,u=b);return hi&&oi(i,m),d}for(g=r(g);!b.done;m++,b=s.next())null!==(b=f(g,i,m,b.value,c))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),l=o(b,l,m),null===u?d=b:u.sibling=b,u=b);return e&&g.forEach(function(e){return t(i,e)}),hi&&oi(i,m),d}(s,c,d=v.call(d),u)}if("function"===typeof d.then)return b(s,c,uo(d),u);if(d.$$typeof===w)return b(s,c,Ri(s,d),u);po(s,d)}return"string"===typeof d&&""!==d||"number"===typeof d||"bigint"===typeof d?(d=""+d,null!==c&&6===c.tag?(n(s,c.sibling),(u=i(c,d)).return=s,s=u):(n(s,c),(u=_r(d,s.mode,u)).return=s,s=u),l(s)):n(s,c)}return function(e,t,n,r){try{co=0;var i=b(e,t,n,r);return so=null,i}catch(ke){if(ke===Ji||ke===eo)throw ke;var o=Br(29,ke,null,e.mode);return o.lanes=r,o.return=e,o}}}var go=fo(!0),mo=fo(!1),xo=!1;function bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wo(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&fc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Nr(e),Or(e,null,n),t}return Pr(e,r,t,n),Nr(e)}function Eo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Oe(e,n)}}function jo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var So=!1;function To(){if(So){if(null!==_i)throw _i}}function Ao(e,t,n,r){So=!1;var i=e.updateQueue;xo=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?o=c:a.next=c,a=s;var d=e.alternate;null!==d&&((l=(d=d.updateQueue).lastBaseUpdate)!==a&&(null===l?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=s))}if(null!==o){var u=i.baseState;for(a=0,d=c=s=null,l=o;;){var h=-536870913&l.lane,f=h!==l.lane;if(f?(xc&h)===h:(r&h)===h){0!==h&&h===Ui&&(So=!0),null!==d&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var g=e,m=l;h=t;var x=n;switch(m.tag){case 1:if("function"===typeof(g=m.payload)){u=g.call(x,u,h);break e}u=g;break e;case 3:g.flags=-65537&g.flags|128;case 0:if(null===(h="function"===typeof(g=m.payload)?g.call(x,u,h):g)||void 0===h)break e;u=p({},u,h);break e;case 2:xo=!0}}null!==(h=l.callback)&&(e.flags|=64,f&&(e.flags|=8192),null===(f=i.callbacks)?i.callbacks=[h]:f.push(h))}else f={lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===d?(c=d=f,s=u):d=d.next=f,a|=h;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(f=l).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}null===d&&(s=u),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,null===o&&(i.shared.lanes=0),Tc|=a,e.lanes=a,e.memoizedState=u}}function ko(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function Co(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)ko(n[e],t)}var Lo=B(null),$o=B(0);function Io(e,t){G($o,e=jc),G(Lo,t),jc=e|t.baseLanes}function Po(){G($o,jc),G(Lo,Lo.current)}function Fo(){jc=$o.current,M(Lo),M($o)}var Ro=B(null),Oo=null;function No(e){var t=e.alternate;G(Go,1&Go.current),G(Ro,e),null===Oo&&(null===t||null!==Lo.current||null!==t.memoizedState)&&(Oo=e)}function zo(e){G(Go,Go.current),G(Ro,e),null===Oo&&(Oo=e)}function Do(e){22===e.tag?(G(Go,Go.current),G(Ro,e),null===Oo&&(Oo=e)):Bo()}function Bo(){G(Go,Go.current),G(Ro,Ro.current)}function Mo(e){M(Ro),Oo===e&&(Oo=null),M(Go)}var Go=B(0);function Ho(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Pu(n)||Fu(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(0!==(128&t.flags))return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,Uo=null,_o=null,Yo=null,Qo=!1,Zo=!1,Vo=!1,qo=0,Xo=0,Jo=null,Ko=0;function ea(){throw Error(a(321))}function ta(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kn(e[n],t[n]))return!1;return!0}function na(e,t,n,r,i,o){return Wo=o,Uo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=null===e||null===e.memoizedState?xl:bl,Vo=!1,o=n(r,i),Vo=!1,Zo&&(o=ia(t,n,r,i)),ra(e),o}function ra(e){R.H=ml;var t=null!==_o&&null!==_o.next;if(Wo=0,Yo=_o=Uo=null,Qo=!1,Xo=0,Jo=null,t)throw Error(a(300));null===e||Rl||null!==(e=e.dependencies)&&Ii(e)&&(Rl=!0)}function ia(e,t,n,r){Uo=e;var i=0;do{if(Zo&&(Jo=null),Xo=0,Zo=!1,25<=i)throw Error(a(301));if(i+=1,Yo=_o=null,null!=e.updateQueue){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,null!=o.memoCache&&(o.memoCache.index=0)}R.H=vl,o=t(n,r)}while(Zo);return o}function oa(){var e=R.H,t=e.useState()[0];return t="function"===typeof t.then?ua(t):t,e=e.useState()[0],(null!==_o?_o.memoizedState:null)!==e&&(Uo.flags|=1024),t}function aa(){var e=0!==qo;return qo=0,e}function la(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function sa(e){if(Qo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Qo=!1}Wo=0,Yo=_o=Uo=null,Zo=!1,Xo=qo=0,Jo=null}function ca(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Yo?Uo.memoizedState=Yo=e:Yo=Yo.next=e,Yo}function da(){if(null===_o){var e=Uo.alternate;e=null!==e?e.memoizedState:null}else e=_o.next;var t=null===Yo?Uo.memoizedState:Yo.next;if(null!==t)Yo=t,_o=e;else{if(null===e){if(null===Uo.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(_o=e).memoizedState,baseState:_o.baseState,baseQueue:_o.baseQueue,queue:_o.queue,next:null},null===Yo?Uo.memoizedState=Yo=e:Yo=Yo.next=e}return Yo}function ua(e){var t=Xo;return Xo+=1,null===Jo&&(Jo=[]),e=ro(Jo,e,t),t=Uo,null===(null===Yo?t.memoizedState:Yo.next)&&(t=t.alternate,R.H=null===t||null===t.memoizedState?xl:bl),e}function ha(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return ua(e);if(e.$$typeof===w)return Fi(e)}throw Error(a(438,String(e)))}function pa(e){var t=null,n=Uo.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Uo.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=C;return t.index++,n}function fa(e,t){return"function"===typeof t?t(e):t}function ga(e){return ma(da(),_o,e)}function ma(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var i=e.baseQueue,o=r.pending;if(null!==o){if(null!==i){var l=i.next;i.next=o.next,o.next=l}t.baseQueue=i=o,r.pending=null}if(o=e.baseState,null===i)e.memoizedState=o;else{var s=l=null,c=null,d=t=i.next,u=!1;do{var h=-536870913&d.lane;if(h!==d.lane?(xc&h)===h:(Wo&h)===h){var p=d.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),h===Ui&&(u=!0);else{if((Wo&p)===p){d=d.next,p===Ui&&(u=!0);continue}h={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(s=c=h,l=o):c=c.next=h,Uo.lanes|=p,Tc|=p}h=d.action,Vo&&n(o,h),o=d.hasEagerState?d.eagerState:n(o,h)}else p={lane:h,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},null===c?(s=c=p,l=o):c=c.next=p,Uo.lanes|=h,Tc|=h;d=d.next}while(null!==d&&d!==t);if(null===c?l=o:c.next=s,!Kn(o,e.memoizedState)&&(Rl=!0,u&&null!==(n=_i)))throw n;e.memoizedState=o,e.baseState=l,e.baseQueue=c,r.lastRenderedState=o}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xa(e){var t=da(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{o=e(o,l.action),l=l.next}while(l!==i);Kn(o,t.memoizedState)||(Rl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ba(e,t,n){var r=Uo,i=da(),o=hi;if(o){if(void 0===n)throw Error(a(407));n=n()}else n=t();var l=!Kn((_o||i).memoizedState,n);if(l&&(i.memoizedState=n,Rl=!0),i=i.queue,Wa(wa.bind(null,r,i,e),[e]),i.getSnapshot!==t||l||null!==Yo&&1&Yo.memoizedState.tag){if(r.flags|=2048,Da(9,{destroy:void 0},ya.bind(null,r,i,n,t),null),null===gc)throw Error(a(349));o||0!==(127&Wo)||va(r,t,n)}return n}function va(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Uo.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ya(e,t,n,r){t.value=n,t.getSnapshot=r,Ea(t)&&ja(e)}function wa(e,t,n){return n(function(){Ea(t)&&ja(e)})}function Ea(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kn(e,n)}catch(r){return!0}}function ja(e){var t=Rr(e,2);null!==t&&Vc(t,e,2)}function Sa(e){var t=ca();if("function"===typeof e){var n=e;if(e=n(),Vo){ve(!0);try{n()}finally{ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Ta(e,t,n,r){return e.baseState=n,ma(e,_o,"function"===typeof r?r:fa)}function Aa(e,t,n,r,i){if(pl(e))throw Error(a(485));if(null!==(e=t.action)){var o={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};null!==R.T?n(!0):o.isTransition=!1,r(o),null===(n=t.pending)?(o.next=t.pending=o,ka(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ka(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var o=R.T,a={};R.T=a;try{var l=n(i,r),s=R.S;null!==s&&s(a,l),Ca(e,t,l)}catch(c){$a(e,t,c)}finally{null!==o&&null!==a.types&&(o.types=a.types),R.T=o}}else try{Ca(e,t,o=n(i,r))}catch(d){$a(e,t,d)}}function Ca(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){La(e,t,n)},function(n){return $a(e,t,n)}):La(e,t,n)}function La(e,t,n){t.status="fulfilled",t.value=n,Ia(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ka(e,n)))}function $a(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Ia(t),t=t.next}while(t!==r)}e.action=null}function Ia(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pa(e,t){return t}function Fa(e,t){if(hi){var n=gc.formState;if(null!==n){e:{var r=Uo;if(hi){if(ui){t:{for(var i=ui,o=fi;8!==i.nodeType;){if(!o){i=null;break t}if(null===(i=Ru(i.nextSibling))){i=null;break t}}i="F!"===(o=i.data)||"F"===o?i:null}if(i){ui=Ru(i.nextSibling),r="F!"===i.data;break e}}mi(r)}r=!1}r&&(t=n[0])}}return(n=ca()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},n.queue=r,n=dl.bind(null,Uo,r),r.dispatch=n,r=Sa(!1),o=hl.bind(null,Uo,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=ca()).queue=i,n=Aa.bind(null,Uo,i,o,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ra(e){return Oa(da(),_o,e)}function Oa(e,t,n){if(t=ma(e,t,Pa)[0],e=ga(fa)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=ua(t)}catch(ke){if(ke===Ji)throw eo;throw ke}else r=t;var i=(t=da()).queue,o=i.dispatch;return n!==t.memoizedState&&(Uo.flags|=2048,Da(9,{destroy:void 0},Na.bind(null,i,n),null)),[r,o,e]}function Na(e,t){e.action=t}function za(e){var t=da(),n=_o;if(null!==n)return Oa(t,n,e);da(),t=t.memoizedState;var r=(n=da()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Da(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Uo.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ba(){return da().memoizedState}function Ma(e,t,n,r){var i=ca();Uo.flags|=e,i.memoizedState=Da(1|t,{destroy:void 0},n,void 0===r?null:r)}function Ga(e,t,n,r){var i=da();r=void 0===r?null:r;var o=i.memoizedState.inst;null!==_o&&null!==r&&ta(r,_o.memoizedState.deps)?i.memoizedState=Da(t,o,n,r):(Uo.flags|=e,i.memoizedState=Da(1|t,o,n,r))}function Ha(e,t){Ma(8390656,8,e,t)}function Wa(e,t){Ga(2048,8,e,t)}function Ua(e){var t=da().memoizedState;return function(e){Uo.flags|=4;var t=Uo.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Uo.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(0!==(2&fc))throw Error(a(440));return t.impl.apply(void 0,arguments)}}function _a(e,t){return Ga(4,2,e,t)}function Ya(e,t){return Ga(4,4,e,t)}function Qa(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function Za(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ga(4,4,Qa.bind(null,t,e),n)}function Va(){}function qa(e,t){var n=da();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ta(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xa(e,t){var n=da();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ta(t,r[1]))return r[0];if(r=e(),Vo){ve(!0);try{e()}finally{ve(!1)}}return n.memoizedState=[r,t],r}function Ja(e,t,n){return void 0===n||0!==(1073741824&Wo)&&0===(261930&xc)?e.memoizedState=t:(e.memoizedState=n,e=Zc(),Uo.lanes|=e,Tc|=e,n)}function Ka(e,t,n,r){return Kn(n,t)?n:null!==Lo.current?(e=Ja(e,n,r),Kn(e,t)||(Rl=!0),e):0===(42&Wo)||0!==(1073741824&Wo)&&0===(261930&xc)?(Rl=!0,e.memoizedState=n):(e=Zc(),Uo.lanes|=e,Tc|=e,t)}function el(e,t,n,r,i){var o=O.p;O.p=0!==o&&8>o?o:8;var a=R.T,l={};R.T=l,hl(e,!1,t,n);try{var s=i(),c=R.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then){var d=function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r);ul(e,t,d,Qc())}else ul(e,t,r,Qc())}catch(u){ul(e,t,{then:function(){},status:"rejected",reason:u},Qc())}finally{O.p=o,null!==a&&null!==l.types&&(a.types=l.types),R.T=a}}function tl(){}function nl(e,t,n,r){if(5!==e.tag)throw Error(a(476));var i=rl(e).queue;el(e,i,t,N,null===n?tl:function(){return il(e),n(r)})}function rl(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:N},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function il(e){var t=rl(e);null===t.next&&(t=e.alternate.memoizedState),ul(e,t.next.queue,{},Qc())}function ol(){return Fi(uh)}function al(){return da().memoizedState}function ll(){return da().memoizedState}function sl(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Qc(),r=wo(t,e=yo(n),n);return null!==r&&(Vc(r,t,n),Eo(r,t,n)),t={cache:Mi()},void(e.payload=t)}t=t.return}}function cl(e,t,n){var r=Qc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pl(e)?fl(t,n):null!==(n=Fr(e,t,n,r))&&(Vc(n,e,r),gl(n,t,r))}function dl(e,t,n){ul(e,t,n,Qc())}function ul(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pl(e))fl(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Kn(l,a))return Pr(e,t,i,0),null===gc&&Ir(),!1}catch(s){}if(null!==(n=Fr(e,t,i,r)))return Vc(n,e,r),gl(n,t,r),!0}return!1}function hl(e,t,n,r){if(r={lane:2,revertLane:Wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(t)throw Error(a(479))}else null!==(t=Fr(e,n,r,2))&&Vc(t,e,2)}function pl(e){var t=e.alternate;return e===Uo||null!==t&&t===Uo}function fl(e,t){Zo=Qo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gl(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Oe(e,n)}}var ml={readContext:Fi,use:ha,useCallback:ea,useContext:ea,useEffect:ea,useImperativeHandle:ea,useLayoutEffect:ea,useInsertionEffect:ea,useMemo:ea,useReducer:ea,useRef:ea,useState:ea,useDebugValue:ea,useDeferredValue:ea,useTransition:ea,useSyncExternalStore:ea,useId:ea,useHostTransitionStatus:ea,useFormState:ea,useActionState:ea,useOptimistic:ea,useMemoCache:ea,useCacheRefresh:ea};ml.useEffectEvent=ea;var xl={readContext:Fi,use:ha,useCallback:function(e,t){return ca().memoizedState=[e,void 0===t?null:t],e},useContext:Fi,useEffect:Ha,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4194308,4,Qa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ma(4194308,4,e,t)},useInsertionEffect:function(e,t){Ma(4,2,e,t)},useMemo:function(e,t){var n=ca();t=void 0===t?null:t;var r=e();if(Vo){ve(!0);try{e()}finally{ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ca();if(void 0!==n){var i=n(t);if(Vo){ve(!0);try{n(t)}finally{ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=cl.bind(null,Uo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ca().memoizedState=e},useState:function(e){var t=(e=Sa(e)).queue,n=dl.bind(null,Uo,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Va,useDeferredValue:function(e,t){return Ja(ca(),e,t)},useTransition:function(){var e=Sa(!1);return e=el.bind(null,Uo,e.queue,!0,!1),ca().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Uo,i=ca();if(hi){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===gc)throw Error(a(349));0!==(127&xc)||va(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ha(wa.bind(null,r,o,e),[e]),r.flags|=2048,Da(9,{destroy:void 0},ya.bind(null,r,o,n,t),null),n},useId:function(){var e=ca(),t=gc.identifierPrefix;if(hi){var n=ii;t="_"+t+"R_"+(n=(ri&~(1<<32-ye(ri)-1)).toString(32)+n),0<(n=qo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=Ko++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ol,useFormState:Fa,useActionState:Fa,useOptimistic:function(e){var t=ca();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=hl.bind(null,Uo,!0,n),n.dispatch=t,[e,t]},useMemoCache:pa,useCacheRefresh:function(){return ca().memoizedState=sl.bind(null,Uo)},useEffectEvent:function(e){var t=ca(),n={impl:e};return t.memoizedState=n,function(){if(0!==(2&fc))throw Error(a(440));return n.impl.apply(void 0,arguments)}}},bl={readContext:Fi,use:ha,useCallback:qa,useContext:Fi,useEffect:Wa,useImperativeHandle:Za,useInsertionEffect:_a,useLayoutEffect:Ya,useMemo:Xa,useReducer:ga,useRef:Ba,useState:function(){return ga(fa)},useDebugValue:Va,useDeferredValue:function(e,t){return Ka(da(),_o.memoizedState,e,t)},useTransition:function(){var e=ga(fa)[0],t=da().memoizedState;return["boolean"===typeof e?e:ua(e),t]},useSyncExternalStore:ba,useId:al,useHostTransitionStatus:ol,useFormState:Ra,useActionState:Ra,useOptimistic:function(e,t){return Ta(da(),0,e,t)},useMemoCache:pa,useCacheRefresh:ll};bl.useEffectEvent=Ua;var vl={readContext:Fi,use:ha,useCallback:qa,useContext:Fi,useEffect:Wa,useImperativeHandle:Za,useInsertionEffect:_a,useLayoutEffect:Ya,useMemo:Xa,useReducer:xa,useRef:Ba,useState:function(){return xa(fa)},useDebugValue:Va,useDeferredValue:function(e,t){var n=da();return null===_o?Ja(n,e,t):Ka(n,_o.memoizedState,e,t)},useTransition:function(){var e=xa(fa)[0],t=da().memoizedState;return["boolean"===typeof e?e:ua(e),t]},useSyncExternalStore:ba,useId:al,useHostTransitionStatus:ol,useFormState:za,useActionState:za,useOptimistic:function(e,t){var n=da();return null!==_o?Ta(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pa,useCacheRefresh:ll};function yl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}vl.useEffectEvent=Ua;var wl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qc(),i=yo(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=wo(e,i,r))&&(Vc(t,e,r),Eo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qc(),i=yo(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=wo(e,i,r))&&(Vc(t,e,r),Eo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qc(),r=yo(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=wo(e,r,n))&&(Vc(t,e,n),Eo(t,e,n))}};function El(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!er(n,r)||!er(i,o))}function jl(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function Sl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}function Tl(e){kr(e)}function Al(e){console.error(e)}function kl(e){kr(e)}function Cl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ll(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function $l(e,t,n){return(n=yo(n)).tag=3,n.payload={element:null},n.callback=function(){Cl(e,t)},n}function Il(e){return(e=yo(e)).tag=3,e}function Pl(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var o=r.value;e.payload=function(){return i(o)},e.callback=function(){Ll(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){Ll(t,n,r),"function"!==typeof i&&(null===zc?zc=new Set([this]):zc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Fl=Error(a(461)),Rl=!1;function Ol(e,t,n,r){t.child=null===e?mo(t,null,n,r):go(t,e.child,n,r)}function Nl(e,t,n,r,i){n=n.render;var o=t.ref;if("ref"in r){var a={};for(var l in r)"ref"!==l&&(a[l]=r[l])}else a=r;return Pi(t),r=na(e,t,n,a,o,i),l=aa(),null===e||Rl?(hi&&l&&li(t),t.flags|=1,Ol(e,t,r,i),t.child):(la(e,t,i),os(e,t,i))}function zl(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Mr(o)||void 0!==o.defaultProps||null!==n.compare?((e=Wr(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Dl(e,t,o,r,i))}if(o=e.child,!as(e,i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:er)(a,r)&&e.ref===t.ref)return os(e,t,i)}return t.flags|=1,(e=Gr(o,r)).ref=t.ref,e.return=t,t.child=e}function Dl(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref){if(Rl=!1,t.pendingProps=r=o,!as(e,i))return t.lanes=e.lanes,os(e,t,i);0!==(131072&e.flags)&&(Rl=!0)}}return _l(e,t,n,r,i)}function Bl(e,t,n,r){var i=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(0!==(128&t.flags)){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,i=0;null!==r;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~o}else r=0,t.child=null;return Gl(e,t,o,n,r)}if(0===(536870912&n))return r=t.lanes=536870912,Gl(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&qi(0,null!==o?o.cachePool:null),null!==o?Io(t,o):Po(),Do(t)}else null!==o?(qi(0,o.cachePool),Io(t,o),Bo(),t.memoizedState=null):(null!==e&&qi(0,null),Po(),Bo());return Ol(e,t,i,n),t.child}function Ml(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gl(e,t,n,r,i){var o=Vi();return o=null===o?null:{parent:Bi._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&qi(0,null),Po(),Do(t),null!==e&&$i(e,t,r,!0),t.childLanes=i,null}function Hl(e,t){return(t=es({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Wl(e,t,n){return go(t,e.child,null,n),(e=Hl(t,t.pendingProps)).flags|=2,Mo(t),t.memoizedState=null,e}function Ul(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function _l(e,t,n,r,i){return Pi(t),n=na(e,t,n,r,void 0,i),r=aa(),null===e||Rl?(hi&&r&&li(t),t.flags|=1,Ol(e,t,n,i),t.child):(la(e,t,i),os(e,t,i))}function Yl(e,t,n,r,i,o){return Pi(t),t.updateQueue=null,n=ia(t,r,n,i),ra(e),r=aa(),null===e||Rl?(hi&&r&&li(t),t.flags|=1,Ol(e,t,n,o),t.child):(la(e,t,o),os(e,t,o))}function Ql(e,t,n,r,i){if(Pi(t),null===t.stateNode){var o=zr,a=n.contextType;"object"===typeof a&&null!==a&&(o=Fi(a)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=wl,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},bo(t),a=n.contextType,o.context="object"===typeof a&&null!==a?Fi(a):zr,o.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(yl(t,n,a,r),o.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(a=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),a!==o.state&&wl.enqueueReplaceState(o,o.state,null),Ao(t,r,o,i),To(),o.state=t.memoizedState),"function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var l=t.memoizedProps,s=Sl(n,l);o.props=s;var c=o.context,d=n.contextType;a=zr,"object"===typeof d&&null!==d&&(a=Fi(d));var u=n.getDerivedStateFromProps;d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate,l=t.pendingProps!==l,d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l||c!==a)&&jl(t,o,r,a),xo=!1;var h=t.memoizedState;o.state=h,Ao(t,r,o,i),To(),c=t.memoizedState,l||h!==c||xo?("function"===typeof u&&(yl(t,n,u,r),c=t.memoizedState),(s=xo||El(t,n,s,r,h,c,a))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=a,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vo(e,t),d=Sl(n,a=t.memoizedProps),o.props=d,u=t.pendingProps,h=o.context,c=n.contextType,s=zr,"object"===typeof c&&null!==c&&(s=Fi(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(a!==u||h!==s)&&jl(t,o,r,s),xo=!1,h=t.memoizedState,o.state=h,Ao(t,r,o,i),To();var p=t.memoizedState;a!==u||h!==p||xo||null!==e&&null!==e.dependencies&&Ii(e.dependencies)?("function"===typeof l&&(yl(t,n,l,r),p=t.memoizedState),(d=xo||El(t,n,d,r,h,p,s)||null!==e&&null!==e.dependencies&&Ii(e.dependencies))?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=s,r=d):("function"!==typeof o.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Ul(e,t),r=0!==(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=go(t,e.child,null,i),t.child=go(t,null,n,i)):Ol(e,t,n,i),t.memoizedState=o.state,e=t.child):e=os(e,t,i),e}function Zl(e,t,n,r){return yi(),t.flags|=256,Ol(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ql(e){return{baseLanes:e,cachePool:Xi()}}function Xl(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Cc),e}function Jl(e,t,n){var r,i=t.pendingProps,o=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&Go.current)),r&&(o=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(hi){if(o?No(t):Bo(),(e=ui)?null!==(e=null!==(e=Iu(e,fi))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ni?{id:ri,overflow:ii}:null,retryLane:536870912,hydrationErrors:null},(n=Yr(e)).return=t,t.child=n,di=t,ui=null):e=null,null===e)throw mi(t);return Fu(e)?t.lanes=32:t.lanes=536870912,null}var s=i.children;return i=i.fallback,o?(Bo(),s=es({mode:"hidden",children:s},o=t.mode),i=Ur(i,o,n,null),s.return=t,i.return=t,s.sibling=i,t.child=s,(i=t.child).memoizedState=ql(n),i.childLanes=Xl(e,r,n),t.memoizedState=Vl,Ml(null,i)):(No(t),Kl(t,s))}var c=e.memoizedState;if(null!==c&&null!==(s=c.dehydrated)){if(l)256&t.flags?(No(t),t.flags&=-257,t=ts(e,t,n)):null!==t.memoizedState?(Bo(),t.child=e.child,t.flags|=128,t=null):(Bo(),s=i.fallback,o=t.mode,i=es({mode:"visible",children:i.children},o),(s=Ur(s,o,n,null)).flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,go(t,e.child,null,n),(i=t.child).memoizedState=ql(n),i.childLanes=Xl(e,r,n),t.memoizedState=Vl,t=Ml(null,i));else if(No(t),Fu(s)){if(r=s.nextSibling&&s.nextSibling.dataset)var d=r.dgst;r=d,(i=Error(a(419))).stack="",i.digest=r,Ei({value:i,source:null,stack:null}),t=ts(e,t,n)}else if(Rl||$i(e,t,n,!1),r=0!==(n&e.childLanes),Rl||r){if(null!==(r=gc)&&(0!==(i=Ne(r,n))&&i!==c.retryLane))throw c.retryLane=i,Rr(e,i),Vc(r,e,i),Fl;Pu(s)||ld(),t=ts(e,t,n)}else Pu(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,ui=Ru(s.nextSibling),di=t,hi=!0,pi=null,fi=!1,null!==e&&ci(t,e),(t=Kl(t,i.children)).flags|=4096);return t}return o?(Bo(),s=i.fallback,o=t.mode,d=(c=e.child).sibling,(i=Gr(c,{mode:"hidden",children:i.children})).subtreeFlags=65011712&c.subtreeFlags,null!==d?s=Gr(d,s):(s=Ur(s,o,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,Ml(null,i),i=t.child,null===(s=e.child.memoizedState)?s=ql(n):(null!==(o=s.cachePool)?(c=Bi._currentValue,o=o.parent!==c?{parent:c,pool:c}:o):o=Xi(),s={baseLanes:s.baseLanes|n,cachePool:o}),i.memoizedState=s,i.childLanes=Xl(e,r,n),t.memoizedState=Vl,Ml(e.child,i)):(No(t),e=(n=e.child).sibling,(n=Gr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Kl(e,t){return(t=es({mode:"visible",children:t},e.mode)).return=e,e.child=t}function es(e,t){return(e=Br(22,e,null,t)).lanes=0,e}function ts(e,t,n){return go(t,e.child,null,n),(e=Kl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ns(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ci(e.return,t,n)}function rs(e,t,n,r,i,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i,a.treeForkCount=o)}function is(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;r=r.children;var a=Go.current,l=0!==(2&a);if(l?(a=1&a|2,t.flags|=128):a&=1,G(Go,a),Ol(e,t,r,n),r=hi?Kr:0,!l&&null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ns(e,n,t);else if(19===e.tag)ns(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Ho(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rs(t,!1,i,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ho(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rs(t,!0,n,null,o,r);break;case"together":rs(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function os(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Tc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if($i(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Gr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Gr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function as(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ii(e))}function ls(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Rl=!0;else{if(!as(e,n)&&0===(128&t.flags))return Rl=!1,function(e,t,n){switch(t.tag){case 3:Z(t,t.stateNode.containerInfo),Ai(0,Bi,e.memoizedState.cache),yi();break;case 27:case 5:q(t);break;case 4:Z(t,t.stateNode.containerInfo);break;case 10:Ai(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,zo(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(No(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Jl(e,t,n):(No(t),null!==(e=os(e,t,n))?e.sibling:null);No(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||($i(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return is(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Go,Go.current),r)break;return null;case 22:return t.lanes=0,Bl(e,t,n,t.pendingProps);case 24:Ai(0,Bi,e.memoizedState.cache)}return os(e,t,n)}(e,t,n);Rl=0!==(131072&e.flags)}else Rl=!1,hi&&0!==(1048576&t.flags)&&ai(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=io(t.elementType),t.type=e,"function"!==typeof e){if(void 0!==e&&null!==e){var i=e.$$typeof;if(i===E){t.tag=11,t=Nl(null,t,e,r,n);break e}if(i===T){t.tag=14,t=zl(null,t,e,r,n);break e}}throw t=P(e)||e,Error(a(306,t,""))}Mr(e)?(r=Sl(e,r),t.tag=1,t=Ql(null,t,e,r,n)):(t.tag=0,t=_l(null,t,e,r,n))}return t;case 0:return _l(e,t,t.type,t.pendingProps,n);case 1:return Ql(e,t,r=t.type,i=Sl(r,t.pendingProps),n);case 3:e:{if(Z(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var o=t.memoizedState;i=o.element,vo(e,t),Ao(t,r,null,n);var l=t.memoizedState;if(r=l.cache,Ai(0,Bi,r),r!==o.cache&&Li(t,[Bi],n,!0),To(),r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Zl(e,t,r,n);break e}if(r!==i){Ei(i=Vr(Error(a(424)),t)),t=Zl(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ui=Ru(e.firstChild),di=t,hi=!0,pi=null,fi=!0,n=mo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(yi(),r===i){t=os(e,t,n);break e}Ol(e,t,r,n)}t=t.child}return t;case 26:return Ul(e,t),null===e?(n=Yu(t.type,null,t.pendingProps,null))?t.memoizedState=n:hi||(n=t.type,e=t.pendingProps,(r=xu(Y.current).createElement(n))[He]=t,r[We]=e,pu(r,n,e),tt(r),t.stateNode=r):t.memoizedState=Yu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return q(t),null===e&&hi&&(r=t.stateNode=Du(t.type,t.pendingProps,Y.current),di=t,fi=!0,i=ui,ku(t.type)?(Ou=i,ui=Ru(r.firstChild)):ui=i),Ol(e,t,t.pendingProps.children,n),Ul(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&hi&&((i=r=ui)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ve])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===o)return e}if(null===(e=Ru(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,fi))?(t.stateNode=r,di=t,ui=Ru(r.firstChild),fi=!1,i=!0):i=!1),i||mi(t)),q(t),i=t.type,o=t.pendingProps,l=null!==e?e.memoizedProps:null,r=o.children,yu(i,o)?r=null:null!==l&&yu(i,l)&&(t.flags|=32),null!==t.memoizedState&&(i=na(e,t,oa,null,null,n),uh._currentValue=i),Ul(e,t),Ol(e,t,r,n),t.child;case 6:return null===e&&hi&&((e=n=ui)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Ru(e.nextSibling)))return null}return e}(n,t.pendingProps,fi))?(t.stateNode=n,di=t,ui=null,e=!0):e=!1),e||mi(t)),null;case 13:return Jl(e,t,n);case 4:return Z(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=go(t,null,r,n):Ol(e,t,r,n),t.child;case 11:return Nl(e,t,t.type,t.pendingProps,n);case 7:return Ol(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ol(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ai(0,t.type,r.value),Ol(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Pi(t),r=r(i=Fi(i)),t.flags|=1,Ol(e,t,r,n),t.child;case 14:return zl(e,t,t.type,t.pendingProps,n);case 15:return Dl(e,t,t.type,t.pendingProps,n);case 19:return is(e,t,n);case 31:return function(e,t,n){var r=t.pendingProps,i=0!==(128&t.flags);if(t.flags&=-129,null===e){if(hi){if("hidden"===r.mode)return e=Hl(t,r),t.lanes=536870912,Ml(null,e);if(zo(t),(e=ui)?null!==(e=null!==(e=Iu(e,fi))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ni?{id:ri,overflow:ii}:null,retryLane:536870912,hydrationErrors:null},(n=Yr(e)).return=t,t.child=n,di=t,ui=null):e=null,null===e)throw mi(t);return t.lanes=536870912,null}return Hl(t,r)}var o=e.memoizedState;if(null!==o){var l=o.dehydrated;if(zo(t),i)if(256&t.flags)t.flags&=-257,t=Wl(e,t,n);else{if(null===t.memoizedState)throw Error(a(558));t.child=e.child,t.flags|=128,t=null}else if(Rl||$i(e,t,n,!1),i=0!==(n&e.childLanes),Rl||i){if(null!==(r=gc)&&0!==(l=Ne(r,n))&&l!==o.retryLane)throw o.retryLane=l,Rr(e,l),Vc(r,e,l),Fl;ld(),t=Wl(e,t,n)}else e=o.treeContext,ui=Ru(l.nextSibling),di=t,hi=!0,pi=null,fi=!1,null!==e&&ci(t,e),(t=Hl(t,r)).flags|=4096;return t}return(e=Gr(e.child,{mode:r.mode,children:r.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Bl(e,t,n,t.pendingProps);case 24:return Pi(t),r=Fi(Bi),null===e?(null===(i=Vi())&&(i=gc,o=Mi(),i.pooledCache=o,o.refCount++,null!==o&&(i.pooledCacheLanes|=n),i=o),t.memoizedState={parent:r,cache:i},bo(t),Ai(0,Bi,i)):(0!==(e.lanes&n)&&(vo(e,t),Ao(t,null,null,n),To()),i=e.memoizedState,o=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),Ai(0,Bi,r)):(r=o.cache,Ai(0,Bi,r),r!==i.cache&&Li(t,[Bi],n,!0))),Ol(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function ss(e){e.flags|=4}function cs(e,t,n,r,i){if((t=0!==(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&i)===i)if(e.stateNode.complete)e.flags|=8192;else{if(!id())throw oo=to,Ki;e.flags|=8192}}else e.flags&=-16777217}function ds(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!oh(t)){if(!id())throw oo=to,Ki;e.flags|=8192}}function us(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Ie():536870912,e.lanes|=t,Lc|=t)}function hs(e,t){if(!hi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fs(e,t,n){var r=t.pendingProps;switch(si(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ps(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ki(Bi),V(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(vi(t)?ss(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,wi())),ps(t),null;case 26:var i=t.type,o=t.memoizedState;return null===e?(ss(t),null!==o?(ps(t),ds(t,o)):(ps(t),cs(t,i,0,0,n))):o?o!==e.memoizedState?(ss(t),ps(t),ds(t,o)):(ps(t),t.flags&=-16777217):((e=e.memoizedProps)!==r&&ss(t),ps(t),cs(t,i,0,0,n)),null;case 27:if(X(t),n=Y.current,i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ps(t),null}e=U.current,vi(t)?xi(t):(e=Du(i,r,n),t.stateNode=e,ss(t))}return ps(t),null;case 5:if(X(t),i=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ps(t),null}if(o=U.current,vi(t))xi(t);else{var l=xu(Y.current);switch(o){case 1:o=l.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:o=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":o=l.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":o=l.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":(o=l.createElement("div")).innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o="string"===typeof r.is?l.createElement("select",{is:r.is}):l.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o="string"===typeof r.is?l.createElement(i,{is:r.is}):l.createElement(i)}}o[He]=t,o[We]=r;e:for(l=t.child;null!==l;){if(5===l.tag||6===l.tag)o.appendChild(l.stateNode);else if(4!==l.tag&&27!==l.tag&&null!==l.child){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;null===l.sibling;){if(null===l.return||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=o;e:switch(pu(o,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ss(t)}}return ps(t),cs(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&ss(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=Y.current,vi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=di))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[He]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||du(e.nodeValue,n)))||mi(t,!0)}else(e=xu(e).createTextNode(r))[He]=t,t.stateNode=e}return ps(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(r=vi(t),null!==n){if(null===e){if(!r)throw Error(a(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(a(557));e[He]=t}else yi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),e=!1}else n=wi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Mo(t),t):(Mo(t),null);if(0!==(128&t.flags))throw Error(a(558))}return ps(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=vi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(a(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(a(317));i[He]=t}else yi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),i=!1}else i=wi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(Mo(t),t):(Mo(t),null)}return Mo(t),0!==(128&t.flags)?(t.lanes=n,t):(n=null!==r,e=null!==e&&null!==e.memoizedState,n&&(i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool),o=null,null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(o=r.memoizedState.cachePool.pool),o!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),us(t,t.updateQueue),ps(t),null);case 4:return V(),null===e&&eu(t.stateNode.containerInfo),ps(t),null;case 10:return ki(t.type),ps(t),null;case 19:if(M(Go),null===(r=t.memoizedState))return ps(t),null;if(i=0!==(128&t.flags),null===(o=r.rendering))if(i)hs(r,!1);else{if(0!==Sc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(o=Ho(e))){for(t.flags|=128,hs(r,!1),e=o.updateQueue,t.updateQueue=e,us(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Hr(n,e),n=n.sibling;return G(Go,1&Go.current|2),hi&&oi(t,r.treeForkCount),t.child}e=e.sibling}null!==r.tail&&se()>Oc&&(t.flags|=128,i=!0,hs(r,!1),t.lanes=4194304)}else{if(!i)if(null!==(e=Ho(o))){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,us(t,e),hs(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!hi)return ps(t),null}else 2*se()-r.renderingStartTime>Oc&&536870912!==n&&(t.flags|=128,i=!0,hs(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(e=r.last)?e.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=se(),e.sibling=null,n=Go.current,G(Go,i?1&n|2:1&n),hi&&oi(t,r.treeForkCount),e):(ps(t),null);case 22:case 23:return Mo(t),Fo(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ps(t),6&t.subtreeFlags&&(t.flags|=8192)):ps(t),null!==(n=t.updateQueue)&&us(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&M(Zi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ki(Bi),ps(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function gs(e,t){switch(si(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ki(Bi),V(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 31:if(null!==t.memoizedState){if(Mo(t),null===t.alternate)throw Error(a(340));yi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Mo(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));yi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return M(Go),null;case 4:return V(),null;case 10:return ki(t.type),null;case 22:case 23:return Mo(t),Fo(),null!==e&&M(Zi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return ki(Bi),null;default:return null}}function ms(e,t){switch(si(t),t.tag){case 3:ki(Bi),V();break;case 26:case 27:case 5:X(t);break;case 4:V();break;case 31:null!==t.memoizedState&&Mo(t);break;case 13:Mo(t);break;case 19:M(Go);break;case 10:ki(t.type);break;case 22:case 23:Mo(t),Fo(),null!==e&&M(Zi);break;case 24:ki(Bi)}}function xs(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var o=n.create,a=n.inst;r=o(),a.destroy=r}n=n.next}while(n!==i)}}catch(l){Sd(t,t.return,l)}}function bs(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var o=i.next;r=o;do{if((r.tag&e)===e){var a=r.inst,l=a.destroy;if(void 0!==l){a.destroy=void 0,i=t;var s=n,c=l;try{c()}catch(d){Sd(i,s,d)}}}r=r.next}while(r!==o)}}catch(d){Sd(t,t.return,d)}}function vs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Co(t,n)}catch(r){Sd(e,e.return,r)}}}function ys(e,t,n){n.props=Sl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Sd(e,t,r)}}function ws(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){Sd(e,t,i)}}function Es(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){Sd(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(o){Sd(e,t,o)}else n.current=null}function js(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){Sd(e,e.return,i)}}function Ss(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,o=null,l=null,s=null,c=null,d=null,u=null;for(f in n){var h=n[f];if(n.hasOwnProperty(f)&&null!=h)switch(f){case"checked":case"value":break;case"defaultValue":c=h;default:r.hasOwnProperty(f)||uu(e,t,f,null,r,h)}}for(var p in r){var f=r[p];if(h=n[p],r.hasOwnProperty(p)&&(null!=f||null!=h))switch(p){case"type":o=f;break;case"name":i=f;break;case"checked":d=f;break;case"defaultChecked":u=f;break;case"value":l=f;break;case"defaultValue":s=f;break;case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:f!==h&&uu(e,t,p,f,r,h)}}return void vt(e,l,s,c,d,u,o,i);case"select":for(o in f=l=s=p=null,n)if(c=n[o],n.hasOwnProperty(o)&&null!=c)switch(o){case"value":break;case"multiple":f=c;default:r.hasOwnProperty(o)||uu(e,t,o,null,r,c)}for(i in r)if(o=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=o||null!=c))switch(i){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":l=o;default:o!==c&&uu(e,t,i,o,r,c)}return t=s,n=l,r=f,void(null!=p?Et(e,!!n,p,!1):!!r!==!!n&&(null!=t?Et(e,!!n,t,!0):Et(e,!!n,n?[]:"",!1)));case"textarea":for(s in f=p=null,n)if(i=n[s],n.hasOwnProperty(s)&&null!=i&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:uu(e,t,s,null,r,i)}for(l in r)if(i=r[l],o=n[l],r.hasOwnProperty(l)&&(null!=i||null!=o))switch(l){case"value":p=i;break;case"defaultValue":f=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(a(91));break;default:i!==o&&uu(e,t,l,i,r,o)}return void jt(e,p,f);case"option":for(var g in n)if(p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g))if("selected"===g)e.selected=!1;else uu(e,t,g,null,r,p);for(c in r)if(p=r[c],f=n[c],r.hasOwnProperty(c)&&p!==f&&(null!=p||null!=f))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else uu(e,t,c,p,r,f);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m)&&uu(e,t,m,null,r,p);for(d in r)if(p=r[d],f=n[d],r.hasOwnProperty(d)&&p!==f&&(null!=p||null!=f))switch(d){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(a(137,t));break;default:uu(e,t,d,p,r,f)}return;default:if(Lt(t)){for(var x in n)p=n[x],n.hasOwnProperty(x)&&void 0!==p&&!r.hasOwnProperty(x)&&hu(e,t,x,void 0,r,p);for(u in r)p=r[u],f=n[u],!r.hasOwnProperty(u)||p===f||void 0===p&&void 0===f||hu(e,t,u,p,r,f);return}}for(var b in n)p=n[b],n.hasOwnProperty(b)&&null!=p&&!r.hasOwnProperty(b)&&uu(e,t,b,null,r,p);for(h in r)p=r[h],f=n[h],!r.hasOwnProperty(h)||p===f||null==p&&null==f||uu(e,t,h,p,r,f)}(r,e.type,n,t),r[We]=t}catch(i){Sd(e,e.return,i)}}function Ts(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&ku(e.type)||4===e.tag}function As(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Ts(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&ku(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ks(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Ft));else if(4!==r&&(27===r&&ku(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(ks(e,t,n),e=e.sibling;null!==e;)ks(e,t,n),e=e.sibling}function Cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&ku(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Cs(e,t,n),e=e.sibling;null!==e;)Cs(e,t,n),e=e.sibling}function Ls(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pu(t,r,n),t[He]=e,t[We]=n}catch(o){Sd(e,e.return,o)}}var $s=!1,Is=!1,Ps=!1,Fs="function"===typeof WeakSet?WeakSet:Set,Rs=null;function Os(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Vs(e,n),4&r&&xs(5,n);break;case 1:if(Vs(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){Sd(n,n.return,a)}else{var i=Sl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){Sd(n,n.return,l)}}64&r&&vs(n),512&r&&ws(n,n.return);break;case 3:if(Vs(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{Co(e,t)}catch(a){Sd(n,n.return,a)}}break;case 27:null===t&&4&r&&Ls(n);case 26:case 5:Vs(e,n),null===t&&4&r&&js(n),512&r&&ws(n,n.return);break;case 12:Vs(e,n);break;case 31:Vs(e,n),4&r&&Gs(e,n);break;case 13:Vs(e,n),4&r&&Hs(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Cd.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||$s)){t=null!==t&&null!==t.memoizedState||Is,i=$s;var o=Is;$s=r,(Is=t)&&!o?Xs(e,n,0!==(8772&n.subtreeFlags)):Vs(e,n),$s=i,Is=o}break;case 30:break;default:Vs(e,n)}}function Ns(e){var t=e.alternate;null!==t&&(e.alternate=null,Ns(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&qe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var zs=null,Ds=!1;function Bs(e,t,n){for(n=n.child;null!==n;)Ms(e,t,n),n=n.sibling}function Ms(e,t,n){if(be&&"function"===typeof be.onCommitFiberUnmount)try{be.onCommitFiberUnmount(xe,n)}catch(o){}switch(n.tag){case 26:Is||Es(n,t),Bs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Is||Es(n,t);var r=zs,i=Ds;ku(n.type)&&(zs=n.stateNode,Ds=!1),Bs(e,t,n),Bu(n.stateNode),zs=r,Ds=i;break;case 5:Is||Es(n,t);case 6:if(r=zs,i=Ds,zs=null,Bs(e,t,n),Ds=i,null!==(zs=r))if(Ds)try{(9===zs.nodeType?zs.body:"HTML"===zs.nodeName?zs.ownerDocument.body:zs).removeChild(n.stateNode)}catch(a){Sd(n,t,a)}else try{zs.removeChild(n.stateNode)}catch(a){Sd(n,t,a)}break;case 18:null!==zs&&(Ds?(Cu(9===(e=zs).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),_h(e)):Cu(zs,n.stateNode));break;case 4:r=zs,i=Ds,zs=n.stateNode.containerInfo,Ds=!0,Bs(e,t,n),zs=r,Ds=i;break;case 0:case 11:case 14:case 15:bs(2,n,t),Is||bs(4,n,t),Bs(e,t,n);break;case 1:Is||(Es(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&ys(n,t,r)),Bs(e,t,n);break;case 21:Bs(e,t,n);break;case 22:Is=(r=Is)||null!==n.memoizedState,Bs(e,t,n),Is=r;break;default:Bs(e,t,n)}}function Gs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{_h(e)}catch(n){Sd(t,t.return,n)}}}function Hs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{_h(e)}catch(n){Sd(t,t.return,n)}}function Ws(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Fs),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Fs),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ld.bind(null,e,t);t.then(r,r)}})}function Us(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(ku(s.type)){zs=s.stateNode,Ds=!1;break e}break;case 5:zs=s.stateNode,Ds=!1;break e;case 3:case 4:zs=s.stateNode.containerInfo,Ds=!0;break e}s=s.return}if(null===zs)throw Error(a(160));Ms(o,l,i),zs=null,Ds=!1,null!==(o=i.alternate)&&(o.return=null),i.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)Ys(t,e),t=t.sibling}var _s=null;function Ys(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Us(t,e),Qs(e),4&r&&(bs(3,e,e.return),xs(3,e),bs(5,e,e.return));break;case 1:Us(t,e),Qs(e),512&r&&(Is||null===n||Es(n,n.return)),64&r&&$s&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=_s;if(Us(t,e),Qs(e),512&r&&(Is||null===n||Es(n,n.return)),4&r){var o=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(o=i.getElementsByTagName("title")[0])||o[Ve]||o[He]||"http://www.w3.org/2000/svg"===o.namespaceURI||o.hasAttribute("itemprop"))&&(o=i.createElement(r),i.head.insertBefore(o,i.querySelector("head > title"))),pu(o,r,n),o[He]=e,tt(o),r=o;break e;case"link":var l=rh("link","href",i).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((o=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&o.getAttribute("rel")===(null==n.rel?null:n.rel)&&o.getAttribute("title")===(null==n.title?null:n.title)&&o.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}pu(o=i.createElement(r),r,n),i.head.appendChild(o);break;case"meta":if(l=rh("meta","content",i).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((o=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&o.getAttribute("name")===(null==n.name?null:n.name)&&o.getAttribute("property")===(null==n.property?null:n.property)&&o.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&o.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}pu(o=i.createElement(r),r,n),i.head.appendChild(o);break;default:throw Error(a(468,r))}o[He]=e,tt(o),r=o}e.stateNode=r}else ih(i,e.type,e.stateNode);else e.stateNode=Ju(i,r,e.memoizedProps);else o!==r?(null===o?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):o.count--,null===r?ih(i,e.type,e.stateNode):Ju(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Ss(e,e.memoizedProps,n.memoizedProps)}break;case 27:Us(t,e),Qs(e),512&r&&(Is||null===n||Es(n,n.return)),null!==n&&4&r&&Ss(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Us(t,e),Qs(e),512&r&&(Is||null===n||Es(n,n.return)),32&e.flags){i=e.stateNode;try{Tt(i,"")}catch(g){Sd(e,e.return,g)}}4&r&&null!=e.stateNode&&Ss(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(Ps=!0);break;case 6:if(Us(t,e),Qs(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(g){Sd(e,e.return,g)}}break;case 3:if(nh=null,i=_s,_s=Hu(t.containerInfo),Us(t,e),_s=i,Qs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{_h(t.containerInfo)}catch(g){Sd(e,e.return,g)}Ps&&(Ps=!1,Zs(e));break;case 4:r=_s,_s=Hu(e.stateNode.containerInfo),Us(t,e),Qs(e),_s=r;break;case 12:default:Us(t,e),Qs(e);break;case 31:case 19:Us(t,e),Qs(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 13:Us(t,e),Qs(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(Fc=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ws(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,d=$s,u=Is;if($s=d||i,Is=u||c,Us(t,e),Is=u,$s=d,Qs(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||$s||Is||qs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(o=c.stateNode,i)"function"===typeof(l=o.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var h=c.memoizedProps.style,p=void 0!==h&&null!==h&&h.hasOwnProperty("display")?h.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(g){Sd(c,c.return,g)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(g){Sd(c,c.return,g)}}}else if(18===t.tag){if(null===n){c=t;try{var f=c.stateNode;i?Lu(f,!0):Lu(c.stateNode,!1)}catch(g){Sd(c,c.return,g)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ws(e,n))));case 30:case 21:}}function Qs(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(Ts(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var i=n.stateNode;Cs(e,As(e),i);break;case 5:var o=n.stateNode;32&n.flags&&(Tt(o,""),n.flags&=-33),Cs(e,As(e),o);break;case 3:case 4:var l=n.stateNode.containerInfo;ks(e,As(e),l);break;default:throw Error(a(161))}}catch(s){Sd(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Zs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Zs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Vs(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Os(e,t.alternate,t),t=t.sibling}function qs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:bs(4,t,t.return),qs(t);break;case 1:Es(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&ys(t,t.return,n),qs(t);break;case 27:Bu(t.stateNode);case 26:case 5:Es(t,t.return),qs(t);break;case 22:null===t.memoizedState&&qs(t);break;default:qs(t)}e=e.sibling}}function Xs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,o=t,a=o.flags;switch(o.tag){case 0:case 11:case 15:Xs(i,o,n),xs(4,o);break;case 1:if(Xs(i,o,n),"function"===typeof(i=(r=o).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){Sd(r,r.return,c)}if(null!==(i=(r=o).updateQueue)){var l=r.stateNode;try{var s=i.shared.hiddenCallbacks;if(null!==s)for(i.shared.hiddenCallbacks=null,i=0;i<s.length;i++)ko(s[i],l)}catch(c){Sd(r,r.return,c)}}n&&64&a&&vs(o),ws(o,o.return);break;case 27:Ls(o);case 26:case 5:Xs(i,o,n),n&&null===r&&4&a&&js(o),ws(o,o.return);break;case 12:Xs(i,o,n);break;case 31:Xs(i,o,n),n&&4&a&&Gs(i,o);break;case 13:Xs(i,o,n),n&&4&a&&Hs(i,o);break;case 22:null===o.memoizedState&&Xs(i,o,n),ws(o,o.return);break;case 30:break;default:Xs(i,o,n)}t=t.sibling}}function Js(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Gi(n))}function Ks(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Gi(e))}function ec(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)tc(e,t,n,r),t=t.sibling}function tc(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ec(e,t,n,r),2048&i&&xs(9,t);break;case 1:case 31:case 13:default:ec(e,t,n,r);break;case 3:ec(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Gi(e)));break;case 12:if(2048&i){ec(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,a=o.id,l=o.onPostCommit;"function"===typeof l&&l(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Sd(t,t.return,s)}}else ec(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,a=t.alternate,null!==t.memoizedState?2&o._visibility?ec(e,t,n,r):rc(e,t):2&o._visibility?ec(e,t,n,r):(o._visibility|=2,nc(e,t,n,r,0!==(10256&t.subtreeFlags)||!1)),2048&i&&Js(a,t);break;case 24:ec(e,t,n,r),2048&i&&Ks(t.alternate,t)}}function nc(e,t,n,r,i){for(i=i&&(0!==(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,a=t,l=n,s=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:nc(o,a,l,s,i),xs(8,a);break;case 23:break;case 22:var d=a.stateNode;null!==a.memoizedState?2&d._visibility?nc(o,a,l,s,i):rc(o,a):(d._visibility|=2,nc(o,a,l,s,i)),i&&2048&c&&Js(a.alternate,a);break;case 24:nc(o,a,l,s,i),i&&2048&c&&Ks(a.alternate,a);break;default:nc(o,a,l,s,i)}t=t.sibling}}function rc(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:rc(n,r),2048&i&&Js(r.alternate,r);break;case 24:rc(n,r),2048&i&&Ks(r.alternate,r);break;default:rc(n,r)}t=t.sibling}}var ic=8192;function oc(e,t,n){if(e.subtreeFlags&ic)for(e=e.child;null!==e;)ac(e,t,n),e=e.sibling}function ac(e,t,n){switch(e.tag){case 26:oc(e,t,n),e.flags&ic&&null!==e.memoizedState&&function(e,t,n,r){if("stylesheet"===n.type&&("string"!==typeof r.media||!1!==matchMedia(r.media).matches)&&0===(4&n.state.loading)){if(null===n.instance){var i=Qu(r.href),o=t.querySelector(Zu(i));if(o)return null!==(t=o._p)&&"object"===typeof t&&"function"===typeof t.then&&(e.count++,e=lh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void tt(o);o=t.ownerDocument||t,r=Vu(r),(i=Mu.get(i))&&eh(r,i),tt(o=o.createElement("link"));var a=o;a._p=new Promise(function(e,t){a.onload=e,a.onerror=t}),pu(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&0===(3&n.state.loading)&&(e.count++,n=lh.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,_s,e.memoizedState,e.memoizedProps);break;case 5:default:oc(e,t,n);break;case 3:case 4:var r=_s;_s=Hu(e.stateNode.containerInfo),oc(e,t,n),_s=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=ic,ic=16777216,oc(e,t,n),ic=r):oc(e,t,n))}}function lc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function sc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,uc(r,e)}lc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)cc(e),e=e.sibling}function cc(e){switch(e.tag){case 0:case 11:case 15:sc(e),2048&e.flags&&bs(9,e,e.return);break;case 3:case 12:default:sc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,dc(e)):sc(e)}}function dc(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Rs=r,uc(r,e)}lc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:bs(8,t,t.return),dc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,dc(t));break;default:dc(t)}e=e.sibling}}function uc(e,t){for(;null!==Rs;){var n=Rs;switch(n.tag){case 0:case 11:case 15:bs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Gi(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Rs=r;else e:for(n=e;null!==Rs;){var i=(r=Rs).sibling,o=r.return;if(Ns(r),r===n){Rs=null;break e}if(null!==i){i.return=o,Rs=i;break e}Rs=o}}}var hc={getCacheForType:function(e){var t=Fi(Bi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Fi(Bi).controller.signal}},pc="function"===typeof WeakMap?WeakMap:Map,fc=0,gc=null,mc=null,xc=0,bc=0,vc=null,yc=!1,wc=!1,Ec=!1,jc=0,Sc=0,Tc=0,Ac=0,kc=0,Cc=0,Lc=0,$c=null,Ic=null,Pc=!1,Fc=0,Rc=0,Oc=1/0,Nc=null,zc=null,Dc=0,Bc=null,Mc=null,Gc=0,Hc=0,Wc=null,Uc=null,_c=0,Yc=null;function Qc(){return 0!==(2&fc)&&0!==xc?xc&-xc:null!==R.T?Wd():Be()}function Zc(){if(0===Cc)if(0===(536870912&xc)||hi){var e=Se;0===(3932160&(Se<<=1))&&(Se=262144),Cc=e}else Cc=536870912;return null!==(e=Ro.current)&&(e.flags|=32),Cc}function Vc(e,t,n){(e!==gc||2!==bc&&9!==bc)&&null===e.cancelPendingCommit||(nd(e,0),Kc(e,xc,Cc,!1)),Fe(e,n),0!==(2&fc)&&e===gc||(e===gc&&(0===(2&fc)&&(Ac|=n),4===Sc&&Kc(e,xc,Cc,!1)),Nd(e))}function qc(e,t,n){if(0!==(6&fc))throw Error(a(327));for(var r=!n&&0===(127&t)&&0===(t&e.expiredLanes)||Le(e,t),i=r?function(e,t){var n=fc;fc|=2;var r=od(),i=ad();gc!==e||xc!==t?(Nc=null,Oc=se()+500,nd(e,t)):wc=Le(e,t);e:for(;;)try{if(0!==bc&&null!==mc){t=mc;var o=vc;t:switch(bc){case 1:bc=0,vc=null,pd(e,t,o,1);break;case 2:case 9:if(no(o)){bc=0,vc=null,hd(t);break}t=function(){2!==bc&&9!==bc||gc!==e||(bc=7),Nd(e)},o.then(t,t);break e;case 3:bc=7;break e;case 4:bc=5;break e;case 7:no(o)?(bc=0,vc=null,hd(t)):(bc=0,vc=null,pd(e,t,o,7));break;case 5:var l=null;switch(mc.tag){case 26:l=mc.memoizedState;case 5:case 27:var s=mc;if(l?oh(l):s.stateNode.complete){bc=0,vc=null;var c=s.sibling;if(null!==c)mc=c;else{var d=s.return;null!==d?(mc=d,fd(d)):mc=null}break t}}bc=0,vc=null,pd(e,t,o,5);break;case 6:bc=0,vc=null,pd(e,t,o,6);break;case 8:td(),Sc=6;break e;default:throw Error(a(462))}}dd();break}catch(u){rd(e,u)}return Ti=Si=null,R.H=r,R.A=i,fc=n,null!==mc?0:(gc=null,xc=0,Ir(),Sc)}(e,t):sd(e,t,!0),o=r;;){if(0===i){wc&&!r&&Kc(e,t,0,!1);break}if(n=e.current.alternate,!o||Jc(n)){if(2===i){if(o=t,e.errorRecoveryDisabledLanes&o)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;i=$c;var c=s.current.memoizedState.isDehydrated;if(c&&(nd(s,l).flags|=256),2!==(l=sd(s,l,!1))){if(Ec&&!c){s.errorRecoveryDisabledLanes|=o,Ac|=o,i=4;break e}o=Ic,Ic=i,null!==o&&(null===Ic?Ic=o:Ic.push.apply(Ic,o))}i=l}if(o=!1,2!==i)continue}}if(1===i){nd(e,0),Kc(e,t,0,!0);break}e:{switch(r=e,o=i){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:Kc(r,t,Cc,!yc);break e;case 2:Ic=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(i=Fc+300-se())){if(Kc(r,t,Cc,!yc),0!==Ce(r,0,!0))break e;Gc=t,r.timeoutHandle=Eu(Xc.bind(null,r,n,Ic,Nc,Pc,t,Cc,Ac,Lc,yc,o,"Throttled",-0,0),i)}else Xc(r,n,Ic,Nc,Pc,t,Cc,Ac,Lc,yc,o,null,-0,0)}break}i=sd(e,t,!1),o=!1}Nd(e)}function Xc(e,t,n,r,i,o,a,l,s,c,d,u,h,p){if(e.timeoutHandle=-1,8192&(u=t.subtreeFlags)||16785408===(16785408&u)){ac(t,o,u={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ft});var f=(62914560&o)===o?Fc-se():(4194048&o)===o?Rc-se():0;if(f=function(e,t){return e.stylesheets&&0===e.count&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===ah&&(ah=62500*function(){if("function"===typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],o=i.transferSize,a=i.initiatorType,l=i.duration;if(o&&l&&fu(a)){for(a=0,l=i.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>l)break;var d=s.transferSize,u=s.initiatorType;d&&fu(u)&&(a+=d*((s=s.responseEnd)<l?1:(l-c)/(s-c)))}if(--r,t+=8*(o+a)/(i.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"===typeof(e=navigator.connection.downlink)?e:5}());var i=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>ah?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}(u,f),null!==f)return Gc=o,e.cancelPendingCommit=f(md.bind(null,e,t,o,n,r,i,a,l,s,d,u,null,h,p)),void Kc(e,o,a,!c)}md(e,t,o,n,r,i,a,l,s)}function Jc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Kn(o(),i))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kc(e,t,n,r){t&=~kc,t&=~Ac,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var o=31-ye(i),a=1<<o;r[o]=-1,i&=~a}0!==n&&Re(e,n,t)}function ed(){return 0!==(6&fc)||(zd(0,!1),!1)}function td(){if(null!==mc){if(0===bc)var e=mc.return;else Ti=Si=null,sa(e=mc),so=null,co=0,e=mc;for(;null!==e;)ms(e.alternate,e),e=e.return;mc=null}}function nd(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,ju(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Gc=0,td(),gc=e,mc=n=Gr(e.current,null),xc=t,bc=0,vc=null,yc=!1,wc=Le(e,t),Ec=!1,Lc=Cc=kc=Ac=Tc=Sc=0,Ic=$c=null,Pc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-ye(r),o=1<<i;t|=e[i],r&=~o}return jc=t,Ir(),n}function rd(e,t){Uo=null,R.H=ml,t===Ji||t===eo?(t=ao(),bc=3):t===Ki?(t=ao(),bc=4):bc=t===Fl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,vc=t,null===mc&&(Sc=1,Cl(e,Vr(t,e.current)))}function id(){var e=Ro.current;return null===e||((4194048&xc)===xc?null===Oo:((62914560&xc)===xc||0!==(536870912&xc))&&e===Oo)}function od(){var e=R.H;return R.H=ml,null===e?ml:e}function ad(){var e=R.A;return R.A=hc,e}function ld(){Sc=4,yc||(4194048&xc)!==xc&&null!==Ro.current||(wc=!0),0===(134217727&Tc)&&0===(134217727&Ac)||null===gc||Kc(gc,xc,Cc,!1)}function sd(e,t,n){var r=fc;fc|=2;var i=od(),o=ad();gc===e&&xc===t||(Nc=null,nd(e,t)),t=!1;var a=Sc;e:for(;;)try{if(0!==bc&&null!==mc){var l=mc,s=vc;switch(bc){case 8:td(),a=6;break e;case 3:case 2:case 9:case 6:null===Ro.current&&(t=!0);var c=bc;if(bc=0,vc=null,pd(e,l,s,c),n&&wc){a=0;break e}break;default:c=bc,bc=0,vc=null,pd(e,l,s,c)}}cd(),a=Sc;break}catch(d){rd(e,d)}return t&&e.shellSuspendCounter++,Ti=Si=null,fc=r,R.H=i,R.A=o,null===mc&&(gc=null,xc=0,Ir()),a}function cd(){for(;null!==mc;)ud(mc)}function dd(){for(;null!==mc&&!ae();)ud(mc)}function ud(e){var t=ls(e.alternate,e,jc);e.memoizedProps=e.pendingProps,null===t?fd(e):mc=t}function hd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Yl(n,t,t.pendingProps,t.type,void 0,xc);break;case 11:t=Yl(n,t,t.pendingProps,t.type.render,t.ref,xc);break;case 5:sa(t);default:ms(n,t),t=ls(n,t=mc=Hr(t,jc),jc)}e.memoizedProps=e.pendingProps,null===t?fd(e):mc=t}function pd(e,t,n,r){Ti=Si=null,sa(t),so=null,co=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&$i(t,n,i,!0),null!==(n=Ro.current)){switch(n.tag){case 31:case 13:return null===Oo?ld():null===n.alternate&&0===Sc&&(Sc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===to?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),Td(e,r,i)),!1;case 22:return n.flags|=65536,r===to?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),Td(e,r,i)),!1}throw Error(a(435,n.tag))}return Td(e,r,i),ld(),!1}if(hi)return null!==(t=Ro.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==gi&&Ei(Vr(e=Error(a(422),{cause:r}),n))):(r!==gi&&Ei(Vr(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Vr(r,n),jo(e,i=$l(e.stateNode,r,i)),4!==Sc&&(Sc=2)),!1;var o=Error(a(520),{cause:r});if(o=Vr(o,n),null===$c?$c=[o]:$c.push(o),4!==Sc&&(Sc=2),null===t)return!0;r=Vr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,jo(n,e=$l(n.stateNode,r,e)),!1;case 1:if(t=n.type,o=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==o&&"function"===typeof o.componentDidCatch&&(null===zc||!zc.has(o))))return n.flags|=65536,i&=-i,n.lanes|=i,Pl(i=Il(i),e,n,r),jo(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,xc))return Sc=1,Cl(e,Vr(n,e.current)),void(mc=null)}catch(o){if(null!==i)throw mc=i,o;return Sc=1,Cl(e,Vr(n,e.current)),void(mc=null)}32768&t.flags?(hi||1===r?e=!0:wc||0!==(536870912&xc)?e=!1:(yc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=Ro.current)&&13===r.tag&&(r.flags|=16384))),gd(t,e)):fd(t)}function fd(e){var t=e;do{if(0!==(32768&t.flags))return void gd(t,yc);e=t.return;var n=fs(t.alternate,t,jc);if(null!==n)return void(mc=n);if(null!==(t=t.sibling))return void(mc=t);mc=t=e}while(null!==t);0===Sc&&(Sc=5)}function gd(e,t){do{var n=gs(e.alternate,e);if(null!==n)return n.flags&=32767,void(mc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(mc=e);mc=e=n}while(null!==e);Sc=6,mc=null}function md(e,t,n,r,i,o,l,s,c){e.cancelPendingCommit=null;do{wd()}while(0!==Dc);if(0!==(6&fc))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(o=t.lanes|t.childLanes,function(e,t,n,r,i,o){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var d=31-ye(n),u=1<<d;l[d]=0,s[d]=-1;var h=c[d];if(null!==h)for(c[d]=null,d=0;d<h.length;d++){var p=h[d];null!==p&&(p.lane&=-536870913)}n&=~u}0!==r&&Re(e,r,0),0!==o&&0===i&&0!==e.tag&&(e.suspendedLanes|=o&~(a&~t))}(e,n,o|=$r,l,s,c),e===gc&&(mc=gc=null,xc=0),Mc=t,Bc=e,Gc=n,Hc=o,Wc=i,Uc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,ie(he,function(){return Ed(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=R.T,R.T=null,i=O.p,O.p=2,l=fc,fc|=4;try{!function(e,t){if(e=e.containerInfo,gu=yh,or(e=ir(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(m){n=null;break e}var l=0,s=-1,c=-1,d=0,u=0,h=e,p=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(s=l+i),h!==o||0!==r&&3!==h.nodeType||(c=l+r),3===h.nodeType&&(l+=h.nodeValue.length),null!==(f=h.firstChild);)p=h,h=f;for(;;){if(h===e)break t;if(p===n&&++d===i&&(s=l),p===o&&++u===r&&(c=l),null!==(f=h.nextSibling))break;p=(h=p).parentNode}h=f}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},yh=!1,Rs=t;null!==Rs;)if(e=(t=Rs).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Rs=e;else for(;null!==Rs;){switch(o=(t=Rs).alternate,e=t.flags,t.tag){case 0:if(0!==(4&e)&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(i=e[n]).ref.impl=i.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==o){e=void 0,n=t,i=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var g=Sl(n.type,i);e=r.getSnapshotBeforeUpdate(g,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(x){Sd(n,n.return,x)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))$u(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$u(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,Rs=e;break}Rs=t.return}}(e,t)}finally{fc=l,O.p=i,R.T=r}}Dc=1,xd(),bd(),vd()}}function xd(){if(1===Dc){Dc=0;var e=Bc,t=Mc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=R.T,R.T=null;var r=O.p;O.p=2;var i=fc;fc|=4;try{Ys(t,e);var o=mu,a=ir(e.containerInfo),l=o.focusedElem,s=o.selectionRange;if(a!==l&&l&&l.ownerDocument&&rr(l.ownerDocument.documentElement,l)){if(null!==s&&or(l)){var c=s.start,d=s.end;if(void 0===d&&(d=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(d,l.value.length);else{var u=l.ownerDocument||document,h=u&&u.defaultView||window;if(h.getSelection){var p=h.getSelection(),f=l.textContent.length,g=Math.min(s.start,f),m=void 0===s.end?g:Math.min(s.end,f);!p.extend&&g>m&&(a=m,m=g,g=a);var x=nr(l,g),b=nr(l,m);if(x&&b&&(1!==p.rangeCount||p.anchorNode!==x.node||p.anchorOffset!==x.offset||p.focusNode!==b.node||p.focusOffset!==b.offset)){var v=u.createRange();v.setStart(x.node,x.offset),p.removeAllRanges(),g>m?(p.addRange(v),p.extend(b.node,b.offset)):(v.setEnd(b.node,b.offset),p.addRange(v))}}}}for(u=[],p=l;p=p.parentNode;)1===p.nodeType&&u.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<u.length;l++){var y=u[l];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}yh=!!gu,mu=gu=null}finally{fc=i,O.p=r,R.T=n}}e.current=t,Dc=2}}function bd(){if(2===Dc){Dc=0;var e=Bc,t=Mc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=R.T,R.T=null;var r=O.p;O.p=2;var i=fc;fc|=4;try{Os(e,t.alternate,t)}finally{fc=i,O.p=r,R.T=n}}Dc=3}}function vd(){if(4===Dc||3===Dc){Dc=0,le();var e=Bc,t=Mc,n=Gc,r=Uc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Dc=5:(Dc=0,Mc=Bc=null,yd(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(zc=null),De(n),t=t.stateNode,be&&"function"===typeof be.onCommitFiberRoot)try{be.onCommitFiberRoot(xe,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=R.T,i=O.p,O.p=2,R.T=null;try{for(var o=e.onRecoverableError,a=0;a<r.length;a++){var l=r[a];o(l.value,{componentStack:l.stack})}}finally{R.T=t,O.p=i}}0!==(3&Gc)&&wd(),Nd(e),i=e.pendingLanes,0!==(261930&n)&&0!==(42&i)?e===Yc?_c++:(_c=0,Yc=e):_c=0,zd(0,!1)}}function yd(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Gi(t)))}function wd(){return xd(),bd(),vd(),Ed()}function Ed(){if(5!==Dc)return!1;var e=Bc,t=Hc;Hc=0;var n=De(Gc),r=R.T,i=O.p;try{O.p=32>n?32:n,R.T=null,n=Wc,Wc=null;var o=Bc,l=Gc;if(Dc=0,Mc=Bc=null,Gc=0,0!==(6&fc))throw Error(a(331));var s=fc;if(fc|=4,cc(o.current),tc(o,o.current,l,n),fc=s,zd(0,!1),be&&"function"===typeof be.onPostCommitFiberRoot)try{be.onPostCommitFiberRoot(xe,o)}catch(c){}return!0}finally{O.p=i,R.T=r,yd(e,t)}}function jd(e,t,n){t=Vr(n,t),null!==(e=wo(e,t=$l(e.stateNode,t,2),2))&&(Fe(e,2),Nd(e))}function Sd(e,t,n){if(3===e.tag)jd(e,e,n);else for(;null!==t;){if(3===t.tag){jd(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===zc||!zc.has(r))){e=Vr(n,e),null!==(r=wo(t,n=Il(2),2))&&(Pl(n,r,t,e),Fe(r,2),Nd(r));break}}t=t.return}}function Td(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(Ec=!0,i.add(n),e=Ad.bind(null,e,t,n),t.then(e,e))}function Ad(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,gc===e&&(xc&n)===n&&(4===Sc||3===Sc&&(62914560&xc)===xc&&300>se()-Fc?0===(2&fc)&&nd(e,0):kc|=n,Lc===xc&&(Lc=0)),Nd(e)}function kd(e,t){0===t&&(t=Ie()),null!==(e=Rr(e,t))&&(Fe(e,t),Nd(e))}function Cd(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),kd(e,n)}function Ld(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),kd(e,n)}var $d=null,Id=null,Pd=!1,Fd=!1,Rd=!1,Od=0;function Nd(e){e!==Id&&null===e.next&&(null===Id?$d=Id=e:Id=Id.next=e),Fd=!0,Pd||(Pd=!0,Tu(function(){0!==(6&fc)?ie(de,Dd):Bd()}))}function zd(e,t){if(!Rd&&Fd){Rd=!0;do{for(var n=!1,r=$d;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var o=0;else{var a=r.suspendedLanes,l=r.pingedLanes;o=(1<<31-ye(42|e)+1)-1,o=201326741&(o&=i&~(a&~l))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Hd(r,o))}else o=xc,0===(3&(o=Ce(r,r===gc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||Le(r,o)||(n=!0,Hd(r,o));r=r.next}}while(n);Rd=!1}}function Dd(){Bd()}function Bd(){Fd=Pd=!1;var e=0;0!==Od&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==wu&&(wu=e,!0);return wu=null,!1}()&&(e=Od);for(var t=se(),n=null,r=$d;null!==r;){var i=r.next,o=Md(r,t);0===o?(r.next=null,null===n?$d=i:n.next=i,null===i&&(Id=n)):(n=r,(0!==e||0!==(3&o))&&(Fd=!0)),r=i}0!==Dc&&5!==Dc||zd(e,!1),0!==Od&&(Od=0)}function Md(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var a=31-ye(o),l=1<<a,s=i[a];-1===s?0!==(l&n)&&0===(l&r)||(i[a]=$e(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}if(n=xc,n=Ce(e,e===(t=gc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===bc||9===bc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&oe(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Le(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&oe(r),De(n)){case 2:case 8:n=ue;break;case 32:default:n=he;break;case 268435456:n=fe}return r=Gd.bind(null,e),n=ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&oe(r),e.callbackPriority=2,e.callbackNode=null,2}function Gd(e,t){if(0!==Dc&&5!==Dc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wd()&&e.callbackNode!==n)return null;var r=xc;return 0===(r=Ce(e,e===gc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(qc(e,r,t),Md(e,se()),null!=e.callbackNode&&e.callbackNode===n?Gd.bind(null,e):null)}function Hd(e,t){if(wd())return null;qc(e,t,!0)}function Wd(){if(0===Od){var e=Ui;0===e&&(e=je,0===(261888&(je<<=1))&&(je=256)),Od=e}return Od}function Ud(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Pt(""+e)}function _d(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Yd=0;Yd<Tr.length;Yd++){var Qd=Tr[Yd];Ar(Qd.toLowerCase(),"on"+(Qd[0].toUpperCase()+Qd.slice(1)))}Ar(xr,"onAnimationEnd"),Ar(br,"onAnimationIteration"),Ar(vr,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(yr,"onTransitionRun"),Ar(wr,"onTransitionStart"),Ar(Er,"onTransitionCancel"),Ar(jr,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zd));function qd(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=c;try{o(i)}catch(d){kr(d)}i.currentTarget=null,o=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;o=l,i.currentTarget=c;try{o(i)}catch(d){kr(d)}i.currentTarget=null,o=s}}}}function Xd(e,t){var n=t[_e];void 0===n&&(n=t[_e]=new Set);var r=e+"__bubble";n.has(r)||(tu(t,e,2,!1),n.add(r))}function Jd(e,t,n){var r=0;t&&(r|=4),tu(n,e,r,t)}var Kd="_reactListening"+Math.random().toString(36).slice(2);function eu(e){if(!e[Kd]){e[Kd]=!0,nt.forEach(function(t){"selectionchange"!==t&&(Vd.has(t)||Jd(t,!1,e),Jd(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Kd]||(t[Kd]=!0,Jd("selectionchange",!1,t))}}function tu(e,t,n,r){switch(kh(t)){case 2:var i=wh;break;case 8:i=Eh;break;default:i=jh}n=i.bind(null,t,n,e),i=void 0,!Wt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function nu(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===i)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&a.stateNode.containerInfo===i)return;a=a.return}for(;null!==l;){if(null===(a=Xe(l)))return;if(5===(c=a.tag)||6===c||26===c||27===c){r=o=a;continue e}l=l.parentNode}}r=r.return}Mt(function(){var r=o,i=Ot(n),a=[];e:{var l=Sr.get(e);if(void 0!==l){var c=rn,d=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":c=vn;break;case"focusin":d="focus",c=dn;break;case"focusout":d="blur",c=dn;break;case"beforeblur":case"afterblur":c=dn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=cn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=wn;break;case xr:case br:case vr:c=un;break;case jr:c=En;break;case"scroll":case"scrollend":c=an;break;case"wheel":c=jn;break;case"copy":case"cut":case"paste":c=hn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=yn;break;case"toggle":case"beforetoggle":c=Sn}var u=0!==(4&t),h=!u&&("scroll"===e||"scrollend"===e),p=u?null!==l?l+"Capture":null:l;u=[];for(var f,g=r;null!==g;){var m=g;if(f=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===f||null===p||null!=(m=Gt(g,p))&&u.push(ru(g,m,f)),h)break;g=g.return}0<u.length&&(l=new c(l,d,null,n,i),a.push({event:l,listeners:u}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Rt||!(d=n.relatedTarget||n.fromElement)||!Xe(d)&&!d[Ue])&&(c||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(d=(d=n.relatedTarget||n.toElement)?Xe(d):null)&&(h=s(d),u=d.tag,d!==h||5!==u&&27!==u&&6!==u)&&(d=null)):(c=null,d=r),c!==d)){if(u=sn,m="onMouseLeave",p="onMouseEnter",g="mouse","pointerout"!==e&&"pointerover"!==e||(u=yn,m="onPointerLeave",p="onPointerEnter",g="pointer"),h=null==c?l:Ke(c),f=null==d?l:Ke(d),(l=new u(m,g+"leave",c,n,i)).target=h,l.relatedTarget=f,m=null,Xe(i)===r&&((u=new u(p,g+"enter",d,n,i)).target=f,u.relatedTarget=h,m=u),h=m,c&&d)e:{for(u=ou,g=d,f=0,m=p=c;m;m=u(m))f++;m=0;for(var x=g;x;x=u(x))m++;for(;0<f-m;)p=u(p),f--;for(;0<m-f;)g=u(g),m--;for(;f--;){if(p===g||null!==g&&p===g.alternate){u=p;break e}p=u(p),g=u(g)}u=null}else u=null;null!==c&&au(a,l,c,u,!1),null!==d&&null!==h&&au(a,h,d,u,!0)}if("select"===(c=(l=r?Ke(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var b=Hn;else if(Nn(l))if(Wn)b=Jn;else{b=qn;var v=Vn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Lt(r.elementType)&&(b=Hn):b=Xn;switch(b&&(b=b(e,r))?zn(a,b,n,i):(v&&v(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&wt(l,"number",l.value)),v=r?Ke(r):window,e){case"focusin":(Nn(v)||"true"===v.contentEditable)&&(lr=v,sr=r,cr=null);break;case"focusout":cr=sr=lr=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,ur(a,n,i);break;case"selectionchange":if(ar)break;case"keydown":case"keyup":ur(a,n,i)}var y;if(An)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Rn?Pn(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Ln&&"ko"!==n.locale&&(Rn||"onCompositionStart"!==w?"onCompositionEnd"===w&&Rn&&(y=Zt()):(Yt="value"in(_t=i)?_t.value:_t.textContent,Rn=!0)),0<(v=iu(r,w)).length&&(w=new pn(w,e,null,n,i),a.push({event:w,listeners:v}),y?w.data=y:null!==(y=Fn(n))&&(w.data=y))),(y=Cn?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(In=!0,$n);case"textInput":return(e=t.data)===$n&&In?null:e;default:return null}}(e,n):function(e,t){if(Rn)return"compositionend"===e||!An&&Pn(e,t)?(e=Zt(),Qt=Yt=_t=null,Rn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ln&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(w=iu(r,"onBeforeInput")).length&&(v=new pn("onBeforeInput","beforeinput",null,n,i),a.push({event:v,listeners:w}),v.data=y)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var o=Ud((i[We]||null).action),a=r.submitter;a&&null!==(t=(t=a[We]||null)?Ud(t.formAction):a.getAttribute("formAction"))&&(o=t,a=null);var l=new rn("action","action",null,r,i);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Od){var e=a?_d(i,a):new FormData(i);nl(n,{pending:!0,data:e,method:i.method,action:o},null,e)}}else"function"===typeof o&&(l.preventDefault(),e=a?_d(i,a):new FormData(i),nl(n,{pending:!0,data:e,method:i.method,action:o},o,e))},currentTarget:i}]})}}(a,e,r,n,i)}qd(a,t)})}function ru(e,t,n){return{instance:e,listener:t,currentTarget:n}}function iu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===o||(null!=(i=Gt(e,n))&&r.unshift(ru(e,i,o)),null!=(i=Gt(e,t))&&r.push(ru(e,i,o))),3===e.tag)return r;e=e.return}return[]}function ou(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function au(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,i?null!=(c=Gt(n,o))&&a.unshift(ru(n,c,s)):i||null!=(c=Gt(n,o))&&a.push(ru(n,c,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var lu=/\r\n?/g,su=/\u0000|\uFFFD/g;function cu(e){return("string"===typeof e?e:""+e).replace(lu,"\n").replace(su,"")}function du(e,t){return t=cu(t),cu(e)===t}function uu(e,t,n,r,i,o){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||Tt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&Tt(e,""+r);break;case"className":dt(e,"class",r);break;case"tabIndex":dt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":dt(e,n,r);break;case"style":Ct(e,r,o);break;case"data":if("object"!==t){dt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof o&&("formAction"===n?("input"!==t&&uu(e,t,"name",i.name,i,null),uu(e,t,"formEncType",i.formEncType,i,null),uu(e,t,"formMethod",i.formMethod,i,null),uu(e,t,"formTarget",i.formTarget,i,null)):(uu(e,t,"encType",i.encType,i,null),uu(e,t,"method",i.method,i,null),uu(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Ft);break;case"onScroll":null!=r&&Xd("scroll",e);break;case"onScrollEnd":null!=r&&Xd("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Pt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Xd("beforetoggle",e),Xd("toggle",e),ct(e,"popover",r);break;case"xlinkActuate":ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ct(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ct(e,n=$t.get(n)||n,r)}}function hu(e,t,n,r,i,o){switch(n){case"style":Ct(e,r,o);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?Tt(e,r):("number"===typeof r||"bigint"===typeof r)&&Tt(e,""+r);break;case"onScroll":null!=r&&Xd("scroll",e);break;case"onScrollEnd":null!=r&&Xd("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Ft);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:rt.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(o=null!=(o=e[We]||null)?o[n]:null)&&e.removeEventListener(t,o,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):ct(e,n,r):("function"!==typeof o&&null!==o&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function pu(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xd("error",e),Xd("load",e);var r,i=!1,o=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:uu(e,t,r,l,n,null)}}return o&&uu(e,t,"srcSet",n.srcSet,n,null),void(i&&uu(e,t,"src",n.src,n,null));case"input":Xd("invalid",e);var s=r=l=o=null,c=null,d=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(null!=u)switch(i){case"name":o=u;break;case"type":l=u;break;case"checked":c=u;break;case"defaultChecked":d=u;break;case"value":r=u;break;case"defaultValue":s=u;break;case"children":case"dangerouslySetInnerHTML":if(null!=u)throw Error(a(137,t));break;default:uu(e,t,i,u,n,null)}}return void yt(e,r,s,c,d,l,o,!1);case"select":for(o in Xd("invalid",e),i=l=r=null,n)if(n.hasOwnProperty(o)&&null!=(s=n[o]))switch(o){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":i=s;default:uu(e,t,o,s,n,null)}return t=r,n=l,e.multiple=!!i,void(null!=t?Et(e,!!i,t,!1):null!=n&&Et(e,!!i,n,!0));case"textarea":for(l in Xd("invalid",e),r=o=i=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":i=s;break;case"defaultValue":o=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(a(91));break;default:uu(e,t,l,s,n,null)}return void St(e,i,o,r);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else uu(e,t,c,i,n,null);return;case"dialog":Xd("beforetoggle",e),Xd("toggle",e),Xd("cancel",e),Xd("close",e);break;case"iframe":case"object":Xd("load",e);break;case"video":case"audio":for(i=0;i<Zd.length;i++)Xd(Zd[i],e);break;case"image":Xd("error",e),Xd("load",e);break;case"details":Xd("toggle",e);break;case"embed":case"source":case"link":Xd("error",e),Xd("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&null!=(i=n[d]))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:uu(e,t,d,i,n,null)}return;default:if(Lt(t)){for(u in n)n.hasOwnProperty(u)&&(void 0!==(i=n[u])&&hu(e,t,u,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(i=n[s])&&uu(e,t,s,i,n,null))}function fu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var gu=null,mu=null;function xu(e){return 9===e.nodeType?e:e.ownerDocument}function bu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vu(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function yu(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var wu=null;var Eu="function"===typeof setTimeout?setTimeout:void 0,ju="function"===typeof clearTimeout?clearTimeout:void 0,Su="function"===typeof Promise?Promise:void 0,Tu="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Su?function(e){return Su.resolve(null).then(e).catch(Au)}:Eu;function Au(e){setTimeout(function(){throw e})}function ku(e){return"head"===e}function Cu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)||"/&"===n){if(0===r)return e.removeChild(i),void _h(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Bu(e.ownerDocument.documentElement);else if("head"===n){Bu(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var a=o.nextSibling,l=o.nodeName;o[Ve]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=a}}else"body"===n&&Bu(e.ownerDocument.body);n=i}while(n);_h(t)}function Lu(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function $u(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$u(n),qe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function Iu(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Ru(e.nextSibling)))return null}return e}function Pu(e){return"$?"===e.data||"$~"===e.data}function Fu(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Ru(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Ou=null;function Nu(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Ru(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function zu(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Du(e,t,n){switch(t=xu(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function Bu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);qe(e)}var Mu=new Map,Gu=new Set;function Hu(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Wu=O.d;O.d={f:function(){var e=Wu.f(),t=ed();return e||t},r:function(e){var t=Je(e);null!==t&&5===t.tag&&"form"===t.type?il(t):Wu.r(e)},D:function(e){Wu.D(e),_u("dns-prefetch",e,null)},C:function(e,t){Wu.C(e,t),_u("preconnect",e,t)},L:function(e,t,n){Wu.L(e,t,n);var r=Uu;if(r&&e&&t){var i='link[rel="preload"][as="'+bt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+bt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+bt(n.imageSizes)+'"]')):i+='[href="'+bt(e)+'"]';var o=i;switch(t){case"style":o=Qu(e);break;case"script":o=qu(e)}Mu.has(o)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Mu.set(o,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Zu(o))||"script"===t&&r.querySelector(Xu(o))||(pu(t=r.createElement("link"),"link",e),tt(t),r.head.appendChild(t)))}},m:function(e,t){Wu.m(e,t);var n=Uu;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+bt(r)+'"][href="'+bt(e)+'"]',o=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=qu(e)}if(!Mu.has(o)&&(e=p({rel:"modulepreload",href:e},t),Mu.set(o,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xu(o)))return}pu(r=n.createElement("link"),"link",e),tt(r),n.head.appendChild(r)}}},X:function(e,t){Wu.X(e,t);var n=Uu;if(n&&e){var r=et(n).hoistableScripts,i=qu(e),o=r.get(i);o||((o=n.querySelector(Xu(i)))||(e=p({src:e,async:!0},t),(t=Mu.get(i))&&th(e,t),tt(o=n.createElement("script")),pu(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}},S:function(e,t,n){Wu.S(e,t,n);var r=Uu;if(r&&e){var i=et(r).hoistableStyles,o=Qu(e);t=t||"default";var a=i.get(o);if(!a){var l={loading:0,preload:null};if(a=r.querySelector(Zu(o)))l.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mu.get(o))&&eh(e,n);var s=a=r.createElement("link");tt(s),pu(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ku(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:l},i.set(o,a)}}},M:function(e,t){Wu.M(e,t);var n=Uu;if(n&&e){var r=et(n).hoistableScripts,i=qu(e),o=r.get(i);o||((o=n.querySelector(Xu(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=Mu.get(i))&&th(e,t),tt(o=n.createElement("script")),pu(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(i,o))}}};var Uu="undefined"===typeof document?null:document;function _u(e,t,n){var r=Uu;if(r&&"string"===typeof t&&t){var i=bt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),Gu.has(i)||(Gu.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(pu(t=r.createElement("link"),"link",e),tt(t),r.head.appendChild(t)))}}function Yu(e,t,n,r){var i,o,l,s,c=(c=Y.current)?Hu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Qu(n.href),(r=(n=et(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Qu(n.href);var d=et(c).hoistableStyles,u=d.get(e);if(u||(c=c.ownerDocument||c,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,u),(d=c.querySelector(Zu(e)))&&!d._p&&(u.instance=d,u.state.loading=5),Mu.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mu.set(e,n),d||(i=c,o=e,l=n,s=u.state,i.querySelector('link[rel="preload"][as="style"]['+o+"]")?s.loading=1:(o=i.createElement("link"),s.preload=o,o.addEventListener("load",function(){return s.loading|=1}),o.addEventListener("error",function(){return s.loading|=2}),pu(o,"link",l),tt(o),i.head.appendChild(o))))),t&&null===r)throw Error(a(528,""));return u}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=qu(n),(r=(n=et(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Qu(e){return'href="'+bt(e)+'"'}function Zu(e){return'link[rel="stylesheet"]['+e+"]"}function Vu(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function qu(e){return'[src="'+bt(e)+'"]'}function Xu(e){return"script[async]"+e}function Ju(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+bt(n.href)+'"]');if(r)return t.instance=r,tt(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return tt(r=(e.ownerDocument||e).createElement("style")),pu(r,"style",i),Ku(r,n.precedence,e),t.instance=r;case"stylesheet":i=Qu(n.href);var o=e.querySelector(Zu(i));if(o)return t.state.loading|=4,t.instance=o,tt(o),o;r=Vu(n),(i=Mu.get(i))&&eh(r,i),tt(o=(e.ownerDocument||e).createElement("link"));var l=o;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),pu(o,"link",r),t.state.loading|=4,Ku(o,n.precedence,e),t.instance=o;case"script":return o=qu(n.src),(i=e.querySelector(Xu(o)))?(t.instance=i,tt(i),i):(r=n,(i=Mu.get(o))&&th(r=p({},n),i),tt(i=(e=e.ownerDocument||e).createElement("script")),pu(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ku(r,n.precedence,e));return t.instance}function Ku(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,o=i,a=0;a<r.length;a++){var l=r[a];if(l.dataset.precedence===t)o=l;else if(o!==i)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function eh(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function th(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var nh=null;function rh(e,t,n){if(null===nh){var r=new Map,i=nh=new Map;i.set(n,r)}else(r=(i=nh).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var o=n[i];if(!(o[Ve]||o[He]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var a=o.getAttribute(t)||"";a=e+a;var l=r.get(a);l?l.push(o):r.set(a,[o])}}return r}function ih(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function oh(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var ah=0;function lh(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)ch(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var sh=null;function ch(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,sh=new Map,t.forEach(dh,e),sh=null,lh.call(e))}function dh(e,t){if(!(4&t.state.loading)){var n=sh.get(e);if(n)var r=n.get(null);else{n=new Map,sh.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<i.length;o++){var a=i[o];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(i=t.instance).getAttribute("data-precedence"),(o=n.get(a)||r)===r&&n.set(null,i),n.set(a,i),this.count++,r=lh.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),o?o.parentNode.insertBefore(i,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var uh={$$typeof:w,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function hh(e,t,n,r,i,o,a,l,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pe(0),this.hiddenUpdates=Pe(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=o,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ph(e,t,n,r,i,o,a,l,s,c,d,u){return e=new hh(e,t,n,a,s,c,d,u,l),t=1,!0===o&&(t|=24),o=Br(3,null,null,t),e.current=o,o.stateNode=e,(t=Mi()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},bo(o),e}function fh(e){return e?e=zr:zr}function gh(e,t,n,r,i,o){i=fh(i),null===r.context?r.context=i:r.pendingContext=i,(r=yo(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=wo(e,r,t))&&(Vc(n,0,t),Eo(n,e,t))}function mh(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function xh(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function bh(e){if(13===e.tag||31===e.tag){var t=Rr(e,67108864);null!==t&&Vc(t,0,67108864),xh(e,67108864)}}function vh(e){if(13===e.tag||31===e.tag){var t=Qc(),n=Rr(e,t=ze(t));null!==n&&Vc(n,0,t),xh(e,t)}}var yh=!0;function wh(e,t,n,r){var i=R.T;R.T=null;var o=O.p;try{O.p=2,jh(e,t,n,r)}finally{O.p=o,R.T=i}}function Eh(e,t,n,r){var i=R.T;R.T=null;var o=O.p;try{O.p=8,jh(e,t,n,r)}finally{O.p=o,R.T=i}}function jh(e,t,n,r){if(yh){var i=Sh(r);if(null===i)nu(e,t,r,Th,n),Nh(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Lh=zh(Lh,e,t,n,r,i),!0;case"dragenter":return $h=zh($h,e,t,n,r,i),!0;case"mouseover":return Ih=zh(Ih,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ph.set(o,zh(Ph.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fh.set(o,zh(Fh.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Nh(e,r),4&t&&-1<Oh.indexOf(e)){for(;null!==i;){var o=Je(i);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var a=Ae(o.pendingLanes);if(0!==a){var l=o;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var s=1<<31-ye(a);l.entanglements[1]|=s,a&=~s}Nd(o),0===(6&fc)&&(Oc=se()+500,zd(0,!1))}}break;case 31:case 13:null!==(l=Rr(o,2))&&Vc(l,0,2),ed(),xh(o,2)}if(null===(o=Sh(r))&&nu(e,t,r,Th,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else nu(e,t,r,null,n)}}function Sh(e){return Ah(e=Ot(e))}var Th=null;function Ah(e){if(Th=null,null!==(e=Xe(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(31===n){if(null!==(e=d(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Th=e,null}function kh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case de:return 2;case ue:return 8;case he:case pe:return 32;case fe:return 268435456;default:return 32}default:return 32}}var Ch=!1,Lh=null,$h=null,Ih=null,Ph=new Map,Fh=new Map,Rh=[],Oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nh(e,t){switch(e){case"focusin":case"focusout":Lh=null;break;case"dragenter":case"dragleave":$h=null;break;case"mouseover":case"mouseout":Ih=null;break;case"pointerover":case"pointerout":Ph.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fh.delete(t.pointerId)}}function zh(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=Je(t))&&bh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Dh(e){var t=Xe(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void Me(e.priority,function(){vh(n)})}else if(31===t){if(null!==(t=d(n)))return e.blockedOn=t,void Me(e.priority,function(){vh(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Bh(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sh(e.nativeEvent);if(null!==n)return null!==(t=Je(n))&&bh(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Rt=r,n.target.dispatchEvent(r),Rt=null,t.shift()}return!0}function Mh(e,t,n){Bh(e)&&n.delete(t)}function Gh(){Ch=!1,null!==Lh&&Bh(Lh)&&(Lh=null),null!==$h&&Bh($h)&&($h=null),null!==Ih&&Bh(Ih)&&(Ih=null),Ph.forEach(Mh),Fh.forEach(Mh)}function Hh(e,t){e.blockedOn===t&&(e.blockedOn=null,Ch||(Ch=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Gh)))}var Wh=null;function Uh(e){Wh!==e&&(Wh=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Wh===e&&(Wh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===Ah(r||n))continue;break}var o=Je(n);null!==o&&(e.splice(t,3),t-=3,nl(o,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function _h(e){function t(t){return Hh(t,e)}null!==Lh&&Hh(Lh,e),null!==$h&&Hh($h,e),null!==Ih&&Hh(Ih,e),Ph.forEach(t),Fh.forEach(t);for(var n=0;n<Rh.length;n++){var r=Rh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Rh.length&&null===(n=Rh[0]).blockedOn;)Dh(n),null===n.blockedOn&&Rh.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],o=n[r+1],a=i[We]||null;if("function"===typeof o)a||Uh(n);else if(a){var l=null;if(o&&o.hasAttribute("formAction")){if(i=o,a=o[We]||null)l=a.formAction;else if(null!==Ah(i))continue}else l=a.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Uh(n)}}}function Yh(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==i&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"===typeof navigation){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==i&&(i(),i=null)}}}function Qh(e){this._internalRoot=e}function Zh(e){this._internalRoot=e}Zh.prototype.render=Qh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));gh(t.current,Qc(),e,t,null,null)},Zh.prototype.unmount=Qh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;gh(e.current,2,null,e,null,null),ed(),t[Ue]=null}},Zh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Be();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rh.length&&0!==t&&t<Rh[n].priority;n++);Rh.splice(n,0,e),0===n&&Dh(e)}};var Vh=i.version;if("19.2.5"!==Vh)throw Error(a(527,Vh,"19.2.5"));O.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return u(i),e;if(o===r)return u(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?h(e):null)?null:e.stateNode};var qh={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.5"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Xh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xh.isDisabled&&Xh.supportsFiber)try{xe=Xh.inject(qh),be=Xh}catch(Kh){}}t.createRoot=function(e,t){if(!l(e))throw Error(a(299));var n=!1,r="",i=Tl,o=Al,s=kl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(o=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=ph(e,1,!1,null,0,n,r,null,i,o,s,Yh),e[Ue]=t.current,eu(e),new Qh(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(a(299));var r=!1,i="",o=Tl,s=Al,c=kl,d=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(o=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(d=n.formState)),(t=ph(e,1,!0,t,0,r,i,d,o,s,c,Yh)).context=fh(null),n=t.current,(i=yo(r=ze(r=Qc()))).callback=null,wo(n,i,r),n=r,t.current.lanes=n,Fe(t,n),Nd(t),e[Ue]=t.current,eu(e),new Zh(t)},t.version="19.2.5"},672(e,t,n){var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,o="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.2.5"},391(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},799(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var o in r={},t)"key"!==o&&(r[o]=t[o]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},288(e,t){var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),f=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,x={};function b(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=x,this.updater=n||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var w=y.prototype=new v;w.constructor=y,m(w,b.prototype),w.isPureReactComponent=!0;var E=Array.isArray;function j(){}var S={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function A(e,t,r){var i=r.ref;return{$$typeof:n,type:e,key:t,ref:void 0!==i?i:null,props:r}}function k(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function L(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,d=!1;if(null===e)d=!0;else switch(l){case"bigint":case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case n:case r:d=!0;break;case h:return $((d=e._init)(e._payload),t,i,o,a)}}if(d)return a=a(e),d=""===o?"."+L(e,0):o,E(a)?(i="",null!=d&&(i=d.replace(C,"$&/")+"/"),$(a,t,i,"",function(e){return e})):null!=a&&(k(a)&&(s=a,c=i+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+d,a=A(s.type,c,s.props)),t.push(a)),1;d=0;var u,p=""===o?".":o+":";if(E(e))for(var g=0;g<e.length;g++)d+=$(o=e[g],t,i,l=p+L(o,g),a);else if("function"===typeof(g=null===(u=e)||"object"!==typeof u?null:"function"===typeof(u=f&&u[f]||u["@@iterator"])?u:null))for(e=g.call(e),g=0;!(o=e.next()).done;)d+=$(o=o.value,t,i,l=p+L(o,g++),a);else if("object"===l){if("function"===typeof e.then)return $(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(j,j):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,o,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return d}function I(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",function(e){return t.call(n,e,i++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)},R={map:I,forEach:function(e,t,n){I(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return I(e,function(){t++}),t},toArray:function(e){return I(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Activity=p,t.Children=R,t.Component=b,t.Fragment=i,t.Profiler=a,t.PureComponent=y,t.StrictMode=o,t.Suspense=d,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cacheSignal=function(){return null},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(o in void 0!==t.key&&(i=""+t.key),t)!T.call(t,o)||"key"===o||"__self"===o||"__source"===o||"ref"===o&&void 0===t.ref||(r[o]=t[o]);var o=arguments.length-2;if(1===o)r.children=n;else if(1<o){for(var a=Array(o),l=0;l<o;l++)a[l]=arguments[l+2];r.children=a}return A(e.type,i,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,i={},o=null;if(null!=t)for(r in void 0!==t.key&&(o=""+t.key),t)T.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return A(e,o,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(j,F)}catch(o){F(o)}finally{null!==t&&null!==n.types&&(t.types=n.types),S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return S.H.useEffect(e,t)},t.useEffectEvent=function(e){return S.H.useEffectEvent(e)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.2.5"},43(e,t,n){e.exports=n(288)},579(e,t,n){e.exports=n(799)},896(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,d=e[c];if(0>o(s,n))c<i&&0>o(d,s)?(e[r]=d,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<i&&0>o(d,n)))break e;e[r]=d,e[c]=n,r=c}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],d=[],u=1,h=null,p=3,f=!1,g=!1,m=!1,x=!1,b="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(d);null!==t;){if(null===t.callback)i(d);else{if(!(t.startTime<=e))break;i(d),t.sortIndex=t.expirationTime,n(c,t)}t=r(d)}}function E(e){if(m=!1,w(e),!g)if(null!==r(c))g=!0,S||(S=!0,j());else{var t=r(d);null!==t&&P(E,t.startTime-e)}}var j,S=!1,T=-1,A=5,k=-1;function C(){return!!x||!(t.unstable_now()-k<A)}function L(){if(x=!1,S){var e=t.unstable_now();k=e;var n=!0;try{e:{g=!1,m&&(m=!1,v(T),T=-1),f=!0;var o=p;try{t:{for(w(e),h=r(c);null!==h&&!(h.expirationTime>e&&C());){var a=h.callback;if("function"===typeof a){h.callback=null,p=h.priorityLevel;var l=a(h.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){h.callback=l,w(e),n=!0;break t}h===r(c)&&i(c),w(e)}else i(c);h=r(c)}if(null!==h)n=!0;else{var s=r(d);null!==s&&P(E,s.startTime-e),n=!1}}break e}finally{h=null,p=o,f=!1}n=void 0}}finally{n?j():S=!1}}}if("function"===typeof y)j=function(){y(L)};else if("undefined"!==typeof MessageChannel){var $=new MessageChannel,I=$.port2;$.port1.onmessage=L,j=function(){I.postMessage(null)}}else j=function(){b(L,0)};function P(e,n){T=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:u++,callback:i,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>a?(e.sortIndex=o,n(d,e),null===r(c)&&e===r(d)&&(m?(v(T),T=-1):m=!0,P(E,o-a))):(e.sortIndex=l,n(c,e),g||f||(g=!0,S||(S=!0,j()))),e},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853(e,t,n){e.exports=n(896)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(e=>a[e]=()=>r[e]);return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".a87527cc.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="reactapp:";n.l=(r,i,o,a)=>{if(e[r])e[r].push(i);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[i];var h=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach(e=>e(n)),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((n,r)=>i=e[t]=[n,r]);r.push(i[2]=o);var a=n.p+n.u(t),l=new Error;n.l(a,r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}},"chunk-"+t,t)}};var t=(t,r)=>{var i,o,[a,l,s]=r,c=0;if(a.some(t=>0!==e[t])){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)s(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=globalThis.webpackChunkreactapp=globalThis.webpackChunkreactapp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var r=n(43),i=n.t(r,2),o=n(391),a="-ms-",l="-moz-",s="-webkit-",c="comm",d="rule",u="decl",h="@keyframes",p=Math.abs,f=String.fromCharCode,g=Object.assign;function m(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function v(e,t,n){return e.indexOf(t,n)}function y(e,t){return 0|e.charCodeAt(t)}function w(e,t,n){return e.slice(t,n)}function E(e){return e.length}function j(e){return e.length}function S(e,t){return t.push(e),e}function T(e,t){return e.filter(function(e){return!x(e,t)})}var A,k,C=1,L=1,$=0,I=0,P=0,F="";function R(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:C,column:L,length:a,return:"",siblings:l}}function O(e,t){return g(R("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function N(e){for(;e.root;)e=O(e.root,{children:[e]});S(e,e.siblings)}function z(){return P=I>0?y(F,--I):0,L--,10===P&&(L=1,C--),P}function D(){return P=I<$?y(F,I++):0,L++,10===P&&(L=1,C++),P}function B(){return y(F,I)}function M(){return I}function G(e,t){return w(F,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(e){return C=L=1,$=E(F=e),I=0,[]}function U(e){return F="",e}function _(e){return m(G(I-1,Z(91===e?e+2:40===e?e+1:e)))}function Y(e){for(;(P=B())&&P<33;)D();return H(e)>2||H(P)>3?"":" "}function Q(e,t){for(;--t&&D()&&!(P<48||P>102||P>57&&P<65||P>70&&P<97););return G(e,M()+(t<6&&32==B()&&32==D()))}function Z(e){for(;D();)switch(P){case e:return I;case 34:case 39:34!==e&&39!==e&&Z(P);break;case 40:41===e&&Z(e);break;case 92:D()}return I}function V(e,t){for(;D()&&e+P!==57&&(e+P!==84||47!==B()););return"/*"+G(t,I-1)+"*"+f(47===e?e:D())}function q(e){for(;!H(B());)D();return G(e,I)}function X(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function J(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case u:return e.return=e.return||e.value;case c:return"";case h:return e.return=e.value+"{"+X(e.children,r)+"}";case d:if(!E(e.value=e.props.join(",")))return""}return E(n=X(e.children,r))?e.return=e.value+"{"+n+"}":""}function K(e,t,n){switch(function(e,t){return 45^y(e,0)?(((t<<2^y(e,0))<<2^y(e,1))<<2^y(e,2))<<2^y(e,3):0}(e,t)){case 5103:return s+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return s+e+e;case 4855:return s+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return s+e+l+e+a+e+e;case 5936:switch(y(e,t+11)){case 114:return s+e+a+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return s+e+a+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return s+e+a+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return s+e+a+e+e;case 6165:return s+e+a+"flex-"+e+e;case 5187:return s+e+b(e,/(\w+).+(:[^]+)/,s+"box-$1$2"+a+"flex-$1$2")+e;case 5443:return s+e+a+"flex-item-"+b(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":a+"grid-row-"+b(e,/flex-|-self/g,""))+e;case 4675:return s+e+a+"flex-line-pack"+b(e,/align-content|flex-|-self/g,"")+e;case 5548:return s+e+a+b(e,"shrink","negative")+e;case 5292:return s+e+a+b(e,"basis","preferred-size")+e;case 6060:return s+"box-"+b(e,"-grow","")+s+e+a+b(e,"grow","positive")+e;case 4554:return s+b(e,/([^-])(transform)/g,"$1"+s+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+a+"flex-pack:$3"),/space-between/,"justify")+s+e+e;case 4200:if(!x(e,/flex-|baseline/))return a+"grid-column-align"+w(e,t)+e;break;case 2592:case 3360:return a+b(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,x(e.props,/grid-\w+-end/)})?~v(e+(n=n[t].value),"span",0)?e:a+b(e,"-start","")+e+a+"grid-row-span:"+(~v(n,"span",0)?x(n,/\d+/):+x(n,/\d+/)-+x(e,/\d+/))+";":a+b(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return x(e.props,/grid-\w+-start/)})?e:a+b(b(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,s+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(E(e)-1-t>6)switch(y(e,t+1)){case 109:if(45!==y(e,t+4))break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+l+(108==y(e,t+3)?"$3":"$2-$3"))+e;case 115:return~v(e,"stretch",0)?K(b(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return b(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,o,l,s){return a+n+":"+r+s+(i?a+n+"-span:"+(o?l:+l-+r)+s:"")+e});case 4949:if(121===y(e,t+6))return b(e,":",":"+s)+e;break;case 6444:switch(y(e,45===y(e,14)?18:11)){case 120:return b(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+s+(45===y(e,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+a+"$2box$3")+e;case 100:return b(e,":",":"+a)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return b(e,"scroll-","scroll-snap-")+e}return e}function ee(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case u:return void(e.return=K(e.value,e.length,n));case h:return X([O(e,{value:b(e.value,"@","@"+s)})],r);case d:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(x(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":N(O(e,{props:[b(t,/:(read-\w+)/,":-moz-$1")]})),N(O(e,{props:[t]})),g(e,{props:T(n,r)});break;case"::placeholder":N(O(e,{props:[b(t,/:(plac\w+)/,":"+s+"input-$1")]})),N(O(e,{props:[b(t,/:(plac\w+)/,":-moz-$1")]})),N(O(e,{props:[b(t,/:(plac\w+)/,a+"input-$1")]})),N(O(e,{props:[t]})),g(e,{props:T(n,r)})}return""})}}function te(e){return U(ne("",null,null,null,[""],e=W(e),0,[0],e))}function ne(e,t,n,r,i,o,a,l,s){for(var c=0,d=0,u=a,h=0,g=0,m=0,x=1,j=1,T=1,A=0,k="",C=i,L=o,$=r,I=k;j;)switch(m=A,A=D()){case 40:if(108!=m&&58==y(I,u-1)){-1!=v(I+=b(_(A),"&","&\f"),"&\f",p(c?l[c-1]:0))&&(T=-1);break}case 34:case 39:case 91:I+=_(A);break;case 9:case 10:case 13:case 32:I+=Y(m);break;case 92:I+=Q(M()-1,7);continue;case 47:switch(B()){case 42:case 47:S(ie(V(D(),M()),t,n,s),s),5!=H(m||1)&&5!=H(B()||1)||!E(I)||" "===w(I,-1,void 0)||(I+=" ");break;default:I+="/"}break;case 123*x:l[c++]=E(I)*T;case 125*x:case 59:case 0:switch(A){case 0:case 125:j=0;case 59+d:-1==T&&(I=b(I,/\f/g,"")),g>0&&(E(I)-u||0===x&&47===m)&&S(g>32?oe(I+";",r,n,u-1,s):oe(b(I," ","")+";",r,n,u-2,s),s);break;case 59:I+=";";default:if(S($=re(I,t,n,c,d,i,l,k,C=[],L=[],u,o),o),123===A)if(0===d)ne(I,t,$,$,C,o,u,l,L);else{switch(h){case 99:if(110===y(I,3))break;case 108:if(97===y(I,2))break;default:d=0;case 100:case 109:case 115:}d?ne(e,$,$,r&&S(re(e,$,$,0,0,i,l,k,i,C=[],u,L),L),i,L,u,l,r?C:L):ne(I,$,$,$,[""],L,0,l,L)}}c=d=g=0,x=T=1,k=I="",u=a;break;case 58:u=1+E(I),g=m;default:if(x<1)if(123==A)--x;else if(125==A&&0==x++&&125==z())continue;switch(I+=f(A),A*x){case 38:T=d>0?1:(I+="\f",-1);break;case 44:l[c++]=(E(I)-1)*T,T=1;break;case 64:45===B()&&(I+=_(D())),h=B(),d=u=E(k=I+=q(M())),A++;break;case 45:45===m&&2==E(I)&&(x=0)}}return o}function re(e,t,n,r,i,o,a,l,s,c,u,h){for(var f=i-1,g=0===i?o:[""],x=j(g),v=0,y=0,E=0;v<r;++v)for(var S=0,T=w(e,f+1,f=p(y=a[v])),A=e;S<x;++S)(A=m(y>0?g[S]+" "+T:b(T,/&\f/g,g[S])))&&(s[E++]=A);return R(e,t,n,0===i?d:l,s,c,u,h)}function ie(e,t,n,r){return R(e,t,n,c,f(P),w(e,2,-2),0,r)}function oe(e,t,n,r,i){return R(e,t,n,u,w(e,0,r),w(e,r+1,-1),r,i)}const ae="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",le="active",se="data-styled-version",ce="6.4.1",de="/*!sc*/\n",ue="undefined"!=typeof window&&"undefined"!=typeof document;function he(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(k=null!==(A=he("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==A?A:he("SC_DISABLE_SPEEDY"))&&void 0!==k?k:"undefined"==typeof process||void 0==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}||!1),fe="sc-keyframes-",ge={};function me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let xe=new Map,be=new Map,ve=1;const ye=e=>{if(xe.has(e))return xe.get(e);for(;be.has(ve);)ve++;const t=ve++;return xe.set(e,t),be.set(t,e),t},we=e=>be.get(e),Ee=(e,t)=>{ve=t+1,xe.set(e,t),be.set(t,e)},je=(new Set,Object.freeze([])),Se=Object.freeze({});function Te(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Se;return e.theme!==n.theme&&e.theme||t||n.theme}const Ae=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function Ce(e){return e.replace(Ae,"-").replace(ke,"")}const Le=/(a)(d)/gi,$e=e=>String.fromCharCode(e+(e>25?39:97));function Ie(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$e(t%52)+n;return($e(t%52)+n).replace(Le,"$1-$2")}const Pe=5381,Fe=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},Re=e=>Fe(Pe,e);function Oe(e){return Ie(Re(e)>>>0)}function Ne(e){return e.displayName||e.name||"Component"}function ze(e){return"string"==typeof e&&!0}function De(e){return ze(e)?`styled.${e}`:`Styled(${Ne(e)})`}const Be=Symbol.for("react.memo"),Me=Symbol.for("react.forward_ref"),Ge={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},He={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},We={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ue={[Me]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Be]:We};function _e(e){return("type"in(t=e)&&t.type.$$typeof)===Be?We:"$$typeof"in e?Ue[e.$$typeof]:Ge;var t}const Ye=Object.defineProperty,Qe=Object.getOwnPropertyNames,Ze=Object.getOwnPropertySymbols,Ve=Object.getOwnPropertyDescriptor,qe=Object.getPrototypeOf,Xe=Object.prototype;function Je(e,t,n){if("string"!=typeof t){const r=qe(t);r&&r!==Xe&&Je(e,r,n);const i=Qe(t).concat(Ze(t)),o=_e(e),a=_e(t);for(let l=0;l<i.length;++l){const r=i[l];if(!(r in He||n&&n[r]||a&&r in a||o&&r in o)){const n=Ve(t,r);try{Ye(e,r,n)}catch(e){}}}}return e}function Ke(e){return"function"==typeof e}function et(e){return"object"==typeof e&&"styledComponentId"in e}function tt(e,t){return e&&t?e+" "+t:e||t||""}function nt(e,t){return e.join(t||"")}function rt(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function it(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!rt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=it(e[n],t[n]);else if(rt(t))for(const n in t)e[n]=it(e[n],t[n]);return e}function ot(e,t){Object.defineProperty(e,"toString",{value:t})}const at=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw me(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,o=t.length;i<o;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let o=r;o<i;o++)t+=this.tag.getRule(o)+de;return t}},lt=`style[${ae}][${se}="${ce}"]`,st=new RegExp(`^${ae}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ct=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,dt=e=>{if(!e)return document;if(ct(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(ct(t))return t}return document},ut=(e,t,n)=>{const r=n.split(",");let i;for(let o=0,a=r.length;o<a;o++)(i=r[o])&&e.registerName(t,i)},ht=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(de),i=[];for(let o=0,a=r.length;o<a;o++){const t=r[o].trim();if(!t)continue;const n=t.match(st);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(Ee(r,t),ut(e,r,n[3]),e.getTag().insertRules(t,i)),i.length=0}else i.push(t)}},pt=e=>{const t=dt(e.options.target).querySelectorAll(lt);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute(ae)!==le&&(ht(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let ft=!1;function gt(){if(!1!==ft)return ft;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ft=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ft=t.getAttribute("content")||void 0}return ft=n.nc}const mt=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),o=(e=>{const t=Array.from(e.querySelectorAll(`style[${ae}]`));return t[t.length-1]})(r),a=void 0!==o?o.nextSibling:null;i.setAttribute(ae,le),i.setAttribute(se,ce);const l=t||gt();return l&&i.setAttribute("nonce",l),r.insertBefore(i,a),i},xt=class{constructor(e,t){this.element=mt(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,i=n.length;r<i;r++){const t=n[r];if(t.ownerNode===e)return t}throw me(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},bt=class{constructor(e,t){this.element=mt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let vt=ue;const yt={isServer:!ue,useCSSOMInjection:!pe};class wt{static registerId(e){return ye(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},yt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ue&&vt&&(vt=!1,pt(this)),ot(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let i=0;i<n;i++){const n=we(i);if(void 0===n)continue;const o=e.names.get(n);if(void 0===o||!o.size)continue;const a=t.getGroup(i);if(0===a.length)continue;const l=ae+".g"+i+'[id="'+n+'"]';let s="";for(const e of o)e.length>0&&(s+=e+",");r+=a+l+'{content:"'+s+'"}'+de}return r})(this))}rehydrate(){!this.server&&ue&&pt(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new wt(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&ue&&e.target!==this.options.target&&dt(this.options.target)!==dt(e.target)&&pt(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new xt(n,r):new bt(n,r)})(this.options),new at(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){ye(e),e.startsWith(fe)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(ye(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ye(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Et=new WeakSet,jt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function St(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in jt||e.startsWith("--")?String(t).trim():t+"px"}const Tt=47;function At(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const kt=Symbol.for("sc-keyframes");function Ct(e){return Ke(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Lt=e=>null==e||!1===e||""===e,$t=Symbol.for("react.client.reference");function It(e){return e.$$typeof===$t}function Pt(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Lt(r)&&(Array.isArray(r)&&Et.has(r)||Ke(r)?t.push(At(n)+":",r,";"):rt(r)?(t.push(n+" {"),Pt(r,t),t.push("}")):t.push(At(n)+": "+St(n,r)+";"))}}function Ft(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(Lt(e))return i;const o=typeof e;if("string"===o)return i.push(e),i;if("function"===o){if(It(e))return i;if(Ct(e)&&t){return Ft(e(t),t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let o=0;o<e.length;o++)Ft(e[o],t,n,r,i);return i}return et(e)?(i.push(`.${e.styledComponentId}`),i):function(e){return"object"==typeof e&&null!==e&&kt in e}(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):It(e)?i:rt(e)?(Pt(e,i),i):(i.push(e.toString()),i)}const Rt=Re(ce);class Ot{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=Fe(Rt,t),this.baseStyle=n,wt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let i="";for(let r=0;r<this.rules.length;r++){const o=this.rules[r];if("string"==typeof o)i+=o;else if(o)if(Ct(o)){const r=o(e);"string"==typeof r?i+=r:null!=r&&!1!==r&&(i+=nt(Ft(r,e,t,n)))}else i+=nt(Ft(o,e,t,n))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+i:i;let o=this.dynamicNameCache.get(e);if(!o){if(o=Ie(Fe(Fe(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,o)}if(!t.hasNameForId(this.componentId,o)){const e=n(i,"."+o,void 0,this.componentId);t.insertRules(this.componentId,o,e)}r=tt(r,o)}}return r}}const Nt=/&/g;function zt(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function Dt(e){const t=e.length;let n="",r=0,i=0,o=0,a=!1,l=!1;for(let s=0;s<t;s++){const c=e.charCodeAt(s);if(0!==o||a||c!==Tt||42!==e.charCodeAt(s+1))if(a)42===c&&e.charCodeAt(s+1)===Tt&&(a=!1,s++);else if(34!==c&&39!==c||zt(e,s)){if(0===o)if(123===c)i++;else if(125===c){if(i--,i<0){l=!0;let n=s+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,i=0,s=n-1,r=n;continue}0===i&&(n+=e.substring(r,s+1),r=s+1)}else 59===c&&0===i&&(n+=e.substring(r,s+1),r=s+1)}else 0===o?o=c:o===c&&(o=0);else a=!0,s++}return l||0!==i||0!==o?(r<t&&0===i&&0===o&&(n+=e.substring(r)),n):e}function Bt(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const o=e[i];if("rule"===o.type){o.value=(n+o.value).replaceAll(",",r);const e=o.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];o.props=t}Array.isArray(o.children)&&"@keyframes"!==o.type&&Bt(o.children,t)}return e}function Mt(){let e,t,n,{options:r=Se,plugins:i=je}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se;const o=(n,r,i)=>i.startsWith(t)&&i.endsWith(t)&&i.replaceAll(t,"").length>0?`.${e}`:n,a=i.slice();a.push(e=>{e.type===d&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(Nt,t).replace(n,o))}),r.prefix&&a.push(ee),a.push(J);let l=[];const s=function(e){var t=j(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}(a.concat((h=e=>l.push(e),function(e){e.root||(e=e.return)&&h(e)}))),c=function(i){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=o,n=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return Dt(e);const r=e.length;let i="",o=0,a=0,l=0,s=0,c=0,d=!1;for(;a<r;){const t=e.charCodeAt(a);if(34!==t&&39!==t||zt(e,a))if(0===l)if(t===Tt&&a+1<r&&42===e.charCodeAt(a+1)){for(a+=2;a+1<r&&(42!==e.charCodeAt(a)||e.charCodeAt(a+1)!==Tt);)a++;a+=2}else if(40!==t)if(41!==t)if(s>0)a++;else if(42===t&&a+1<r&&e.charCodeAt(a+1)===Tt)i+=e.substring(o,a),a+=2,o=a,d=!0;else if(t===Tt&&a+1<r&&e.charCodeAt(a+1)===Tt){for(i+=e.substring(o,a);a<r&&10!==e.charCodeAt(a);)a++;o=a,d=!0}else 123===t?c++:125===t&&c--,a++;else s>0&&s--,a++;else s++,a++;else a++;else 0===l?l=t:l===t&&(l=0),a++}return d?(o<r&&(i+=e.substring(o)),0===c?i:Dt(i)):0===c?e:Dt(e)}(i);let d=te(a||o?a+" "+o+" { "+c+" }":c);return r.namespace&&(d=Bt(d,r.namespace)),l=[],X(d,s),l},u=r;var h;let p=Pe;for(let d=0;d<i.length;d++)i[d].name||me(15),p=Fe(p,i[d].name);return(null==u?void 0:u.namespace)&&(p=Fe(p,u.namespace)),(null==u?void 0:u.prefix)&&(p=Fe(p,"p")),c.hash=p!==Pe?p.toString():"",c}const Gt=new wt,Ht=Mt(),Wt=r.createContext({shouldForwardProp:void 0,styleSheet:Gt,stylis:Ht,stylisPlugins:void 0});Wt.Consumer;function Ut(){return r.useContext(Wt)}const _t=r.createContext(void 0);_t.Consumer;function Yt(){const e=r.useContext(_t);if(!e)throw me(18);return e}function Qt(e){const t=r.useContext(_t),n=r.useMemo(()=>function(e,t){if(!e)throw me(14);if(Ke(e)){return e(t)}if(Array.isArray(e)||"object"!=typeof e)throw me(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?r.createElement(_t.Provider,{value:n},e.children):null}const Zt=Object.prototype.hasOwnProperty,Vt={};function qt(e,t){const n="string"!=typeof e?"sc":Ce(e);Vt[n]=(Vt[n]||0)+1;const r=n+"-"+Oe(ce+n+Vt[n]);return t?t+"-"+r:r}function Xt(e,t,n){const i=et(e),o=e,a=!ze(e),{attrs:l=je,componentId:s=qt(t.displayName,t.parentComponentId),displayName:c=De(e)}=t,d=t.displayName&&t.componentId?Ce(t.displayName)+"-"+t.componentId:t.componentId||s,u=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:h}=t;if(i&&o.shouldForwardProp){const e=o.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;h=(t,r)=>e(t,r)&&n(t,r)}else h=e}const p=new Ot(n,d,i?o.componentStyle:void 0);function f(e,t){return function(e,t,n){const{attrs:i,componentStyle:o,defaultProps:a,foldedComponentIds:l,styledComponentId:s,target:c}=e,d=r.useContext(_t),u=Ut(),h=e.shouldForwardProp||u.shouldForwardProp,p=Te(t,d,a)||Se;let f,g;{const e=r.useRef(null),n=e.current;if(null!==n&&n[1]===p&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===o&&function(e,t,n){const r=e,i=t;let o=0;for(const a in i)if(Zt.call(i,a)&&(o++,r[a]!==i[a]))return!1;return o===n}(n[0],t,n[4]))f=n[5],g=n[6];else{f=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let o=0;o<e.length;o++){const n=e[o],a=Ke(n)?n(i?Object.assign({},r):r):n;for(const e in a)"className"===e?r.className=tt(r.className,a[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),a[e]):e in t&&void 0===t[e]||(r[e]=a[e])}return"className"in t&&"string"==typeof t.className&&(r.className=tt(r.className,t.className)),r}(i,t,p),g=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(o,f,u.styleSheet,u.stylis);let n=0;for(const e in t)Zt.call(t,e)&&n++;e.current=[t,p,u.styleSheet,u.stylis,n,f,g,o]}}const m=f.as||c,x=function(e,t,n,r){const i={};for(const o in e)void 0===e[o]||"$"===o[0]||"as"===o||"theme"===o&&e.theme===n||("forwardedAs"===o?i.as=e.forwardedAs:r&&!r(o,t)||(i[o]=e[o]));return i}(f,m,p,h);let b=tt(l,s);return g&&(b+=" "+g),f.className&&(b+=" "+f.className),x[ze(m)&&m.includes("-")?"class":"className"]=b,n&&(x.ref=n),(0,r.createElement)(m,x)}(g,e,t)}f.displayName=c;let g=r.forwardRef(f);return g.attrs=u,g.componentStyle=p,g.displayName=c,g.shouldForwardProp=h,g.foldedComponentIds=i?tt(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=d,g.target=i?o.target:e,Object.defineProperty(g,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=i?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const i of n)it(e,i,!0);return e}({},o.defaultProps,e):e}}),ot(g,()=>`.${g.styledComponentId}`),a&&Je(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}var Jt=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Kt(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const en=e=>(Et.add(e),e);function tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Ke(e)||rt(e))return en(Ft(Kt(je,[e,...n])));const i=e;return 0===n.length&&1===i.length&&"string"==typeof i[0]?Ft(i):en(Ft(Kt(i,n)))}function nn(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Se;if(!t)throw me(1,t);const r=function(r){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return e(t,n,tn(r,...o))};return r.attrs=r=>nn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>nn(e,t,Object.assign(Object.assign({},n),r)),r}const rn=e=>nn(Xt,e),on=rn;Jt.forEach(e=>{on[e]=rn(e)});class an{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){const n=e[t];if(Ke(n)&&!et(n))return!1}return!0}(e),wt.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){const i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{const o=this.computeRules(e,t,n,r);n.insertRules(i,o.name,o.rules)}return}const o=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&o){const t=o.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){const i=nt(Ft(this.rules,t,n,r)),o={name:this.componentId+e,rules:r(i,"")};return this.instanceRules.set(e,o),o}rebuildGroup(e){const t=this.componentId;e.clearRules(t);for(const n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}}function ln(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const o=tn(e,...n),a=`sc-global-${Oe(JSON.stringify(o))}`,l=new an(o,a),s=e=>{const t=Ut(),n=r.useContext(_t);let i;{const e=r.useRef(null);null===e.current&&(e.current=t.styleSheet.allocateGSInstance(a)),i=e.current}t.styleSheet.server&&c(i,e,t.styleSheet,n,t.stylis);{const o=l.isStatic?[i,t.styleSheet,l]:[i,e,t.styleSheet,n,t.stylis,l],s=r.useRef(l);r.useLayoutEffect(()=>{t.styleSheet.server||(s.current!==l&&(t.styleSheet.clearRules(a),s.current=l),c(i,e,t.styleSheet,n,t.stylis))},o),r.useLayoutEffect(()=>()=>{t.styleSheet.server||l.removeStyles(i,t.styleSheet)},[i,t.styleSheet,l])}return t.styleSheet.server&&l.instanceRules.delete(i),null};function c(e,t,n,r,i){if(l.isStatic)l.renderStyles(e,ge,n,i);else{const o=Object.assign(Object.assign({},t),{theme:Te(t,r,s.defaultProps)});l.renderStyles(e,o,n,i)}}return r.memo(s)}var sn;class cn{constructor(e,t){var n=this;this[sn]=!0,this.inject=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ht;const r=n.getName(t);if(!e.hasNameForId(n.id,r)){const i=t(n.rules,r,"@keyframes");e.insertRules(n.id,r,i)}},this.name=e,this.id=fe+e,this.rules=t,ye(this.id),ot(this,()=>{throw me(12,String(this.name))})}getName(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht;return e.hash?this.name+Ie(+e.hash>>>0):this.name}}function dn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=nt(tn(e,...n)),o=Oe(i);return new cn(o,i)}sn=kt;var un=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},hn=tn(pn||(pn=un(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));ln(fn||(fn=un(["",""],["",""])),hn);var pn,fn;const gn=ln`
  ${hn}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /*
    100 Thin
    200 Extra Light
    300 Light
    400 Regular
    500 Medium
    600 Semi Bold
    700 Bold
    800 Extra Bold
    900 Black
  */

  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Thin.woff2) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-ExtraLight.woff2) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-ExtraBold.woff2) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'pretendard';
    src: url(${""}/assets/fonts/pretendard/Pretendard-Black.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'pretendard', sans-serif;
    font-weight: 400;
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    letter-spacing: -0.02em;
    line-height: 1.3;
    text-decoration: none;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'pretendard', sans-serif;
  }

  a {
    /* text-decoration: none;
    color: inherit; */
  }
`,mn=gn,xn={PALETTE:{primary:{light:"#DBEAFE",main:"#027DF0"},secondary:{main:"#00B53F",light:"#D1FFE1"},third:{main:"#AB47FF",light:"#F3E8FF"},fourth:{main:"#F53102",light:"#FFE4E6"},fifth:{main:"#FF34C5",light:"#FFEBFA"},yellow:"#F5EE03",white:"#FFFFFF",black:"#333333"},GRADIENT:{lightBlue:"linear-gradient(135deg, #A7B5FF 0%, #4359FC 100%)",deepBlue:"linear-gradient(135deg, #4359FC 0%, #0014A9 100%)",blue:"linear-gradient(135deg, #5B6EFD 0%, #0014A9 100%)"},GRAYSCALE:{1:"#F2F2F2",2:"#E6E6E6",3:"#D9D9D9",4:"#CCCCCC",5:"#C0C0C0",6:"#B3B3B3",7:"#A6A6A6",8:"#999999",9:"#8D8D8D",10:"#555555"},TEXT_COLOR:{basic:"#333333",primary:"#4359FC",secondary:"#129D1B",warning:"#FF8004"},FONT_SIZE:{h1:"80px",h2:"60px",h3:"45px",h3_2:"36px",h4:"32px",h5:"28px",h6:"24px",h7:"20px",h8:"16px",h9:"14px",h10:"12px",h11:"10px"},FONT_WEIGHT:{regular:"400",bold:"700",extrabold:"800"},FONT_LINE:{h1:"98px",h2:"78px",h3:"60px",h3_2:"48px",h4:"46px",h5:"38px",h6:"34px",h7:"30px",h8:"24px",h9:"22px",h10:"20px"}},bn=xn;var vn,yn=n(950),wn=n.t(yn,2);function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},En.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(vn||(vn={}));const jn="popstate";function Sn(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Tn(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function An(e,t){return{usr:e.state,key:e.key,idx:t}}function kn(e,t,n,r){return void 0===n&&(n=null),En({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Ln(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Cn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Ln(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $n(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=vn.Pop,s=null,c=d();function d(){return(a.state||{idx:null}).idx}function u(){l=vn.Pop;let e=d(),t=null==e?null:e-c;c=e,s&&s({action:l,location:p.location,delta:t})}function h(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:Cn(e);return n=n.replace(/ $/,"%20"),Sn(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,a.replaceState(En({},a.state,{idx:c}),""));let p={get action(){return l},get location(){return e(i,a)},listen(e){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(jn,u),s=e,()=>{i.removeEventListener(jn,u),s=null}},createHref:e=>t(i,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=vn.Push;let r=kn(p.location,e,t);n&&n(r,e),c=d()+1;let u=An(r,c),h=p.createHref(r);try{a.pushState(u,"",h)}catch(f){if(f instanceof DOMException&&"DataCloneError"===f.name)throw f;i.location.assign(h)}o&&s&&s({action:l,location:p.location,delta:1})},replace:function(e,t){l=vn.Replace;let r=kn(p.location,e,t);n&&n(r,e),c=d();let i=An(r,c),u=p.createHref(r);a.replaceState(i,"",u),o&&s&&s({action:l,location:p.location,delta:0})},go:e=>a.go(e)};return p}var In;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(In||(In={}));const Pn=new Set(["lazy","caseSensitive","path","id","index","children"]);function Fn(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map((e,i)=>{let o=[...n,String(i)],a="string"===typeof e.id?e.id:o.join("-");if(Sn(!0!==e.index||!e.children,"Cannot specify children on an index route"),Sn(!r[a],'Found a route id collision on id "'+a+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=En({},e,t(e),{id:a});return r[a]=n,n}{let n=En({},e,t(e),{id:a,children:void 0});return r[a]=n,e.children&&(n.children=Fn(e.children,t,o,r)),n}})}function Rn(e,t,n){return void 0===n&&(n="/"),On(e,t,n,!1)}function On(e,t,n,r){let i=Vn(("string"===typeof t?Ln(t):t).pathname||"/",n);if(null==i)return null;let o=Nn(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(o);let a=null;for(let l=0;null==a&&l<o.length;++l){let e=Zn(i);a=Yn(o[l],e,r)}return a}function Nn(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,o)=>{let a={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(Sn(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=rr([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(Sn(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),Nn(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:_n(l,e.index),routesMeta:s})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of zn(e.path))i(e,t,r);else i(e,t)}),t}function zn(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=zn(r.join("/")),l=[];return l.push(...a.map(e=>""===e?o:[o,e].join("/"))),i&&l.push(...a),l.map(t=>e.startsWith("/")&&""===t?"/":t)}const Dn=/^:[\w-]+$/,Bn=3,Mn=2,Gn=1,Hn=10,Wn=-2,Un=e=>"*"===e;function _n(e,t){let n=e.split("/"),r=n.length;return n.some(Un)&&(r+=Wn),t&&(r+=Mn),n.filter(e=>!Un(e)).reduce((e,t)=>e+(Dn.test(t)?Bn:""===t?Gn:Hn),r)}function Yn(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===o?t:t.slice(o.length)||"/",d=Qn({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),u=e.route;if(!d&&s&&n&&!r[r.length-1].route.index&&(d=Qn({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:rr([o,d.pathname]),pathnameBase:ir(rr([o,d.pathnameBase])),route:u}),"/"!==d.pathnameBase&&(o=rr([o,d.pathnameBase]))}return a}function Qn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Tn("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=l[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=i&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:o,pathnameBase:a,pattern:e}}function Zn(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return Tn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Vn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const qn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Xn(e,t){void 0===t&&(t="/");let n,{pathname:r,search:i="",hash:o=""}="string"===typeof e?Ln(e):e;if(r)if(a=r,qn.test(a))n=r;else{if(r.includes("//")){let e=r;r=r.replace(/\/\/+/g,"/"),Tn(!1,"Pathnames cannot have embedded double slashes - normalizing "+e+" -> "+r)}n=r.startsWith("/")?Jn(r.substring(1),"/"):Jn(r,t)}else n=t;var a;return{pathname:n,search:or(i),hash:ar(o)}}function Jn(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function Kn(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function er(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function tr(e,t){let n=er(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function nr(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=Ln(e):(i=En({},e),Sn(!i.pathname||!i.pathname.includes("?"),Kn("?","pathname","search",i)),Sn(!i.pathname||!i.pathname.includes("#"),Kn("#","pathname","hash",i)),Sn(!i.search||!i.search.includes("#"),Kn("#","search","hash",i)));let o,a=""===e||""===i.pathname,l=a?"/":i.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let s=Xn(i,o),c=l&&"/"!==l&&l.endsWith("/"),d=(a||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!c&&!d||(s.pathname+="/"),s}const rr=e=>e.join("/").replace(/\/\/+/g,"/"),ir=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),or=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ar=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;class lr{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function sr(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const cr=["post","put","patch","delete"],dr=new Set(cr),ur=["get",...cr],hr=new Set(ur),pr=new Set([301,302,303,307,308]),fr=new Set([307,308]),gr={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mr={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},br=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vr=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),yr="remix-router-transitions";function wr(e){const t=e.window?e.window:"undefined"!==typeof window?window:void 0,n="undefined"!==typeof t&&"undefined"!==typeof t.document&&"undefined"!==typeof t.document.createElement,r=!n;let i;if(Sn(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let t=e.detectErrorBoundary;i=e=>({hasErrorBoundary:t(e)})}else i=vr;let o,a,l,s={},c=Fn(e.routes,i,void 0,s),d=e.basename||"/",u=e.dataStrategy||Ir,h=e.patchRoutesOnNavigation,p=En({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,g=new Set,m=null,x=null,b=null,v=null!=e.hydrationData,y=Rn(c,e.history.location,d),w=!1,E=null;if(null==y&&!h){let t=_r(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=Ur(c);y=n,E={[r.id]:t}}if(y&&!e.hydrationData){fe(y,c,e.history.location.pathname).active&&(y=null)}if(y)if(y.some(e=>e.route.lazy))a=!1;else if(y.some(e=>e.route.loader))if(p.v7_partialHydration){let t=e.hydrationData?e.hydrationData.loaderData:null,n=e.hydrationData?e.hydrationData.errors:null;if(n){let e=y.findIndex(e=>void 0!==n[e.route.id]);a=y.slice(0,e+1).every(e=>!Ar(e.route,t,n))}else a=y.every(e=>!Ar(e.route,t,n))}else a=null!=e.hydrationData;else a=!0;else if(a=!1,y=[],p.v7_partialHydration){let t=fe(null,c,e.history.location.pathname);t.active&&t.matches&&(w=!0,y=t.matches)}let j,S,T={historyAction:e.history.action,location:e.history.location,matches:y,initialized:a,navigation:gr,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||E,fetchers:new Map,blockers:new Map},A=vn.Pop,k=!1,C=!1,L=new Map,$=null,I=!1,P=!1,F=[],R=new Set,O=new Map,N=0,z=-1,D=new Map,B=new Set,M=new Map,G=new Map,H=new Set,W=new Map,U=new Map;function _(e,t){void 0===t&&(t={}),T=En({},T,e);let n=[],r=[];p.v7_fetcherPersist&&T.fetchers.forEach((e,t)=>{"idle"===e.state&&(H.has(t)?r.push(t):n.push(t))}),H.forEach(e=>{T.fetchers.has(e)||O.has(e)||r.push(e)}),[...g].forEach(e=>e(T,{deletedFetchers:r,viewTransitionOpts:t.viewTransitionOpts,flushSync:!0===t.flushSync})),p.v7_fetcherPersist?(n.forEach(e=>T.fetchers.delete(e)),r.forEach(e=>ne(e))):r.forEach(e=>H.delete(e))}function Y(t,n,r){var i,a;let l,{flushSync:s}=void 0===r?{}:r,d=null!=T.actionData&&null!=T.navigation.formMethod&&ti(T.navigation.formMethod)&&"loading"===T.navigation.state&&!0!==(null==(i=t.state)?void 0:i._isRedirect);l=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:d?T.actionData:null;let u=n.loaderData?Gr(T.loaderData,n.loaderData,n.matches||[],n.errors):T.loaderData,h=T.blockers;h.size>0&&(h=new Map(h),h.forEach((e,t)=>h.set(t,xr)));let p,f=!0===k||null!=T.navigation.formMethod&&ti(T.navigation.formMethod)&&!0!==(null==(a=t.state)?void 0:a._isRedirect);if(o&&(c=o,o=void 0),I||A===vn.Pop||(A===vn.Push?e.history.push(t,t.state):A===vn.Replace&&e.history.replace(t,t.state)),A===vn.Pop){let e=L.get(T.location.pathname);e&&e.has(t.pathname)?p={currentLocation:T.location,nextLocation:t}:L.has(t.pathname)&&(p={currentLocation:t,nextLocation:T.location})}else if(C){let e=L.get(T.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),L.set(T.location.pathname,e)),p={currentLocation:T.location,nextLocation:t}}_(En({},n,{actionData:l,loaderData:u,historyAction:A,location:t,initialized:!0,navigation:gr,revalidation:"idle",restoreScrollPosition:pe(t,n.matches||T.matches),preventScrollReset:f,blockers:h}),{viewTransitionOpts:p,flushSync:!0===s}),A=vn.Pop,k=!1,C=!1,I=!1,P=!1,F=[]}async function Q(t,n,r){j&&j.abort(),j=null,A=t,I=!0===(r&&r.startUninterruptedRevalidation),function(e,t){if(m&&b){let n=he(e,t);m[n]=b()}}(T.location,T.matches),k=!0===(r&&r.preventScrollReset),C=!0===(r&&r.enableViewTransition);let i=o||c,a=r&&r.overrideNavigation,l=null!=r&&r.initialHydration&&T.matches&&T.matches.length>0&&!w?T.matches:Rn(i,n,d),s=!0===(r&&r.flushSync);if(l&&T.initialized&&!P&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(T.location,n)&&!(r&&r.submission&&ti(r.submission.formMethod)))return void Y(n,{matches:l},{flushSync:s});let u=fe(l,i,n.pathname);if(u.active&&u.matches&&(l=u.matches),!l){let{error:e,notFoundMatches:t,route:r}=de(n.pathname);return void Y(n,{matches:t,loaderData:{},errors:{[r.id]:e}},{flushSync:s})}j=new AbortController;let h,f=Nr(e.history,n,j.signal,r&&r.submission);if(r&&r.pendingError)h=[Wr(l).route.id,{type:In.error,error:r.pendingError}];else if(r&&r.submission&&ti(r.submission.formMethod)){let t=await async function(t,n,r,i,o,a){void 0===a&&(a={});J();let l,s=function(e,t){let n={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return n}(n,r);if(_({navigation:s},{flushSync:!0===a.flushSync}),o){let e=await ge(i,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let t=Wr(e.partialMatches).route.id;return{matches:e.partialMatches,pendingActionResult:[t,{type:In.error,error:e.error}]}}if(!e.matches){let{notFoundMatches:e,error:t,route:r}=de(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:In.error,error:t}]}}i=e.matches}let c=ai(i,n);if(c.route.action||c.route.lazy){if(l=(await q("action",T,t,[c],i,null))[c.route.id],t.signal.aborted)return{shortCircuited:!0}}else l={type:In.error,error:_r(405,{method:t.method,pathname:n.pathname,routeId:c.route.id})};if(Xr(l)){let n;if(a&&null!=a.replace)n=a.replace;else{n=Or(l.response.headers.get("Location"),new URL(t.url),d,e.history)===T.location.pathname+T.location.search}return await V(t,l,!0,{submission:r,replace:n}),{shortCircuited:!0}}if(Vr(l))throw _r(400,{type:"defer-action"});if(qr(l)){let e=Wr(i,c.route.id);return!0!==(a&&a.replace)&&(A=vn.Push),{matches:i,pendingActionResult:[e.route.id,l]}}return{matches:i,pendingActionResult:[c.route.id,l]}}(f,n,r.submission,l,u.active,{replace:r.replace,flushSync:s});if(t.shortCircuited)return;if(t.pendingActionResult){let[e,r]=t.pendingActionResult;if(qr(r)&&sr(r.error)&&404===r.error.status)return j=null,void Y(n,{matches:t.matches,loaderData:{},errors:{[e]:r.error}})}l=t.matches||l,h=t.pendingActionResult,a=si(n,r.submission),s=!1,u.active=!1,f=Nr(e.history,f.url,f.signal)}let{shortCircuited:g,matches:x,loaderData:v,errors:y}=await async function(t,n,r,i,a,l,s,u,h,f,g){let m=a||si(n,l),x=l||s||li(m),b=!I&&(!p.v7_partialHydration||!h);if(i){if(b){let e=Z(g);_(En({navigation:m},void 0!==e?{actionData:e}:{}),{flushSync:f})}let e=await ge(r,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let t=Wr(e.partialMatches).route.id;return{matches:e.partialMatches,loaderData:{},errors:{[t]:e.error}}}if(!e.matches){let{error:e,notFoundMatches:t,route:r}=de(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}r=e.matches}let v=o||c,[y,w]=Tr(e.history,T,r,x,n,p.v7_partialHydration&&!0===h,p.v7_skipActionErrorRevalidation,P,F,R,H,M,B,v,d,g);if(ue(e=>!(r&&r.some(t=>t.route.id===e))||y&&y.some(t=>t.route.id===e)),z=++N,0===y.length&&0===w.length){let e=oe();return Y(n,En({matches:r,loaderData:{},errors:g&&qr(g[1])?{[g[0]]:g[1].error}:null},Hr(g),e?{fetchers:new Map(T.fetchers)}:{}),{flushSync:f}),{shortCircuited:!0}}if(b){let e={};if(!i){e.navigation=m;let t=Z(g);void 0!==t&&(e.actionData=t)}w.length>0&&(e.fetchers=function(e){return e.forEach(e=>{let t=T.fetchers.get(e.key),n=ci(void 0,t?t.data:void 0);T.fetchers.set(e.key,n)}),new Map(T.fetchers)}(w)),_(e,{flushSync:f})}w.forEach(e=>{re(e.key),e.controller&&O.set(e.key,e.controller)});let E=()=>w.forEach(e=>re(e.key));j&&j.signal.addEventListener("abort",E);let{loaderResults:S,fetcherResults:A}=await X(T,r,y,w,t);if(t.signal.aborted)return{shortCircuited:!0};j&&j.signal.removeEventListener("abort",E);w.forEach(e=>O.delete(e.key));let k=Yr(S);if(k)return await V(t,k.result,!0,{replace:u}),{shortCircuited:!0};if(k=Yr(A),k)return B.add(k.key),await V(t,k.result,!0,{replace:u}),{shortCircuited:!0};let{loaderData:C,errors:L}=Mr(T,r,S,g,w,A,W);W.forEach((e,t)=>{e.subscribe(n=>{(n||e.done)&&W.delete(t)})}),p.v7_partialHydration&&h&&T.errors&&(L=En({},T.errors,L));let $=oe(),D=ae(z),G=$||D||w.length>0;return En({matches:r,loaderData:C,errors:L},G?{fetchers:new Map(T.fetchers)}:{})}(f,n,l,u.active,a,r&&r.submission,r&&r.fetcherSubmission,r&&r.replace,r&&!0===r.initialHydration,s,h);g||(j=null,Y(n,En({matches:x||l},Hr(h),{loaderData:v,errors:y})))}function Z(e){return e&&!qr(e[1])?{[e[0]]:e[1].data}:T.actionData?0===Object.keys(T.actionData).length?null:T.actionData:void 0}async function V(r,i,o,a){let{submission:l,fetcherSubmission:s,preventScrollReset:c,replace:u}=void 0===a?{}:a;i.response.headers.has("X-Remix-Revalidate")&&(P=!0);let h=i.response.headers.get("Location");Sn(h,"Expected a Location header on the redirect Response"),h=Or(h,new URL(r.url),d,e.history);let p=kn(T.location,h,{_isRedirect:!0});if(n){let n=!1;if(i.response.headers.has("X-Remix-Reload-Document"))n=!0;else if(br.test(h)){const r=e.history.createURL(h);n=r.origin!==t.location.origin||null==Vn(r.pathname,d)}if(n)return void(u?t.location.replace(h):t.location.assign(h))}j=null;let f=!0===u||i.response.headers.has("X-Remix-Replace")?vn.Replace:vn.Push,{formMethod:g,formAction:m,formEncType:x}=T.navigation;!l&&!s&&g&&m&&x&&(l=li(T.navigation));let b=l||s;if(fr.has(i.response.status)&&b&&ti(b.formMethod))await Q(f,p,{submission:En({},b,{formAction:h}),preventScrollReset:c||k,enableViewTransition:o?C:void 0});else{let e=si(p,l);await Q(f,p,{overrideNavigation:e,fetcherSubmission:s,preventScrollReset:c||k,enableViewTransition:o?C:void 0})}}async function q(e,t,n,r,o,a){let l,c={};try{l=await Pr(u,e,t,n,r,o,a,s,i)}catch(h){return r.forEach(e=>{c[e.route.id]={type:In.error,error:h}}),c}for(let[i,s]of Object.entries(l))if(Zr(s)){let e=s.result;c[i]={type:In.redirect,response:Rr(e,n,i,o,d,p.v7_relativeSplatPath)}}else c[i]=await Fr(s);return c}async function X(t,n,r,i,o){let a=t.matches,l=q("loader",t,o,r,n,null),s=Promise.all(i.map(async n=>{if(n.matches&&n.match&&n.controller){let r=(await q("loader",t,Nr(e.history,n.path,n.controller.signal),[n.match],n.matches,n.key))[n.match.route.id];return{[n.key]:r}}return Promise.resolve({[n.key]:{type:In.error,error:_r(404,{pathname:n.path})}})})),c=await l,d=(await s).reduce((e,t)=>Object.assign(e,t),{});return await Promise.all([ni(n,c,o.signal,a,t.loaderData),ri(n,d,i)]),{loaderResults:c,fetcherResults:d}}function J(){P=!0,F.push(...ue()),M.forEach((e,t)=>{O.has(t)&&R.add(t),re(t)})}function K(e,t,n){void 0===n&&(n={}),T.fetchers.set(e,t),_({fetchers:new Map(T.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function ee(e,t,n,r){void 0===r&&(r={});let i=Wr(T.matches,t);ne(e),_({errors:{[i.route.id]:n},fetchers:new Map(T.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function te(e){return G.set(e,(G.get(e)||0)+1),H.has(e)&&H.delete(e),T.fetchers.get(e)||mr}function ne(e){let t=T.fetchers.get(e);!O.has(e)||t&&"loading"===t.state&&D.has(e)||re(e),M.delete(e),D.delete(e),B.delete(e),p.v7_fetcherPersist&&H.delete(e),R.delete(e),T.fetchers.delete(e)}function re(e){let t=O.get(e);t&&(t.abort(),O.delete(e))}function ie(e){for(let t of e){let e=di(te(t).data);T.fetchers.set(t,e)}}function oe(){let e=[],t=!1;for(let n of B){let r=T.fetchers.get(n);Sn(r,"Expected fetcher: "+n),"loading"===r.state&&(B.delete(n),e.push(n),t=!0)}return ie(e),t}function ae(e){let t=[];for(let[n,r]of D)if(r<e){let e=T.fetchers.get(n);Sn(e,"Expected fetcher: "+n),"loading"===e.state&&(re(n),D.delete(n),t.push(n))}return ie(t),t.length>0}function le(e){T.blockers.delete(e),U.delete(e)}function se(e,t){let n=T.blockers.get(e)||xr;Sn("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(T.blockers);r.set(e,t),_({blockers:r})}function ce(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===U.size)return;U.size>1&&Tn(!1,"A router only supports one blocker at a time");let i=Array.from(U.entries()),[o,a]=i[i.length-1],l=T.blockers.get(o);return l&&"proceeding"===l.state?void 0:a({currentLocation:t,nextLocation:n,historyAction:r})?o:void 0}function de(e){let t=_r(404,{pathname:e}),n=o||c,{matches:r,route:i}=Ur(n);return ue(),{notFoundMatches:r,route:i,error:t}}function ue(e){let t=[];return W.forEach((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),W.delete(r))}),t}function he(e,t){if(x){let n=x(e,t.map(e=>function(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}(e,T.loaderData)));return n||e.key}return e.key}function pe(e,t){if(m){let n=he(e,t),r=m[n];if("number"===typeof r)return r}return null}function fe(e,t,n){if(h){if(!e){return{active:!0,matches:On(t,n,d,!0)||[]}}if(Object.keys(e[0].params).length>0){return{active:!0,matches:On(t,n,d,!0)}}}return{active:!1,matches:null}}async function ge(e,t,n,r){if(!h)return{type:"success",matches:e};let a=e;for(;;){let e=null==o,u=o||c,p=s;try{await h({signal:n,path:t,matches:a,fetcherKey:r,patch:(e,t)=>{n.aborted||Lr(e,t,u,p,i)}})}catch(l){return{type:"error",error:l,partialMatches:a}}finally{e&&!n.aborted&&(c=[...c])}if(n.aborted)return{type:"aborted"};let f=Rn(u,t,d);if(f)return{type:"success",matches:f};let g=On(u,t,d,!0);if(!g||a.length===g.length&&a.every((e,t)=>e.route.id===g[t].route.id))return{type:"success",matches:null};a=g}}return l={get basename(){return d},get future(){return p},get state(){return T},get routes(){return c},get window(){return t},initialize:function(){if(f=e.history.listen(t=>{let{action:n,location:r,delta:i}=t;if(S)return S(),void(S=void 0);Tn(0===U.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let o=ce({currentLocation:T.location,nextLocation:r,historyAction:n});if(o&&null!=i){let t=new Promise(e=>{S=e});return e.history.go(-1*i),void se(o,{state:"blocked",location:r,proceed(){se(o,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),t.then(()=>e.history.go(i))},reset(){let e=new Map(T.blockers);e.set(o,xr),_({blockers:e})}})}return Q(n,r)}),n){!function(e,t){try{let n=e.sessionStorage.getItem(yr);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(n){}}(t,L);let e=()=>function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(yr,JSON.stringify(r))}catch(n){Tn(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}(t,L);t.addEventListener("pagehide",e),$=()=>t.removeEventListener("pagehide",e)}return T.initialized||Q(vn.Pop,T.location,{initialHydration:!0}),l},subscribe:function(e){return g.add(e),()=>g.delete(e)},enableScrollRestoration:function(e,t,n){if(m=e,b=t,x=n||null,!v&&T.navigation===gr){v=!0;let e=pe(T.location,T.matches);null!=e&&_({restoreScrollPosition:e})}return()=>{m=null,b=null,x=null}},navigate:async function t(n,r){if("number"===typeof n)return void e.history.go(n);let i=Er(T.location,T.matches,d,p.v7_prependBasename,n,p.v7_relativeSplatPath,null==r?void 0:r.fromRouteId,null==r?void 0:r.relative),{path:o,submission:a,error:l}=jr(p.v7_normalizeFormMethod,!1,i,r),s=T.location,c=kn(T.location,o,r&&r.state);c=En({},c,e.history.encodeLocation(c));let u=r&&null!=r.replace?r.replace:void 0,h=vn.Push;!0===u?h=vn.Replace:!1===u||null!=a&&ti(a.formMethod)&&a.formAction===T.location.pathname+T.location.search&&(h=vn.Replace);let f=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,g=!0===(r&&r.flushSync),m=ce({currentLocation:s,nextLocation:c,historyAction:h});if(!m)return await Q(h,c,{submission:a,pendingError:l,preventScrollReset:f,replace:r&&r.replace,enableViewTransition:r&&r.viewTransition,flushSync:g});se(m,{state:"blocked",location:c,proceed(){se(m,{state:"proceeding",proceed:void 0,reset:void 0,location:c}),t(n,r)},reset(){let e=new Map(T.blockers);e.set(m,xr),_({blockers:e})}})},fetch:function(t,n,i,a){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");re(t);let l=!0===(a&&a.flushSync),s=o||c,u=Er(T.location,T.matches,d,p.v7_prependBasename,i,p.v7_relativeSplatPath,n,null==a?void 0:a.relative),h=Rn(s,u,d),f=fe(h,s,u);if(f.active&&f.matches&&(h=f.matches),!h)return void ee(t,n,_r(404,{pathname:u}),{flushSync:l});let{path:g,submission:m,error:x}=jr(p.v7_normalizeFormMethod,!0,u,a);if(x)return void ee(t,n,x,{flushSync:l});let b=ai(h,g),v=!0===(a&&a.preventScrollReset);m&&ti(m.formMethod)?async function(t,n,r,i,a,l,s,u,h){function f(e){if(!e.route.action&&!e.route.lazy){let e=_r(405,{method:h.formMethod,pathname:r,routeId:n});return ee(t,n,e,{flushSync:s}),!0}return!1}if(J(),M.delete(t),!l&&f(i))return;let g=T.fetchers.get(t);K(t,function(e,t){let n={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0};return n}(h,g),{flushSync:s});let m=new AbortController,x=Nr(e.history,r,m.signal,h);if(l){let e=await ge(a,new URL(x.url).pathname,x.signal,t);if("aborted"===e.type)return;if("error"===e.type)return void ee(t,n,e.error,{flushSync:s});if(!e.matches)return void ee(t,n,_r(404,{pathname:r}),{flushSync:s});if(f(i=ai(a=e.matches,r)))return}O.set(t,m);let b=N,v=await q("action",T,x,[i],a,t),y=v[i.route.id];if(x.signal.aborted)return void(O.get(t)===m&&O.delete(t));if(p.v7_fetcherPersist&&H.has(t)){if(Xr(y)||qr(y))return void K(t,di(void 0))}else{if(Xr(y))return O.delete(t),z>b?void K(t,di(void 0)):(B.add(t),K(t,ci(h)),V(x,y,!1,{fetcherSubmission:h,preventScrollReset:u}));if(qr(y))return void ee(t,n,y.error)}if(Vr(y))throw _r(400,{type:"defer-action"});let w=T.navigation.location||T.location,E=Nr(e.history,w,m.signal),S=o||c,k="idle"!==T.navigation.state?Rn(S,T.navigation.location,d):T.matches;Sn(k,"Didn't find any matches after fetcher action");let C=++N;D.set(t,C);let L=ci(h,y.data);T.fetchers.set(t,L);let[$,I]=Tr(e.history,T,k,h,w,!1,p.v7_skipActionErrorRevalidation,P,F,R,H,M,B,S,d,[i.route.id,y]);I.filter(e=>e.key!==t).forEach(e=>{let t=e.key,n=T.fetchers.get(t),r=ci(void 0,n?n.data:void 0);T.fetchers.set(t,r),re(t),e.controller&&O.set(t,e.controller)}),_({fetchers:new Map(T.fetchers)});let G=()=>I.forEach(e=>re(e.key));m.signal.addEventListener("abort",G);let{loaderResults:U,fetcherResults:Q}=await X(T,k,$,I,E);if(m.signal.aborted)return;m.signal.removeEventListener("abort",G),D.delete(t),O.delete(t),I.forEach(e=>O.delete(e.key));let Z=Yr(U);if(Z)return V(E,Z.result,!1,{preventScrollReset:u});if(Z=Yr(Q),Z)return B.add(Z.key),V(E,Z.result,!1,{preventScrollReset:u});let{loaderData:te,errors:ne}=Mr(T,k,U,void 0,I,Q,W);if(T.fetchers.has(t)){let e=di(y.data);T.fetchers.set(t,e)}ae(C),"loading"===T.navigation.state&&C>z?(Sn(A,"Expected pending action"),j&&j.abort(),Y(T.navigation.location,{matches:k,loaderData:te,errors:ne,fetchers:new Map(T.fetchers)})):(_({errors:ne,loaderData:Gr(T.loaderData,te,k,ne),fetchers:new Map(T.fetchers)}),P=!1)}(t,n,g,b,h,f.active,l,v,m):(M.set(t,{routeId:n,path:g}),async function(t,n,r,i,o,a,l,s,c){let d=T.fetchers.get(t);K(t,ci(c,d?d.data:void 0),{flushSync:l});let u=new AbortController,h=Nr(e.history,r,u.signal);if(a){let e=await ge(o,new URL(h.url).pathname,h.signal,t);if("aborted"===e.type)return;if("error"===e.type)return void ee(t,n,e.error,{flushSync:l});if(!e.matches)return void ee(t,n,_r(404,{pathname:r}),{flushSync:l});i=ai(o=e.matches,r)}O.set(t,u);let p=N,f=await q("loader",T,h,[i],o,t),g=f[i.route.id];Vr(g)&&(g=await ii(g,h.signal,!0)||g);O.get(t)===u&&O.delete(t);if(h.signal.aborted)return;if(H.has(t))return void K(t,di(void 0));if(Xr(g))return z>p?void K(t,di(void 0)):(B.add(t),void await V(h,g,!1,{preventScrollReset:s}));if(qr(g))return void ee(t,n,g.error);Sn(!Vr(g),"Unhandled fetcher deferred data"),K(t,di(g.data))}(t,n,g,b,h,f.active,l,v,m))},revalidate:function(){J(),_({revalidation:"loading"}),"submitting"!==T.navigation.state&&("idle"!==T.navigation.state?Q(A||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation,enableViewTransition:!0===C}):Q(T.historyAction,T.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:te,deleteFetcher:function(e){let t=(G.get(e)||0)-1;t<=0?(G.delete(e),H.add(e),p.v7_fetcherPersist||ne(e)):G.set(e,t),_({fetchers:new Map(T.fetchers)})},dispose:function(){f&&f(),$&&$(),g.clear(),j&&j.abort(),T.fetchers.forEach((e,t)=>ne(t)),T.blockers.forEach((e,t)=>le(t))},getBlocker:function(e,t){let n=T.blockers.get(e)||xr;return U.get(e)!==t&&U.set(e,t),n},deleteBlocker:le,patchRoutes:function(e,t){let n=null==o;Lr(e,t,o||c,s,i),n&&(c=[...c],_({}))},_internalFetchControllers:O,_internalActiveDeferreds:W,_internalSetRoutes:function(e){s={},o=Fn(e,i,void 0,s)}},l}Symbol("deferred");function Er(e,t,n,r,i,o,a,l){let s,c;if(a){s=[];for(let e of t)if(s.push(e),e.route.id===a){c=e;break}}else s=t,c=t[t.length-1];let d=nr(i||".",tr(s,o),Vn(e.pathname,n)||e.pathname,"path"===l);if(null==i&&(d.search=e.search,d.hash=e.hash),(null==i||""===i||"."===i)&&c){let e=oi(d.search);if(c.route.index&&!e)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&e){let e=new URLSearchParams(d.search),t=e.getAll("index");e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();d.search=n?"?"+n:""}}return r&&"/"!==n&&(d.pathname="/"===d.pathname?n:rr([n,d.pathname])),Cn(d)}function jr(e,t,n,r){if(!r||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(r))return{path:n};if(r.formMethod&&!ei(r.formMethod))return{path:n,error:_r(405,{method:r.formMethod})};let i,o,a=()=>({path:n,error:_r(400,{type:"invalid-body"})}),l=r.formMethod||"get",s=e?l.toUpperCase():l.toLowerCase(),c=Qr(n);if(void 0!==r.body){if("text/plain"===r.formEncType){if(!ti(s))return a();let e="string"===typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"},""):String(r.body);return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){if(!ti(s))return a();try{let e="string"===typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(h){return a()}}}if(Sn("function"===typeof FormData,"FormData is not available in this environment"),r.formData)i=zr(r.formData),o=r.formData;else if(r.body instanceof FormData)i=zr(r.body),o=r.body;else if(r.body instanceof URLSearchParams)i=r.body,o=Dr(i);else if(null==r.body)i=new URLSearchParams,o=new FormData;else try{i=new URLSearchParams(r.body),o=Dr(i)}catch(h){return a()}let d={formMethod:s,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:o,json:void 0,text:void 0};if(ti(d.formMethod))return{path:n,submission:d};let u=Ln(n);return t&&u.search&&oi(u.search)&&i.append("index",""),u.search="?"+i,{path:Cn(u),submission:d}}function Sr(e,t,n){void 0===n&&(n=!1);let r=e.findIndex(e=>e.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function Tr(e,t,n,r,i,o,a,l,s,c,d,u,h,p,f,g){let m=g?qr(g[1])?g[1].error:g[1].data:void 0,x=e.createURL(t.location),b=e.createURL(i),v=n;o&&t.errors?v=Sr(n,Object.keys(t.errors)[0],!0):g&&qr(g[1])&&(v=Sr(n,g[0]));let y=g?g[1].statusCode:void 0,w=a&&y&&y>=400,E=v.filter((e,n)=>{let{route:i}=e;if(i.lazy)return!0;if(null==i.loader)return!1;if(o)return Ar(i,t.loaderData,t.errors);if(function(e,t,n){let r=!t||n.route.id!==t.route.id,i=void 0===e[n.route.id];return r||i}(t.loaderData,t.matches[n],e)||s.some(t=>t===e.route.id))return!0;let a=t.matches[n],c=e;return Cr(e,En({currentUrl:x,currentParams:a.params,nextUrl:b,nextParams:c.params},r,{actionResult:m,actionStatus:y,defaultShouldRevalidate:!w&&(l||x.pathname+x.search===b.pathname+b.search||x.search!==b.search||kr(a,c))}))}),j=[];return u.forEach((e,i)=>{if(o||!n.some(t=>t.route.id===e.routeId)||d.has(i))return;let a=Rn(p,e.path,f);if(!a)return void j.push({key:i,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let s=t.fetchers.get(i),u=ai(a,e.path),g=!1;h.has(i)?g=!1:c.has(i)?(c.delete(i),g=!0):g=s&&"idle"!==s.state&&void 0===s.data?l:Cr(u,En({currentUrl:x,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:m,actionStatus:y,defaultShouldRevalidate:!w&&l})),g&&j.push({key:i,routeId:e.routeId,path:e.path,matches:a,match:u,controller:new AbortController})}),[E,j]}function Ar(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=null!=t&&void 0!==t[e.id],i=null!=n&&void 0!==n[e.id];return!(!r&&i)&&("function"===typeof e.loader&&!0===e.loader.hydrate||!r&&!i)}function kr(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Cr(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"===typeof n)return n}return t.defaultShouldRevalidate}function Lr(e,t,n,r,i){var o;let a;if(e){let t=r[e];Sn(t,"No route found to patch children into: routeId = "+e),t.children||(t.children=[]),a=t.children}else a=n;let l=Fn(t.filter(e=>!a.some(t=>$r(e,t))),i,[e||"_","patch",String((null==(o=a)?void 0:o.length)||"0")],r);a.push(...l)}function $r(e,t){return"id"in e&&"id"in t&&e.id===t.id||e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive&&(!(e.children&&0!==e.children.length||t.children&&0!==t.children.length)||e.children.every((e,n)=>{var r;return null==(r=t.children)?void 0:r.some(t=>$r(e,t))}))}async function Ir(e){let{matches:t}=e,n=t.filter(e=>e.shouldLoad),r=await Promise.all(n.map(e=>e.resolve()));return r.reduce((e,t,r)=>Object.assign(e,{[n[r].route.id]:t}),{})}async function Pr(e,t,n,r,i,o,a,l,s,c){let d=o.map(e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Sn(i,"No route found in manifest");let o={};for(let a in r){let e=void 0!==i[a]&&"hasErrorBoundary"!==a;Tn(!e,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+a+'" will be ignored.'),e||Pn.has(a)||(o[a]=r[a])}Object.assign(i,o),Object.assign(i,En({},t(i),{lazy:void 0}))}(e.route,s,l):void 0),u=o.map((e,n)=>{let o=d[n],a=i.some(t=>t.route.id===e.route.id);return En({},e,{shouldLoad:a,resolve:async n=>(n&&"GET"===r.method&&(e.route.lazy||e.route.loader)&&(a=!0),a?async function(e,t,n,r,i,o){let a,l,s=r=>{let a,s=new Promise((e,t)=>a=t);l=()=>a(),t.signal.addEventListener("abort",l);let c=i=>"function"!==typeof r?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+e+'" [routeId: '+n.route.id+"]")):r({request:t,params:n.params,context:o},...void 0!==i?[i]:[]),d=(async()=>{try{return{type:"data",result:await(i?i(e=>c(e)):c())}}catch(e){return{type:"error",result:e}}})();return Promise.race([d,s])};try{let i=n.route[e];if(r)if(i){let e,[t]=await Promise.all([s(i).catch(t=>{e=t}),r]);if(void 0!==e)throw e;a=t}else{if(await r,i=n.route[e],!i){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw _r(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:In.data,result:void 0}}a=await s(i)}else{if(!i){let e=new URL(t.url);throw _r(404,{pathname:e.pathname+e.search})}a=await s(i)}Sn(void 0!==a.result,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(c){return{type:In.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return a}(t,r,e,o,n,c):Promise.resolve({type:In.data,result:void 0}))})}),h=await e({matches:u,request:r,params:o[0].params,fetcherKey:a,context:c});try{await Promise.all(d)}catch(p){}return h}async function Fr(e){let{result:t,type:n}=e;if(Kr(t)){let e;try{let n=t.headers.get("Content-Type");e=n&&/\bapplication\/json\b/.test(n)?null==t.body?null:await t.json():await t.text()}catch(u){return{type:In.error,error:u}}return n===In.error?{type:In.error,error:new lr(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:In.data,data:e,statusCode:t.status,headers:t.headers}}var r,i,o,a,l,s,c,d;return n===In.error?Jr(t)?t.data instanceof Error?{type:In.error,error:t.data,statusCode:null==(o=t.init)?void 0:o.status,headers:null!=(a=t.init)&&a.headers?new Headers(t.init.headers):void 0}:{type:In.error,error:new lr((null==(r=t.init)?void 0:r.status)||500,void 0,t.data),statusCode:sr(t)?t.status:void 0,headers:null!=(i=t.init)&&i.headers?new Headers(t.init.headers):void 0}:{type:In.error,error:t,statusCode:sr(t)?t.status:void 0}:function(e){let t=e;return t&&"object"===typeof t&&"object"===typeof t.data&&"function"===typeof t.subscribe&&"function"===typeof t.cancel&&"function"===typeof t.resolveData}(t)?{type:In.deferred,deferredData:t,statusCode:null==(l=t.init)?void 0:l.status,headers:(null==(s=t.init)?void 0:s.headers)&&new Headers(t.init.headers)}:Jr(t)?{type:In.data,data:t.data,statusCode:null==(c=t.init)?void 0:c.status,headers:null!=(d=t.init)&&d.headers?new Headers(t.init.headers):void 0}:{type:In.data,data:t}}function Rr(e,t,n,r,i,o){let a=e.headers.get("Location");if(Sn(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!br.test(a)){let l=r.slice(0,r.findIndex(e=>e.route.id===n)+1);a=Er(new URL(t.url),l,i,!0,a,o),e.headers.set("Location",a)}return e}function Or(e,t,n,r){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(br.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r);if(i.includes(o.protocol))throw new Error("Invalid redirect location");let a=null!=Vn(o.pathname,n);if(o.origin===t.origin&&a)return o.pathname+o.search+o.hash}try{let t=r.createURL(e);if(i.includes(t.protocol))throw new Error("Invalid redirect location")}catch(o){}return e}function Nr(e,t,n,r){let i=e.createURL(Qr(t)).toString(),o={signal:n};if(r&&ti(r.formMethod)){let{formMethod:e,formEncType:t}=r;o.method=e.toUpperCase(),"application/json"===t?(o.headers=new Headers({"Content-Type":t}),o.body=JSON.stringify(r.json)):"text/plain"===t?o.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?o.body=zr(r.formData):o.body=r.formData}return new Request(i,o)}function zr(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"===typeof r?r:r.name);return t}function Dr(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Br(e,t,n,r,i){let o,a={},l=null,s=!1,c={},d=n&&qr(n[1])?n[1].error:void 0;return e.forEach(n=>{if(!(n.route.id in t))return;let u=n.route.id,h=t[u];if(Sn(!Xr(h),"Cannot handle redirect results in processLoaderData"),qr(h)){let t=h.error;if(void 0!==d&&(t=d,d=void 0),l=l||{},i)l[u]=t;else{let n=Wr(e,u);null==l[n.route.id]&&(l[n.route.id]=t)}a[u]=void 0,s||(s=!0,o=sr(h.error)?h.error.status:500),h.headers&&(c[u]=h.headers)}else Vr(h)?(r.set(u,h.deferredData),a[u]=h.deferredData.data,null==h.statusCode||200===h.statusCode||s||(o=h.statusCode),h.headers&&(c[u]=h.headers)):(a[u]=h.data,h.statusCode&&200!==h.statusCode&&!s&&(o=h.statusCode),h.headers&&(c[u]=h.headers))}),void 0!==d&&n&&(l={[n[0]]:d},a[n[0]]=void 0),{loaderData:a,errors:l,statusCode:o||200,loaderHeaders:c}}function Mr(e,t,n,r,i,o,a){let{loaderData:l,errors:s}=Br(t,n,r,a,!1);return i.forEach(t=>{let{key:n,match:r,controller:i}=t,a=o[n];if(Sn(a,"Did not find corresponding fetcher result"),!i||!i.signal.aborted)if(qr(a)){let t=Wr(e.matches,null==r?void 0:r.route.id);s&&s[t.route.id]||(s=En({},s,{[t.route.id]:a.error})),e.fetchers.delete(n)}else if(Xr(a))Sn(!1,"Unhandled fetcher revalidation redirect");else if(Vr(a))Sn(!1,"Unhandled fetcher deferred data");else{let t=di(a.data);e.fetchers.set(n,t)}}),{loaderData:l,errors:s}}function Gr(e,t,n,r){let i=En({},t);for(let o of n){let n=o.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(i[n]=t[n]):void 0!==e[n]&&o.route.loader&&(i[n]=e[n]),r&&r.hasOwnProperty(n))break}return i}function Hr(e){return e?qr(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Wr(e,t){let n=t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e];return n.reverse().find(e=>!0===e.route.hasErrorBoundary)||e[0]}function Ur(e){let t=1===e.length?e[0]:e.find(e=>e.index||!e.path||"/"===e.path)||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function _r(e,t){let{pathname:n,routeId:r,method:i,type:o,message:a}=void 0===t?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(l="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===o?s="defer() is not supported in actions":"invalid-body"===o&&(s="Unable to encode submission body")):403===e?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):404===e?(l="Not Found",s='No route matches URL "'+n+'"'):405===e&&(l="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new lr(e||500,l,new Error(s),!0)}function Yr(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[e,r]=t[n];if(Xr(r))return{key:e,result:r}}}function Qr(e){return Cn(En({},"string"===typeof e?Ln(e):e,{hash:""}))}function Zr(e){return Kr(e.result)&&pr.has(e.result.status)}function Vr(e){return e.type===In.deferred}function qr(e){return e.type===In.error}function Xr(e){return(e&&e.type)===In.redirect}function Jr(e){return"object"===typeof e&&null!=e&&"type"in e&&"data"in e&&"init"in e&&"DataWithResponseInit"===e.type}function Kr(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"object"===typeof e.headers&&"undefined"!==typeof e.body}function ei(e){return hr.has(e.toLowerCase())}function ti(e){return dr.has(e.toLowerCase())}async function ni(e,t,n,r,i){let o=Object.entries(t);for(let a=0;a<o.length;a++){let[l,s]=o[a],c=e.find(e=>(null==e?void 0:e.route.id)===l);if(!c)continue;let d=r.find(e=>e.route.id===c.route.id),u=null!=d&&!kr(d,c)&&void 0!==(i&&i[c.route.id]);Vr(s)&&u&&await ii(s,n,!1).then(e=>{e&&(t[l]=e)})}}async function ri(e,t,n){for(let r=0;r<n.length;r++){let{key:i,routeId:o,controller:a}=n[r],l=t[i],s=e.find(e=>(null==e?void 0:e.route.id)===o);s&&(Vr(l)&&(Sn(a,"Expected an AbortController for revalidating fetcher deferred result"),await ii(l,a.signal,!0).then(e=>{e&&(t[i]=e)})))}}async function ii(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:In.data,data:e.deferredData.unwrappedData}}catch(r){return{type:In.error,error:r}}return{type:In.data,data:e.deferredData.data}}}function oi(e){return new URLSearchParams(e).getAll("index").some(e=>""===e)}function ai(e,t){let n="string"===typeof t?Ln(t).search:t.search;if(e[e.length-1].route.index&&oi(n||""))return e[e.length-1];let r=er(e);return r[r.length-1]}function li(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(t&&n&&r)return null!=i?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i}:null!=o?{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0}:void 0!==a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}:void 0}function si(e,t){if(t){return{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}return{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ci(e,t){if(e){return{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}}return{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function di(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ui(){return ui=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ui.apply(this,arguments)}const hi=r.createContext(null);const pi=r.createContext(null);const fi=r.createContext(null);const gi=r.createContext(null);const mi=r.createContext({outlet:null,matches:[],isDataRoute:!1});const xi=r.createContext(null);function bi(){return null!=r.useContext(gi)}function vi(){return bi()||Sn(!1),r.useContext(gi).location}function yi(e){r.useContext(fi).static||r.useLayoutEffect(e)}function wi(){let{isDataRoute:e}=r.useContext(mi);return e?function(){let{router:e}=Ri(Pi.UseNavigateStable),t=Ni(Fi.UseNavigateStable),n=r.useRef(!1);yi(()=>{n.current=!0});let i=r.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,ui({fromRouteId:t},i)))},[e,t]);return i}():function(){bi()||Sn(!1);let e=r.useContext(hi),{basename:t,future:n,navigator:i}=r.useContext(fi),{matches:o}=r.useContext(mi),{pathname:a}=vi(),l=JSON.stringify(tr(o,n.v7_relativeSplatPath)),s=r.useRef(!1);return yi(()=>{s.current=!0}),r.useCallback(function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof n)return void i.go(n);let o=nr(n,JSON.parse(l),a,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:rr([t,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)},[t,i,l,a,e])}()}const Ei=r.createContext(null);function ji(){return r.useContext(Ei)}function Si(){let{matches:e}=r.useContext(mi),t=e[e.length-1];return t?t.params:{}}function Ti(e,t){let{relative:n}=void 0===t?{}:t,{future:i}=r.useContext(fi),{matches:o}=r.useContext(mi),{pathname:a}=vi(),l=JSON.stringify(tr(o,i.v7_relativeSplatPath));return r.useMemo(()=>nr(e,JSON.parse(l),a,"path"===n),[e,l,a,n])}function Ai(e,t,n,i){bi()||Sn(!1);let{navigator:o}=r.useContext(fi),{matches:a}=r.useContext(mi),l=a[a.length-1],s=l?l.params:{},c=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let d,u=vi();if(t){var h;let e="string"===typeof t?Ln(t):t;"/"===c||(null==(h=e.pathname)?void 0:h.startsWith(c))||Sn(!1),d=e}else d=u;let p=d.pathname||"/",f=p;if("/"!==c){let e=c.replace(/^\//,"").split("/");f="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let g=Rn(e,{pathname:f});let m=Ii(g&&g.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:rr([c,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:rr([c,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,i);return t&&m?r.createElement(gi.Provider,{value:{location:ui({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:vn.Pop}},m):m}function ki(){let e=function(){var e;let t=r.useContext(xi),n=Oi(Fi.UseRouteError),i=Ni(Fi.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[i]}(),t=sr(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:o},n):null,null)}const Ci=r.createElement(ki,null);class Li extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(mi.Provider,{value:this.props.routeContext},r.createElement(xi.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $i(e){let{routeContext:t,match:n,children:i}=e,o=r.useContext(hi);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(mi.Provider,{value:t},i)}function Ii(e,t,n,i){var o;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===i&&(i=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=i)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(o=n)?void 0:o.errors;if(null!=s){let e=l.findIndex(e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id]));e>=0||Sn(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(n&&i&&i.v7_partialHydration)for(let r=0;r<l.length;r++){let e=l[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight((e,i,o)=>{let a,u=!1,h=null,p=null;var f;n&&(a=s&&i.route.id?s[i.route.id]:void 0,h=i.route.errorElement||Ci,c&&(d<0&&0===o?(f="route-fallback",!1||zi[f]||(zi[f]=!0),u=!0,p=null):d===o&&(u=!0,p=i.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,o+1)),m=()=>{let t;return t=a?h:u?p:i.route.Component?r.createElement(i.route.Component,null):i.route.element?i.route.element:e,r.createElement($i,{match:i,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:t})};return n&&(i.route.ErrorBoundary||i.route.errorElement||0===o)?r.createElement(Li,{location:n.location,revalidation:n.revalidation,component:h,error:a,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Pi=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pi||{}),Fi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fi||{});function Ri(e){let t=r.useContext(hi);return t||Sn(!1),t}function Oi(e){let t=r.useContext(pi);return t||Sn(!1),t}function Ni(e){let t=function(){let e=r.useContext(mi);return e||Sn(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||Sn(!1),n.route.id}const zi={};function Di(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}i.startTransition;function Bi(e){return function(e){let t=r.useContext(mi).outlet;return t?r.createElement(Ei.Provider,{value:e},t):t}(e.context)}function Mi(e){let{basename:t="/",children:n=null,location:i,navigationType:o=vn.Pop,navigator:a,static:l=!1,future:s}=e;bi()&&Sn(!1);let c=t.replace(/^\/*/,"/"),d=r.useMemo(()=>({basename:c,navigator:a,static:l,future:ui({v7_relativeSplatPath:!1},s)}),[c,s,a,l]);"string"===typeof i&&(i=Ln(i));let{pathname:u="/",search:h="",hash:p="",state:f=null,key:g="default"}=i,m=r.useMemo(()=>{let e=Vn(u,c);return null==e?null:{location:{pathname:e,search:h,hash:p,state:f,key:g},navigationType:o}},[c,u,h,p,f,g,o]);return null==m?null:r.createElement(fi.Provider,{value:d},r.createElement(gi.Provider,{children:n,value:m}))}new Promise(()=>{});r.Component;function Gi(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:r.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:r.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:r.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hi.apply(this,arguments)}function Wi(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Ui=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_i=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(Yg){}function Yi(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Hi({},t,{errors:Qi(t.errors)})),t}function Qi(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&"RouteErrorResponse"===i.__type)n[r]=new lr(i.status,i.statusText,i.data,!0===i.internal);else if(i&&"Error"===i.__type){if(i.__subType){let e=window[i.__subType];if("function"===typeof e)try{let t=new e(i.message);t.stack="",n[r]=t}catch(Yg){}}if(null==n[r]){let e=new Error(i.message);e.stack="",n[r]=e}}else n[r]=i;return n}const Zi=r.createContext({isTransitioning:!1});const Vi=r.createContext(new Map);const qi=i.startTransition,Xi=wn.flushSync;i.useId;function Ji(e){Xi?Xi(e):e()}class Ki{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}})}}function eo(e){let{fallbackElement:t,router:n,future:i}=e,[o,a]=r.useState(n.state),[l,s]=r.useState(),[c,d]=r.useState({isTransitioning:!1}),[u,h]=r.useState(),[p,f]=r.useState(),[g,m]=r.useState(),x=r.useRef(new Map),{v7_startTransition:b}=i||{},v=r.useCallback(e=>{b?function(e){qi?qi(e):e()}(e):e()},[b]),y=r.useCallback((e,t)=>{let{deletedFetchers:r,flushSync:i,viewTransitionOpts:o}=t;e.fetchers.forEach((e,t)=>{void 0!==e.data&&x.current.set(t,e.data)}),r.forEach(e=>x.current.delete(e));let l=null==n.window||null==n.window.document||"function"!==typeof n.window.document.startViewTransition;if(o&&!l){if(i){Ji(()=>{p&&(u&&u.resolve(),p.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:o.currentLocation,nextLocation:o.nextLocation})});let t=n.window.document.startViewTransition(()=>{Ji(()=>a(e))});return t.finished.finally(()=>{Ji(()=>{h(void 0),f(void 0),s(void 0),d({isTransitioning:!1})})}),void Ji(()=>f(t))}p?(u&&u.resolve(),p.skipTransition(),m({state:e,currentLocation:o.currentLocation,nextLocation:o.nextLocation})):(s(e),d({isTransitioning:!0,flushSync:!1,currentLocation:o.currentLocation,nextLocation:o.nextLocation}))}else i?Ji(()=>a(e)):v(()=>a(e))},[n.window,p,u,x,v]);r.useLayoutEffect(()=>n.subscribe(y),[n,y]),r.useEffect(()=>{c.isTransitioning&&!c.flushSync&&h(new Ki)},[c]),r.useEffect(()=>{if(u&&l&&n.window){let e=l,t=u.promise,r=n.window.document.startViewTransition(async()=>{v(()=>a(e)),await t});r.finished.finally(()=>{h(void 0),f(void 0),s(void 0),d({isTransitioning:!1})}),f(r)}},[v,l,u,n.window]),r.useEffect(()=>{u&&l&&o.location.key===l.location.key&&u.resolve()},[u,p,o.location,l]),r.useEffect(()=>{!c.isTransitioning&&g&&(s(g.state),d({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),m(void 0))},[c.isTransitioning,g]),r.useEffect(()=>{},[]);let w=r.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})}),[n]),E=n.basename||"/",j=r.useMemo(()=>({router:n,navigator:w,static:!1,basename:E}),[n,w,E]),S=r.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return r.useEffect(()=>Di(i,n.future),[i,n.future]),r.createElement(r.Fragment,null,r.createElement(hi.Provider,{value:j},r.createElement(pi.Provider,{value:o},r.createElement(Vi.Provider,{value:x.current},r.createElement(Zi.Provider,{value:c},r.createElement(Mi,{basename:E,location:o.location,navigationType:o.historyAction,navigator:w,future:S},o.initialized||n.future.v7_partialHydration?r.createElement(to,{routes:n.routes,future:n.future,state:o}):t))))),null)}const to=r.memo(no);function no(e){let{routes:t,future:n,state:r}=e;return Ai(t,void 0,r,n)}const ro="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,io=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oo=r.forwardRef(function(e,t){let n,{onClick:i,relative:o,reloadDocument:a,replace:l,state:s,target:c,to:d,preventScrollReset:u,viewTransition:h}=e,p=Wi(e,Ui),{basename:f}=r.useContext(fi),g=!1;if("string"===typeof d&&io.test(d)&&(n=d,ro))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=Vn(t.pathname,f);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:g=!0}catch(Yg){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;bi()||Sn(!1);let{basename:i,navigator:o}=r.useContext(fi),{hash:a,pathname:l,search:s}=Ti(e,{relative:n}),c=l;return"/"!==i&&(c="/"===l?i:rr([i,l])),o.createHref({pathname:c,search:s,hash:a})}(d,{relative:o}),x=function(e,t){let{target:n,replace:i,state:o,preventScrollReset:a,relative:l,viewTransition:s}=void 0===t?{}:t,c=wi(),d=vi(),u=Ti(e,{relative:l});return r.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==i?i:Cn(d)===Cn(u);c(e,{replace:n,state:o,preventScrollReset:a,relative:l,viewTransition:s})}},[d,c,u,i,o,n,e,a,l,s])}(d,{replace:l,state:s,target:c,preventScrollReset:u,relative:o,viewTransition:h});return r.createElement("a",Hi({},p,{href:n||m,onClick:g||a?i:function(e){i&&i(e),e.defaultPrevented||x(e)},ref:t,target:c}))});const ao=r.forwardRef(function(e,t){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:a=!1,style:l,to:s,viewTransition:c,children:d}=e,u=Wi(e,_i),h=Ti(s,{relative:u.relative}),p=vi(),f=r.useContext(pi),{navigator:g,basename:m}=r.useContext(fi),x=null!=f&&function(e,t){void 0===t&&(t={});let n=r.useContext(Zi);null==n&&Sn(!1);let{basename:i}=co(lo.useViewTransitionState),o=Ti(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Vn(n.currentLocation.pathname,i)||n.currentLocation.pathname,l=Vn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return null!=Qn(o.pathname,l)||null!=Qn(o.pathname,a)}(h)&&!0===c,b=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,v=p.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(v=v.toLowerCase(),y=y?y.toLowerCase():null,b=b.toLowerCase()),y&&m&&(y=Vn(y,m)||y);const w="/"!==b&&b.endsWith("/")?b.length-1:b.length;let E,j=v===b||!a&&v.startsWith(b)&&"/"===v.charAt(w),S=null!=y&&(y===b||!a&&y.startsWith(b)&&"/"===y.charAt(b.length)),T={isActive:j,isPending:S,isTransitioning:x},A=j?n:void 0;E="function"===typeof o?o(T):[o,j?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let k="function"===typeof l?l(T):l;return r.createElement(oo,Hi({},u,{"aria-current":A,className:E,ref:t,style:k,to:s,viewTransition:c}),"function"===typeof d?d(T):d)});var lo,so;function co(e){let t=r.useContext(hi);return t||Sn(!1),t}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lo||(lo={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(so||(so={}));const uo=e=>{let t;const n=new Set,r=(e,r)=>{const i="function"===typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=r?r:"object"!==typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,i,o);return o},ho=e=>e;const po=e=>{const t=(e=>e?uo(e):uo)(e),n=e=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ho;const n=r.useSyncExternalStore(e.subscribe,r.useCallback(()=>t(e.getState()),[e,t]),r.useCallback(()=>t(e.getInitialState()),[e,t]));return r.useDebugValue(n),n}(t,e);return Object.assign(n,t),n},fo=e=>e?po(e):po;function go(e,t){return function(){return Object.assign({},e,t(...arguments))}}function mo(e,t){let n;try{n=e()}catch(Yg){return}const r={getItem:e=>{var r;const i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),o=null!=(r=n.getItem(e))?r:null;return o instanceof Promise?o.then(i):i(o)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)};return r}const xo=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>xo(e)(n),catch(e){return this}}}catch(Yg){return{then(e){return this},catch:t=>xo(t)(Yg)}}},bo=(e,t)=>(n,r,i)=>{let o={storage:mo(()=>window.localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1,l=0;const s=new Set,c=new Set;let d=o.storage;if(!d)return e(function(){console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...arguments)},r,i);const u=()=>{const e=o.partialize({...r()});return d.setItem(o.name,{state:e,version:o.version})},h=i.setState;i.setState=(e,t)=>(h(e,t),u());const p=e(function(){return n(...arguments),u()},r,i);let f;i.getInitialState=()=>p;const g=()=>{var e,t;if(!d)return;const i=++l;a=!1,s.forEach(e=>{var t;return e(null!=(t=r())?t:p)});const h=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=r())?e:p))||void 0;return xo(d.getItem.bind(d))(o.name).then(e=>{if(e){if("number"!==typeof e.version||e.version===o.version)return[!1,e.state];if(o.migrate){const t=o.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;if(i!==l)return;const[a,s]=e;return f=o.merge(s,null!=(t=r())?t:p),n(f,!0),a?u():void 0}).then(()=>{i===l&&(null==h||h(r(),void 0),f=r(),a=!0,c.forEach(e=>e(f)))}).catch(e=>{i===l&&(null==h||h(void 0,e))})};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>g(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||g(),f||p};const vo=fo(bo(go({user:null,isAuthenticated:!0},e=>({setIsAuthenticated:t=>e({isAuthenticated:t}),setUser:t=>e({user:t})})),{name:"auth-storage",partialize:e=>({isAuthenticated:e.isAuthenticated,user:e.user})}));var yo=n(579);const wo=()=>{const{isAuthenticated:e}=vo();return(0,yo.jsxs)("div",{children:[(0,yo.jsxs)("header",{className:"root-header",children:[(0,yo.jsx)("div",{className:"root-header-logo",children:(0,yo.jsx)(oo,{to:"/",children:(0,yo.jsx)("img",{src:"/assets\\picture\\logo.png",alt:"FailLog"})})}),(0,yo.jsxs)("nav",{className:"root-header-nav",children:[(0,yo.jsx)(oo,{to:"/fail-logs",children:"\ud398\uc77c\ub85c\uadf8"}),(0,yo.jsx)(oo,{to:"/projects",children:"\ud504\ub85c\uc81d\ud2b8"}),(0,yo.jsx)(oo,{to:"/chronology",children:"\uc131\uc7a5\uc5f0\ub300\uae30"}),(0,yo.jsx)(oo,{to:"/community",children:"\ucee4\ubba4\ub2c8\ud2f0"}),(0,yo.jsx)(oo,{to:"/my-page/profile",children:"\ub9c8\uc774\ud398\uc774\uc9c0"})]}),(0,yo.jsx)("div",{className:"root-header-actions",children:e?(0,yo.jsx)("button",{className:"root-header-btn",children:"\ub85c\uadf8\uc544\uc6c3"}):(0,yo.jsx)(oo,{to:"/login",className:"root-header-btn",children:"\ub85c\uadf8\uc778"})})]}),(0,yo.jsx)("main",{children:(0,yo.jsx)(Bi,{})}),(0,yo.jsx)("footer",{className:"root-footer",children:(0,yo.jsxs)("div",{className:"root-footer-inner",children:[(0,yo.jsxs)("p",{className:"root-footer-logo",children:[(0,yo.jsx)("span",{className:"root-footer-logo-fail",children:"Fail"}),(0,yo.jsx)("span",{className:"root-footer-logo-log",children:"Log"})]}),(0,yo.jsxs)("div",{className:"root-footer-nav",children:[(0,yo.jsx)(oo,{to:"/terms",children:"\uc774\uc6a9\uc57d\uad00"}),(0,yo.jsx)(oo,{to:"/privacy",children:"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68"}),(0,yo.jsx)(oo,{to:"/support",children:"\uace0\uac1d\uc13c\ud130"})]}),(0,yo.jsxs)("div",{className:"root-footer-info",children:[(0,yo.jsx)("p",{children:"\ubc95\uc778\uba85 : FailLog | \ub300\ud45c\uc790 : 000 | \uc0ac\uc5c5\uc790 \ub4f1\ub85d\ubc88\ud638 : 000-00-00000 | \uc0ac\uc5c5 \uc18c\uc7ac\uc9c0 : \uc11c\uc6b8 \uac15\ub0a8\uad6c \ud14c\ud5e4\ub780\ub85c 146"}),(0,yo.jsx)("p",{children:"\uc774\uba54\uc77c : FailLog@FailLog.co.kr | \ud329\uc2a4 : 02-538-0021"})]}),(0,yo.jsx)("p",{className:"root-footer-copy",children:"\xa9 2026 FailLog. All rights reserved."})]})})]})},Eo=()=>(0,yo.jsx)(Bi,{});const jo=[{label:"\ud398\uc77c\ub85c\uadf8",desc:"\ubaa8\ub450\uc758 \uae30\ub85d\ub4e4\uc744\n\ud55c\ub208\uc5d0 \ubaa8\uc544\ubcf4\uae30",path:"/fail-logs",icon:n.p+"static/media/file_1324039.e7fb08dc067d5316833c5225b5e8379b.svg",iconBg:"linear-gradient(135deg, #F53102, #FF34C5)"},{label:"\ud504\ub85c\uc81d\ud2b8",desc:"\uc0c8\ub85c\uc6b4 \uc2e4\ud328 \uacbd\ud5d8\uc744\n\uad6c\uc870\ud654\ud558\uc5ec \uae30\ub85d\ud558\uc138\uc694",path:"/projects",icon:n.p+"static/media/routine_4088138.3c9e8faed99eea1300a2ba09c0cfd14c.svg",iconBg:"linear-gradient(135deg, #FF34C5, #F5EE03)"},{label:"\uc131\uc7a5 \uc5f0\ub300\uae30",desc:"\uc790\uc2e0\uc758 \ubc1c\uc804 \uacfc\uc815\uc744\n\ud655\uc778\ud558\uae30",path:"/chronology",icon:n.p+"static/media/graph_1357731.b2006abbb82c22f55fd640824798427c.svg",iconBg:"linear-gradient(135deg, #F5EE03, #00B53F)"},{label:"\ucee4\ubba4\ub2c8\ud2f0",desc:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc\n\uc18c\ud1b5\ud558\uae30",path:"/community",icon:n.p+"static/media/crm_304575.67a14f165db07ed97b71b212385a307a.svg",iconBg:"linear-gradient(135deg, #00B53F, #027DF0)"},{label:"\ub9c8\uc774\ud398\uc774\uc9c0",desc:"\ub0b4 \uc815\ubcf4\n\uad00\ub9ac\ud558\uae30",path:"/mypage",icon:n.p+"static/media/feedback_2512312.b29375fa99cf1f61f11f738c9153fd87.svg",iconBg:"linear-gradient(135deg, #027DF0, #9333EA)"}],So={};So.Container=on.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 40px;
    min-height: calc(100vh - 64px);
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`,So.TitleSection=on.div`
    text-align: center;
    margin-bottom: 60px;

    .main-menu-title {
        font-size: ${bn.FONT_SIZE.h1};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.black};
        margin: 0 0 40px 0;
        line-height: 1.2;
    }

    .main-menu-subtitle {
        font-size: ${bn.FONT_SIZE.h3_2};
        font-weight: ${bn.FONT_WEIGHT.regular};
        color: ${bn.PALETTE.black};
        margin: 0;
        line-height: 1.6;
    }
`,So.GradientText=on.span`
    background: linear-gradient(90deg, #027df0, #ab47ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`,So.CardWrapper=on.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`,So.Card=on.div`
    width: 200px;
    height: 240px;
    background: ${bn.PALETTE.white};
    border: 1.5px solid ${bn.GRAYSCALE[4]};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;
    padding: 24px 16px;
    box-sizing: border-box;
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

    &:hover {
        border-color: ${bn.PALETTE.third.main};
        transform: translateY(-10px);
        box-shadow: 0 8px 24px rgba(124, 58, 237, 0.15);
    }
`,So.CardIconBox=on.div`
    width: 80px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${e=>{let{$iconBg:t}=e;return t}};

    img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
`,So.CardLabel=on.p`
    font-size: ${bn.FONT_SIZE.h6};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
    margin: 0;
    text-align: center;
`,So.CardDesc=on.p`
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
    margin: 0;
    text-align: center;
    line-height: 1.5;
`;const To=()=>{const e=wi();return(0,yo.jsxs)(So.Container,{children:[(0,yo.jsxs)(So.TitleSection,{children:[(0,yo.jsxs)("h1",{className:"main-menu-title",children:["\uc2e4\ud328\uac00 \uc131\uc7a5\uc758 \uc790\uc0b0\uc774 \ub418\ub294 \uacf5\uac04, ",(0,yo.jsx)(So.GradientText,{children:"FailLog"})]}),(0,yo.jsxs)("p",{className:"main-menu-subtitle",children:["\uc2e4\ud328\ub97c \uae30\ub85d\ud558\uace0, \ub098\ub9cc\uc758 \uc131\uacf5 \ub370\uc774\ud130\ub97c \ub9cc\ub4e4\uc5b4 \ubcf4\uc138\uc694.",(0,yo.jsx)("br",{}),"\ubb34\uc5c7\uc744 \ub3c4\uc804\ud588\ub098\uc694?"]})]}),(0,yo.jsx)(So.CardWrapper,{children:jo.map(t=>(0,yo.jsxs)(So.Card,{onClick:()=>e(t.path),children:[(0,yo.jsx)(So.CardIconBox,{$iconBg:t.iconBg,children:(0,yo.jsx)("img",{src:t.icon,alt:t.label})}),(0,yo.jsx)(So.CardLabel,{children:t.label}),(0,yo.jsx)(So.CardDesc,{children:t.desc.split("\n").map((e,n)=>(0,yo.jsxs)(r.Fragment,{children:[e,n<t.desc.split("\n").length-1&&(0,yo.jsx)("br",{})]},n))})]},t.label))})]})};const Ao=n.p+"static/media/repeat_238888.69dc087d7c0c55466410455ea6c0bd59.svg";const ko=n.p+"static/media/wash-time_103937.c719a8e768a60c92934360d027b7736f.svg";const Co=n.p+"static/media/arrow_90418.2892c55c11157786e013a6d637ddbfeb.svg";const Lo=n.p+"static/media/file_1324039.e7fb08dc067d5316833c5225b5e8379b.svg";const $o=n.p+"static/media/bar-chart_347779.a0f98ce1032197041fa28ed494d7e5ff.svg";const Io=n.p+"static/media/teamwork_484616.41a6b4dd05d8ecd03d6387fe2895e412.svg";const Po=n.p+"static/media/cross-out_2586312.8a84a1fcc366500ef261e7c65c3edd32.svg";const Fo=n.p+"static/media/pie-chart_744334.0742d7eea1ff2f1f408cc137af19ed2c.svg";const Ro=n.p+"static/media/share_683175.ae608075bbc33d5285d03e55315c0bc3.svg";const Oo=n.p+"static/media/registration-mark_1203943.b4bb42fd3708f021218ee746452ca793.svg";const No=n.p+"static/media/ph--heart-light.1b4f410f3525a6bdf5d42355e0b97243.svg";const zo=n.p+"static/media/hugeicons--view.472198bf674adb70d85605ddf299cfdc.svg",Do=e=>{let{icon:t,$variant:n,stat:r,label:i}=e;return(0,yo.jsxs)(Yo.StatCard,{children:[(0,yo.jsx)(Yo.StatCardIcon,{$variant:n,children:(0,yo.jsx)("img",{src:t,alt:i})}),(0,yo.jsx)(Yo.StatCardStat,{$variant:n,children:r}),(0,yo.jsx)(Yo.StatCardLabel,{children:i})]})},Bo=[{icon:Ao,$variant:"red",stat:"73%",label:"\uac19\uc740 \uc720\ud615\uc758 \uc2e4\ud328\ub97c 2\ud68c \uc774\uc0c1 \uacbd\ud5d8"},{icon:ko,$variant:"blue",stat:"2\uc8fc",label:"\uc2e4\ud328\uc758 \ub9e5\ub77d\uc744 \uae30\uc5b5\ud558\ub294 \ud3c9\uade0 \uc2dc\uac04"},{icon:Co,$variant:"green",stat:"6\ubc30",label:"\uae30\ub85d\ub41c \uc2e4\ud328\ub97c \ubd84\uc11d\ud560 \ub54c \uac1c\uc120\uc728"}],Mo=e=>{let{icon:t,$variant:n,title:r,desc:i}=e;return(0,yo.jsxs)(Yo.MethodCard,{children:[(0,yo.jsx)(Yo.MethodCardIcon,{$variant:n,children:(0,yo.jsx)("img",{src:t,alt:r})}),(0,yo.jsx)(Yo.MethodCardTitle,{children:r}),(0,yo.jsx)(Yo.MethodCardDesc,{children:i})]})},Go=[{icon:Lo,$variant:"left",title:"\uad6c\uc870\ud654\ub41c \uc2e4\ud328 \uae30\ub85d",desc:"\uac10\uc815\uc774 \uc544\ub2cc \uc120\ud0dd \uadfc\uac70, \ubb34\uc2dc\ud55c \uc2e0\ud638 \ub4f1 \ub2f9\uc2dc \uc81c\uc57d\uc744 \uccb4\uacc4\uc801\uc73c\ub85c \uae30\ub85d\ud569\ub2c8\ub2e4."},{icon:$o,$variant:"center",title:"\ud328\ud134 \ubd84\uc11d \ub300\uc2dc\ubcf4\ub4dc",desc:"\uac1c\uc778\uc758 \uc2e4\ud328 \ud328\ud134\uc744 \uc2dc\uac01\ud654\ud558\uace0, \ubc18\ubcf5\ub418\ub294 \uc120\ud0dd\uc758 \uc624\ub958\ub97c \uac1d\uad00\uc801\uc73c\ub85c \ud30c\uc545\ud569\ub2c8\ub2e4."},{icon:Io,$variant:"right",title:"\ud0c0\uc778\uc758 \uc2e4\ud328\ub85c\ubd80\ud130 \ud559\uc2b5",desc:"\ub2e4\uc591\ud55c \ubd84\uc57c\uc758 \uc2e4\ud328 \uc0ac\ub840\ub97c \uc77d\uace0, \uacf5\uac10, \uc9c0\uc2dd, \uacbd\ud5d8\uc744 \uacf5\uc720\ud558\uc138\uc694."}],Ho=e=>{let{step:t,icon:n,name:r,desc:i,tags:o,side:a}=e;const l="left"===a,s=l?(0,yo.jsxs)(Yo.StepCardTop,{$side:"left",children:[(0,yo.jsxs)(Yo.StepLabel,{$step:t,children:["Step ",t]}),(0,yo.jsx)(Yo.StepCardIcon,{$step:t,children:(0,yo.jsx)("img",{src:n,alt:`step${t}`})})]}):(0,yo.jsxs)(Yo.StepCardTop,{$side:"right",children:[(0,yo.jsx)(Yo.StepCardIcon,{$step:t,children:(0,yo.jsx)("img",{src:n,alt:`step${t}`})}),(0,yo.jsxs)(Yo.StepLabel,{$step:t,children:["Step ",t]})]}),c=(0,yo.jsxs)(Yo.StepCard,{children:[s,(0,yo.jsx)(Yo.StepCardName,{$side:a,children:r}),(0,yo.jsx)(Yo.StepCardDesc,{$side:a,children:i}),(0,yo.jsx)(Yo.StepTags,{$side:a,children:o.map(e=>(0,yo.jsx)(Yo.StepTag,{$step:t,children:e},e))})]}),d=(0,yo.jsx)(Yo.StepDot,{$step:t,children:t});return(0,yo.jsx)(Yo.StepRow,{$side:a,children:l?(0,yo.jsxs)(yo.Fragment,{children:[c,d]}):(0,yo.jsxs)(yo.Fragment,{children:[d,c]})})},Wo=[{step:1,icon:Po,name:"\uae30\ub85d",desc:"\uc2e4\ud328\ub97c \uad6c\uc870\ud654\ub41c \ud15c\ud50c\ub9bf\uc73c\ub85c \uae30\ub85d\ud558\uc138\uc694.",tags:["\uc0c1\ud669","\uc120\ud0dd","\uacb0\uacfc"],side:"left"},{step:2,icon:Fo,name:"\ubd84\uc11d",desc:"\ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub97c \ud655\uc778\ud558\uc138\uc694.",tags:["\ud328\ud134","\ud0a4\uc6cc\ub4dc"],side:"right"},{step:3,icon:Ro,name:"\uacf5\uc720",desc:"\ub85c\uadf8\uc640 \uacbd\ud5d8\uc744 \uacf5\uc720\ud574\ubcf4\uc138\uc694.",tags:["\ucee4\ubba4\ub2c8\ud2f0","\ub2e4\uc591\ud55c \ub85c\uadf8"],side:"left"},{step:4,icon:Oo,name:"\uac1c\uc120",desc:"\ub2e4\uc74c \ub3c4\uc804\uc5d0 \uc778\uc0ac\uc774\ud2b8\ub97c \uc801\uc6a9\ud558\uc138\uc694.",tags:["\uc561\uc158\ud50c\ub79c","\ub9ac\ub9c8\uc778\ub4dc"],side:"right"}],Uo=e=>{let{$variant:t,category:n,title:r,desc:i,nickname:o,avatar:a,views:l,likes:s}=e;return(0,yo.jsxs)(Yo.LogCard,{children:[(0,yo.jsx)(Yo.LogCategory,{$variant:t,children:n}),(0,yo.jsx)(Yo.LogCardTitle,{children:r}),(0,yo.jsx)(Yo.LogCardDesc,{children:i}),(0,yo.jsxs)(Yo.LogCardBottom,{children:[(0,yo.jsxs)(Yo.LogProfile,{children:[(0,yo.jsx)(Yo.LogAvatarWrap,{children:(0,yo.jsx)(Yo.LogAvatar,{src:a,alt:o})}),(0,yo.jsx)(Yo.LogNickname,{children:o})]}),(0,yo.jsxs)(Yo.LogStats,{children:[(0,yo.jsxs)(Yo.LogStat,{children:[(0,yo.jsx)("img",{src:zo,alt:"views",width:"16",height:"16"}),l]}),(0,yo.jsxs)(Yo.LogStat,{children:[(0,yo.jsx)("img",{src:No,alt:"likes",width:"16",height:"16"}),s]})]})]})]})},_o=[{$variant:"blue",category:"\uacf5\ubd80/\ucde8\uc5c5",title:"\uba74\uc811\uc5d0\uc11c \ubc18\ubcf5\ub41c \uc9c8\ubb38\uc5d0 \ub2f5\ubcc0\uc744 \ubabb\ud55c \uc774\uc720",desc:"\uba74\uc811\uc5d0\uc11c \ubc18\ubcf5\ub41c \uc9c8\ubb38\uc5d0 \ub2f5\ubcc0\uc744 \ubabb\ud55c \uc774\uc720",nickname:"\ucde8\uc900\ud0c8\ucd9c\ub118\ubc84\uc6d0",avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABS9JREFUeAHNWc1LI0kUf4nfIhpRQVCY6D+wLiJ+XeKoCCqsiye97A47twR2LuJt3aMouNmLcxLXu4IIqx7EuIjgQcke1YOJyI4KSswqfuubepVUTXWnu5OOcZwfPKrT9arq9169etVVcUCaQEQXK+qY9DF5E392xYVwziQcL/9hsuZwONbga4ER9DDxM4mgfVCbaSZ18FKIEwxg5hBg4oZMgXXmYvIHvhyobxc8B2QxkxC+PEKYrndZwzpMLw6fQ9Ze7L4CSYGIGVmHAUk3KwJM3PA6oHT2PUtlYfWlhijGgjoIr0dSIAwxsufihVOnMAIpknx8fOTl0tISHITD8rcRmANga2sLZmdnNW0t4I5zMezMjTbR29uL1JRke3sbn56eEnTo3eLiotQbGBhAG/AYEQ2gTeTk5CCbHi7vfn5nqtfV1SX1ioqK0AYCgp8zTpJWmgdsgrWT8vD4YKqXm5sr9bKyssAGPMKrIkY/QBpgHuLCO3I6TfWIoICVngn6eLv4jx8gDdCggkSqBBBs4yc2hssZd21Key1bGJa/zUCrXHrekZC6NR5Xn+Pgn5PkBo9QEErR6P+w+Pci+Lw+aGhogNraWuju7uZeU1OLw2BQI7BFZ0SA4+HhAQ4ODsDn88HU1BRcX19L4xT0wf39fYBSyOXlJY6MjGBpaalMJapkZ2djU1NTwqoX9e9/eW+6dDs7O6Ue9a+CxqX3lBGETltbGzLCyMiKlDdPlgZ7enqkstpAiHj/GzNERWFhIbJVzHU2NjZMiVLuZLPBdaurqzV1t7e3vL2T1ZUUF8eemS6Vfr+f69zd3YWgqqoqQh0IMiyVaLxYUVGBlZWVODo6yhuJpE7WrqysIIs5HBsbMyVJeoS67+qwvLwcT05O5DsCm3rc3d3l+VUQVMm2tLSQWgRUr+Xl5XFRG9zc3EiC6s5Dz2JAfZ0eLLwSiOuNYdtrwkzSjBEXCjkoKCiQFRSjOzs7min3er2WJJ4LMuLi4kITp6JUHUYxGgkGg1xZEBKWiDAgi4088VzQtBPKyspkrFPZ3NyscRiTCBENq42J7PT0NI9PYRUtNlGXaZLt7e1yLFESaJERlpeX8fz8PEhv5/VECSUlJbyhmIa5ubmMeVXEbH9/v1zEwqPHx8fSCMUxa0TUb9TR0dGRnArRyerqatKFkwx393e8bGxslCSFMzY3NzULT8Hv4ryeACIzMzPDOyhm+U2QHR8f5/XC6lQh9EOhENIC/pISYwtmYWHBygkecW5POMiJaaZMIGKVhDp3u924t7cnDbLysKg7PT3Ft2/bNbEoSopDi34iciNFg+lXyU5MTGg6plxLZU1NDX6c/IiHh4cJg9AUfvrvE05OTnLDRBip052fn89DjLxtYey0StRjpiX2262tbT6Ymnf12y0NTDsMlfotWJQihLw+rzQoCbTHZ0xyFBExNjg4KEPB6LtAv7PovyE6OjowGo1qdjYLrIEeVl7Vk6VtdXh4GF0ulylJ9ZuBUt3Q0BAnqPaTAtyCn/5c72fFr5AE9MEsjiFnZ2fAdjZYX1+H/f19uLq6AmYAsPiF1tZWqK+vB5Y15PeujaPIn6z/D2ZEbV9A0OBWH9DJ6k0QBqsLiHhFG8SuVVJCMhJpkmxTSRKcBh1zRbBBNoOgMX/U3ztZAmM3eiH8ejC9yUuF7Ld/kauQpS3Wjy8H6vt5V+M6wuTdNcwcqC8PvBQwFrt/Yfp/3/jTIWg7d+hIeyB2gUFC0/cGtH+IRZn8C7GUM0/P+rSTKj4DZcsPZwaHi1YAAAAASUVORK5CYII=",views:45,likes:35},{$variant:"orange",category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"\uccab \uc0ac\uc5c5 \uc544\uc774\ud15c\uc744 3\ubc88 \ubc14\uafbc \uc774\uc720",desc:"\uc2dc\uc7a5 \uc870\uc0ac \uc5c6\uc774 \uc2dc\uc791\ud588\ub2e4\uac00 \ud53c\ubc97\uc744 \ubc18\ubcf5\ud55c \uc774\uc57c\uae30",nickname:"\ucc3d\uc5c5\ub3c4\uc804\uc655",avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAD3xJREFUeAHFWWmUVdWV/u705qr3Xs1lMTwkgqjdgkZlUKxSV5bDsqOdoU2wFaNZxiECUbNUokAHxQgKLJM4tAZN2zTEMAhiesVWigCS2AIFiMgkj2ooXk1vqDfde98d+ru3SqhCRvtHH9Zb9YZzz9ln729/+9sHAV9z2LYd4Z/RfN3C19C+95G+lzPSnBU3IaQlYJ2hqs2K39+MrzkEnOVYP3dyozcUvaW8YsSd37jljojtCUCDhSAMGu+BzRVFzrNsm6sLSO5pxrb/XAMlU4TfG0hbYd/KisHnLxxx06SWs9n3jA1d/dhtjbHK0AwLYmNJkCGWimgvFDH2+/ei7MLxNFCB7BpnwIQHkm2h9a+r0LpiKarrypEXNGiSjEhJQCJbRCFU33zTgw/fJfjr42ey/2kNXTFzauRcuXNGyOufmqWBwUgF7Ew3crIGRZeQ6ixhwtOvQpe98LlP6PzngdGTxN/+5YeIDDoPUqkHkmDB4hzYMg+hoWgChUAlrnpg3gJiZFZUENJf29AjBzbFdr46f211dSDm0WR8oQuY/vo7ePSfrsFFtRUwGdps0ULDVRMgSWEIegmmpcITrkHHnk8hHdmNomxDNCxU1A7Gui1xjB3mh6XnCBYgrxoYet1k1F9xbVxU1SbB74+ftaFMltGbV/1+bWjPh5G0EoTfFNCulbAjo+PhX72BQ4vnInVkG3RRhlECynJpqL5yFEUR4XwOgjeAYsBCRAsA9UNx4V3TccHwBqx+4p+RSHYTyBIUuwTrnFG46LaH6WXEBaN0q+DxnBC78om+1Gkk/6y1cl0RWyhBoUcMhq6WkRs0NILwg99BR08ChhhCGHmEGobjYCKFhWv+CpgaHv/+dSjZftQEksh0Z1HI5fCzmxvx0KTr0XZwLyRZcRwB04G0qbtG6JYdkyVpLb9vEgSh5bQe5cRYwcbagIDYxlefQDB/iN8FnV96H7BNZq+MPL0rSRI+TQi4+4XXuSl/tyUYlsRFVdeQW785FnPvGYuOrIbqcAhqdwIlb9DZpG83ztd0WJEorrjvORQsGwFRSKuqOsZ/HAyE44yMcI2thF5s3StPIZBtgygqXM6GffQB5j0z2nL8wDB/kUjTpzKuH1ONDS2teHH1J/jDL+9CGz1sZ1Mw5ABEgTi1DGc6Spwr9K1m26KTdjAZhUNiFW565HlYNJb7x+nVMUK/BBP7G0qAz3CM3PDSDJT3HEaQi1um5Ljx6ByTG+lCkHQkMGwWRjb4MX5IGZSCD8s+zyFaV4mAbqCK3hbrK7iB7VKVyQMX+ZzoplHfoQknnRZYsh/nWBmsWzSPhxGcH2L8dsYJPWoX7ZjpxYHWvyxH9/q3IQXC3EJwN7L7e53fOR6RLY24khAdEsPCpR+iq70DKYLub3s6cFG9j35iUgXDePQfr0JYMaCI1gBvDjTBduFQYEKe/4NHUH7eZZxZoiOEJkFRmgd61IdFqcRetL67FAo36F3CPsGytutgHQpqz70AI3/wJN7ZtAsqk2dXW9oJGy49fxguv2AktFwP3lj+PukqTAyzmHLzr6aF/aV7ES4vw8Y35wPFtOMKpro8Y4BHdd0erSj21uZ5U9FAxGVFyfXbyYbA0zv5oHuY8/kMaYelvjuO9/dn8PKK9Vg950dIdPQgFAggywOpqQ4oDDP96mL8ZEOyDRYGGx1COZqmzXePQCscFmh2PUqQT80c3oaarm4kld6An2zYDhgEieVSQ9BIoTqoINHainyuCClSh/OGNLgwKJU0JFNpSF3tCJn0pMm0IXucytCSwNJLSCmpA9BzSdcZVq/o6XUbsz3VPPfHkYjC8lYSYUgmTjvso0+7YXM+eHi+YNCP7nSemS6ciPxwqmIoUtF4HOxLAroDtbjmJ88gRxUWAoaJNLIx2RaPiGoRTHJYgoUzGkK/N7Z7WuhMplRPoS9zT/nQCYdJaJhMFp+Dz4P7YBS6GTlHNqqjWYatxs6WDagKeCGQUlzawf/XsFkBRffAtdEg9jevhFdwwi/dIsqieHVixyfwsmCbtnSCPD/xgsJJPx0/88zmOUMQCrBEqi+Z5ESldeSzrb3kZYsxsefQ7oiYS6BH8RMjmkvupzJVtJhqFhdy841kRf3pY7026QnJEh1xMcBIxaVIyTVSZlafOvyKyzYCC4SLpnQ39PQhwlG6WCy2t8a8AZ+7gHAGMbcE0VXxHkvnEwbKw1WsXrKbzaqEgTlN3EpeLxPLdPnXJFvgtBE7Br0Q4ZhLdrCEIyKmEoeZ7DLOdFh9me6lRTkE8ORvVsJH/elkuc3qY/ft4giWgFfB4k17oSle2BZ/s898H+c4AUVA276djuERsaN1HxcVj5skHKvJwlcricgQRiK1eHDB21iyZTdK1KEitaWv5PzWu5ZpmogEfXh68Z8w5YWlqKiIMPQWvuJRZ31XTR1HXYycQqrKpHp1iaio+bRpHnvYpktkq4jQ4PPoHRtKSXeZ4OjzzoKiiYxexPDBDW77URKyvdTCvskprgI/OUsaJHBnRCnxHIVVkjT0r9oUSpBYDELlLNkSVZZpEJ8Ozukq4j1P5RXOJh3z00Lz7LvjEZ801DpqjICqihCu/dlLeG/efSgk8ywAVj8BJbg12y2j0aFQDRbGIvnOUBkDhWYYLo4FyQOnbKh2GDVeD4qZBASKE6cx/FKYiGz2JJbFN1dtwrXXjEODknObRMHBF2FkEJy2GMYlD81tEUt6qWVgdG2olHZ7U3l4iTOLpzomdPu4nUkhWCbEdCuUHMHOjlShe3ycrxOHjs606B2bbFCpJqAXDlMwU2vQMLFf6G16U/b70Ly/HVv2t0GRBTd6OiskF3DX0EsOUyBDSIlx+0tDaIDzXjGLruciYhGGMTBcrqLidFPyuaFzNhaoNS2+UhkVPelkb2XiJEcUF70iqY9VSzLIFNYAhEpkDg+j5SsrQ6I7w3UsZG0v2pKETyDktiym6RraLApGbqXzVuQJfEYnsS274sDxXZEXCh6G0WsX3JA6FORwoeiIBWJBdvsepwVWkO3J4dybJ+HqR1+EXlFHIwqQBS+cXqBMB8IaE5RSz4GHI2xcEuKB6mQRW3cdwI1XjUKOjeA3Bpfje3MWgfcVMEt5BL2RXkPlnNHCk6dtfwRapJ73BwYqy0KI8pR//izFDUsosInTBD8PoDBBvG4bYrD71JgAHrbHtpZHw5XXo+6Sa2CFa3H5nU8h54lC1As8hJ8q3oe86IUmBtxMdg7oYN6gUt9XUJAndC6OKiwiHvgdzepAjtbJTmRC0bQr85oWrEzLovbmxq0HcMfcP6E2EmQbvBffGncpZr+1BhWDa50uCX561W+rxGaRHs6yGmnkRo1/07CCIaxvs/AfS5Zi0/t/xtr1H2H1fqog8mhIYwMnqPDKJeLV4OZs5izNZaKa6jrcOP23uP3GRigqE1TqQXtWgaZpqKv1U5syP+oqVjoudRlY0wIrLxtRPuXhf/sfeENhJPJZPDe5CZfcuxm/ea8Fk684Bxa7xc6eEvEWRnmoDEImjUC5B4XoKLz03ma8tuzXwHH8eM3S1+D9ogXVsgS1pxttzKhske1LUGaisl/Sk+Q2E/MmNbFJTICdL9Z8sgt10RAqeKDdHTlUN9Us7M2NvpF7a8bayrvnNH749L2szyJqtC+wTjwXdz6xEH/8xR2oCFZi3I9+Cm9NzH0o/sEfseOj93Hzk6+gsytJ71S56/i8hImeB9tdZHN5glnHu9N/gsu+dQPKL5vg6t1C+z7s37AGmQM7cP4FY2G0fo59oaEYV6egftJsvPjE/RgX7EJHxrfuqmcWNaJ/Oqey5qwbx4/BT3+7ArWxcnT66zAx6se7Uybj/CtvRuNjc7Fr+yZ88NRkNM+ahMzGP2Dk5Ve6BSIaCbuVaMmSJVC1HJYtW8YWhfyra2QHD/5u9AgkE234bNVyJDYsR0pT8fe3T8eVjy/Gvngb0sR6lZHAlt0p5LjO94ZVIuthg+ixJx9jm36j43dzFgy596kpD0z8Jm81rsOhroNoGDsRg8bfjuYnHkRdUIUZIt3r7PWNAiKN38WgCd9x+/5SqeRSm+NJizTkfBaYDBK5c/eqF9Cx42NUMk9yZVUwi1loRVa2CddiyI33Yufz9yM2yIMRDyzGz797CW4+dwy6pfaFlz+yaOqXtg0o8vlM+8xNbzwXf/6DTVi7fSdG1Q+GmCEhz/k5/A0m8l6JZW0ELn3sdWTZo7dv+4gURIzruvv89u3be4nc4WJFga7prif2bd+DMbc9iMCV34ZNSVnDChWurMKh7duw/uUpCA6/EI+8tJX3rBpum3gFcmImfvhQamZ/2wYYOmzagnSsY3fTO7MfTk9esBxNs5ci1/oB6oM51Gd7oNaNxLiHfoHVc+9DlZfs29WFw59/Slx6UVZejgnjx+PpX84i4YsIMeEC7EI7d/0Xhqjd2LziXVRcPAEX3LcQ+1IULGQLO5DFcDLJtGf+Fa+s+wt2/uoetLV1xdvkVNOtZKOTGuqM6LSX48ODxaZD//7rdMDQUSjVkQdttBUimHjn4/howSzegxepPf2UdwEcWPosNi6aC01VmcU6Hpv+JDqYXN3JLvz3e69h/+KXYdfUIiolsWXOfbyIUHDxPdNQ7FHYxUbR7a/EQWrOnb+bha5kMS3Y6VtvmLYkfrxdJ5XKnz7949GeWP2KwpGOmFHMIPbDKcjynqlt4+/hF8soKCTehfLCzGbYWUGScgUuv38uZJY+mwS+/sUncU6+1cUkXC1KLUBPJxIZTHz2dax/dgqGUXykfLwYq6pGqaszLWjppoumv33Ca8dTavqt8yfHvCXv2pyZi0Wa/gHpdZuheOLcuJLp06stdVYthdXJzx7fubXz1Q7irV03ynjbYjt3TULm6DY2lb4lG8geCqC8nuJDZIegsc7JVjwlKE3jGM2T2XLa5uMAr8Y7q4szlY7uKQgNYYbnWOqctkXo9RJ77KJTXqmyAnqCZbKcYkTlvBIvdf299/p9w+nGFOpMkbjM+/ifD1oDCnZ2obfQOXPMzJVf/2q8/9g1Z3JMFdU3KCeuFpzbPKcL8LDuE5eC4HhWcrtHj+XQVG934HwvGX44YlrmpYJWzLEUUiGxlOq2dx0l+cwbZr/VfCb7n3UL//H8R0cbXs9U4vDbsqlG1J4ulDG7PW4XSlSIdl/L3bu0aBSRUoEkxcnICY1pw1f+ZrSmbmX9qHHNOIvxf7prsO1SY8fnHzcmdnzc2H3gQEQuaUMNSYqIEpWQrqcVn5IJDRnVMuSSsfFobWylHIq0CKf534+Tjf8FTfIE60OlMVcAAAAASUVORK5CYII=",views:45,likes:35},{$variant:"pink",category:"\uc778\uac04\uad00\uacc4",title:"\ub9d0\uc744 \uc5b8\uc81c\ub098 \uc0dd\uac01\ud558\uace0 \uc870\uc2ec\ud788 \ub9d0\ud558\uae30",desc:"\ud55c \uc21c\uac04\uc758 \uc2e4\uc218\ub85c \uba40\uc5b4\uc838\ubc84\ub9b0 \uc6b0\ub9ac \uc0ac\uc774",nickname:"\ub9d0\uc870\uc2ec\uc5f0\uc2b5",avatar:"data:image/png;base64,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",views:45,likes:35}],Yo={},Qo=dn`
    0%   { opacity: 1; transform: translateY(0); }
    50%  { opacity: 0.4; transform: translateY(6px); }
    100% { opacity: 1; transform: translateY(0); }
`,Zo="\n    background: linear-gradient(90deg, #027df0, #ab47ff);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n",Vo={1:"#027df0",2:"#ab47ff",3:"#ff34c5",4:"#f53102"},qo={1:"#dbeafe",2:"#ede9fe",3:"#fce7f3",4:"#ffe4e6"},Xo={blue:{bg:"#dbeafe",color:"#027df0"},orange:{bg:"#ede9fe",color:"#ab47ff"},pink:{bg:"#ffe4e6",color:"#f53102"}};Yo.Wrap=on.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`,Yo.ColorGradient=on.span`
    ${Zo}
`,Yo.Section1Wrapper=on.section`
    width: 100%;
    height: 900px;
    background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section1-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .intro-section1-heading {
        font-size: ${bn.FONT_SIZE.h1};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.black};
        line-height: 1.35;
        margin: 0;
        letter-spacing: -1.5px;
    }

    .intro-section1-sub {
        font-size: ${bn.FONT_SIZE.h3_2};
        font-weight: ${bn.FONT_WEIGHT.regular};
        color: ${bn.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section1-sub:first-of-type {
        margin-top: 28px;
    }

    .intro-section1-scroll-arrows {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
`,Yo.StartButton=on.button`
    margin-top: 36px;
    width: 200px;
    height: 60px;
    border-radius: 10px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 200%;
    background-position: 0% 50%;
    transition: background-position 0.6s ease;
    color: ${bn.PALETTE.white};
    font-size: ${bn.FONT_SIZE.h5};
    font-weight: ${bn.FONT_WEIGHT.bold};
    border: none;
    cursor: pointer;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);

    &:hover {
        background-position: 100% 50%;
    }
`,Yo.Section1Scroll=on.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`,Yo.ScrollMouse=on.div`
    width: 22px;
    height: 36px;
    border: 2px solid ${bn.GRAYSCALE[4]};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    padding-top: 6px;
    box-sizing: border-box;
`,Yo.ScrollDot=on.div`
    width: 4px;
    height: 8px;
    background-color: ${bn.GRAYSCALE[4]};
    border-radius: 2px;
    animation: ${Qo} 1.6s ease-in-out infinite;
`,Yo.Section2Wrapper=on.section`
    width: 100%;
    height: 1000px;
    background-color: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section2 {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    .intro-section2-title {
        font-size: ${bn.FONT_SIZE.h4};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.black};
        line-height: 1.45;
        margin: 0 0 24px;
        letter-spacing: -0.3px;
    }

    .intro-section2-sub {
        font-size: ${bn.FONT_SIZE.h7};
        font-weight: ${bn.FONT_WEIGHT.regular};
        color: ${bn.GRAYSCALE[10]};
        line-height: 1.7;
        margin: 0;
    }

    .intro-section2-sub-mt {
        margin-top: 20px;
    }
`,Yo.Section2Left=on.div`
    width: 536px;
    height: 442px;
    background-color: ${bn.PALETTE.white};
    border: 1px solid ${bn.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 48px 44px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,Yo.Section2BadgeWrap=on.div`
    width: 112px;
    height: 40px;
    padding: 0 16px;
    background-color: ${bn.PALETTE.primary.light};
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`,Yo.Section2Badge=on.span`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    ${Zo}
`,Yo.Section2Right=on.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`,Yo.StatCard=on.div`
    width: 536px;
    height: 184px;
    background-color: ${bn.PALETTE.white};
    border: 1px solid ${bn.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 20px 36px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,Yo.StatCardIcon=on.div`
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
    flex-shrink: 0;

    background-color: ${e=>{let{$variant:t}=e;return"red"===t?bn.PALETTE.fourth.light:"blue"===t?bn.PALETTE.primary.light:"green"===t?bn.PALETTE.secondary.light:"transparent"}};

    img { width: 24px; height: 24px; }
`,Yo.StatCardStat=on.p`
    font-size: ${bn.FONT_SIZE.h4};
    font-weight: ${bn.FONT_WEIGHT.bold};
    margin: 0;
    line-height: 1.2;

    color: ${e=>{let{$variant:t}=e;return"red"===t?bn.PALETTE.fourth.main:"blue"===t?bn.PALETTE.primary.main:"green"===t?bn.PALETTE.secondary.main:bn.PALETTE.black}};
`,Yo.StatCardLabel=on.p`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.PALETTE.black};
    margin: 0;
`,Yo.Section3Wrapper=on.section`
    width: 100%;
    height: 800px;
    background-color: ${bn.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        width: 100%;
    }

    .intro-section3-header {
        text-align: center;
    }

    .intro-section3-title {
        font-size: ${bn.FONT_SIZE.h3};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.black};
        line-height: 1.4;
        margin: 0;
        letter-spacing: -0.5px;
    }
`,Yo.Section3Cards=on.div`
    display: flex;
    align-items: center;
    gap: 26px;
`,Yo.MethodCard=on.div`
    width: 424px;
    height: 279px;
    background-color: ${bn.PALETTE.white};
    border: 1px solid ${bn.GRAYSCALE[4]};
    border-radius: 20px;
    padding: 37px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,Yo.MethodCardIcon=on.div`
    width: 80px;
    height: 80px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    background: ${e=>{let{$variant:t}=e;return"left"===t?"linear-gradient(135deg, #027df0, #ab47ff)":"center"===t?"linear-gradient(135deg, #ab47ff, #ff34c5)":"right"===t?"linear-gradient(135deg, #ff34c5, #f53102)":"transparent"}};

    img { width: 50px; height: 50px; }
`,Yo.MethodCardTitle=on.div`
    font-size: ${bn.FONT_SIZE.h5};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
    margin: 0;
    letter-spacing: -0.5px;
    line-height: 1.3;
`,Yo.MethodCardDesc=on.div`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.6;
    word-break: keep-all;
`,Yo.Section4Wrapper=on.section`
    width: 100%;
    height: 1512px;
    background-color: #f8f9fa;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 100px;

    .intro-section4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 80px;
    }

    .intro-section4-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    .intro-section4-title {
        font-size: ${bn.FONT_SIZE.h3};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.black};
        text-align: center;
    }
`,Yo.Section4BadgeWrap=on.div`
    width: 136px;
    height: 40px;
    background-color: ${bn.PALETTE.primary.light};
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`,Yo.Section4Badge=on.span`
    font-size: ${bn.FONT_SIZE.h6};
    font-weight: ${bn.FONT_WEIGHT.bold};
    ${Zo}
`,Yo.StepByStep=on.div`
    position: relative;
    width: 1038px;
    display: flex;
    flex-direction: column;
    gap: 60px;
`,Yo.TimelineLine=on.div`
    position: absolute;
    top: 12px;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: linear-gradient(to bottom, #027df0 0%, #ab47ff 33%, #ff34c5 66%, #f53102 100%);
    z-index: 0;
`,Yo.StepRow=on.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    z-index: 1;

    ${e=>{let{$side:t}=e;return"left"===t?"justify-content: flex-start; padding-right: calc(50% + 48px);":"justify-content: flex-end;  padding-left:  calc(50% + 48px);"}}
`,Yo.StepDot=on.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.white};
    z-index: 2;
    flex-shrink: 0;
    background: ${e=>{let{$step:t}=e;return Vo[t]||"#333"}};
`,Yo.StepCard=on.div`
    background-color: ${bn.PALETTE.white};
    border: 1px solid ${bn.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 28px 32px;
    box-sizing: border-box;
    width: 312px;
    height: 210px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,Yo.StepCardTop=on.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: ${e=>{let{$side:t}=e;return"left"===t?"flex-end":"flex-start"}};
`,Yo.StepLabel=on.span`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${e=>{let{$step:t}=e;return Vo[t]||"#333"}};
`,Yo.StepCardIcon=on.div`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${e=>{let{$step:t}=e;return Vo[t]||"#333"}};

    img { width: 20px; height: 20px; filter: brightness(0) invert(1); }
`,Yo.StepCardName=on.p`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
    margin: 0;
    text-align: ${e=>{let{$side:t}=e;return"left"===t?"right":"left"}};
`,Yo.StepCardDesc=on.p`
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
    margin: 0;
    text-align: ${e=>{let{$side:t}=e;return"left"===t?"right":"left"}};
    line-height: 1.5;
`,Yo.StepTags=on.div`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: ${e=>{let{$side:t}=e;return"left"===t?"flex-end":"flex-start"}};
`,Yo.StepTag=on.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 28px;
    padding: 0 10px;
    border-radius: 14px;
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.bold};
    background-color: ${e=>{let{$step:t}=e;return qo[t]||"#f0f0f0"}};
    color: ${e=>{let{$step:t}=e;return Vo[t]||"#333"}};
`,Yo.Section5Wrapper=on.section`
    width: 100%;
    height: 980px;
    background-color: ${bn.PALETTE.white};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    .intro-section5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        width: 100%;
    }

    .intro-section5-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
    }

    .intro-section5-title {
        font-size: 40px;
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.black};
        margin: 0;
        line-height: 1.4;
        letter-spacing: -0.5px;
    }

    .intro-section5-sub {
        font-size: ${bn.FONT_SIZE.h7};
        font-weight: ${bn.FONT_WEIGHT.regular};
        color: ${bn.GRAYSCALE[10]};
        margin: 0;
    }
`,Yo.Section5Badges=on.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
`,Yo.Section5Badge=on.div`
    width: 136px;
    height: 40px;
    border-radius: 10px;
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${bn.PALETTE.primary.light};

    span {
        background: linear-gradient(90deg, #027df0, #ab47ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`,Yo.Section5Cards=on.div`
    display: flex;
    gap: 24px;
`,Yo.LogCard=on.div`
    width: 352px;
    height: 198px;
    background-color: ${bn.PALETTE.white};
    border: 1px solid ${bn.GRAYSCALE[4]};
    border-radius: 15px;
    padding: 20px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
`,Yo.LogCategory=on.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 24px;
    border-radius: 5px;
    font-size: ${bn.FONT_SIZE.h9};
    font-weight: ${bn.FONT_WEIGHT.regular};
    flex-shrink: 0;
    background-color: ${e=>{var t;let{$variant:n}=e;return(null===(t=Xo[n])||void 0===t?void 0:t.bg)||"#f0f0f0"}};
    color:            ${e=>{var t;let{$variant:n}=e;return(null===(t=Xo[n])||void 0===t?void 0:t.color)||"#333"}};
`,Yo.LogCardTitle=on.p`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
    margin: 0;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Yo.LogCardDesc=on.p`
    font-size: ${bn.FONT_SIZE.h9};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`,Yo.LogCardBottom=on.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`,Yo.LogProfile=on.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Yo.LogAvatarWrap=on.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 1.5px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,Yo.LogAvatar=on.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`,Yo.LogNickname=on.span`
    font-size: ${bn.FONT_SIZE.h9};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
`,Yo.LogStats=on.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,Yo.LogStat=on.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${bn.FONT_SIZE.h9};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
`;const Jo=()=>{const e=wi();return(0,yo.jsxs)(Yo.Wrap,{children:[(0,yo.jsx)(Yo.Section1Wrapper,{children:(0,yo.jsxs)("div",{className:"intro-section1",children:[(0,yo.jsxs)("div",{className:"intro-section1-text",children:[(0,yo.jsx)("h1",{className:"intro-section1-heading",children:"\uc9c0\ub098\uac04 \uc2e4\ud328\ub4e4\uc774 \ubaa8\uc5ec"}),(0,yo.jsxs)("h1",{className:"intro-section1-heading",children:[(0,yo.jsx)(Yo.ColorGradient,{children:"\uc131\uacf5\uc758 \ud55c \ud328"}),"\uac00 \ub429\ub2c8\ub2e4."]}),(0,yo.jsx)("p",{className:"intro-section1-sub",children:"\uc2e4\ud328\ub97c \uc678\uba74\ud558\uc9c0 \uc54a\uace0 \uae30\ub85d\ud560 \ub54c,"}),(0,yo.jsx)("p",{className:"intro-section1-sub",children:"\ub2f9\uc2e0\uc758 \uac15\ub825\ud55c \uc131\uc7a5 \ub370\uc774\ud130\uac00 \ub429\ub2c8\ub2e4."}),(0,yo.jsx)(Yo.StartButton,{onClick:()=>e("/join"),children:"\uc2dc\uc791\ud558\uae30"})]}),(0,yo.jsxs)(Yo.Section1Scroll,{children:[(0,yo.jsx)(Yo.ScrollMouse,{children:(0,yo.jsx)(Yo.ScrollDot,{})}),(0,yo.jsxs)("div",{className:"intro-section1-scroll-arrows",children:[(0,yo.jsx)("svg",{width:"20",height:"12",viewBox:"0 0 20 12",fill:"none",children:(0,yo.jsx)("path",{d:"M2 2L10 10L18 2",stroke:"#cccccc",strokeWidth:"2",strokeLinecap:"round"})}),(0,yo.jsx)("svg",{width:"20",height:"12",viewBox:"0 0 20 12",fill:"none",children:(0,yo.jsx)("path",{d:"M2 2L10 10L18 2",stroke:"#cccccc",strokeWidth:"2",strokeLinecap:"round",strokeOpacity:"0.45"})})]})]})]})}),(0,yo.jsx)(Yo.Section2Wrapper,{children:(0,yo.jsxs)("div",{className:"intro-section2",children:[(0,yo.jsxs)(Yo.Section2Left,{children:[(0,yo.jsx)(Yo.Section2BadgeWrap,{children:(0,yo.jsx)(Yo.Section2Badge,{children:"\uc2e4\ud328 \uae30\ub85d"})}),(0,yo.jsxs)("h2",{className:"intro-section2-title",children:["\uac19\uc740 \uc2e4\uc218\ub97c \ubc18\ubcf5\ud558\ub294 \ub2f9\uc2e0,",(0,yo.jsx)("br",{}),"\ub9e5\ub77d\uc744 \uc78a\uace0 \uc788\uc9c0 \uc54a\ub098\uc694?"]}),(0,yo.jsxs)("p",{className:"intro-section2-sub",children:["\uc0ac\ub78c\ub4e4\uc740 \uc2e4\ud328 \ud6c4 \ud6c4\ud68c\ud558\uace0 \ubc18\uc131\ud558\uc9c0\ub9cc, \uc2dc\uac04\uc774 \uc9c0\ub098\uba74",(0,yo.jsx)("br",{}),"\ud310\ub2e8 \uadfc\uac70, \uc81c\uc57d \uc0ac\ud56d, \ubb34\uc2dc\ud588\ub358 \uc2e0\ud638\ub97c \uc78a\uc2b5\ub2c8\ub2e4.",(0,yo.jsx)("br",{}),"\uacb0\uad6d \uac19\uc740 \ud328\ud134\uc758 \uc2e4\uc218\ub97c \ubc18\ubcf5\ud558\uac8c \ub429\ub2c8\ub2e4."]}),(0,yo.jsxs)("p",{className:"intro-section2-sub intro-section2-sub-mt",children:["FailLog\ub294 \uc2e4\ud328\uc758 \ub9e5\ub77d\uc744 \uad6c\uc870\ud654\ud558\uc5ec",(0,yo.jsx)("br",{}),"\uae30\ub85d\ud558\uace0, \ud328\ud134\uc744 \uc2dc\uac01\ud654\ud558\uc5ec \uac1d\uad00\uc801\uc778",(0,yo.jsx)("br",{}),"\uc790\uae30 \uc778\uc2dd\uacfc \uac1c\uc120\uc744 \ub3c4\uc640\uc90d\ub2c8\ub2e4."]})]}),(0,yo.jsx)(Yo.Section2Right,{children:Bo.map(e=>(0,yo.jsx)(Do,{...e},e.stat))})]})}),(0,yo.jsx)(Yo.Section3Wrapper,{children:(0,yo.jsxs)("div",{className:"intro-section3",children:[(0,yo.jsx)("div",{className:"intro-section3-header",children:(0,yo.jsxs)("h2",{className:"intro-section3-title",children:["\uc2e4\ud328\ub97c \ub370\uc774\ud130\ub85c,",(0,yo.jsx)("br",{}),"\uc131\uc7a5\uc73c\ub85c \uc5f0\uacb0\ud558\ub294 ",(0,yo.jsx)(Yo.ColorGradient,{children:"3\uac00\uc9c0 \ubc29\ubc95"})]})}),(0,yo.jsx)(Yo.Section3Cards,{children:Go.map(e=>(0,yo.jsx)(Mo,{...e},e.title))})]})}),(0,yo.jsx)(Yo.Section4Wrapper,{children:(0,yo.jsxs)("div",{className:"intro-section4",children:[(0,yo.jsxs)("div",{className:"intro-section4-header",children:[(0,yo.jsx)(Yo.Section4BadgeWrap,{children:(0,yo.jsx)(Yo.Section4Badge,{children:"\uc0ac\uc6a9 \ubc29\ubc95"})}),(0,yo.jsxs)("h2",{className:"intro-section4-title",children:["4\ub2e8\uacc4\ub85c \uc644\uc131\ud558\ub294 ",(0,yo.jsx)(Yo.ColorGradient,{children:"\uc2e4\ud328\ubd84\uc11d"})]})]}),(0,yo.jsxs)(Yo.StepByStep,{children:[(0,yo.jsx)(Yo.TimelineLine,{}),Wo.map(e=>(0,yo.jsx)(Ho,{...e},e.step))]})]})}),(0,yo.jsx)(Yo.Section5Wrapper,{children:(0,yo.jsxs)("div",{className:"intro-section5",children:[(0,yo.jsxs)("div",{className:"intro-section5-header",children:[(0,yo.jsxs)("h2",{className:"intro-section5-title",children:["\ud63c\uc790\uac00 \uc544\ub2cc,",(0,yo.jsx)("br",{}),(0,yo.jsx)(Yo.ColorGradient,{children:"\ud568\uaed8 \ub9cc\ub4dc\ub294 \uc131\uc7a5"})]}),(0,yo.jsx)("p",{className:"intro-section5-sub",children:"\ub2e4\uc591\ud55c \ubd84\uc57c\uc758 \uc2e4\ud328 \uc0ac\ub840\ub97c \uacbd\ud5d8\ud558\uc138\uc694."})]}),(0,yo.jsxs)(Yo.Section5Badges,{children:[(0,yo.jsx)(Yo.Section5Badge,{children:(0,yo.jsx)("span",{children:"\ub2e4\uc591\ud55c \ub85c\uadf8"})}),(0,yo.jsx)(Yo.Section5Badge,{children:(0,yo.jsx)("span",{children:"\ucee4\ubba4\ub2c8\ud2f0"})})]}),(0,yo.jsx)(Yo.Section5Cards,{children:_o.map(e=>(0,yo.jsx)(Uo,{...e},e.category))}),(0,yo.jsx)(Yo.StartButton,{onClick:()=>e("/join"),children:"\uc2dc\uc791\ud558\uae30"})]})})]})};n.p;const Ko={};Ko.ChatbotFab=on.button`
    position: fixed;
    bottom: 36px;
    right: 36px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 20px rgba(2, 125, 240, 0.35);
    transition: transform 0.2s, box-shadow 0.2s;
    z-index: 200;

    &:hover {
        transform: scale(1.08);
        box-shadow: 0 8px 28px rgba(2, 125, 240, 0.45);
    }
`,Ko.ChatbotFabIcon=on.img`
    width: 32px;
    height: 32px;
    filter: invert(1);
`;const ea=()=>{const{isAuthenticated:e}=vo();return(0,yo.jsx)(yo.Fragment,{children:e?(0,yo.jsx)(To,{}):(0,yo.jsx)(Jo,{})})},ta={};ta.Wrapper=on.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #F8F9FA;
  min-height: 100vh;
`,ta.Header=on.div`
  text-align: left;
  width: 1298px;
  margin-bottom: 100px;
`,ta.Title=on.h1`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  margin-bottom: 12px;
`,ta.SubTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ta.ContentWrapper=on.div`
  width: 1320px;
`,ta.TabBar=on.div`
  display: flex;
  gap: 24px;
  width: 1320px;
  margin: 0 auto;
  padding-left: 101px;
  box-sizing: border-box;
  flex-shrink: 0;
`,ta.Tab=on(ao)`
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  border-radius: 12px 12px 0 0;
  transition: all 0.2s;
  background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  position: relative;
  top: 1px;
  z-index: 5;

  &.active {
    color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    z-index: 10;
  }

  &:hover:not(.active) {
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
  }
`,ta.CardWrapper=on.div`
  position: relative;
  width: 1320px;
  padding-right: 22px;
  z-index: 1;
`,ta.PurpleShadow=on.div`
  position: absolute;
  top: 0;
  left: 22px;
  right: 0;
  bottom: 0;
  background: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  border-radius: 12px;
  z-index: 0;
`,ta.Card=on.div`
  background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  border-radius: 12px;
  padding: 83px 80px 80px;
  position: relative;
  z-index: 1;
  width: 1298px;
  box-sizing: border-box;
  min-height: 800px;
`,ta.CarouselSection=on.div`
  margin-top: 100px;
  width: 1320px;
  padding-right: 22px;
  box-sizing: border-box;
`,ta.CarouselTitle=on.h3`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  margin-bottom: 16px;
`,ta.CarouselSubTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
  margin-bottom: 48px;
`,ta.CarouselContainer=on.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
`,ta.SliderWindow=on.div`
  width: 1320px; /* 424px * 3 + 24px * 2 (gap) */
  overflow: hidden;
  padding: 10px 0;
`,ta.CardList=on.div`
  display: flex;
  gap: 24px;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`,ta.RelatedCard=on.div`
  position: relative;
  background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  border-radius: 16px;
  padding: 32px 32px;
  width: 424px;
  height: 264px;
  min-width: 424px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
    border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  }
`,ta.RelatedBadge=on.span`
  background: ${e=>{let{theme:t}=e;return t.PALETTE.secondary.light}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.secondary.main}};
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 16px;
`,ta.RelatedDate=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  position: absolute;
  right: 32px;
  top: 36px;
`,ta.RelatedTitle=on.h4`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  margin-bottom: 8px;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,ta.RelatedSub=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  margin-bottom: 16px;
  line-height: 1.5;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,ta.RelatedFooter=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ta.RelatedAuthor=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ta.RelatedStats=on.div`
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
`,ta.NavButton=on.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 32px;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  transition: all 0.2s;
  padding: 20px;

  &:hover:not(:disabled) {
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[8]}};
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.2;
    cursor: default;
  }
`;const na=()=>{const e=wi(),{id:t}=Si(),n=vi(),i="my"===t,[o,a]=(0,r.useState)(!1),[l,s]=(0,r.useState)(38),c=[{id:"my",category:"\uacf5\ubd80/\ucde8\uc5c5",date:"2026.03.15",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc790\uaca9\uc99d \ud544\uae30 \ub3c4\uc804\uae30",sub:"\uc774\ub860 \uacf5\ubd80 \uc0dd\ub7b5\uc758 \ub300\uac00",author:{name:"\ud544\uae30\ub9c8\uc2a4\ud130",avatar:"https://api.dicebear.com/7.x/thumbs/svg?seed=faillog"},views:45,likes:24,vision:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \ud569\uaca9",badges:[{label:"\ubd84\uc11d \uc644\ub8cc",color:"#22C55E",bg:"#F0FDF4"},{label:"\uacf5\ubd80/\ucde8\uc5c5",color:"#027DF0",bg:"#DBEAFE"}],content:"\uc774\ub860\uc11c(\uae30\ubcf8\uae30) \ud559\uc2b5\uc744 \uc644\uc804\ud788 \uc0dd\ub7b5\ud558\uace0, \ucd5c\uadfc 5\uac1c\ub144 \uae30\ucd9c\ubb38\uc81c \ub2ec\uce58\uae30(\ubb38\uc81c-\ub2f5 \uc554\uae30)\uc5d0\ub9cc \uc9d1\uc911\ud558\uae30\ub85c \ud588\ub2e4. 1\uacfc\ubaa9 (\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc124\uacc4)\uacfc 2\uacfc\ubaa9 (\uc18c\ud504\ud2b8 \uc6e8\uc5b4 \uac1c\ubc1c)\uc740 \uc6a9\uc5b4 \uc704\uc8fc\ub77c \uc554\uae30\ub85c \ubc84\ud17c\uc73c\ub098, 4\uacfc\ubaa9 (\ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4 \ud65c\uc6a9)\uacfc 5\uacfc\ubaa9 (\uc815\ubcf4\uc2dc\uc2a4\ud15c \uad6c\ucd95 \uad00\ub9ac)\uc758 \uc2e0\uc720\ud615 \ubb38\uc81c\uc5d0\uc11c \uc644\uc804\ud788 \ubb34\ub108\uc84c\ub2e4. \ubb38\uc81c\ub97c \uc870\uae08\ub9cc \uaf2c\uc544\ub0b4\ub3c4 \uc6d0\ub9ac\ub97c \ubab0\ub77c\uc11c \uc751\uc6a9\uc774 \ubd88\uac00\ub2a5\ud588\ub2e4.\n\n\uc815\uce58\uae30\ub294 \uae30\ucd9c\ub9cc \ub3cc\ub9ac\uba74 \ubb34\uc870\uac74 \ud569\uaca9\ud55c\ub2e4\"\ub294 \ucee4\ubba4\ub2c8\ud2f0\uc758 \uc218\ub9ce\uc740 \ud6c4\uae30 \uc911 \ub0b4 \uc785\ub9db\uc5d0 \ub9de\ub294 \uae00\ub9cc \uace8\ub77c \uc77d\uc5c8\ub2e4. \ubcf8\uc778\uc774 \ube44\uc804\uacf5\uc790\uc774\uac70\ub098 \uae30\ucd08\uac00 \ubd80\uc871\ud55c \uc0c1\ud0dc\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0, \ub0a8\ub4e4\uacfc \ub611\uac19\uc740 \ub2e8\uae30 \ud569\uaca9 \uc804\ub7b5\uc774 \ud1b5\ud560 \uac83\uc774\ub77c\uace0 \uc0dd\uac01\ud588\ub2e4. \ubc29\ub300\ud55c \uc591\uc758 \uc774\ub860 \uacf5\ubd80\uac00 \uc8fc\ub294 \uc555\ubc15\uac10\uc744 \ud53c\ud558\uae30 \uc704\ud574 '\ud6a8\uc728\uc131'\uc774\ub77c\ub294 \ud551\uacc4\ub85c '\uc554\uae30'\ub77c\ub294 \uc26c\uc6b4 \uae38\uc744 \uc120\ud0dd\ud588\ub2e4.\n\n\ud68c\uc0ac \ubcd1\uc2dc \uc900\ube44 \uae30\uac04\uacfc \uc2dc\ud5d8 \uae30\uac04\uc774 \uacb9\uce58\uba74\uc11c \uc808\ub300\uc801\uc778 \ud559\uc2b5 \uc2dc\uac04\uc774 \ubd80\uc871\ud588\ub2e4. \ud574\ub2f9 \ud68c\ucc28\ubd80\ud130 \uc2e0\uaddc \uc720\ud615 \ubc0f \uc2e4\ubb34 \uc704\uc8fc\uc758 \uc8fc\uad00\uc2dd \uc2a4\ud0c0\uc77c \uac1d\uad00\uc2dd \ubb38\uc81c\uac00 \ub300\uac70 \ucd9c\uc81c\ub418\uc5b4, \ub2e8\uc21c \uae30\ucd9c \uc554\uae30\ubc95\uc758 \uc720\ud6a8\uae30\uac04\uc774 \ub05d\ub0ac\ub2e4.\n\n\uc774\ubc88 \uc2e4\ud328\ub97c \uacc4\uae30\ub85c \ub2e8\uc21c\ud788 \uc9c0\uc2dd\uc744 \uc554\uae30\ud558\ub294 \uac83\uacfc \uc6d0\ub9ac\ub97c \uc644\uc804\ud788 \uc774\ud574\ud558\ub294 \uac83\uc758 \ucc28\uc774\ub97c \ubf08\uc800\ub9ac\uac8c \ub290\uaf08\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \ub3c4\uc804\uc5d0\uc11c\ub294 \uae30\ubcf8\uc11c \uc704\uc8fc\ub85c \uc804\uccb4\uc801\uc778 \ud750\ub984\uc744 \uba3c\uc800 \ud30c\uc545\ud55c \ub4a4, \uae30\ucd9c\ubb38\uc81c\ub97c \uc751\uc6a9 \ud480\uc774\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ud559\uc2b5 \uc804\ub7b5\uc744 \uc804\uba74 \uc218\uc815\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4.\n\n\ubd80\uc871\ud55c \ud559\uc2b5 \uc2dc\uac04\uc744 \ubcf4\uc644\ud558\uae30 \uc704\ud574 \ud1f4\uadfc \ud6c4 \ucd5c\uc18c 3\uc2dc\uac04 \uc774\uc0c1\uc758 \ubab0\uc785 \ud559\uc2b5 \uc2dc\uac04\uc744 \uace0\uc815\uc801\uc73c\ub85c \ud655\ubcf4\ud558\uace0, \uc8fc\ub9d0\uc5d0\ub294 \uc2e0\uaddc \uc720\ud615 \ubb38\uc81c\ub4e4\uc744 \uc9d1\uc911\uc801\uc73c\ub85c \ubd84\uc11d\ud558\ub294 \uc2dc\uac04\uc744 \uac00\uc9c8 \uc608\uc815\uc785\ub2c8\ub2e4. \ub0a8\ub4e4\uc774 \ub9d0\ud558\ub294 '\uc9c0\ub984\uae38'\ubcf4\ub2e4\ub294 \ub098\uc5d0\uac8c \ub9de\ub294 '\ubc14\ub978 \uae38'\uc744 \uc120\ud0dd\ud558\ub294 \uac83\uc774 \uacb0\uad6d \uac00\uc7a5 \ube60\ub978 \ubc29\ubc95\uc774\ub77c\ub294 \uac83\uc744 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4."},{id:"1",category:"\uac74\uac15/\ucde8\uc5c5",date:"2026.03.03",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30 \ud569\uaca9\ud558\uae30!",sub:"\uae08\uc5f0 \uc131\uacf5\ud574\uc11c \uc81c \uac74\uac15 \ud68c\ubcf5\ud558\uae30",author:{name:"\ud544\uae30\ub9c8\uc2a4\ud130",avatar:""},views:45,likes:38,vision:"\uac74\uac15\ud55c \uac1c\ubc1c\uc790 \ub418\uae30",badges:[{label:"\ubd84\uc11d \uc911",color:"#F59E0B",bg:"#FFFBEB"},{label:"\uac74\uac15/\ucde8\uc5c5",color:"#027DF0",bg:"#DBEAFE"}],content:"\uc2e4\uae30 \uc2dc\ud5d8 \uc900\ube44\uc640 \ub3d9\uc2dc\uc5d0 \uae08\uc5f0\uc744 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc2a4\ud2b8\ub808\uc2a4 \uad00\ub9ac\uac00 \uac00\uc7a5 \ud798\ub4e4\uc5c8\uc9c0\ub9cc, \uac74\uac15\uc774 \ub4b7\ubc1b\uce68\ub418\uc5b4\uc57c \uacf5\ubd80\ub3c4 \ud6a8\uc728\uc774 \ub09c\ub2e4\ub294 \uac83\uc744 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4. \ub9e4\uc77c \uc544\uce68 \uc870\uae45\uc744 \ubcd1\ud589\ud558\uba70 \uccb4\ub825\uc744 \uae38\ub800\uace0, \uacb0\uad6d \uc2e4\uae30 \uc2dc\ud5d8\uc5d0\uc11c\ub3c4 \uc88b\uc740 \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."},{id:"2",category:"\uacf5\ubd80/\ucde8\uc5c5",date:"2026.03.04",title:"\ube45\ub370\uc774\ud130\ubd84\uc11d\uae30\uc0ac \ub3c4\uc804",sub:"\ube44\uc804\uacf5\uc790\uc758 \ub370\uc774\ud130 \ubd84\uc11d \uc785\ubb38\uae30",author:{name:"\ub370\uc774\ud130\ub7ec\ubc84",avatar:""},views:120,likes:56,vision:"\ub370\uc774\ud130 \ubd84\uc11d\uac00 \ub370\ubdd4",badges:[{label:"\ubd84\uc11d \uc644\ub8cc",color:"#22C55E",bg:"#F0FDF4"},{label:"\uacf5\ubd80/\ucde8\uc5c5",color:"#027DF0",bg:"#DBEAFE"}],content:"\ube44\uc804\uacf5\uc790\ub85c\uc11c \ud1b5\uacc4\ud559\uc801 \uae30\ucd08\uac00 \ubd80\uc871\ud574 \uace0\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud30c\uc774\uc36c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud558\ub098\uc529 \uc775\ud600\uac00\uba70 \ub370\uc774\ud130\uc758 \ud750\ub984\uc744 \uc774\ud574\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c \uacf5\uacf5 \ub370\uc774\ud130\ub97c \ud65c\uc6a9\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud574\ubcf8 \uac83\uc774 \ud070 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4."},{id:"3",category:"\uc790\uae30\uacc4\ubc1c",date:"2026.03.05",title:"\ub9e4\uc77c \uc544\uce68 6\uc2dc \uae30\uc0c1 \ucc4c\ub9b0\uc9c0",sub:"\ubbf8\ub77c\ud074 \ubaa8\ub2dd\uc73c\ub85c \uc778\uc0dd \ubc14\uafb8\uae30",author:{name:"\uc0c8\ubcbd\ud615\uc778\uac04",avatar:""},views:89,likes:42,vision:"\uaddc\uce59\uc801\uc778 \uc0b6",badges:[{label:"\ubd84\uc11d \uc644\ub8cc",color:"#22C55E",bg:"#F0FDF4"},{label:"\uc790\uae30\uacc4\ubc1c",color:"#9333EA",bg:"#F3E8FF"}],content:"\ucc98\uc74c \uc77c\uc8fc\uc77c\uc740 \ubab8\uc774 \ucc9c\uadfc\ub9cc\uadfc\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc544\uce68 1\uc2dc\uac04\uc758 \ub3c5\uc11c\uac00 \uc81c \ud558\ub8e8\uc758 \ubc00\ub3c4\ub97c \uc644\uc804\ud788 \ubc14\uafd4\ub193\uc558\uc2b5\ub2c8\ub2e4. \uc774\uc81c\ub294 \uc54c\ub78c \uc5c6\uc774\ub3c4 6\uc2dc\uc5d0 \ub208\uc774 \ub5a0\uc9c0\ub294 \uc2b5\uad00\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4."},{id:"4",category:"\uac74\uac15/\ucde8\uc5c5",date:"2026.03.06",title:"\ubc14\ub514\ud504\ub85c\ud544 \ub3c4\uc804\uae30",sub:"3\uac1c\uc6d4 \ub9cc\uc5d0 10kg \uac10\ub7c9 \uc131\uacf5",author:{name:"\uc6b4\ub3d9\ud558\ub294\uc9c1\uc7a5\uc778",avatar:""},views:230,likes:154,vision:"\ucd5c\uace0\uc758 \ubab8 \ub9cc\ub4e4\uae30",badges:[{label:"\ubd84\uc11d \uc644\ub8cc",color:"#22C55E",bg:"#F0FDF4"},{label:"\uac74\uac15/\ucde8\uc5c5",color:"#027DF0",bg:"#DBEAFE"}],content:"\uc2dd\ub2e8 \uc870\uc808\uc774 \uac00\uc7a5 \ud070 \uace0\ube44\uc600\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ubcc0\ud654\ud558\ub294 \ubab8\uc744 \uac70\uc6b8\ub85c \ubcf4\uba70 \ub3d9\uae30\ubd80\uc5ec\ub97c \uc5bb\uc5c8\uc2b5\ub2c8\ub2e4. \uc6b4\ub3d9\uc740 \ub2e8\uc21c\ud788 \uc0b4\uc744 \ube7c\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc790\uc2e0\uac10\uc744 \ucc44\uc6b0\ub294 \uacfc\uc815\uc784\uc744 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4."},{id:"5",category:"\uacf5\ubd80/\ucde8\uc5c5",date:"2026.03.07",title:"\uc601\uc5b4 \ud68c\ud654 \uc815\ubcf5\ud558\uae30",sub:"\ud558\ub8e8 30\ubd84\uc529 \uafb8\uc900\ud788 \ud558\uae30",author:{name:"\uae00\ub85c\ubc8c\ub9ac\ub354",avatar:""},views:67,likes:29,vision:"\ud574\uc678 \ucde8\uc5c5",badges:[{label:"\ubd84\uc11d \uc644\ub8cc",color:"#22C55E",bg:"#F0FDF4"},{label:"\uacf5\ubd80/\ucde8\uc5c5",color:"#027DF0",bg:"#DBEAFE"}],content:"\uc644\ubcbd\ud558\uac8c \ub9d0\ud558\ub824\uace0 \ud558\uae30\ubcf4\ub2e4 \ud2c0\ub824\ub3c4 \ubc49\uc5b4\ubcf4\ub294 \uc5f0\uc2b5\uc744 \ud588\uc2b5\ub2c8\ub2e4. \uc250\ub3c4\uc789 \ud6c8\ub828\uc744 \ud1b5\ud574 \uc5b5\uc591\uacfc \ub9ac\ub4ec\uc744 \uc775\ud78c \uac83\uc774 \ud070 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc81c\ub294 \uc678\uad6d\uc778 \ub3d9\ub8cc\uc640 \uac00\ubcbc\uc6b4 \ub300\ud654\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."},{id:"6",category:"\uc790\uae30\uacc4\ubc1c",date:"2026.03.08",title:"\ub3c5\uc11c 100\uad8c \uc77d\uae30 \ud504\ub85c\uc81d\ud2b8",sub:"\uc0dd\uac01\uc758 \uae4a\uc774\ub97c \ub354\ud558\ub294 \uc2dc\uac04",author:{name:"\ucc45\ubc8c\ub808",avatar:""},views:145,likes:88,vision:"\uc9c0\uc2dd\uc758 \ud655\uc7a5",badges:[{label:"\ubd84\uc11d \uc644\ub8cc",color:"#22C55E",bg:"#F0FDF4"},{label:"\uc790\uae30\uacc4\ubc1c",color:"#9333EA",bg:"#F3E8FF"}],content:"\uc7a5\ub974\ub97c \uac00\ub9ac\uc9c0 \uc54a\uace0 \uc77d\uc73c\ub824\uace0 \ub178\ub825\ud588\uc2b5\ub2c8\ub2e4. \ucc45 \uc18d\uc758 \ud55c \ubb38\uc7a5\uc774 \uc81c \uac00\uce58\uad00\uc744 \ud754\ub4dc\ub294 \uacbd\ud5d8\uc744 \uc5ec\ub7ec \ubc88 \ud588\uc2b5\ub2c8\ub2e4. 100\uad8c\uc744 \ucc44\uc6b0\ub294 \uac83\ubcf4\ub2e4 \uadf8 \uc18d\uc5d0\uc11c \ubb34\uc5c7\uc744 \uc5bb\ub290\ub0d0\uac00 \ub354 \uc911\uc694\ud558\ub2e4\ub294 \uac83\uc744 \uae68\ub2ec\uc558\uc2b5\ub2c8\ub2e4."}],d=c.find(e=>String(e.id)===String(t))||c[0],u=c.filter(e=>"my"!==e.id),[h,p]=(0,r.useState)(0),f=u.length-3;return(0,yo.jsxs)(ta.Wrapper,{children:[(0,yo.jsxs)(ta.Header,{children:[(0,yo.jsx)(ta.Title,{children:i?"My Fail Log":"View Fail Log"}),(0,yo.jsx)(ta.SubTitle,{children:i?"\ub0b4\uac00 \uc791\uc131\ud55c \ud398\uc77c\ub85c\uadf8\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694.":"\ub2e4\ub978 \uc0ac\ub78c\uc758 \ud398\uc77c\ub85c\uadf8\ub97c \uacbd\ud5d8\ud574\ubcf4\uc138\uc694."})]}),(0,yo.jsxs)(ta.ContentWrapper,{children:[(0,yo.jsxs)(ta.TabBar,{children:[(0,yo.jsx)(ta.Tab,{to:`/logs/result/${t}/detail`,children:"\uc791\uc131 \ub0b4\uc6a9"}),(0,yo.jsx)(ta.Tab,{to:`/logs/result/${t}/report/patterns`,className:n.pathname.includes("/report")?"active":"",children:"\ubd84\uc11d \uacb0\uacfc"})]}),(0,yo.jsxs)(ta.CardWrapper,{children:[(0,yo.jsx)(ta.PurpleShadow,{}),(0,yo.jsx)(ta.Card,{children:(0,yo.jsx)(Bi,{context:{isMyLog:i,liked:o,likeCount:l,handleLike:()=>{a(e=>!e),s(e=>o?e-1:e+1)},selectedLog:d}})})]}),(0,yo.jsxs)(ta.CarouselSection,{children:[(0,yo.jsx)(ta.CarouselTitle,{children:"\ub098\uc640 \uac19\uc740 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \ub3c4\uc804\ud558\ub294 \uc0ac\ub78c\ub4e4"}),(0,yo.jsx)(ta.CarouselSubTitle,{children:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc758 \uc0dd\uc0dd\ud55c \ub178\ub825/\ubcf5\uae30 \uc0ac\ub840\ub97c \ud1b5\ud574 \uc778\uc0ac\uc774\ud2b8\ub97c \uc5bb\uc5b4\ubcf4\uc138\uc694."}),(0,yo.jsxs)(ta.CarouselContainer,{children:[(0,yo.jsx)(ta.NavButton,{className:"left",onClick:()=>{p(e=>Math.max(e-1,0))},disabled:0===h,children:"\u3008"}),(0,yo.jsx)(ta.SliderWindow,{children:(0,yo.jsx)(ta.CardList,{style:{transform:`translateX(-${448*h}px)`},children:u.map(t=>(0,yo.jsxs)(ta.RelatedCard,{onClick:()=>e(`/logs/result/${t.id}/detail`),children:[(0,yo.jsx)(ta.RelatedBadge,{children:t.category}),(0,yo.jsx)(ta.RelatedDate,{children:t.date}),(0,yo.jsx)(ta.RelatedTitle,{children:t.title}),(0,yo.jsx)(ta.RelatedSub,{children:t.sub}),(0,yo.jsxs)(ta.RelatedFooter,{children:[(0,yo.jsx)(ta.RelatedAuthor,{children:t.author.name}),(0,yo.jsxs)(ta.RelatedStats,{children:[(0,yo.jsxs)("span",{children:["\ud83d\udc41\ufe0f ",t.views]}),(0,yo.jsxs)("span",{children:["\ud83e\udd0d ",t.likes]})]})]})]},t.id))})}),(0,yo.jsx)(ta.NavButton,{className:"right",onClick:()=>{p(e=>Math.min(e+1,f))},disabled:h===f,children:"\u3009"})]})]})]})]})};const ra=n.p+"static/media/check_circle.a1936067419a1993d66ef2c5daf73c18.svg",ia={};ia.Container=on.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 1096px;
  margin: 0 auto;
`,ia.BadgeRow=on.div`
  display: flex;
  gap: 8px;
`,ia.Badge=on.span`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0;
  border-radius: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{$color:t}=e;return t}};
  background-color: ${e=>{let{$bg:t}=e;return t}};
`,ia.TitleRow=on.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,ia.LogTitle=on.h2`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  line-height: 1.3;
  letter-spacing: -0.5px;
`,ia.Date=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  flex-shrink: 0;
  margin-left: 20px;
`,ia.MetaRow=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
`,ia.AuthorInfo=on.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,ia.AuthorName=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ia.LikeButton=on.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  span {
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.medium}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  }
`,ia.HeartIcon=on.div`
  width: 18px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ia.CheckIcon=on.img`
  width: 17px;
  height: 17px;
`,ia.VisionBox=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
  border-radius: 8px;
  background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
`,ia.VisionLabel=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
  white-space: nowrap;
`,ia.VisionValue=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ia.ContentBox=on.div`
  padding: 24px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
  border-radius: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
`,ia.ContentText=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  line-height: 2;
  white-space: pre-line;
  letter-spacing: -0.2px;
`,ia.CheckIcon=on.img`
  width: 17px;
  height: 17px;
`;const oa=()=>{const{liked:e,likeCount:t,handleLike:n,selectedLog:r}=ji();return r?(0,yo.jsxs)(ia.Container,{children:[(0,yo.jsx)(ia.BadgeRow,{children:r.badges.map((e,t)=>(0,yo.jsxs)(ia.Badge,{$color:e.color,$bg:e.bg,children:["\ubd84\uc11d \uc644\ub8cc"===e.label&&(0,yo.jsx)(ia.CheckIcon,{src:ra,alt:"check circle"}),e.label]},t))}),(0,yo.jsxs)(ia.TitleRow,{children:[(0,yo.jsx)(ia.LogTitle,{children:r.title}),(0,yo.jsx)(ia.Date,{children:r.date})]}),(0,yo.jsxs)(ia.MetaRow,{children:[(0,yo.jsx)(ia.AuthorInfo,{children:(0,yo.jsx)(ia.AuthorName,{children:r.author.name})}),(0,yo.jsxs)(ia.LikeButton,{onClick:n,children:[(0,yo.jsx)(ia.HeartIcon,{$liked:e,children:(0,yo.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 25 22",fill:e?"#FF4B4B":"none",xmlns:"http://www.w3.org/2000/svg",children:(0,yo.jsx)("path",{d:"M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z",stroke:"#FF4B4B",strokeWidth:"1.55556",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,yo.jsx)("span",{children:t})]})]}),(0,yo.jsxs)(ia.VisionBox,{children:[(0,yo.jsx)(ia.VisionLabel,{children:"\uc774\ub8e8\uace0 \uc2f6\uc740 \ube44\uc804"}),(0,yo.jsx)(ia.VisionValue,{children:r.vision})]}),(0,yo.jsx)(ia.ContentBox,{children:(0,yo.jsx)(ia.ContentText,{children:r.content})})]}):null},aa={};aa.MenuWrapper=on.div`
    display: flex;
    gap: 12px;
    margin-bottom: 32px;
    margin-left: 21px;
`,aa.TabLink=on(ao)`
    width: 131px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 10px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    
    border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};

    &.active {
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
        color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    }

    &:hover:not(.active) {
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.light}};
    }
`;const la=()=>{const{id:e}=Si();return(0,yo.jsxs)(aa.MenuWrapper,{children:[(0,yo.jsx)(aa.TabLink,{to:`/logs/result/${e}/report/patterns`,children:"\ud328\ud134 \ubd84\uc11d"}),(0,yo.jsx)(aa.TabLink,{to:`/logs/result/${e}/report/action-plan`,children:"\ud589\ub3d9 \uacc4\ud68d"})]})},sa={};sa.Container=on.div`
    display: flex;
    flex-direction: column;
`,sa.ContentArea=on.div`
    /* Additional spacing if needed */
`,sa.BottomLinkWrapper=on.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    padding: 0 0 40px 0; /* Add bottom padding for safety */
`,sa.BottomLink=on.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    text-decoration: none;
    padding-bottom: 4px;
    cursor: pointer;

    &:hover {
        color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    }
`,sa.ArrowIcon=on(e=>{let{className:t}=e;return(0,yo.jsx)("svg",{className:t,width:"24",height:"24",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,yo.jsx)("path",{d:"M21.9795 12.5L3.22949 12.5M15.7295 18.75L21.9795 12.5L15.7295 6.25",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})`
    margin-left: 8px;
    transition: transform 0.2s, color 0.2s;

    ${sa.BottomLink}:hover & {
        transform: translateX(4px);
    }
`;const ca=()=>{const e=ji(),t=wi();return(0,yo.jsxs)(sa.Container,{children:[(0,yo.jsx)(la,{}),(0,yo.jsx)(sa.ContentArea,{children:(0,yo.jsx)(Bi,{context:e})}),(0,yo.jsx)(sa.BottomLinkWrapper,{children:(0,yo.jsxs)(sa.BottomLink,{onClick:()=>t("/projects"),children:["\ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\ub7ec \uac00\uae30",(0,yo.jsx)(sa.ArrowIcon,{})]})})]})},da=on.div`
    width: ${e=>{let{size:t}=e;return t}}px;
    height: ${e=>{let{size:t}=e;return t}}px;
    display: flex;
    justify-content: center;
    align-items: center;
`,ua=e=>{let{data:t,size:n=300}=e;const r=Yt(),i=n/2,o=n/2*.7,a=2*Math.PI/t.length,l=t.map((e,t)=>{const n=e.value||0;return`${i+o*(n/100)*Math.sin(t*a)},${i-o*(n/100)*Math.cos(t*a)}`}).join(" "),s=[25,50,75,100].map(e=>t.map((t,n)=>`${i+o*(e/100)*Math.sin(n*a)},${i-o*(e/100)*Math.cos(n*a)}`).join(" "));return(0,yo.jsx)(da,{size:n,children:(0,yo.jsxs)("svg",{width:n,height:n,viewBox:`0 0 ${n} ${n}`,children:[t.map((e,t)=>{const n=i+o*Math.sin(t*a),l=i-o*Math.cos(t*a);return(0,yo.jsx)("line",{x1:i,y1:i,x2:n,y2:l,stroke:r.GRAYSCALE[2],strokeWidth:"1"},`axis-${t}`)}),s.map((e,t)=>(0,yo.jsx)("polygon",{points:e,fill:"none",stroke:r.GRAYSCALE[2],strokeWidth:"1"},`grid-${t}`)),(0,yo.jsx)("polygon",{points:l,fill:`${r.PALETTE.third.main}33`,stroke:r.PALETTE.third.main,strokeWidth:"2",strokeLinejoin:"round"}),t.map((e,t)=>{const n=i+(o+20)*Math.sin(t*a),l=i-(o+20)*Math.cos(t*a);let s="middle";return Math.sin(t*a)>.1&&(s="start"),Math.sin(t*a)<-.1&&(s="end"),(0,yo.jsx)("text",{x:n,y:l,textAnchor:s,dominantBaseline:"middle",fontSize:"13",fontWeight:"600",fill:r.TEXT_COLOR.basic,children:e.label},`label-${t}`)})]})})},ha=on.div`
    position: relative;
    width: ${e=>{let{size:t}=e;return t}}px;
    height: ${e=>{let{size:t}=e;return t}}px;
    display: flex;
    justify-content: center;
    align-items: center;
`,pa=on.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,fa=on.div`
    font-size: 28px;
    font-weight: 800;
    color: ${e=>{let{color:t}=e;return t}};
    line-height: 1;
`,ga=on.div`
    font-size: 14px;
    font-weight: 700;
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-top: 4px;
`,ma=e=>{let{externalValue:t=70,internalValue:n=30,size:r=200}=e;const i=Yt(),o=r/2,a=(r-35)/2,l=2*Math.PI*a,s=t/100*l;return(0,yo.jsxs)(ha,{size:r,children:[(0,yo.jsxs)("svg",{width:r,height:r,viewBox:`0 0 ${r} ${r}`,style:{transform:"rotate(-90deg)"},children:[(0,yo.jsx)("circle",{cx:o,cy:o,r:a,fill:"none",stroke:"url(#purpleGradient)",strokeWidth:35}),(0,yo.jsx)("circle",{cx:o,cy:o,r:a,fill:"none",stroke:"url(#blueGradient)",strokeWidth:35,strokeDasharray:`${s} ${l}`,strokeDashoffset:0,strokeLinecap:"butt"}),(0,yo.jsxs)("defs",{children:[(0,yo.jsxs)("linearGradient",{id:"blueGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,yo.jsx)("stop",{offset:"0%",stopColor:i.PALETTE.primary.main}),(0,yo.jsx)("stop",{offset:"100%",stopColor:"#00C2FF"})]}),(0,yo.jsxs)("linearGradient",{id:"purpleGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,yo.jsx)("stop",{offset:"0%",stopColor:i.PALETTE.third.main}),(0,yo.jsx)("stop",{offset:"100%",stopColor:"#7B39FD"})]})]})]}),(0,yo.jsxs)(pa,{children:[(0,yo.jsxs)(fa,{color:i.PALETTE.fourth.main,children:[t,"%"]}),(0,yo.jsx)(ga,{children:"\uc678\ubd80\uc694\uc778"})]})]})};const xa=n.p+"static/media/pattern.7a08f4b1117adb48706d66e3e9492a09.svg";const ba=n.p+"static/media/habit.e48e83d60a125ba7beecb1a40175da15.svg";const va=n.p+"static/media/flow.b089da6ea727c39dfa58d227ac156fc3.svg",ya={};ya.Container=on.div`
    display: flex;
    flex-direction: column;
    width: 1096px;
    margin: 0 auto;
`,ya.MetaRow=on.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    margin-bottom: 50px;
`,ya.AuthorInfo=on.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,ya.AuthorName=on.span`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ya.LikeButton=on.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    span {
        font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
        font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.medium}};
        color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    }
`,ya.HeartIcon=on.div`
    width: 18px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`,ya.SummaryHeader=on.div`
    margin-bottom: 45px;
`,ya.Badge=on.span`
    height: 40px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    background-color: transparent;
    color: ${e=>{let{theme:t}=e;return t.PALETTE.fourth.main}};
    border: 2px solid ${e=>{let{theme:t}=e;return t.PALETTE.fourth.main}};
    border-radius: 10px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    margin-bottom: 20px;
`,ya.MainTitle=on.h2`
    margin: 0;
    margin-bottom: 13px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ya.Description=on.p`
    margin: 0;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    line-height: 1.6;
`,ya.SectionHeader=on.h3`
    display: flex;
    align-items: center;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-bottom: 16px;

    &::before {
        content: '';
        display: block;
        width: 4px;
        height: 30px;
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
        margin-right: 10px;
    }
`,ya.QuoteBox=on.div`
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    border-radius: 12px;
    padding: 24px 28px;
    margin-bottom: 45px;
`,ya.QuoteText=on.p`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-bottom: 8px;
    text-align: left;
`,ya.QuoteSubText=on.p`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.fourth.main}};
    text-align: left;
`,ya.AccordionList=on.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;const wa=tn`
    border: 2px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    box-shadow: 0px 4px 20px rgba(171, 71, 255, 0.1);
`,Ea=tn`
    border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    box-shadow: none;
`;ya.AccordionItem=on.div`
    ${e=>{let{$isOpen:t}=e;return t?wa:Ea}}
    border-radius: 12px;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    }
`,ya.AccordionHeader=on.div`
    display: flex;
    align-items: center;
    padding: 0 28px;
    height: 120px;
`,ya.IconWrapper=on.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    background-color: transparent;
`,ya.IconImg=on.img`
    width: 100%;
    height: 100%;
`,ya.AccordionTitle=on.span`
    flex: 1;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ya.Chevron=on.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 2px solid ${e=>{let{$isOpen:t,theme:n}=e;return t?n.PALETTE.third.main:n.GRAYSCALE[5]}};
    border-bottom: 2px solid ${e=>{let{$isOpen:t,theme:n}=e;return t?n.PALETTE.third.main:n.GRAYSCALE[5]}};
    transform: ${e=>{let{$isOpen:t}=e;return t?"rotate(-135deg) translateY(3px)":"rotate(45deg) translateY(-3px)"}};
    transition: transform 0.3s ease, border-color 0.2s;
    flex-shrink: 0;
    margin-bottom: ${e=>{let{$isOpen:t}=e;return t?"-4px":"4px"}};
`,ya.AccordionContent=on.div`
    padding: 30px;
    background: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
    overflow: hidden; /* 삐져나옴 방지 */
`,ya.ContentRow=on.div`
    display: flex;
    margin: -30px; /* padding과 동일하게 설정하여 선을 끝까지 연결 */
`,ya.ContentCol=on.div`
    flex: 1;
    padding: 40px; /* 내부 여백 확보 */

    &:first-child {
        padding-right: 50px;
        border-right: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    }

    &:last-child {
        padding-left: 50px;
    }
`,ya.ContentSubTitle=on.h4`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    margin-bottom: 24px;
    text-align: left;
`,ya.PlaceholderImage=on.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
    border-radius: 8px;
    padding: 20px;
`,ya.DoughnutWrapper=on.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border-radius: 12px;
`,ya.ChartHeaderInfo=on.div`
    position: absolute;
    top: 20px;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`,ya.InfoItem=on.div`
    font-size: 14px;
    font-weight: 700;
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[8]}};
    text-align: right;

    span {
        margin-left: 8px;
    }
`,ya.LegendWrapper=on.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
`,ya.LegendItem=on.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[10]}};
    font-weight: 600;
`,ya.Dot=on.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${e=>{let{color:t}=e;return t}};
`,ya.ChartWrapper=on.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border-radius: 12px;
`,ya.ListItem=on.div`
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
`,ya.ListNum=on.span`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{color:t}=e;return t||bn.PALETTE.fourth.main}};
`,ya.ListBody=on.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,ya.ListTitle=on.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ya.ListDesc=on.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[10]}};
    line-height: 1.5;
`,ya.FlowWrapper=on.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`,ya.FlowStep=on.div`
    width: 120px;
    height: 60px;
    border: 2px solid ${e=>{let{borderColor:t}=e;return t||bn.GRAYSCALE[2]}};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
`,ya.StepLabel=on.div`
    font-size: 12px;
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
    margin-bottom: 4px;
`,ya.StepValue=on.div`
    font-size: 14px;
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
`,ya.ArrowDown=on.div`
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    font-size: 12px;
`,ya.LogSection=on.div`
    margin-bottom: 24px;
`,ya.LogLabel=on.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{color:t}=e;return t}};
    margin-bottom: 8px;
`,ya.LogText=on.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    line-height: 1.6;
`;const ja=()=>{const e=Yt(),{liked:t,likeCount:n,handleLike:i,selectedLog:o}=ji(),[a,l]=(0,r.useState)([]),s=e=>{l(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},c=e=>a.includes(e),d=70,u=30,h={habits:[{title:"\uc815\ubcf4 \uc218\uc9d1\uc5d0\ub9cc \uc2dc\uac04\uc744 \uacfc\ub3c4\ud558\uac8c \uc3df\uc74c",description:"\uacb0\uc815\uc744 \ubbf8\ub8e8\uace0 \ud0c0\uc778\uc758 \uc758\uacac(\ucee4\ubba4\ub2c8\ud2f0 \ub4f1)\uc744 \ub9f9\uc2e0\ud558\ub294 \uacbd\ud5a5\uc774 \ubc1c\uc0dd\ud568."},{title:"\ube44\ud604\uc2e4\uc801\uc778 \ub2e8\uae30 \ubaa9\ud45c",description:"\ub9c8\uac10 \uae30\ud55c \uc555\ubc15(\uc678\ubd80\uc694\uc778)\uc744 \ubc1b\uc744 \ub54c, \uc790\uc2e0\uc758 \uc5ed\ub7c9\uc744 \ucd08\uacfc\ud558\ub294 \uacc4\ud68d\uc744 \uc138\uc6c0."}],classification:{internal:[{title:"\uc758\uc695 \uacfc\ub2e4 \ubc0f \uc870\uae09\ud568",description:"\uc2a4\uc2a4\ub85c\ub97c \ubab0\uc544\ubd99\uc774\ub294 \uc131\uaca9\uc774 \uc2e4\ud328\uc758 \uc8fc\uc694 \uc6d0\uc778"}],external:[{title:"\ud658\uacbd\uc801 \uc555\ubc15",description:"\ud0c0\uc774\ud2b8\ud55c \ub9c8\uac10 \uae30\ud55c\uacfc \uc8fc\ubcc0\uc758 \uae30\ub300\uce58"}]}},p={flow:[{label:"\uc0c1\ud669",value:"\uc678\ubd80 \uc555\ubc15 \uc99d\uac00",color:e.PALETTE.fourth.main},{label:"\uacb0\uc815 \ud328\ud134",value:"\ud68c\ud53c \ub610\ub294 \ud3ec\uae30",color:e.PALETTE.secondary.main},{label:"\ubc18\ubcf5 \uacb0\uacfc",value:"\ubaa9\ud45c \ubbf8\ub2ec\uc131",color:e.PALETTE.third.main}],logAnalysis:[{label:"\uc8fc\uc694 \uacb0\uc815",content:"\ud300\uc6d0\uacfc \uac08\ub4f1\uc774 \uc0dd\uaca8\uc11c \ud300\uc6d0\uacfc\uc758 \uc0c1\uc758\ub97c \ud558\uc9c0 \uc54a\uace0 \ud63c\uc790 \ubc29\ud5a5\uc744 \uc815\ud574\uc11c \ub9d8\ub300\ub85c \ubc14\uafb8\uc5c8\ub2e4.",color:e.PALETTE.third.main},{label:"\uc678\ubd80 \uc694\uc778",content:"\ub9c8\uac10 \uc77c\uc815 \uc555\ubc15, \ud300\uc6d0\uacfc \ub2e4\ub978 \uc758\uacac\uacfc \uadf8\ub85c \uc778\ud55c \uc758\uacac \ucda9\ub3cc",color:e.PALETTE.fourth.main},{label:"\ub0b4\ubd80 \uc694\uc778",content:"\uac08\ub4f1\uc744 \ud574\uacb0\ud558\ub824\ud558\uc9c0 \uc54a\uace0 \ud68c\ud53c\ud558\ub824\ub294 \uc2ec\ub9ac, \ud63c\uc790\uc11c\ub3c4 \ub2e4 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4\ub294 \uacfc\uc2e0",color:e.PALETTE.primary.main}]},f={badge:`\ud658\uacbd \uc801\uc751\ud615 \uc2e4\ud328 (\uc678\ubd80 \uc694\uc778 ${d}%)`,title:"\uc678\ubd80 \ud658\uacbd \ubcc0\ud654\uc5d0 \ud729\uc4f8\ub9b0 \uc2e4\ud328",description:"\uc2dc\uc7a5 \uc0c1\ud669\uc774\ub098 \ud0c0\uc778\uc758 \uc555\ubc15 \uac19\uc740 \uc678\ubd80 \uc694\uc778\uc5d0 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uc2a4\uc2a4\ub85c \uc8fc\ub3c4\uad8c\uc744 \uc7a1\uc9c0 \ubabb\ud558\uace0 \ud658\uacbd\uc5d0 \uc801\uc751\ud558\uc9c0 \ubabb\ud55c \ucc44 \ub0b4\ub9b0 \uacb0\uc815\ub4e4\uc774 \ubc18\ubcf5\uc801\uc778 \uc2e4\ud328 \ud328\ud134\uc744 \ub9cc\ub4e4\uace0 \uc788\uc2b5\ub2c8\ub2e4.",quote:"\ud658\uacbd\uc774 \uc5b4\ub824\uc6cc\uc9c8 \ub54c, \ub2f9\uc2e0\uc740 \uc8fc\ub85c \uc9d1\uc911\ub825\uc744 \uc783\uace0 \ud68c\ud53c\ud558\ub294 \uacb0\uc815\uc744 \ub0b4\ub9bd\ub2c8\ub2e4.",quoteSubText:"\uc774 \ub85c\uadf8\uc5d0\uc11c \ucc3e\uc740 \ud575\uc2ec \uc2e4\ud328 \uadfc\uac70\uc600\uc5b4\uc694. \ub2e4\uc74c \uc2e4\ucc9c\uc5d0\uc11c \ub0b4\ub9ac\ub294 \uacb0\uc815\uc744 \ud55c \ubc88 \ub354 \uc810\uac80\ud574\ubcf4\uc138\uc694."};return(0,yo.jsxs)(ya.Container,{children:[(0,yo.jsxs)(ya.MetaRow,{children:[(0,yo.jsx)(ya.AuthorInfo,{children:(0,yo.jsx)(ya.AuthorName,{children:o.author.name})}),(0,yo.jsxs)(ya.LikeButton,{onClick:i,children:[(0,yo.jsx)(ya.HeartIcon,{$liked:t,children:(0,yo.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 25 22",fill:t?"#FF4B4B":"none",xmlns:"http://www.w3.org/2000/svg",children:(0,yo.jsx)("path",{d:"M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z",stroke:"#FF4B4B",strokeWidth:"1.55556",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,yo.jsx)("span",{children:n})]})]}),(0,yo.jsxs)(ya.SummaryHeader,{children:[(0,yo.jsx)(ya.Badge,{children:f.badge}),(0,yo.jsx)(ya.MainTitle,{children:f.title}),(0,yo.jsx)(ya.Description,{children:f.description})]}),(0,yo.jsx)(ya.SectionHeader,{children:"\ud55c \uc904 \uc694\uc57d"}),(0,yo.jsxs)(ya.QuoteBox,{children:[(0,yo.jsxs)(ya.QuoteText,{children:['"',f.quote,'"']}),(0,yo.jsx)(ya.QuoteSubText,{children:f.quoteSubText})]}),(0,yo.jsx)(ya.SectionHeader,{children:"\ubd84\uc11d \uc138\ubd80 \uc0ac\ud56d"}),(0,yo.jsxs)(ya.AccordionList,{children:[(0,yo.jsxs)(ya.AccordionItem,{$isOpen:c(0),children:[(0,yo.jsxs)(ya.AccordionHeader,{onClick:()=>s(0),children:[(0,yo.jsx)(ya.IconWrapper,{children:(0,yo.jsx)(ya.IconImg,{src:xa,alt:"pattern"})}),(0,yo.jsx)(ya.AccordionTitle,{children:"\uc694\uc778\ubcc4 \uc601\ud5a5\ub3c4 & \ub098\uc758 \uc2e4\ud328 \ud328\ud134"}),(0,yo.jsx)(ya.Chevron,{$isOpen:c(0)})]}),c(0)&&(0,yo.jsx)(ya.AccordionContent,{children:(0,yo.jsxs)(ya.ContentRow,{children:[(0,yo.jsxs)(ya.ContentCol,{children:[(0,yo.jsx)(ya.ContentSubTitle,{children:"\uc694\uc778\ubcc4 \uc601\ud5a5\ub3c4 \ube44\uc728"}),(0,yo.jsxs)(ya.DoughnutWrapper,{children:[(0,yo.jsxs)(ya.ChartHeaderInfo,{children:[(0,yo.jsxs)(ya.InfoItem,{children:["\uc678\ubd80\uc694\uc778 ",(0,yo.jsxs)("span",{style:{color:e.PALETTE.primary.main},children:[d,"%"]})]}),(0,yo.jsxs)(ya.InfoItem,{children:["\ub0b4\ubd80\uc694\uc778 ",(0,yo.jsxs)("span",{style:{color:e.PALETTE.third.main},children:[u,"%"]})]})]}),(0,yo.jsx)(ma,{externalValue:d,internalValue:u,size:220}),(0,yo.jsxs)(ya.LegendWrapper,{children:[(0,yo.jsxs)(ya.LegendItem,{children:[(0,yo.jsx)(ya.Dot,{color:e.PALETTE.primary.main}),"\uc678\ubd80\uc694\uc778 (\ud658\uacbd/\ud0c0\uc778)"]}),(0,yo.jsxs)(ya.LegendItem,{children:[(0,yo.jsx)(ya.Dot,{color:e.PALETTE.third.main}),"\ub0b4\ubd80\uc694\uc778 (\ub9c8\uc778\ub4dc/\uc9c0\uc2dd)"]})]})]})]}),(0,yo.jsxs)(ya.ContentCol,{children:[(0,yo.jsx)(ya.ContentSubTitle,{children:"\ub098\uc758 \uc2e4\ud328 \ud328\ud134"}),(0,yo.jsx)(ya.ChartWrapper,{children:(0,yo.jsx)(ua,{data:[{label:"\uc870\uae09\ud568",value:85},{label:"\uc2e4\ud589\ub825",value:45},{label:"\ud0c0\uc778 \uc758\uc874\ub3c4",value:70},{label:"\uc815\ubcf4 \uc218\uc9d1\ub7c9",value:90},{label:"\ud658\uacbd \ud1b5\uc81c\ub825",value:40},{label:"\ube44\ud604\uc2e4\uc801 \ubaa9\ud45c",value:75}],size:320})})]})]})})]}),(0,yo.jsxs)(ya.AccordionItem,{$isOpen:c(1),children:[(0,yo.jsxs)(ya.AccordionHeader,{onClick:()=>s(1),children:[(0,yo.jsx)(ya.IconWrapper,{children:(0,yo.jsx)(ya.IconImg,{src:ba,alt:"habit"})}),(0,yo.jsx)(ya.AccordionTitle,{children:"\uc790\uc8fc \ubc18\ubcf5\ub418\ub294 \uc2b5\uad00 & \uc694\uc778\uc5d0 \ub530\ub978 \uc2e4\ud328 \ubd84\ub958"}),(0,yo.jsx)(ya.Chevron,{$isOpen:c(1)})]}),c(1)&&(0,yo.jsx)(ya.AccordionContent,{children:(0,yo.jsxs)(ya.ContentRow,{children:[(0,yo.jsxs)(ya.ContentCol,{children:[(0,yo.jsx)(ya.ContentSubTitle,{children:"\uc790\uc8fc \ubc18\ubcf5\ub418\ub294 \uc704\ud5d8\ud55c \uc2b5\uad00"}),h.habits.map((t,n)=>(0,yo.jsxs)(ya.ListItem,{children:[(0,yo.jsxs)(ya.ListNum,{color:e.PALETTE.fourth.main,children:[n+1,"."]}),(0,yo.jsxs)(ya.ListBody,{children:[(0,yo.jsx)(ya.ListTitle,{children:t.title}),(0,yo.jsx)(ya.ListDesc,{children:t.description})]})]},`habit-${n}`))]}),(0,yo.jsxs)(ya.ContentCol,{children:[(0,yo.jsx)(ya.ContentSubTitle,{children:"\uc694\uc778\uc5d0 \ub530\ub978 \uc2e4\ud328 \ubd84\ub958"}),h.classification.internal.map((t,n)=>(0,yo.jsxs)(ya.ListItem,{children:[(0,yo.jsxs)(ya.ListNum,{color:e.PALETTE.fourth.main,children:[n+1,"."]}),(0,yo.jsxs)(ya.ListBody,{children:[(0,yo.jsx)(ya.ListTitle,{children:t.title}),(0,yo.jsx)(ya.ListDesc,{children:t.description})]})]},`internal-${n}`)),h.classification.external.map((t,n)=>{const r=h.classification.internal.length;return(0,yo.jsxs)(ya.ListItem,{children:[(0,yo.jsxs)(ya.ListNum,{color:e.PALETTE.fourth.main,children:[r+n+1,"."]}),(0,yo.jsxs)(ya.ListBody,{children:[(0,yo.jsx)(ya.ListTitle,{children:t.title}),(0,yo.jsx)(ya.ListDesc,{children:t.description})]})]},`external-${n}`)})]})]})})]}),(0,yo.jsxs)(ya.AccordionItem,{$isOpen:c(2),children:[(0,yo.jsxs)(ya.AccordionHeader,{onClick:()=>s(2),children:[(0,yo.jsx)(ya.IconWrapper,{children:(0,yo.jsx)(ya.IconImg,{src:va,alt:"flow"})}),(0,yo.jsx)(ya.AccordionTitle,{children:"\ub098\uc758 \uc2e4\ud328 \ud750\ub984 & \ub85c\uadf8\uc5d0 \ub098\ud0c0\ub09c \ub0b4\uc6a9"}),(0,yo.jsx)(ya.Chevron,{$isOpen:c(2)})]}),c(2)&&(0,yo.jsx)(ya.AccordionContent,{children:(0,yo.jsxs)(ya.ContentRow,{children:[(0,yo.jsxs)(ya.ContentCol,{children:[(0,yo.jsx)(ya.ContentSubTitle,{children:"\ub098\uc758 \uc2e4\ud328 \ud750\ub984"}),(0,yo.jsx)(ya.FlowWrapper,{children:p.flow.map((e,t)=>(0,yo.jsxs)(r.Fragment,{children:[(0,yo.jsxs)(ya.FlowStep,{borderColor:e.color,children:[(0,yo.jsx)(ya.StepLabel,{children:e.label}),(0,yo.jsx)(ya.StepValue,{children:e.value})]}),t<p.flow.length-1&&(0,yo.jsx)(ya.ArrowDown,{children:"\u2228"})]},`flow-${t}`))})]}),(0,yo.jsxs)(ya.ContentCol,{children:[(0,yo.jsx)(ya.ContentSubTitle,{children:"\uc774 \ub85c\uadf8\uc5d0\uc11c \ub098\ud0c0\ub09c \ub0b4\uc6a9"}),p.logAnalysis.map((e,t)=>(0,yo.jsxs)(ya.LogSection,{children:[(0,yo.jsx)(ya.LogLabel,{color:e.color,children:e.label}),(0,yo.jsx)(ya.LogText,{children:e.content})]},`log-${t}`))]})]})})]})]})]})};const Sa=n.p+"static/media/plan_target.b8839bd79b41b4d77eb3c5bf3c0ce503.svg";const Ta=n.p+"static/media/plan_env.70d7d08231445bde61e30965bc7d5ed4.svg";const Aa=n.p+"static/media/plan_partner.805643ab47790230dcb283e88790be84.svg";const ka=n.p+"static/media/plan_checklist.b8980e9fd4238e3c4b8b1743f5506f59.svg",Ca={};Ca.Container=on.div`
    display: flex;
    flex-direction: column;
    width: 1096px;
    margin: 0 auto;
`,Ca.MetaRow=on.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-top: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
    margin-bottom: 50px;
`,Ca.AuthorInfo=on.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Ca.AuthorName=on.span`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Ca.LikeButton=on.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;

    span {
        font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
        font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.medium}};
        color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    }
`,Ca.HeartIcon=on.div`
    width: 18px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ca.SummaryHeader=on.div`
    margin-bottom: 45px;
`,Ca.Badge=on.span`
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    background-color: transparent;
    color: ${e=>{let{theme:t}=e;return t.PALETTE.fourth.main}};
    border: 2px solid ${e=>{let{theme:t}=e;return t.PALETTE.fourth.main}};
    border-radius: 10px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    margin-bottom: 20px;
`,Ca.MainTitle=on.h2`
    margin: 0;
    margin-bottom: 13px;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Ca.Description=on.p`
    margin: 0;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.black}};
    line-height: 1.6;
    max-width: 900px;
`,Ca.Section=on.div`
    margin-bottom: 60px;
`,Ca.SectionTitle=on.h3`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-bottom: 12px;
`,Ca.SectionDesc=on.p`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
    margin-bottom: 18px;
`,Ca.Grid=on.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: start;
`,Ca.ActionCard=on.div`
    display: flex;
    flex-direction: column;
    width: 536px;
    min-height: 60px;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border: 1px solid ${e=>{let{theme:t,$isOpen:n}=e;return n?t.PALETTE.third.main:t.GRAYSCALE[3]}};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
    overflow: hidden;

    &:hover {
        border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    }
`,Ca.CardHeader=on.div`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 12px 20px;
`,Ca.Divider=on.div`
    width: 100%;
    height: 1px;
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
`,Ca.CardContent=on.div`
    padding: 16px 58px;
    display: flex;
    justify-content: center;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.black}};
    line-height: 1.6;
    word-break: keep-all;

    p {
        margin: 0;
        text-align: left;
        width: fit-content;
        max-width: 100%;
    }
`,Ca.IconCircle=on.div`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: ${e=>{let{color:t}=e;return t}};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 14px;
    color: white;
`,Ca.PlanIcon=on.img`
    width: 24px;
    height: 24px;
`,Ca.CardTitle=on.span`
    flex: 1;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Ca.NumberIcon=on.div`
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: ${e=>{let{color:t}=e;return t}};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: white;
    margin-right: 14px;
`,Ca.Chevron=on.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-right: 2px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
    transform: ${e=>{let{$isOpen:t}=e;return t?"rotate(-135deg)":"rotate(45deg)"}};
    transition: transform 0.3s ease;
    margin-left: 10px;
`,Ca.TransformWrapper=on.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;
`,Ca.PatternBox=on.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    max-width: 400px;
`,Ca.PatternLabel=on.span`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>e.color};
    margin-bottom: 12px;
`,Ca.PatternMain=on.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
    color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
    margin-bottom: 8px;
`,Ca.PatternDesc=on.div`
    font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
    font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
    line-height: 1.5;
`,Ca.ArrowDown=on.div`
    color: ${e=>{let{theme:t}=e;return t.PALETTE.secondary.main}};
    font-size: 20px;
    font-weight: bold;
    margin: 4px 0;
`;const La=()=>{const e=Yt(),{liked:t,likeCount:n,handleLike:i,selectedLog:o}=ji(),[a,l]=(0,r.useState)([]),[s,c]=(0,r.useState)([]),d={badge:"\ud658\uacbd \uc801\uc751\ud615 \uc2e4\ud328 (\uc678\ubd80 \uc694\uc778 70%)",title:"\uc678\ubd80 \ud658\uacbd \ubcc0\ud654\uc5d0 \ud729\uc4f8\ub9b0 \uc2e4\ud328",description:"\uc2dc\uc7a5 \uc0c1\ud669\uc774\ub098 \ud0c0\uc778\uc758 \uc555\ubc15 \uac19\uc740 \uc678\ubd80 \uc694\uc778\uc5d0 \uc601\ud5a5\uc744 \ub9ce\uc774 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uc2a4\uc2a4\ub85c \uc8fc\ub3c4\uad8c\uc744 \uc7a1\uc9c0 \ubabb\ud558\uace0 \ud658\uacbd\uc5d0 \uc801\uc751\ud558\uc9c0 \ubabb\ud55c \ucc44 \ub0b4\ub9b0 \uacb0\uc815\ub4e4\uc774 \ubc18\ubcf5\uc801\uc778 \uc2e4\ud328 \ud328\ud134\uc744 \ub9cc\ub4e4\uace0 \uc788\uc2b5\ub2c8\ub2e4.",attempts:{title:"\ub2e4\uc74c\uc5d0\ub294 \uc774\ub807\uac8c \uc2dc\ub3c4\ud574\ubcf4\uc790!",description:"\ud658\uacbd\uc5d0 \ud718\ub458\ub9ac\uc9c0 \uc54a\uae30 \uc704\ud574 '\ud1b5\uc81c\ud560 \uc218 \uc788\ub294 \uac83'\uc5d0 \uc9d1\uc911\ud574\uc57c \ud569\ub2c8\ub2e4. \uc544\ub798\uc758 \uc804\ub7b5\uc744 \ub2e4\uc74c\uc5d0 \uc801\uc6a9\ud574\ubcf4\uc138\uc694.",items:[{id:1,title:"\ubaa9\ud45c \ud06c\uae30 \uc904\uc774\uae30",color:"transparent",content:"\ucc98\uc74c\ubd80\ud130 \uac70\ucc3d\ud55c \ubaa9\ud45c\ub97c \uc138\uc6b0\uae30\ubcf4\ub2e4, \ub2f9\uc7a5 \uc2e4\ucc9c \uac00\ub2a5\ud55c \uc544\uc8fc \uc791\uc740 \ub2e8\uc704\ub85c \ubaa9\ud45c\ub97c \ucabc\uac1c\uc5b4 \uc2dc\uc791\ud574\ubcf4\uc138\uc694. \uc791\uc740 \uc131\uacf5\uc758 \uacbd\ud5d8\uc774 \ud070 \ubcc0\ud654\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",iconSrc:Sa},{id:2,title:"\ud658\uacbd \ub610\ub294 \uacf5\uac04\uc5d0 \ubcc0\ud654 \uc8fc\uae30",color:"transparent",content:"\uc9d1\uc911\uc774 \uc798 \ub418\uc9c0 \uc54a\ub294 \ud658\uacbd\uc774\ub77c\uba74 \uc7a5\uc18c\ub97c \uc62e\uae30\uac70\ub098, \uc8fc\ubcc0 \ubb3c\uac74\uc744 \uc815\ub9ac\ud558\uc5ec \uc2dc\uac01\uc801 \uc790\uadf9\uc744 \uc904\uc5ec\ubcf4\uc138\uc694. \ub0af\uc120 \uacf5\uac04\uc774 \uc0c8\ub85c\uc6b4 \uc601\uac10\uc744 \uc90d\ub2c8\ub2e4.",iconSrc:Ta},{id:3,title:"\ub3d9\ub8cc\uc5d0\uac8c \ud53c\ub4dc\ubc31 \uc694\uccad\ud558\uae30",color:"transparent",content:"\uc2e4\ud328\uc758 \uc6d0\uc778\uc744 \ud63c\uc790 \ucc3e\uae30 \uc5b4\ub824\uc6b8 \ub54c\ub294 \uc8fc\ubcc0 \ub3d9\ub8cc\ub098 \uba58\ud1a0\uc5d0\uac8c \uc194\uc9c1\ud55c \ud53c\ub4dc\ubc31\uc744 \uad6c\ud574\ubcf4\uc138\uc694. \ub2e4\ub978 \uc0ac\ub78c\uc758 \uc2dc\uc120\uc5d0\uc11c \ubcf8 \ub098\uc758 \ud589\ub3d9 \ud328\ud134\uc774 \uc608\uc0c1\uce58 \ubabb\ud55c \ud574\uacb0\ucc45\uc744 \uc81c\uc2dc\ud574 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",iconSrc:Aa},{id:4,title:"\uccb4\ud06c\ub9ac\uc2a4\ud2b8 \uc124\uc815 \ubc0f \uad00\ub9ac\ud558\uae30",color:"transparent",content:"\ub9e4\uc77c \ud574\uc57c \ud560 \uc77c\ub4e4\uc744 \uba85\ud655\ud558\uac8c \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub85c \uc791\uc131\ud558\uace0 \uad00\ub9ac\ud574\ubcf4\uc138\uc694. \ud574\uc57c \ud560 \uc77c\uc774 \uc2dc\uac01\uc801\uc73c\ub85c \ud655\uc778\ub418\uba74 \ub9c9\uc5f0\ud55c \ubd80\ub2f4\uac10\uc774 \uc904\uc5b4\ub4e4\uace0, \ud558\ub098\uc529 \uc644\ub8cc\ud574 \ub098\uac00\ub294 \uacfc\uc815\uc5d0\uc11c \ud655\uc2e4\ud55c \uc131\ucde8\uac10\uc744 \ub290\ub084 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",iconSrc:ka}]},transformations:{title:"\uc774\ub807\uac8c \ubc14\ub014 \uc218 \uc788\uc5b4\uc694!",description:"\ud328\ud134\uc744 \ubc1c\uacac\ud558\ub294 \uac83\ub9cc\uc73c\ub85c\ub3c4 \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc5b4\uc694. \uac01 \ud56d\ubaa9\uc744 \ub20c\ub7ec \ubcc0\ud654\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694.",items:[{id:1,title:"\uac08\ub4f1 \uc0c1\ud669\uc5d0\uc11c\uc758 \uacb0\uc815",color:e.PALETTE.fourth.main,current:{title:"\uac08\ub4f1 \uc0c1\ud669 \u2192 \uc989\uc2dc \ud68c\ud53c \uacb0\uc815",desc:"\uc555\ubc15\uc774 \uc0dd\uae30\uba74 \ubc14\ub85c \ud63c\uc790 \uacb0\uc815\ud558\uac70\ub098 \ud3ec\uae30\ud574\ubc84\ub824\uc694. \uac10\uc815\uc774 \ud310\ub2e8\uc744 \uc55e\uc11c\uace0 \uc788\uc5b4\uc694."},improved:{title:"\uac08\ub4f1 \uc0c1\ud669 \u2192 24\uc2dc\uac04 \ud6c4 \uacb0\uc815",desc:"\uc989\uac01 \ubc18\uc751 \ub300\uc2e0 \ud558\ub8e8 \ub4a4 \ub2e4\uc2dc \uc0dd\uac01\ud558\ub294 \uaddc\uce59\uc744 \ub9cc\ub4e4\uba74 \uac10\uc815\uc801\uc778 \ud310\ub2e8\uc774 \uc904\uc5b4 \uc774\uc131\uc801\uc778 \ud310\ub2e8\uc744 \ud560 \uc218 \uc788\uc5b4\uc694."}},{id:2,title:"\uc77c\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd",color:e.PALETTE.yellow,current:{title:"\ub0a8\ub4e4\uc758 \uc18d\ub3c4 \u2192 \uc989\uc2dc \ucc98\ub9ac \uc555\ubc15",desc:"\ud0c0\uc778\uc758 \ud53c\ub4dc\ubc31\uc774\ub098 \uc18d\ub3c4\uc5d0 \uc608\ubbfc\ud558\uac8c \ubc18\uc751\ud558\uc5ec, \ub0b4 \ud398\uc774\uc2a4\ub97c \uc783\uace0 \uc11c\ub450\ub974\ub2e4 \uc2e4\uc218\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."},improved:{title:"\ub098\ub9cc\uc758 \ud398\uc774\uc2a4 \u2192 \ud575\uc2ec \uc5c5\ubb34 \uc9d1\uc911",desc:"\ubd88\ud544\uc694\ud55c \uc8fc\ubcc0 \uc0c1\ud669\uc5d0 \uc5d0\ub108\uc9c0\ub97c \ube8f\uae30\uc9c0 \uc54a\uace0, \uc6b0\uc120\uc21c\uc704\uc5d0 \ub530\ub77c \ud575\uc2ec\uc801\uc778 \uc5c5\ubb34\uc5d0 \ubab0\uc785\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."}}]}};return(0,yo.jsxs)(Ca.Container,{children:[(0,yo.jsxs)(Ca.MetaRow,{children:[(0,yo.jsx)(Ca.AuthorInfo,{children:(0,yo.jsx)(Ca.AuthorName,{children:o.author.name})}),(0,yo.jsxs)(Ca.LikeButton,{onClick:i,children:[(0,yo.jsx)(Ca.HeartIcon,{$liked:t,children:(0,yo.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 25 22",fill:t?"#FF4B4B":"none",xmlns:"http://www.w3.org/2000/svg",children:(0,yo.jsx)("path",{d:"M7.19401 0.777345C3.65026 0.777345 0.777344 3.65026 0.777344 7.19401C0.777344 13.6107 8.36068 19.444 12.444 20.8008C16.5273 19.444 24.1107 13.6107 24.1107 7.19401C24.1107 3.65026 21.2378 0.777345 17.694 0.777345C15.524 0.777345 13.6048 1.85476 12.444 3.50384C11.8522 2.66115 11.0661 1.97342 10.1523 1.49883C9.23846 1.02424 8.22374 0.776763 7.19401 0.777345Z",stroke:"#FF4B4B",strokeWidth:"1.55556",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,yo.jsx)("span",{children:n})]})]}),(0,yo.jsxs)(Ca.SummaryHeader,{children:[(0,yo.jsx)(Ca.Badge,{children:d.badge}),(0,yo.jsx)(Ca.MainTitle,{children:d.title}),(0,yo.jsx)(Ca.Description,{children:d.description})]}),(0,yo.jsxs)(Ca.Section,{children:[(0,yo.jsx)(Ca.SectionTitle,{children:d.attempts.title}),(0,yo.jsx)(Ca.SectionDesc,{children:d.attempts.description}),(0,yo.jsx)(Ca.Grid,{children:d.attempts.items.map(e=>{const t=a.includes(e.id);return(0,yo.jsxs)(Ca.ActionCard,{$isOpen:t,children:[(0,yo.jsxs)(Ca.CardHeader,{onClick:()=>{return t=e.id,void l(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]);var t},children:[(0,yo.jsx)(Ca.IconCircle,{color:e.color,children:(0,yo.jsx)(Ca.PlanIcon,{src:e.iconSrc,alt:e.title})}),(0,yo.jsx)(Ca.CardTitle,{children:e.title}),(0,yo.jsx)(Ca.Chevron,{$isOpen:t})]}),t&&(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(Ca.Divider,{}),(0,yo.jsx)(Ca.CardContent,{children:(0,yo.jsx)("p",{children:e.content})})]})]},e.id)})})]}),(0,yo.jsxs)(Ca.Section,{children:[(0,yo.jsx)(Ca.SectionTitle,{children:d.transformations.title}),(0,yo.jsx)(Ca.SectionDesc,{children:d.transformations.description}),(0,yo.jsx)(Ca.Grid,{children:d.transformations.items.map(t=>{const n=s.includes(t.id);return(0,yo.jsxs)(Ca.ActionCard,{$isOpen:n,children:[(0,yo.jsxs)(Ca.CardHeader,{onClick:()=>{return e=t.id,void c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);var e},children:[(0,yo.jsx)(Ca.NumberIcon,{color:t.color,children:t.id}),(0,yo.jsx)(Ca.CardTitle,{children:t.title}),(0,yo.jsx)(Ca.Chevron,{$isOpen:n})]}),n&&(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(Ca.Divider,{}),(0,yo.jsx)(Ca.CardContent,{children:(0,yo.jsxs)(Ca.TransformWrapper,{children:[(0,yo.jsxs)(Ca.PatternBox,{color:e.PALETTE.fourth.main,children:[(0,yo.jsx)(Ca.PatternLabel,{color:e.PALETTE.fourth.main,children:"\ud604\uc7ac \ud328\ud134"}),(0,yo.jsx)(Ca.PatternMain,{children:t.current.title}),(0,yo.jsx)(Ca.PatternDesc,{children:t.current.desc})]}),(0,yo.jsx)(Ca.ArrowDown,{children:"\u2193"}),(0,yo.jsxs)(Ca.PatternBox,{color:e.PALETTE.secondary.main,children:[(0,yo.jsx)(Ca.PatternLabel,{color:e.PALETTE.secondary.main,children:"\ubcc0\ud654 \ud328\ud134"}),(0,yo.jsx)(Ca.PatternMain,{children:t.improved.title}),(0,yo.jsx)(Ca.PatternDesc,{children:t.improved.desc})]})]})})]})]},t.id)})})]})]})},$a=tn`
  display: flex;
  justify-content: center;
  align-items: center;
`,Ia=tn`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`,Pa=tn`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,Fa=tn`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`,Ra=(tn`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,tn`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`),Oa=(tn`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`,tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h1}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h1}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`),Na=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h1}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h1}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,za=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h1}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h1}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Da=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Ba=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Ma=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Ga=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Ha=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Wa=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Ua=(tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`),_a=(tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h3_2}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h3_2}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h4}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h4}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`),Ya=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h4}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h4}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Qa=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h4}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h4}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Za=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Va=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,qa=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,Xa=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,Ja=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,Ka=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h6}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h6}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,el=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,tl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,nl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,rl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,il=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,ol=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,al=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,ll=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,sl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,cl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h10}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,dl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h10}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,ul=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  line-height: ${e=>{let{theme:t}=e;return t.FONT_LINE.h10}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,hl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.extrabold}};
  letter-spacing: -0.03em;
`,pl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  letter-spacing: -0.03em;
`,fl=tn`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  letter-spacing: -0.03em;
`,gl={},ml={h1Regular:za,h2Regular:Ma,h3Regular:Wa,h4Regular:Qa,h5Regular:qa,h6Regular:Ka,h7Regular:nl,h8Regular:ol,h9Regular:sl,h10Regular:ul,h11Regular:fl,h1Bold:Na,h2Bold:Ba,h3Bold:Ha,h4Bold:Ya,h5Bold:Va,h6Bold:Ja,h7Bold:tl,h8Bold:il,h9Bold:ll,h10Bold:dl,h11Bold:pl,h1Extrabold:Oa,h2Extrabold:Da,h3Extrabold:Ga,h4Extrabold:_a,h5Extrabold:Za,h6Extrabold:Xa,h7Extrabold:el,h8Extrabold:rl,h9Extrabold:al,h10Extrabold:cl,h11Extrabold:hl,"h7-regular":tn`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-regular":tn`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,"h9-regular":tn`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,"h10-regular":tn`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.03em;
  `,"h2-bold":tn`
    font-size: 60px;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -0.03em;
  `,"h4-bold":tn`
    font-size: 32px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: -0.03em;
  `,"h6-bold":tn`
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.03em;
  `,"h7-bold":tn`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-bold":tn`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,"h9-bold":tn`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,"h11-bold":tn`
    font-size: 10px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.03em;
  `,"h7-exBold1":tn`
    font-size: 80px;
    font-weight: 800;
    line-height: 98px;
    letter-spacing: -0.03em;
  `,"h7-exBold7":tn`
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-exBold8":tn`
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: -0.03em;
  `},xl={"faillog-red":"#F53102","faillog-black":"#333333",faillog_blue:"#027DF0",faillog_green:"#00B53F",faillog_purple:"#AB47FF",faillog_white:"#FFFFFF",faillog_light_blue:"#DBEAFE",faillog_light_green:"#D1FFE1",faillog_light_purple:"#F3E8FF",faillog_light_red:"#FFE4E6",faillog_gray1:"#F2F2F2",faillog_gray2:"#E6E6E6",faillog_gray3:"#D9D9D9",faillog_gray4:"#CCCCCC",faillog_gray8:"#999999",faillog_gray9:"#8D8D8D",faillog_gray10:"#555555","faillog-sector-gray":"#F8F9FA"},bl=tn`
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
  `,vl=tn`
  &:hover {
    border: 1px solid ${xl.faillog_purple};
  }
`;gl.Span=on.span`
  ${e=>{let{size:t}=e;return ml[t]}}
  color: ${e=>{let{color:t}=e;return xl[t]?xl[t]:xl["faillog-black"]}};
  display: ${e=>{let{display:t}=e;return t||"inline"}};
  /* overflow: ${e=>{let{isvisible:t}=e;return t?"visible":"hidden"}}; */
  overflow: visible;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  /* margin-top: ${e=>{let{marginTop:t}=e;return t}}; */
`,gl.Span2=on.span`
  ${e=>{let{size:t}=e;return ml[t]}}
  color: ${e=>{let{color:t}=e;return xl[t]?xl[t]:"#333333"}};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${e=>{let{lineclamp:t}=e;return t||2}};
  overflow: ${e=>{let{isvisible:t}=e;return t?"visible":"hidden"}};
  text-overflow: ellipsis;
`,gl.Img=on.img`
  width: ${e=>{let{width:t}=e;return t||"50px"}};
  height: ${e=>{let{height:t}=e;return t||"50px"}};
`,gl.Wrapper=on.div`
  ${Ia}

  margin-top: ${e=>{let{margintop:t}=e;return t}};
`;const yl=gl,wl={};wl.WriteButton=on.button`
  border-radius: 10px;
  width: 200px;
  height: 60px;
  background-color: ${xl.faillog_purple};
`,wl.MainHeaderWrap=on.div`
  margin-top: 65px;
  width: 100dvw;
  ${Ia}  
  /* background-color: red; */
`,wl.MainHeader=on.div`
  width: 1320px;
  /* background-color: blue; */

  display: flex;
  justify-content: space-between;
`,wl.MainHeaderLeftDiv=on.div`
  /* background-color: yellow; */
`,wl.MainHeaderLeftTextTopDiv=on.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,wl.headerImg=on.img`
  width: 60px;
  height: 60px;
`,wl.MainHeaderLeftTextBottomDiv=on.div`
  margin-top: 13px;
`,wl.MainHeaderRightButtonDiv=on.div`
  /* background-color: green; */
  display: flex;
  align-items: center;
`;const El=wl;const jl=n.p+"static/media/internet.b6ec54e69a016888c4bd39fea1a08070.svg",Sl=()=>{const e=El;return(0,yo.jsx)("div",{children:(0,yo.jsx)(e.MainHeaderWrap,{children:(0,yo.jsxs)(e.MainHeader,{children:[(0,yo.jsxs)(e.MainHeaderLeftDiv,{children:[(0,yo.jsxs)(e.MainHeaderLeftTextTopDiv,{children:[(0,yo.jsx)(e.headerImg,{src:jl}),(0,yo.jsx)(yl.Span,{size:"h2Bold",color:"faillog-black",children:"Community"})]}),(0,yo.jsx)(e.MainHeaderLeftTextBottomDiv,{children:(0,yo.jsx)(yl.Span,{size:"h8Bold",color:"faillog_gray9",display:"block",children:"\uc2e4\ud328\ub97c \uc228\uae30\uc9c0 \ub9c8\uc138\uc694. \uc6b0\ub9ac\ub294 \uc11c\ub85c\uc758 \uc624\ub2f5\ub178\ud2b8\uc5d0\uc11c \uac00\uc7a5 \ud06c\uac8c \ubc30\uc6c1\ub2c8\ub2e4."})})]}),(0,yo.jsx)(e.MainHeaderRightButtonDiv,{children:(0,yo.jsx)(e.WriteButton,{children:(0,yo.jsx)(yl.Span,{size:"h7Bold",color:"faillog_white",children:"\uc0c8 \uae00 \uc791\uc131\ud558\uae30"})})})]})})})},Tl={};Tl.BestPostWrap=on.div`
  margin-top: 95px;
  margin-bottom: 132px;
  width: 100dvw;
  ${Ia}
`,Tl.BestPost=on.div`
  position: relative;
  width: 1320px;
  height: 608px;
  border: 1px, solid, ${xl.faillog_light_purple};
  border-radius: 10px;
  overflow: hidden;
  ${Fa}
  ${bl}

  transform: scale(1);
`,Tl.BestPostLeftLine=on.div`
  position: absolute;
  left: 0px;
  bottom: 93px;
  width: 6px;
  height: 420px;
  border-radius: 100px;
  background-color: ${xl.faillog_purple};
`,Tl.BestPostMainWrapDiv=on.div`
  width: 788px;
  height: 606px;
  /* background-color: yellow; */
`,Tl.BestPostImgWrapDiv=on.div`
  width: 530px;
  height: 606px;
  background-color: ${xl.faillog_gray1};
  ${Ia}
`,Tl.BestPostMainDiv=on.div`
  margin-left: 110px;
  margin-top: 91px;
  width: 536px;
  height: 420px;
  /* background-color: red; */

  display: flex;
  flex-direction: column;
  gap: 30px;
`,Tl.BestPostMainHeader=on.div`
  height: 40px;
  ${Fa}
`,Tl.BestPostMainHeaderTitle=on.div`
  width: 256px;
  height: 40px;
  background-color: ${xl.faillog_light_purple};
  ${Ia}
  border-radius: 15px;
`,Tl.BestPostMainTitle=on.div`
  height: 92px;
  /* background-color: green; */
`,Tl.BestPostMainContent=on.div`
  height: 60px;
  /* background-color: green; */
`,Tl.BestPostMainInfo=on.div`
  height: 22px;
  /* background-color: green; */
`,Tl.UserInfo=on.div`
  display: flex;
  align-items: center;
  gap: 9px;
`,Tl.PostInfo=on.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`,Tl.infoElement=on.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,Tl.UserImg=on.img`
  width: 20px;
  height: 20px;
`,Tl.BestPostMainButton=on.div`
  height: 44px;
  /* background-color: green; */
`,Tl.GoPostInfoButton=on.button`
  width: 172px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${xl.faillog_purple};

  display: flex;
  ${Ia}
  gap: 8px;
`,Tl.BestPostMainHr=on.hr`
  width: 536px;
  background-color: ${xl["faillog-black"]};
`;const Al=Tl,kl="data:image/png;base64,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",Cl=n.p+"static/media/study.f45019f8916a5a510c39.jpg";const Ll=n.p+"static/media/eye.2b57ba042b99c8a68e212257da470897.svg";const $l=n.p+"static/media/like.fe9a6239f2bb852130f420288a1d61ad.svg";const Il=n.p+"static/media/post.d238f942547292f5e1eeae193ae6375d.svg";const Pl=n.p+"static/media/like-fill2.2bdcccd0ebcb131a49d60f8e5d389443.svg",Fl=e=>{let{id:t,title:n,content:r,date:i,thumbnail:o,profile:a,author:l,views:s,likes:c,isLike:d,comments:u}=e;const h=wi(),p=Al;return(0,yo.jsx)("div",{children:(0,yo.jsx)(p.BestPostWrap,{children:(0,yo.jsxs)(p.BestPost,{children:[(0,yo.jsx)(p.BestPostLeftLine,{}),(0,yo.jsx)(p.BestPostMainWrapDiv,{children:(0,yo.jsxs)(p.BestPostMainDiv,{children:[(0,yo.jsxs)(p.BestPostMainHeader,{children:[(0,yo.jsx)(p.BestPostMainHeaderTitle,{children:(0,yo.jsx)(yl.Span,{size:"h8Bold",color:"faillog_purple",children:"\uc774\ubc88\ub2ec \uc88b\uc544\uc694 \ucd5c\ub2e4 \uac8c\uc2dc\uae00"})}),(0,yo.jsx)(yl.Span,{size:"h9Regular",color:"faillog_gray9",children:i})]}),(0,yo.jsx)(p.BestPostMainTitle,{children:(0,yo.jsxs)(yl.Span2,{size:"h4Bold",color:"faillog-black",lineclamp:2,children:[n,(0,yo.jsx)("br",{}),"\uacf5\ubd80 \ud658\uacbd\ubd80\ud130 \ubc14\uafb8\uace0 \ub098\uc11c\ub2c8 \ubcc0\ud654\uac00\uc0dd\uae34 \uc370"]})}),(0,yo.jsx)(p.BestPostMainContent,{children:(0,yo.jsx)(yl.Span2,{size:"h7Bold",color:"faillog_gray9",lineclamp:2,children:r})}),(0,yo.jsx)(p.BestPostMainHr,{}),(0,yo.jsx)(p.BestPostMainInfo,{children:(0,yo.jsxs)(p.UserInfo,{children:[(0,yo.jsx)(p.UserImg,{src:a}),(0,yo.jsx)(yl.Span,{size:"h9Regular",color:"faillog_black",children:l}),(0,yo.jsxs)(p.PostInfo,{children:[(0,yo.jsxs)(p.infoElement,{children:[(0,yo.jsx)("img",{src:Ll,width:16,height:12}),(0,yo.jsx)(yl.Span,{size:"h9Regular",color:"faillog_black",children:s})]}),(0,yo.jsxs)(p.infoElement,{children:[(0,yo.jsx)("img",{src:d?Pl:$l,width:16,height:16}),(0,yo.jsx)(yl.Span,{size:"h9Regular",color:"faillog_black",children:c})]}),(0,yo.jsxs)(p.infoElement,{children:[(0,yo.jsx)("img",{src:Il,width:16,height:16}),(0,yo.jsx)(yl.Span,{size:"h9Regular",color:"faillog_black",children:u})]})]})]})}),(0,yo.jsx)(p.BestPostMainButton,{children:(0,yo.jsxs)(p.GoPostInfoButton,{onClick:()=>h("detail/"+t),children:[(0,yo.jsx)(yl.Span,{size:"h8ExBold8",color:"faillog_purple",children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\ubcf4\uae30"}),(0,yo.jsx)(yl.Span,{size:"h8ExBold8",color:"faillog_purple",children:"\u2192"})]})})]})}),(0,yo.jsx)(p.BestPostImgWrapDiv,{children:(0,yo.jsx)(yl.Img,{width:"100%",height:"100%",src:o})})]})})})},Rl={};Rl.containerWrap=on.div`
  height: 1172px;
  background-color: #F1F0F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`,Rl.headerWrap=on.div`
  padding-top: 118px;
  width: 100%;
  ${Ia}
`,Rl.header=on.div`
  width: 1320px;
`,Rl.headerTestOneDiv=on.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,Rl.headerTextTwoDiv=on.div`
  margin-top: 13px;
`,Rl.CarouselWrapper=on.div`
  margin-top: 60px;
  width: 100dvw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${648}px;
  flex-shrink: 0;
`,Rl.Track=on.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* flex-shrink: 0; */
`,Rl.CardOuter=on.div`
  flex: 0 0 ${420}px;
  height: ${568}px;
  position: relative;
`,Rl.Card=on.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${bl}
`,Rl.CardImageWrap=on.div`
  width: 100%;
  height: 44%;
  background: ${xl.faillog_gray4};
  flex-shrink: 0;

  ${Ia}
`,Rl.CardImage=on.img`
  width: ${e=>{let{width:t}=e;return t}};
  height: ${e=>{let{height:t}=e;return t}};
  /* object-fit: cover; */
`,Rl.CardBody=on.div`
  flex: 1;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
`,Rl.CardMeta=on.div`
  ${Fa}
`,Rl.CategoryBadge=on.span`
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  color: ${xl.faillog_purple};
  background-color: ${xl.faillog_light_purple};
  padding: 5px 10px;
  border-radius: 100px;
`,Rl.CategoryWrap=on.div`
  width: 52px;
  height: 20px;
  border-radius: 15px;

  background-color: ${e=>{let{bgColor:t}=e;return xl[t]}};
  ${Ia}
`,Rl.CardTitle=on.div`
  flex-shrink: 0;
`,Rl.CardContent=on.div`
  flex: 1;
  overflow: hidden;
`,Rl.CardDivider=on.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${xl.faillog_gray1};
  margin: 0;
`,Rl.CardFooter=on.div`
  ${Fa}
  flex-shrink: 0;
`,Rl.AuthorInfo=on.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Rl.AuthorAvatar=on.img`
  width: 20px;
  height: 20px;
  /* border-radius: 50%; */
  /* background-color: ${xl.faillog_gray1};
  border: 1px solid #e0e0e0; */
`,Rl.Stats=on.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Rl.postInfo=on.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,Rl.StatItem=on.span`
  font-size: 12px;
  color: ${xl.faillog_black};
  display: flex;
  align-items: center;
  gap: 3px;
`,Rl.PaginationWrap=on.div`
  margin-top: 36px;
  ${Ia}
  gap: 15px;
`,Rl.PageLine=on.div`
  width: 396px;
  height: 2px;
  background: linear-gradient(to right, ${xl["faillog-black"]} var(--rate), #E6E6E6 var(--rate));
`,Rl.PageNav=on.div`
  display: flex;
  align-items: center;
  gap: 9px;
`,Rl.NavBtn=on.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: ${xl.faillog_gray9};
  padding: 4px 8px;
  line-height: 1;
  &:hover {
    color: ${xl["faillog-black"]};
  }
`;const Ol=Rl;const Nl=n.p+"static/media/trumpet.d9ef6daedb96d76d85bb289a0e282cd2.svg",zl=e=>{const t={};switch(e){case 0:t.name="\uacf5\ubd80/\ucde8\uc5c5",t.textColor="faillog_blue",t.bgColor="faillog_light_blue";break;case 1:t.name="\uc0ac\uc5c5/\ucc3d\uc5c5",t.textColor="faillog_purple",t.bgColor="faillog_light_purple";break;case 2:t.name="\uc778\uac04\uad00\uacc4",t.textColor="faillog-red",t.bgColor="faillog_light_red";break;case 3:t.name="\uac74\uac15/\ub8e8\ud2f4",t.textColor="faillog_green",t.bgColor="faillog_light_green";break;case 4:t.name="\uae30\ud0c0",t.textColor="faillog-black",t.bgColor="faillog_gray2";break;default:t.name="\uc5c6\uc74c",t.textColor="faillog-black",t.bgColor="faillog_gray2"}return t},Dl=e=>{let{posts:t}=e;const n=t.length,[i,o]=(0,r.useState)(0),a=(0,r.useRef)(!1),l=(0,r.useRef)(null),s=(0,r.useRef)([]),c=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=s.current[4];e&&(e.style.transition="none",e.style.flexBasis="480px",e.style.height="648px")},[]);const d=(0,r.useCallback)(e=>{if(a.current||!l.current)return;a.current=!0;const t=l.current,r="next"===e?5:3;s.current.forEach(e=>{e&&(e.style.transition="flex-basis 300ms ease, height 300ms ease")});const i=s.current[4];i&&(i.style.flexBasis="420px",i.style.height="568px");const c=s.current[r];c&&(c.style.flexBasis="480px",c.style.height="648px"),t.style.transition="transform 500ms ease",t.style.transform=`translateX(${"next"===e?-440:440}px)`,setTimeout(()=>{s.current.forEach(e=>{e&&(e.style.transition="none")}),t.style.transition="none",t.getBoundingClientRect(),s.current.forEach((e,t)=>{e&&(e.style.flexBasis=4===t?"480px":"420px",e.style.height=4===t?"648px":"568px")}),t.style.transform="translateX(0px)",o(t=>"next"===e?(t+1)%n:(t-1+n)%n),a.current=!1},500)},[]),u=e=>{clearInterval(c.current),d(e),c.current=setInterval(()=>d("next"),5e3)};return(0,r.useEffect)(()=>(c.current=setInterval(()=>d("next"),5e3),()=>clearInterval(c.current)),[d]),(0,yo.jsxs)(Ol.containerWrap,{children:[(0,yo.jsx)(Ol.headerWrap,{children:(0,yo.jsxs)(Ol.header,{children:[(0,yo.jsxs)(Ol.headerTestOneDiv,{children:[(0,yo.jsx)("img",{src:Nl,width:80,height:80}),(0,yo.jsx)(yl.Span,{size:"h2-bold",color:"faillog-black",children:"\uc2e4\uc2dc\uac04 \uc778\uae30\uae00"})]}),(0,yo.jsx)(Ol.headerTextTwoDiv,{children:(0,yo.jsx)(yl.Span,{size:"h8-bold",color:"faillog_gray9",children:"\ub9ce\uc774 \uacf5\uac10\ubc1b\uc740 \ubcf5\uae30 \uae00\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud574\ubcf4\uc138\uc694."})})]})}),(0,yo.jsx)(Ol.CarouselWrapper,{children:(0,yo.jsx)(Ol.Track,{ref:l,children:Array.from({length:9},(e,r)=>{const o=t[((i+(r-4))%n+n)%n];const{name:a,textColor:l,bgColor:c}=zl(o.category);return(0,yo.jsx)(Ol.CardOuter,{ref:e=>{s.current[r]=e},children:(0,yo.jsxs)(Ol.Card,{children:[(0,yo.jsx)(Ol.CardImageWrap,{children:(0,yo.jsx)(Ol.CardImage,{src:o.thumbnail,width:"100%",height:"100%"})}),(0,yo.jsxs)(Ol.CardBody,{children:[(0,yo.jsxs)(Ol.CardMeta,{children:[(0,yo.jsx)(Ol.CategoryWrap,{bgColor:c,children:(0,yo.jsx)(yl.Span,{color:l,size:"h11Bold",children:a})}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog_gray9",children:o.date})]}),(0,yo.jsx)(Ol.CardTitle,{children:(0,yo.jsx)(yl.Span2,{size:"h6Bold",color:"faillog-black",lineclamp:2,children:o.title})}),(0,yo.jsx)(Ol.CardContent,{children:(0,yo.jsx)(yl.Span2,{size:"h9Bold",color:"faillog_gray9",lineclamp:3,children:o.content})}),(0,yo.jsx)(Ol.CardDivider,{}),(0,yo.jsxs)(Ol.CardFooter,{children:[(0,yo.jsxs)(Ol.AuthorInfo,{children:[(0,yo.jsx)(Ol.AuthorAvatar,{src:o.profile}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog_gray9",children:o.author})]}),(0,yo.jsxs)(Ol.Stats,{children:[(0,yo.jsxs)(Ol.postInfo,{children:[(0,yo.jsx)("img",{src:Ll,width:12,height:8}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog-black",isvisible:!0,children:o.views})]}),(0,yo.jsxs)(Ol.postInfo,{children:[(0,yo.jsx)("img",{src:$l,width:14,height:14}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog-black",children:o.likes})]}),(0,yo.jsxs)(Ol.postInfo,{children:[(0,yo.jsx)("img",{src:Il,width:14,height:14}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog-black",children:o.comments})]})]})]})]})]})},r)})})}),(0,yo.jsxs)(Ol.PaginationWrap,{children:[(0,yo.jsx)(Ol.PageLine,{style:{"--rate":(i+1)/n*100+"%"}}),(0,yo.jsxs)(Ol.PageNav,{children:[(0,yo.jsx)(Ol.NavBtn,{onClick:()=>u("prev"),children:"\u2039"}),(0,yo.jsxs)(yl.Span,{size:"h9Regular",color:"faillog_gray9",children:[i+1," / ",n]}),(0,yo.jsx)(Ol.NavBtn,{onClick:()=>u("next"),children:"\u203a"})]})]})]})},Bl={};Bl.wrap=on.div`
  width: 100dvw;
  /* background-color: ${xl["faillog-sector-gray"]}; */
`,Bl.headerWrap=on.div`
  padding-top: 93px;
  ${Ia}
`,Bl.header=on.div`
  width: 1320px;
`,Bl.headerTitle=on.div`
  width: 1320px;
  padding: 0px 112px;
  ${Ia}
  gap: 35px;
`,Bl.headerSub=on.div`
  padding-top: 16px;
  width: 1320px;
  ${Ia}
`,Bl.searchWrap=on.div`
  padding-top: 31px;
  ${Ia}
  gap: 16px;
`,Bl.search=on.input`
  width: 300px;
  border: none;
`,Bl.categoryAndPostOrderWrap=on.div`
  width: 100dvw;
  padding-top: 56px;
  ${Ia}
`,Bl.categoryAndPostOrder=on.div`
  width: 1320px;
  ${Fa}
`;const Ml=Bl;const Gl=n.p+"static/media/community_header.4f8f5b243bc65b23d736d2988d178bd2.svg",Hl={};Hl.component=on.div`
  display: flex;
  ${Ia}
  gap: 16px;
`;const Wl=Hl,Ul={};Ul.component=on.div`
  width: 958px;
  height: 62px;
background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, ${xl.faillog_blue}, ${xl.faillog_purple}) border-box;
border: 1.78px solid transparent;
border-radius: 15px;

display: flex;
justify-content: space-between;
align-items: center;

padding-left: 26px;
padding-right: 23px;
`,Ul.contentLeft=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Ul.image1=on.img`
  width: 20px;
  height: 20px;
`,Ul.buttonImage=on.img`
  width: 20px;
  height: 20px;
`,Ul.search=on.input`
  width: 812px;
  height: 32px;
  border: none;
  ${ml["h7-regular"]}

    &:focus {
    outline: none;
  }
`,Ul.searchButton=on.button`
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, ${xl.faillog_blue}, ${xl.faillog_purple});
  border-radius: 999px;

  ${Ia}
`;const _l=Ul;const Yl=n.p+"static/media/shine.46d7193404c9ed9b58862a741407d6c7.svg";const Ql=n.p+"static/media/arrow-up.a5b9918d158fedffca8198d894275aa0.svg",Zl=e=>{let{onSubmit:t}=e;const n=(0,r.useRef)([]);return(0,yo.jsx)("div",{children:(0,yo.jsxs)(_l.component,{children:[(0,yo.jsxs)(_l.contentLeft,{children:[(0,yo.jsx)(_l.image1,{src:Yl}),(0,yo.jsx)(_l.search,{maxLength:"100",placeholder:"\uc778\uae30\uc788\ub294 \uac8c\uc2dc\uae00\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694",ref:e=>{n.current[0]=e},onKeyDown:e=>{""!==e.target.value&&"Enter"===e.key&&(null===t||void 0===t||t(e.target.value),e.target.value="")}})]}),(0,yo.jsx)(_l.searchButton,{onClick:()=>{""!==n.current[0].value&&(null===t||void 0===t||t(n.current[0].value),n.current[0].value="")},children:(0,yo.jsx)(_l.buttonImage,{src:Ql})})]})})},Vl={};Vl.Wrapper=on.div`
  position: relative;
  width: 200px;
  user-select: none;
`,Vl.Trigger=on.div`
  width: 200px;
  height: 48px;
  padding: 0 11px 0px 26px;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  background: ${xl.faillog_white};
  cursor: pointer;
  ${Fa}
`,Vl.ChevronImg=on.img`
  display: inline-block;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
  transition: transform 200ms ease;
  flex-shrink: 0;
`,Vl.OptionBox=on.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 200px;
  height: 240px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  border: 1px solid ${xl.faillog_gray9};
  background-color: ${xl.faillog_white};
`,Vl.OptionItem=on.div`
  width: 100%;
  height: 48px;
  padding: 0 26px 0 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${e=>{let{$selected:t}=e;return t?xl.faillog_light_purple:"transparent"}};
  border-top: ${e=>{let{$selected:t,$isfirst:n}=e;return t&&!n?`1px solid ${xl.faillog_purple}`:"none"}};
  border-bottom: ${e=>{let{$selected:t}=e;return t?`1px solid ${xl.faillog_purple}`:"none"}};

  &:hover {
    background-color: ${e=>{let{$selected:t}=e;return t?xl.faillog_light_purple:xl.faillog_gray1}};
  }
`;const ql=Vl;const Xl=n.p+"static/media/down.9b822cb22e4535818323d406e8abfec7.svg",Jl=["\uc81c\ubaa9","\uc81c\ubaa9+\ub0b4\uc6a9","\ub0b4\uc6a9","\uc791\uc131\uc790","\ub313\uae00"],Kl=e=>{let{defaultValue:t="\uc81c\ubaa9",onChange:n}=e;const[i,o]=(0,r.useState)(!1),[a,l]=(0,r.useState)(t),s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,yo.jsxs)(ql.Wrapper,{ref:s,children:[(0,yo.jsxs)(ql.Trigger,{onClick:()=>o(e=>!e),children:[(0,yo.jsx)(yl.Span,{size:"h8Regular",color:"faillog-black",children:a}),(0,yo.jsx)(ql.ChevronImg,{isOpen:i,src:Xl})]}),i&&(0,yo.jsx)(ql.OptionBox,{children:Jl.map(e=>(0,yo.jsx)(ql.OptionItem,{$isfirst:"\uc81c\ubaa9"===e,$selected:e===a,onClick:()=>(e=>{l(e),o(!1),null===n||void 0===n||n(e)})(e),children:(0,yo.jsx)(yl.Span,{size:"h8Regular",color:"faillog-black",children:e})},e))})]})},es=fo(go({order1:0,order2:0,category:0,content:"",page:1},e=>({setOrder1:t=>e(e=>({order1:t})),setOrder2:t=>e(e=>({order2:t})),setCategory:t=>e(e=>({category:t})),setContent:t=>e(e=>({content:t})),setPage:t=>e(e=>({page:t}))}))),ts=es,ns=()=>{const{setContent:e,setOrder1:t,setPage:n}=ts();let r=0;return(0,yo.jsx)("div",{children:(0,yo.jsxs)(Wl.component,{children:[(0,yo.jsx)(Zl,{onSubmit:i=>{e(i),t(r),n(1)}}),(0,yo.jsx)(Kl,{onChange:e=>{switch(e){case"\uc81c\ubaa9":r=0;break;case"\uc81c\ubaa9+\ub0b4\uc6a9":r=1;break;case"\ub0b4\uc6a9":r=2;break;case"\uc791\uc131\uc790":r=3;break;case"\ub313\uae00":r=4}}})]})})},rs={},is=tn`
    background-color: ${xl.faillog_purple};
    border: none;
`,os=tn`
    background-color: ${xl.faillog_white};
    border: solid 1px ${xl.faillog_gray4};
`;rs.button=on.button`
  width: 88px;
  height: 40px;
  border-radius: 10px;

  ${Ia}

  ${e=>{let{selected:t}=e;return t?is:os}}

`;const as=rs,ls=e=>{let{selected:t,content:n,onClick:r}=e;return(0,yo.jsx)("div",{children:(0,yo.jsx)(as.button,{selected:t,onClick:r,children:t?(0,yo.jsx)(yl.Span,{size:"h8Bold",color:"faillog_white",children:n}):(0,yo.jsx)(yl.Span,{size:"h8Bold",color:"faillog_gray10",children:n})})})},ss={};ss.container=on.div`
  ${Ia}
  gap: 24px;
`;const cs=ss,ds=()=>{const e=["\uc804\uccb4","\uacf5\ubd80/\ucde8\uc5c5","\uc0ac\uc5c5/\ucc3d\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],[t,n]=(0,r.useState)("\uc804\uccb4"),{setCategory:i,setPage:o}=ts();return(0,yo.jsx)(cs.container,{children:e.map(r=>(0,yo.jsx)(ls,{content:r,selected:t===r,onClick:()=>{const t=e.indexOf(r);n(r),i(t),o(1)}},r))})},us={};us.Wrapper=on.div`
  position: relative;
  width: 88px;
  user-select: none;
`,us.Trigger=on.div`
  width: 88px;
  height: 40px;
  border: 1px solid #D9D9D9;
  border-radius: 15px;
  background: ${xl.faillog_white};
  cursor: pointer;
  ${Ia}
`,us.ChevronImg=on.img`
  display: inline-block;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
  transition: transform 200ms ease;
  flex-shrink: 0;
`,us.OptionBox=on.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 88px;
  height: 100px;
  border-radius: 15px;
  overflow: hidden;
  z-index: 999;
  border: 1px solid ${xl.faillog_gray9};
  background-color: ${xl.faillog_white};
`,us.OptionItem=on.div`
  width: 100%;
  height: 33px;
  cursor: pointer;
  ${Ia}

  &:hover {
    background-color: ${xl.faillog_gray1};
  }
`;const hs=us,ps=["\ucd5c\uc2e0\uc21c","\uc88b\uc544\uc694 \uc21c","\uc870\ud68c \uc21c"],fs=e=>{let{defaultValue:t="\ucd5c\uc2e0\uc21c",onChange:n}=e;const[i,o]=(0,r.useState)(!1),[a,l]=(0,r.useState)(t),s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const e=e=>{s.current&&!s.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,yo.jsxs)(hs.Wrapper,{ref:s,children:[(0,yo.jsxs)(hs.Trigger,{onClick:()=>o(e=>!e),children:[(0,yo.jsx)(yl.Span,{size:"h8Regular",color:"faillog-black",children:a}),(0,yo.jsx)(hs.ChevronImg,{isOpen:i,src:Xl})]}),i&&(0,yo.jsx)(hs.OptionBox,{children:ps.map(e=>(0,yo.jsx)(hs.OptionItem,{$isfirst:"\uc81c\ubaa9"===e,$selected:e===a,onClick:()=>{(e=>{e!==a?(l(e),o(!1),null===n||void 0===n||n(e)):o(!1)})(e)},children:(0,yo.jsx)(yl.Span,{size:"h8Regular",color:e===a?"faillog_purple":"faillog-black",children:e})},e))})]})},gs=()=>{const{setOrder2:e,setPage:t}=ts();return(0,yo.jsx)("div",{children:(0,yo.jsx)(fs,{onChange:n=>{switch(n){case"\ucd5c\uc2e0\uc21c":e(0),t(1);break;case"\uc88b\uc544\uc694 \uc21c":e(1),t(1);break;case"\uc870\ud68c \uc21c":e(2),t(1)}}})})},ms=()=>(0,yo.jsx)("div",{children:(0,yo.jsxs)(Ml.wrap,{children:[(0,yo.jsx)(Ml.headerWrap,{children:(0,yo.jsxs)(Ml.header,{children:[(0,yo.jsxs)(Ml.headerTitle,{children:[(0,yo.jsx)(yl.Span,{size:"h1Extrabold",color:"faillog-black",children:"FIND"}),(0,yo.jsx)("img",{src:Gl,width:"216px",height:"144px"}),(0,yo.jsx)(yl.Span,{size:"h1Extrabold",color:"faillog-black",children:"POST YOU WANT"})]}),(0,yo.jsx)(Ml.headerSub,{children:(0,yo.jsx)(yl.Span,{size:"h7Regular",color:"faillog_gray9",children:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uc758 \uc2e4\ud328\uc640 \uacbd\ud5d8 \uc18d\uc5d0\uc11c \uc6d0\ud558\ub294 \uac8c\uc2dc\uae00\uc744 \uc27d\uace0 \ube60\ub974\uac8c \ucc3e\uc544\ubcf4\uc138\uc694."})})]})}),(0,yo.jsx)(Ml.searchWrap,{children:(0,yo.jsx)(ns,{})}),(0,yo.jsx)(Ml.categoryAndPostOrderWrap,{children:(0,yo.jsxs)(Ml.categoryAndPostOrder,{children:[(0,yo.jsx)(ds,{}),(0,yo.jsx)(gs,{})]})})]})}),xs={};xs.PostListAndAiRecommandPostWrapper=on.div`
    width: 1320px;
    display: flex;
    gap: 24px;
`,xs.ListBgWrap=on.div`
    width: 100dvw;
    background-color: ${xl["faillog-sector-gray"]};
`;const bs=xs,vs=on.div`
  width: 984px;
  padding: 27px
`,ys=on.div`
  display: flex;
  gap: 27px;
  align-items: flex-start;
`,ws=on.img`
  width: 324px;
  height: 184px;
  /* object-fit: cover; */
  border-radius: 15px 0px 15px 0px

  /* flex-shrink: 0; */
`,Es=on.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* height: 184px; */
`,js=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ss=on.div`
  /* ${pl}
  color: #ffffff; */
  background-color: ${e=>{let{bgcolor:t}=e;return xl[t]}};
  width: 52px;
  height: 20px;
  padding-top: 1px;
  ${Ia}
  border-radius: 15px;
`,Ts=(on.span`
  ${ul}
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.GRAYSCALE)||void 0===t?void 0:t[8])||"#999999"}};
`,on.h2`
  ${rl}
  margin: 0;
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.PALETTE)||void 0===t?void 0:t.black)||"#333333"}};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,on.p`
  ${sl}
  margin: 0;
  flex: 1;
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.GRAYSCALE)||void 0===t?void 0:t[10])||"#555555"}};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`),As=on.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ks=on.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  /* object-fit: cover; */
`,Cs=on.span`
  ${fl}
  color: ${e=>{var t;let{theme:n}=e;return(null===(t=n.PALETTE)||void 0===t?void 0:t.black)||"#333333"}};
`,Ls=on.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,$s=on.span`
  display: flex;
  align-items: center;
  gap: 5px;
`,Is=on.hr`
  /* padding-bottom: 27px; */
  margin: 0px;
  border: none;
  border-top: 1px solid ${e=>{var t;let{theme:n}=e;return(null===(t=n.GRAYSCALE)||void 0===t?void 0:t[2])||"#E6E6E6"}};
`,Ps=e=>{let{category:t,title:n,content:r,date:i,thumbnail:o,profile:a,author:l,views:s,likes:c,comments:d,isHrHidden:u}=e;const{name:h,textColor:p,bgColor:f}=zl(t);return(0,yo.jsxs)("div",{children:[(0,yo.jsx)(vs,{children:(0,yo.jsxs)(ys,{children:[(0,yo.jsx)(ws,{src:o,alt:n}),(0,yo.jsxs)(Es,{children:[(0,yo.jsxs)(js,{children:[(0,yo.jsx)(Ss,{bgcolor:f,children:(0,yo.jsx)(yl.Span,{size:"h11Bold",color:p,children:h})}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog_gray9",children:i})]}),(0,yo.jsx)(yl.Span2,{size:"h8Extrabold",color:"faillog-black",lineclamp:1,children:n}),(0,yo.jsx)(yl.Span2,{size:"h9Regular",color:"faillog_black",children:r}),(0,yo.jsxs)(Ts,{children:[(0,yo.jsxs)(As,{children:[(0,yo.jsx)(ks,{src:a,alt:l}),(0,yo.jsx)(Cs,{children:l})]}),(0,yo.jsxs)(Ls,{children:[(0,yo.jsxs)($s,{children:[(0,yo.jsx)("img",{src:Ll,width:12,height:8}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog-black",isvisible:!0,children:s})]}),(0,yo.jsxs)($s,{children:[(0,yo.jsx)("img",{src:$l,width:14,height:14}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog-black",isvisible:!0,children:c})]}),(0,yo.jsxs)($s,{children:[(0,yo.jsx)("img",{src:Il,width:14,height:14}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog-black",isvisible:!0,children:d})]})]})]})]})]})}),u||(0,yo.jsx)(Is,{})]})};const Fs=n.p+"static/media/file.28cbf376df5ae96114fb7429a5a610fb.svg",Rs=on.div`
  width: 984px;
  height: 1434px;
  ${Ia}
`,Os=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
`,Ns=on.img`
  margin-bottom: 39px;
`,zs=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`,Ds=e=>{let{search:t}=e;return t="sss",(0,yo.jsx)(Rs,{children:(0,yo.jsxs)(Os,{children:[(0,yo.jsx)(Ns,{src:Fs,alt:"empty",width:200,height:124}),(0,yo.jsx)(yl.Span,{size:"h10Bold",color:"faillog_purple",children:"SEARCH EMPTY"}),(0,yo.jsx)(yl.Span,{size:"h4Bold",color:"faillog-black",children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc5b4\uc694"}),(0,yo.jsxs)(zs,{children:[(0,yo.jsxs)(yl.Span,{size:"h8Regular",color:"faillog_gray9",children:[(0,yo.jsxs)(yl.Span,{size:"h8Regular",color:"faillog_purple",children:['"',t,'"']})," ","\uc640 \uc77c\uce58\ud558\ub294 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc9c0 \ubabb\ud588\uc5b4\uc694."]}),(0,yo.jsx)(yl.Span,{size:"h8Regular",color:"faillog_gray9",children:"\ub2e4\ub978 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uac70\ub098 \uce74\ud14c\uace0\ub9ac\ub97c \ubcc0\uacbd\ud574\ubcf4\uc138\uc694."})]})]})})},Bs={};Bs.wrapper=on.div`
    width: 984px;
    background-color: ${xl.faillog_white};
    border-radius: 15px;
    ${bl}
`;const Ms=e=>{let{postData:t}=e;return(0,yo.jsx)("div",{children:(0,yo.jsx)(Bs.wrapper,{children:0!==t.length?t.map((e,n)=>(0,yo.jsx)(Ps,{category:e.category,title:e.title,content:e.content,date:e.date,profile:e.profile,author:e.author,views:e.views,likes:e.likes,comments:e.comments,thumbnail:e.thumbnail,isHrHidden:t.length-1===n},e.id)):(0,yo.jsx)(Ds,{})})})},Gs=on.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Hs=on.button`
  ${Ia}
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: ${e=>{let{disabled:t}=e;return t?"default":"pointer"}};
  padding: 0;
`,Ws=on.button`
  ${Ia}
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background-color: ${e=>{let{isActive:t}=e;return t?xl.faillog_purple:"transparent"}};
  cursor: pointer;
  padding: 0;
`,Us=e=>{let{minPage:t,maxPage:n,onPageChange:i,page:o}=e;const[a,l]=(0,r.useState)(null!==o&&void 0!==o?o:t);(0,r.useEffect)(()=>{void 0!==o&&l(o)},[o]);const s=5*Math.floor((a-t)/5)+t,c=[];for(let r=s;r<=Math.min(s+4,n);r++)c.push(r);const d=s>t,u=s+5<=n,h=e=>{l(e),null===i||void 0===i||i(e)};return(0,yo.jsxs)(Gs,{children:[(0,yo.jsx)(Hs,{onClick:()=>{d&&h(s-1)},disabled:!d,children:(0,yo.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,yo.jsx)("path",{d:"M7 1L1 7L7 13",stroke:d?xl.faillog_gray9:xl.faillog_gray4,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.map(e=>(0,yo.jsx)(Ws,{isActive:e===a,onClick:()=>{e!==a&&h(e)},children:(0,yo.jsx)(yl.Span,{size:"h9Regular",color:e===a?"faillog_white":"faillog-black",children:e})},e)),(0,yo.jsx)(Hs,{onClick:()=>{u&&h(s+5)},disabled:!u,children:(0,yo.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,yo.jsx)("path",{d:"M1 1L7 7L1 13",stroke:u?xl.faillog_gray9:xl.faillog_gray4,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},_s={};_s.wrapper=on.div`
    width: 984px;
    /* height: 1434px;
    background-color: ${xl.faillog_white};
    border-radius: 15px; */
`,_s.pageWrapper=on.div`
    width: 100%;
    height: 136px;
    ${Ia}
`;const Ys=()=>{const{order1:e,order2:t,category:n,page:i,content:o,setPage:a}=ts(),l=(0,r.useRef)(!1);(0,r.useEffect)(()=>{console.log("a")},[]),(0,r.useEffect)(()=>{l.current?console.log("b"):l.current=!0},[e,t,n,i,o]);return(0,yo.jsxs)(_s.wrapper,{children:[(0,yo.jsx)(Ms,{postData:[{id:1,category:0,title:"\ub9ac\uc561\ud2b8 \ud504\ub85c\uc81d\ud2b8 \ucc98\uc74c \uc2dc\uc791\ud558\ub294 \ubd84\ub4e4\uaed8 \ub4dc\ub9ac\ub294 \ud301",content:"\ub9ac\uc561\ud2b8\ub97c \ucc98\uc74c \ubc30\uc6b0\ub294 \ubd84\ub4e4\uc774 \uc790\uc8fc \uacaa\ub294 \uc5b4\ub824\uc6c0\uacfc \uadf8 \ud574\uacb0 \ubc29\ubc95\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870 \uc124\uacc4\ubd80\ud130 \uc0c1\ud0dc \uad00\ub9ac\uae4c\uc9c0 \ub2e8\uacc4\ubcc4\ub85c \uc124\uba85\ud574 \ub4dc\ub9b4\uac8c\uc694.",date:"2026.05.08",thumbnail:"https://i.pravatar.cc/150?img=1",profile:"https://i.pravatar.cc/150?img=5",author:"\ud64d\uae38\ub3d9",views:1240,likes:87,comments:34},{id:2,category:1,title:"styled-components\uc5d0\uc11c theme\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uad81\uae08\ud569\ub2c8\ub2e4",content:"ThemeProvider\ub97c \uc774\uc6a9\ud574\uc11c \uc804\uc5ed \ud14c\ub9c8\ub97c \uc124\uc815\ud558\uace0 \uc2f6\uc740\ub370 \uc5b4\ub5bb\uac8c \ud574\uc57c \ud558\ub294\uc9c0 \uc798 \ubaa8\ub974\uaca0\uc5b4\uc694. \uc608\uc2dc \ucf54\ub4dc\uc640 \ud568\uaed8 \uc124\uba85\ud574 \uc8fc\uc2dc\uba74 \uac10\uc0ac\ud558\uaca0\uc2b5\ub2c8\ub2e4.",date:"2026.05.07",thumbnail:"https://i.pravatar.cc/150?img=2",profile:"https://i.pravatar.cc/150?img=5",author:"\uae40\ucca0\uc218",views:538,likes:22,comments:11},{id:3,category:2,title:"2026\ub144 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ucde8\uc5c5 \ud2b8\ub80c\ub4dc \uc815\ub9ac",content:"\uc62c\ud574 \ucc44\uc6a9 \uacf5\uace0\ub97c \ubd84\uc11d\ud55c \uacb0\uacfc, React\uc640 TypeScript \uc5ed\ub7c9\uc774 \ud575\uc2ec \uc694\uad6c\uc0ac\ud56d\uc73c\ub85c \uc790\ub9ac\uc7a1\uc558\uc2b5\ub2c8\ub2e4. \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad6c\uc131 \uc804\ub7b5\ub3c4 \ud568\uaed8 \uc18c\uac1c\ud569\ub2c8\ub2e4.",date:"2026.05.06",thumbnail:"https://i.pravatar.cc/150?img=3",profile:"https://i.pravatar.cc/150?img=5",author:"\uc774\uc601\ud76c",views:3021,likes:215,comments:98},{id:4,category:3,title:"\ud300 \ud504\ub85c\uc81d\ud2b8 \uba64\ubc84 \ubaa8\uc9d1\ud569\ub2c8\ub2e4 \u2014 \ucee4\ubba4\ub2c8\ud2f0 \ud50c\ub7ab\ud3fc \uac1c\ubc1c",content:"React, Node.js \uae30\ubc18\uc758 \ucee4\ubba4\ub2c8\ud2f0 \uc11c\ube44\uc2a4\ub97c \ud568\uaed8 \ub9cc\ub4e4\uc5b4 \uac08 \ud300\uc6d0\uc744 \ubaa8\uc9d1\ud569\ub2c8\ub2e4. \ud504\ub860\ud2b8 2\uba85, \ubc31\uc5d4\ub4dc 1\uba85\uc744 \ucc3e\uace0 \uc788\uc73c\uba70 \uc8fc 2\ud68c \uc628\ub77c\uc778 \ubbf8\ud305\uc744 \uc9c4\ud589\ud569\ub2c8\ub2e4.",date:"2026.05.05",thumbnail:"https://i.pravatar.cc/150?img=4",profile:"https://i.pravatar.cc/150?img=5",author:"\ubc15\ubbfc\uc900",views:892,likes:56,comments:27},{id:5,category:4,title:"\ubd80\ud2b8\ucea0\ud504 6\uac1c\uc6d4 \uc218\ub8cc \ud6c4\uae30 \u2014 \uc194\uc9c1\ud558\uac8c \uc801\uc5b4\ubd24\uc2b5\ub2c8\ub2e4",content:"\ube44\uc804\uacf5\uc790\ub85c \uc2dc\uc791\ud574\uc11c 6\uac1c\uc6d4\uac04 \ubd80\ud2b8\ucea0\ud504\ub97c \ub9c8\uce58\uace0 \ub290\ub080 \uc810\uc744 \uc194\uc9c1\ud558\uac8c \uacf5\uc720\ud569\ub2c8\ub2e4. \ud798\ub4e4\uc5c8\ub358 \uc21c\uac04\uacfc \ubcf4\ub78c\ucc3c\ub358 \uc21c\uac04 \ubaa8\ub450 \ub2f4\uc558\uc2b5\ub2c8\ub2e4.",date:"2026.05.04",thumbnail:"https://i.pravatar.cc/150?img=5",profile:"https://i.pravatar.cc/150?img=5",author:"\ucd5c\uc218\uc5f0",views:4780,likes:341,comments:152},{id:6,category:0,title:"\uac1c\ubc1c\ud558\uba74\uc11c \ub4e4\uc73c\uba74 \uc88b\uc740 \ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8 \ucd94\ucc9c",content:"\uc9d1\uc911\ub825\uc744 \ub192\uc5ec\uc8fc\ub294 Lo-Fi, \uc7ac\uc988, \ud074\ub798\uc2dd \ub4f1 \ub2e4\uc591\ud55c \uc7a5\ub974\uc758 \ucf54\ub529 BGM \ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4. \uac01\uc790 \uc990\uaca8 \ub4e3\ub294 \uc74c\uc545\ub3c4 \ub313\uae00\ub85c \ucd94\ucc9c\ud574 \uc8fc\uc138\uc694!",date:"2026.05.03",thumbnail:"https://i.pravatar.cc/150?img=6",profile:"https://i.pravatar.cc/150?img=5",author:"\uc815\ub2e4\uc740",views:2103,likes:178,comments:63}]}),(0,yo.jsx)(_s.pageWrapper,{children:(0,yo.jsx)(Us,{minPage:1,maxPage:12,onPageChange:e=>{console.log(e),a(e)},page:i})})]})},Qs=on.div`
  width: 300px;
  height: 148px;
  border-radius: 15px;
  border: 1px solid ${xl.faillog_gray2};
  background-color: #ffffff;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,Zs=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Vs=on.div`
  background-color: ${e=>{let{bgcolor:t}=e;return xl[t]}};
  padding-top: 1px;
  width: 60px;
  height: 20px;
  ${Ia}
  border-radius: 15px;
`,qs=on.div`
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
`,Xs=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Js=on.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,Ks=on.img`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`,ec=on.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,tc=on.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,nc=e=>{let{date:t,category:n,title:r,profile:i,author:o,views:a,likes:l,comments:s}=e;const{name:c,textColor:d,bgColor:u}=zl(n);return(0,yo.jsxs)(Qs,{children:[(0,yo.jsxs)(Zs,{children:[(0,yo.jsx)(yl.Span,{size:"h11Bold",color:"faillog_gray8",children:t}),(0,yo.jsx)(Vs,{bgcolor:u,children:(0,yo.jsx)(yl.Span,{size:"h11Extrabold",color:d,children:c})})]}),(0,yo.jsx)(qs,{children:(0,yo.jsx)(yl.Span2,{size:"h10Bold",color:"faillog-black",display:"block",children:r})}),(0,yo.jsxs)(Xs,{children:[(0,yo.jsxs)(Js,{children:[(0,yo.jsx)(Ks,{src:i,alt:o}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog-black",children:o})]}),(0,yo.jsxs)(ec,{children:[(0,yo.jsxs)(tc,{children:[(0,yo.jsx)("img",{src:Ll,width:12,height:8}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog-black",children:a})]}),(0,yo.jsxs)(tc,{children:[(0,yo.jsx)("img",{src:$l,width:12,height:12}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog-black",children:l})]}),(0,yo.jsxs)(tc,{children:[(0,yo.jsx)("img",{src:Il,width:12,height:12}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog-black",children:s})]})]})]})]})};const rc=n.p+"static/media/ai_image.78ea3e8d9ae21bfd7c000004843510a1.svg",ic=[{id:1,date:"2026\ub144 03\uc6d4 03\uc77c",category:0,title:"\ucc98\uc74c\ubd80\ud130 \uc11c\ube44\uc2a4 \ubc29\ud5a5\uc744 \ub108\ubb34 \ub113\uac8c \uc7a1\uc544\uc11c \uc2e4\ud328\ud588\ub358 \uae30\ub85d\uae30\ub85d\uc758 \uae30\ub85d\uc774\ub2e4\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147",profile:"https://i.pravatar.cc/150?img=5",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:1240,likes:35,comments:6},{id:2,date:"2026\ub144 03\uc6d4 03\uc77c",category:1,title:"\uc2dc\ud5d8 \uc9c1\uc804 \ubd88\uc548\uc774 \uc2ec\ud574\uc9c8 \ub54c \ub0b4\uac00 \ud588\ub358 \ubcf5\uae30 \ub8e8\ud2f4 3\uac00\uc9c0",profile:"https://i.pravatar.cc/150?img=5",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6},{id:3,date:"2026\ub144 03\uc6d4 03\uc77c",category:2,title:"\uc2dc\ud5d8 \uc9c1\uc804 \ubd88\uc548\uc774 \uc2ec\ud574\uc9c8 \ub54c \ub0b4\uac00 \ud588\ub358 \ubcf5\uae30 \ub8e8\ud2f4 3\uac00\uc9c0",profile:"https://i.pravatar.cc/150?img=5",author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6}],oc=on.div`
  width: 312px;
  height: 536px;
  background-color: ${xl.faillog_white};
  border-radius: 15px;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${bl}
`,ac=on.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 7px;
`,lc=on.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,sc=on.div`
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,cc=()=>(0,yo.jsxs)(oc,{children:[(0,yo.jsxs)(ac,{children:[(0,yo.jsxs)(lc,{children:[(0,yo.jsx)(yl.Span,{size:"h7Bold",color:"faillog-black",children:"\ub9de\ucda4 \uac8c\uc2dc\uae00"}),(0,yo.jsx)("img",{src:rc,alt:"ai",height:24})]}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog_gray9",children:"\ucd5c\uadfc \uc791\uc131 \uae00\uc744 \ubc14\ud0d5\uc73c\ub85c, \ub2f9\uc2e0\uacfc \uc720\uc0ac\ud55c \uae00\uc744 \uc120\ubcc4\ud588\uc2b5\ub2c8\ub2e4."})]}),(0,yo.jsx)(sc,{children:ic.map(e=>(0,yo.jsx)(nc,{date:e.date,category:e.category,title:e.title,profile:e.profile,author:e.author,views:e.views,likes:e.likes,comments:e.comments},e.id))})]}),dc=[{id:1,category:0,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\ucc98\uc74c\ubd80\ud130 \uc11c\ube44\uc2a4 \ubc29\ud5a5\uc744 \ub108\ubb34 \ub113\uac8c \uc7a1\uc544\uc11c \uc2e4\ud328\ud588\ub358 \uae30\ub85d",content:"\ubaa8\ub4e0 \uc0ac\ub78c\uc744 \ub9cc\uc871\uc2dc\ud0a4\ub824\ub2e4 \ud575\uc2ec \uace0\uac1d\uc744 \uc783\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 \ubb38\uc81c \uc815\uc758\ub97c \ub2e4\uc2dc \ud558\uace0, \ud55c \uac00\uc9c0 \ub2c8\uc988\uc5d0 \uc9d1\uc911\ud558\uba74\uc11c \uc11c\ube44\uc2a4 \uad6c\uc870\ub97c \uc7ac\ud3b8\ud588\uc2b5\ub2c8\ub2e4.",thumbnail:Cl,profile:kl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:2,category:1,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\ucde8\uc5c5 \uba74\uc811 5\ubc88 \ud0c8\ub77d \ud6c4 \uc54c\uac8c \ub41c \uac83",content:"\ub300\uae30\uc5c5 \uacf5\ucc44\uc5d0 5\ubc88 \uc5f0\uc18d\uc73c\ub85c \ucd5c\uc885 \uba74\uc811\uc5d0\uc11c \ub5a8\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \ub9e4\ubc88 \uc798 \ub410\ub2e4 \uc2f6\uc5c8\ub294\ub370 \uacb0\uacfc\ub294 \ud56d\uc0c1 \ubd88\ud569\uaca9\uc774\uc5c8\uc5b4\uc694.",thumbnail:Cl,profile:kl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:3,category:2,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\ub3c5\ud559\uc73c\ub85c \uac1c\ubc1c \uacf5\ubd80 6\uac1c\uc6d4, \ud3ec\uae30\ud588\ub358 \uc774\uc720",content:"\ube44\uc804\uacf5\uc790\ub85c \ud63c\uc790 \uc6f9 \uac1c\ubc1c\uc744 \uacf5\ubd80\ud588\uc2b5\ub2c8\ub2e4. 6\uac1c\uc6d4\uc744 \ubc84\ud2f0\ub2c8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2a4\uc2a4\ub85c \ub9cc\ub4dc\ub294 \ub2e8\uacc4\uc5d0\uc11c \ub9c9\ud600\ubc84\ub838\uc2b5\ub2c8\ub2e4.",thumbnail:Cl,profile:kl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:4,category:3,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\uc2a4\ud0c0\ud2b8\uc5c5 3\ubc88 \uc2e4\ud328\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4",content:"\ucc3d\uc5c5\uc5d0 \ub3c4\uc804\ud55c \uc9c0 3\ub144\uc774 \ub410\uc2b5\ub2c8\ub2e4. \uadf8\ub3d9\uc548 \uc138 \ubc88\uc758 \ucc3d\uc5c5\uc744 \uc2dc\ub3c4\ud588\uace0, \uc138 \ubc88 \ubaa8\ub450 \uc2e4\ud328\ub85c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.",thumbnail:Cl,profile:kl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:5,category:4,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\uae30\ucd9c\ub9cc \ubcf4\ub2e4 \uc2e4\uc804\uc5d0\uc11c \ubb34\ub108\uc84c\ub358 \uc774\uc720\uc640 \uacf5\ubd80 \ub8e8\ud2f4 \uc7ac\uc124\uacc4",content:"\uc775\uc219\ud55c \ud658\uacbd\uc5d0\ub9cc \ub9e4\ub2ec\ub9b0 \uacf5\ubd80 \ubc29\uc2dd\uc774 \ubb38\uc81c\uc600\uc2b5\ub2c8\ub2e4. \uc7a5\uc18c, \uc2dc\uac04, \ubcf5\uc2b5 \ubc29\ubc95\uc744 \ubc14\uafb8\uba74\uc11c \uc2e4\uc804 \uac10\uac01\uc744 \ud68c\ubcf5\ud588\ub358 \uacfc\uc815\uc744 \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4.",thumbnail:Cl,profile:kl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6},{id:6,category:3,date:"2026\ub144 3\uc6d4 1\uc77c",title:"\uc2a4\ud0c0\ud2b8\uc5c5 3\ubc88 \uc2e4\ud328\ud558\uace0 \ubc30\uc6b4 \uac83\ub4e4",content:"\ucc3d\uc5c5\uc5d0 \ub3c4\uc804\ud55c \uc9c0 3\ub144\uc774 \ub410\uc2b5\ub2c8\ub2e4. \uadf8\ub3d9\uc548 \uc138 \ubc88\uc758 \ucc3d\uc5c5\uc744 \uc2dc\ub3c4\ud588\uace0, \uc138 \ubc88 \ubaa8\ub450 \uc2e4\ud328\ub85c \ub05d\ub0ac\uc2b5\ub2c8\ub2e4.",thumbnail:Cl,profile:kl,author:"\ud0c8\uae30\ub9c8\uc2a4\ud130",views:99,likes:35,comments:6}],uc=()=>{const e={title:"\uae30\ucd9c\ub9cc \ud30c\ub2e4\uac00 \uc2e4\uc804\uc5d0\uc11c \ubc31\uc9c0 \ub41c \uc370."};return e.content=(0,yo.jsxs)(yo.Fragment,{children:["\uc775\uc219\ud55c \ud658\uacbd\uc5d0\ub9cc \ub9e4\ub2ec\ub9b0 \uacf5\ubd80 \ubc29\uc2dd\uc774 \ubb38\uc81c\uc600\uc2b5\ub2c8\ub2e4. \uc7a5\uc18c, \uc2dc\uac04, \ubcf5\uc2b5 ",(0,yo.jsx)("br",{})," \ubc29\ubc95\uc744 \ubc14\uafb8\uba74\uc11c \uc810\uc810 \uc2e4\uc804 \uac10\uac01\uc744 \ud68c\ubcf5\ud5c0\ub358 \uacfc\uc815\uc744 \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4."]}),e.date="2026\ub144 3\uc6d4 1\uc77c",e.thumbnail=Cl,e.profile=kl,e.author="\ud544\uae30\ub9c8\uc2a4\ud130",e.views=99,e.likes=777,e.comments=999,e.isLike=!1,e.id=3,(0,yo.jsxs)("div",{children:[(0,yo.jsx)(Sl,{}),(0,yo.jsx)(Fl,{title:e.title,content:e.content,date:e.date,thumbnail:e.thumbnail,profile:e.profile,author:e.author,views:e.views,likes:e.likes,comments:e.comments,isLike:e.isLike,id:e.id}),(0,yo.jsx)(Dl,{posts:dc}),(0,yo.jsxs)(bs.ListBgWrap,{children:[(0,yo.jsx)(ms,{}),(0,yo.jsx)(yl.Wrapper,{margintop:"55px",children:(0,yo.jsxs)(bs.PostListAndAiRecommandPostWrapper,{children:[(0,yo.jsx)(Ys,{}),(0,yo.jsx)(cc,{})]})})]})]})},hc=()=>(0,yo.jsx)("div",{children:"\ucee4\ubba4\ub2c8\ud2f0 \uc791\uc131\ud398\uc774\uc9c0"});const pc=n.p+"static/media/callendar.a713cd48eaaed4a65ee2a7f17f213e8f.svg";const fc=n.p+"static/media/clock.4e896b7335d7bc7c649b377a69945971.svg",gc=on.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  width: 1320px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,mc=on.div`
  background-color: ${e=>{let{bgcolor:t}=e;return xl[t]}};
  width: 68px;
  height: 24px;
  border-radius: 15px;
  ${Ia}
`,xc=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,bc=on.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,vc=on.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
`,yc=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,wc=on.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Ec=e=>{let{category:t,title:n,profile:r,author:i,views:o,date:a,timeAgo:l}=e;const{name:s,textColor:c,bgColor:d}=zl(t);return(0,yo.jsxs)(gc,{children:[(0,yo.jsx)(mc,{bgcolor:d,children:(0,yo.jsx)(yl.Span,{size:"h11Bold",color:c,children:s})}),(0,yo.jsx)(yl.Span2,{size:"h5Bold",color:"faillog-black",lineclamp:2,children:n}),(0,yo.jsxs)(xc,{children:[(0,yo.jsxs)(bc,{children:[(0,yo.jsx)(vc,{src:r,alt:i}),(0,yo.jsx)(yl.Span,{size:"h10Regular",color:"faillog_gray9",children:i})]}),(0,yo.jsxs)(yc,{children:[(0,yo.jsxs)(wc,{children:[(0,yo.jsx)("img",{src:Ll,width:16,height:12,alt:"views"}),(0,yo.jsx)(yl.Span,{size:"h10Bold",color:"faillog_gray9",children:o})]}),(0,yo.jsxs)(wc,{children:[(0,yo.jsx)("img",{src:pc,width:16,height:16,alt:"date"}),(0,yo.jsx)(yl.Span,{size:"h10Bold",color:"faillog_gray9",children:a})]}),(0,yo.jsxs)(wc,{children:[(0,yo.jsx)("img",{src:fc,width:16,height:16,alt:"time"}),(0,yo.jsx)(yl.Span,{size:"h10Bold",color:"faillog_gray9",children:l})]})]})]})]})},jc=n.p+"static/media/detail1.467ddceb980017135f43.png",Sc=n.p+"static/media/detail2.228a7731dbd06afb7896.png",Tc=on.div`
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 25px;
  width: 1320px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
`,Ac=on.img`
  display: block;
  width: ${e=>{let{$width:t}=e;return t}};
  height: ${e=>{let{$height:t}=e;return t}};
  margin-top: ${e=>{let{$margintop:t}=e;return t||"0px"}};
  margin-bottom: ${e=>{let{$marginbottom:t}=e;return t||"0px"}};
`,kc=()=>(0,yo.jsxs)(Tc,{children:[(0,yo.jsx)(Ac,{src:jc,$width:"1268px",$height:"414px",$marginbottom:"23px"}),(0,yo.jsxs)(yl.Span,{size:"h8Regular",color:"faillog-black",children:["\uc775\uc219\ud55c \ub0b4 \ubc29\uc5d0\uc11c\ub9cc \uacf5\ubd80\ud558\ub358 \uac8c \ub3c5\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc2e4\uc804\uc5d0\uc11c\ub294 \ub0af\uc120 \ud658\uacbd\uacfc \uc791\uc740 \uc18c\uc74c\uc5d0\ub3c4 \uc27d\uac8c \ud754\ub4e4\ub838\uace0, \uc54c\uace0 \uc788\ub358 \uac83\ub3c4 \uc81c\ub300\ub85c \uaebc\ub0b4\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uacf5\ubd80\ub7c9\uc744 \ub354 \ub298\ub9ac\ub294 \ub300\uc2e0",(0,yo.jsx)("br",{}),"\ud658\uacbd\ubd80\ud130 \ubc14\uafb8\uae30\ub85c \ud588\uc2b5\ub2c8\ub2e4.",(0,yo.jsx)("br",{}),(0,yo.jsx)("br",{}),"\uc9d1\uc774 \uc544\ub2cc \ub3c4\uc11c\uad00, \uce74\ud398, \uc2a4\ud130\ub514\uce74\ud398\ub97c \ubc88\uac08\uc544 \uc774\uc6a9\ud588\uace0 \ucc98\uc74c\uc5d4 \ubd88\ud3b8\ud588\uc9c0\ub9cc \uc810\uc810 \ub0af\uc120 \uacf5\uac04\uc5d0\uc11c\ub3c4 \uc9d1\uc911\uc744 \uc720\uc9c0\ud558\ub294 \uc2dc\uac04\uc774 \uae38\uc5b4\uc84c\uc2b5\ub2c8\ub2e4. \uc774\uc804\uc5d0\ub294 \uae34\uc7a5\ud558\uba74 \uc190\uc774 \uad73\uace0 \uba38\ub9ac\uac00 \uba4d\ud574",(0,yo.jsx)("br",{}),"\uc84c\ub294\ub370, \uc774\uc81c\ub294 \ub2e4\uc2dc \ud750\ub984\uc744 \uc7a1\ub294 \uc5f0\uc2b5\uc774 \ub418\uae30 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",(0,yo.jsx)(Ac,{src:Sc,$width:"1268px",$height:"360px",$marginbottom:"23px",$margintop:"23px"}),"\uacf5\ubd80 \ub8e8\ud2f4\ub3c4 \ubc14\uafe8\uc2b5\ub2c8\ub2e4. \uc608\uc804\uc5d0\ub294 \uc624\ub798 \uc549\uc544 \uc788\ub294 \uac83 \uc790\uccb4\uc5d0 \uc758\ubbf8\ub97c \ub480\uc9c0\ub9cc, \uc9c0\uae08\uc740 30\ubd84 \uc9d1\uc911 \ud6c4 \uc9e7\uac8c \uc26c\ub294 \ubc29\uc2dd\uc73c\ub85c \uad6c\uc870\ub97c \ubc14\uafe8\uc2b5\ub2c8\ub2e4. \ud2c0\ub9b0 \ubb38\uc81c\ub294 \uadf8\ub0e5 \ub118\uc5b4\uac00\uc9c0 \uc54a\uace0 \uc65c \ud2c0\ub838\ub294",(0,yo.jsx)("br",{}),"\uc9c0\ub97c \uc801\uc73c\uba74\uc11c \uc2e4\uc218\uc758 \ud328\ud134\uc744 \ucd94\uc801\ud588\uc2b5\ub2c8\ub2e4. ",(0,yo.jsx)("br",{}),(0,yo.jsx)("br",{}),"\uacb0\uad6d \uc2e4\uc804\uc740 \ub9ce\uc774 \uc544\ub294 \uac83\ubcf4\ub2e4 \ud754\ub4e4\ub824\ub3c4 \ub2e4\uc2dc \uaebc\ub0bc \uc218 \uc788\ub294 \ud798\uc774 \ub354 \uc911\uc694\ud558\ub2e4\ub294 \uac78 \ub290\uaf08\uc2b5\ub2c8\ub2e4. \ud658\uacbd\uc744 \ubc14\uafb8\uace0, \ub8e8\ud2f4\uc744 \ubc14\uafb8\uace0, \uc2e4\uc218\uc758 \uc6d0\uc778\uc744 \uc801\uae30 \uc2dc\uc791\ud55c \ub4a4\ubd80\ud130 \uc2e4\uc804\uc5d0\uc11c\uc758 \uc548\uc815\uac10",(0,yo.jsx)("br",{}),"\uc774 \ub2ec\ub77c\uc84c\uc2b5\ub2c8\ub2e4."]})]}),Cc=on.div`
  width: 144px;
  height: 132px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid ${xl.faillog_gray4};
  overflow: hidden;
`,Lc=on.div`
  width: 144px;
  height: 96px;
  background-color: ${xl.faillog_gray2};
  flex-shrink: 0;

  /* img {
    width: 144px;
    height: 96px;
    object-fit: cover;
    display: block;
  } */
`,$c=on.img`
    width: 144px;
    height: 96px;
    object-fit: cover;
    display: block;
`,Ic=on.div`
  width: 144px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  background-color: #ffffff;
  box-sizing: border-box;

  cursor: pointer;

  span {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${xl.faillog_blue};
    text-decoration: underline;
  }
`,Pc=e=>{let{src:t,name:n}=e;return(0,yo.jsxs)(Cc,{children:[(0,yo.jsx)(Lc,{children:(0,yo.jsx)($c,{src:t,alt:n})}),(0,yo.jsx)(Ic,{onClick:async()=>{try{const e=await fetch(t),r=await e.blob(),i=window.URL.createObjectURL(r),o=document.createElement("a");o.href=i,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(i)}catch(e){console.error("\ub2e4\uc6b4\ub85c\ub4dc \uc2e4\ud328:",e)}},children:(0,yo.jsx)(yl.Span,{size:"h11Regular",isvisible:"true",children:n})})]})},Fc=[{src:"https://picsum.photos/seed/img1/144/96",name:"screenshot_01.png"},{src:"https://picsum.photos/seed/img2/144/96",name:"screenshot_02.png"},{src:"https://picsum.photos/seed/img3/144/96",name:"diagram_03.jpg"},{src:"https://picsum.photos/seed/img4/144/96",name:"design_04.jpg"},{src:"https://picsum.photos/seed/img5/144/96",name:"mockup_05.png"}],Rc=on.div`
  width: 1320px;
  padding: 71px 24px 41px 24px;
  display: flex;
  flex-direction: column;
`,Oc=on.div`
  width: 1270px;
  height: 162px;
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
`,Nc=e=>{let{images:t=Fc}=e;return(0,yo.jsxs)(Rc,{children:[(0,yo.jsx)(yl.Span,{size:"h7Bold",isvisible:"true",children:"\ucca8\ubd80\uc774\ubbf8\uc9c0 \ubaa9\ub85d"}),(0,yo.jsx)(Oc,{children:t.map((e,t)=>(0,yo.jsx)(Pc,{src:e.src,name:e.name},t))})]})},zc=on.div`
  width: 1320px;
  padding: 46px 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`,Dc=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Bc=on.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`,Mc=on.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Gc=on.div`
  width: 140px;
  height: 72px;
  background-color: ${xl.faillog_gray1};
  border: 1px solid ${xl.faillog_gray2};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 16px 6px;
  box-sizing: border-box;
`,Hc=e=>{let{profile:t,author:n,postCount:r,faillogCount:i,commentCount:o}=e;return(0,yo.jsxs)(zc,{children:[(0,yo.jsxs)(Dc,{children:[(0,yo.jsx)(Bc,{src:t,alt:n}),(0,yo.jsx)(yl.Span,{size:"h7Bold",color:"faillog-black",children:n})]}),(0,yo.jsxs)(Mc,{children:[(0,yo.jsxs)(Gc,{children:[(0,yo.jsx)(yl.Span,{size:"h10Bold",color:"faillog_gray9",children:"\uc791\uc131\ud55c \uac8c\uc2dc\uae00 \uc218"}),(0,yo.jsx)(yl.Span,{size:"h6Bold",color:"faillog-black",children:r})]}),(0,yo.jsxs)(Gc,{children:[(0,yo.jsx)(yl.Span,{size:"h10Bold",color:"faillog_gray9",children:"\uc791\uc131\ud55c \ud398\uc77c \ub85c\uadf8 \uc218"}),(0,yo.jsx)(yl.Span,{size:"h6Bold",color:"faillog-black",children:i})]}),(0,yo.jsxs)(Gc,{children:[(0,yo.jsx)(yl.Span,{size:"h10Bold",color:"faillog_gray9",children:"\uc791\uc131\ud55c \ub313\uae00 \uc218"}),(0,yo.jsx)(yl.Span,{size:"h6Bold",color:"faillog-black",children:o})]})]})]})};const Wc=n.p+"static/media/menuIcon.5755367d8a682151339c66b61078d257.svg",Uc=on.div`
  width: 1270px;
  padding-top: 26px;
  padding-bottom: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,_c=on.button`
  width: 84px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${xl.faillog_gray4};
  border-radius: 10px;
  background: ${xl.faillog_white};
  cursor: pointer;

  ${vl}
`,Yc=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Qc=on.button`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid ${xl.faillog_gray4};
  border-radius: 10px;
  background: ${xl.faillog_white};
  cursor: pointer;

  ${vl}
`,Zc=on.img`
  width: 16px;
  height: 16px;
`,Vc=on.div`
  position: relative;
`,qc=on.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${xl.faillog_gray4};
  border-radius: 8px;
  background: ${xl.faillog_white};
  cursor: pointer;

  ${vl}
`,Xc=on.div`
  position: absolute;
  right: 0;
  top: calc(100% + 16px);
  width: 100px;
  background: ${xl.faillog_white};
  border: 1px solid ${xl.faillog_gray4};
  border-radius: 15px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
`,Jc=on.div`
  ${Ia}
  cursor: pointer;

    &:hover span {
    color: ${xl.faillog_purple};
  }
`,Kc=e=>{let{isOwner:t=!1,likeCount:n=0,isLiked:i=!1}=e;const[o,a]=(0,r.useState)(!1),l=wi();return(0,yo.jsxs)(Uc,{children:[(0,yo.jsx)(_c,{onClick:()=>l("/community"),children:(0,yo.jsx)(yl.Span,{size:"h10Bold",children:"\ubaa9\ub85d\uc73c\ub85c"})}),(0,yo.jsxs)(Yc,{children:[(0,yo.jsxs)(Qc,{children:[(0,yo.jsx)(Zc,{src:i?Pl:$l,alt:"\uc88b\uc544\uc694"}),(0,yo.jsx)(yl.Span,{size:"h9Bold",children:n})]}),(0,yo.jsxs)(Vc,{children:[(0,yo.jsx)(qc,{onClick:()=>a(e=>!e),children:(0,yo.jsx)("img",{src:Wc,width:20,height:20,alt:"\uba54\ub274"})}),o&&(0,yo.jsx)(Xc,{children:t?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(Jc,{onClick:()=>a(!1),children:(0,yo.jsx)(yl.Span,{size:"h7Regular",children:"\uc2e0\uace0\ud558\uae30"})}),(0,yo.jsx)(Jc,{onClick:()=>a(!1),children:(0,yo.jsx)(yl.Span,{size:"h7Regular",children:"\uc218\uc815\ud558\uae30"})}),(0,yo.jsx)(Jc,{onClick:()=>a(!1),children:(0,yo.jsx)(yl.Span,{size:"h7Regular",children:"\uc0ad\uc81c\ud558\uae30"})})]}):(0,yo.jsx)(Jc,{onClick:()=>a(!1),children:(0,yo.jsx)(yl.Span,{size:"h7Regular",children:"\uc2e0\uace0\ud558\uae30"})})})]})]})]})},ed=on.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,td=on.textarea`
  width: 1236px;
  height: 112px;
  padding: 14px 16px;
  background: ${xl.faillog_gray1};
  border: 1px solid ${xl.faillog_gray2};
  border-radius: 15px;
  resize: none;
  overflow-y: auto;
  ${ml.h9Regular}
  color: ${xl["faillog-black"]};
  box-sizing: border-box;

  ${vl}

  &::placeholder {
    color: ${xl.faillog_gray9};
  }

  &:focus {
    outline: none;
  }


`,nd=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,rd=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,id=on.button`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${xl.faillog_purple};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`,od=e=>{let{onSubmit:t,subject:n="\ub313\uae00"}=e;const[i,o]=(0,r.useState)(""),a=500===i.length;return(0,yo.jsxs)(ed,{children:[(0,yo.jsx)(td,{value:i,onChange:e=>{e.target.value.length<=500&&o(e.target.value)},placeholder:`${n}\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694`}),(0,yo.jsxs)(nd,{children:[(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog_gray8",children:`\uc11c\ub85c\ub97c \uc874\uc911\ud558\ub294 ${n} \ubb38\ud654\ub97c \uc9c0\ucf1c\uc8fc\uc138\uc694`}),(0,yo.jsxs)(rd,{children:[(0,yo.jsxs)(yl.Span,{size:"h10Regular",color:a?"faillog-red":void 0,children:["\uae00\uc790 \uc218 (",i.length," / ",500,")"]}),(0,yo.jsx)(id,{onClick:()=>{t&&t(i)},children:(0,yo.jsx)(yl.Span,{size:"h8Bold",color:"faillog_white",children:`${n} \ub4f1\ub85d`})})]})]})]})},ad=(0,r.createContext)(null),ld=()=>(0,r.useContext)(ad),sd={isOwner:!1,profileImg:"https://i.pravatar.cc/150?img=5",author:"\ucde8\uc900\ub9c8\uc2a4\ud130",content:"\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\u3147\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.\ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694.",createdAt:"2\ubd84\uc804"},cd=on.div`
  width: 1236px;
  padding: 9px 11px;
  padding-bottom: 9px;
  background: ${xl.faillog_gray1};
  border-radius: 15px;
  box-sizing: border-box;
`,dd=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ud=on.div`
  display: flex;
  align-items: center;
  gap: 9px;
`,hd=on.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  object-fit: cover;
`,pd=on.div`
  position: relative;
`,fd=on.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`,gd=on.div`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 80px;
  background: ${xl.faillog_white};
  border: 1px solid ${xl.faillog_gray4};
  border-radius: 15px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
`,md=on.div`
  ${Ia}
  cursor: pointer;

  &:hover span {
    color: ${xl.faillog_purple};
  }
`,xd=on.div`
  margin-top: 11px;
`,bd=on.p`
  margin: 0;
  padding-right: 160px;
  ${ml.h9Regular}
  color: ${xl["faillog-black"]};
  word-break: break-all;
`,vd=on.span`
  ${ml.h9Regular}
  color: ${xl.faillog_purple};
  cursor: pointer;
`,yd=e=>{let{isOwner:t=sd.isOwner,profileImg:n=sd.profileImg,author:i=sd.author,content:o=sd.content,createdAt:a=sd.createdAt}=e;const{openMenuId:l,setOpenMenuId:s}=ld(),c=(0,r.useRef)(`rereply-${Math.random()}`).current,d=l===c,[u,h]=(0,r.useState)(!1),p=o.length>230,f=p&&!u?o.slice(0,230):o;return(0,yo.jsxs)(cd,{children:[(0,yo.jsxs)(dd,{children:[(0,yo.jsxs)(ud,{children:[n&&(0,yo.jsx)(hd,{src:n,alt:"\ud504\ub85c\ud544"}),(0,yo.jsx)(yl.Span,{size:"h8Bold",children:i}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog_gray9",children:a})]}),(0,yo.jsxs)(pd,{children:[(0,yo.jsx)(fd,{onClick:()=>s(d?null:c),children:(0,yo.jsx)("img",{src:Wc,width:20,height:20,alt:"\uba54\ub274"})}),d&&(0,yo.jsx)(gd,{children:t?(0,yo.jsx)(md,{onClick:()=>s(null),children:(0,yo.jsx)(yl.Span,{size:"h9Regular",children:"\uc0ad\uc81c\ud558\uae30"})}):(0,yo.jsx)(md,{onClick:()=>s(null),children:(0,yo.jsx)(yl.Span,{size:"h9Regular",children:"\uc2e0\uace0\ud558\uae30"})})})]})]}),(0,yo.jsx)(xd,{children:(0,yo.jsxs)(bd,{children:[f,p&&!u&&"... ",p&&(0,yo.jsx)(vd,{onClick:()=>h(e=>!e),children:u?" (\uc811\uae30)":"(\uc790\uc138\ud788\ubcf4\uae30)"})]})})]})},wd={isOwner:!1,profileImg:"https://i.pravatar.cc/150?img=3",createdAt:"3\ubd84 \uc804",author:"\ud574\ub791\uc774",content:"\uc9c4\uc9dc \uacf5\uac10\ub429\ub2c8\ub2e4. \uc800\ub3c4 \uc9d1\uc5d0\uc11c\ub294 \uc798 \ub418\ub294\ub370 \uc2dc\ud5d8\uc7a5\ub9cc \uac00\uba74 \uc544\ub294 \uac83\ub3c4 \ub9c9\ud788\ub354\ub77c\uace0\uc694. \uadf8\ub9ac\uace0 \ub313\uae00\uc5d0\ub294 \uae00\uc790\uac00 \uc5ec\uae30\uae4c\uc9c0 \ucee4\uc9d1\ub2c8\ub2e4. \uc5b4\ub514\uae4c\uc9c0 \ucee4\uc9c0\ub294\uc9c0 \ud655\uc778\ud574\ubcf8 \uacb0\uacfc \uc881\uc744 \uc904 \uc54c\uc558\ub294\ub370 \ub108\ubb34 \ub113\uc740 \ubc94\uc704\uae4c\uc9c0 \uac11\ub2c8\ub2e4. \ub2e4\uc74c \uc904\uc774 \uc5b8\uc81c \ub118\uc5b4\uac00\ub098 \ud588\ub2e4.",isLiked:!0,likeCount:3,rereplyList:[{isOwner:!1,profileImg:"https://i.pravatar.cc/150?img=5",author:"\ucde8\uc900\ub9c8\uc2a4\ud130",content:"\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.",createdAt:"2\ubd84\uc804"},{isOwner:!0,profileImg:"https://i.pravatar.cc/150?img=3",author:"\ud574\ub791\uc774",content:"\ub9de\uc544\uc694. \ud2b9\ud788 \uccab \uc2dc\ud5d8\uc740 \uae34\uc7a5\uac10 \uc790\uccb4\uac00 \ub108\ubb34 \ub0af\uc124\ub354\ub77c\uace0\uc694.",createdAt:"\ubc29\uae08"}]},Ed=on.div`
  width: 1268px;
  padding: 13px 15px 15px 15px;
  border: 1px solid ${xl.faillog_gray3};
  border-radius: 15px;
  box-sizing: border-box;
`,jd=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Sd=on.div`
  display: flex;
  align-items: center;
  gap: 9px;
`,Td=on.img`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  object-fit: cover;
`,Ad=on.div`
  position: relative;
`,kd=on.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`,Cd=on.div`
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 80px;
  background: ${xl.faillog_white};
  border: 1px solid ${xl.faillog_gray4};
  border-radius: 10px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
`,Ld=on.div`
  ${Ia}
  cursor: pointer;

  &:hover span {
    color: ${xl.faillog_purple};
  }
`,$d=on.div`
  margin-top: 10px;
`,Id=on.p`
  margin: 0;
  padding-right: 170px;
  ${ml.h9Regular}
  color: ${xl["faillog-black"]};
  word-break: break-all;
`,Pd=on.span`
  ${ml.h9Regular}
  color: ${xl.faillog_purple};
  cursor: pointer;
`,Fd=on.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 5px;
`,Rd=on.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Od=on.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`,Nd=on.div`
  margin-top: 14px;
`,zd=on.div`
  width: 1236px;
  height: 1px;
  background: ${xl.faillog_gray2};
`,Dd=on.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`,Bd=e=>{let{isOwner:t=wd.isOwner,profileImg:n=wd.profileImg,createdAt:i=wd.createdAt,author:o=wd.author,content:a=wd.content,isLiked:l=wd.isLiked,likeCount:s=wd.likeCount,rereplyList:c=wd.rereplyList}=e;const{openMenuId:d,setOpenMenuId:u}=ld(),h=(0,r.useRef)(`reply-${Math.random()}`).current,p=d===h,[f,g]=(0,r.useState)(!1),[m,x]=(0,r.useState)(!1),b=a.length>230,v=b&&!f?a.slice(0,230):a,y=c.length>0||m;return(0,yo.jsxs)(Ed,{children:[(0,yo.jsxs)(jd,{children:[(0,yo.jsxs)(Sd,{children:[n&&(0,yo.jsx)(Td,{src:n,alt:"\ud504\ub85c\ud544"}),(0,yo.jsx)(yl.Span,{size:"h8Bold",children:o}),(0,yo.jsx)(yl.Span,{size:"h11Regular",color:"faillog_gray9",children:i})]}),(0,yo.jsxs)(Ad,{children:[(0,yo.jsx)(kd,{onClick:()=>u(p?null:h),children:(0,yo.jsx)("img",{src:Wc,width:20,height:20,alt:"\uba54\ub274"})}),p&&(0,yo.jsx)(Cd,{children:t?(0,yo.jsx)(Ld,{onClick:()=>u(null),children:(0,yo.jsx)(yl.Span,{size:"h9Regular",children:"\uc0ad\uc81c\ud558\uae30"})}):(0,yo.jsx)(Ld,{onClick:()=>u(null),children:(0,yo.jsx)(yl.Span,{size:"h9Regular",children:"\uc2e0\uace0\ud558\uae30"})})})]})]}),(0,yo.jsx)($d,{children:(0,yo.jsxs)(Id,{children:[v,b&&!f&&"... ",b&&(0,yo.jsx)(Pd,{onClick:()=>g(e=>!e),children:f?" (\uc811\uae30)":"(\uc790\uc138\ud788\ubcf4\uae30)"})]})}),(0,yo.jsxs)(Fd,{children:[(0,yo.jsxs)(Rd,{children:[(0,yo.jsx)("img",{src:l?Pl:$l,width:16,height:16,alt:"\uc88b\uc544\uc694"}),(0,yo.jsx)(yl.Span,{size:"h10Bold",children:s})]}),(0,yo.jsx)(Od,{onClick:()=>x(e=>!e),children:(0,yo.jsx)(yl.Span,{size:"h10Bold",children:"\ub2f5\uae00"})})]}),y&&(0,yo.jsxs)(Nd,{children:[(0,yo.jsx)(zd,{}),(0,yo.jsxs)(Dd,{children:[c.map((e,t)=>(0,yo.jsx)(yd,{...e},t)),m&&(0,yo.jsx)(od,{subject:"\ub2f5\uae00",onSubmit:()=>{}})]})]})]})},Md=on.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 15px;
`,Gd=on.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Hd=on.div`
  padding: 17px;
  border: 1px solid ${xl.faillog_gray3};
  border-radius: 15px;
`,Wd=on.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`,Ud=e=>{let{replyList:t=[],onSubmit:n}=e;const[i,o]=(0,r.useState)(null);return(0,yo.jsx)(ad.Provider,{value:{openMenuId:i,setOpenMenuId:o},children:(0,yo.jsxs)(Md,{children:[(0,yo.jsxs)(Gd,{children:[(0,yo.jsx)(yl.Span,{size:"h7Bold",children:"\ub313\uae00"}),(0,yo.jsx)(yl.Span,{size:"h7Bold",color:"faillog_purple",children:t.length})]}),(0,yo.jsx)(Hd,{children:(0,yo.jsx)(od,{onSubmit:n})}),t.length>0&&(0,yo.jsx)(Wd,{children:t.map((e,t)=>(0,yo.jsx)(Bd,{...e},t))})]})})},_d=on.div`
  width: 1270px;
  margin-top: 37px;
  margin-bottom: 54px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Yd=on.div`
  display: flex;
  align-items: center;
  gap: 49px;
  padding-left: 16px;
  padding-right: 190px;
`,Qd=on.span`
  white-space: nowrap;
  flex-shrink: 0;
  ${ml["h10-regular"]}
  color: ${xl.faillog_gray9};
`,Zd=on(oo)`
  min-width: 0;
  text-decoration: none;
  &:hover span {
    text-decoration: underline;
  }
`,Vd=on.hr`
  width: 1270px;
  border: none;
  border-top: 1px solid ${xl.faillog_gray2};
  margin: 0;
`,qd=e=>{let{prevTitle:t,prevId:n,nextTitle:r,nextId:i}=e;return(0,yo.jsxs)(_d,{children:[(0,yo.jsxs)(Yd,{children:[(0,yo.jsx)(Qd,{size:"h10Regular",color:"faillog_gray9",children:"\uc774\uc804\uae00"}),n?(0,yo.jsx)(Zd,{to:`/community/detail/${n}`,children:(0,yo.jsx)(yl.Span2,{size:"h9Regular",color:"faillog-black",lineclamp:1,children:t})}):(0,yo.jsx)(yl.Span,{size:"h9Regular",color:"faillog_gray9",children:"\uc774\uc804\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"})]}),(0,yo.jsx)(Vd,{}),(0,yo.jsxs)(Yd,{children:[(0,yo.jsx)(Qd,{size:"h10Regular",color:"faillog_gray9",children:"\ub2e4\uc74c\uae00"}),i?(0,yo.jsx)(Zd,{to:`/community/detail/${i}`,children:(0,yo.jsx)(yl.Span2,{size:"h9Regular",color:"faillog-black",lineclamp:1,children:r})}):(0,yo.jsx)(yl.Span,{size:"h9Regular",color:"faillog_gray9",children:"\ub2e4\uc74c\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"})]})]})},Xd=on.div`
  width: 1270px;
  display: flex;
  flex-direction: column;
  gap: 11px;
`,Jd=on.div`
  display: flex;
  align-items: center;
  gap: 3px;
  /* width: fit-content; */
`,Kd=on.div`
  display: flex;
  align-items: center;
  gap: 23px;
`,eu=e=>{let{aiPostList:t=[]}=e;return(0,yo.jsxs)(Xd,{children:[(0,yo.jsxs)(Jd,{children:[(0,yo.jsx)(yl.Span,{size:"h7Bold",children:"\ucd94\ucc9c \uae00"}),(0,yo.jsx)("img",{src:rc,alt:"AI"})]}),(0,yo.jsx)(Kd,{children:t.map((e,t)=>(0,yo.jsx)(nc,{...e},t))})]})},tu=[{isOwner:!1,profileImg:kl,createdAt:"3\ubd84 \uc804",author:"\ud574\ub791\uc774",content:"\uc9c4\uc9dc \uacf5\uac10\ub429\ub2c8\ub2e4. \uc800\ub3c4 \uc9d1\uc5d0\uc11c\ub294 \uc798 \ub418\ub294\ub370 \uc2dc\ud5d8\uc7a5\ub9cc \uac00\uba74 \uc544\ub294 \uac83\ub3c4 \ub9c9\ud788\ub354\ub77c\uace0\uc694.",isLiked:!0,likeCount:3,rereplyList:[{isOwner:!1,profileImg:kl,author:"\ucde8\uc900\ub9c8\uc2a4\ud130",content:"\uc800\ub3c4 \uc644\uc804\ud788 \uac19\uc558\uc5b4\uc694. \ud658\uacbd \uc801\uc751\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ud6e8\uc52c \uc911\uc694\ud558\ub354\ub77c\uace0\uc694.",createdAt:"2\ubd84\uc804"},{isOwner:!0,profileImg:kl,author:"\ud574\ub791\uc774",content:"\ub9de\uc544\uc694. \ud2b9\ud788 \uccab \uc2dc\ud5d8\uc740 \uae34\uc7a5\uac10 \uc790\uccb4\uac00 \ub108\ubb34 \ub0af\uc124\ub354\ub77c\uace0\uc694.",createdAt:"\ubc29\uae08"}]},{isOwner:!0,profileImg:kl,createdAt:"10\ubd84 \uc804",author:"\ucde8\uc900\ub9c8\uc2a4\ud130",content:"\uc800\ub3c4 \ube44\uc2b7\ud55c \uacbd\ud5d8\uc774 \uc788\uc5b4\uc694. \ud658\uacbd\uc744 \ubc14\uafb8\uace0 \ub098\uc11c \ud655\uc2e4\ud788 \uc9d1\uc911\ub825\uc774 \ub2ec\ub77c\uc84c\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4 \ucc98\uc74c\uc5d0\ub294 \ud658\uacbd \ud0d3\uc774 \uc544\ub2c8\ub77c \uc81c \uc758\uc9c0\ub825 \ubb38\uc81c\uc778 \uc904 \uc54c\uc558\uc5b4\uc694. \uadf8\ub7f0\ub370 \ub9c9\uc0c1 \ub3c4\uc11c\uad00\uc5d0\uc11c \uacf5\ubd80\ud574\ubcf4\ub2c8 \uc9d1\uc5d0\uc11c\uc640\ub294 \uc9d1\uc911\ub825 \uc790\uccb4\uac00 \ub2ec\ub790\uc5b4\uc694. \uc8fc\ubcc0 \uc18c\uc74c\uc774 \uc624\ud788\ub824 \ub3c4\uc6c0\uc774 \ub418\ub294 \uacbd\uc6b0\ub3c4 \uc788\ub354\ub77c\uace0\uc694. \ud654\uc774\ud2b8 \ub178\uc774\uc988 \ud6a8\uacfc\uc778\uc9c0 \ubb54\uc9c0\ub294 \ubaa8\ub974\uaca0\uc9c0\ub9cc \ud655\uc2e4\ud788 \ud6a8\uc728\uc774 \uc62c\ub77c\uac14\uc2b5\ub2c8\ub2e4. \uc774\uac78 \uc9c4\uc791 \uc54c\uc558\ub354\ub77c\uba74 \uc88b\uc558\uc744 \ud150\ub370 \uc2f6\uc5c8\uc5b4\uc694.",isLiked:!1,likeCount:1,rereplyList:[{isOwner:!1,profileImg:kl,author:"\ud574\ub791\uc774",content:"\ub3c4\uc11c\uad00 \ud6a8\uacfc \uc9c4\uc9dc\uc778 \uac83 \uac19\uc544\uc694. \uc800\ub3c4 \uce74\ud398 \uac00\uba74 \uc774\uc0c1\ud558\uac8c \ub354 \uc798 \ub418\ub354\ub77c\uace0\uc694. \uc9d1\uc5d0\uc11c\ub294 \uce68\ub300\uac00 \uc790\uafb8 \ub208\uc5d0 \ubc1f\ud600\uc11c\uc694.",createdAt:"7\ubd84 \uc804"}]},{isOwner:!1,profileImg:kl,createdAt:"22\ubd84 \uc804",author:"\ub178\ub825\uc655",content:"\uacf5\ubd80 \ud658\uacbd\uc774 \uc774\ub807\uac8c\uae4c\uc9c0 \uc911\uc694\ud560 \uc904\uc740 \ubab0\ub790\ub294\ub370 \uc774 \uae00 \ubcf4\uace0 \uc9c4\uc9dc \uacf5\uac10 \ub9ce\uc774 \ub410\uc5b4\uc694. \uc800\ub294 \uc6d0\ub798 \ubc29\uc5d0\uc11c\ub9cc \uacf5\ubd80\ud588\ub294\ub370 \uc5b4\ub290 \uc21c\uac04\ubd80\ud130 \ubc29 \uc790\uccb4\uac00 \uc26c\ub294 \uacf5\uac04\uc73c\ub85c \uc778\uc2dd\uc774 \ub418\uc5b4\ubc84\ub9b0 \uac74\uc9c0 \ucc45\uc0c1 \uc55e\uc5d0 \uc549\uc544\ub3c4 \uba38\ub9ac\uac00 \uacf5\ubd80 \ubaa8\ub4dc\ub85c \uc548 \uc804\ud658\ub418\ub354\ub77c\uace0\uc694. \uacb0\uad6d \ub3c5\uc11c\uc2e4 \ub04a\uc5c8\ub294\ub370 \uc815\ub9d0 \uc2e0\uc138\uacc4\uc600\uc2b5\ub2c8\ub2e4. \uc7a5\uc18c\uac00 \ubc14\ub00c\uba74 \ub1cc\ub3c4 \ubc14\ub00c\ub294 \uac83 \uac19\uc544\uc694. \uc2ec\ub9ac\uc801\uc778 \uacf5\uac04 \ubd84\ub9ac\uac00 \uc774\ub807\uac8c \uc911\uc694\ud55c \uac70\uc600\uad6c\ub098 \uc2f6\uc5c8\uc5b4\uc694. \ub2e4\ub4e4 \ud55c\ubc88\uc774\ub77c\ub3c4 \ud658\uacbd \ubc14\uafd4\ubcf4\ub294 \uac78 \uac15\ucd94\ud569\ub2c8\ub2e4.",isLiked:!0,likeCount:7,rereplyList:[]},{isOwner:!1,profileImg:kl,createdAt:"35\ubd84 \uc804",author:"\uc2dc\ud5d8\uc900\ube44\uc0dd",content:"\uae30\ucd9c\ub9cc \ud478\ub294 \uac8c \uc815\ub2f5\uc778 \uc904 \uc54c\uc558\ub294\ub370 \uc2e4\uc804\uc5d0\uc11c \uc751\uc6a9 \ubb38\uc81c \ud558\ub098\uc5d0 \uba58\ud0c8 \ud130\uc9c4 \uacbd\ud5d8\uc774 \uc788\uc5b4\uc694. \uadf8 \uc774\ud6c4\ub85c \uacf5\ubd80\ubc95\uc744 \uc644\uc804\ud788 \ubc14\uafe8\uc2b5\ub2c8\ub2e4. \uae30\ucd9c\uc740 \uc720\ud615 \ud30c\uc545\uc6a9\uc73c\ub85c\ub9cc \uc4f0\uace0, \uc2e4\uc81c\ub85c\ub294 \uac1c\ub150\uc744 \uc644\uc804\ud788 \uc774\ud574\ud558\ub294 \ub370 \ub354 \uc9d1\uc911\ud588\uc5b4\uc694. \uc2dc\uac04\uc774 \ub354 \uc624\ub798 \uac78\ub9ac\uc9c0\ub9cc \uc2e4\uc804\uc5d0\uc11c \ucc98\uc74c \ubcf4\ub294 \ubb38\uc81c\ub3c4 \ub17c\ub9ac\uc801\uc73c\ub85c \ud480\uc5b4\ub0bc \uc218 \uc788\uac8c \ub410\uc5b4\uc694. \uc810\uc218\ub3c4 \uadf8\ub54c\ubd80\ud130 \uafb8\uc900\ud788 \uc62c\ub790\uace0\uc694. \uae30\ucd9c \ud68c\ub3c5\uc218\ubcf4\ub2e4 \uc774\ud574\ub3c4\uac00 \ud6e8\uc52c \uc911\uc694\ud558\ub2e4\ub294 \uac78 \ubf08\uc800\ub9ac\uac8c \ubc30\uc6e0\uc2b5\ub2c8\ub2e4.",isLiked:!1,likeCount:12,rereplyList:[]}],nu=[{date:"2026\ub144 03\uc6d4 03\uc77c",category:0,title:"\uc2dc\ud5d8 \uc9c1\uc804 \ubd88\uc548\uc774 \uc2ec\ud574\uc9c8 \ub54c \ub0b4\uac00 \ud588\ub358 \ubcf5\uae30 \ub8e8\ud2f4 3\uac00\uc9c0\ub97c \uc18c\uac1c\ud569\ub2c8\ub2e4",profile:kl,author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6},{date:"2026\ub144 03\uc6d4 03\uc77c",category:0,title:"\ub3c4\uc11c\uad00 \ub8e8\ud2f4\uc73c\ub85c \ubc14\uafb8\uace0 \ub098\uc11c \uc9d1\uc911\ub825\uc774 \uc720\uc9c0\ub41c \uae30\ub85d",profile:kl,author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6},{date:"2026\ub144 03\uc6d4 03\uc77c",category:1,title:"\uacf5\ubd80 \ud658\uacbd\uc744 \ubc14\uafb8\uace0 \ub098\uc11c \uc131\uc801\uc774 \uc624\ub978 \uc2e4\uc81c \uacbd\ud5d8\ub2f4",profile:kl,author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6},{date:"2026\ub144 03\uc6d4 03\uc77c",category:2,title:"\uae30\ucd9c \ud68c\ub3c5\ubcf4\ub2e4 \uac1c\ub150 \uc774\ud574\uac00 \uba3c\uc800\ub2e4 \u2013 \ub0b4 \uacf5\ubd80\ubc95 \ubcc0\ud654\uae30",profile:kl,author:"\ud544\uae30\ub9c8\uc2a4\ud130",views:45,likes:35,comments:6}],ru=0,iu="\uae30\ucd9c\ub9cc \ud30c\ub2e4\uac00 \uc2e4\uc804\uc5d0\uc11c \ubc31\uc9c0 \ub41c \uc370. \uacf5\ubd80 \ud658\uacbd\ubd80\ud130 \ubc14\uafb8\uace0 \ub098\uc11c\ub2c8 \ubcc0\ud654\uac00 \uc0dd\uae34 \uc370",ou=kl,au="\ucde8\uc900\ub9c8\uc2a4\ud130",lu=4579,su="2026-03-05",cu="10\ubd84 \uc804",du=on.div`
    width: 100%;
    background-color: ${xl["faillog-sector-gray"]};
    display: flex;
    flex-direction: column;
    align-items: center;
`,uu=on.hr`
    width: 1268px;
    border: none;
    border-top: 1px solid ${xl.faillog_gray4};
    margin: 0;
`,hu=on.div`
    width: 1320px;
    margin-top: 63px;
    margin-bottom: 101px;
    padding-bottom: 43px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${xl.faillog_white};
    border-radius: 15px;
    ${bl}
`,pu=()=>{const{id:e}=Si();return(0,yo.jsx)(du,{children:(0,yo.jsxs)(hu,{children:[(0,yo.jsx)(Ec,{category:ru,title:iu,profile:ou,author:au,views:lu,date:su,timeAgo:cu}),(0,yo.jsx)(uu,{}),(0,yo.jsx)(kc,{}),(0,yo.jsx)(Nc,{}),(0,yo.jsx)(uu,{}),(0,yo.jsx)(Hc,{profile:ou,author:"\ucde8\uc900\ub9c8\uc2a4\ud130",postCount:24,faillogCount:18,commentCount:136}),(0,yo.jsx)(uu,{}),(0,yo.jsx)(Kc,{isOwner:!0,isLiked:!0,likeCount:24}),(0,yo.jsx)(Ud,{replyList:tu}),(0,yo.jsx)(qd,{prevTitle:"\uc2dc\ud5d8 \uc9c1\uc804 \ubd88\uc548\uc774 \uc2ec\ud574\uc9c8 \ub54c \ub0b4\uac00 \ud588\ub358 \ubcf5\uae30 \ub8e8\ud2f4 3\uac00\uc9c0",prevId:2,nextTitle:"\ub3c4\uc11c\uad00 \ub8e8\ud2f4\uc73c\ub85c \ubc14\uafb8\uace0 \ub098\uc11c \uc9d1\uc911\ub825\uc774 \uc720\uc9c0\ub41c \uae30\ub85d"}),(0,yo.jsx)(eu,{aiPostList:nu})]})})},fu=()=>{const{id:e}=Si();return(0,yo.jsxs)("div",{children:["\ucee4\ubba4\ub2c8\ud2f0 \uc218\uc815 \ud398\uc774\uc9c0",(0,yo.jsxs)("h1",{children:[e,"\ubc88 \uc218\uc815 \uac8c\uc2dc\uae00"]})]})};const gu=n.p+"static/media/close.3c4eb7288f9badead3703f4731c1b244.svg";const mu=n.p+"static/media/back.cec22ac65c7bcb13379167d1a6be580a.svg";const xu=n.p+"static/media/check.7c06e41bb3ef34560a1ebd09df45046d.svg";const bu=n.p+"static/media/style_warm_1.b5c920e3fd53d387ed80459b4b97a78f.svg";const vu=n.p+"static/media/style_warm_2.77ac952e373e5645507d1c76ff1de533.svg";const yu=n.p+"static/media/style_objective.66a66e652982ce4085f37ae1527db95a.svg";const wu=n.p+"static/media/style_cold.671cc4c8cdf0cf85220401a0bd6e460c.svg",Eu=[{id:1,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"B \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",date:"2024.03.15 \uc791\uc131"},{id:2,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"A \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",date:"2023.11.02 \uc791\uc131"},{id:3,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"C \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",date:"2023.11.02 \uc791\uc131"},{id:4,category:"\uacf5\ubd80/\ucde8\uc5c5",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30 \ubd88\ud569\uaca9",date:"2023.09.10 \uc791\uc131"},{id:5,category:"\uc778\uac04\uad00\uacc4",title:"\ud300 \ud504\ub85c\uc81d\ud2b8 \uac08\ub4f1",date:"2023.07.01 \uc791\uc131"}],ju=["\uc0ac\uc5c5/\ucc3d\uc5c5","\uacf5\ubd80/\ucde8\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],Su=dn`
  to { transform: rotate(360deg); }
`,Tu=dn`
  from { opacity: 0.6; }
  to { opacity: 1; }
`,Au=dn`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,ku={};ku.Overlay=on.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
  animation: ${Au} 0.2s ease;
`,ku.Modal=on.div`
  width: 648px;
  height: 799px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border-radius: 20px;
  padding: 40px 50px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
`,ku.HeaderNav=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,ku.ModalHeader=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,ku.CloseButtonWrapper=on.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
`,ku.CloseButton=on.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -10px;
`,ku.BackButton=on.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  cursor: pointer;
  padding: 4px;
  margin-left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}}; }
`,ku.CloseIcon=on.img`
  width: 14px;
  height: 14px;
`,ku.BackIcon=on.img`
  width: 12px;
  height: 12px;
`,ku.CheckIconImg=on.img`
  width: 14px;
  height: 14px;
`,ku.StyleWarmWrapper=on.div`
  position: relative;
  width: 40px;
  height: 40px;
`,ku.StyleWarm1Img=on.img`
  width: 40px;
  height: 40px;
`,ku.StyleWarm2Img=on.img`
  position: absolute;
  right: -8px;
  bottom: 2px;
  width: 20px;
  height: 18px;
`,ku.StyleObjectiveImg=on.img`
  width: 40px;
  height: 40px;
`,ku.StyleColdImg=on.img`
  width: 40px;
  height: 40px;
`,ku.TitleSection=on.div`
  margin-bottom: 40px;
`,ku.ModalTitle=on.h2`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ku.ModalSub=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
`,ku.SectionRow=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,ku.SectionLabel=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ku.SelectedCount=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
`,ku.CategoryTabs=on.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
`,ku.CategoryTab=on.button`
  padding: 8px 20px;
  border-radius: 10px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  cursor: pointer;
  border: 1px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[3]}};
  background-color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.PALETTE.white}};
  color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.white:bn.TEXT_COLOR.basic}};
  font-weight: ${e=>{let{$active:t}=e;return t?bn.FONT_WEIGHT.bold:bn.FONT_WEIGHT.regular}};
  transition: all 0.2s;
`,ku.LogList=on.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
    border-radius: 10px;
  }
`,ku.EmptyList=on.div`
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  padding: 30px 0;
`,ku.LogItem=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  border: 1.5px solid ${e=>{let{$selected:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[3]}};
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
`,ku.LogItemContent=on.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ku.LogItemCategory=on.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.light}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  padding: 4px 10px;
  border-radius: 4px;
  width: fit-content;
  margin-bottom: 4px;
`,ku.LogItemTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ku.LogItemDate=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
`,ku.LogRadio=on.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid ${e=>{let{$selected:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[3]}};
  background-color: ${e=>{let{$selected:t}=e;return t?bn.PALETTE.third.main:"transparent"}};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.2s;
`,ku.BottomSection=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: auto;
`,ku.PrimaryButton=on.button`
  width: 100%;
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border: none;
  border-radius: 12px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9E35C0;
  }
`,ku.SkipLink=on.button`
  background: none;
  border: none;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover { color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}}; }
`,ku.StyleList=on.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-right: 8px;
  margin-bottom: 24px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
    border-radius: 10px;
  }
`,ku.StyleCard=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 135px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1.5px solid ${e=>{let{$selected:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[2]}};
  border-radius: 12px;
  cursor: pointer;
  background-color: ${e=>{let{$selected:t}=e;return t?"#FDF6FF":bn.PALETTE.white}};
  position: relative;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover { border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.light}}; }
`,ku.StyleIcon=on.div`
  font-size: 28px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ku.StyleContent=on.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`,ku.StyleTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,ku.StyleDesc=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[6]}};
  line-height: 1.5;
  white-space: pre-line;
`,ku.StyleBadge=on.span`
  position: absolute;
  top: 36px;
  right: 24px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h11}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{$color:t}=e;return t}};
  background-color: ${e=>{let{$bg:t}=e;return t}};
  padding: 4px 8px;
  border-radius: 4px;
`,ku.LoadingWrapper=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  padding: 20px 0;
`,ku.SpinnerRing=on.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.light}};
  border-top-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  animation: ${Su} 1s linear infinite;
`,ku.LoadingTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  text-align: center;
  line-height: 1.5;
`,ku.LoadingSub=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
`,ku.ProgressBarWrapper=on.div`
  width: 100%;
  height: 6px;
  background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
  border-radius: 99px;
  overflow: hidden;
  margin-top: 8px;
  animation: ${Tu} 0.5s ease;
`,ku.ProgressBar=on.div`
  height: 100%;
  width: ${e=>{let{$progress:t}=e;return t}}%;
  background: linear-gradient(90deg, ${e=>{let{theme:t}=e;return t.PALETTE.third.light}}, ${e=>{let{theme:t}=e;return t.PALETTE.third.main}});
  border-radius: 99px;
  transition: width 0.08s linear;
`,ku.CompleteWrapper=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
  padding: 20px 0;
  animation: ${Au} 0.4s ease;
`,ku.CompleteCircle=on.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.light}};
  display: flex;
  justify-content: center;
  align-items: center;
`,ku.CompleteCheck=on.span`
  font-size: 32px;
  color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  font-weight: bold;
`,ku.CompleteTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  text-align: center;
  line-height: 1.5;
`,ku.CompleteSub=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
`;const Cu=e=>{let{onClose:t}=e;const n=wi(),i=[{id:"warm",icon:(0,yo.jsxs)(ku.StyleWarmWrapper,{children:[(0,yo.jsx)(ku.StyleWarm1Img,{src:bu,alt:"warm style"}),(0,yo.jsx)(ku.StyleWarm2Img,{src:vu,alt:"warm overlay"})]}),title:"\ub530\ub73b\ud55c \uc704\ub85c\uc640 \uacf5\uac10",desc:"\uc9c0\uae08\uc740 \uc790\ucc45\ubcf4\ub2e8 \ub2e4\ub3c5\uc784\uc774 \ud544\uc694\ud574\uc694.\n\uae0d\uc815\uc801\uc73c\ub85c \ubd80\ub4dc\ub7fd\uac8c \ubd84\uc11d\uacfc \ubc29\ud5a5\uc131\uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",badge:"\uc21c\ud55c\ub9db",badgeColor:bn.PALETTE.secondary.main,badgeBg:bn.PALETTE.secondary.light},{id:"objective",icon:(0,yo.jsx)(ku.StyleObjectiveImg,{src:yu,alt:"objective style"}),title:"\uac1d\uad00\uc801\uc778 \uc6d0\uc778 \ubd84\uc11d\uac00",desc:"\ubb38\uc81c\uc758 \ubcf8\uc9c8\ub9cc\uc744 \ud30c\uc545\ud574\uc11c \ubd84\uc11d\ud574\uc694.\n\ub17c\ub9ac\uc801\uc774\uace0 \uba85\ud655\ud55c \ubd84\uc11d\uacfc \ubc29\ud5a5\uc131\uc744 \uc5bb\uc2b5\ub2c8\ub2e4.",badge:"\uc57d\uac04 \ub9e4\uc6b4\ub9db",badgeColor:bn.PALETTE.fifth.main,badgeBg:bn.PALETTE.fifth.light},{id:"cold",icon:(0,yo.jsx)(ku.StyleColdImg,{src:wu,alt:"cold style"}),title:"\ub0c9\ucca0\ud55c \ud329\ud2b8 \ud3ed\uaca9\uae30",desc:"\ubcc0\uba85\uc5c6\uc774 \ud55c\uacc4\ub97c \uc9c1\uc2dc\ud574\uc694.\n\uc544\ud504\uc9c0\ub9cc \ub0c9\ucca0\ud558\uac8c \ubb38\uc81c\uc810\uc744 \ubd84\uc11d\ud558\uace0 \ubc29\ud5a5\uc131\uc744 \uc5bb\uc2b5\ub2c8\ub2e4.",badge:"\ub9e4\uc6b4\ub9db",badgeColor:bn.PALETTE.fourth.main,badgeBg:bn.PALETTE.fourth.light}],[o,a]=(0,r.useState)(1),[l,s]=(0,r.useState)("\uc0ac\uc5c5/\ucc3d\uc5c5"),[c,d]=(0,r.useState)([]),[u,h]=(0,r.useState)(null),[p,f]=(0,r.useState)(0),g=Eu.filter(e=>e.category===l);(0,r.useEffect)(()=>{if(3===o){f(0);const e=setInterval(()=>{f(t=>t>=100?(clearInterval(e),setTimeout(()=>a(4),300),100):t+2)},40);return()=>clearInterval(e)}},[o]),(0,r.useEffect)(()=>{if(4===o){const e=setTimeout(()=>{n("/logs/result/my/detail")},2e3);return()=>clearTimeout(e)}},[o,n]),(0,r.useEffect)(()=>{const e=window.innerWidth-document.documentElement.clientWidth;return document.body.style.overflow="hidden",document.body.style.paddingRight=`${e}px`,()=>{document.body.style.overflow="",document.body.style.paddingRight=""}},[]);return(0,yo.jsx)(ku.Overlay,{onClick:e=>{e.target===e.currentTarget&&o<3&&t()},children:(0,yo.jsxs)(ku.Modal,{$step:o,children:[1===o&&(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(ku.CloseButtonWrapper,{children:(0,yo.jsx)(ku.CloseButton,{onClick:t,children:(0,yo.jsx)(ku.CloseIcon,{src:gu,alt:"close"})})}),(0,yo.jsxs)(ku.TitleSection,{children:[(0,yo.jsx)(ku.ModalTitle,{children:"\uacfc\uac70\uc758 \ube44\uc2b7\ud55c \uc2e4\ud328 \uae30\ub85d"}),(0,yo.jsx)(ku.ModalSub,{children:"\uc120\ud0dd\ud558\uc2dc\uba74 \ub354 \uae4a\uc740 \ud328\ud134\uc744 \ucc3e\uc744 \uc218 \uc788\uc5b4\uc694."})]}),(0,yo.jsxs)(ku.SectionRow,{children:[(0,yo.jsx)(ku.SectionLabel,{children:"\ud568\uaed8 \ubd84\uc11d\ud560\uae4c\uc694?"}),(0,yo.jsx)(ku.SelectedCount,{children:c.length>0?`${c.length}\uac1c \uc120\ud0dd\ub428`:""})]}),(0,yo.jsx)(ku.CategoryTabs,{children:ju.map(e=>(0,yo.jsx)(ku.CategoryTab,{$active:l===e,onClick:()=>s(e),children:e},e))}),(0,yo.jsx)(ku.LogList,{children:0===g.length?(0,yo.jsx)(ku.EmptyList,{children:"\uc774 \uce74\ud14c\uace0\ub9ac\uc5d0\ub294 \ub85c\uadf8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}):g.map(e=>{const t=c.some(t=>t.id===e.id);return(0,yo.jsxs)(ku.LogItem,{$selected:t,onClick:()=>{d(t=>t.some(t=>t.id===e.id)?t.filter(t=>t.id!==e.id):[...t,e])},children:[(0,yo.jsxs)(ku.LogItemContent,{children:[(0,yo.jsx)(ku.LogItemCategory,{children:e.category}),(0,yo.jsx)(ku.LogItemTitle,{children:e.title}),(0,yo.jsx)(ku.LogItemDate,{children:e.date})]}),(0,yo.jsx)(ku.LogRadio,{$selected:t,children:t&&(0,yo.jsx)(ku.CheckIconImg,{src:xu,alt:"check"})})]},e.id)})}),(0,yo.jsxs)(ku.BottomSection,{children:[(0,yo.jsx)(ku.PrimaryButton,{onClick:()=>a(2),children:c.length>0?`${c.length}\uac1c\uc758 \ub85c\uadf8\uc640 \ud568\uaed8 \ubd84\uc11d\ud558\uae30`:"\uc120\ud0dd \uc5c6\uc774 \ubd84\uc11d\ud558\uae30"}),(0,yo.jsx)(ku.SkipLink,{onClick:()=>a(2),children:"\uac74\ub108\ub6f0\uace0 \uc774\ubc88 \ub85c\uadf8\ub9cc \ubd84\uc11d \u2192"})]})]}),2===o&&(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsxs)(ku.HeaderNav,{children:[(0,yo.jsx)(ku.BackButton,{onClick:()=>a(1),children:(0,yo.jsx)(ku.BackIcon,{src:mu,alt:"back"})}),(0,yo.jsx)(ku.CloseButton,{onClick:t,children:(0,yo.jsx)(ku.CloseIcon,{src:gu,alt:"close"})})]}),(0,yo.jsxs)(ku.TitleSection,{children:[(0,yo.jsx)(ku.ModalTitle,{children:"\ubd84\uc11d \uc2a4\ud0c0\uc77c \uc124\uc815"}),(0,yo.jsx)(ku.ModalSub,{children:"\ub098\uc5d0\uac8c \ud544\uc694\ud55c \ubd84\uc11d \uc2a4\ud0c0\uc77c\uc758 \uc628\ub3c4\ub97c \uace8\ub77c\uc8fc\uc138\uc694."})]}),(0,yo.jsx)(ku.StyleList,{children:i.map(e=>(0,yo.jsxs)(ku.StyleCard,{$selected:u===e.id,onClick:()=>h(e.id),children:[(0,yo.jsx)(ku.StyleIcon,{children:e.icon}),(0,yo.jsxs)(ku.StyleContent,{children:[(0,yo.jsx)(ku.StyleTitle,{children:e.title}),(0,yo.jsx)(ku.StyleDesc,{children:e.desc})]}),(0,yo.jsx)(ku.StyleBadge,{$color:e.badgeColor,$bg:e.badgeBg,children:e.badge})]},e.id))}),(0,yo.jsx)(ku.BottomSection,{children:(0,yo.jsx)(ku.PrimaryButton,{disabled:!u,onClick:()=>u&&a(3),children:"\uc120\ud0dd\ud55c \uc2a4\ud0c0\uc77c\ub85c \ubd84\uc11d \uc2dc\uc791"})})]}),3===o&&(0,yo.jsxs)(ku.LoadingWrapper,{children:[(0,yo.jsx)(ku.SpinnerRing,{}),(0,yo.jsxs)(ku.LoadingTitle,{children:["\uc785\ub825\ud558\uc2e0 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c",(0,yo.jsx)("br",{}),"\ud328\ud134\uc744 \ubd84\uc11d\ud558\uace0 \uc788\uc5b4\uc694"]}),(0,yo.jsx)(ku.LoadingSub,{children:"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694..."}),(0,yo.jsx)(ku.ProgressBarWrapper,{children:(0,yo.jsx)(ku.ProgressBar,{$progress:p})})]}),4===o&&(0,yo.jsxs)(ku.CompleteWrapper,{children:[(0,yo.jsx)(ku.CompleteCircle,{children:(0,yo.jsx)(ku.CompleteCheck,{children:"\u2713"})}),(0,yo.jsxs)(ku.CompleteTitle,{children:["\ubd84\uc11d\uc774 \uc644\ub8cc\ub418\uc5b4",(0,yo.jsx)("br",{}),"\uc815\uc0c1 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),(0,yo.jsx)(ku.CompleteSub,{children:"\uacb0\uacfc \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."})]})]})})};const Lu=n.p+"static/media/writing.b0a0dbbe7cc53524e3d6a61b2c0daf77.svg";const $u=n.p+"static/media/tip.32334d44e55481c2693bdee1aa28b1b1.svg",Iu={};Iu.Wrapper=on.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
`,Iu.Header=on.div`
  text-align: left;
  margin-bottom: 50px;
`,Iu.Title=on.h1`
  font-size: 60px;
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Iu.SubTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Iu.ContentWrapper=on.div`
  width: 100%;
  max-width: 872px;
`,Iu.StepInfo=on.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,Iu.ButtonRow=on.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`,Iu.StepBadgeRow=on.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,Iu.StepBadge=on.span`
  color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  white-space: nowrap;
`,Iu.StepTitle=on.h2`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Iu.StepDesc=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
`,Iu.PrevButton=on.button`
  padding: 10px 28px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  border-radius: 8px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  }
`,Iu.FormContainer=on.div`
  position: relative;
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
    border-radius: 0 4px 4px 0;
  }
`,Iu.LogHeader=on.div`
  margin-bottom: 20px;
`,Iu.LogTitleRow=on.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Iu.Badges=on.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`,Iu.BadgeOrange=on.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 74px;
  height: 24px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.fourth.light}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.warning}};
  border-radius: 6px;
  font-size: 11px;
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  box-sizing: border-box;
`;const Pu=on.div`
  background-color: currentColor;
  -webkit-mask-image: url(${e=>e.$src});
  mask-image: url(${e=>e.$src});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-size: contain;
  display: inline-block;
`;Iu.WritingIcon=on(Pu)`
  width: 14px;
  height: 14px;
`,Iu.TipIcon=on.img`
  width: 15px;
  height: 15px;
`,Iu.BadgeBlue=on.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.light}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  border-radius: 6px;
  font-size: 11px;
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  box-sizing: border-box;
`,Iu.Date=on.span`
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
`,Iu.LogTitle=on.h3`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,Iu.TextArea=on.textarea`
  width: 100%;
  min-height: 380px;
  padding: 24px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  border-radius: 12px;
  font-family: inherit;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: 1.6;
  outline: none;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  resize: none;
  margin-bottom: 24px;

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  }

  &:focus {
    border-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  }
`,Iu.TipBox=on.div`
  width: 782px;
  min-height: 60px;
  height: auto;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.light}}; 
  padding: 12px 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin-bottom: 24px;
  box-sizing: border-box;
`,Iu.TipTitleRow=on.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
`,Iu.TipTitle=on.span`
  color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  white-space: nowrap;
`,Iu.TipDesc=on.p`
  color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h10}}; 
  line-height: 1.4;
  margin: 0;
  word-break: keep-all;
  word-wrap: break-word;
`,Iu.ButtonContainer=on.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`,Iu.TempSaveButton=on.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  border-radius: 8px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.light}};
  }
`,Iu.AnalyzeButton=on.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 38px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.primary.main}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border: none;
  border-radius: 8px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;const Fu=()=>{const e=wi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(!1);return(0,yo.jsxs)(Iu.Wrapper,{children:[(0,yo.jsxs)(Iu.ContentWrapper,{children:[(0,yo.jsxs)(Iu.Header,{children:[(0,yo.jsx)(Iu.Title,{children:"Write Fail Log"}),(0,yo.jsx)(Iu.SubTitle,{children:"\ub85c\uadf8 \uc791\uc131 \uac00\uc774\ub4dc\uc5d0 \ub9de\uac8c \ud398\uc77c \ub85c\uadf8 \uc791\uc131"})]}),(0,yo.jsxs)(Iu.StepInfo,{children:[(0,yo.jsxs)(Iu.StepBadgeRow,{children:[(0,yo.jsx)(Iu.StepBadge,{children:"Step 2"}),(0,yo.jsx)(Iu.StepTitle,{children:"\ubaa9\ud45c \ub2ec\uc131\uc744 \uc704\ud574 \uc9c0\ub098\uc628 \uc2e4\ud328 \uacfc\uc815"})]}),(0,yo.jsx)(Iu.StepDesc,{children:"\ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud55c \uc5ec\uc815\uc744 \uc77c\uae30 \uc791\uc131\ud558\ub4ef \ud3b8\ud558\uac8c \uc791\uc131\ud574\uc8fc\uc138\uc694."})]}),(0,yo.jsx)(Iu.ButtonRow,{children:(0,yo.jsx)(Iu.PrevButton,{onClick:()=>{e("/logs/new/step1")},children:"\uc774\uc804"})}),(0,yo.jsxs)(Iu.FormContainer,{children:[(0,yo.jsxs)(Iu.LogHeader,{children:[(0,yo.jsxs)(Iu.Badges,{children:[(0,yo.jsxs)(Iu.BadgeOrange,{children:[(0,yo.jsx)(Iu.WritingIcon,{$src:Lu}),"\uc791\uc131 \uc911"]}),(0,yo.jsx)(Iu.BadgeBlue,{children:"\uacf5\ubd80/\ucde8\uc5c5"})]}),(0,yo.jsxs)(Iu.LogTitleRow,{children:[(0,yo.jsx)(Iu.LogTitle,{children:"\ube45\ub370\uc774\ud130\ubd84\uc11d\uae30\uc0ac \uc790\uaca9\uc99d \uc2e4\uae30 \ub3c4\uc804\uae30"}),(0,yo.jsx)(Iu.Date,{children:"2026.04.23"})]})]}),(0,yo.jsx)(Iu.TextArea,{placeholder:"\ubaa9\ud45c\ub97c \uc774\ub8e8\uae30 \uc704\ud574\uc11c \uc9c0\uae08\uae4c\uc9c0 \uc5b4\ub5a4 \uc77c\uc774 \uc788\uc5c8\ub098\uc694?\n\n\uc608\uc2dc) \uae30\ucd9c\ubb38\uc81c\ub9cc \uacc4\uc18d \ud480\uba74\uc11c \ud328\ud134\uc744 \uc678\uc6b0\uba74 \ub420 \uac70\ub77c \uc0dd\uac01\ud588\ub2e4. \ucc98\uc74c \ub450 \ub2ec\uc740 \uc21c\uc870\ub85c\uc6e0\uace0, \uc815\ub2f5\ub960\ub3c4 \uc62c\ub77c\uac00\ub294 \uac83 \uac19\uc544\uc11c \uc790\uc2e0\uac10\uc774 \uc0dd\uacbc\ub2e4.\n\uadf8\ub7f0\ub370 \uc2e4\uc81c \uc2dc\ud5d8 \ub0a0, \uc751\uc6a9 \ubb38\uc81c\ub4e4\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc774 \ub098\uc654\uace0 \ub098\ub294 \uc644\uc804\ud788 \ub9c9\ud600\ubc84\ub838\ub2e4. \uc544\ub294 \uac1c\ub150\uc778\ub370 \uc870\uae08\ub9cc \ube44\ud2c0\uba74 \ud480\uc9c0 \ubabb\ud588\ub2e4.\n\uae30\ucd9c\ubb38\uc81c\ub9cc \uacc4\uc18d \ud480\uba74\uc11c \ud328\ud134\uc744 \uc678\uc6b0\uba74 \ub420 \uac70\ub77c \uc0dd\uac01\ud588\ub2e4. \ucc98\uc74c \ub450 \ub2ec\uc740 \uc21c\uc870\ub85c\uc6e0\uace0, \uc815\ub2f5\ub960\ub3c4 \uc62c\ub77c\uac00\ub294 \uac83 \uac19\uc544\uc11c \uc790\uc2e0\uac10\uc774 \uc0dd\uacbc\ub2e4.\n\uadf8\ub7f0\ub370 \uc2e4\uc81c \uc2dc\ud5d8 \ub0a0, \uc751\uc6a9 \ubb38\uc81c\ub4e4\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc774 \ub098\uc654\uace0 \ub098\ub294 \uc644\uc804\ud788 \ub9c9\ud600\ubc84\ub838\ub2e4. \uc544\ub294 \uac1c\ub150\uc778\ub370 \uc870\uae08\ub9cc \ube44\ud2c0\uba74 \ud480\uc9c0 \ubabb\ud588\ub2e4.\n\uae30\ucd9c\ubb38\uc81c\ub9cc \uacc4\uc18d \ud480\uba74\uc11c \ud328\ud134\uc744 \uc678\uc6b0\uba74 \ub420 \uac70\ub77c \uc0dd\uac01\ud588\ub2e4. \ucc98\uc74c \ub450 \ub2ec\uc740 \uc21c\uc870\ub85c\uc6e0\uace0, \uc815\ub2f5\ub960\ub3c4 \uc62c\ub77c\uac00\ub294 \uac83 \uac19\uc544\uc11c \uc790\uc2e0\uac10\uc774 \uc0dd\uacbc\ub2e4.\n\uadf8\ub7f0\ub370 \uc2e4\uc81c \uc2dc\ud5d8 \ub0a0, \uc751\uc6a9 \ubb38\uc81c\ub4e4\uc774 \uc0dd\uac01\ubcf4\ub2e4 \ub9ce\uc774 \ub098\uc654\uace0 \ub098\ub294 \uc644\uc804\ud788 \ub9c9\ud600\ubc84\ub838\ub2e4. \uc544\ub294 \uac1c\ub150\uc778\ub370 \uc870\uae08\ub9cc \ube44\ud2c0\uba74 \ud480\uc9c0 \ubabb\ud588\ub2e4.",value:t,onChange:e=>n(e.target.value)}),(0,yo.jsxs)(Iu.TipBox,{children:[(0,yo.jsxs)(Iu.TipTitleRow,{children:[(0,yo.jsx)(Iu.TipIcon,{src:$u,alt:"tip"}),(0,yo.jsx)(Iu.TipTitle,{children:"\uc791\uc131 \ud301!!"})]}),(0,yo.jsx)(Iu.TipDesc,{children:"\uacfc\uc815 \uc18d\uc5d0\uc11c \uc5b4\ub5a4 \uacb0\uc815\uc744 \ud558\uc168\ub294\uc9c0 \uc65c \uadf8\ub7f0 \uacb0\uc815\uc744 \ud558\uc168\ub294\uc9c0 \uadf8\ub54c \ub9c8\uc74c\uc18d\uc758 \uac10\uc815\ub4e4 \uc678\ubd80 \ud658\uacbd\uc774\ub098 \ud658\uacbd \ubcc0\ud654\ub4e4, \uc9c0\uae08 \ub3cc\uc544\ubcf4\uba74 \uc5b4\ub5a4 \uc0dd\uac01\uc774 \ub4dc\uc2dc\ub294\uc9c0 \ub4f1\uc744 \uc790\uc720\ub86d\uac8c \uc368\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4."})]}),(0,yo.jsxs)(Iu.ButtonContainer,{children:[(0,yo.jsx)(Iu.TempSaveButton,{onClick:()=>{alert("\uc784\uc2dc\uc800\uc7a5 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:"\uc784\uc2dc\uc800\uc7a5"}),(0,yo.jsx)(Iu.AnalyzeButton,{onClick:()=>{o(!0)},children:"\ubd84\uc11d\ud558\uae30"})]})]})]}),i&&(0,yo.jsx)(Cu,{onClose:()=>o(!1)})]})};const Ru=n.p+"static/media/vision_list.05d941ab94b197630013749e8e160de5.svg";const Ou=n.p+"static/media/upload.78045cf9d3ea54a0eed0bfc8abae2142.svg";const Nu=n.p+"static/media/delete.20560630a20f4b7a8eb483b339520cfe.svg",zu={};zu.Wrapper=on.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[1]}};
`,zu.ContentWrapper=on.div`
  width: 100%;
  max-width: 872px;
`,zu.Header=on.div`
  text-align: left;
  margin-bottom: 50px;
`,zu.Title=on.h1`
  font-size: 60px;
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,zu.SubTitle=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,zu.StepInfo=on.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
`,zu.ButtonRow=on.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 24px;
`,zu.StepBadgeRow=on.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,zu.StepBadge=on.span`
  color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  white-space: nowrap;
`,zu.StepTitle=on.h2`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h5}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,zu.StepDesc=on.p`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
`,zu.NextButton=on.button`
  padding: 10px 28px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[4]}};
  border-radius: 8px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
    border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  }
`,zu.FormContainer=on.div`
  position: relative;
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border-radius: 16px;
  padding: 40px 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 36px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};

  /* The left purple bar */
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: 24px;
    left: 0px;
    width: 5px;
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    border-radius: 0 4px 4px 0;
  }
`,zu.FormRow=on.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,zu.FormGroup=on.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: ${e=>{let{$flex:t}=e;return t||1}};
  position: relative;
`,zu.LabelRow=on.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,zu.Label=on.label`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.bold}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
`,zu.Input=on.input`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
  border-radius: 8px;
  font-family: inherit;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  outline: none;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
  }

  &:focus {
    border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  }
`,zu.DropdownWrapper=on.div`
  position: relative;
  width: 100%;
`,zu.DropdownHeader=on.div`
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${e=>{let{$isOpen:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[3]}};
  border-radius: 8px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
`,zu.DropdownText=on.span`
  color: ${e=>{let{$hasValue:t}=e;return t?bn.TEXT_COLOR.basic:bn.GRAYSCALE[9]}};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zu.ArrowIcon=on.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid ${e=>{let{$isOpen:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[5]}};
  border-bottom: 2px solid ${e=>{let{$isOpen:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[5]}};
  transform: ${e=>{let{$isOpen:t}=e;return t?"rotate(-135deg) translateY(3px)":"rotate(45deg) translateY(-3px)"}};
  transition: transform 0.3s ease, border-color 0.2s;
  flex-shrink: 0;
  margin-bottom: ${e=>{let{$isOpen:t}=e;return t?"-4px":"4px"}};
`,zu.FloatingList=on.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`,zu.FloatingItem=on.li`
  padding: 14px 20px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  cursor: pointer;
  background-color: ${e=>{let{$isSelected:t}=e;return t?bn.PALETTE.third.light:"transparent"}};
  
  /* Prevent layout shift by using a transparent border initially */
  border: 1.5px solid transparent;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
  position: relative;
  transition: border-color 0.1s ease;

  &:last-child {
    border-bottom: 1.5px solid transparent;
  }

  &:hover {
    border: 1.5px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    border-radius: 8px;
    z-index: 1;
    /* Maintain background color as per user request */
    background-color: ${e=>{let{$isSelected:t}=e;return t?bn.PALETTE.third.light:"transparent"}};
  }

  /* Apply the same border for selected items as seen in the photo */
  ${e=>{let{$isSelected:t}=e;return t&&`\n    border: 1.5px solid ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};\n    border-radius: 8px;\n    z-index: 1;\n  `}}
`,zu.LoadVisionButton=on.button`
  padding: 10px 16px;
  border: 1px solid ${e=>{let{$isOpen:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[3]}};
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  border-radius: 6px;
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{$isOpen:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[9]}};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  }

  &:active {
    border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  }
`,zu.EmptyVision=on.li`
  padding: 50px 20px;
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[5]}};
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h9}};
  line-height: 1.6;
`,zu.ThumbnailRow=on.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
`,zu.UploadButtonArea=on.div`
  flex: 2; /* aligns width with Title input */
  height: 64px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[3]}};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  cursor: pointer;
  gap: 10px;
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  }

  &:active {
    border-color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
    background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
  }
`,zu.UploadIcon=on.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
`,zu.UploadIcon=on.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
`,zu.UploadText=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h8}};
  font-weight: ${e=>{let{theme:t}=e;return t.FONT_WEIGHT.regular}};
  color: ${e=>{let{theme:t}=e;return t.GRAYSCALE[9]}};
`,zu.PreviewWrapper=on.div`
  flex: 1; /* aligns with category input area */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 200px;
  border: 1.5px solid ${e=>{let{theme:t}=e;return t.GRAYSCALE[2]}};
  border-radius: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.PALETTE.white}};
`,zu.PreviewImage=on.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 11px 11px 0 0;
`,zu.FileNameContainer=on.div`
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
`,zu.PreviewFileName=on.span`
  font-size: ${e=>{let{theme:t}=e;return t.FONT_SIZE.h7}};
  color: ${e=>{let{theme:t}=e;return t.PALETTE.third.main}};
  text-decoration: underline;
  text-underline-offset: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
`,zu.DeleteIcon=on.div`
  position: absolute;
  top: -24px;
  right: 0;
  cursor: pointer;
  z-index: 10;
  color: ${e=>{let{theme:t}=e;return t.TEXT_COLOR.basic}};
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1);
    color: ${e=>{let{theme:t}=e;return t.PALETTE.fourth.main}};
  }
`,zu.VisionIcon=on.img`
  width: 16px;
  height: 16px;
`,zu.UploadIconImg=on.img`
  width: 15px;
  height: 15px;
`,zu.DeleteImg=on.img`
  width: 14px;
  height: 14px;
`;const Du=()=>{const e=wi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1),[h,p]=(0,r.useState)(null),f=(0,r.useRef)(null),g=["\uc62c\ud574 \uc548\uc5d0 \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc790\uaca9\uc99d \ub530\uae30","\ub124\uc774\ubc84 \uc785\uc0ac\ud558\uae30","\uc0b4 15\ud0a4\ub85c \ube7c\uae30","\ud55c\ub2ec\uc5d0 \ucc45 2\uad8c\uc529 \uc77d\uae30"],m=(0,r.useRef)(null),x=(0,r.useRef)(null);(0,r.useEffect)(()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&c(!1),x.current&&!x.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);return(0,yo.jsx)(zu.Wrapper,{children:(0,yo.jsxs)(zu.ContentWrapper,{children:[(0,yo.jsxs)(zu.Header,{children:[(0,yo.jsx)(zu.Title,{children:"Write Fail Log"}),(0,yo.jsx)(zu.SubTitle,{children:"\ub85c\uadf8 \uc791\uc131 \uac00\uc774\ub4dc\uc5d0 \ub9de\uac8c \ud398\uc77c \ub85c\uadf8 \uc791\uc131"})]}),(0,yo.jsxs)(zu.StepInfo,{children:[(0,yo.jsxs)(zu.StepBadgeRow,{children:[(0,yo.jsx)(zu.StepBadge,{children:"Step 1"}),(0,yo.jsx)(zu.StepTitle,{children:"\ube44\uc804, \uc81c\ubaa9, \uce74\ud14c\uace0\ub9ac, \uc378\ub124\uc77c \uc124\uc815\ud558\uae30"})]}),(0,yo.jsx)(zu.StepDesc,{children:"\ub85c\uadf8\uc758 \uc81c\ubaa9\uacfc \ub2ec\uc131\ud558\uace0 \uc2f6\uc740 \ucd5c\uc885 \ubaa9\ud45c, \ubaa9\ud45c \ud0dc\uadf8, \ub85c\uadf8 \uc378\ub124\uc77c \uc0ac\uc9c4\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694."})]}),(0,yo.jsx)(zu.ButtonRow,{children:(0,yo.jsx)(zu.NextButton,{onClick:()=>{e("/logs/new/step2")},children:"\ub2e4\uc74c"})}),(0,yo.jsxs)(zu.FormContainer,{children:[(0,yo.jsxs)(zu.FormRow,{children:[(0,yo.jsxs)(zu.FormGroup,{$flex:1.5,children:[(0,yo.jsx)(zu.Label,{children:"\ub85c\uadf8 \uc81c\ubaa9"}),(0,yo.jsx)(zu.Input,{placeholder:"\uc608) \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc790\uaca9\uc99d \ud544\uae30 \ub3c4\uc804\uae30",value:t,onChange:e=>n(e.target.value)})]}),(0,yo.jsxs)(zu.FormGroup,{$flex:1.2,ref:m,children:[(0,yo.jsx)(zu.Label,{children:"\uce74\ud14c\uace0\ub9ac"}),(0,yo.jsxs)(zu.DropdownWrapper,{children:[(0,yo.jsxs)(zu.DropdownHeader,{$isOpen:s,onClick:()=>c(!s),children:[(0,yo.jsx)(zu.DropdownText,{$hasValue:!!i,children:i||"\uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}),(0,yo.jsx)(zu.ArrowIcon,{$isOpen:s})]}),s&&(0,yo.jsx)(zu.FloatingList,{children:["\uc0ac\uc5c5/\ucc3d\uc5c5","\uacf5\ubd80/\ucde8\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"].map((e,t)=>(0,yo.jsx)(zu.FloatingItem,{$isSelected:i===e,onClick:()=>{o(e),c(!1)},children:e},t))})]})]})]}),(0,yo.jsxs)(zu.FormGroup,{ref:x,children:[(0,yo.jsxs)(zu.LabelRow,{children:[(0,yo.jsx)(zu.Label,{children:"\uc774\ub8e8\uace0 \uc2f6\uc740 \ube44\uc804"}),(0,yo.jsxs)(zu.LoadVisionButton,{$isOpen:d,type:"button",onClick:()=>u(!d),children:[(0,yo.jsx)(zu.VisionIcon,{src:Ru,alt:"vision list"}),"\uae30\uc874 \ube44\uc804 \ubd88\ub7ec\uc624\uae30"]})]}),(0,yo.jsx)(zu.Input,{placeholder:"\uc608) \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \ucde8\ub4dd\ud558\uae30",value:a,onChange:e=>l(e.target.value)}),d&&(0,yo.jsx)(zu.FloatingList,{children:g.length>0?g.map((e,t)=>(0,yo.jsx)(zu.FloatingItem,{$isSelected:a===e,onClick:()=>(l(e),void u(!1)),children:e},t)):(0,yo.jsxs)(zu.EmptyVision,{children:["\uc544\uc9c1 \uc791\uc131\ub41c \ube44\uc804\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",(0,yo.jsx)("br",{}),"\uc0c8\ub85c\uc6b4 \ube44\uc804\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."]})})]}),(0,yo.jsxs)(zu.FormGroup,{children:[(0,yo.jsx)(zu.Label,{children:"\ub85c\uadf8 \uc378\ub124\uc77c \uc0ac\uc9c4 \ucca8\ubd80"}),(0,yo.jsxs)(zu.ThumbnailRow,{children:[(0,yo.jsxs)(zu.UploadButtonArea,{onClick:()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.click()},children:[(0,yo.jsx)(zu.UploadIcon,{children:(0,yo.jsx)(zu.UploadIconImg,{src:Ou,alt:"upload"})}),(0,yo.jsx)(zu.UploadText,{children:"\ud074\ub9ad\ud574\uc11c \uc0ac\uc9c4 \uc5c5\ub85c\ub4dc (JPG, PNG / \ucd5c\ub300 5MB)"})]}),(0,yo.jsx)("input",{type:"file",accept:"image/*",ref:f,style:{display:"none"},onChange:e=>{const t=e.target.files[0];if(!t)return;const n=URL.createObjectURL(t);p({url:n,name:t.name})}}),h&&(0,yo.jsxs)(zu.PreviewWrapper,{children:[(0,yo.jsx)(zu.PreviewImage,{src:h.url,alt:"thumbnail"}),(0,yo.jsx)(zu.FileNameContainer,{children:(0,yo.jsx)(zu.PreviewFileName,{children:h.name})}),(0,yo.jsx)(zu.DeleteIcon,{onClick:()=>{p(null),f.current&&(f.current.value="")},children:(0,yo.jsx)(zu.DeleteImg,{src:Nu,alt:"delete"})})]})]})]})]})]})})},Bu=()=>(0,yo.jsx)(Bi,{}),Mu="#F53102",Gu="#333333",Hu="#AB47FF",Wu="#FFFFFF",Uu="#F3E8FF",_u="#F2F2F2",Yu="#E6E6E6",Qu="#CCCCCC",Zu="#999999",Vu="#555555",qu=tn`box-shadow: 0 4px 32px rgba(0, 0, 0, 0.08);`,Xu={};Xu.Wrapper=on.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(160deg, #eaf3ff 0%, #ffffff 40%, #f5eeff 100%);
`,Xu.LeftPanel=on.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: center;
  padding: 80px 60px;
`,Xu.Logo=on.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 64px;
`,Xu.Tagline=on.h1`
  ${Ba}
  color: ${Gu};
  margin-bottom: 24px;
`,Xu.Description=on.p`
  ${ol}
  color: ${Vu};
  margin-bottom: 40px;
`,Xu.BulletList=on.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Xu.BulletItem=on.li`
  ${ol}
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${Gu};

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${Hu};
    flex-shrink: 0;
  }
`,Xu.RightPanel=on.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px;
`,Xu.Card=on.div`
  background: ${Wu};
  border-radius: 16px;
  ${qu}
  padding: 48px 44px;
  width: 100%;
  max-width: 440px;
`;const Ju=Xu,Ku=()=>(0,yo.jsxs)(Ju.Wrapper,{children:[(0,yo.jsxs)(Ju.LeftPanel,{children:[(0,yo.jsx)(Ju.Logo,{children:(0,yo.jsx)("img",{src:"assets\\picture\\logo.png",alt:"FailLog",style:{height:"211px",width:"auto"}})}),(0,yo.jsx)(Ju.Tagline,{children:"\uc2e4\ud328\ub294 \uc131\uacf5\uc758 \uc5b4\uba38\ub2c8"}),(0,yo.jsxs)(Ju.Description,{children:["\ub098\uc758 \uc2e4\ud328\ub97c \uc228\uae30\uc9c0 \uc54a\uace0 \uc815\ub9ac\ud560 \ub54c, \ub354 \uc120\uba85\ud55c \ubc29\ud5a5\uacfc \ub2e4\uc74c \uc120\ud0dd\uc774",(0,yo.jsx)("br",{}),"\ubcf4\uc785\ub2c8\ub2e4. Fail Log\uc5d0\uc11c \ub2f9\uc2e0\uc758 \uc131\uc7a5 \ub370\uc774\ud130\ub97c \ub2e4\uc2dc \uc2dc\uc791\ud574 \ubcf4\uc138\uc694."]}),(0,yo.jsxs)(Ju.BulletList,{children:[(0,yo.jsx)(Ju.BulletItem,{children:"\uc2e4\ud328 \uacbd\ud5d8 \uae30\ub85d \ubc0f \ubcf5\uae30"}),(0,yo.jsx)(Ju.BulletItem,{children:"\ucee4\ubba4\ub2c8\ud2f0 \uae30\ubc18 \uc778\uc0ac\uc774\ud2b8 \uacf5\uc720"}),(0,yo.jsx)(Ju.BulletItem,{children:"\uc131\uc7a5 \uc5f0\ub300\uae30 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad00\ub9ac"})]})]}),(0,yo.jsx)(Ju.RightPanel,{children:(0,yo.jsx)(Ju.Card,{children:(0,yo.jsx)(Bi,{})})})]}),eh={};eh.Title=on.h2`
  ${Za}
  color: ${Gu};
  margin-bottom: 8px;
`,eh.Subtitle=on.p`
  ${sl}
  color: ${Zu};
  margin-bottom: 24px;
`,eh.AgreementBox=on.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`,eh.AgreementAll=on.label`
  display: flex;
  align-items: center;
  gap: 10px;
  ${il}
  color: ${Gu};
  cursor: pointer;
`,eh.Separator=on.hr`
  border: none;
  border-top: 1px solid ${_u};
`,eh.AgreementRow=on.div`
  display: flex;
  align-items: ${e=>{let{$column:t}=e;return t?"flex-start":"center"}};
  flex-direction: ${e=>{let{$column:t}=e;return t?"column":"row"}};
  gap: 4px;
`,eh.AgreementRowInner=on.div`
  display: flex;
  align-items: center;
  width: 100%;
`,eh.AgreementLabel=on.span`
  flex: 1;
  ${sl}
  color: #444;
`,eh.Required=on.span`
  ${ul}
  color: ${Hu};
`,eh.Optional=on.span`
  ${ul}
  color: ${Zu};
`,eh.Arrow=on.span`
  color: ${Qu};
  font-size: 18px;
  cursor: pointer;
  padding: 2px 4px;

  &:hover {
    color: ${Hu};
  }
`,eh.AgreementDesc=on.p`
  ${fl}
  color: ${Zu};
  padding-left: 28px;
`,eh.Checkbox=on.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  accent-color: ${Hu};
  cursor: pointer;
  flex-shrink: 0;
`,eh.OrDivider=on.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
`,eh.OrLine=on.div`
  flex: 1;
  height: 1px;
  background: ${_u};
`,eh.OrText=on.span`
  ${ul}
  color: ${Zu};
`,eh.SocialButton=on.button`
  width: 100%;
  padding: 13px 16px;
  background: ${Wu};
  border: 1px solid ${Yu};
  border-radius: 8px;
  ${sl}
  color: ${Gu};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  &:hover {
    background: ${_u};
  }
`,eh.SocialIcon=on.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${e=>{let{$bg:t}=e;return t}};
  color: ${e=>{let{$color:t}=e;return t}};
  border: ${e=>{let{$border:t}=e;return t||"none"}};
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`,eh.PrimaryButton=on.button`
  width: 100%;
  padding: 15px;
  background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":Hu}};
  color: ${Wu};
  ${il}
  border: none;
  border-radius: 8px;
  cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
  margin-top: 16px;
  margin-bottom: 16px;

  &:hover {
    background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":"#9333ea"}};
  }
`,eh.FieldLabel=on.p`
  ${ll}
  color: #444;
  margin-bottom: 6px;
`,eh.Input=on.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${Yu};
  border-radius: 8px;
  ${sl}
  color: ${Gu};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${Qu};
  }

  &:focus {
    border-color: ${Hu};
  }

  &:disabled {
    background: ${_u};
    color: ${Zu};
  }
`,eh.InputRow=on.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  margin-bottom: 12px;
`,eh.InputWithTimer=on.div`
  flex: 1;
  position: relative;
`,eh.Timer=on.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  ${ll}
  color: ${Hu};
`,eh.SmallButton=on.button`
  padding: 13px 14px;
  background: ${e=>{let{$verified:t}=e;return t?Yu:Hu}};
  color: ${e=>{let{$verified:t}=e;return t?Zu:Wu}};
  border: none;
  border-radius: 8px;
  ${ll}
  cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
  white-space: nowrap;
`,eh.ValidationMsg=on.p`
  ${ul}
  color: ${Mu};
  margin-top: 4px;
`,eh.HintMsg=on.p`
  ${ul}
  color: ${Zu};
  margin-top: 4px;
`,eh.BottomLink=on.p`
  text-align: center;
  ${sl}
  color: ${Zu};
  margin-bottom: 12px;
`,eh.PurpleLink=on(oo)`
  color: ${Hu};
  font-weight: 600;
  text-decoration: none;
`,eh.Copyright=on.p`
  text-align: center;
  ${fl}
  color: ${Qu};
`,eh.SuccessBox=on.div`
  ${Pa}
  gap: 32px;
  padding: 20px 0;
`,eh.SuccessText=on.p`
  ${tl}
  color: ${Gu};
  text-align: center;
`;const th=eh,nh={};nh.Overlay=on.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,nh.ModalCard=on.div`
  background: ${Wu};
  border-radius: 16px;
  padding: 40px 36px 32px;
  width: 90%;
  max-width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
`,nh.ModalTitle=on.h2`
  ${el}
  color: ${Gu};
  margin-bottom: 6px;
`,nh.ModalSubtitle=on.p`
  ${sl}
  color: ${Zu};
  margin-bottom: 16px;
`,nh.ContentBox=on.div`
  flex: 1;
  overflow-y: auto;
  border: 1px solid ${Yu};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  ${sl}
  color: #444;
  line-height: 1.8;

  ol, ul {
    padding-left: 18px;
    margin: 4px 0;
  }

  li {
    margin-bottom: 4px;
  }
`,nh.Section=on.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,nh.SectionTitle=on.p`
  ${ll}
  color: ${Gu};
`,nh.Article=on.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,nh.ArticleTitle=on.p`
  ${ll}
  color: ${Gu};
`,nh.ConfirmButton=on.button`
  width: 100%;
  padding: 15px;
  background: ${Hu};
  color: ${Wu};
  ${il}
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    background: #9333ea;
  }
`,nh.Copyright=on.p`
  text-align: center;
  ${fl}
  color: ${Qu};
`;const rh=nh,ih={terms:{title:"[\ud544\uc218] \uc774\uc6a9\uc57d\uad00 \ubc0f \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68 \ub3d9\uc758",subtitle:"Fail Log \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub2e4\uc74c \uc57d\uad00\uc5d0 \ub3d9\uc758\ud558\uc154\uc57c \ud569\ub2c8\ub2e4.",content:(0,yo.jsxs)(rh.Section,{children:[(0,yo.jsx)(rh.SectionTitle,{children:"1. \uc774\uc6a9\uc57d\uad00"}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"\uc81c1\uc870 (\ubaa9\uc801)"}),(0,yo.jsx)("p",{children:'\ubcf8 \uc57d\uad00\uc740 FailLog(\uc774\ud558 "\uc11c\ube44\uc2a4")\uac00 \uc81c\uacf5\ud558\ub294 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\uc758 \uc774\uc6a9 \uc870\uac74 \ubc0f \uc808\ucc28, \uc774\uc6a9\uc790\uc640 \uc11c\ube44\uc2a4 \uc6b4\uc601\uc790\uc758 \uad8c\ub9ac, \uc758\ubb34 \ubc0f \ucc45\uc784 \uc0ac\ud56d\uc744 \uaddc\uc815\ud568\uc744 \ubaa9\uc801\uc73c\ub85c \ud569\ub2c8\ub2e4.'})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"\uc81c2\uc870 (\uc6a9\uc5b4\uc758 \uc815\uc758)"}),(0,yo.jsxs)("ol",{children:[(0,yo.jsx)("li",{children:'"\uc774\uc6a9\uc790"\ub780 \uc11c\ube44\uc2a4\uc5d0 \uc811\uc18d\ud558\uc5ec \ubcf8 \uc57d\uad00\uc5d0 \ub530\ub77c \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\ub294 \ud68c\uc6d0 \ubc0f \ube44\ud68c\uc6d0\uc744 \ub9d0\ud569\ub2c8\ub2e4.'}),(0,yo.jsx)("li",{children:'"\uc2e4\ud328 \ub85c\uadf8(Fail Log)"\ub780 \uc774\uc6a9\uc790\uac00 \uc11c\ube44\uc2a4 \ub0b4\uc5d0 \uc791\uc131\ud55c \uc2e4\ud328 \uc0ac\ub840, \uc6d0\uc778 \ubd84\uc11d, \ud53c\ub4dc\ubc31 \ub4f1\uc758 \uac8c\uc2dc\ubb3c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.'})]})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"\uc81c3\uc870 (\uc11c\ube44\uc2a4\uc758 \uc81c\uacf5 \ubc0f \ubcc0\uacbd)"}),(0,yo.jsxs)("ol",{children:[(0,yo.jsx)("li",{children:"\ubcf8 \uc11c\ube44\uc2a4\ub294 \uc774\uc6a9\uc790\uc758 \uc758\uc0ac\uacb0\uc815 \ubd84\uc11d \ubc0f \uc2e4\ud328 \uc790\uc0b0\ud654\ub97c \ub3d5\ub294 \ud234\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),(0,yo.jsx)("li",{children:"\uc11c\ube44\uc2a4\ub294 \uc6b4\uc601\uc0c1, \uae30\uc220\uc0c1\uc758 \ud544\uc694\uc5d0 \ub530\ub77c \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4\uc758 \uc77c\ubd80 \ub610\ub294 \uc804\ubd80\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"\uc81c4\uc870 (\uac8c\uc2dc\ubb3c\uc758 \uad8c\ub9ac\uc640 \ucc45\uc784)"}),(0,yo.jsxs)("ol",{children:[(0,yo.jsx)("li",{children:"\uc774\uc6a9\uc790\uac00 \uc791\uc131\ud55c '\uc2e4\ud328 \ub85c\uadf8' \ubc0f \uac8c\uc2dc\ubb3c\uc5d0 \ub300\ud55c \uc800\uc791\uad8c\uc740 \uc791\uc131\uc790 \ubcf8\uc778\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."}),(0,yo.jsx)("li",{children:"FailLog\ub294 \uc774\uc6a9\uc790\uac00 \uc791\uc131\ud55c \ub0b4\uc6a9\uc744 \uc11c\ube44\uc2a4\uc758 \uac1c\uc120 \ubc0f \ud1b5\uacc4\uc801 \ubd84\uc11d\uc744 \uc704\ud574 \uc775\uba85\ud654\ud558\uc5ec \ud65c\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"\uc81c5\uc870 (\uba74\ucc45 \uc870\ud56d)"}),(0,yo.jsx)("p",{children:"\uc11c\ube44\uc2a4\ub294 \ucc9c\uc7ac\uc9c0\ubcc0, \ubd88\uac00\ud56d\ub825\uc801 \uc0ac\uc720\ub85c \uc778\ud55c \uc11c\ube44\uc2a4 \uc911\ub2e8\uc5d0 \ub300\ud574 \ucc45\uc784\uc744 \uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})]})]})},marketing:{title:"[\uc120\ud0dd] \uac1c\uc778\uc815\ubcf4 \ub9c8\ucf00\ud305 \ud65c\uc6a9 \ub3d9\uc758",subtitle:"Fail Log \uc11c\ube44\uc2a4\uc758 \ubc1c\uc804\uc744 \uc704\ud574 \ub2e4\uc74c \uc57d\uad00\uc5d0 \ub3d9\uc758 \ubc14\ub78d\ub2c8\ub2e4.",content:(0,yo.jsxs)(rh.Section,{children:[(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"1. \uc218\uc9d1 \ubc0f \uc774\uc6a9 \ubaa9\uc801"}),(0,yo.jsxs)("ul",{children:[(0,yo.jsx)("li",{children:"\uac1c\uc778 \ub9de\ucda4\ud615 \uc11c\ube44\uc2a4 \uc81c\uacf5: \uc0ac\uc6a9\uc790\uc758 \uc2e4\ud328 \uae30\ub85d \ud328\ud134\uc744 \ubd84\uc11d\ud558\uc5ec \ub9de\ucda4\ud615 \uc778\uc0ac\uc774\ud2b8 \ubc0f \ubd84\uc11d \ub9ac\ud3ec\ud2b8 \ubc1c\uc1a1"}),(0,yo.jsx)("li",{children:"\ud61c\ud0dd \ubc0f \uc774\ubca4\ud2b8 \uc815\ubcf4 \uc548\ub0b4: FailLog\uc758 \uc2e0\uaddc \uae30\ub2a5 \uc5c5\ub370\uc774\ud2b8, \uc720\ub8cc \ud50c\ub79c \ud504\ub85c\ubaa8\uc158, \uc774\ubca4\ud2b8 \uc815\ubcf4 \uc548\ub0b4 (\uc774\uba54\uc77c, \uc571 \ud478\uc2dc \ub4f1)"}),(0,yo.jsx)("li",{children:"\uc11c\ube44\uc2a4 \uac1c\uc120 \ubc0f \ud1b5\uacc4: \uc2e0\uaddc \uc11c\ube44\uc2a4 \uac1c\ubc1c \ubc0f \uc778\uad6c\ud1b5\uacc4\ud559\uc801 \ud2b9\uc131\uc5d0 \ub530\ub978 \uc11c\ube44\uc2a4 \ucd5c\uc801\ud654"})]})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"2. \uc218\uc9d1 \ud56d\ubaa9"}),(0,yo.jsx)("ul",{children:(0,yo.jsx)("li",{children:"\uc774\uba54\uc77c \uc8fc\uc18c, \uc11c\ube44\uc2a4 \uc774\uc6a9 \uae30\ub85d, \uc811\uc18d \ube48\ub3c4, \ub2c9\ub124\uc784"})})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"3. \ubcf4\uc720 \ubc0f \uc774\uc6a9 \uae30\uac04"}),(0,yo.jsx)("ul",{children:(0,yo.jsx)("li",{children:"\ud68c\uc6d0 \ud0c8\ud1f4 \uc2dc \ub610\ub294 \ub3d9\uc758 \ucca0\ud68c \uc2dc\uae4c\uc9c0 (\ub2e8, \uad00\ub828 \ubc95\ub839\uc5d0 \ub530\ub77c \ubcf4\uc874\uc774 \ud544\uc694\ud55c \uacbd\uc6b0 \ud574\ub2f9 \ubc95\ub839\uc774 \uc815\ud55c \uae30\uac04\uae4c\uc9c0 \ubcf4\uad00)"})})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"4. \ub3d9\uc758 \uac70\ubd80 \uad8c\ub9ac \ubc0f \ubd88\uc774\uc775"}),(0,yo.jsxs)("ul",{children:[(0,yo.jsx)("li",{children:"\uadc0\ud558\ub294 \ubcf8 \uac1c\uc778\uc815\ubcf4 \ub9c8\ucf00\ud305 \ud65c\uc6a9 \ub3d9\uc758\ub97c \uac70\ubd80\ud560 \uad8c\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),(0,yo.jsx)("li",{children:"\uac70\ubd80 \uc2dc\uc5d0\ub3c4 FailLog\uc758 \uae30\ubcf8 \uc11c\ube44\uc2a4 \uc774\uc6a9\uc740 \ub3d9\uc77c\ud558\uac8c \uac00\ub2a5\ud558\ub098, \ub9de\ucda4\ud615 \ubd84\uc11d \ub9ac\ud3ec\ud2b8\ub098 \ud504\ub85c\ubaa8\uc158 \ud61c\ud0dd \uc548\ub0b4 \ub4f1\uc774 \uc81c\ud55c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]})},notification:{title:"[\uc120\ud0dd] \ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0 \ub3d9\uc758",subtitle:"Fail Log \uc11c\ube44\uc2a4\uc758 \ubc1c\uc804\uc744 \uc704\ud574 \ub2e4\uc74c \uc57d\uad00\uc5d0 \ub3d9\uc758 \ubc14\ub78d\ub2c8\ub2e4.",content:(0,yo.jsxs)(rh.Section,{children:[(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"1. \uc218\uc2e0 \ub3d9\uc758\uc758 \ubaa9\uc801"}),(0,yo.jsxs)("ul",{children:[(0,yo.jsx)("li",{children:"\ub9de\ucda4\ud615 \ubd84\uc11d \uc54c\ub9bc: \uc0ac\uc6a9\uc790\uc758 \uc2e4\ud328 \uae30\ub85d\uc744 \ubc14\ud0d5\uc73c\ub85c \ud55c \uc8fc\uac04/\uc6d4\uac04 \ubd84\uc11d \ub9ac\ud3ec\ud2b8 \ubc0f \uc778\uc0ac\uc774\ud2b8 \uc81c\uacf5"}),(0,yo.jsx)("li",{children:"\uc11c\ube44\uc2a4 \ud61c\ud0dd \uc548\ub0b4: \uc2e0\uaddc \uae30\ub2a5 \ucd9c\uc2dc, \uc774\ubca4\ud2b8, \ud504\ub85c\ubaa8\uc158(\ud560\uc778 \ucfe0\ud3f0 \ub4f1) \uc815\ubcf4 \uc548\ub0b4"}),(0,yo.jsx)("li",{children:"\ucf58\ud150\uce20 \uc81c\uacf5: \uc2e4\ud328\ub97c \uc790\uc2e0\uc73c\ub85c \ub9cc\ub4dc\ub294 \ubc95 \ub4f1 \uc11c\ube44\uc2a4 \uad00\ub828 \uc720\uc6a9\ud55c \ud301 \uacf5\uc720"})]})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"2. \uc218\uc9d1\ud558\ub294 \uac1c\uc778\uc815\ubcf4 \ud56d\ubaa9"}),(0,yo.jsx)("ul",{children:(0,yo.jsx)("li",{children:"\uc774\uba54\uc77c, \uc11c\ube44\uc2a4 \ub0b4 \uc54c\ub9bc(Push), \ub2c9\ub124\uc784"})})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"3. \uc804\uc1a1 \ubc29\ubc95"}),(0,yo.jsx)("ul",{children:(0,yo.jsx)("li",{children:"\uc774\uba54\uc77c, \uc571 \ud478\uc2dc(Push), \uc54c\ub9bc\ud1a1 \ub4f1"})})]}),(0,yo.jsxs)(rh.Article,{children:[(0,yo.jsx)(rh.ArticleTitle,{children:"4. \ub3d9\uc758 \ucca0\ud68c \ubc0f \ubd88\uc774\uc775"}),(0,yo.jsxs)("ul",{children:[(0,yo.jsx)("li",{children:"\uadc0\ud558\ub294 \ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0 \ub3d9\uc758\ub97c \uc5b8\uc81c\ub4e0\uc9c0 \uc11c\ube44\uc2a4 \ub0b4 [\uc124\uc815 > \uc54c\ub9bc \uc124\uc815] \uba54\ub274\uc5d0\uc11c \ucca0\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,yo.jsx)("li",{children:"\uc218\uc2e0\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\uc73c\uc154\ub3c4 FailLog\uc758 \uae30\ubcf8 \uc11c\ube44\uc2a4 \uc774\uc6a9\uc5d0\ub294 \uc81c\ud55c\uc774 \uc5c6\uc73c\ub098, \ub9de\ucda4\ud615 \ub9ac\ud3ec\ud2b8 \ubc0f \uc720\uc6a9\ud55c \ud61c\ud0dd \uc548\ub0b4\ub97c \ubc1b\uc73c\uc2e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]})]})]})}},oh=e=>{let{type:t,onClose:n}=e;const r=ih[t];return r?(0,yo.jsx)(rh.Overlay,{onClick:n,children:(0,yo.jsxs)(rh.ModalCard,{onClick:e=>e.stopPropagation(),children:[(0,yo.jsx)(rh.ModalTitle,{children:r.title}),(0,yo.jsx)(rh.ModalSubtitle,{children:r.subtitle}),(0,yo.jsx)(rh.ContentBox,{children:r.content}),(0,yo.jsx)(rh.ConfirmButton,{onClick:n,children:"\ud655\uc778"}),(0,yo.jsx)(rh.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})}):null},ah=300,lh=()=>{const e=wi(),[t,n]=(0,r.useState)(1),[i,o]=(0,r.useState)(null),[a,l]=(0,r.useState)({all:!1,terms:!1,marketing:!1,notification:!1}),[s,c]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[h,p]=(0,r.useState)(!1),[f,g]=(0,r.useState)(!1),[m,x]=(0,r.useState)(ah),b=(0,r.useRef)(null),[v,y]=(0,r.useState)(""),[w,E]=(0,r.useState)(""),[j,S]=(0,r.useState)(""),[T,A]=(0,r.useState)(""),[k,C]=(0,r.useState)(""),[L,$]=(0,r.useState)(""),[I,P]=(0,r.useState)(!1),[F,R]=(0,r.useState)(!1),[O,N]=(0,r.useState)(ah),z=(0,r.useRef)(null);(0,r.useEffect)(()=>()=>{clearInterval(b.current),clearInterval(z.current)},[]);const D=e=>`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`,B=(e,t)=>{const n={...a,[e]:t};n.all=n.terms&&n.marketing&&n.notification,l(n)};return 1===t?(0,yo.jsxs)(yo.Fragment,{children:[i&&(0,yo.jsx)(oh,{type:i,onClose:()=>o(null)}),(0,yo.jsx)(th.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,yo.jsx)(th.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,yo.jsxs)(th.AgreementBox,{children:[(0,yo.jsxs)(th.AgreementAll,{children:[(0,yo.jsx)(th.Checkbox,{type:"checkbox",checked:a.all,onChange:e=>{return t=e.target.checked,void l({all:t,terms:t,marketing:t,notification:t});var t}}),(0,yo.jsx)("span",{children:"\uc804\uccb4 \ub3d9\uc758\ud558\uae30"})]}),(0,yo.jsx)(th.Separator,{}),(0,yo.jsxs)(th.AgreementRow,{children:[(0,yo.jsx)(th.Checkbox,{type:"checkbox",checked:a.terms,onChange:e=>B("terms",e.target.checked)}),(0,yo.jsxs)(th.AgreementLabel,{children:["\uc774\uc6a9\uc57d\uad00 \ubc0f \uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68 \ub3d9\uc758 ",(0,yo.jsx)(th.Required,{children:"(\ud544\uc218)"})]}),(0,yo.jsx)(th.Arrow,{onClick:()=>o("terms"),children:"\u203a"})]}),(0,yo.jsxs)(th.AgreementRow,{children:[(0,yo.jsx)(th.Checkbox,{type:"checkbox",checked:a.marketing,onChange:e=>B("marketing",e.target.checked)}),(0,yo.jsxs)(th.AgreementLabel,{children:["\uac1c\uc778\uc815\ubcf4 \ub9c8\ucf00\ud305 \ud65c\uc6a9 \ub3d9\uc758 ",(0,yo.jsx)(th.Optional,{children:"(\uc120\ud0dd)"})]}),(0,yo.jsx)(th.Arrow,{onClick:()=>o("marketing"),children:"\u203a"})]}),(0,yo.jsxs)(th.AgreementRow,{$column:!0,children:[(0,yo.jsxs)(th.AgreementRowInner,{children:[(0,yo.jsx)(th.Checkbox,{type:"checkbox",checked:a.notification,onChange:e=>B("notification",e.target.checked)}),(0,yo.jsxs)(th.AgreementLabel,{children:["\ub9c8\ucf00\ud305 \uc815\ubcf4 \uc218\uc2e0 \ub3d9\uc758 ",(0,yo.jsx)(th.Optional,{children:"(\uc120\ud0dd)"})]}),(0,yo.jsx)(th.Arrow,{onClick:()=>o("notification"),children:"\u203a"})]}),(0,yo.jsx)(th.AgreementDesc,{children:"\ub9de\ucda4 \ucd94\ucc9c, \ub274\uc2a4\ub808\ud130 \ub4f1 \uc720\uc6a9\ud55c \ud61c\ud0dd\uc744 \uc81c\uacf5\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]}),(0,yo.jsxs)(th.OrDivider,{children:[(0,yo.jsx)(th.OrLine,{}),(0,yo.jsx)(th.OrText,{children:"\ub610\ub294"}),(0,yo.jsx)(th.OrLine,{})]}),(0,yo.jsxs)(th.SocialButton,{children:[(0,yo.jsx)(th.SocialIcon,{$bg:"#fff",$color:"#4285F4",$border:"1.5px solid #ddd",children:"G"}),"\uad6c\uae00\ub85c \ud68c\uc6d0\uac00\uc785"]}),(0,yo.jsxs)(th.SocialButton,{children:[(0,yo.jsx)(th.SocialIcon,{$bg:"#03C75A",$color:"#fff",children:"N"}),"\ub124\uc774\ubc84\ub85c \ud68c\uc6d0\uac00\uc785"]}),(0,yo.jsxs)(th.SocialButton,{children:[(0,yo.jsx)(th.SocialIcon,{$bg:"#FEE500",$color:"#000",children:"K"}),"\uce74\uce74\uc624\ud1a1\uc73c\ub85c \ud68c\uc6d0\uac00\uc785"]}),(0,yo.jsx)(th.PrimaryButton,{onClick:()=>{a.terms&&n(2)},$disabled:!a.terms,children:"Fail Log \uacc4\uc815 \ub9cc\ub4e4\uae30"}),(0,yo.jsxs)(th.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,yo.jsx)(th.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,yo.jsx)(th.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):2===t?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(th.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,yo.jsx)(th.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,yo.jsx)(th.FieldLabel,{children:"\uc774\uba54\uc77c"}),(0,yo.jsxs)(th.InputRow,{children:[(0,yo.jsx)(th.Input,{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:s,onChange:e=>c(e.target.value),disabled:f}),(0,yo.jsx)(th.SmallButton,{onClick:()=>{s&&(p(!0),clearInterval(b.current),x(ah),b.current=setInterval(()=>{x(e=>e<=1?(clearInterval(b.current),0):e-1)},1e3))},disabled:f,children:"\uc774\uba54\uc77c \uc778\uc99d"})]}),h&&(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(th.FieldLabel,{children:"\uc778\uc99d\ubc88\ud638"}),(0,yo.jsxs)(th.InputRow,{children:[(0,yo.jsxs)(th.InputWithTimer,{children:[(0,yo.jsx)(th.Input,{placeholder:"\uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:d,onChange:e=>u(e.target.value),disabled:f}),!f&&(0,yo.jsx)(th.Timer,{children:D(m)})]}),(0,yo.jsx)(th.SmallButton,{onClick:()=>{d&&(g(!0),clearInterval(b.current))},disabled:f,$verified:f,children:f?"\uc778\uc99d \uc644\ub8cc":"\uc778\uc99d \ud655\uc778"})]})]}),(0,yo.jsx)(th.PrimaryButton,{onClick:()=>{f&&n(3)},$disabled:!f,children:"\ub2e4\uc74c \ub2e8\uacc4\ub85c"}),(0,yo.jsxs)(th.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,yo.jsx)(th.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,yo.jsx)(th.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):3===t?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(th.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,yo.jsx)(th.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,yo.jsx)(th.FieldLabel,{children:"\uc774\ub984"}),(0,yo.jsx)(th.Input,{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",value:v,onChange:e=>y(e.target.value)}),v.length>0&&v.length<2&&(0,yo.jsx)(th.ValidationMsg,{children:"\uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,yo.jsx)(th.FieldLabel,{style:{marginTop:16},children:"\ub2c9\ub124\uc784"}),(0,yo.jsx)(th.Input,{placeholder:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud558\uc138\uc694",value:w,onChange:e=>E(e.target.value)}),w.length>0&&w.length<2&&(0,yo.jsx)(th.ValidationMsg,{children:"\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),(0,yo.jsx)(th.PrimaryButton,{onClick:()=>{v.length>=2&&w.length>=2&&n(4)},$disabled:v.length<2||w.length<2,style:{marginTop:24},children:"\ub2e4\uc74c \ub2e8\uacc4\ub85c"}),(0,yo.jsxs)(th.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,yo.jsx)(th.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,yo.jsx)(th.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):4===t?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(th.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,yo.jsx)(th.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,yo.jsx)(th.FieldLabel,{children:"\ube44\ubc00\ubc88\ud638"}),(0,yo.jsx)(th.Input,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:j,onChange:e=>S(e.target.value)}),(0,yo.jsx)(th.HintMsg,{children:"\ubc18\ub4dc\uc2dc \ud2b9\uc218 \ubb38\uc790 \uc774\uc0c1 \uc785\ub825\ud558\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."}),(0,yo.jsx)(th.FieldLabel,{style:{marginTop:16},children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,yo.jsx)(th.Input,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud558\uc138\uc694",value:T,onChange:e=>A(e.target.value)}),T&&j!==T&&(0,yo.jsx)(th.ValidationMsg,{children:"\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,yo.jsx)(th.PrimaryButton,{onClick:()=>{j&&j===T&&n(5)},$disabled:!j||j!==T,style:{marginTop:24},children:"\ub2e4\uc74c \ub2e8\uacc4\ub85c"}),(0,yo.jsxs)(th.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,yo.jsx)(th.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,yo.jsx)(th.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):5===t?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(th.Title,{children:"\ud68c\uc6d0\uac00\uc785"}),(0,yo.jsx)(th.Subtitle,{children:"\uc544\ub798 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uace0 \ud68c\uc6d0\uac00\uc785\uc744 \uc644\ub8cc\ud574 \uc8fc\uc138\uc694."}),(0,yo.jsx)(th.FieldLabel,{children:"\uc804\ud654\ubc88\ud638"}),(0,yo.jsxs)(th.InputRow,{children:[(0,yo.jsx)(th.Input,{type:"tel",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:k,onChange:e=>C(e.target.value),disabled:F}),(0,yo.jsx)(th.SmallButton,{onClick:()=>{k&&(P(!0),clearInterval(z.current),N(ah),z.current=setInterval(()=>{N(e=>e<=1?(clearInterval(z.current),0):e-1)},1e3))},disabled:F,children:"\uc804\ud654\ubc88\ud638 \uc778\uc99d"})]}),I&&(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(th.FieldLabel,{children:"\uc778\uc99d\ubc88\ud638"}),(0,yo.jsxs)(th.InputRow,{children:[(0,yo.jsxs)(th.InputWithTimer,{children:[(0,yo.jsx)(th.Input,{placeholder:"\uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:L,onChange:e=>$(e.target.value),disabled:F}),!F&&(0,yo.jsx)(th.Timer,{children:D(O)})]}),(0,yo.jsx)(th.SmallButton,{onClick:()=>{L&&(R(!0),clearInterval(z.current))},disabled:F,$verified:F,children:F?"\uc778\uc99d \uc644\ub8cc":"\uc778\uc99d \ud655\uc778"})]})]}),(0,yo.jsx)(th.PrimaryButton,{onClick:()=>{n(6)},$disabled:!F,style:{marginTop:8},children:"\ud68c\uc6d0\uac00\uc785"}),(0,yo.jsxs)(th.BottomLink,{children:["\uc774\ubbf8 \uacc4\uc815\uc774 \uc788\uc73c\uc2e0\uac00\uc694? ",(0,yo.jsx)(th.PurpleLink,{to:"/login",children:"\ub85c\uadf8\uc778"})]}),(0,yo.jsx)(th.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]}):(0,yo.jsxs)(th.SuccessBox,{children:[(0,yo.jsxs)(th.SuccessText,{children:["\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4!",(0,yo.jsx)("br",{}),"\ub2f9\uc2e0\ub9cc\uc758 \uc774\uc57c\uae30\ub97c \uc791\uc131\ud574\ubcf4\uc138\uc694!"]}),(0,yo.jsx)(th.PrimaryButton,{onClick:()=>e("/login"),children:"\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c"})]})},sh={};sh.Title=on.h2`
  ${Za}
  color: ${Gu};
  margin-bottom: 8px;
`,sh.Subtitle=on.p`
  ${sl}
  color: ${Zu};
  margin-bottom: 28px;
`,sh.InputGroup=on.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`,sh.Input=on.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${e=>{let{$error:t}=e;return t?Mu:Yu}};
  border-radius: 8px;
  ${sl}
  color: ${Gu};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${Qu};
  }

  &:focus {
    border-color: ${e=>{let{$error:t}=e;return t?Mu:Hu}};
  }
`,sh.ErrorText=on.p`
  ${ul}
  color: ${Mu};
  margin-bottom: 6px;
`,sh.CheckRow=on.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`,sh.CheckLabel=on.label`
  ${ul}
  color: ${Vu};
  cursor: pointer;
`,sh.PrimaryButton=on.button`
  width: 100%;
  padding: 15px;
  background: ${Hu};
  color: ${Wu};
  ${il}
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  opacity: ${e=>{let{disabled:t}=e;return t?.6:1}};

  &:hover {
    background: #9333ea;
  }
`,sh.LinksRow=on.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`,sh.LinkText=on(oo)`
  ${ul}
  color: ${Vu};
  text-decoration: none;

  &:hover {
    color: ${Hu};
  }
`,sh.Divider=on.span`
  ${ul}
  color: ${Qu};
`,sh.SocialIcons=on.div`
  display: flex;
  gap: 6px;
`,sh.SocialIcon=on.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${e=>{let{$bg:t}=e;return t}};
  color: ${e=>{let{$color:t}=e;return t}};
  border: ${e=>{let{$border:t}=e;return t||"none"}};
  ${ul}
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,sh.JoinPrompt=on.p`
  text-align: center;
  ${ul}
  color: ${Zu};
  margin-bottom: 12px;
`,sh.OutlineButton=on.button`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: ${Hu};
  ${ll}
  border: 1.5px solid #d9a8ff;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 24px;

  &:hover {
    background: ${Uu};
  }
`,sh.Copyright=on.p`
  text-align: center;
  ${fl}
  color: ${Qu};
`;const ch=sh,dh=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,uh=/^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/,hh=()=>{const e=wi(),{setUser:t,setIsAuthenticated:n}=vo(),[i,o]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)({}),[h,p]=(0,r.useState)(!1);return(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(ch.Title,{children:"\ub85c\uadf8\uc778"}),(0,yo.jsx)(ch.Subtitle,{children:"\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uc138\uc694."}),(0,yo.jsxs)(ch.InputGroup,{children:[(0,yo.jsx)(ch.Input,{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:i,onChange:e=>o(e.target.value),$error:!!d.memberEmail}),d.memberEmail&&(0,yo.jsx)(ch.ErrorText,{children:d.memberEmail}),(0,yo.jsx)(ch.Input,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:a,onChange:e=>l(e.target.value),$error:!!d.memberPassword}),d.memberPassword&&(0,yo.jsx)(ch.ErrorText,{children:d.memberPassword})]}),(0,yo.jsxs)(ch.CheckRow,{children:[(0,yo.jsx)("input",{type:"checkbox",id:"keepLogin",checked:s,onChange:e=>c(e.target.checked)}),(0,yo.jsx)(ch.CheckLabel,{htmlFor:"keepLogin",children:"\ub85c\uadf8\uc778 \uc0c1\ud0dc \uc720\uc9c0"})]}),(0,yo.jsx)(ch.PrimaryButton,{onClick:async()=>{const r=(()=>{const e={};return i?dh.test(i)||(e.memberEmail="\uc774\uba54\uc77c \uc591\uc2dd\uc5d0 \ub9de\uac8c \uc785\ub825\ud574\uc8fc\uc138\uc694."):e.memberEmail="\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.",a?uh.test(a)||(e.memberPassword="\uc18c\ubb38\uc790, \uc22b\uc790, \ud2b9\uc218\ubb38\uc790(!@#)\ub97c \uac01 \ud558\ub098\uc529 \ud3ec\ud568\ud55c 8\uc790\ub9ac \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4."):e.memberPassword="\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",e})();if(u(r),!(Object.keys(r).length>0)){p(!0);try{const r=await fetch("http://localhost:10000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({memberEmail:i,memberPassword:a})});if(!r.ok){const e=await r.json();throw new Error(null===e||void 0===e?void 0:e.message)}const o=await fetch("http://localhost:10000/api/members/me",{credentials:"include"});if(!o.ok)throw new Error("Access Token Expired");const{success:l,data:s}=await o.json();l&&(t(s),n(!0),e("/"))}catch(o){alert(o.message)}finally{p(!1)}}},disabled:h,children:"\ub85c\uadf8\uc778"}),(0,yo.jsxs)(ch.LinksRow,{children:[(0,yo.jsx)(ch.LinkText,{to:"/find-id",children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,yo.jsx)(ch.Divider,{children:"|"}),(0,yo.jsx)(ch.LinkText,{to:"/reset-password",children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"}),(0,yo.jsx)(ch.Divider,{children:"|"}),(0,yo.jsxs)(ch.SocialIcons,{children:[(0,yo.jsx)(ch.SocialIcon,{$bg:"#FEE500",$color:"#000",onClick:()=>{window.location.href="http://localhost:10000/oauth2/authorization/kakao"},children:"K"}),(0,yo.jsx)(ch.SocialIcon,{$bg:"#fff",$color:"#4285F4",$border:"1px solid #ddd",onClick:()=>{window.location.href="http://localhost:10000/oauth2/authorization/google"},children:"G"}),(0,yo.jsx)(ch.SocialIcon,{$bg:"#03C75A",$color:"#fff",onClick:()=>{window.location.href="http://localhost:10000/oauth2/authorization/naver"},children:"N"})]})]}),(0,yo.jsx)(ch.JoinPrompt,{children:"\uc544\uc9c1 \uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0\uac00\uc694?"}),(0,yo.jsx)(ch.OutlineButton,{onClick:()=>e("/join"),children:"\ud68c\uc6d0\uac00\uc785"}),(0,yo.jsx)(ch.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})},ph=()=>(0,yo.jsx)(hh,{}),fh={};fh.Title=on.h2`
  ${Za}
  color: ${Gu};
  margin-bottom: 8px;
`,fh.Subtitle=on.p`
  ${sl}
  color: ${Zu};
  margin-bottom: 24px;
`,fh.FieldLabel=on.p`
  ${ll}
  color: #444;
  margin-bottom: 6px;
`,fh.Input=on.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${Yu};
  border-radius: 8px;
  ${sl}
  color: ${Gu};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${Qu};
  }

  &:focus {
    border-color: ${Hu};
  }
`,fh.HintBox=on.div`
  padding: 16px;
  background: ${Uu};
  border-radius: 8px;
  ${sl}
  color: ${Vu};
  text-align: center;
`,fh.HintValue=on.span`
  ${ll}
  color: ${Hu};
`,fh.PrimaryButton=on.button`
  width: 100%;
  padding: 15px;
  background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":Hu}};
  color: ${Wu};
  ${il}
  border: none;
  border-radius: 8px;
  cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
  margin-bottom: 16px;

  &:hover {
    background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":"#9333ea"}};
  }
`,fh.Copyright=on.p`
  text-align: center;
  ${fl}
  color: ${Qu};
  margin-top: 8px;
`;const gh=fh,mh=()=>{const e=wi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(null);return i?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(gh.Title,{children:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"}),(0,yo.jsx)(gh.Subtitle,{children:"\ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud558\uc138\uc694."}),(0,yo.jsxs)(gh.HintBox,{children:["\uace0\uac1d\ub2d8\uc758 \ube44\ubc00\ubc88\ud638\ub294 : ",(0,yo.jsx)(gh.HintValue,{children:i}),"\uc785\ub2c8\ub2e4."]}),(0,yo.jsx)(gh.PrimaryButton,{onClick:()=>e("/login"),style:{marginTop:24},children:"\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c"})]}):(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(gh.Title,{children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"}),(0,yo.jsx)(gh.Subtitle,{children:"\uac00\uc785\ud55c \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud574 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud558\uc138\uc694."}),(0,yo.jsx)(gh.FieldLabel,{children:"\uc774\uba54\uc77c"}),(0,yo.jsx)(gh.Input,{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:t,onChange:e=>n(e.target.value)}),(0,yo.jsx)(gh.PrimaryButton,{onClick:()=>{o("Se**put**790")},$disabled:!t,style:{marginTop:24},children:"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"}),(0,yo.jsx)(gh.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})},xh={};xh.Title=on.h2`
  ${Za}
  color: ${Gu};
  margin-bottom: 8px;
`,xh.Subtitle=on.p`
  ${sl}
  color: ${Zu};
  margin-bottom: 24px;
`,xh.FieldLabel=on.p`
  ${ll}
  color: #444;
  margin-bottom: 6px;
`,xh.Input=on.input`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${Yu};
  border-radius: 8px;
  ${sl}
  color: ${Gu};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${Qu};
  }

  &:focus {
    border-color: ${Hu};
  }
`,xh.ResultBox=on.div`
  margin-top: 24px;
  padding: 16px;
  background: ${Uu};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`,xh.ResultLabel=on.span`
  ${sl}
  color: ${Vu};
`,xh.ResultValue=on.span`
  ${il}
  color: ${Hu};
`,xh.PrimaryButton=on.button`
  width: 100%;
  padding: 15px;
  background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":Hu}};
  color: ${Wu};
  ${il}
  border: none;
  border-radius: 8px;
  cursor: ${e=>{let{$disabled:t}=e;return t?"not-allowed":"pointer"}};
  margin-bottom: 16px;

  &:hover {
    background: ${e=>{let{$disabled:t}=e;return t?"#d8a8ff":"#9333ea"}};
  }
`,xh.Copyright=on.p`
  text-align: center;
  ${fl}
  color: ${Qu};
  margin-top: 8px;
`;const bh=xh,vh=()=>{const e=wi(),[t,n]=(0,r.useState)(""),[i,o]=(0,r.useState)(""),[a,l]=(0,r.useState)(null);return(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(bh.Title,{children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,yo.jsx)(bh.Subtitle,{children:"\uc774\ub984\uacfc \uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc544\uc774\ub514\ub97c \ucc3e\uc73c\uc138\uc694."}),(0,yo.jsx)(bh.FieldLabel,{children:"\uc774\ub984"}),(0,yo.jsx)(bh.Input,{placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",value:t,onChange:e=>n(e.target.value)}),(0,yo.jsx)(bh.FieldLabel,{style:{marginTop:16},children:"\uc804\ud654\ubc88\ud638"}),(0,yo.jsx)(bh.Input,{type:"tel",placeholder:"\uc804\ud654\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",value:i,onChange:e=>o(e.target.value)}),a&&(0,yo.jsxs)(bh.ResultBox,{children:[(0,yo.jsx)(bh.ResultLabel,{children:"\uace0\uac1d\ub2d8\uc758 \uc544\uc774\ub514\ub294"}),(0,yo.jsx)(bh.ResultValue,{children:a}),(0,yo.jsx)(bh.ResultLabel,{children:"\uc785\ub2c8\ub2e4."})]}),a?(0,yo.jsx)(bh.PrimaryButton,{onClick:()=>e("/login"),style:{marginTop:24},children:"\ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c"}):(0,yo.jsx)(bh.PrimaryButton,{onClick:()=>{l("user****@example.com")},$disabled:!t||!i,style:{marginTop:24},children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,yo.jsx)(bh.Copyright,{children:"\xa9 FAIL LOG. ALL RIGHTS RESERVED."})]})};const yh={};yh.MainWrapper=on.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: #ffffff;
  
  /* 반응형 대응: 화면이 작아질 때 좌우 여백 확보 */
  @media (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`,yh.SectionDivider=on.div`
  margin-bottom: 60px;
  width: 100%;
`;const wh=yh,Eh={};Eh.InfoManagementSection=on.section`
  padding: 60px 20px;
  max-width: 1200px; /* 전체 중앙 정렬을 위해 추가 */
  margin: 0 auto;

.info-header {
    margin-bottom: 40px; 
    
    h2 {
      font-size: 45px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 24px;
      color: #64748B;
      font-weight: 400;
    }
  }
`,Eh.TopCardGrid=on.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 1:1:1 비율로 3개 배치 */
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* 모바일/태블릿에선 세로로 나열 */
  }
`,Eh.BottomAccountArea=on.div`
  width: 100%;
`,Eh.AccountDataCard=on.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  /* 상단 카드들과의 독립성을 위해 margin-top 제거하거나 조정 */
`,Eh.ProfileCard=on.div`
  background: #ffffff;
  border-radius: 24px; /* 좀 더 둥글게 */
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #F1F5F9; /* 기획안처럼 얇은 테두리 추가 */
  height: 100%; /* 그리드 높이 통일 */

  .profileImageContainer {
    position: relative;
    margin-bottom: 30px;
  }

  .profileImageCircle { 
    width: 140px; /* 기획안 비율에 맞춰 조금 키움 */
    height: 140px; 
    border-radius: 50%; 
    overflow: hidden;
    border: 4px solid #F0F3FF;
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  /* 닉네임 영역 강조 */
  .nickname-area {
    width: 100%;
    text-align: center;
    .nickname-display {
      font-size: 24px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 10px;
    }
  }

  .profile-card-footer-text {
    font-size: 13px;
    color: #94A3B8;
    margin-top: 20px;
  }
`,Eh.AccountItem=on.div`
  display: grid;
  grid-template-columns: 140px 1fr 100px; /* 라벨 너비 살짝 조정 */
  align-items: center; /* 텍스트 중앙 정렬 */
  padding: 25px 0;
  border-bottom: 1px solid #f1f1f1;
  &:last-child { border-bottom: none; }

  .ItemLabel { font-size: 15px; font-weight: 700; color: #64748B; }
  .ItemContent { 
    padding-left: 20px;
    .EmailText, .UserInfoText { font-size: 16px; font-weight: 700; color: #1E293B; }
    .StatusBadge { 
      background: #7E3AF2; 
      color: white; 
      padding: 4px 12px; 
      border-radius: 6px; 
      font-size: 12px; 
      margin-right: 10px;
    }
  }
  .ItemBtn { 
    background: #F8FAFC; 
    border: 1px solid #E2E8F0;
    padding: 6px 12px;
    border-radius: 8px;
    color: #64748B; 
    cursor: pointer; 
    font-size: 13px;
    transition: all 0.2s;
    &:hover { background: #F1F5F9; color: #1E293B; }
  }
`;const jh=Eh,Sh={};Sh.CommunitySection=on.div` padding: 0 20px 50px; border-top: 1px solid #f5f5f5; margin-top: 40px; `,Sh.PostGrid=on.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Sh.CardWrapper=on.div`
  border: 1px solid ${e=>e.isSelected?"#8b5cf6":"#eee"};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: all 0.2s ease;
  &:hover { transform: translateY(-4px); }
`,Sh.EmptyStateWrapper=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`,Sh.EmptyTitle=on.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  color: #1e293b;
  margin-bottom: 10px;
  strong {
    color: #5d5fef;
  }
`,Sh.EmptySubText=on.p`
  font-size: 16px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
`,Sh.StartButton=on.button`
  background: #5d5fef;
  color: white;
  padding: 12px 40px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  &:hover {
    background: #4a4cd9;
  }
`;const Th=Sh,Ah={};Ah.MyPageWrapper=on.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 80px;
  background-color: #ffffff;
`,Ah.HeroSectionContainer=on.section`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
`,Ah.HeroGrid=on.div`
  display: grid;
  grid-template-columns: 648px 424px; 
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`,Ah.HeroBanner=on.div`
  width: 648px;
  height: 730px;
  background-color: #E8EBFD;
  border-radius: 30px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  .TextGroup {
    h3 { font-size: 18px; color: #5D5FEF; margin-bottom: 8px; font-weight: 600; }
    h2 { font-size: 40px; font-weight: 800; color: #2D3494; margin-bottom: 12px; }
    p { font-size: 18px; color: #4B5563; font-weight: 500; }
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    aspect-ratio: 648 / 730;
  }
`,Ah.GraphicPlaceholder=on.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  .Box { aspect-ratio: 1; background: rgba(255, 255, 255, 0.5); border-radius: 15px; }
`,Ah.QuickMenuGroup=on.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`,Ah.QuickCard=on.div`
  width: 424px;
  height: 236px;
  background-color: ${e=>e.bgColor||"#F1F5F9"};
  border-radius: 24px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;

  .CardText {
    h3 { font-size: 14px; color: #4B5563; margin-bottom: 4px; }
    h2 { font-size: 22px; font-weight: 800; color: #1E293B; margin-bottom: 8px; }
    span { font-size: 14px; color: #64748B; line-height: 1.4; }
  }

  .IconCircle {
    position: absolute;
    right: 25px;
    width: 65px;
    height: 65px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  @media (max-width: 1100px) {
    width: 100%;
    height: auto;
    aspect-ratio: 424 / 236;
  }
`,Ah.InfoManagementSection=on.section` 
  padding: 40px 20px; 
`,Ah.InfoGridContainer=on.div` 
  display: grid; 
  grid-template-columns: 1fr 2fr; 
  gap: 30px; 

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,Ah.AccountDataCard=on.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 50px; 
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
`,Ah.AccountList=on.div`
  display: flex;
  flex-direction: column;
`,Ah.AccountItem=on.div`
  display: grid;
  /* 버튼이 가장 오른쪽 끝에 붙도록 1fr 할당 */
  grid-template-columns: 120px 1fr 100px; 
  align-items: flex-start;
  padding: 30px 0;
  border-bottom: 1px solid #f1f1f1;

  &:last-child { border-bottom: none; }

  .ItemLabel {
    font-size: 15px;
    color: #333; 
    font-weight: 700;
    margin-top: 2px;
  }

  .ItemContent {
    display: flex;
    flex-direction: column;
    padding-left: 20px;

    .EmailText, .UserInfoText {
      font-size: 16px;
      font-weight: 800;
      color: #333;
    }

    .VerifiedStatus {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .StatusBadge {
      background: #7E3AF2;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .SubNotice {
      font-size: 13px;
      color: #94A3B8;
      margin-top: 10px;
      line-height: 1.6;
      letter-spacing: -0.3px;
    }
  }

  .ItemBtn {
    background: none;
    border: none;
    color: #94A3B8;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-align: right;
    margin-top: 2px;
    white-space: nowrap;

    &:hover {
      color: #5D5FEF;
      text-decoration: underline;
    }
    
    &.UnregisterBtn:hover {
      color: #ef4444;
    }
  }
`,Ah.ProfileCard=on.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: fit-content;

  .profileImageContainer {
    position: relative;
    margin-bottom: 25px;

    .profileImageCircle {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid #F0F3FF;
      img { width: 100%; height: 100%; object-fit: cover; }
    }

    .image-edit-btn {
      position: absolute;
      bottom: 0;
      right: 0;
      background: #ffffff;
      border: 1px solid #ddd;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      cursor: pointer;
    }
  }

  .nickname-area {
    width: 100%;
    margin-bottom: 15px;

    .display-mode {
      display: flex;
      gap: 10px;
      
      .nickname-input {
        flex: 1;
        border: none;
        background: #F8FAFC;
        padding: 10px 15px;
        border-radius: 10px;
        font-weight: 700;
        color: #333;
        outline: none;
      }

      .nickname-change-btn {
        background: none;
        border: 1px solid #E2E8F0;
        padding: 0 15px;
        border-radius: 10px;
        font-size: 13px;
        color: #64748B;
        cursor: pointer;
        &:hover { background: #F1F5F9; }
      }
    }
  }

  .profile-card-footer-text {
    font-size: 12px;
    color: #aaa;
    text-align: center;
  }
`,Ah.NicknameInputGroup=on.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .edit-input {
    width: 100%;
    border: 2px solid #5D5FEF;
    padding: 10px 15px;
    border-radius: 10px;
    font-weight: 700;
    outline: none;
  }

  .EditActions {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    
    button {
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      cursor: pointer;
    }
    .SaveBtn { background: #5D5FEF; color: white; border: none; }
    .CancelBtn { background: #f1f1f1; color: #666; border: none; }
  }
`,Ah.CommunitySection=on.div` 
  padding: 0 20px 50px; 
  border-top: 1px solid #f5f5f5; 
  margin-top: 40px; 
`,Ah.PostGrid=on.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,Ah.CardWrapper=on.div`
  border: 1px solid ${e=>e.isSelected?"#8b5cf6":"#eee"};
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: ${e=>e.isSelected?"0 4px 12px rgba(139, 92, 246, 0.15)":"none"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  }
`,Ah.ImageSection=on.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: #f5f5f5;
`,Ah.Thumbnail=on.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Ah.CheckboxOverlay=on.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #8b5cf6; /* 체크박스 포인트 컬러 */
  }
`,Ah.TagLabel=on.span`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(93, 95, 239, 0.9); /* 서비스 테마색으로 변경 */
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
`,Ah.PostContentSection=on.div`
  padding: 18px;
`,Ah.PostTime=on.span`
  font-size: 12px;
  color: #94a3b8;
  display: block;
  margin-bottom: 8px;
  text-align: right;
`,Ah.PostTitle=on.h4`
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Ah.PostSummary=on.p`
  font-size: 13px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 18px;
  height: 39px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Ah.CardFooter=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f1f5f9;
`,Ah.AuthorInfo=on.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ah.AuthorIcon=on.div`
  width: 24px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 50%;
  border: 1px solid #f1f5f9;
`,Ah.AuthorName=on.span`
  font-size: 13px;
  font-weight: 500;
  color: #475569;
`,Ah.PostStats=on.div`
  display: flex;
  gap: 12px;
`,Ah.StatItem=on.span`
  font-size: 12px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
`,Ah.CommunityContainer=on.div`
  width: 100%;
  margin-top: 60px;
`,Ah.HeaderSection=on.div`
  margin-bottom: 250px;
  h3 { font-size: 45px; font-weight: 800; color: #1e293b; margin-bottom: 12px; }
  p { font-size: 24px; color: #64748b; }
`,Ah.ControlBar=on.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #f1f5f9;
  margin-bottom: 25px;
`,Ah.ControlLeft=on.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .all-check-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    input { width: 18px; height: 18px; accent-color: #5d5fef; }
    label { font-size: 14px; font-weight: 600; color: #475569; }
  }
`,Ah.DeleteBtn=on.button`
  background: #fff1f2;
  color: #f43f5e;
  border: 1px solid #ffe4e6;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  &:hover { background: #ffe4e6; }
`,Ah.ControlRight=on.div` display: flex; gap: 12px; `,Ah.SearchInput=on.input`
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-size: 14px;
  width: 220px;
  &:focus { border-color: #5d5fef; outline: none; }
`,Ah.EmptyStateWrapper=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  text-align: center;
`,Ah.EmptyTitle=on.h4`
  font-size: 45px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 20px;
  strong { color: #5d5fef; } /* FailLog 포인트 컬러로 통일 */
`,Ah.EmptySubText=on.p`
  font-size: 32px;
  color: #888;
  line-height: 1.6;
  margin-bottom: 40px;
`,Ah.StartButton=on.button`
  background: #5d5fef;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 8px;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover { transform: scale(1.05); }
  margin-bottom: 506px
`;const kh=Ah,Ch=n.p+"static/media/default.7cccaa1b2ed76c11e2ec.png",Lh=e=>{let{memberNickname:t,memberProfileImageUrl:n,onNicknameChange:i,onImageChange:o}=e;const[a,l]=(0,r.useState)(!1),[s,c]=(0,r.useState)(t||""),d=(0,r.useRef)(null),u=n||Ch;return(0,yo.jsxs)(kh.ProfileCard,{children:[(0,yo.jsxs)("div",{className:"profileImageContainer",children:[(0,yo.jsx)("div",{className:"profileImageCircle",children:(0,yo.jsx)("img",{src:u,alt:"\ud504\ub85c\ud544"})}),(0,yo.jsx)("input",{type:"file",ref:d,style:{display:"none"},accept:"image/*",onChange:e=>{const t=e.target.files[0];t&&o&&o(t)}}),(0,yo.jsx)("button",{className:"image-edit-btn",onClick:()=>{d.current.click()},type:"button",children:"\ud83d\udcf8"})]}),(0,yo.jsx)("div",{className:"nickname-area",children:a?(0,yo.jsxs)(kh.NicknameInputGroup,{children:[(0,yo.jsx)("input",{type:"text",className:"edit-input",value:s,onChange:e=>c(e.target.value),autoFocus:!0}),(0,yo.jsxs)("div",{className:"EditActions",children:[(0,yo.jsx)("button",{className:"SaveBtn",onClick:()=>{i&&i(s),l(!1)},children:"\uc800\uc7a5"}),(0,yo.jsx)("button",{className:"CancelBtn",onClick:()=>{c(t),l(!1)},children:"\ucde8\uc18c"})]})]}):(0,yo.jsxs)("div",{className:"display-mode",children:[(0,yo.jsx)("input",{type:"text",className:"nickname-input",value:t?`${t}\ub2d8`:"\ub2c9\ub124\uc784\uc744 \uc124\uc815\ud574\uc8fc\uc138\uc694.",readOnly:!0}),(0,yo.jsx)("button",{className:"nickname-change-btn",onClick:()=>l(!0),type:"button",children:"\ubcc0\uacbd"})]})}),(0,yo.jsx)("p",{className:"profile-card-footer-text",children:"* FailLog\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub0b4 \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0\ub97c \uc124\uc815\ud574\uc8fc\uc138\uc694."})]})},$h=e=>{let{memberEmail:t,memberName:n,memberPhone:r,memberPhoneVerified:i,onEmailChange:o,onPhoneVerify:a,onPasswordChange:l,onUnregister:s}=e;return(0,yo.jsx)(kh.AccountDataCard,{children:(0,yo.jsxs)(kh.AccountList,{children:[(0,yo.jsxs)(kh.AccountItem,{children:[(0,yo.jsx)("div",{className:"ItemLabel",children:"\uc544\uc774\ub514"}),(0,yo.jsxs)("div",{className:"ItemContent",children:[(0,yo.jsx)("span",{className:"EmailText",children:t||"test@example.com"}),(0,yo.jsxs)("p",{className:"SubNotice",children:["\u2022 \uc18c\uc15c \uacc4\uc815\uc73c\ub85c \uac00\uc785\ub41c \uc720\uc800\uc758 \uacbd\uc6b0, \uc774\uba54\uc77c\uc740 \ubcc4\ub3c4\ub85c \ubcc0\uacbd \uc548\ub428\uc744 \uc54c\ub824\ub4dc\ub9bd\ub2c8\ub2e4.",(0,yo.jsx)("br",{}),"\u2022 \ubcf8\uc778\uc758 \uc5f0\ub3d9\ub41c \uacc4\uc815 \uc18c\uc15c \uacc4\uc815\uc5d0\uc11c \ubcc0\uacbd\ud574 \uc8fc\uc138\uc694."]})]}),(0,yo.jsx)("button",{className:"ItemBtn",onClick:o,children:"\uc5f0\ub77d\ucc98 \ubcc0\uacbd"})]}),(0,yo.jsxs)(kh.AccountItem,{children:[(0,yo.jsx)("div",{className:"ItemLabel",children:"\ubcf8\uc778\uc778\uc99d"}),(0,yo.jsxs)("div",{className:"ItemContent",children:[1===i?(0,yo.jsxs)("div",{className:"VerifiedStatus",children:[(0,yo.jsx)("span",{className:"StatusBadge",children:"\uc778\uc99d\ub428"}),(0,yo.jsxs)("span",{className:"UserInfoText",children:[n," / ",r]})]}):(0,yo.jsx)("span",{className:"UnverifiedText",children:"\uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),(0,yo.jsx)("p",{className:"SubNotice",children:"\u2022 \ubcf8\uc778 \uba85\uc758 \ud734\ub300\ud3f0 \ubc88\ud638\ub97c \ubcc0\uacbd\ud558\ub824\uba74, \ub2e4\uc2dc \ubcf8\uc778\uc778\uc99d\uc744 \uc9c4\ud589\ud558\uc154\uc57c \ud569\ub2c8\ub2e4."})]}),(0,yo.jsx)("button",{className:"ItemBtn",onClick:a,children:1===i?"\uc2e4\uba85\uc218\uc815":"\uc778\uc99d\ud558\uae30"})]}),(0,yo.jsxs)(kh.AccountItem,{children:[(0,yo.jsx)("div",{className:"ItemLabel",children:"\ube44\ubc00\ubc88\ud638 \ubcc0\uacbd"}),(0,yo.jsx)("div",{className:"ItemContent"}),(0,yo.jsx)("button",{className:"ItemBtn",onClick:l,children:"\ubcc0\uacbd"})]}),(0,yo.jsxs)(kh.AccountItem,{children:[(0,yo.jsx)("div",{className:"ItemLabel",children:"\ud68c\uc6d0\ud0c8\ud1f4"}),(0,yo.jsx)("div",{className:"ItemContent"}),(0,yo.jsx)("button",{className:"ItemBtn UnregisterBtn",onClick:s,children:"\ud0c8\ud1f4\ud558\uae30"})]})]})})},Ih=e=>{let{post:t,isSelected:n,onSelect:r}=e;const{tag:i,title:o,summary:a,author:l,date:s,likes:c,comments:d,imageUrl:u}=t;return(0,yo.jsxs)(kh.CardWrapper,{isSelected:n,children:[(0,yo.jsxs)(kh.ImageSection,{children:[(0,yo.jsx)(kh.Thumbnail,{src:u||"/default-thumbnail.png",alt:o}),(0,yo.jsx)(kh.CheckboxOverlay,{children:(0,yo.jsx)("input",{type:"checkbox",checked:n,onChange:r})}),(0,yo.jsx)(kh.TagLabel,{children:i})]}),(0,yo.jsxs)(kh.PostContentSection,{onClick:r,children:[(0,yo.jsx)(kh.PostTime,{children:s}),(0,yo.jsx)(kh.PostTitle,{children:o}),(0,yo.jsx)(kh.PostSummary,{children:a}),(0,yo.jsxs)(kh.CardFooter,{children:[(0,yo.jsxs)(kh.AuthorInfo,{children:[(0,yo.jsx)(kh.AuthorIcon,{}),(0,yo.jsx)(kh.AuthorName,{children:l})]}),(0,yo.jsxs)(kh.PostStats,{children:[(0,yo.jsxs)(kh.StatItem,{children:["\u2764\ufe0f ",c]}),(0,yo.jsxs)(kh.StatItem,{children:["\ud83d\udcac ",d]})]})]})]})]})},Ph={},Fh={h1Regular:za,h2Regular:Ma,h3Regular:Wa,h4Regular:Qa,h5Regular:qa,h6Regular:Ka,h7Regular:nl,h8Regular:ol,h9Regular:sl,h10Regular:ul,h11Regular:fl,h1Bold:Na,h2Bold:Ba,h3Bold:Ha,h4Bold:Ya,h5Bold:Va,h6Bold:Ja,h7Bold:tl,h8Bold:il,h9Bold:ll,h10Bold:dl,h11Bold:pl,h1Extrabold:Oa,h2Extrabold:Da,h3Extrabold:Ga,h4Extrabold:_a,h5Extrabold:Za,h6Extrabold:Xa,h7Extrabold:el,h8Extrabold:rl,h9Extrabold:al,h10Extrabold:cl,h11Extrabold:hl,"h7-regular":tn`
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-regular":tn`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,"h9-regular":tn`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,"h10-regular":tn`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.03em;
  `,"h2-bold":tn`
    font-size: 60px;
    font-weight: 700;
    line-height: 78px;
    letter-spacing: -0.03em;
  `,"h4-bold":tn`
    font-size: 32px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: -0.03em;
  `,"h6-bold":tn`
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: -0.03em;
  `,"h7-bold":tn`
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-bold":tn`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.03em;
  `,"h9-bold":tn`
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.03em;
  `,"h11-bold":tn`
    font-size: 10px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.03em;
  `,"h7-exBold1":tn`
    font-size: 80px;
    font-weight: 800;
    line-height: 98px;
    letter-spacing: -0.03em;
  `,"h7-exBold7":tn`
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
    letter-spacing: -0.03em;
  `,"h8-exBold8":tn`
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: -0.03em;
  `},Rh={"faillog-red":"#F53102","faillog-black":"#333333",faillog_blue:"#027DF0",faillog_green:"#00B53F",faillog_purple:"#AB47FF",faillog_white:"#FFFFFF",faillog_light_blue:"#DBEAFE",faillog_light_green:"#D1FFE1",faillog_light_purple:"#F3E8FF",faillog_light_red:"#FFE4E6",faillog_gray1:"#F2F2F2",faillog_gray2:"#E6E6E6",faillog_gray4:"#CCCCCC",faillog_gray8:"#999999",faillog_gray9:"#8D8D8D",faillog_gray10:"#555555","faillog-sector-gray":"#F8F9FA"};tn`
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
  `;Ph.Span=on.span`
  ${e=>{let{size:t}=e;return Fh[t]}}
  color: ${e=>{let{color:t}=e;return Rh[t]?Rh[t]:"#333333"}};
  display: ${e=>{let{display:t}=e;return t||"inline"}};
  /* overflow: ${e=>{let{isvisible:t}=e;return t?"visible":"hidden"}}; */
  overflow: visible;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  /* margin-top: ${e=>{let{marginTop:t}=e;return t}}; */
`,Ph.Span2=on.span`
  ${e=>{let{size:t}=e;return Fh[t]}}
  color: ${e=>{let{color:t}=e;return Rh[t]?Rh[t]:"#333333"}};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${e=>{let{lineclamp:t}=e;return t||2}};
  overflow: ${e=>{let{isvisible:t}=e;return t?"visible":"hidden"}};
  text-overflow: ellipsis;
`,Ph.Img=on.img`
  width: ${e=>{let{width:t}=e;return t||"50px"}};
  height: ${e=>{let{height:t}=e;return t||"50px"}};
`,Ph.Wrapper=on.div`
  ${Ia}

  margin-top: ${e=>{let{margintop:t}=e;return t}};
`;const Oh=Ph,Nh=on.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,zh=on.button`
  ${Ia}
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: ${e=>{let{disabled:t}=e;return t?"default":"pointer"}};
  padding: 0;
`,Dh=on.button`
  ${Ia}
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background-color: ${e=>{let{isActive:t}=e;return t?Rh.faillog_purple:"transparent"}};
  cursor: pointer;
  padding: 0;
`,Bh=e=>{let{minPage:t,maxPage:n,onPageChange:i,page:o}=e;const[a,l]=(0,r.useState)(null!==o&&void 0!==o?o:t);(0,r.useEffect)(()=>{void 0!==o&&l(o)},[o]);const s=5*Math.floor((a-t)/5)+t,c=[];for(let r=s;r<=Math.min(s+4,n);r++)c.push(r);const d=s>t,u=s+5<=n,h=e=>{l(e),null===i||void 0===i||i(e)};return(0,yo.jsxs)(Nh,{children:[(0,yo.jsx)(zh,{onClick:()=>{d&&h(s-1)},disabled:!d,children:(0,yo.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,yo.jsx)("path",{d:"M7 1L1 7L7 13",stroke:d?Rh.faillog_gray9:Rh.faillog_gray4,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),c.map(e=>(0,yo.jsx)(Dh,{isActive:e===a,onClick:()=>{e!==a&&h(e)},children:(0,yo.jsx)(Oh.Span,{size:"h9Regular",color:e===a?"faillog_white":"faillog-black",children:e})},e)),(0,yo.jsx)(zh,{onClick:()=>{u&&h(s+5)},disabled:!u,children:(0,yo.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,yo.jsx)("path",{d:"M1 1L7 7L1 13",stroke:u?Rh.faillog_gray9:Rh.faillog_gray4,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},Mh={};Mh.component=on.div`
  width: 958px;
  height: 62px;
background: linear-gradient(white, white) padding-box,
            linear-gradient(to right, ${Rh.faillog_blue}, ${Rh.faillog_purple}) border-box;
border: 1.78px solid transparent;
border-radius: 15px;

display: flex;
justify-content: space-between;
align-items: center;

padding-left: 26px;
padding-right: 23px;
`,Mh.contentLeft=on.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Mh.image1=on.img`
  width: 20px;
  height: 20px;
`,Mh.buttonImage=on.img`
  width: 20px;
  height: 20px;
`,Mh.search=on.input`
  width: 812px;
  height: 32px;
  border: none;
  ${Fh["h7-regular"]}

    &:focus {
    outline: none;
  }
`,Mh.searchButton=on.button`
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, ${Rh.faillog_blue}, ${Rh.faillog_purple});
  border-radius: 999px;

  ${Ia}
`;const Gh=Mh;const Hh=n.p+"static/media/shine.46d7193404c9ed9b58862a741407d6c7.svg";const Wh=n.p+"static/media/arrow-up.a5b9918d158fedffca8198d894275aa0.svg",Uh=e=>{let{onSubmit:t,placeholder:n="ex)\uac8c\uc2dc\uae00\uc744 \uac80\uc0c9\ud574\ubcfc\uae4c\uc694?"}=e;const i=(0,r.useRef)([]);return(0,yo.jsx)("div",{children:(0,yo.jsxs)(Gh.component,{children:[(0,yo.jsxs)(Gh.contentLeft,{children:[(0,yo.jsx)(Gh.image1,{src:Hh}),(0,yo.jsx)(Gh.search,{maxLength:"100",placeholder:n,ref:e=>{i.current[0]=e},onKeyDown:e=>{""!==e.target.value&&"Enter"===e.key&&(null===t||void 0===t||t(e.target.value),e.target.value="")}})]}),(0,yo.jsx)(Gh.searchButton,{onClick:()=>{""!==i.current[0].value&&(null===t||void 0===t||t(i.current[0].value),i.current[0].value="")},children:(0,yo.jsx)(Gh.buttonImage,{src:Wh})})]})})},_h=fo(go({order1:0,order2:0,category:0,content:"",page:1},e=>({setOrder1:t=>e(e=>({order1:t})),setOrder2:t=>e(e=>({order2:t})),setCategory:t=>e(e=>({category:t})),setContent:t=>e(e=>({content:t})),setPage:t=>e(e=>({page:t}))}))),Yh=_h,Qh=()=>{const[e,t]=(0,r.useState)([]),[n,i]=(0,r.useState)([]),[o,a]=(0,r.useState)(1),[l,s]=(0,r.useState)(5),c=wi(),{content:d,setContent:u,setPage:h}=Yh();(0,r.useEffect)(()=>{const e=[{id:3*((n=o)-1)+1,category:"\ucde8\uc5c5/\uc774\uc9c1",title:`${n}\ud398\uc774\uc9c0 - Asunica \ucd5c\uc885 \uba74\uc811 \uc900\ube44 \uc911 \ubc1c\uacac\ud55c \ucf54\ub4dc \uc624\ub958`,content:"\uc624\ub298 \ud504\ub85c\uc81d\ud2b8\ub97c \uc815\ub9ac\ud558\ub2e4\uac00 \uc2a4\ud0c0\uc77c \uacbd\ub85c\uac00 \uaf2c\uc778 \uac83\uc744 \ubc1c\uacac\ud588\ub2e4. \ub2f9\ud669\ud588\uc9c0\ub9cc Git \ubcf5\uad6c\ub97c \ud1b5\ud574 \ud574\uacb0!",date:"2026.05.14",thumbnail:"https://via.placeholder.com/324x184",profile:"https://via.placeholder.com/14x14",author:"\uae40\uc138\uc885",views:128,likes:15,comments:3},{id:3*(n-1)+2,category:"\uacf5\ubd80",title:`${n}\ud398\uc774\uc9c0 - React \uacf5\ud1b5 \ucef4\ud3ec\ub10c\ud2b8 \uc124\uacc4\uc758 \uc5b4\ub824\uc6c0`,content:"\ud398\uc774\uc9c0\ub124\uc774\uc158 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\uba74\uc11c \uadf8\ub8f9\ud654 \ub85c\uc9c1\uc744 \uad6c\ud604\ud558\ub294 \uac8c \uc0dd\uac01\ubcf4\ub2e4 \uae4c\ub2e4\ub85c\uc6e0\ub2e4.",date:"2026.05.13",thumbnail:"https://via.placeholder.com/324x184",profile:"https://via.placeholder.com/14x14",author:"\uae40\uc138\uc885",views:85,likes:10,comments:1},{id:3*(n-1)+3,category:"\uc77c\uc0c1",title:`${n}\ud398\uc774\uc9c0 - \uc624\ub298\uc758 \uc2e4\ud328: \ucee4\ud53c\ub97c \uc3df\uc740 \ud0a4\ubcf4\ub4dc`,content:"\ucf54\ub529\uc5d0 \uc9d1\uc911\ud558\ub2e4\uac00 \ucee4\ud53c\ub97c \uc3df\uc558\ub2e4. \ud558\ub4dc\uc6e8\uc5b4 \uad00\ub9ac\ub294 \uc815\ub9d0 \uc911\uc694\ud558\ub2e4.",date:"2026.05.12",thumbnail:"https://via.placeholder.com/324x184",profile:"https://via.placeholder.com/14x14",author:"\uae40\uc138\uc885",views:210,likes:42,comments:8}];var n;const r=d?e.filter(e=>e.title.toLowerCase().includes(d.toLowerCase())):e;t(r),s(d?(r.length,1):10),i([])},[o,d]);return(0,yo.jsxs)(kh.CommunityContainer,{children:[(0,yo.jsxs)(kh.HeaderSection,{children:[(0,yo.jsx)("h3",{children:"\ub0b4 \ucee4\ubba4\ub2c8\ud2f0 \uac8c\uc2dc\uae00 \uad00\ub9ac"}),(0,yo.jsx)("p",{children:"\ub0b4\uac00 \uc791\uc131\ud55c \ucee4\ubba4\ub2c8\ud2f0 \uac8c\uc2dc\uae00\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),e.length>0?(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"20px"},children:(0,yo.jsx)(Uh,{placeholder:"\uad81\uae08\ud55c \uc2e4\ud328 \uc0ac\ub840\ub97c \uac80\uc0c9\ud574\ubcf4\uc138\uc694!",onSubmit:e=>{console.log("\uc804\ub2ec\ubc1b\uc740 \uac80\uc0c9\uc5b4:",e),u(e),h(1)}})}),(0,yo.jsx)(kh.PostGrid,{children:e.map(e=>(0,yo.jsx)(Ih,{post:e,isSelected:n.includes(e.id),onSelect:()=>{return t=e.id,void i(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]);var t}},e.id))}),(0,yo.jsx)("div",{style:{marginTop:"40px",display:"flex",justifyContent:"center"},children:(0,yo.jsx)(Bh,{minPage:1,maxPage:l,page:o,onPageChange:e=>{a(e)}})}),(0,yo.jsx)(kh.ControlBar,{children:(0,yo.jsxs)(kh.ControlLeft,{children:[(0,yo.jsxs)("div",{className:"all-check-wrapper",children:[(0,yo.jsx)("input",{type:"checkbox",id:"all-check",onChange:t=>{t.target.checked?i(e.map(e=>e.id)):i([])},checked:n.length===e.length&&e.length>0}),(0,yo.jsx)("label",{htmlFor:"all-check",children:"\uc804\uccb4 \uc120\ud0dd"})]}),(0,yo.jsx)(kh.DeleteBtn,{onClick:()=>{if(0===n.length)return alert("\uc0ad\uc81c\ud560 \uac8c\uc2dc\uae00\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");window.confirm(`${n.length}\uac1c\uc758 \uac8c\uc2dc\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?`)&&(t(e.filter(e=>!n.includes(e.id))),i([]))},children:"\uc120\ud0dd \uc0ad\uc81c"})]})})]}):(0,yo.jsxs)(kh.EmptyStateWrapper,{children:[(0,yo.jsxs)(kh.EmptyTitle,{children:["\uc544\uc9c1 \uc791\uc131\ud55c \uac8c\uc2dc\uae00\uc774 \uc5c6\ub124\uc694.",(0,yo.jsx)("br",{}),(0,yo.jsx)("strong",{children:"\ud398\uc77c\ub85c\uadf8"}),"\uc758 \ucee4\ubba4\ub2c8\ud2f0\ub97c \uc774\uc6a9\ud574\ubcfc\uae4c\uc694?"]}),(0,yo.jsxs)(kh.EmptySubText,{children:["\uc2e4\ud328\ub97c \uc678\uba74\ud558\uc9c0 \uc54a\uace0 \uae30\ub85d\ud560 \ub54c,",(0,yo.jsx)("br",{}),"\ub2f9\uc2e0\uc758 \uac15\ub825\ud55c \uc131\uc7a5 \ub370\uc774\ud130\uac00 \ub429\ub2c8\ub2e4."]}),(0,yo.jsx)(kh.StartButton,{onClick:()=>c("/community"),children:"\uc2dc\uc791\ud558\uae30"})]})]})},Zh={};Zh.HeroSectionContainer=on.section`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;
`,Zh.HeroGrid=on.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr; 
  gap: 20px;
  width: 100%;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`,Zh.MainGraphic=on.div`
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease;
  
  /* ✅ 기본 크기를 줄여서 글자 침범 방지 */
  width: 70%; 
  bottom: -10%;

  ${e=>"right"===e.$align?"left: -5%; right: auto;":"right: -5%; left: auto;"}

  img { 
    width: 100%; 
    height: auto; 
    object-fit: contain; 
  }
`,Zh.HeroBanner=on.div`
  aspect-ratio: 648 / 730; 
  background-color: ${e=>e.$bgColor||"#E8EBFD"};
  border-radius: 25px;
  padding: 8% 8%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow: hidden; /* ✅ 이미지가 배너 밖으로 나가는 것 방지 */
  transition: all 0.3s ease-in-out;

  align-items: ${e=>"right"===e.$align?"flex-end":"flex-start"};

  .TextGroup {
    position: relative;
    z-index: 2; /* ✅ 이미지보다 위에 오도록 설정 */
    text-align: ${e=>"right"===e.$align?"right":"left"};
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: clamp(16px, 2vw, 24px); font-weight: 400; color: #5D5FEF; line-height: 1.4; }
    h2 { font-size: clamp(28px, 4vw, 45px); font-weight: 800; color: #2D3494; line-height: 1.2; margin-top: 5px; }
    p { font-size: clamp(16px, 2vw, 24px); font-weight: 400; color: #4B5563; line-height: 1.4; margin-top: 5px; }
  }

  /* ✅ ID별 이미지 세부 조정 (배너 안으로 검거) */
  ${e=>"fail-logs"===e.$id&&`\n    ${Zh.MainGraphic} { width: 75%; bottom: -5%; right: -2%; }\n  `}

  ${e=>"my-fail-log"===e.$id&&`\n    ${Zh.MainGraphic} { width: 62%; bottom: -2%; right: 5%; }\n  `}

  ${e=>"likes"===e.$id&&`\n    ${Zh.MainGraphic} { width: 65%; bottom: -2%; left: 2%; }\n  `}

  ${e=>"guestbook"===e.$id&&`\n    ${Zh.MainGraphic} { width: 70%; bottom: -8%; right: 0%; }\n  `}

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`,Zh.QuickMenuGroup=on.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 100%;
`;const Vh=on.div`
  aspect-ratio: 424 / 236;
  border-radius: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden; 
  padding: 8% 10%;
  transition: all 0.3s ease-in-out;

  align-items: ${e=>"right"===e.$align?"flex-end":"flex-start"};

  .CardText {
    position: relative;
    z-index: 2;
    text-align: ${e=>"right"===e.$align?"right":"left"};
    & > * { margin: 0; white-space: nowrap; }
    h3 { font-size: clamp(14px, 1.5vw, 20px); font-weight: 400; color: #5D5FEF; }
    h2 { font-size: clamp(20px, 3vw, 36px); font-weight: 700; color: #1E293B; margin-top: 2px; }
    span { font-size: clamp(14px, 1.5vw, 20px); color: #64748B; margin-top: 2px; }
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;Zh.CardIcon=on.div`
  position: absolute;
  z-index: 5;
  img { width: 100%; height: auto; object-fit: contain; }

  ${e=>"right"===e.$align?"left: -5%; right: auto; bottom: -5%;":"right: -5%; left: auto; bottom: -5%;"}
`,Zh.FailLogQuickCard=on(Vh)`
  background-color: #E8EBFD;
  ${Zh.CardIcon} { width: 48%; bottom: -12%; }
`,Zh.MyLogCard=on(Vh)`
  background-color: #F0F3FF;
  ${Zh.CardIcon} { width: 42%; bottom: -5%; }
`,Zh.LikesCard=on(Vh)`
  background-color: #EBF8FF;
  ${Zh.CardIcon} { width: 38%; left: -5%; bottom: -2%; }
`,Zh.GuestBookCard=on(Vh)`
  background-color: #EEF2FF;
  ${Zh.CardIcon} { width: 44%; bottom: -8%; transform: rotate(-2deg); }
`;const qh=Zh,Xh=e=>{let{mainContent:t,quickMenus:n}=e;const r=wi();return t&&n?(0,yo.jsx)(qh.HeroSectionContainer,{children:(0,yo.jsxs)(qh.HeroGrid,{children:[(0,yo.jsxs)(qh.HeroBanner,{$id:t.id,$align:t.align,$bgColor:t.bgColor,onClick:()=>r(t.path),children:[(0,yo.jsxs)("div",{className:"TextGroup",children:[(0,yo.jsx)("h3",{children:t.subTitle}),(0,yo.jsx)("h2",{children:t.title}),(0,yo.jsx)("p",{children:t.description})]}),(0,yo.jsx)(qh.MainGraphic,{$align:t.align,children:(0,yo.jsx)("img",{src:t.img,alt:"\uba54\uc778 \ubc30\ub108"})})]}),(0,yo.jsx)(qh.QuickMenuGroup,{children:n.map(e=>{const t="fail-logs"===e.id?qh.FailLogQuickCard:"my-fail-log"===e.id?qh.MyLogCard:"likes"===e.id?qh.LikesCard:qh.GuestBookCard;return(0,yo.jsxs)(t,{$align:e.align,onClick:()=>r(e.path),children:[(0,yo.jsxs)("div",{className:"CardText",children:[(0,yo.jsx)("h3",{children:e.subTitle}),(0,yo.jsx)("h2",{children:e.title}),(0,yo.jsx)("span",{children:e.description})]}),(0,yo.jsx)(qh.CardIcon,{$align:e.align,children:(0,yo.jsx)("img",{src:e.img,alt:e.title})})]},e.id)})})]})}):null},Jh=[{id:"fail-logs",path:"/fail-logs",subTitle:"\ud398\uc77c\ub85c\uadf8\ub97c \uc791\uc131\ud574\ubcf4\uace0 \uc2f6\ub2e4\uba74",title:"\ud398\uc77c\ub85c\uadf8 \ubc14\ub85c\uac00\uae30",description:"\uc2e4\ud328\ub97c \uae30\ub85d\ud558\uace0 \uc131\uc7a5\uc758 \ubc1c\ud310\uc73c\ub85c \uc0bc\uc73c\uc138\uc694.",bgColor:"#E8EBFD",img:n.p+"static/media/fail-logs.f31efadb8bf99d92512e.png",align:"left"},{id:"my-fail-log",path:"/my-page/fail-logs",subTitle:"\ub0b4\uac00 \uc791\uc131\ud55c \ub85c\uadf8\ub97c \ubcf4\uace0 \uc2f6\ub2e4\uba74",title:"\ub9c8\uc774 \ud398\uc77c\ub85c\uadf8",description:"\ub0b4\uac00 \uc791\uc131\ud55c \ub85c\uadf8\ub97c \ubcfc \uc218 \uc788\uc5b4\uc694.",bgColor:"#F0F3FF",img:n.p+"static/media/my-fail-log.c2f097477eb086efa97d.png",align:"left"},{id:"likes",path:"/my-page/likes",subTitle:"\ucc38\uace0\ud558\uace0 \uc2f6\uc740 \uac8c\uc2dc\uae00\uc744 \ubaa8\uc544\ub454",title:"\uc88b\uc544\uc694 \ud55c \ud398\uc77c\ub85c\uadf8",description:"\uc88b\uc544\uc694 \ud55c \uac8c\uc2dc\uae00\uc744 \ubaa8\uc544 \ubcfc \uc218 \uc788\uc5b4\uc694.",bgColor:"#EBF8FF",img:n.p+"static/media/likes.cf86fc2d7cb05bb4cab4.png",align:"right"},{id:"guestbook",path:"/my-page/guestbook",subTitle:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uc18c\ud1b5\ud558\ub294",title:"\ud398\uc77c\ub85c\uadf8 \ubc29\uba85\ub85d",description:"\ub0b4\uac8c \ub0a8\uae34 \ub9d0\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694.",bgColor:"#EEF2FF",img:n.p+"static/media/guestbook.412c38f5721cd283dd85.png",align:"left"}],Kh=e=>{const t=Jh.find(t=>t.path===e)||Jh[0],n=Jh.filter(e=>e.id!==t.id);return{mainContent:t,quickMenus:n}},ep=()=>{const e=wi(),{pathname:t}=vi(),{mainContent:n,quickMenus:i}=Kh(t),[o,a]=(0,r.useState)({memberNickname:"test",memberProfileImageUrl:null,memberEmail:"test@example.com",memberName:"test",memberPhone:"010-1234-5678",memberPhoneVerified:1});return(0,yo.jsxs)(wh.MainWrapper,{children:[(0,yo.jsx)(Xh,{mainContent:n,quickMenus:i}),(0,yo.jsxs)(jh.InfoManagementSection,{children:[(0,yo.jsxs)("div",{className:"info-header",children:[(0,yo.jsx)("h2",{children:"\ub0b4 \uc815\ubcf4 \uad00\ub9ac"}),(0,yo.jsx)("p",{children:"\ub0b4 \uc815\ubcf4\uc758 \uc218\uc815 \ubc0f \ud68c\uc6d0 \uc11c\ube44\uc2a4\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,yo.jsxs)(jh.TopCardGrid,{children:[(0,yo.jsx)(Lh,{memberNickname:o.memberNickname,memberProfileImageUrl:o.memberProfileImageUrl,onNicknameChange:e=>{a(t=>({...t,memberNickname:e})),console.log("\ub2c9\ub124\uc784 \ubcc0\uacbd \uc644\ub8cc:",e)},onImageChange:e=>{const t=new FileReader;t.readAsDataURL(e),t.onloadend=()=>{a(e=>({...e,memberProfileImageUrl:t.result}))}}}),(0,yo.jsx)(jh.ProfileCard,{children:(0,yo.jsx)("div",{children:"\ucc28\ud2b8 \uce74\ub4dc (\uc900\ube44 \uc911)"})}),(0,yo.jsx)(jh.ProfileCard,{children:(0,yo.jsx)("div",{children:"\ud65c\ub3d9\ub7c9 \uce74\ub4dc (\uc900\ube44 \uc911)"})})]}),(0,yo.jsx)(jh.BottomAccountArea,{children:(0,yo.jsx)($h,{memberEmail:o.memberEmail,memberName:o.memberName,memberPhone:o.memberPhone,memberPhoneVerified:o.memberPhoneVerified,onPasswordChange:()=>{e("/change-password")}})})]}),(0,yo.jsx)(Th.CommunitySection,{children:(0,yo.jsx)(Qh,{})})]})};const tp=()=>{const{pathname:e}=vi(),{mainContent:t,quickMenus:n}=Kh(e);return(0,yo.jsx)("div",{children:(0,yo.jsx)(Xh,{mainContent:t,quickMenus:n})})},np=()=>{const{pathname:e}=vi(),{mainContent:t,quickMenus:n}=Kh(e);return(0,yo.jsx)("div",{className:"MyLikesContainer",children:(0,yo.jsx)(Xh,{mainContent:t,quickMenus:n})})},rp={};rp.SectionHeader=on.div`
  margin: 60px 0 30px 0;
  h2 {
    font-size: 32px;
    font-weight: 900;
    color: #1e293b;
    span {
      /* 피그마 원안의 보라-파랑 그라데이션 */
      background: linear-gradient(90deg, #6366f1, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`,rp.DraftSection=on.section`
  padding: 60px 0;
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 40px;
    span { color: #5D5FEF; }
  }
`,rp.DraftGrid=on.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,rp.DraftCard=on.div`
  background: ${e=>e.bgColor||"#94A3B8"};
  border-radius: 25px;
  padding: 35px 30px;
  min-height: 420px;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover { transform: translateY(-10px); }

  .CardHeader {
    h3 { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
    p { font-size: 14px; line-height: 1.6; opacity: 0.85; font-weight: 400; }
  }

  .CardImage {
    position: absolute;
    bottom: 85px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    
    img { 
      width: 160px;
      height: auto;
      filter: drop-shadow(0 15px 25px rgba(0,0,0,0.2));
    }
  }

  .CardFooter {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    .InfoText {
      font-size: 13px;
      line-height: 1.5;
      opacity: 0.9;
    }

    .StatusTag {
      background: #FFFFFF;
      color: #FF7A7A;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 800;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
  }
`,rp.FeaturedContainer=on.section`
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 80px;
  border: 1px solid #f1f5f9;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,rp.FeaturedListArea=on.div`
  flex: 1.1;
  padding: 60px 50px;

  .TitleBox {
    margin-bottom: 50px;
    h3 { 
      font-size: 34px; 
      font-weight: 850; 
      color: #000; 
      margin-bottom: 12px;
      letter-spacing: -1px;
    }
    p { 
      font-size: 15px; 
      color: #94a3b8; 
      line-height: 1.6;
      font-weight: 500;
    }
  }
`,rp.FeaturedItem=on.div`
  margin-bottom: 45px;
  cursor: pointer;

  h4 {
    font-size: 18px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 10px;
    line-height: 1.4;
    text-decoration: underline;
    text-underline-offset: 4px;
    &:hover { color: #6366f1; }
  }

  .Meta {
    display: flex;
    align-items: center;
    gap: 15px;
    
    .User {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      color: #475569;
      div { border-radius: 50%; }
    }
    .Stats {
      display: flex;
      gap: 12px;
      font-size: 13px;
      color: #94a3b8;
      span { display: flex; align-items: center; gap: 4px; }
    }
  }
`,rp.FeaturedMainImage=on.div`
  flex: 0.9;
  position: relative;
  min-height: 500px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .BlackOverlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #332f2e; /* 피그마 원안의 짙은 갈색빛 블랙 */
    padding: 35px;
    color: white;

    p {
      font-size: 18px;
      line-height: 1.6;
      font-weight: 600;
      margin-bottom: 20px;
      word-break: keep-all;
    }

    .AuthorInfo {
      display: flex;
      align-items: center;
      gap: 8px;
      justify-content: flex-end;
      font-size: 14px;
      font-weight: 500;
    }
  }
`,rp.LogSection=on.div`
  padding: 40px 0;
`,rp.CardContent=on.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #1E293B;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #64748B;
    line-height: 1.5;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`,rp.DateText=on.div`
  margin-top: 10px;
  font-size: 12px;
  color: #94A3B8;
`;const ip=rp,op=n.p+"static/media/fail-log-card.8b294b7054a1e3ab37db.png",ap=e=>{let{draftLogs:t}=e;const n=wi();return(0,yo.jsxs)(ip.DraftSection,{children:[(0,yo.jsxs)("h2",{children:["\uc544\uc9c1 ",(0,yo.jsx)("span",{children:"\uc791\uc131 \uc911\uc778 \ud398\uc77c\ub85c\uadf8"}),"\uac00 \uc788\uc5b4\uc694."]}),(0,yo.jsx)(ip.DraftGrid,{children:t.map(e=>(0,yo.jsxs)(ip.DraftCard,{bgColor:e.color,onClick:()=>n(`/logs/new/step1/${e.id}`),children:[(0,yo.jsxs)("div",{className:"CardHeader",children:[(0,yo.jsx)("h3",{children:e.title}),(0,yo.jsx)("p",{children:e.content})]}),(0,yo.jsx)("div",{className:"CardImage",children:(0,yo.jsx)("img",{src:op,alt:"\ud398\uc77c\ub85c\uadf8 \uce74\ub4dc \uc544\uc774\ucf58"})}),(0,yo.jsxs)("div",{className:"CardFooter",children:[(0,yo.jsxs)("div",{className:"InfoText",children:[(0,yo.jsxs)("div",{children:["\uc9c4\ud589\ub3c4: ",e.progress,"%"]}),(0,yo.jsxs)("div",{children:["\ub9c8\uc9c0\ub9c9 \uc218\uc815: ",e.date]})]}),(0,yo.jsx)("div",{className:"StatusTag",children:"\ubbf8\uc644\uc131"})]})]},e.id))})]})},lp=()=>(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(ip.SectionHeader,{children:(0,yo.jsxs)("h2",{children:["\ub098\uc758 ",(0,yo.jsx)("span",{children:"\ud398\uc77c\ub85c\uadf8"})]})}),(0,yo.jsxs)(ip.FeaturedContainer,{children:[(0,yo.jsxs)(ip.FeaturedListArea,{children:[(0,yo.jsxs)("div",{className:"TitleBox",children:[(0,yo.jsx)("h3",{children:"\ub2f9\uc2e0\uc758 \uac00\uc7a5 \ube5b\ub0ac\ub358 \uc2e4\ud328 \uc774\uc57c\uae30"}),(0,yo.jsxs)("p",{children:["User\ub2d8\uc758 \ud398\uc77c \ub85c\uadf8 \ubc0f \uac8c\uc2dc\uae00 \uc911",(0,yo.jsx)("br",{}),"\uc81c\uc77c \uad00\uc2ec\uc774 \ub9ce\uc558\ub358 \uac8c\uc2dc\uae00\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4."]})]}),[1,2,3].map((e,t)=>(0,yo.jsxs)(ip.FeaturedItem,{children:[(0,yo.jsx)("h4",{children:0===t?"\ud399\uc218\ud074\ub8e8\uc758 \uc131\uacf5 \uc5d4\uc9c4: \uc2e4\ud589\uc758 \uc624\ucc28\ub97c \uc904\uc774\uace0 \uc131\uc7a5\uc744 \uc55e\ub2f9\uae30\ub294 \uc6d4\ubcc4\ud53c\ub4dc\ubc31":1===t?"\uae30\ud68d\uc790\uc640 \ub514\uc790\uc774\ub108\uc758 '\ub3d9\uc0c1\uc774\ubabd'\uc744 \ub05d\ub0b4\ub2e4. \ube44\uac1c\ubc1c\uc790 \ub514\uc790\uc774\ub108\uc758 AI \uc790\ub3d9\ud654 \ud50c\ub7ab\ud3fc \uad6c\ucd95\uae30":"\ubb38\uc81c\uc758\uc2dd\uc5d0\uc11c \uc2dc\uc791\ub41c \uc790\uae30 \uac1c\ubc1c"}),(0,yo.jsxs)("div",{className:"Meta",children:[(0,yo.jsxs)("div",{className:"User",children:[(0,yo.jsx)("div",{style:{width:"20px",height:"20px",background:"#6366f1",borderRadius:"50%"}}),"\ud544\uae30\ub9c8\uc2a4\ud130"]}),(0,yo.jsxs)("div",{className:"Stats",children:[(0,yo.jsx)("span",{children:"\ud83d\udc41\ufe0f 45"}),(0,yo.jsx)("span",{children:"\u2764\ufe0f 35"})]})]})]},t))]}),(0,yo.jsxs)(ip.FeaturedMainImage,{children:[(0,yo.jsx)("img",{className:"MainImg",src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",alt:"featured"}),(0,yo.jsxs)("div",{className:"BlackOverlay",children:[(0,yo.jsx)("p",{children:"\u201c\uacf5\ubd80\ub97c \uac70\ub4ed\ud560\uc218\ub85d \uae30\uc874 \ud559\uc2b5\ubc95\uc758 \ud55c\uacc4\uac00 \ubd84\uba85\ud574\uc84c\uace0, \uadf8 \uc21c\uac04 \u2018\ub354 \ub098\uc740 \ubc29\ubc95\uc744 \ucc3e\uc544\uc57c \ud55c\ub2e4\u2019\ub294 \ubb38\uc81c\uc758\uc2dd\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4\u201d"}),(0,yo.jsxs)("div",{className:"AuthorInfo",children:[(0,yo.jsx)("div",{style:{width:"18px",height:"18px",background:"#fff",borderRadius:"50%"}}),"\ud544\uae30\ub9c8\uc2a4\ud130"]})]})]})]})]}),sp=()=>{const e=wi(),{pathname:t}=vi(),{mainContent:n,quickMenus:r}=Kh(t),i=[{id:1,title:"\ub2f9\uc2e0\uc758 \uac00\uc7a5 \ube5b\ub0ac\ub358 \uc2e4\ud328 \uc774\uc57c\uae30",content:"\uc2e4\ud328\ub294 \uc131\uacf5\uc758 \uc5b4\uba38\ub2c8\ub77c\ub294 \ub9d0\uc774 \uc788\ub4ef\uc774...",createdAt:"2026-05-10"},{id:2,title:"\ub9ac\uc561\ud2b8 \uacbd\ub85c \uc5d0\ub7ec \ud574\uacb0\uae30",content:"\ud30c\uc77c\uc744 \ubd84\ub9ac\ud558\uba74\uc11c \uacaa\uc5c8\ub358 \uc218\ub9ce\uc740 \uc5d0\ub7ec\ub4e4...",createdAt:"2026-05-09"}];return(0,yo.jsxs)(wh.MainWrapper,{children:[(0,yo.jsx)(Xh,{mainContent:n,quickMenus:r}),(0,yo.jsx)(ap,{draftLogs:[{id:1,title:"\uc791\uc131\uc911\uc778 \ud398\uc77c\ub85c\uadf8 1",content:'"\uc2e0\uae30\uc2dc\ud5d8 \uc2e4\ud328\uc758 \uc6d0\uc778\uc744 \ucc3e\uc544\uc11c" \uc5ed\uc2dc \uc220\uc744 \ub9c8\uc2dc\uba74 \uc548\ub410\ub358 \uac78\uae4c?',progress:80,date:"3\uc77c \uc804",color:"#A5B4C3"},{id:2,title:"\uc791\uc131\uc911\uc778 \ud398\uc77c\ub85c\uadf8 2",content:'"\uc2e0\uae30\uc2dc\ud5d8 \uc2e4\ud328\uc758 \uc6d0\uc778\uc744 \ucc3e\uc544\uc11c" \uc5ed\uc2dc \uc220\uc744 \ub9c8\uc2dc\uba74 \uc548\ub410\ub358 \uac78\uae4c?',progress:60,date:"3\uc6d4 \uc804",color:"#94A3B8"},{id:3,title:"\uc791\uc131\uc911\uc778 \ud398\uc77c\ub85c\uadf8 3",content:'"\uc2e0\uae30\uc2dc\ud5d8 \uc2e4\ud328\uc758 \uc6d0\uc778\uc744 \ucc3e\uc544\uc11c" \uc5ed\uc2dc \uc220\uc744 \ub9c8\uc2dc\uba74 \uc548\ub410\ub358 \uac78\uae4c?',progress:80,date:"3\uc6d4 \uc804",color:"#8E9EB1"}]}),(0,yo.jsx)(lp,{}),(0,yo.jsx)(ip.LogSection,{children:0===i.length?(0,yo.jsxs)(Th.EmptyStateWrapper,{children:[(0,yo.jsxs)(Th.EmptyTitle,{children:["\uc544\uc9c1 \uae30\ub85d\ub41c \uc2e4\ud328\uac00 \uc5c6\ub124\uc694.",(0,yo.jsx)("br",{}),(0,yo.jsx)("strong",{children:"\uccab \ubc88\uc9f8 \ud398\uc77c\ub85c\uadf8"}),"\ub97c \uc801\uc5b4\ubcfc\uae4c\uc694?"]}),(0,yo.jsx)(Th.EmptySubText,{children:"\uc2e4\ud328\ub97c \uc678\uba74\ud558\uc9c0 \uc54a\uace0 \uae30\ub85d\ud560 \ub54c, \ub2f9\uc2e0\uc758 \uac15\ub825\ud55c \uc131\uc7a5 \ub370\uc774\ud130\uac00 \ub429\ub2c8\ub2e4."}),(0,yo.jsx)(Th.StartButton,{onClick:()=>e("/fail-logs"),children:"\uc2dc\uc791\ud558\uae30"})]}):(0,yo.jsx)(Th.PostGrid,{children:i.map(t=>(0,yo.jsx)(Th.CardWrapper,{onClick:()=>e(`/logs/new/step1/${t.id}`),children:(0,yo.jsxs)(ip.CardContent,{children:[(0,yo.jsx)("h3",{children:t.title}),(0,yo.jsx)("p",{children:t.content}),(0,yo.jsx)(ip.DateText,{children:t.createdAt})]})},t.id))})})]})},cp=()=>(0,yo.jsx)("div",{children:(0,yo.jsx)(Bi,{})});const dp=n.p+"static/media/internet_2282299.e04308009aed7ddb21e7548586a88c90.svg";const up=n.p+"static/media/bitcoin-icons--arrow-up-filled.06b36772b47e37722bbcec9211d090d9.svg",hp={};hp.Wrapper=on.section`
    width: 100%;
    background-color: #f8f9fa;
    padding: 100px 0 0 0;
`,hp.Inner=on.div`
    max-width: 1320px;  /* 1200px → 1320px */
    margin: 0 auto;
    padding: 0 20px;    /* 0 60px → 0 20px */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .hero-title {
        font-size: ${bn.FONT_SIZE.h2};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: #1a1a1a;
        margin: 0;
        line-height: 1.2;
        letter-spacing: -1px;
    }

    .btn-text {
        font-size: ${bn.FONT_SIZE.h5};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.white};
        line-height: 1;
    }
`,hp.TitleWrap=on.div`
    display: flex;
    align-items: center;
    gap: 16px;
`,hp.GlobeIcon=on.img`
    flex-shrink: 0;
    width: 52px;
    height: 52px;
`,hp.StartBtn=on.button`
    width: 180px;
    height: 60px;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    background-size: 200% 100%;
    background-position: 0% 50%;
    transition: background-position 0.4s ease, transform 0.2s ease;
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.1);
    color: ${bn.PALETTE.white};
    border: none;

    &:hover {
        background-position: 100% 50%;
        transform: translateY(-5px);
    }
`,hp.ArrowIcon=on.img`
    width: 28px;
    height: 28px;
    transform: rotate(90deg);
    filter: brightness(0) invert(1);
`;const pp=()=>{const e=wi();return(0,yo.jsx)(hp.Wrapper,{children:(0,yo.jsxs)(hp.Inner,{children:[(0,yo.jsxs)(hp.TitleWrap,{children:[(0,yo.jsx)(hp.GlobeIcon,{src:dp,alt:"globe"}),(0,yo.jsx)("h1",{className:"hero-title",children:"\ub2e4\ub978 \uc0ac\ub78c\uc758 \uacbd\ud5d8\uc744 \ub9cc\ub098\ubcf4\uc138\uc694."})]}),(0,yo.jsxs)(hp.StartBtn,{onClick:()=>e("/logs/new/step1"),children:[(0,yo.jsx)("span",{className:"btn-text",children:"\uc2dc\uc791\ud558\uae30"}),(0,yo.jsx)(hp.ArrowIcon,{src:up,alt:"arrow"})]})]})})};const fp=n.p+"static/media/chatbot_10541415.750cbc333762b0ae534f3a52eb068cb5.svg";const gp=n.p+"static/media/uiw--right.09212a3c5213a08364e89b1c68c1b7db.svg",mp="data:image/png;base64,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",xp="data:image/png;base64,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",bp="data:image/png;base64,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",vp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABS9JREFUeAHNWc1LI0kUf4nfIhpRQVCY6D+wLiJ+XeKoCCqsiye97A47twR2LuJt3aMouNmLcxLXu4IIqx7EuIjgQcke1YOJyI4KSswqfuubepVUTXWnu5OOcZwfPKrT9arq9169etVVcUCaQEQXK+qY9DF5E392xYVwziQcL/9hsuZwONbga4ER9DDxM4mgfVCbaSZ18FKIEwxg5hBg4oZMgXXmYvIHvhyobxc8B2QxkxC+PEKYrndZwzpMLw6fQ9Ze7L4CSYGIGVmHAUk3KwJM3PA6oHT2PUtlYfWlhijGgjoIr0dSIAwxsufihVOnMAIpknx8fOTl0tISHITD8rcRmANga2sLZmdnNW0t4I5zMezMjTbR29uL1JRke3sbn56eEnTo3eLiotQbGBhAG/AYEQ2gTeTk5CCbHi7vfn5nqtfV1SX1ioqK0AYCgp8zTpJWmgdsgrWT8vD4YKqXm5sr9bKyssAGPMKrIkY/QBpgHuLCO3I6TfWIoICVngn6eLv4jx8gDdCggkSqBBBs4yc2hssZd21Key1bGJa/zUCrXHrekZC6NR5Xn+Pgn5PkBo9QEErR6P+w+Pci+Lw+aGhogNraWuju7uZeU1OLw2BQI7BFZ0SA4+HhAQ4ODsDn88HU1BRcX19L4xT0wf39fYBSyOXlJY6MjGBpaalMJapkZ2djU1NTwqoX9e9/eW+6dDs7O6Ue9a+CxqX3lBGETltbGzLCyMiKlDdPlgZ7enqkstpAiHj/GzNERWFhIbJVzHU2NjZMiVLuZLPBdaurqzV1t7e3vL2T1ZUUF8eemS6Vfr+f69zd3YWgqqoqQh0IMiyVaLxYUVGBlZWVODo6yhuJpE7WrqysIIs5HBsbMyVJeoS67+qwvLwcT05O5DsCm3rc3d3l+VUQVMm2tLSQWgRUr+Xl5XFRG9zc3EiC6s5Dz2JAfZ0eLLwSiOuNYdtrwkzSjBEXCjkoKCiQFRSjOzs7min3er2WJJ4LMuLi4kITp6JUHUYxGgkGg1xZEBKWiDAgi4088VzQtBPKyspkrFPZ3NyscRiTCBENq42J7PT0NI9PYRUtNlGXaZLt7e1yLFESaJERlpeX8fz8PEhv5/VECSUlJbyhmIa5ubmMeVXEbH9/v1zEwqPHx8fSCMUxa0TUb9TR0dGRnArRyerqatKFkwx393e8bGxslCSFMzY3NzULT8Hv4ryeACIzMzPDOyhm+U2QHR8f5/XC6lQh9EOhENIC/pISYwtmYWHBygkecW5POMiJaaZMIGKVhDp3u924t7cnDbLysKg7PT3Ft2/bNbEoSopDi34iciNFg+lXyU5MTGg6plxLZU1NDX6c/IiHh4cJg9AUfvrvE05OTnLDRBip052fn89DjLxtYey0StRjpiX2262tbT6Ymnf12y0NTDsMlfotWJQihLw+rzQoCbTHZ0xyFBExNjg4KEPB6LtAv7PovyE6OjowGo1qdjYLrIEeVl7Vk6VtdXh4GF0ulylJ9ZuBUt3Q0BAnqPaTAtyCn/5c72fFr5AE9MEsjiFnZ2fAdjZYX1+H/f19uLq6AmYAsPiF1tZWqK+vB5Y15PeujaPIn6z/D2ZEbV9A0OBWH9DJ6k0QBqsLiHhFG8SuVVJCMhJpkmxTSRKcBh1zRbBBNoOgMX/U3ztZAmM3eiH8ejC9yUuF7Ld/kauQpS3Wjy8H6vt5V+M6wuTdNcwcqC8PvBQwFrt/Yfp/3/jTIWg7d+hIeyB2gUFC0/cGtH+IRZn8C7GUM0/P+rSTKj4DZcsPZwaHi1YAAAAASUVORK5CYII=",yp=[{nickname:"\ud544\uae30\ub9c8\uc2a4\ud130",profileImg:mp,failText:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30\ub3c4 \ud544\uae30\ucc98\ub7fc \uae30\ucd9c\ubb38\uc81c \uc704\uc8fc\ub85c \ud588\ub354\ub2c8 \ub5a8\uc5b4\uc838\ubc84\ub838\ub2e4.",solution:"\uc2e4\uae30\ub3c4 \ubb38\uc81c\uac00 \uc911\uc694\ud558\uc9c0\ub9cc, \uc804\uccb4 \uac1c\ub150\uacfc \ucf54\ub4dc\ub97c \uc77d\uace0 \uc774\ud574\ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."},{nickname:"\ud558\uc6cc\ub4dc\uc290\uce20",profileImg:xp,failText:"\uce74\ud398 \ucc28\ub9ac\uace0 \uc2f6\uc5b4\uc11c \ucc3d\uc5c5 \uc900\ube44\ub97c 1\ub144 \ud588\ub294\ub370, \ub3c8\uc774 \uba3c\uc800 \ubc14\ub2e5\ub0ac\ub2e4.",solution:"\uc644\ubcbd\ud55c \uc900\ube44\ubcf4\ub2e4 \uc791\uc740 \uc2dc\uc791\uc774 \uba3c\uc800\uc608\uc694. \uc9c0\uae08 \ud560 \uc218 \uc788\ub294 \ucd5c\uc18c\ud55c\uc758 \uccab \ubc1c\uac78\uc74c\uc744 \ucc3e\uc544\ubcf4\uc138\uc694."},{nickname:"\uc870\uc6a9\ud55c\uad00\ucc30\uc790",profileImg:bp,failText:"\uc624\ub79c\ub9cc\uc5d0 \ub9cc\ub098\uac70\ub098 \ub2e4\ub978 \ubaa8\uc784\uc5d0 \ub098\uac00\uba74 \ub298 \uad6c\uc11d\uc5d0\ub9cc \uc788\ub2e4\uac00 \uc624\uac8c \ub418\ubc84\ub9b0\ub2e4.",solution:"\ub098\uc5d0\uac8c \ub9d0\uc744 \uac78\uc5b4\uc8fc\ub294 \uc0c1\ud669\uc744 \uae30\ub2e4\ub9ac\uae30\ubcf4\ub2e4, \uc791\uc740 \uc9c8\ubb38 \ud558\ub098\uac00 \ub300\ud654\uc758 \ubb38\uc744 \uc5f4\uc5b4\uc904 \uc218 \uc788\uc744 \uac70\uc5d0\uc694!"},{nickname:"\ube44\uc804\uacf5\uc758\ud76c\ub9dd",profileImg:vp,failText:"\ud30c\uc774\uc36c \ub3c5\ud559\ud558\ub2e4\uac00 \ud06c\ub864\ub9c1\uc5d0\uc11c \ubc30\uc6b0\uc9c0 \uc54a\uc740 \ub9e5\ub77d\uc774 \uc788\uc5b4\uc11c \ub9c9\ud600\ubc84\ub838\uc5b4\uc694.",solution:"\uac15\uc758\uc5d0\uc11c \ubcf4\uc774\ub358 \ucf54\ub4dc\uac00 \ub9c9\ud614\uc744 \ub54c, \uacf5\uc2dd \ubb38\uc11c\uc640 \uc5d0\ub7ec \uba54\uc2dc\uc9c0\ub97c \uc77d\ub294 \uc2b5\uad00\uc774 \ud070 \ub3c4\uc6c0\uc774 \ub3fc\uc694."}],wp={};wp.Wrapper=on.section`
    width: 100%;
    background-color: #f1f0f6;
    padding: 60px 0 80px;
`,wp.Inner=on.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;

    .solutions-title {
        font-size: ${bn.FONT_SIZE.h3};
        font-weight: ${bn.FONT_WEIGHT.bold};
        color: ${bn.PALETTE.black};
        margin: 0;
    }
`,wp.TitleWrap=on.div`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 48px;
`,wp.TrumpetIcon=on.img`
    width: 52px;
    height: 52px;
    flex-shrink: 0;
`,wp.Viewport=on.div`
    overflow: hidden;
`,wp.Track=on.div`
    display: flex;
    gap: 20px;
    transition: transform 0.4s ease;
    align-items: flex-start;
`,wp.Card=on.div`
    min-width: 280px;
    max-width: 280px;
    border-radius: 20px;
    background: ${bn.PALETTE.white};
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
`,wp.Profile=on.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,wp.ProfileCircle=on.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,wp.ProfileImg=on.img`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
`,wp.Nickname=on.span`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
`,wp.FailTextBox=on.div`
    background: #f1f0f6;
    border-radius: 15px;
    min-height: 88px;
    padding: 14px 16px;
    width: 100%;
`,wp.FailText=on.p`
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: #7c6faa;
    line-height: 1.6;
    margin: 0;
`,wp.SolLabel=on.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`,wp.SolLabelText=on.span`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
`,wp.SolIconWrap=on.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #027df0, #ab47ff);
    display: flex;
    align-items: center;
    justify-content: center;
`,wp.SolIcon=on.img`
    width: 32px;
    height: 32px;
    filter: brightness(0) invert(1);
`,wp.SolSummaryBox=on.div`
    background: #eeeaff;
    border-radius: 15px;
    padding: 14px 16px;
    width: 100%;
`,wp.SolSummary=on.p`
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: #4419ff;
    line-height: 1.6;
    margin: 0;
`,wp.NavButtons=on.div`
    display: flex;
    gap: 12px;
    margin-top: 36px;
`,wp.NavBtn=on.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${bn.PALETTE.white};
    border: 1px solid ${bn.GRAYSCALE[4]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
        background: #ede9f8;
    }
`,wp.NavIcon=on.img`
    width: 24px;
    color: ${bn.PALETTE.black};
`,wp.NavIconLeft=on.img`
    width: 24px;
    color: ${bn.PALETTE.black};
    transform: rotate(180deg);
`;const Ep=()=>{const[e,t]=(0,r.useState)(0);return(0,yo.jsx)(wp.Wrapper,{children:(0,yo.jsxs)(wp.Inner,{children:[(0,yo.jsxs)(wp.TitleWrap,{children:[(0,yo.jsx)(wp.TrumpetIcon,{src:"data:image/png;base64,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",alt:"trumpet"}),(0,yo.jsx)("h2",{className:"solutions-title",children:"\uc778\uae30\uc788\ub294 \uc194\ub8e8\uc158"})]}),(0,yo.jsx)(wp.Viewport,{children:(0,yo.jsx)(wp.Track,{style:{transform:`translateX(-${300*e}px)`},children:yp.map((e,t)=>(0,yo.jsxs)(wp.Card,{children:[(0,yo.jsxs)(wp.Profile,{children:[(0,yo.jsx)(wp.ProfileCircle,{children:(0,yo.jsx)(wp.ProfileImg,{src:e.profileImg,alt:e.nickname})}),(0,yo.jsx)(wp.Nickname,{children:e.nickname})]}),(0,yo.jsx)(wp.FailTextBox,{children:(0,yo.jsx)(wp.FailText,{children:e.failText})}),(0,yo.jsxs)(wp.SolLabel,{children:[(0,yo.jsx)(wp.SolLabelText,{children:"\ud398\ub85c"}),(0,yo.jsx)(wp.SolIconWrap,{children:(0,yo.jsx)(wp.SolIcon,{src:fp,alt:"fero"})})]}),(0,yo.jsx)(wp.SolSummaryBox,{children:(0,yo.jsx)(wp.SolSummary,{children:e.solution})})]},t))})}),(0,yo.jsxs)(wp.NavButtons,{children:[(0,yo.jsx)(wp.NavBtn,{onClick:()=>t(e=>Math.max(0,e-1)),children:(0,yo.jsx)(wp.NavIconLeft,{src:gp,alt:"prev"})}),(0,yo.jsx)(wp.NavBtn,{onClick:()=>t(e=>Math.min(yp.length-3,e+1)),children:(0,yo.jsx)(wp.NavIcon,{src:gp,alt:"next"})})]})]})})},jp=()=>(0,yo.jsxs)("div",{children:[(0,yo.jsx)(Ep,{}),(0,yo.jsx)(Bi,{})]});const Sp=n.p+"static/media/material-icon-theme_gemini-ai.beda6b37e6f531187a7f5ad16d21d4e6.svg";const Tp=n.p+"static/media/la_arrow-up.94ec16c355fdde75489ec5c3ac297700.svg";const Ap=n.p+"static/media/down.1fbac26917224788be1f2358cdfae24f.svg",kp=["\uc804\uccb4","\uacf5\ubd80/\ucde8\uc5c5","\uc0ac\uc5c5/\ucc3d\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],Cp=["\ucd5c\uc2e0\uc21c","\uc88b\uc544\uc694\uc21c","\uc870\ud68c\uc21c"],Lp={};Lp.Wrapper=on.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 100px 0;
`,Lp.Inner=on.div`
    max-width: 1320px;  /* 1200px → 1320px */
    margin: 0 auto;
    padding: 0 20px;    /* 0 60px → 0 20px */
    display: flex;
    flex-direction: column;
    gap: 100px;
`,Lp.SearchBoxWrap=on.div`
    width: 872px;
    height: 60px;
    border-radius: 15px;
    padding: 2px;
    background: linear-gradient(90deg, ${bn.PALETTE.primary.main}, ${bn.PALETTE.third.main});
    box-sizing: border-box;
    align-self: center;
`,Lp.SearchBox=on.div`
    width: 100%;
    height: 100%;
    border-radius: 13px;
    background: ${bn.PALETTE.white};
    display: flex;
    align-items: center;
    padding: 0 12px 0 16px;
    gap: 10px;
    box-sizing: border-box;
`,Lp.SearchIcon=on.img`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`,Lp.SearchInput=on.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
    font-family: inherit;

    &::placeholder {
        color: ${bn.GRAYSCALE[10]};
    }
`,Lp.SearchBtn=on.button`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${bn.PALETTE.primary.main}, ${bn.PALETTE.third.main});
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,Lp.ArrowIcon=on.img`
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
`,Lp.CategoryRow=on.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`,Lp.CategoryList=on.div`
    display: flex;
    gap: 24px;
`,Lp.CategoryBtn=on.button`
    width: 88px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[4]}};
    background: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.PALETTE.white}};
    color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.white:bn.GRAYSCALE[9]}};
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.bold};
    font-family: inherit;
    cursor: pointer;

    &:hover {
        border: 1.5px solid ${bn.PALETTE.third.main};
    }
`,Lp.SortWrap=on.div`
    position: relative;
`,Lp.SortBtn=on.button`
    width: 88px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid ${bn.GRAYSCALE[4]};
    background: ${bn.PALETTE.white};
    color: ${bn.GRAYSCALE[10]};
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.regular};
    font-family: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    white-space: nowrap;

    &:hover {
        border: 1.5px solid ${bn.PALETTE.third.main};
    }
`,Lp.DownIcon=on.img`
    width: ${bn.FONT_SIZE.h8};
    height: ${bn.FONT_SIZE.h8};
    transform: ${e=>{let{$open:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
    transition: transform 0.2s;
    filter: brightness(0) saturate(100%) invert(35%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%);
`,Lp.DropdownList=on.ul`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    width: 88px;
    background: ${bn.PALETTE.white};
    border: 1px solid ${bn.GRAYSCALE[4]};
    border-radius: 10px;
    overflow: hidden;
    z-index: 10;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    list-style: none;
    padding: 0;
    margin: 0;
`,Lp.DropdownItem=on.li`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[10]}};
    cursor: pointer;

    &:hover {
        color: ${bn.PALETTE.third.main};
        background: ${bn.PALETTE.third.light};
    }
`;const $p=()=>{const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)("\uc804\uccb4"),[o,a]=(0,r.useState)("\ucd5c\uc2e0\uc21c"),[l,s]=(0,r.useState)(!1),c=(0,r.useRef)(null);return(0,r.useEffect)(()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&s(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,yo.jsx)(Lp.Wrapper,{children:(0,yo.jsxs)(Lp.Inner,{children:[(0,yo.jsx)(Lp.SearchBoxWrap,{children:(0,yo.jsxs)(Lp.SearchBox,{children:[(0,yo.jsx)(Lp.SearchIcon,{src:Sp,alt:"search"}),(0,yo.jsx)(Lp.SearchInput,{placeholder:"\uc5b4\ub5a4 \ud398\uc77c\ub85c\uadf8\ub97c \ucc3e\uace0 \uacc4\uc138\uc694?",value:e,onChange:e=>t(e.target.value)}),(0,yo.jsx)(Lp.SearchBtn,{children:(0,yo.jsx)(Lp.ArrowIcon,{src:Tp,alt:"submit"})})]})}),(0,yo.jsxs)(Lp.CategoryRow,{children:[(0,yo.jsx)(Lp.CategoryList,{children:kp.map(e=>(0,yo.jsx)(Lp.CategoryBtn,{$active:n===e,onClick:()=>i(e),children:e},e))}),(0,yo.jsxs)(Lp.SortWrap,{ref:c,children:[(0,yo.jsxs)(Lp.SortBtn,{onClick:()=>s(!l),children:[(0,yo.jsx)("span",{children:o}),(0,yo.jsx)(Lp.DownIcon,{src:Ap,alt:"down",$open:l})]}),l&&(0,yo.jsx)(Lp.DropdownList,{children:Cp.map(e=>(0,yo.jsx)(Lp.DropdownItem,{$active:o===e,onClick:()=>{a(e),s(!1)},children:e},e))})]})]})]})})};const Ip=n.p+"static/media/hugeicons--view.472198bf674adb70d85605ddf299cfdc.svg";const Pp=n.p+"static/media/ph--heart-light.1b4f410f3525a6bdf5d42355e0b97243.svg",Fp="data:image/png;base64,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",Rp=[{id:1,category:"\uc778\uac04\uad00\uacc4",categoryVariant:"pink",date:"2026.03.03",title:"\uc791\uc740 \uc2e4\uc218\ub85c \uba40\uc5b4\uc838\ubc84\ub9b0 \uc6b0\ub9ac \uc0ac\uc774",vision:"\ub9d0\uc740 \uc5b8\uc81c\ub098 \uc0dd\uac01\ud558\uace0 \uc870\uc2ec\ud574\uc11c \ub9d0\ud558\uae30",nickname:"\uce5c\uad6c\uac00\ud544\uc694\ud55c\ub098",profileImg:Fp,views:45,likes:35,thumbnail:n.p+"static/media/image 277.e235b91c91ec1e5c7d96.png"},{id:2,category:"\uacf5\ubd80/\ucde8\uc5c5",categoryVariant:"blue",date:"2026.03.03",title:"\uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \uc2e4\uae30, \ud544\uae30 \ubd99\uace0 \ub098\uc11c \ubc29\uc2ec\ud588\ub2e4\uac00 \ub610 \ub5a8\uc5b4\uc84c\ub2e4.",vision:"\uc62c\ud574 \uc548\uc5d0 \uc815\ubcf4\ucc98\ub9ac\uae30\uc0ac \ucd5c\uc885 \ud569\uaca9\ud558\uae30",nickname:"\ud544\uae30\ub9c8\uc2a4\ud130",profileImg:mp,views:45,likes:35,thumbnail:n.p+"static/media/image 340.92ae91d7c428356c3ecc.png"},{id:3,category:"\uae30\ud0c0",categoryVariant:"gray",date:"2026.03.03",title:"\uc720\ub7fd \ubc30\ub0ad\uc5ec\ud589 \ud63c\uc790 \ub3c4\uc804\uae30",vision:"\uc720\ub7fd\uc5d0\uc11c \ud63c\uc790 1\ub144 \uc0b4\uae30 \uc131\uacf5\ud558\uae30",nickname:"\uc720\ub7fd\ud0d0\ud5d8\uac00",profileImg:bp,views:45,likes:35,thumbnail:n.p+"static/media/image 343.456efb626036ebb24805.png"},{id:4,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",categoryVariant:"purple",date:"2026.03.03",title:"\uce74\ud398 \ucc3d\uc5c5 \uc900\ube44\ud558\ub2e4\uac00 \ub3c8\uc774 \uba3c\uc800 \ubc14\ub2e5\ub0ac\ub2e4.",vision:"\ub2e8\uace8\uc190\ub2d8\uc774 \uc0dd\uae30\ub294 \ub0b4 \uac1c\uc778\uce74\ud398 \ud558\ub098 \ucc28\ub9ac\uae30",nickname:"\ud558\uc6cc\ub4dc\uc290\uce20",profileImg:xp,views:45,likes:35,thumbnail:n.p+"static/media/image 352.158f3fce8ffe5e1eb45c.png"},{id:5,category:"\uacf5\ubd80/\ucde8\uc5c5",categoryVariant:"blue",date:"2026.03.03",title:"\ud30c\uc774\uc36c \ub3c5\ud559\ud558\ub2e4\uac00 \ud06c\ub864\ub9c1\uc5d0\uc11c \ub9c9\ud614\ub2e4.",vision:"\ube44\uc804\uacf5\uc790\uc9c0\ub9cc \uc9c1\uc811 \ubb54\uac00 \ub9cc\ub4e4\uc5b4\ubcf4\uae30",nickname:"\ube44\uc804\uacf5\uc758\ud76c\ub9dd",profileImg:"data:image/png;base64,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",views:45,likes:35,thumbnail:n.p+"static/media/image 342.2190e937801aa30816b2.png"},{id:6,category:"\uc778\uac04\uad00\uacc4",categoryVariant:"pink",date:"2026.03.03",title:"\ubaa8\uc784 \ub098\uac00\uba74 \uad6c\uc11d\uc5d0\ub9cc \uc788\ub2e4\uac00 \uc624\ub294 \ub098",vision:"\uc0ac\ub78c\ub4e4\uacfc \ub300\ud654\ub97c \ud3b8\ud558\uac8c \ud560 \uc218 \uc788\ub294 \ub0b4\uac00 \ub418\uae30",nickname:"\ub300\ud654\uac00\ud544\uc694\ud574",profileImg:Fp,views:45,likes:35,thumbnail:n.p+"static/media/image 351.4786d8835e0abedf9a1a.png"},{id:7,category:"\uac74\uac15/\ub8e8\ud2f4",categoryVariant:"green",date:"2026.03.03",title:"\ud5ec\uc2a4\uc7a5 3\uac1c\uc6d4 \ub04a\uc5c8\ub294\ub370 \uc5f4 \ubc88 \ubc16\uc5d0 \uc548\uac14\ub2e4.",vision:"\uafb8\uc900\ud788 \uc6b4\ub3d9\ud574\uc11c \ubbf8\ub798\uc5d0\ub3c4 \uac74\uac15\ud55c \ubab8 \uc720\uc9c0\ud558\uae30",nickname:"\ubc14\ub514\uc9f1\uc9f1\ub9e8",profileImg:vp,views:45,likes:35,thumbnail:n.p+"static/media/image 350.dd7d00555e5e1e06bbc6.png"},{id:8,category:"\uacf5\ubd80/\ucde8\uc5c5",categoryVariant:"blue",date:"2026.03.03",title:"\ub124\uc774\ubc84 \ubc31\uc5d4\ub4dc \uac1c\ubc1c\uc790 \ucde8\uc5c5 \ub3c4\uc804",vision:"\uad6d\ub0b4 \ub300\ud615 IT \uae30\uc5c5 \uac1c\ubc1c\uc790\ub85c \uc785\uc0ac\ud558\uae30",nickname:"\ubc31\uc5d4\ub4dc\ub85c\ucde8\uc5c5\ud558\uae30",profileImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABK5JREFUeAGtVl1MW1Uc/597b7/WdhQ7GE0Ab91QiQotUzNqHK0P28hc7GKiwURXtsQ3H4gvLiabzgcTo/HZF0GUYDId6MYMQqBssQzZ1rJlA02xl43ZAgPaMfp5Pzz3thRou3EZ/m7a3HP+5/y/Py4CGWgdP2O/Sk46Bx5cawinwnQceAMCAZQCEd6uLPLtU9aO1ah2d39Q1eTeiBd6FPErf7vrk9CXp5a4BRpRJhCQChCBRQlC5rL4zgMSEiAkQ7Ad6ZlTT5349MPK99o2JTAQHKdtgaNdweSshVBVYlt4EGBjkIgELsZAGWlkfqvqcFhN1UzuGSJ345fp/qPmcZt3FiktSFWBRckTJoITOEDqCphTaGjrxKveC/5+Z+6ZdRZ67nudtpGGLkpvBRZf3goobC0buw7nq866Xi93fJcnMLgYpE1Xqr2U3mJgBRb+D1CIAjZ6PRyw3rSai03MOoG7/rQHGC5Jc/le3hIInGAVBOWb2jtkldbiX3uwxzW55Kd5IHM0xOToJED8dvoX+wcAZyTK6KlECoDE3VW6eJZfpYsQEIKp6KSl897vrqyFJZ49gQVCR3M5cVOmIjBW9zNE2Ji0Llbo4N2Jj+FKIgC8KAyXQu9z34JBUQRipRgoLbj8n8Hl6F+YM5XlQ2LFdckHTGTfNTPVGThnb2Lep0G9q4A7WHhWW7WqLX6GLd8DOVAGlP55YLkE1OiegTJVafaMgdJLJ9eCw7UaSd2lB+eG7cQfiZtOUOyEwkA5K/zg7BvYcx7Y5QkpIhwum7XghcJFhDTl0D7d4yS67rtrgdSCXAhIAEfxXthvPIy5R0E+1DDE+RqIaHLRgjaRmQR+xLLprfkGJ8qytJanKIKFxBxNRMmEQZDZS1LZpELYkQh+euks+GO3QS5iEDcQKCW/yMUJsX/suNRFcMeGN0sPQH2RRf59ngdCSerDci+IneNi6ByMRLywkhvUmvTfCGqkCRNPqIwMCHLbM4BGb4ZXRhulyG2m34re0SgMY8RBXf0Q2kS28ThheG0ldu0xybVy4y+wy/BO6UEf8bbxtW4h8e/DjuXt4NDhWtRA/2If9M5fyqOLM7Eg2Bl4Eaq6KUdJvbto+GVmCRE0L6wvYoFQgzs8CrNsOsxGqgiSmKE4I6ltT8OhG8egz9KB6RGpRRgVBgix85A7ZsXSKVE/yTSZD7ulVvL13+2ultDJVqQoX2cTKXaS+B1sUkZrHDNCg4dyRrH0hBfpGQHivmoH9oBqvauTd+Dz4pPNJ2qOt2V7185LNu89Clm4R3/mbBokVqIcgJmyecxpazO4vLvjCBe7FX5oDB4DYslw0Vthd3WHY2UvK9BsMjOd5T+0cMtj6cLeIhTitI9chUFLb7O52Mys7Of5r3fG4zxwo7GV0r5geNwPDRKz5ZZ84Z66X1sO7XC0raUVDNj4YoC2j781OJPCzVZZKWWlPEE4yVLTYKJKfJ7qH4+stWwFBVt9NT44Yxs1f2E+3azj5hmI+qWP3fy6TOsr0eKToBbCzOmyj5qDthFrIWGrNzbAmbk++4WQx3kx7rMkhOXaKM8axKvbCCqsJXRTDl2d+w2jrbuxxOHeiNd/SBXf2NtxLYEAAAAASUVORK5CYII=",views:45,likes:35,thumbnail:n.p+"static/media/image 348.081fc99699ac0f8ca930.png"},{id:9,category:"\uac74\uac15/\ub8e8\ud2f4",categoryVariant:"green",date:"2026.03.03",title:"\uae08\uc5f0 30\uc77c, \uae08\ub2e8\ud604\uc0c1 \uadf9\ubcf5\ud558\uae30",vision:"\uae08\uc5f0 \uc131\uacf5\ud574\uc11c \ud3d0 \uac74\uac15 \ud68c\ubcf5\ud558\uae30",nickname:"\ub2f4\ubc30\uc5d0\uc11c\uc0b4\uc544\ub0a8\uae30",profileImg:vp,views:45,likes:35,thumbnail:n.p+"static/media/Group 2956.5c1431b825f917d25d79.png"}],Op={pink:{bg:bn.PALETTE.fourth.light,color:bn.PALETTE.fourth.main},blue:{bg:bn.PALETTE.primary.light,color:bn.PALETTE.primary.main},green:{bg:bn.PALETTE.secondary.light,color:bn.PALETTE.secondary.main},purple:{bg:bn.PALETTE.third.light,color:bn.PALETTE.third.main},gray:{bg:bn.GRAYSCALE[2],color:bn.GRAYSCALE[10]}},Np={};Np.ListWrapper=on.div`
    width: 100%;
    background-color: #f8f9fa;
    padding: 0 0 100px;
`,Np.CardGrid=on.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 50px;
`,Np.Card=on.div`
    width: 100%;
    height: 500px;
    border-radius: 20px;
    background: ${bn.PALETTE.white};
    box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        transform: translateY(-8px);
        border: 2px solid ${bn.PALETTE.third.main};
        box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
    }
`,Np.CardBody=on.div`
    flex: 1;
    padding: 40px 40px 40px;
    display: flex;
    flex-direction: column;
    gap: 0;
`,Np.CardTop=on.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;   /* 10px → 30px */
`,Np.Category=on.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 28px;
    border-radius: 8px;
    font-size: ${bn.FONT_SIZE.h9};
    font-weight: ${bn.FONT_WEIGHT.bold};
    background-color: ${e=>{var t;let{$variant:n}=e;return(null===(t=Op[n])||void 0===t?void 0:t.bg)||bn.GRAYSCALE[2]}};
    color: ${e=>{var t;let{$variant:n}=e;return(null===(t=Op[n])||void 0===t?void 0:t.color)||bn.GRAYSCALE[10]}};
`,Np.Date=on.span`
    font-size: ${bn.FONT_SIZE.h10};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[9]};
`,Np.Title=on.p`
    font-size: ${bn.FONT_SIZE.h7};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
    margin: 0 0 20px 0;    /* 8px → 20px */
    line-height: 1.4;
    word-break: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Np.Vision=on.p`
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
    margin: 0;
    line-height: 1.5;
    flex: 1;
`,Np.CardBottom=on.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 12px;
`,Np.Profile=on.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Np.AvatarWrap=on.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(135deg, ${bn.PALETTE.primary.main}, ${bn.PALETTE.third.main});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`,Np.Avatar=on.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
`,Np.Nickname=on.span`
    font-size: ${bn.FONT_SIZE.h8};
    font-weight: ${bn.FONT_WEIGHT.bold};
    color: ${bn.PALETTE.black};
`,Np.Stats=on.div`
    display: flex;
    align-items: center;
    gap: 12px;
`,Np.Stat=on.span`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: ${bn.FONT_SIZE.h9};
    font-weight: ${bn.FONT_WEIGHT.regular};
    color: ${bn.GRAYSCALE[10]};
`,Np.Thumbnail=on.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    flex-shrink: 0;
`;const zp=()=>(0,yo.jsxs)("div",{children:[(0,yo.jsx)(pp,{}),(0,yo.jsx)($p,{}),(0,yo.jsx)(Np.ListWrapper,{children:(0,yo.jsx)(Np.CardGrid,{children:Rp.map(e=>(0,yo.jsx)(oo,{to:`/logs/result/${e.id}/detail`,style:{textDecoration:"none"},children:(0,yo.jsxs)(Np.Card,{children:[(0,yo.jsxs)(Np.CardBody,{children:[(0,yo.jsxs)(Np.CardTop,{children:[(0,yo.jsx)(Np.Category,{$variant:e.categoryVariant,children:e.category}),(0,yo.jsx)(Np.Date,{children:e.date})]}),(0,yo.jsx)(Np.Title,{children:e.title}),(0,yo.jsx)(Np.Vision,{children:e.vision}),(0,yo.jsxs)(Np.CardBottom,{children:[(0,yo.jsxs)(Np.Profile,{children:[(0,yo.jsx)(Np.AvatarWrap,{children:(0,yo.jsx)(Np.Avatar,{src:e.profileImg,alt:e.nickname})}),(0,yo.jsx)(Np.Nickname,{children:e.nickname})]}),(0,yo.jsxs)(Np.Stats,{children:[(0,yo.jsxs)(Np.Stat,{children:[(0,yo.jsx)("img",{src:Ip,alt:"views",width:"16",height:"16"}),e.views]}),(0,yo.jsxs)(Np.Stat,{children:[(0,yo.jsx)("img",{src:Pp,alt:"likes",width:"16",height:"16"}),e.likes]})]})]})]}),(0,yo.jsx)(Np.Thumbnail,{src:e.thumbnail,alt:e.title})]})},e.id))})})]}),Dp={id:1,title:"9\uae09 \uacf5\ubb34\uc6d0 \ud569\uaca9\ud558\uae30"},Bp=[{id:1,title:"9\uae09\uacf5\ubb34\uc6d0 \ud569\uaca9\ud558\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:2,title:"\uac74\uac15\ud558\uac8c \uc0b4\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:3,title:"\uc131\uacf5\uc801\uc778 \uc0b6 \uc0b4\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:4,title:"\ubcf4\ub514\ube4c\ub529 \ub300\ud68c \uc900\ube44",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:5,title:"\ubc25 \uba39\uae30",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:6,title:"\ud558\ud558",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70},{id:7,title:"\uc9c4\uc9dc\uc6c3\uaca8",startDate:"2026.03.01",endDate:"2027.03.14",dDay:70}],Mp=[{id:1,year:"2026",month:"1\uc6d4",projectTitle:"1\ubc88 \ud504\ub85c\uc81d\ud2b8",description:"\uc778\uac15 \uc2dc\uccad 50% \ub2e8\ucd95 & \ub2e8\uc6d0\ubcc4 \uae30\ucd9c \ud480\uc774 \ubcd1\ud589\ud574\uc11c \ud558\uae30\ub97c \ub178\ub825. \ub450\ubc88\uc9f8 \uc904\uae4c\uc9c0 \ud45c\uc2dc \ub420\uac70\uc5d0\uc694",bullets:["\uc2e4\ud328 \ubd84\uc11d \ubcf4\uae30","\uc2e4\ub0b4 \ub300\uccb4\uacc4\ud68d \ucd94\uac00","\uc8fc\ub9d0 \uae30\uc900 \uc644\ud654","\ubb50\ub4e0 \ud589\ub3d9 \ucd94\ucc9c"],images:["https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop"]},{id:2,year:"2026",month:"2\uc6d4",projectTitle:"2\ubc88 \ud504\ub85c\uc81d\ud2b8",description:"\uc778\uac15 \uc2dc\uccad 50% \ub2e8\ucd95 & \ub2e8\uc6d0\ubcc4 \uae30\ucd9c \ud480\uc774 \ubcd1\ud589\ud574\uc11c \ud558\uae30\ub97c \ub178\ub825. \ub450\ubc88\uc9f8 \uc904\uae4c\uc9c0 \ud45c\uc2dc \ub420\uac70\uc5d0\uc694",bullets:["\uc2e4\ud328 \ubd84\uc11d \ubcf4\uae30","\uc2e4\ub0b4 \ub300\uccb4\uacc4\ud68d \ucd94\uac00","\uc8fc\ub9d0 \uae30\uc900 \uc644\ud654","\ubb50\ub4e0 \ud589\ub3d9 \ucd94\ucc9c"],images:["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"]},{id:3,year:"2025",month:"5\uc6d4",projectTitle:"3\ubc88 \ud504\ub85c\uc81d\ud2b8",description:"\uc778\uac15 \uc2dc\uccad 50% \ub2e8\ucd95 & \ub2e8\uc6d0\ubcc4 \uae30\ucd9c \ud480\uc774 \ubcd1\ud589\ud574\uc11c \ud558\uae30\ub97c \ub178\ub825. \ub450\ubc88\uc9f8 \uc904\uae4c\uc9c0 \ud45c\uc2dc \ub420\uac70\uc5d0\uc694",bullets:["\uc2e4\ud328 \ubd84\uc11d \ubcf4\uae30","\uc2e4\ub0b4 \ub300\uccb4\uacc4\ud68d \ucd94\uac00","\uc8fc\ub9d0 \uae30\uc900 \uc644\ud654","\ubb50\ub4e0 \ud589\ub3d9 \ucd94\ucc9c"],images:["https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=250&fit=crop"]}],Gp={nickname:"\ube68\uac15\uc774",percentile:1.7,totalChecklists:176,avgUserChecklists:104,top3Checklists:[{text:"\uc6b4\ub3d9\ubcf5\uacfc \ubb3c\uc744 \uc790\uae30 \uc804\uc5d0 \ubbf8\ub9ac \uc900\ube44\ud558\uae30",count:15},{text:"\uac08\ub4f1 \uc0c1\ud669\uc5d0\uc11c 24\uc2dc\uac04 \ud6c4 \uacb0\uc815\ud558\uae30",count:7},{text:"\uc77c\uc744 3\uac1c \ub2e8\uc704\ub85c \ub098\ub220\uc11c \uc2dc\uac04 \ubc30\ubd84\ud558\uae30",count:5}],avgDays:197,aiUsageRate:23,projectCount:15},Hp=()=>{const[e,t]=(0,r.useState)(Bp[0]),[n,i]=(0,r.useState)(Mp);return(0,yo.jsx)(Bi,{context:{vision:Dp,projects:Bp,timeline:n,analysis:Gp,selectedProject:e,onSelectProject:t,onReorderTimeline:(e,t)=>{i(n=>{const r=[...n],[i]=r.splice(e,1);return r.splice(t,0,i),r})},onRemoveTimeline:e=>{i(t=>t.filter(t=>t.id!==e))},onAddTimeline:e=>{i(t=>[...t,{...e,id:Date.now()}])}}})},Wp="#F53102",Up="#333333",_p="#AB47FF",Yp="#4359FC",Qp="#FFFFFF",Zp="#F3E8FF",Vp="#F2F2F2",qp="#E6E6E6",Xp="#CCCCCC",Jp="#999999",Kp="#555555",ef=tn`box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);`,tf=tn`box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);`,nf={};nf.Wrapper=on.div`
  padding: 40px 60px 80px;
`,nf.Header=on.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`,nf.HeaderLeft=on.div``,nf.PageTitle=on.h1`
  ${Ga}
  color: ${Up};
`,nf.PageSubtitle=on.p`
  ${sl}
  color: ${Jp};
  margin-top: 6px;
`,nf.ProjectSelector=on.div`
  select {
    padding: 8px 14px;
    border: 1px solid ${qp};
    border-radius: 8px;
    ${sl}
    color: ${Up};
    background: ${Qp};
    cursor: pointer;
    outline: none;
  }
`,nf.VisionWrapper=on.div`
  position: relative;
  width: fit-content;
  margin-bottom: 40px;
`,nf.VisionCard=on.div`
  border: 1px solid ${qp};
  border-radius: 12px;
  padding: 20px 24px;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: ${_p};
  }
`,nf.VisionLabel=on.p`
  ${ll}
  color: ${Jp};
  margin-bottom: 6px;
`,nf.VisionTitleRow=on.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,nf.VisionChevron=on.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: ${e=>{let{$open:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
  transition: transform 0.2s;
`,nf.VisionDropdown=on.div`
  position: absolute;
  left: calc(100% + 8px);
  top: 0;
  min-width: 280px;
  border: 1px solid ${qp};
  border-radius: 10px;
  overflow: hidden;
  max-height: 320px;
  overflow-y: auto;
  ${tf}
  z-index: 100;
  background: ${Qp};
`,nf.VisionDropdownItem=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: ${e=>{let{$active:t}=e;return t?Zp:Qp}};
  cursor: pointer;
  border-bottom: 1px solid ${Vp};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${e=>{let{$active:t}=e;return t?Zp:Vp}};
  }
`,nf.VisionTitle=on.p`
  ${il}
  color: ${_p};
`,nf.TimelineSection=on.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 92px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, ${_p}, #4caf50);
  }
`,nf.YearGroup=on.div``,nf.YearLabel=on.div`
  display: none;
`,nf.YearItems=on.div``,nf.TimelineRow=on.div`
  display: flex;
  gap: 0;
  margin-bottom: 40px;
  cursor: grab;
  opacity: ${e=>{let{$isDragging:t}=e;return t?.4:1}};
  outline: ${e=>{let{$isDragOver:t}=e;return t?`2px dashed ${_p}`:"none"}};
  border-radius: 12px;
  transition: opacity 0.15s;

  &:active {
    cursor: grabbing;
  }
`,nf.DateCol=on.div`
  width: 80px;
  text-align: right;
  padding-right: 12px;
  flex-shrink: 0;
`,nf.YearText=on.p`
  ${el}
  color: ${Up};
  line-height: 1;
`,nf.MonthText=on.p`
  ${il}
  color: ${Up};
`,nf.DotCol=on.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24px;
  flex-shrink: 0;
`,nf.Dot=on.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${_p};
  flex-shrink: 0;
  margin-top: 4px;
`,nf.CardCol=on.div`
  width: 460px;
  flex-shrink: 0;
  padding-left: 20px;
  margin-left: ${e=>{let{$reverse:t}=e;return t?"160px":"0"}};
`,nf.TimelineCard=on.div`
  border-radius: 12px;
  overflow: hidden;
  ${ef}
`,nf.CarouselWrapper=on.div`
  position: relative;
`,nf.CarouselImg=on.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
`,nf.CarouselBtn=on.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${e=>{let{$left:t}=e;return t?"left: 8px;":"right: 8px;"}}
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,nf.CloseBtn=on.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`,nf.CardBody=on.div`
  padding: 16px;
  background: ${Qp};
`,nf.CardDesc=on.p`
  ${ll}
  color: ${Up};
  margin-bottom: 12px;
  line-height: 1.5;
`,nf.BulletGrid=on.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`,nf.BulletItem=on.p`
  ${ul}
  color: ${Kp};
  display: flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${_p};
    flex-shrink: 0;
  }
`,nf.AddSection=on.div`
  margin-bottom: 32px;
`,nf.AddButton=on.button`
  width: 100%;
  padding: 16px;
  background: ${Qp};
  border: 1.5px dashed ${Xp};
  border-radius: 10px;
  ${ol}
  color: ${Jp};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    border-color: ${_p};
    color: ${_p};
  }
`,nf.ProjectToggleList=on.div`
  margin-top: 8px;
  border: 1px solid ${qp};
  border-radius: 10px;
  overflow: hidden;
  max-height: 320px;
  overflow-y: auto;
  ${tf}
`,nf.ProjectToggleItem=on.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: ${e=>{let{$active:t}=e;return t?Zp:Qp}};
  cursor: pointer;
  border-bottom: 1px solid ${Vp};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${e=>{let{$active:t}=e;return t?Zp:Vp}};
  }
`,nf.ProjectToggleInfo=on.div``,nf.ProjectToggleName=on.p`
  ${il}
  color: ${Up};
`,nf.ProjectToggleDate=on.p`
  ${ul}
  color: ${Jp};
  margin-top: 3px;
`,nf.DDay=on.p`
  ${il}
  color: ${e=>{let{$active:t}=e;return t?_p:Kp}};
`,nf.AnalysisButton=on.button`
  width: 100%;
  padding: 20px;
  background: ${_p};
  color: ${Qp};
  ${tl}
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #9333ea;
  }
`,nf.AddForm=on.div`
  margin-top: 12px;
  border: 1px solid ${qp};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${Qp};
`,nf.FormRow=on.div`
  display: flex;
  gap: 8px;
`,nf.FormInput=on.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid ${qp};
  border-radius: 8px;
  ${sl}
  color: ${Up};
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${Xp};
  }

  &:focus {
    border-color: ${_p};
  }
`,nf.FormTextarea=on.textarea`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid ${qp};
  border-radius: 8px;
  ${sl}
  color: ${Up};
  outline: none;
  resize: none;
  box-sizing: border-box;
  height: 72px;

  &::placeholder {
    color: ${Xp};
  }

  &:focus {
    border-color: ${_p};
  }
`,nf.FormBtnRow=on.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`,nf.FormSubmitBtn=on.button`
  padding: 9px 20px;
  background: ${_p};
  color: ${Qp};
  ${ll}
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #9333ea;
  }
`,nf.FormCancelBtn=on.button`
  padding: 9px 20px;
  background: transparent;
  color: ${Jp};
  ${sl}
  border: 1px solid ${qp};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border-color: ${Jp};
  }
`;const rf=nf,of=e=>{let{vision:t,projects:n,timeline:i,selectedProject:o,onSelectProject:a,onStartAnalysis:l,onReorderTimeline:s,onRemoveTimeline:c,onAddTimeline:d}=e;const[u,h]=(0,r.useState)(!1),[p,f]=(0,r.useState)(!1),[g,m]=(0,r.useState)({}),x=(0,r.useRef)(null),[b,v]=(0,r.useState)(null),[y,w]=(0,r.useState)(null),[E,j]=(0,r.useState)(!1),[S,T]=(0,r.useState)({year:"",month:"",description:"",bullets:""}),A=e=>{var t;return null!==(t=g[e])&&void 0!==t?t:0},k=(e,t,n)=>{m(r=>{var i;const o=null!==(i=r[e])&&void 0!==i?i:0;return{...r,[e]:(o+t+n)%n}})},C=(()=>{const e=[];let t=null;return i.forEach(n=>{n.year!==t?(e.push({year:n.year,items:[n]}),t=n.year):e[e.length-1].items.push(n)}),e})(),L=C.flatMap(e=>e.items),$=new Map(L.map((e,t)=>[e.id,t])),I=()=>{x.current=null,v(null),w(null)};return(0,yo.jsxs)(rf.Wrapper,{children:[(0,yo.jsx)(rf.Header,{children:(0,yo.jsxs)(rf.HeaderLeft,{children:[(0,yo.jsx)(rf.PageTitle,{children:"TIME LINE"}),(0,yo.jsx)(rf.PageSubtitle,{children:"\ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\uae30\uae4c\uc9c0 \uc2e4\ud328\uc640 \uc131\uc7a5\uc758 \ud750\ub984\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694."})]})}),(0,yo.jsxs)(rf.VisionWrapper,{children:[(0,yo.jsxs)(rf.VisionCard,{onClick:()=>h(e=>!e),children:[(0,yo.jsx)(rf.VisionLabel,{children:"VISION"}),(0,yo.jsxs)(rf.VisionTitleRow,{children:[(0,yo.jsx)(rf.VisionTitle,{children:o.title}),(0,yo.jsx)(rf.VisionChevron,{$open:u,children:(0,yo.jsx)("svg",{width:"11",height:"4",viewBox:"0 0 11 4",fill:"none",children:(0,yo.jsx)("path",{d:"M1 0.5L5.5 3.5L10 0.5",stroke:"#8D8D8D",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),u&&(0,yo.jsx)(rf.VisionDropdown,{children:n.map(e=>(0,yo.jsxs)(rf.VisionDropdownItem,{$active:e.id===o.id,onClick:()=>{a(e),h(!1)},children:[(0,yo.jsxs)(rf.ProjectToggleInfo,{children:[(0,yo.jsx)(rf.ProjectToggleName,{children:e.title}),(0,yo.jsxs)(rf.ProjectToggleDate,{children:[e.startDate," ~ ",e.endDate]})]}),(0,yo.jsxs)(rf.DDay,{$active:e.id===o.id,children:["D + ",e.dDay]})]},e.id))})]}),(0,yo.jsx)(rf.TimelineSection,{children:C.map(e=>(0,yo.jsxs)(rf.YearGroup,{children:[(0,yo.jsx)(rf.YearLabel,{children:e.year}),(0,yo.jsx)(rf.YearItems,{children:e.items.map((e,t)=>{const n=$.get(e.id),r=n%2===1;return(0,yo.jsxs)(rf.TimelineRow,{draggable:!0,onDragStart:t=>((e,t,n)=>{x.current=t,w(n),e.dataTransfer.effectAllowed="move"})(t,n,e.id),onDragOver:e=>((e,t)=>{e.preventDefault(),e.dataTransfer.dropEffect="move",v(t)})(e,n),onDrop:e=>((e,t)=>{e.preventDefault(),null!==x.current&&x.current!==t&&s(x.current,t),x.current=null,v(null),w(null)})(e,n),onDragEnd:I,$isDragging:y===e.id,$isDragOver:b===n&&y!==e.id,children:[(0,yo.jsxs)(rf.DateCol,{children:[0===t&&(0,yo.jsx)(rf.YearText,{children:e.year}),(0,yo.jsx)(rf.MonthText,{children:e.month})]}),(0,yo.jsx)(rf.DotCol,{children:(0,yo.jsx)(rf.Dot,{})}),(0,yo.jsx)(rf.CardCol,{$reverse:r,children:(0,yo.jsxs)(rf.TimelineCard,{children:[(0,yo.jsxs)(rf.CarouselWrapper,{children:[e.images&&e.images.length>0?(0,yo.jsx)(rf.CarouselImg,{src:e.images[A(e.id)],alt:"timeline"}):null,e.images&&e.images.length>1&&(0,yo.jsxs)(yo.Fragment,{children:[(0,yo.jsx)(rf.CarouselBtn,{$left:!0,onClick:t=>{t.stopPropagation(),k(e.id,-1,e.images.length)},children:"\u2039"}),(0,yo.jsx)(rf.CarouselBtn,{onClick:t=>{t.stopPropagation(),k(e.id,1,e.images.length)},children:"\u203a"})]}),(0,yo.jsx)(rf.CloseBtn,{onClick:t=>{t.stopPropagation(),c(e.id)},children:"\xd7"})]}),(0,yo.jsxs)(rf.CardBody,{children:[(0,yo.jsx)(rf.CardDesc,{children:e.description}),(0,yo.jsx)(rf.BulletGrid,{children:e.bullets.map((e,t)=>(0,yo.jsx)(rf.BulletItem,{children:e},t))})]})]})})]},e.id)})})]},e.year))}),(0,yo.jsxs)(rf.AddSection,{children:[(0,yo.jsx)(rf.AddButton,{onClick:()=>{j(e=>!e),f(!1)},children:"+ \uc0c8 \ud56d\ubaa9 \ucd94\uac00"}),E&&(0,yo.jsxs)(rf.AddForm,{children:[(0,yo.jsxs)(rf.FormRow,{children:[(0,yo.jsx)(rf.FormInput,{placeholder:"\uc5f0\ub3c4 (\uc608: 2026)",value:S.year,onChange:e=>T({...S,year:e.target.value})}),(0,yo.jsx)(rf.FormInput,{placeholder:"\uc6d4 (\uc608: 3\uc6d4)",value:S.month,onChange:e=>T({...S,month:e.target.value})})]}),(0,yo.jsx)(rf.FormTextarea,{placeholder:"\uc124\uba85\uc744 \uc785\ub825\ud558\uc138\uc694",value:S.description,onChange:e=>T({...S,description:e.target.value})}),(0,yo.jsx)(rf.FormInput,{placeholder:"\ud56d\ubaa9 (\uc27c\ud45c\ub85c \uad6c\ubd84, \uc608: \uc2e4\ud328 \ubd84\uc11d, \ub300\uccb4\uacc4\ud68d \ucd94\uac00)",value:S.bullets,onChange:e=>T({...S,bullets:e.target.value})}),(0,yo.jsxs)(rf.FormBtnRow,{children:[(0,yo.jsx)(rf.FormCancelBtn,{onClick:()=>{j(!1),T({year:"",month:"",description:"",bullets:""})},children:"\ucde8\uc18c"}),(0,yo.jsx)(rf.FormSubmitBtn,{onClick:()=>{S.year&&S.month&&S.description&&(d({year:S.year,month:S.month,projectTitle:o.title,description:S.description,bullets:S.bullets?S.bullets.split(",").map(e=>e.trim()):[],images:[]}),T({year:"",month:"",description:"",bullets:""}),j(!1))},children:"\ucd94\uac00"})]})]})]}),(0,yo.jsx)(rf.AnalysisButton,{onClick:l,children:"\uc131\uacfc\ub7ad\ud06c \ubd84\uc11d\ud558\uae30"})]})},af=()=>{const e=ji(),t=wi();return(0,yo.jsx)(of,{...e,onStartAnalysis:()=>t("analysis"),onReorderTimeline:e.onReorderTimeline,onRemoveTimeline:e.onRemoveTimeline,onAddTimeline:e.onAddTimeline})},lf={},sf=dn`
  to { transform: rotate(360deg); }
`,cf=dn`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;lf.Wrapper=on.div`
  padding: 40px 60px 80px;
  animation: ${cf} 0.3s ease;
`,lf.Header=on.div`
  margin-bottom: 32px;
`,lf.PageTitle=on.h1`
  ${Ga}
  color: ${Up};
`,lf.PageSubtitle=on.p`
  ${sl}
  color: ${Jp};
  margin-top: 6px;
`,lf.VisionCard=on.div`
  border: 1px solid ${qp};
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 48px;
  display: inline-block;
  min-width: 220px;
`,lf.VisionLabel=on.p`
  ${ll}
  color: ${Jp};
  margin-bottom: 6px;
`,lf.VisionTitle=on.p`
  ${il}
  color: ${_p};
`,lf.AnalysisBox=on.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,lf.AnalysisTitle=on.h2`
  ${Ja}
  color: ${Up};
  text-align: center;
`,lf.Nickname=on.span`
  color: ${Yp};
  font-weight: 800;
`,lf.GaugeSection=on.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,lf.GaugeLabel=on.div`
  display: flex;
  justify-content: space-between;
  ${sl}
  color: ${Kp};
`,lf.GaugePercent=on.span`
  font-weight: 700;
  color: ${_p};
`,lf.GaugeTrack=on.div`
  width: 100%;
  height: 16px;
  background: ${Vp};
  border-radius: 999px;
  overflow: hidden;
`,lf.GaugeFill=on.div`
  height: 100%;
  background: linear-gradient(90deg, ${_p}, ${Yp});
  border-radius: 999px;
  transition: width 0.15s ease-out;
`,lf.StepList=on.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  background: ${Vp};
  border-radius: 12px;
  border: 1px solid ${qp};
`,lf.StepItem=on.div`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: ${e=>{let{$done:t}=e;return t?1:.45}};
  transition: opacity 0.3s;
`,lf.StepIcon=on.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${e=>{let{$done:t}=e;return t?_p:"transparent"}};
  border: ${e=>{let{$done:t}=e;return t?"none":`2px solid ${Xp}`}};
  color: ${Qp};
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,lf.Spinner=on.div`
  width: 12px;
  height: 12px;
  border: 2px solid ${qp};
  border-top-color: ${_p};
  border-radius: 50%;
  animation: ${sf} 0.7s linear infinite;
`,lf.StepText=on.p`
  ${sl}
  font-weight: ${e=>{let{$done:t}=e;return t?"600":"400"}};
  color: ${e=>{let{$done:t}=e;return t?Up:Jp}};
`;const df=lf,uf=["\uc9c0\uac01 \ubcc0\ubcc4 \ubd84\uc11d \uc911","\uc720\ucd94\ube44\uad50 \ucc98\ub9ac \uc911","\ube44\uad50\ucd94\ub860 \uacc4\uc0b0 \uc911","\ud328\ud134 \ud559\uc2b5 \uc644\ub8cc","\uc131\uacfc \ub370\uc774\ud130 \uc9d1\uacc4 \uc911","\ub7ad\ud06c \uc0b0\ucd9c \uc644\ub8cc"],hf=1e4,pf=()=>{const{vision:e,analysis:t}=ji(),n=wi(),[i,o]=(0,r.useState)(0),[a,l]=(0,r.useState)([]);return(0,r.useEffect)(()=>{const e=Date.now();let t=0;const r=setInterval(()=>{const n=Date.now()-e,i=Math.min(n/hf,1),a=Math.floor(100*i),l=Math.floor(8*Math.random())-3,s=Math.min(100,Math.max(t,a+l));t=s,o(s),i>=1&&(clearInterval(r),o(100))},200),i=hf/(uf.length+1),a=uf.map((e,t)=>setTimeout(()=>{l(e=>[...e,t])},i*(t+1))),s=setTimeout(()=>{n("../result")},10400);return()=>{clearInterval(r),a.forEach(clearTimeout),clearTimeout(s)}},[n]),(0,yo.jsxs)(df.Wrapper,{children:[(0,yo.jsxs)(df.Header,{children:[(0,yo.jsx)(df.PageTitle,{children:"TIME LINE"}),(0,yo.jsx)(df.PageSubtitle,{children:"\ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\uae30\uae4c\uc9c0 \uc2e4\ud328\uc640 \uc131\uc7a5\uc758 \ud750\ub984\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694."})]}),(0,yo.jsxs)(df.VisionCard,{children:[(0,yo.jsx)(df.VisionLabel,{children:"VISION"}),(0,yo.jsx)(df.VisionTitle,{children:e.title})]}),(0,yo.jsxs)(df.AnalysisBox,{children:[(0,yo.jsxs)(df.AnalysisTitle,{children:[(0,yo.jsx)(df.Nickname,{children:t.nickname})," \ub2d8\uc758 \ubaa9\ud45c \ub2ec\uc131\ub960 \ubd84\uc11d \uc911..."]}),(0,yo.jsxs)(df.GaugeSection,{children:[(0,yo.jsxs)(df.GaugeLabel,{children:[(0,yo.jsx)("span",{children:"\ubd84\uc11d \uc9c4\ud589\ub960"}),(0,yo.jsxs)(df.GaugePercent,{children:[i,"%"]})]}),(0,yo.jsx)(df.GaugeTrack,{children:(0,yo.jsx)(df.GaugeFill,{style:{width:`${i}%`}})})]}),(0,yo.jsx)(df.StepList,{children:uf.map((e,t)=>(0,yo.jsxs)(df.StepItem,{$done:a.includes(t),children:[(0,yo.jsx)(df.StepIcon,{$done:a.includes(t),children:a.includes(t)?"\u2713":(0,yo.jsx)(df.Spinner,{})}),(0,yo.jsx)(df.StepText,{$done:a.includes(t),children:e})]},t))})]})]})},ff={},gf=dn`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;ff.Wrapper=on.div`
  padding: 40px 60px 80px;
  animation: ${gf} 0.3s ease;
`,ff.Header=on.div`
  margin-bottom: 32px;
`,ff.PageTitle=on.h1`
  ${Ga}
  color: ${Up};
`,ff.PageSubtitle=on.p`
  ${sl}
  color: ${Jp};
  margin-top: 6px;
`,ff.VisionCard=on.div`
  border: 1px solid ${qp};
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 48px;
  display: inline-block;
  min-width: 220px;
`,ff.VisionLabel=on.p`
  ${ll}
  color: ${Jp};
  margin-bottom: 6px;
`,ff.VisionTitle=on.p`
  ${il}
  color: ${_p};
`,ff.RankTitle=on.h2`
  ${Ja}
  color: ${Up};
  text-align: center;
  margin-bottom: 10px;
  line-height: 1.4;
`,ff.Nickname=on.span`
  color: ${Yp};
  font-weight: 800;
`,ff.Highlight=on.span`
  color: ${Wp};
  font-weight: 800;
`,ff.RankSubtitle=on.p`
  ${sl}
  color: ${Jp};
  text-align: center;
  margin-bottom: 36px;
`,ff.BellCurveBox=on.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ff.StanineTable=on.table`
  width: 100%;
  border-collapse: collapse;
  ${sl}
`,ff.StanineRow=on.tr`
  background: ${e=>{let{$label:t}=e;return t?Vp:"transparent"}};
`,ff.StanineHeader=on.td`
  text-align: left;
  ${ll}
  color: ${Up};
  padding: 6px 4px;
`,ff.StanineCell=on.td`
  text-align: center;
  padding: 5px 2px;
  color: ${Kp};
  font-weight: ${e=>{let{$bold:t}=e;return t?"700":"400"}};
`,ff.ChecklistSummary=on.p`
  ${tl}
  color: ${Up};
  text-align: center;
  margin-bottom: 10px;
`,ff.CountHighlight=on.span`
  color: ${Wp};
  font-weight: 800;
  font-size: 20px;
`,ff.ChecklistCompare=on.p`
  ${sl}
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`,ff.StatsCard=on.div`
  border: 1px solid ${qp};
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 32px;
  ${ef}
`,ff.StatsSection=on.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ff.StatsSectionTitle=on.p`
  ${il}
  color: ${Up};
`,ff.StatsLabel=on.p`
  ${ll}
  color: ${Jp};
`,ff.Top3Item=on.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,ff.Top3Bullet=on.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${_p};
  flex-shrink: 0;
`,ff.Top3Text=on.p`
  flex: 1;
  ${sl}
  color: ${Up};
`,ff.Top3Count=on.p`
  ${ll}
  color: ${Wp};
`,ff.StatsDivider=on.hr`
  border: none;
  border-top: 1px solid ${Vp};
  margin: 0;
`,ff.StatItem=on.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  ${sl}
  color: ${Kp};
  line-height: 1.6;
`,ff.StatBullet=on.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${_p};
  flex-shrink: 0;
  margin-top: 5px;
`,ff.StatHighlight=on.span`
  color: ${Wp};
  font-weight: 700;
`,ff.BackButton=on.button`
  background: none;
  border: 1.5px solid ${qp};
  border-radius: 8px;
  padding: 12px 20px;
  ${sl}
  color: #666;
  cursor: pointer;

  &:hover {
    border-color: ${_p};
    color: ${_p};
  }
`;const mf=ff,xf=[{stanine:1,percent:4,percentile:4},{stanine:2,percent:7,percentile:11},{stanine:3,percent:12,percentile:23},{stanine:4,percent:17,percentile:40},{stanine:5,percent:20,percentile:60},{stanine:6,percent:17,percentile:77},{stanine:7,percent:12,percentile:89},{stanine:8,percent:7,percentile:96},{stanine:9,percent:4,percentile:100}],bf=()=>{const e=120,t=[];for(let n=0;n<=540;n+=2){const r=n/540*6-3,i=Math.exp(-.5*r*r);t.push(`${n},${e-i*e*.9}`)}return(0,yo.jsxs)("svg",{viewBox:"0 0 540 120",width:"100%",height:"100%",children:[(0,yo.jsx)("polyline",{points:t.join(" "),fill:"none",stroke:"#333",strokeWidth:"2"}),[72,144,216,288,360,432,504].map((t,n)=>(0,yo.jsx)("line",{x1:t,y1:0,x2:t,y2:e,stroke:"#888",strokeWidth:"1",strokeDasharray:"3,3"},n))]})},vf=()=>{const{vision:e,analysis:t}=ji(),n=wi();return(0,yo.jsxs)(mf.Wrapper,{children:[(0,yo.jsxs)(mf.Header,{children:[(0,yo.jsx)(mf.PageTitle,{children:"TIME LINE"}),(0,yo.jsx)(mf.PageSubtitle,{children:"\ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud558\uae30\uae4c\uc9c0 \uc2e4\ud328\uc640 \uc131\uc7a5\uc758 \ud750\ub984\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694."})]}),(0,yo.jsxs)(mf.VisionCard,{children:[(0,yo.jsx)(mf.VisionLabel,{children:"VISION"}),(0,yo.jsx)(mf.VisionTitle,{children:e.title})]}),(0,yo.jsxs)(mf.RankTitle,{children:[(0,yo.jsx)(mf.Nickname,{children:t.nickname})," \ub2d8\uc758 \ubaa9\ud45c \ub2ec\uc131\ub960\uc740 \uc0c1\uc704"," ",(0,yo.jsxs)(mf.Highlight,{children:[t.percentile,"%"]})," \uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4 !"]}),(0,yo.jsx)(mf.RankSubtitle,{children:"\uc544\uc8fc \ud0c1\uc6d4\ud569\ub2c8\ub2e4. \ubaa9\ud45c\ub97c \uc704\ud574 \ub9dd\uc124\uc774\uace0 \ub2ec\ub824\uc654\uad70\uc694. \uadf8\uac04 \uc790\uc2e0\uc744 \uc704\ud574 \uc624\ub298\ud558\ub8e8\ub97c \ud22c\uc790\ud558\ub294\uac74 \uc5b4\ub5a8\uae4c\uc694 ?"}),(0,yo.jsxs)(mf.BellCurveBox,{children:[(0,yo.jsx)(bf,{}),(0,yo.jsx)(mf.StanineTable,{children:(0,yo.jsxs)("tbody",{children:[(0,yo.jsx)(mf.StanineRow,{children:xf.map(e=>(0,yo.jsxs)(mf.StanineCell,{children:[e.percent,"%"]},e.stanine))}),(0,yo.jsx)(mf.StanineRow,{$label:!0,children:(0,yo.jsx)(mf.StanineHeader,{colSpan:9,children:"Stanine"})}),(0,yo.jsx)(mf.StanineRow,{children:xf.map(e=>(0,yo.jsx)(mf.StanineCell,{$bold:!0,children:e.stanine},e.stanine))}),(0,yo.jsx)(mf.StanineRow,{$label:!0,children:(0,yo.jsx)(mf.StanineHeader,{colSpan:9,children:"Percentile"})}),(0,yo.jsx)(mf.StanineRow,{children:xf.map(e=>(0,yo.jsx)(mf.StanineCell,{children:e.percentile},e.stanine))})]})})]}),(0,yo.jsxs)(mf.ChecklistSummary,{children:["\uc774 \ube44\uc804\uc744 \ub2ec\uc131\ud558\uba74\uc11c \ucd1d ",(0,yo.jsx)(mf.CountHighlight,{children:t.totalChecklists})," \uac1c\uc758 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \ub2ec\uc131 \ud588\uc2b5\ub2c8\ub2e4"]}),(0,yo.jsxs)(mf.ChecklistCompare,{children:[(0,yo.jsx)(mf.Nickname,{children:t.nickname})," \ub2d8\uc740 \ud3c9\uade0 \uc774\uc6a9\uc790\ub4e4\uc5d0 \ube44\ud574"," ",(0,yo.jsx)(mf.CountHighlight,{children:t.totalChecklists-t.avgUserChecklists}),"\uac1c \ub9ce\uc740 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c \ub2ec\uc131 \ud588\uc2b5\ub2c8\ub2e4."]}),(0,yo.jsxs)(mf.StatsCard,{children:[(0,yo.jsxs)(mf.StatsSection,{children:[(0,yo.jsx)(mf.StatsSectionTitle,{children:"\ud83d\udd14 \ucd5c\ub2e4 \ub2ec\uc131 \uccb4\ud06c\ub9ac\uc2a4\ud2b8"}),(0,yo.jsx)(mf.StatsLabel,{children:"Top 3"}),t.top3Checklists.map((e,t)=>(0,yo.jsxs)(mf.Top3Item,{children:[(0,yo.jsx)(mf.Top3Bullet,{}),(0,yo.jsx)(mf.Top3Text,{children:e.text}),(0,yo.jsxs)(mf.Top3Count,{children:[e.count,"\ud68c"]})]},t))]}),(0,yo.jsx)(mf.StatsDivider,{}),(0,yo.jsxs)(mf.StatsSection,{children:[(0,yo.jsx)(mf.StatsSectionTitle,{children:"\ud3c9\uade0 \ubaa9\ud45c\ub2ec\uc131 \uae30\uac04"}),(0,yo.jsxs)(mf.StatItem,{children:[(0,yo.jsx)(mf.StatBullet,{}),(0,yo.jsxs)("span",{children:["\uc774\uc6a9\uc790\ub4e4\uc740 \ud3c9\uade0\uc801\uc73c\ub85c ",(0,yo.jsxs)(mf.StatHighlight,{children:[t.avgDays,"\uc77c"]})," \ub9cc\uc5d0 \ubaa9\ud45c\ub97c \ub2ec\uc131 \ud588\uc2b5\ub2c8\ub2e4."]})]})]}),(0,yo.jsx)(mf.StatsDivider,{}),(0,yo.jsxs)(mf.StatsSection,{children:[(0,yo.jsx)(mf.StatsSectionTitle,{children:"AI \uc0ac\uc6a9 \uc5ec\ubd80"}),(0,yo.jsxs)(mf.StatItem,{children:[(0,yo.jsx)(mf.StatBullet,{}),(0,yo.jsxs)("span",{children:["\uc774\uc6a9\uc790\ub4e4\uc740 \ud3c9\uade0\uc801\uc73c\ub85c ",(0,yo.jsxs)(mf.StatHighlight,{children:[t.aiUsageRate,"%"]})," \uac00 \uc9c1\uc811 \ud504\ub85c\uc81d\ud2b8\ub97c \uc791\uc131 \ud588\uc2b5\ub2c8\ub2e4."]})]})]}),(0,yo.jsx)(mf.StatsDivider,{}),(0,yo.jsxs)(mf.StatsSection,{children:[(0,yo.jsx)(mf.StatsSectionTitle,{children:"\ud504\ub85c\uc81d\ud2b8 \uac1c\uc218"}),(0,yo.jsxs)(mf.StatItem,{children:[(0,yo.jsx)(mf.StatBullet,{}),(0,yo.jsxs)("span",{children:["\uc774\uc6a9\uc790\ub4e4\uc740 \ud3c9\uade0\uc801\uc73c\ub85c ",(0,yo.jsxs)(mf.StatHighlight,{children:[t.projectCount,"\uac1c"]})," \uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc791\uc131 \ud588\uc2b5\ub2c8\ub2e4."]})]})]})]}),(0,yo.jsx)(mf.BackButton,{onClick:()=>n("/chronology"),children:"\u2190 \ud0c0\uc784\ub77c\uc778\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})]})},yf=()=>(0,yo.jsx)(Bi,{});const wf=n.p+"static/media/la_arrow-up.94ec16c355fdde75489ec5c3ac297700.svg";const Ef=n.p+"static/media/check-small.d4615b72df3b3bb062fca9a0ec8faca5.svg",jf=[{id:1,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"B \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",desc:"\ubbf8\ud305 \uc131\uacf5\uc73c\ub85c \uc218\ucd9c\uc561 \uc62c\ub9ac\uae30",date:"2024.03.15 \uc791\uc131"},{id:2,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"A \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",desc:"\ubbf8\ud305 \uc131\uacf5\uc73c\ub85c \uc218\ucd9c\uc561 \uc62c\ub9ac\uae30",date:"2023.11.02 \uc791\uc131"},{id:3,category:"\uc0ac\uc5c5/\ucc3d\uc5c5",title:"C \ud22c\uc790\uc0ac \ubbf8\ud305 \uac70\uc808",desc:"\ubbf8\ud305 \uc131\uacf5\uc73c\ub85c \uc218\ucd9c\uc561 \uc62c\ub9ac\uae30",date:"2023.11.02 \uc791\uc131"}],Sf=["\uc0ac\uc5c5/\ucc3d\uc5c5","\uacf5\ubd80/\ucde8\uc5c5","\uc778\uac04\uad00\uacc4","\uac74\uac15/\ub8e8\ud2f4","\uae30\ud0c0"],Tf={};Tf.Overlay=on.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    ${$a}
`,Tf.ModalWrap=on.div`
    width: 520px;
    background: ${bn.PALETTE.white};
    border-radius: 15px;
    padding: 40px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,Tf.CloseBtn=on.button`
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 20px;
    color: ${bn.GRAYSCALE[7]};
`,Tf.TitleRow=on.div`
    margin-bottom: 24px;
`,Tf.Title=on.h2`
    ${Ya}
    color: ${bn.PALETTE.black};
`,Tf.CategoryRow=on.div`
    ${Ra}
    gap: 8px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${bn.GRAYSCALE[3]};
`,Tf.CategoryChip=on.button`
    padding: 8px 16px;
    border-radius: 10px;
    ${ll}
    background: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.PALETTE.white}};
    color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.white:bn.GRAYSCALE[9]}};
    border: 1px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[4]}};
`,Tf.LogList=on.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
`,Tf.LogCard=on.div`
    ${Fa}
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[4]}};
    background: ${bn.PALETTE.white};
`,Tf.LogCategory=on.span`
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    ${fl}
    background: ${bn.PALETTE.third.light};
    color: ${bn.PALETTE.third.main};
    margin-bottom: 8px;
`,Tf.LogTitle=on.p`
    ${ol}
    color: ${bn.GRAYSCALE[9]};
    margin-bottom: 8px;

    strong {
        ${il}
        color: ${bn.PALETTE.black};
    }
`,Tf.LogDate=on.p`
    ${sl}
    color: ${bn.GRAYSCALE[7]};
`,Tf.RadioCircle=on.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${$a}
    border: 1px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[4]}};
    background-color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.PALETTE.white}};
`,Tf.CheckIcon=on.img`
    width: 14px;
    height: 14px;
    filter: brightness(0) invert(1);
`,Tf.SubmitBtn=on.button`
    width: 100%;
    height: 52px;
    border-radius: 10px;
    background: ${bn.PALETTE.third.main};
    color: ${bn.PALETTE.white};
    ${il}

    &:hover {
        background: #9333ea;
    }
`;const Af=e=>{let{onClose:t,onNext:n}=e;const[i,o]=(0,r.useState)("\uc0ac\uc5c5/\ucc3d\uc5c5"),[a,l]=(0,r.useState)(1);return(0,yo.jsx)(Tf.Overlay,{children:(0,yo.jsxs)(Tf.ModalWrap,{children:[(0,yo.jsx)(Tf.CloseBtn,{onClick:t,children:"\u2715"}),(0,yo.jsx)(Tf.TitleRow,{children:(0,yo.jsx)(Tf.Title,{children:"\uc5b4\ub5a4 \ud398\uc77c\ub85c\uadf8\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \uacc4\ud68d\uc778\uac00\uc694?"})}),(0,yo.jsx)(Tf.CategoryRow,{children:Sf.map(e=>(0,yo.jsx)(Tf.CategoryChip,{$active:i===e,onClick:()=>o(e),children:e},e))}),(0,yo.jsx)(Tf.LogList,{children:jf.map(e=>(0,yo.jsxs)(Tf.LogCard,{$active:a===e.id,onClick:()=>l(e.id),children:[(0,yo.jsxs)("div",{children:[(0,yo.jsx)(Tf.LogCategory,{children:e.category}),(0,yo.jsxs)(Tf.LogTitle,{children:[(0,yo.jsx)("strong",{children:e.title})," - ",e.desc]}),(0,yo.jsx)(Tf.LogDate,{children:e.date})]}),(0,yo.jsx)(Tf.RadioCircle,{$active:a===e.id,children:a===e.id&&(0,yo.jsx)(Tf.CheckIcon,{src:Ef,alt:"check"})})]},e.id))}),(0,yo.jsx)(Tf.SubmitBtn,{onClick:()=>{n({faillogId:a})},children:"\uc774 \ub85c\uadf8\uc758 \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\ud558\uae30"})]})})},kf={};kf.Overlay=on.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 1000;
	${$a}
`,kf.ModalWrap=on.div`
	width: 480px;
	background: ${bn.PALETTE.white};
	border-radius: 15px;
	padding: 40px;
	position: relative;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,kf.CloseBtn=on.button`
	position: absolute;
	top: 24px;
	right: 24px;
	font-size: 20px;
	color: ${bn.GRAYSCALE[7]};
`,kf.Header=on.div`
	margin-bottom: 32px;
`,kf.Title=on.h2`
	${Ya}
	color: ${bn.PALETTE.black};
	margin-bottom: 12px;
`,kf.Subtitle=on.p`
	${sl}
	color: ${bn.GRAYSCALE[8]};
	line-height: 1.4;
`,kf.OptionList=on.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 32px;
`,kf.OptionCard=on.div`
	${Fa}
	padding: 24px 20px;
	border-radius: 10px;
	cursor: pointer;
	border: 1px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[4]}};
	background: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.light:bn.PALETTE.white}};
`,kf.OptionLabel=on.p`
	${ll}
	color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[8]}};
	margin-bottom: 6px;
`,kf.OptionDesc=on.p`
	${il}
	color: ${bn.PALETTE.black};
`,kf.RadioCircle=on.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	${$a}
	border: 1px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[4]}};
	background-color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.PALETTE.white}};
`,kf.CheckIcon=on.img`
	width: 14px;
	height: 14px;
	filter: brightness(0) invert(1);
`,kf.SubmitBtn=on.button`
	width: 100%;
	height: 52px;
	border-radius: 10px;
	background: ${bn.PALETTE.third.main};
	color: ${bn.PALETTE.white};
	${il}

	&:hover {
		background: #9333ea;
	}
`;const Cf=e=>{let{onClose:t,onNext:n}=e;const[i,o]=(0,r.useState)("ai");return(0,yo.jsx)(kf.Overlay,{children:(0,yo.jsxs)(kf.ModalWrap,{children:[(0,yo.jsx)(kf.CloseBtn,{onClick:t,children:"\u2715"}),(0,yo.jsxs)(kf.Header,{children:[(0,yo.jsx)(kf.Title,{children:"CREATE PROJECT"}),(0,yo.jsxs)(kf.Subtitle,{children:["\uc0c8\ub85c\uc6b4 \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4\uc5b4 \ub4dc\ub9b4\uac8c\uc694.",(0,yo.jsx)("br",{}),"\uc544\ub798\uc5d0\uc11c \uc120\ud0dd\uc0ac\ud56d\uc5d0 \uccb4\ud06c \ud574\uc8fc\uc138\uc694"]})]}),(0,yo.jsxs)(kf.OptionList,{children:[(0,yo.jsxs)(kf.OptionCard,{$active:"ai"===i,onClick:()=>o("ai"),children:[(0,yo.jsxs)("div",{children:[(0,yo.jsx)(kf.OptionLabel,{$active:"ai"===i,children:"AI \uae30\ub2a5"}),(0,yo.jsx)(kf.OptionDesc,{children:"AI \ub3c4\uc6c0\uc744 \ubc1b\uc544 \ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\uae30"})]}),(0,yo.jsx)(kf.RadioCircle,{$active:"ai"===i,children:"ai"===i&&(0,yo.jsx)(kf.CheckIcon,{src:Ef,alt:"check"})})]}),(0,yo.jsxs)(kf.OptionCard,{$active:"direct"===i,onClick:()=>o("direct"),children:[(0,yo.jsx)("div",{children:(0,yo.jsx)(kf.OptionDesc,{children:"\uc9c1\uc811 \ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\uae30"})}),(0,yo.jsx)(kf.RadioCircle,{$active:"direct"===i,children:"direct"===i&&(0,yo.jsx)(kf.CheckIcon,{src:Ef,alt:"check"})})]})]}),(0,yo.jsx)(kf.SubmitBtn,{onClick:()=>{n({creationType:i})},children:"\ud504\ub85c\uc81d\ud2b8 \uc791\uc131\ud558\uae30"})]})})},Lf={};Lf.Overlay=on.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    ${$a}
`,Lf.ModalWrap=on.div`
    width: 480px;
    background: ${bn.PALETTE.white};
    border-radius: 15px;
    padding: 40px;
    position: relative;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`,Lf.CloseBtn=on.button`
    position: absolute;
    top: 24px;
    right: 24px;
    font-size: 20px;
    color: ${bn.GRAYSCALE[7]};
`,Lf.Header=on.div`
    margin-bottom: 32px;
`,Lf.Title=on.h2`
    ${Ya}
    color: ${bn.PALETTE.black};
    margin-bottom: 12px;
`,Lf.Subtitle=on.p`
    ${sl}
    color: ${bn.GRAYSCALE[8]};
    line-height: 1.4;
`,Lf.Form=on.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 36px;
`,Lf.InputGroup=on.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Lf.Label=on.label`
    ${il}
    color: ${bn.PALETTE.black};
`,Lf.InputWrapper=on.div`
    position: relative;
    width: 100%;
`,Lf.Input=on.input`
    width: 100%;
    height: 48px;
    border-radius: 10px;
    border: 1px solid ${bn.GRAYSCALE[4]};
    padding: 0 16px;
    ${sl}
    color: ${bn.PALETTE.black};
    outline: none;
    font-family: 'pretendard', sans-serif;

    &::placeholder {
        color: ${bn.GRAYSCALE[6]};
    }

    &:focus {
        border-color: ${bn.PALETTE.third.main};
    }
`,Lf.SubmitBtn=on.button`
    width: 100%;
    height: 52px;
    border-radius: 10px;
    background: ${bn.PALETTE.third.main};
    color: ${bn.PALETTE.white};
    ${il}

    &:hover {
        background: #9333ea;
    }
`;const $f=e=>{let{onClose:t,onSubmit:n,projectName:i,isActive:o}=e;const[a,l]=(0,r.useState)(i||""),[s,c]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[h,p]=(0,r.useState)(null===o||void 0===o||o);return(0,yo.jsx)(Lf.Overlay,{children:(0,yo.jsxs)(Lf.ModalWrap,{children:[(0,yo.jsx)(Lf.CloseBtn,{onClick:t,children:"\u2715"}),(0,yo.jsxs)(Lf.Header,{children:[(0,yo.jsx)(Lf.Title,{children:"CREATE PROJECT"}),(0,yo.jsxs)(Lf.Subtitle,{children:["AI\ub85c \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,yo.jsx)("br",{}),"\uc6d0\ud65c\ud55c \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131\uc744 \uc704\ud574 \ud504\ub85c\uc81d\ud2b8\uc758 \uc774\ub984\uc744 \uae30\uc785\ud574 \uc8fc\uc138\uc694"]})]}),(0,yo.jsxs)(Lf.Form,{children:[(0,yo.jsxs)(Lf.InputGroup,{children:[(0,yo.jsx)(Lf.Label,{children:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984"}),(0,yo.jsx)(Lf.Input,{type:"text",placeholder:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:a,onChange:e=>l(e.target.value)})]}),(0,yo.jsxs)(Lf.InputGroup,{children:[(0,yo.jsx)(Lf.Label,{children:"\uc2dc\uc791\uc77c"}),(0,yo.jsx)(Lf.InputWrapper,{children:(0,yo.jsx)(Lf.Input,{type:"date",value:s,onChange:e=>c(e.target.value)})})]}),(0,yo.jsxs)(Lf.InputGroup,{children:[(0,yo.jsx)(Lf.Label,{children:"\uc885\ub8cc\uc77c"}),(0,yo.jsx)(Lf.InputWrapper,{children:(0,yo.jsx)(Lf.Input,{type:"date",value:d,onChange:e=>u(e.target.value)})})]})]}),(0,yo.jsx)(Lf.SubmitBtn,{onClick:()=>{n({projectName:a,startDate:s,endDate:d,isActive:h})},children:"\uc0dd\uc131\ud558\uae30"})]})})},If=fo(bo(go({projects:[{id:1,name:"\ub9e4\uc77c \uc544\uce68 20\ubd84 \ub8e8\ud2f4 \ub9cc\ub4e4\uae30",startDate:"2026-03-01",endDate:"2027-03-14",description:"\ubaa9\ud45c\ub97c \uc704\ud574 \ub2ec\ub9b0\uc9c0",isActive:!0,checklists:[{id:1,title:"\uc6b4\ub3d9\ubcf5\uacfc \ubb3c\uc744 \uc790\uae30 \uc804\uc5d0 \ubbf8\ub9ac \uc900\ube44\ud558\uae30",desc:"\uc544\uce68 \uc2e4\ud589 \uc804 \uc0dd\uac01\ud560 \uc694\uc18c\ub97c \uc904\uc5ec \uc2dc\uc791 \ud5c8\ub4e4\uc744 \ub0ae\ucda5\ub2c8\ub2e4.",priority:"\uc6b0\uc120\uc21c\uc704 \ub192\uc74c"},{id:2,title:"\uac08\ub4f1 \uc0c1\ud669\uc5d0\uc11c 24\uc2dc\uac04 \ud6c4 \uacb0\uc815\ud558\uae30",desc:"\uc989\uac01 \ubc18\uc751 \ub300\uc2e0 \ud558\ub8e8 \ub4a4 \ub2e4\uc2dc \uc0dd\uac01\ud558\ub294 \uaddc\uce59\uc744 \ub9cc\ub4e4\uace0 \uc9c0\ud0b5\ub2c8\ub2e4.",priority:"\uc6b0\uc120\uc21c\uc704 \uc911\uac04"},{id:3,title:"\uc77c\uc744 3\uac1c \ub2e8\uc704\ub85c \ub098\ub220\uc11c \uc2dc\uac04 \ubc30\ubd84\ud558\uae30",desc:"\uc989\uac01 \ubc18\uc751 \ub300\uc2e0 \ud558\ub8e8 \ub4a4 \ub2e4\uc2dc \uc0dd\uac01\ud558\ub294 \uaddc\uce59\uc744 \ub9cc\ub4e4\uace0 \uc9c0\ud0b5\ub2c8\ub2e4.",priority:"\uc6b0\uc120\uc21c\uc704 \ub0ae\uc74c"}]}]},e=>({addProject:t=>e(e=>({projects:[...e.projects,{...t,id:Date.now(),checklists:[]}]})),updateProject:(t,n)=>e(e=>({projects:e.projects.map(e=>e.id===t?{...e,...n}:e)}))})),{name:"project-storage"})),Pf=If,Ff=[{id:1,name:"\ud558\ub8e8 1\uc2dc\uac04 \uc601\uc5b4 \ub4e3\uae30 \ud6c8\ub828",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:bn.PALETTE.third.main,dDay:"D+45",tags:["\ubbf8\ub4dc \ud31f\uce90\uc2a4\ud2b8 \uc815\ubcf5","\uc790\uae30 \uc804 \uc100\ub3c4\uc789\ud558\uae30"],accentColor:bn.PALETTE.third.main},{id:2,name:"\ub9e4\uc77c \uc0c8\ubcbd 5\uc2dc \uae30\uc0c1 \ud504\ub85c\uc81d\ud2b8",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:bn.PALETTE.fifth.main,dDay:"D+45",tags:["\uc0c8\ubcbd \uae30\uc0c1 \uc2a4\ud130\ub514 \ucc38\uc5ec","\ubaa8\ub2dd \uc2a4\ud2b8\ub808\uce6d"],accentColor:bn.PALETTE.fifth.main},{id:3,name:"\uc624\uc804 6\uc2dc \uae30\uc0c1 + 1\uc2dc\uac04 \uacf5\ubd80 \ub8e8\ud2f4",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:bn.PALETTE.yellow,dDay:"D+45",tags:["\uae30\uc0c1 \uc9c1\ud6c4 \ub8e8\ud2f4 \ud504\ub85c\uadf8\ub7a8","\uc544\uce68 \uacf5\ubd80\ubc95"],accentColor:bn.PALETTE.yellow},{id:4,name:"\uc8fc 5\uc77c \uc6b4\ub3d9 + \uc2dd\ub2e8 \uae30\ub85d",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:bn.PALETTE.secondary.main,dDay:"D+45",tags:["\uae30\uc0c1 \uc9c1\ud6c4 \ub8e8\ud2f4 \ud504\ub85c\uadf8\ub7a8","\uc544\uce68 \uacf5\ubd80\ubc95"],accentColor:bn.PALETTE.secondary.main},{id:5,name:"\ud55c \ub2ec\uc5d0 \ucc45 4\uad8c \uc77d\uae30",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:bn.PALETTE.primary.main,dDay:"D+45",tags:["\uc8fc\ub9d0 \ub3c4\uc11c\uad00 \ud22c\uc5b4","\uc790\ud22c\ub9ac \uc2dc\uac04 \ub3c5\uc11c \uc2b5\uad00\ud654"],accentColor:bn.PALETTE.primary.main},{id:6,name:"\ub9e4\uc77c \ubc24 10\ubd84 \uc601\uc0c1 \ub8e8\ud2f4",owner:"\uc601\uc5b4\uc6d0\uc8fc\ubbfc",ownerInitial:"\uc601",ownerColor:bn.PALETTE.fourth.main,dDay:"D+45",tags:["\uc218\uba74 \ud658\uacbd \ucd5c\uc801\ud654 \uc138\ud305","\uc601\uc0c1 100\uc77c \ucc4c\ub9b0\uc9c0"],accentColor:bn.PALETTE.fourth.main}],Rf=()=>(0,yo.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,yo.jsx)("path",{d:"M2.5 5C2.5 4.45 2.95 4 3.5 4H6.5L7.5 5H12.5C13.05 5 13.5 5.45 13.5 6V11.5C13.5 12.05 13.05 12.5 12.5 12.5H3.5C2.95 12.5 2.5 12.05 2.5 11.5V5Z",stroke:bn.GRAYSCALE[10],strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})}),Of=e=>{let{project:t,$community:n,onClick:r}=e;return(0,yo.jsx)(zf.CardWrapper,{children:(0,yo.jsxs)(zf.Card,{onClick:()=>!n&&(null===r||void 0===r?void 0:r(t)),children:[(0,yo.jsx)(zf.AccentBar,{$color:t.accentColor||bn.PALETTE.third.main}),(0,yo.jsxs)(zf.CardContent,{children:[(0,yo.jsxs)(zf.CardTop,{children:[(0,yo.jsxs)(zf.OwnerRow,{children:[(0,yo.jsx)(zf.OwnerAvatar,{$color:t.ownerColor||bn.PALETTE.third.main,children:t.ownerInitial||"\ub098"}),(0,yo.jsx)(zf.OwnerName,{children:t.owner||"\ub098\uc758 \ud504\ub85c\uc81d\ud2b8"})]}),!n&&(0,yo.jsx)(zf.DDay,{children:t.dDay||"D-Day"})]}),(0,yo.jsx)(zf.CardTitle,{children:t.name}),(0,yo.jsx)(zf.TagRow,{children:(t.tags||[]).map((e,t)=>(0,yo.jsxs)(zf.Tag,{children:[(0,yo.jsx)(Rf,{}),e]},t))})]})]})})},Nf=e=>{let{minPage:t=1,maxPage:n=10,currentPage:r,onPageChange:i}=e;const o=5*Math.floor((r-t)/5)+t,a=[];for(let c=o;c<=Math.min(o+4,n);c++)a.push(c);const l=o>t,s=o+5<=n;return(0,yo.jsxs)(zf.PaginationWrapper,{children:[(0,yo.jsx)(zf.NavButton,{onClick:()=>l&&i(o-1),disabled:!l,children:(0,yo.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,yo.jsx)("path",{d:"M7 1L1 7L7 13",stroke:l?bn.GRAYSCALE[9]:bn.GRAYSCALE[4],strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),a.map(e=>(0,yo.jsx)(zf.PageButton,{$active:e===r,onClick:()=>i(e),children:(0,yo.jsx)("span",{style:{color:e===r?bn.PALETTE.white:bn.PALETTE.black,fontWeight:e===r?700:400},children:e})},e)),(0,yo.jsx)(zf.NavButton,{onClick:()=>s&&i(o+5),disabled:!s,children:(0,yo.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",children:(0,yo.jsx)("path",{d:"M1 1L7 7L1 13",stroke:s?bn.GRAYSCALE[9]:bn.GRAYSCALE[4],strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},zf={};zf.PageWrapper=on.div`
	min-height: 100vh;
	background-color: ${bn.PALETTE.white};
`,zf.Inner=on.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 60px;
`,zf.PageHeader=on.div`
	padding-top: 80px;
	padding-bottom: 28px;
`,zf.PageTitle=on.h2`
	${Ha}
	color: ${bn.PALETTE.black};
	margin-bottom: 10px;
`,zf.SubtitleRow=on.div`
	${Fa}
	align-items: center;
`,zf.PageSubtitle=on.p`
	${qa}
	color: ${bn.GRAYSCALE[9]};
`,zf.BtnCreate=on.button`
	${il}
	width: 120px;
	height: 40px;
	border-radius: 10px;
	border: 1px solid ${bn.GRAYSCALE[4]};
	background: ${bn.PALETTE.white};
	color: ${bn.GRAYSCALE[10]};
	transition: all 0.15s ease;
	&:hover {
		border-color: ${bn.PALETTE.third.main};
		color: ${bn.PALETTE.third.main};
	}
	&:active {
		background: ${bn.PALETTE.third.main};
		color: ${bn.PALETTE.white};
		transform: scale(0.98);
	}
`,zf.MyProjectsSection=on.div`
	position: relative;
	padding: 40px 0 120px;
`,zf.CarouselWrap=on.div`
	position: relative;
`,zf.CardGrid=on.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 50px;
`,zf.ArrowBtn=on.button`
	${$a}
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 1px solid ${bn.GRAYSCALE[3]};
	background: ${bn.PALETTE.white};
	color: ${bn.GRAYSCALE[10]};
	font-size: 40px;
	z-index: 1;
	transition: all 0.15s ease;
	&:first-child { left: -100px; }
	&:last-child { right: -100px; }
	&:hover:not(:disabled) {
		background: ${bn.GRAYSCALE[1]};
		border-color: ${bn.GRAYSCALE[6]};
	}
	&:disabled { opacity: 0.3; cursor: default; }
`,zf.CardWrapper=on.div`
	position: relative;
`,zf.Card=on.div`
	display: flex;
	flex-direction: row;
	height: 180px;
	background: ${bn.PALETTE.white};
	border-radius: 15px;
	border: 1px solid ${bn.GRAYSCALE[4]};
	box-shadow: -10px 25px 30px 0px rgba(0, 0, 0, 0.07);
	cursor: pointer;
	overflow: hidden;
	transition: transform 0.2s, box-shadow 0.2s;
	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 16px 40px rgba(171, 71, 255, 0.15);
	}
`,zf.AccentBar=on.div`
	width: 4px;
	min-width: 4px;
	background: ${e=>{let{$color:t}=e;return t}};
	flex-shrink: 0;
`,zf.CardContent=on.div`
	flex: 1;
	padding: 18px 30px 16px 26px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`,zf.CardTop=on.div`
	${Fa}
`,zf.OwnerRow=on.div`
	${Ra}
	gap: 7px;
`,zf.OwnerAvatar=on.div`
	${$a}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 2px solid ${e=>{let{$color:t}=e;return t}};
	color: ${e=>{let{$color:t}=e;return t}};
	font-size: ${bn.FONT_SIZE.h11};
	font-weight: 700;
	background: ${bn.PALETTE.white};
`,zf.OwnerName=on.span`
	${ll}
	color: ${bn.PALETTE.black};
`,zf.DDay=on.span`
	${Ja}
	color: ${bn.PALETTE.black};
`,zf.CardTitle=on.p`
	${Ja}
	color: ${bn.PALETTE.black};
	line-height: 1.4;
	display: flex;
	align-items: center;
	flex: 1;
`,zf.TagRow=on.div`
	${Ra}
	gap: 8px;
	flex-wrap: wrap;
`,zf.Tag=on.span`
	${Ra}
	gap: 4px;
	height: 28px;
	padding: 0 8px;
	border-radius: 5px;
	background: ${bn.GRAYSCALE[1]};
	font-size: ${bn.FONT_SIZE.h10};
	color: ${bn.GRAYSCALE[10]};
`,zf.CommunitySection=on.div`
	background-color: ${bn.GRAYSCALE[1]};
	padding: 120px 0 80px;
`,zf.SearchRow=on.div`
	${Fa}
	margin-bottom: 100px;
`,zf.CommunityTitle=on.h3`
	${Ya}
	color: ${bn.PALETTE.black};
	line-height: 1.4;
`,zf.SearchBoxWrap=on.div`
	width: 536px;
	height: 60px;
	border-radius: 15px;
	padding: 2px;
	background: linear-gradient(90deg, ${bn.PALETTE.primary.main}, ${bn.PALETTE.third.main});
`,zf.SearchBox=on.div`
	${Ra}
	width: 100%;
	height: 100%;
	border-radius: 13px;
	background: ${bn.PALETTE.white};
	padding: 0 12px 0 20px;
	gap: 10px;
`,zf.SearchInput=on.input`
	border: none;
	outline: none;
	${ol}
	flex: 1;
	background: transparent;
`,zf.SearchBtn=on.button`
	${$a}
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: linear-gradient(135deg, ${bn.PALETTE.primary.main}, ${bn.PALETTE.third.main});
`,zf.ArrowIcon=on.img`
	width: 18px;
	height: 18px;
	filter: brightness(0) invert(1);
`,zf.CommunityGrid=on.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 24px;
	row-gap: 50px;
	margin-bottom: 50px;
`,zf.PaginationWrapper=on.div`
	${Ia}
	gap: 8px;
`,zf.NavButton=on.button`
	${$a}
	width: 36px;
	height: 36px;
	&:disabled { opacity: 0.3; }
`,zf.PageButton=on.button`
	${$a}
	width: 36px;
	height: 36px;
	border-radius: 10px;
	background-color: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:"transparent"}};
`;const Df=()=>{const e=wi(),{projects:t,addProject:n}=Pf(),[i,o]=(0,r.useState)(null),[a,l]=(0,r.useState)({}),[s,c]=(0,r.useState)(1),[d,u]=(0,r.useState)(0),h=t.length>0?t:Ff,p=[...Ff,...Ff].slice(0,12),f=()=>{o(null),l({})},g=t=>{e(`/projects/${t.id}`)};return(0,yo.jsxs)(zf.PageWrapper,{children:["select"===i&&(0,yo.jsx)(Af,{onClose:f,onNext:e=>{l(t=>({...t,...e})),o("step1")}}),"step1"===i&&(0,yo.jsx)(Cf,{onClose:f,onNext:e=>{l(t=>({...t,...e})),o("step2")}}),"step2"===i&&(0,yo.jsx)($f,{onClose:f,onSubmit:e=>{n({...a,...e}),f()},projectName:a.projectName}),(0,yo.jsxs)(zf.Inner,{children:[(0,yo.jsxs)(zf.PageHeader,{children:[(0,yo.jsx)(zf.PageTitle,{children:"Project"}),(0,yo.jsxs)(zf.SubtitleRow,{children:[(0,yo.jsx)(zf.PageSubtitle,{children:"\ub098\uc758 \ud504\ub85c\uc81d\ud2b8\ub97c \ubaa8\uc544\ubcf4\uc138\uc694."}),(0,yo.jsx)(zf.BtnCreate,{onClick:()=>o("select"),children:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"})]})]}),(0,yo.jsx)(zf.MyProjectsSection,{children:(0,yo.jsxs)(zf.CarouselWrap,{children:[(0,yo.jsx)(zf.ArrowBtn,{onClick:()=>u(e=>Math.max(e-3,0)),disabled:0===d,children:"\u2039"}),(0,yo.jsx)(zf.CardGrid,{children:h.slice(d,d+6).map(e=>(0,yo.jsx)(Of,{project:e,onClick:g},e.id))}),(0,yo.jsx)(zf.ArrowBtn,{onClick:()=>u(e=>Math.min(e+3,Math.max(0,h.length-6))),disabled:d+6>=h.length,children:"\u203a"})]})})]}),(0,yo.jsx)(zf.CommunitySection,{children:(0,yo.jsxs)(zf.Inner,{children:[(0,yo.jsxs)(zf.SearchRow,{children:[(0,yo.jsx)(zf.CommunityTitle,{children:"\ub2e4\ub978 \uc0ac\ub78c\ub4e4\uacfc \uc131\uc7a5\uacfc\uc815\uc744 \uacf5\uc720\ud558\uace0 \uacbd\ud5d8\ud574\ubcf4\uc138\uc694."}),(0,yo.jsx)(zf.SearchBoxWrap,{children:(0,yo.jsxs)(zf.SearchBox,{children:[(0,yo.jsx)(zf.SearchInput,{placeholder:"\ub2e4\uc591\ud55c \uc131\uc7a5 \uacfc\uc815\uc744 \ud0d0\uc0c9\ud574\ubcf4\uc138\uc694."}),(0,yo.jsx)(zf.SearchBtn,{children:(0,yo.jsx)(zf.ArrowIcon,{src:wf,alt:"search"})})]})})]}),(0,yo.jsx)(zf.CommunityGrid,{children:p.map((e,t)=>(0,yo.jsx)(Of,{project:{...e,id:t},$community:!0},t))}),(0,yo.jsx)(Nf,{currentPage:s,onPageChange:c,maxPage:10})]})})]})},Bf={};Bf.Overlay=on.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	${$a}
	z-index: 200;
`,Bf.Modal=on.div`
	width: 540px;
	background: ${bn.PALETTE.white};
	border-radius: 20px;
	padding: 40px;
	display: flex;
	flex-direction: column;
	gap: 24px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`,Bf.Header=on.div`
	${Fa}
	align-items: flex-start;
`,Bf.ModalTitle=on.h2`
	${Ya}
	color: ${bn.PALETTE.black};
	margin-bottom: 6px;
`,Bf.ModalSubtitle=on.p`
	${sl}
	color: ${bn.GRAYSCALE[6]};
	line-height: 1.5;
`,Bf.CloseBtn=on.button`
	width: 32px;
	height: 32px;
	${$a}
	border-radius: 8px;
	border: none;
	background: transparent;
	transition: background 0.15s;
	&:hover { background: ${bn.GRAYSCALE[1]}; }
`,Bf.FieldGroup=on.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`,Bf.FieldLabel=on.label`
	${il}
	color: ${bn.PALETTE.black};
`,Bf.Input=on.input`
	width: 100%;
	height: 52px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 0 16px;
	${ol}
	color: ${bn.PALETTE.black};
	outline: none;
	transition: border-color 0.15s;
	cursor: ${e=>{let{readOnly:t}=e;return t?"pointer":"text"}};
	&::placeholder { color: ${bn.GRAYSCALE[4]}; }
	&:focus { border-color: ${bn.PALETTE.third.main}; }
`,Bf.DateInputWrap=on.div`
	position: relative;
`,Bf.CalendarIcon=on.button`
	position: absolute;
	right: 14px;
	top: 50%;
	transform: translateY(-50%);
	${$a}
	background: none;
	border: none;
	cursor: pointer;
`,Bf.NativeDateInput=on.input`
	position: absolute;
	top: calc(100% + 4px);
	left: 0;
	z-index: 10;
	opacity: 1;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 8px 12px;
	background: white;
	${sl}
	outline: none;
	box-shadow: 0 4px 16px rgba(0,0,0,0.1);
	&:focus { border-color: ${bn.PALETTE.third.main}; }
`,Bf.ActiveToggleRow=on.div`
	${Ra}
	gap: 10px;
	cursor: pointer;
	width: fit-content;
`,Bf.ActiveCheckBox=on.div`
	width: 22px;
	height: 22px;
	border-radius: 6px;
	border: 2px solid ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:bn.GRAYSCALE[4]}};
	background: ${e=>{let{$active:t}=e;return t?bn.PALETTE.third.main:"transparent"}};
	${$a}
	transition: all 0.15s;
`,Bf.ActiveLabel=on.span`
	${ol}
	color: ${bn.PALETTE.black};
`,Bf.SubmitBtn=on.button`
	width: 100%;
	height: 54px;
	border-radius: 12px;
	background: ${e=>{let{disabled:t}=e;return t?bn.GRAYSCALE[3]:bn.PALETTE.third.main}};
	color: white;
	${tl}
	transition: opacity 0.15s;
	&:hover:not(:disabled) { opacity: 0.9; }
	cursor: ${e=>{let{disabled:t}=e;return t?"not-allowed":"pointer"}};
`;const Mf=e=>{var t;let{onClose:n,onSubmit:i,initialData:o={}}=e;const[a,l]=(0,r.useState)(o.projectName||""),[s,c]=(0,r.useState)(null===(t=o.isActive)||void 0===t||t),[d,u]=(0,r.useState)(o.startDate||""),[h,p]=(0,r.useState)(o.endDate||""),[f,g]=(0,r.useState)(!1),[m,x]=(0,r.useState)(!1),b=e=>e?e.replace(/-/g,"."):"";return(0,yo.jsx)(Bf.Overlay,{onClick:n,children:(0,yo.jsxs)(Bf.Modal,{onClick:e=>e.stopPropagation(),children:[(0,yo.jsxs)(Bf.Header,{children:[(0,yo.jsxs)("div",{children:[(0,yo.jsx)(Bf.ModalTitle,{children:"EDIT PROJECT"}),(0,yo.jsxs)(Bf.ModalSubtitle,{children:["\ud504\ub85c\uc81d\ud2b8\ub97c \uc218\uc815\ud569\ub2c8\ub2e4.",(0,yo.jsx)("br",{}),"\uc218\uc815\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"]})]}),(0,yo.jsx)(Bf.CloseBtn,{onClick:n,children:(0,yo.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,yo.jsx)("path",{d:"M3 3L13 13M13 3L3 13",stroke:bn.GRAYSCALE[7],strokeWidth:"2",strokeLinecap:"round"})})})]}),(0,yo.jsxs)(Bf.FieldGroup,{children:[(0,yo.jsx)(Bf.FieldLabel,{children:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984"}),(0,yo.jsx)(Bf.Input,{type:"text",placeholder:"\ud504\ub85c\uc81d\ud2b8 \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",value:a,onChange:e=>l(e.target.value)})]}),(0,yo.jsxs)(Bf.FieldGroup,{children:[(0,yo.jsx)(Bf.FieldLabel,{children:"\uc2dc\uc791\uc77c"}),(0,yo.jsxs)(Bf.DateInputWrap,{children:[(0,yo.jsx)(Bf.Input,{type:"text",placeholder:"\uc2dc\uc791 \ub0a0\uc9dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",value:b(d),readOnly:!0,onClick:()=>{g(e=>!e),x(!1)}}),(0,yo.jsx)(Bf.CalendarIcon,{onClick:()=>{g(e=>!e),x(!1)},children:(0,yo.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,yo.jsx)("rect",{x:"2",y:"3",width:"14",height:"13",rx:"2",stroke:bn.GRAYSCALE[6],strokeWidth:"1.5"}),(0,yo.jsx)("path",{d:"M2 7H16",stroke:bn.GRAYSCALE[6],strokeWidth:"1.5"}),(0,yo.jsx)("path",{d:"M6 1V4M12 1V4",stroke:bn.GRAYSCALE[6],strokeWidth:"1.5",strokeLinecap:"round"})]})}),f&&(0,yo.jsx)(Bf.NativeDateInput,{type:"date",value:d,onChange:e=>{u(e.target.value),g(!1)}})]})]}),(0,yo.jsxs)(Bf.FieldGroup,{children:[(0,yo.jsx)(Bf.FieldLabel,{children:"\uc885\ub8cc\uc77c"}),(0,yo.jsxs)(Bf.DateInputWrap,{children:[(0,yo.jsx)(Bf.Input,{type:"text",placeholder:"\uc885\ub8cc \ub0a0\uc9dc\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",value:b(h),readOnly:!0,onClick:()=>{x(e=>!e),g(!1)}}),(0,yo.jsx)(Bf.CalendarIcon,{onClick:()=>{x(e=>!e),g(!1)},children:(0,yo.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[(0,yo.jsx)("rect",{x:"2",y:"3",width:"14",height:"13",rx:"2",stroke:bn.GRAYSCALE[6],strokeWidth:"1.5"}),(0,yo.jsx)("path",{d:"M2 7H16",stroke:bn.GRAYSCALE[6],strokeWidth:"1.5"}),(0,yo.jsx)("path",{d:"M6 1V4M12 1V4",stroke:bn.GRAYSCALE[6],strokeWidth:"1.5",strokeLinecap:"round"})]})}),m&&(0,yo.jsx)(Bf.NativeDateInput,{type:"date",value:h,onChange:e=>{p(e.target.value),x(!1)}})]})]}),(0,yo.jsx)(Bf.FieldGroup,{children:(0,yo.jsxs)(Bf.ActiveToggleRow,{onClick:()=>c(e=>!e),children:[(0,yo.jsx)(Bf.ActiveCheckBox,{$active:s,children:s&&(0,yo.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:(0,yo.jsx)("path",{d:"M2 6L5 9L10 3",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,yo.jsx)(Bf.ActiveLabel,{children:"\ud65c\uc131\ud654 \uc0c1\ud0dc"})]})}),(0,yo.jsx)(Bf.SubmitBtn,{onClick:()=>{i({projectName:a,isActive:s,startDate:d,endDate:h}),n()},disabled:!a.trim(),children:"\uc218\uc815\ud558\uae30"})]})})},Gf=[{id:1,title:"\uc6b4\ub3d9\ubcf5\uacfc \ubb3c\uc744 \uc790\uae30 \uc804\uc5d0 \ubbf8\ub9ac \uc900\ube44\ud558\uae30",memo:"\uc544\uce68 \uc2e4\ud589 \uc804 \uc0dd\uac01\ud560 \uc694\uc18c\ub97c \uc904\uc5ec \uc2dc\uc791 \ud5c8\ub4e4\uc744 \ub0ae\ucda5\ub2c8\ub2e4.",priority:"\ub192\uc74c",status:null},{id:2,title:"\uac08\ub4f1 \uc0c1\ud669\uc5d0\uc11c 24\uc2dc\uac04 \ud6c4 \uacb0\uc815\ud558\uae30",memo:"\uc989\uac01 \ubc18\uc751 \ub300\uc2e0 \ud558\ub8e8 \ub4a4 \ub2e4\uc2dc \uc0dd\uac01\ud558\ub294 \uaddc\uce59\uc744 \ub9cc\ub4e4\uc5b4 \uc9c0\ud0b5\ub2c8\ub2e4.",priority:"\uc911\uac04",status:null},{id:3,title:"\uc77c\uc744 3\uac1c \ub2e8\uc704\ub85c \ub098\ub220\uc11c \uc2dc\uac04 \ubc30\ubd84\ud558\uae30",memo:"\ud55c \ubc88\uc5d0 \ub05d\ub9c8\uce58\ub294 \uc2b5\uad00\uc744 \uc904\uc774\uace0 \uc2e4\uc218\ub97c \uc608\ubc29\ud569\ub2c8\ub2e4.",priority:"\ub0ae\uc74c",status:null}],Hf=[{id:1,title:"\uc2e4\ud328 \ubd84\uc11d \ubcf4\uae30",desc:"\ubc24\uc774 \ub418\uae30 \uc804 \uc900\ube44\ud55c \ud589\ub3d9\uc744 \uac00\uc7a5 \uba3c\uc800 \uccb4\ud06c\ud558\uc138\uc694.",path:"/logs"},{id:2,title:"\uc2e4\ub0b4 \ub300\uccb4 \uacc4\ud68d \ucd94\uac00",desc:"\ub0a0\uc528 \ubcc0\uc218\ub97c \uc704\ud55c \uc2e4\ub0b4 \uacc4\ud68d\uc744 \ucd94\uac00\ud574\ubcf4\uc138\uc694.",path:null},{id:3,title:"\uc8fc\ub9d0 \uae30\uc900 \uc644\ud654",desc:"\uc7a0\ub4e4\uae30 \uc804 \uc644\ub8cc\ub85c \uae30\uc900\uc744 \ub113\ud788\ub294 \uac8c \uc88b\uc544\uc694.",path:null},{id:4,title:"\ucd5c\ucd08 4\uac1c \ucd94\ucc9c\uc774 \ub728\ub294\uac78\ub85c \ud574\uc57c \ub420\uac83 \uac19\uc9c0 \uc54a\uaca0\ub294\uc9c0",desc:"\ub0a0\uc528 \ubcc0\uc218\ub97c \uc704\ud55c \uc2e4\ub0b4 \uacc4\ud68d\uc744 \ucd94\uac00\ud574\ubcf4\uc138\uc694.",path:null}],Wf=[{id:1,user:"\ub9c8\uc778\ub4dc\ucee8\ud2b8\ub864\ub7ec",avatar:"\ub9c8",text:"\uc544\uce68 \ub8e8\ud2f4\uc5d0 '\uc794\uc744 \uc138\uc218\ud558\uae30'\ub97c \ucd94\uac00\ud574\ubcf4\uc138\uc694. \uc798 \ud574\ub294 \ub300 \ucd5c\uace0\uc785\ub2c8\ub2e4!"},{id:2,user:"\ub9c8\uc778\ub4dc\ucee8\ud2b8\ub864\ub7ec",avatar:"\ub9c8",text:"\uc544\uce68 \ub8e8\ud2f4\uc5d0 '\uc794\uc744 \uc138\uc218\ud558\uae30'\ub97c \ucd94\uac00\ud574\ubcf4\uc138\uc694. \uc798 \ud574\ub294 \ub300 \ucd5c\uace0\uc785\ub2c8\ub2e4!"},{id:3,user:"\ub9c8\uc778\ub4dc\ucee8\ud2b8\ub864\ub7ec",avatar:"\ub9c8",text:"\uc544\uce68 \ub8e8\ud2f4\uc5d0 '\uc794\uc744 \uc138\uc218\ud558\uae30'\ub97c \ucd94\uac00\ud574\ubcf4\uc138\uc694. \uc798 \ud574\ub294 \ub300 \ucd5c\uace0\uc785\ub2c8\ub2e4!"}],Uf={"\ub192\uc74c":{label:"\uc6b0\uc120\uc21c\uc704 \ub192\uc74c",bg:bn.PALETTE.fourth.light,color:bn.PALETTE.fourth.main},"\uc911\uac04":{label:"\uc6b0\uc120\uc21c\uc704 \uc911\uac04",bg:bn.PALETTE.primary.light,color:bn.PALETTE.primary.main},"\ub0ae\uc74c":{label:"\uc6b0\uc120\uc21c\uc704 \ub0ae\uc74c",bg:bn.PALETTE.secondary.light,color:bn.PALETTE.secondary.main}},_f=()=>(0,yo.jsxs)(Qf.AiBadge,{children:[(0,yo.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:[(0,yo.jsx)("circle",{cx:"14",cy:"14",r:"14",fill:"url(#ai_grad)"}),(0,yo.jsx)("text",{x:"14",y:"19",textAnchor:"middle",fontSize:"13",fill:"white",fontWeight:"bold",children:"AI"}),(0,yo.jsx)("defs",{children:(0,yo.jsxs)("linearGradient",{id:"ai_grad",x1:"0",y1:"0",x2:"28",y2:"28",gradientUnits:"userSpaceOnUse",children:[(0,yo.jsx)("stop",{stopColor:bn.PALETTE.primary.main}),(0,yo.jsx)("stop",{offset:"1",stopColor:bn.PALETTE.third.main})]})})]}),"AI"]}),Yf=e=>{let{item:t,onToggle:n,onStatusChange:i}=e;const[o,a]=(0,r.useState)(!1),[l,s]=(0,r.useState)(t.memo||""),c=Uf[t.priority]||Uf["\ub0ae\uc74c"];return(0,yo.jsxs)(Qf.CheckItem,{$status:t.status,children:[(0,yo.jsxs)(Qf.CheckItemTop,{onClick:()=>a(e=>!e),children:[(0,yo.jsxs)(Qf.CheckLeft,{children:[(0,yo.jsxs)(Qf.CheckCircle,{$status:t.status,onClick:e=>{e.stopPropagation()},children:["success"===t.status&&(0,yo.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,yo.jsx)("path",{d:"M2.5 7L5.5 10L11.5 4",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),"fail"===t.status&&(0,yo.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,yo.jsx)("path",{d:"M4 4L10 10M10 4L4 10",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})})]}),(0,yo.jsx)(Qf.CheckTitle,{$status:t.status,children:t.title})]}),(0,yo.jsxs)(Qf.CheckRight,{children:[(0,yo.jsx)(Qf.PriorityBadge,{$bg:c.bg,$color:c.color,children:c.label}),(0,yo.jsx)(Qf.ChevronIcon,{$expanded:o,children:(0,yo.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,yo.jsx)("path",{d:"M3 5L7 9L11 5",stroke:bn.PALETTE.black,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]}),o&&(0,yo.jsxs)(Qf.CheckExpanded,{children:[(0,yo.jsx)(Qf.MemoLabel,{children:"\ud55c \uc904 \uba54\ubaa8"}),(0,yo.jsx)(Qf.MemoInput,{value:l,onChange:e=>s(e.target.value),placeholder:"\uc544\uc9c1 \uc791\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."}),(0,yo.jsxs)(Qf.CheckActions,{children:[(0,yo.jsxs)(Qf.CheckActionsLeft,{children:[(0,yo.jsx)(Qf.SmallBtn,{onClick:()=>n(t.id,"delete"),children:"\uc0ad\uc81c"}),(0,yo.jsx)(Qf.SmallBtn,{onClick:()=>n(t.id,"edit"),children:"\uc218\uc815"})]}),(0,yo.jsxs)(Qf.CheckActionsRight,{children:[(0,yo.jsx)(Qf.StatusBtn,{$active:"success"===t.status,$type:"success",onClick:()=>i(t.id,"success"===t.status?null:"success"),children:"\ubaa9\ud45c \ub2ec\uc131"}),(0,yo.jsx)(Qf.StatusBtn,{$active:"fail"===t.status,$type:"fail",onClick:()=>i(t.id,"fail"===t.status?null:"fail"),children:"\ubaa9\ud45c \uc2e4\ud328"})]})]})]})]})},Qf={};Qf.PageWrapper=on.div`
	min-height: 100vh;
	background-color: #F8F9FA;
`,Qf.Inner=on.div`
	max-width: 1320px;
	margin: 0 auto;
	padding: 0 60px;
`,Qf.PageTop=on.div`
	${Fa}
	padding-top: 120px;
	padding-bottom: 0;
	margin-bottom: 50px;
`,Qf.PageTitle=on.h1`
	${Ba}
	color: ${bn.PALETTE.black};
`,Qf.TopBtnRow=on.div`
	${Ra}
	gap: 12px;
`,Qf.OutlineBtn=on.button`
	${il}
	height: 40px;
	padding: 0 20px;
	border-radius: 10px;
	border: 1px solid ${e=>{let{$danger:t}=e;return t?"#FF4D4D":bn.GRAYSCALE[4]}};
	color: ${e=>{let{$danger:t}=e;return t?"#FF4D4D":bn.GRAYSCALE[9]}};
	background: ${bn.PALETTE.white};
	transition: all 0.15s ease;
	&:hover {
		background: ${e=>{let{$danger:t}=e;return t?"#FFF0F0":bn.GRAYSCALE[1]}};
	}
`,Qf.Section=on.div`
	margin-top: ${e=>{let{$mt:t}=e;return t||"0"}};
	margin-bottom: ${e=>{let{$mb:t}=e;return t||"0"}};
`,Qf.SectionLabel=on.p`
	${Ua}
	color: ${bn.PALETTE.black};
	margin-bottom: 10px;
`,Qf.SectionTitle=on.h2`
	${Ya}
	color: ${bn.PALETTE.black};
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	gap: 8px;
`,Qf.SectionTitleRow=on.div`
	${Fa}
	margin-bottom: 24px;
`,Qf.VisionText=on.p`
	${tl}
	color: ${bn.PALETTE.primary.main};
	margin-bottom: 50px;
`,Qf.AiBadge=on.span`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 11px;
	font-weight: 700;
	color: ${bn.PALETTE.primary.main};
`,Qf.ProjectCard=on.div`
	position: relative;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 16px;
	padding: 28px 40px 28px 32px;
	background: ${bn.PALETTE.white};
	box-shadow: 0 4px 20px rgba(0,0,0,0.05);
	display: flex;
	flex-direction: column;
`,Qf.ProjectCardInner=on.div``,Qf.ProjectCardMeta=on.div`
	${Fa}
	margin-bottom: 16px;
`,Qf.AiRecommendLabel=on.span`
	${Ra}
	gap: 6px;
	${tl}
	color: ${bn.PALETTE.black};
`,Qf.ProjectDateRange=on.span`
	${dl}
	color: ${bn.GRAYSCALE[10]};
	display: block;
	margin-bottom: 20px;
`,Qf.ProjectName=on.h3`
	${Va}
	color: ${bn.PALETTE.black};
	margin-bottom: 20px;
`,Qf.ProjectGoal=on.p`
	${ol}
	color: ${bn.GRAYSCALE[10]};
	margin-bottom: 16px;
`,Qf.ProgressRow=on.div`
	${Fa}
	gap: 16px;
`,Qf.ProgressBar=on.div`
	flex: 1;
	height: 10px;
	background: ${bn.GRAYSCALE[2]};
	border-radius: 5px;
	overflow: hidden;
`,Qf.ProgressFill=on.div`
	height: 100%;
	width: ${e=>{let{$percent:t}=e;return t}}%;
	background: linear-gradient(90deg, ${bn.PALETTE.primary.main}, ${bn.PALETTE.third.main});
	border-radius: 5px;
`,Qf.DDay=on.span`
	${Ja}
	color: ${bn.PALETTE.black};
	white-space: nowrap;
`,Qf.ProjectEditBtn=on.button`
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	border-radius: 8px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	background: ${bn.PALETTE.white};
	${$a}
	transition: all 0.15s;
	&:hover { background: ${bn.GRAYSCALE[1]}; }
`,Qf.ActionGrid=on.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 16px 40px;
`,Qf.ActionCard=on.div`
	${Ra}
	align-items: flex-start;
	gap: 12px;
	padding: 24px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 12px;
	background: ${bn.PALETTE.white};
	cursor: pointer;
	transition: all 0.15s;
	&:hover { border-color: ${bn.PALETTE.third.main}; background: #faf5ff; }
`,Qf.ActionDot=on.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: ${bn.PALETTE.third.main};
	flex-shrink: 0;
	margin-top: 4px;
`,Qf.ActionContent=on.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`,Qf.ActionTitle=on.p`
	${tl}
	color: ${bn.PALETTE.black};
`,Qf.ActionDesc=on.p`
	${ol}
	color: ${bn.GRAYSCALE[10]};
`,Qf.ChecklistSubtitle=on.p`
	${ol}
	color: ${bn.GRAYSCALE[10]};
	margin-bottom: 20px;
`,Qf.ChecklistList=on.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,Qf.CheckItem=on.div`
	border: 1px solid ${e=>{let{$status:t}=e;return"success"===t?bn.PALETTE.secondary.main:"fail"===t?bn.PALETTE.fourth.main:bn.GRAYSCALE[3]}};
	border-radius: 12px;
	background: ${e=>{let{$status:t}=e;return"success"===t?bn.PALETTE.secondary.light:"fail"===t?bn.PALETTE.fourth.light:bn.PALETTE.white}};
	overflow: hidden;
	transition: all 0.2s;
`,Qf.CheckItemTop=on.div`
	${Fa}
	padding: 18px 20px;
	min-height: 100px;
	cursor: pointer;
`,Qf.CheckLeft=on.div`
	${Ra}
	gap: 30px;
	flex: 1;
`,Qf.CheckRight=on.div`
	${Ra}
	gap: 12px;
`,Qf.CheckCircle=on.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 2px solid ${e=>{let{$status:t}=e;return"success"===t?bn.PALETTE.secondary.main:"fail"===t?bn.PALETTE.fourth.main:bn.GRAYSCALE[4]}};
	background: ${e=>{let{$status:t}=e;return"success"===t?bn.PALETTE.secondary.main:"fail"===t?bn.PALETTE.fourth.main:"transparent"}};
	${$a}
	flex-shrink: 0;
	transition: all 0.2s;
`,Qf.CheckTitle=on.span`
	${tl}
	color: ${e=>{let{$status:t}=e;return t?bn.GRAYSCALE[7]:bn.PALETTE.black}};
	text-decoration: ${e=>{let{$status:t}=e;return"success"===t?"line-through":"none"}};
`,Qf.PriorityBadge=on.span`
	${ll}
	padding: 4px 10px;
	border-radius: 20px;
	background: ${e=>{let{$bg:t}=e;return t}};
	color: ${e=>{let{$color:t}=e;return t}};
	white-space: nowrap;
`,Qf.ChevronIcon=on.span`
	display: flex;
	transform: rotate(${e=>{let{$expanded:t}=e;return t?"180deg":"0deg"}});
	transition: transform 0.2s;
`,Qf.CheckExpanded=on.div`
	padding: 0 20px 16px 56px;
	border-top: 1px solid ${bn.GRAYSCALE[2]};
`,Qf.MemoLabel=on.p`
	${ol}
	color: ${bn.PALETTE.black};
	margin: 12px 0 8px;
`,Qf.MemoInput=on.textarea`
	width: 100%;
	height: 56px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 8px;
	padding: 10px 12px;
	${ol}
	font-family: 'pretendard', sans-serif;
	color: ${bn.PALETTE.black};
	resize: none;
	outline: none;
	margin-bottom: 12px;
	&:focus { border-color: ${bn.PALETTE.third.main}; }
`,Qf.CheckActions=on.div`
	${Fa}
`,Qf.CheckActionsLeft=on.div`
	${Ra}
	gap: 8px;
`,Qf.CheckActionsRight=on.div`
	${Ra}
	gap: 8px;
`,Qf.SmallBtn=on.button`
	${sl}
	padding: 4px 12px;
	border-radius: 6px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	color: ${bn.GRAYSCALE[10]};
	background: ${bn.PALETTE.white};
	&:hover { background: ${bn.GRAYSCALE[1]}; }
`,Qf.StatusBtn=on.button`
	${ll}
	padding: 4px 12px;
	border-radius: 6px;
	border: 1px solid ${e=>{let{$type:t}=e;return"success"===t?bn.PALETTE.secondary.main:bn.PALETTE.fourth.main}};
	color: ${e=>{let{$type:t,$active:n}=e;return n?"white":"success"===t?bn.PALETTE.secondary.main:bn.PALETTE.fourth.main}};
	background: ${e=>{let{$type:t,$active:n}=e;return n?"success"===t?bn.PALETTE.secondary.main:bn.PALETTE.fourth.main:"white"}};
	transition: all 0.15s;
`,Qf.AddItemBtn=on.button`
	${Ia}
	gap: 8px;
	width: 100%;
	height: 52px;
	margin-top: 10px;
	border: 1px solid ${bn.GRAYSCALE[4]};
	border-radius: 12px;
	${ol}
	color: ${bn.PALETTE.black};
	background: ${bn.PALETTE.white};
	transition: all 0.15s;
	&:hover { border-color: ${bn.PALETTE.third.main}; color: ${bn.PALETTE.third.main}; }
`,Qf.SuggestionBox=on.div`
	display: grid;
	grid-template-columns: 360px 1fr;
	gap: 24px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 16px;
	overflow: hidden;
`,Qf.SuggestionLeft=on.div`
	padding: 28px 24px;
	border-right: 1px solid ${bn.GRAYSCALE[2]};
	display: flex;
	flex-direction: column;
	gap: 12px;
`,Qf.SuggestionIcon=on.div`
	width: 40px;
	height: 40px;
	${$a}
`,Qf.SuggestionTextWrap=on.div``,Qf.SuggestionPrompt=on.p`
	${tl}
	color: ${bn.PALETTE.black};
	margin-bottom: 4px;
`,Qf.SuggestionDesc=on.p`
	${sl}
	color: ${bn.GRAYSCALE[6]};
`,Qf.SuggestionInput=on.textarea`
	width: 100%;
	height: 80px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 8px;
	padding: 12px;
	${sl}
	resize: none;
	outline: none;
	&:focus { border-color: ${bn.PALETTE.third.main}; }
`,Qf.SuggestionSubmitBtn=on.button`
	${Ia}
	gap: 6px;
	height: 44px;
	border-radius: 10px;
	background: ${bn.PALETTE.third.main};
	color: white;
	${il}
	transition: opacity 0.15s;
	&:hover { opacity: 0.85; }
`,Qf.SuggestionRight=on.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	gap: 12px;
`,Qf.SuggestionItem=on.div`
	${Fa}
	gap: 12px;
	padding: 16px;
	border: 1px solid ${bn.GRAYSCALE[2]};
	border-radius: 12px;
	background: ${bn.GRAYSCALE[0]};
`,Qf.SuggestionAvatar=on.div`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background: ${bn.PALETTE.third.light||"#EDE0FF"};
	color: ${bn.PALETTE.third.main};
	${$a}
	font-size: 13px;
	font-weight: 700;
	flex-shrink: 0;
`,Qf.SuggestionItemContent=on.div`
	flex: 1;
`,Qf.SuggestionUser=on.p`
	${ll}
	color: ${bn.GRAYSCALE[8]};
	margin-bottom: 2px;
`,Qf.SuggestionItemText=on.p`
	${sl}
	color: ${bn.GRAYSCALE[7]};
`,Qf.AddListBtn=on.button`
	${ll}
	padding: 6px 12px;
	border-radius: 8px;
	border: 1px solid ${bn.PALETTE.third.main};
	color: ${bn.PALETTE.third.main};
	background: white;
	white-space: nowrap;
	transition: all 0.15s;
	&:hover { background: ${bn.PALETTE.third.main}; color: white; }
`,Qf.ModalOverlay=on.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.4);
	${$a}
	z-index: 200;
`,Qf.AddModal=on.div`
	width: 900px;
	background: ${bn.PALETTE.white};
	border-radius: 16px;
	padding: 40px 48px;
	display: flex;
	flex-direction: column;
	gap: 28px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`,Qf.AddModalHeader=on.div`
	${Fa}
`,Qf.AddModalTitle=on.h3`
	${tl}
	color: ${bn.PALETTE.black};
`,Qf.AddModalClose=on.button`
	${tl}
	color: ${bn.GRAYSCALE[7]};
	background: none;
	border: none;
	cursor: pointer;
	font-size: 20px;
	&:hover { color: ${bn.PALETTE.black}; }
`,Qf.AddModalField=on.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,Qf.AddModalLabel=on.label`
	${ol}
	color: ${bn.PALETTE.black};
`,Qf.AddModalInput=on.input`
	width: 100%;
	height: 56px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 0 16px;
	${ol}
	color: ${bn.PALETTE.black};
	font-family: 'pretendard', sans-serif;
	outline: none;
	&::placeholder { color: ${bn.GRAYSCALE[5]}; }
	&:focus { border-color: ${bn.PALETTE.third.main}; }
`,Qf.AddModalTextarea=on.textarea`
	width: 100%;
	height: 80px;
	border: 1px solid ${bn.GRAYSCALE[3]};
	border-radius: 10px;
	padding: 16px;
	${ol}
	color: ${bn.PALETTE.black};
	font-family: 'pretendard', sans-serif;
	resize: none;
	outline: none;
	&::placeholder { color: ${bn.GRAYSCALE[5]}; }
	&:focus { border-color: ${bn.PALETTE.third.main}; }
`,Qf.AddModalBottom=on.div`
	${Fa}
	align-items: center;
`,Qf.AddModalPriorityRow=on.div`
	${Ra}
	gap: 16px;
`,Qf.AddModalPriorityBtns=on.div`
	${Ra}
	gap: 8px;
`,Qf.PrioritySelectBtn=on.button`
	${il}
	padding: 6px 16px;
	border-radius: 20px;
	border: 1px solid ${e=>{let{$selected:t,$priority:n}=e;return t?"\ub192\uc74c"===n?bn.PALETTE.fourth.main:"\uc911\uac04"===n?bn.PALETTE.primary.main:bn.PALETTE.secondary.main:bn.GRAYSCALE[4]}};
	background: ${e=>{let{$selected:t,$priority:n}=e;return t?"\ub192\uc74c"===n?bn.PALETTE.fourth.light:"\uc911\uac04"===n?bn.PALETTE.primary.light:bn.PALETTE.secondary.light:bn.PALETTE.white}};
	color: ${e=>{let{$selected:t,$priority:n}=e;return t?"\ub192\uc74c"===n?bn.PALETTE.fourth.main:"\uc911\uac04"===n?bn.PALETTE.primary.main:bn.PALETTE.secondary.main:bn.GRAYSCALE[7]}};
	cursor: pointer;
	transition: all 0.15s;
`,Qf.AddModalSubmitBtn=on.button`
	${il}
	width: 88px;
	height: 36px;
	border-radius: 10px;
	border: 1px solid ${bn.GRAYSCALE[4]};
	background: ${bn.PALETTE.white};
	color: ${bn.PALETTE.black};
	transition: all 0.15s;
	&:hover { border-color: ${bn.PALETTE.third.main}; color: ${bn.PALETTE.third.main}; }
`,Qf.AddedPopupOverlay=on.div`
	position: fixed;
	inset: 0;
	z-index: 100;
	pointer-events: none;
	${$a}
`,Qf.AddedPopup=on.div`
	pointer-events: all;
	background: white;
	border: 1.5px solid ${bn.PALETTE.third.main};
	border-radius: 16px;
	padding: 28px 40px;
	text-align: center;
	box-shadow: 0 8px 32px rgba(171, 71, 255, 0.12);
`,Qf.AddedPopupText=on.p`
	${nl}
	color: ${bn.PALETTE.black};
	margin-bottom: 20px;
	line-height: 1.6;
`,Qf.AddedPopupBtn=on.button`
	${il}
	padding: 8px 28px;
	border-radius: 20px;
	border: 1px solid ${bn.GRAYSCALE[4]};
	background: white;
	color: ${bn.PALETTE.black};
	&:hover { background: ${bn.GRAYSCALE[1]}; }
`;const Zf=()=>{const e=wi(),{projects:t,addProject:n,updateProject:i,deleteProject:o}=Pf(),[a,l]=(0,r.useState)(null),[s,c]=(0,r.useState)({}),[d,u]=(0,r.useState)(null),[h,p]=(0,r.useState)(Gf),[f,g]=(0,r.useState)(""),[m,x]=(0,r.useState)(!1),[b,v]=(0,r.useState)(!1),[y,w]=(0,r.useState)(!1),[E,j]=(0,r.useState)({title:"",memo:"",priority:null}),S=t.find(e=>e.isActive)||t[0],T=()=>{l(null),u(null),c({})},A=(e,t)=>{p(n=>n.filter(n=>"delete"!==t||n.id!==e))},k=(e,t)=>{p(n=>n.map(n=>n.id===e?{...n,status:t}:n))};return(0,yo.jsxs)(Qf.PageWrapper,{children:["select"===a&&(0,yo.jsx)(Af,{onClose:T,onNext:()=>l("step1")}),"step1"===a&&(0,yo.jsx)(Cf,{onClose:T,onNext:e=>{c(e),l("step2")}}),"step2"===a&&(0,yo.jsx)($f,{onClose:T,onSubmit:e=>{n({...s,...e}),l(null),c({})},projectName:s.projectName,isActive:s.isActive}),"edit"===a&&(0,yo.jsx)(Mf,{onClose:T,onSubmit:e=>{d&&i(d.id,{name:e.projectName,startDate:e.startDate,endDate:e.endDate,isActive:e.isActive}),l(null),u(null)},initialData:d?{projectName:d.name,startDate:d.startDate,endDate:d.endDate,isActive:d.isActive}:{}}),b&&(0,yo.jsx)(Qf.AddedPopupOverlay,{children:(0,yo.jsxs)(Qf.AddedPopup,{children:[(0,yo.jsxs)(Qf.AddedPopupText,{children:["\ub0b4 \ud504\ub85c\uc81d\ud2b8\uc5d0",(0,yo.jsx)("br",{}),"\ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."]}),(0,yo.jsx)(Qf.AddedPopupBtn,{onClick:()=>v(!1),children:"\ud655\uc778"})]})}),(0,yo.jsxs)(Qf.Inner,{children:[(0,yo.jsxs)(Qf.PageTop,{children:[(0,yo.jsx)(Qf.PageTitle,{children:"PROJECT"}),(0,yo.jsx)(Qf.TopBtnRow,{children:S?(0,yo.jsx)(Qf.OutlineBtn,{$danger:!0,onClick:()=>S&&(null===o||void 0===o?void 0:o(S.id)),children:"\ud504\ub85c\uc81d\ud2b8 \uc0ad\uc81c"}):(0,yo.jsx)(Qf.OutlineBtn,{onClick:()=>{v(!0),x(!0)},children:"\ub0b4 \ud504\ub85c\uc81d\ud2b8 \ucd94\uac00"})})]}),(0,yo.jsxs)(Qf.Section,{children:[(0,yo.jsx)(Qf.SectionLabel,{children:"VISION"}),(0,yo.jsx)(Qf.VisionText,{children:(null===S||void 0===S?void 0:S.vision)||"\uafb8\uc900\ud788 \uc6b4\ub3d9\ud574\uc11c \ubbf8\ub798\uc5d0\ub3c4 \uac74\uac15\ud55c \ubab8 \uc720\uc9c0\ud558\uae30"})]}),(0,yo.jsxs)(Qf.ProjectCard,{children:[(0,yo.jsxs)(Qf.ProjectCardInner,{children:[(0,yo.jsx)(Qf.ProjectCardMeta,{children:(0,yo.jsxs)(Qf.AiRecommendLabel,{children:[(0,yo.jsx)(_f,{})," AI \ucd94\ucc9c \ud504\ub85c\uc81d\ud2b8"]})}),(0,yo.jsx)(Qf.ProjectName,{children:(null===S||void 0===S?void 0:S.name)||"20\uc77c \uc544\uce68\ub8e8\ud2f4 \ub9cc\ub4e4\uae30"}),(0,yo.jsxs)(Qf.ProjectDateRange,{children:[(null===S||void 0===S?void 0:S.startDate)||"2026.03.01"," ~ ",(null===S||void 0===S?void 0:S.endDate)||"2027.03.14"]}),(0,yo.jsx)(Qf.ProjectGoal,{children:(null===S||void 0===S?void 0:S.goal)||"\ubaa9\ud45c\ub97c \uc704\ud574 \ub2ec\ub9b0\ub2e4"}),(0,yo.jsxs)(Qf.ProgressRow,{children:[(0,yo.jsx)(Qf.ProgressBar,{children:(0,yo.jsx)(Qf.ProgressFill,{$percent:68})}),(0,yo.jsx)(Qf.DDay,{children:(e=>{if(!e)return"D-Day";const t=new Date(e),n=new Date,r=Math.floor((n-t)/864e5);return r>=0?`D+${r}`:`D${r}`})(null===S||void 0===S?void 0:S.startDate)})]})]}),(0,yo.jsx)(Qf.ProjectEditBtn,{onClick:()=>{S&&(u(S),l("edit"))},children:(0,yo.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,yo.jsx)("path",{d:"M11.333 2a1.886 1.886 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2Z",stroke:bn.GRAYSCALE[7],strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),(0,yo.jsxs)(Qf.Section,{$mt:"60px",children:[(0,yo.jsx)(Qf.SectionTitleRow,{children:(0,yo.jsxs)(Qf.SectionTitle,{children:["\ud589\ub3d9 \ucd94\ucc9c ",(0,yo.jsx)(_f,{})]})}),(0,yo.jsx)(Qf.ActionGrid,{children:Hf.map(t=>(0,yo.jsxs)(Qf.ActionCard,{onClick:()=>t.path&&e(t.path),children:[(0,yo.jsx)(Qf.ActionDot,{}),(0,yo.jsxs)(Qf.ActionContent,{children:[(0,yo.jsx)(Qf.ActionTitle,{children:t.title}),(0,yo.jsx)(Qf.ActionDesc,{children:t.desc})]})]},t.id))})]}),(0,yo.jsxs)(Qf.Section,{$mt:"60px",children:[(0,yo.jsx)(Qf.SectionTitle,{children:"Checklist"}),(0,yo.jsx)(Qf.ChecklistSubtitle,{children:"AI\uac00 \ub9cc\ub4e0 '\uc561\uc158'\uc744 \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uac70\ub098, \ub0b4 \uacc4\ud68d\uc73c\ub85c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,yo.jsx)(Qf.ChecklistList,{children:h.map(e=>(0,yo.jsx)(Yf,{item:e,onToggle:A,onStatusChange:k},e.id))}),(0,yo.jsxs)(Qf.AddItemBtn,{onClick:()=>w(!0),children:[(0,yo.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,yo.jsx)("path",{d:"M7 1V13M1 7H13",stroke:bn.GRAYSCALE[7],strokeWidth:"1.5",strokeLinecap:"round"})}),"\uc0c8 \ud56d\ubaa9 \ucd94\uac00"]}),y&&(0,yo.jsx)(Qf.ModalOverlay,{onClick:()=>w(!1),children:(0,yo.jsxs)(Qf.AddModal,{onClick:e=>e.stopPropagation(),children:[(0,yo.jsxs)(Qf.AddModalHeader,{children:[(0,yo.jsx)(Qf.AddModalTitle,{children:"\uc0c8 \ud56d\ubaa9 \ucd94\uac00"}),(0,yo.jsx)(Qf.AddModalClose,{onClick:()=>w(!1),children:"\u2715"})]}),(0,yo.jsxs)(Qf.AddModalField,{children:[(0,yo.jsx)(Qf.AddModalLabel,{children:"\ud56d\ubaa9 \uc774\ub984"}),(0,yo.jsx)(Qf.AddModalInput,{placeholder:"\uc608) \uc790\uae30 \uc804 30\ubd84 \ub3c5\uc11c\ud558\uae30",value:E.title,onChange:e=>j(t=>({...t,title:e.target.value}))})]}),(0,yo.jsxs)(Qf.AddModalField,{children:[(0,yo.jsx)(Qf.AddModalLabel,{children:"\ud55c \uc904 \uba54\ubaa8"}),(0,yo.jsx)(Qf.AddModalTextarea,{placeholder:"\uc544\uc9c1 \uc791\uc131\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",value:E.memo,onChange:e=>j(t=>({...t,memo:e.target.value}))})]}),(0,yo.jsxs)(Qf.AddModalBottom,{children:[(0,yo.jsx)(Qf.AddModalPriorityRow,{children:(0,yo.jsx)(Qf.AddModalPriorityBtns,{children:["\ub192\uc74c","\uc911\uac04","\ub0ae\uc74c"].map(e=>(0,yo.jsxs)(Qf.PrioritySelectBtn,{$selected:E.priority===e,$priority:e,onClick:()=>j(t=>({...t,priority:e})),children:["\uc6b0\uc120\uc21c\uc704 ",e]},e))})}),(0,yo.jsx)(Qf.AddModalSubmitBtn,{onClick:()=>{E.title.trim()&&(p(e=>[...e,{id:Date.now(),title:E.title,memo:E.memo,priority:E.priority||"\ub0ae\uc74c",status:null}]),j({title:"",memo:"",priority:null}),w(!1))},children:"\ucd94\uac00\ud558\uae30"})]})]})})]}),(0,yo.jsxs)(Qf.Section,{$mt:"60px",$mb:"120px",children:[(0,yo.jsx)(Qf.SectionTitle,{children:"Suggestion"}),(0,yo.jsxs)(Qf.SuggestionBox,{children:[(0,yo.jsxs)(Qf.SuggestionLeft,{children:[(0,yo.jsx)(Qf.SuggestionIcon,{children:(0,yo.jsx)("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:(0,yo.jsx)("path",{d:"M14 4L17 10L24 11L19 16L20.5 23L14 20L7.5 23L9 16L4 11L11 10L14 4Z",fill:bn.PALETTE.third.main,stroke:bn.PALETTE.third.main,strokeWidth:"1.5",strokeLinejoin:"round"})})}),(0,yo.jsxs)(Qf.SuggestionTextWrap,{children:[(0,yo.jsxs)(Qf.SuggestionPrompt,{children:["\ub2f9\uc2e0\uc758 \uccb4\ud06c\ub9ac\uc2a4\ud2b8\ub97c",(0,yo.jsx)("br",{}),"\uacf5\uc720\ud574\uc8fc\uc138\uc694."]}),(0,yo.jsx)(Qf.SuggestionDesc,{children:"\uc791\uc740 \uc870\uac74\uacfc \ucd5c\ub300\ud55c \uc131\uc7a5\uc758 \ubc1c\uc790\ub4e4\uc774 \ub429\ub2c8\ub2e4."})]}),(0,yo.jsx)(Qf.SuggestionInput,{value:f,onChange:e=>g(e.target.value),placeholder:"\uc81c\uc548\uc744 \uc785\ub825\ud574\ubcf4\uc138\uc694."}),(0,yo.jsxs)(Qf.SuggestionSubmitBtn,{children:[(0,yo.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,yo.jsx)("path",{d:"M2 12L6.5 7.5M2 2L12 7L6.5 7.5L2 12",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),"\uc81c\uc548 \ub0a8\uae30\uae30"]})]}),(0,yo.jsx)(Qf.SuggestionRight,{children:Wf.map(e=>(0,yo.jsxs)(Qf.SuggestionItem,{children:[(0,yo.jsx)(Qf.SuggestionAvatar,{children:e.avatar}),(0,yo.jsxs)(Qf.SuggestionItemContent,{children:[(0,yo.jsx)(Qf.SuggestionUser,{children:e.user}),(0,yo.jsx)(Qf.SuggestionItemText,{children:e.text})]}),(0,yo.jsx)(Qf.AddListBtn,{children:"+ \ub9ac\uc2a4\ud2b8 \ucd94\uac00"})]},e.id))})]})]})]})]})},Vf=()=>(0,yo.jsx)(Zf,{}),qf=()=>(0,yo.jsx)("div",{children:"\ube44\uc804\ucee8\ud14c\uc774\ub108"}),Xf=function(e,t){return wr({basename:null==t?void 0:t.basename,future:Hi({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(n={window:null==t?void 0:t.window},void 0===n&&(n={}),$n(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return kn("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:Cn(t)},null,n)),hydrationData:(null==t?void 0:t.hydrationData)||Yi(),routes:e,mapRouteProperties:Gi,dataStrategy:null==t?void 0:t.dataStrategy,patchRoutesOnNavigation:null==t?void 0:t.patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize();var n}([{path:"/",element:(0,yo.jsx)(wo,{}),children:[{path:"",element:(0,yo.jsx)(ea,{})},{path:"fail-logs",element:(0,yo.jsx)(jp,{}),children:[{path:"",element:(0,yo.jsx)(zp,{})}]},{path:"logs",element:(0,yo.jsx)(Eo,{}),children:[{path:"new",element:(0,yo.jsx)(Bu,{}),children:[{path:"step1",element:(0,yo.jsx)(Du,{})},{path:"step2",element:(0,yo.jsx)(Fu,{})}]},{path:"result/:id",element:(0,yo.jsx)(na,{}),children:[{path:"detail",element:(0,yo.jsx)(oa,{})},{path:"report",element:(0,yo.jsx)(ca,{}),children:[{path:"patterns",element:(0,yo.jsx)(ja,{})},{path:"action-plan",element:(0,yo.jsx)(La,{})}]}]}]},{path:"community",element:(0,yo.jsx)(uc,{}),children:[{path:"",element:(0,yo.jsx)(Ys,{})}]},{path:"community/new",element:(0,yo.jsx)(hc,{})},{path:"community/detail/:id",element:(0,yo.jsx)(pu,{})},{path:"community/edit/:id",element:(0,yo.jsx)(fu,{})},{element:(0,yo.jsx)(Ku,{}),children:[{path:"join",element:(0,yo.jsx)(lh,{})},{path:"login",element:(0,yo.jsx)(ph,{})},{path:"reset-password",element:(0,yo.jsx)(mh,{})},{path:"find-id",element:(0,yo.jsx)(vh,{})}]},{path:"my-page",element:(0,yo.jsx)(cp,{}),children:[{path:"profile",element:(0,yo.jsx)(ep,{})},{path:"fail-logs",element:(0,yo.jsx)(sp,{})},{path:"likes",element:(0,yo.jsx)(np,{})},{path:"guestbook",element:(0,yo.jsx)(tp,{})}]},{path:"chronology",element:(0,yo.jsx)(Hp,{}),children:[{path:"",element:(0,yo.jsx)(af,{})},{path:"analysis",element:(0,yo.jsx)(pf,{})},{path:"result",element:(0,yo.jsx)(vf,{})}]},{path:"projects",element:(0,yo.jsx)(yf,{}),children:[{path:"",element:(0,yo.jsx)(Df,{})},{path:":id",element:(0,yo.jsx)(Vf,{})}]},{path:"vision",element:(0,yo.jsx)(qf,{}),children:[]}]}]),Jf=Xf;var Kf={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},eg=new class{#e=(()=>Kf)();#t=!1;setTimeoutProvider(e){this.#e=e}setTimeout(e,t){return this.#e.setTimeout(e,t)}clearTimeout(e){this.#e.clearTimeout(e)}setInterval(e,t){return this.#e.setInterval(e,t)}clearInterval(e){this.#e.clearInterval(e)}};var tg="undefined"===typeof window||"Deno"in globalThis;function ng(){}function rg(e,t){return"function"===typeof e?e(t):e}function ig(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(a)if(r){if(t.queryHash!==ag(a,t.options))return!1}else if(!sg(t.queryKey,a))return!1;if("all"!==n){const e=t.isActive();if("active"===n&&!e)return!1;if("inactive"===n&&e)return!1}return("boolean"!==typeof l||t.isStale()===l)&&((!i||i===t.state.fetchStatus)&&!(o&&!o(t)))}function og(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(lg(t.options.mutationKey)!==lg(o))return!1}else if(!sg(t.options.mutationKey,o))return!1}return(!r||t.state.status===r)&&!(i&&!i(t))}function ag(e,t){return(t?.queryKeyHashFn||lg)(e)}function lg(e){return JSON.stringify(e,(e,t)=>hg(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function sg(e,t){return e===t||typeof e===typeof t&&(!(!e||!t||"object"!==typeof e||"object"!==typeof t)&&Object.keys(t).every(n=>sg(e[n],t[n])))}var cg=Object.prototype.hasOwnProperty;function dg(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e===t)return e;if(n>500)return t;const r=ug(e)&&ug(t);if(!r&&(!hg(e)||!hg(t)))return t;const i=(r?e:Object.keys(e)).length,o=r?t:Object.keys(t),a=o.length,l=r?new Array(a):{};let s=0;for(let c=0;c<a;c++){const a=r?c:o[c],d=e[a],u=t[a];if(d===u){l[a]=d,(r?c<i:cg.call(e,a))&&s++;continue}if(null===d||null===u||"object"!==typeof d||"object"!==typeof u){l[a]=u;continue}const h=dg(d,u,n+1);l[a]=h,h===d&&s++}return i===a&&s===i?e:l}function ug(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function hg(e){if(!pg(e))return!1;const t=e.constructor;if(void 0===t)return!0;const n=t.prototype;return!!pg(n)&&(!!n.hasOwnProperty("isPrototypeOf")&&Object.getPrototypeOf(e)===Object.prototype)}function pg(e){return"[object Object]"===Object.prototype.toString.call(e)}function fg(e,t,n){return"function"===typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?dg(e,t):t}function gg(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=[...e,t];return n&&r.length>n?r.slice(1):r}function mg(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var xg=Symbol();function bg(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:e.queryFn&&e.queryFn!==xg?e.queryFn:()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))}var vg=function(e){setTimeout(e,0)};var yg=function(){let e=[],t=0,n=e=>{e()},r=e=>{e()},i=vg;const o=r=>{t?e.push(r):i(()=>{n(r)})};return{batch:o=>{let a;t++;try{a=o()}finally{t--,t||(()=>{const t=e;e=[],t.length&&i(()=>{r(()=>{t.forEach(e=>{n(e)})})})})()}return a},batchCalls:e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];o(()=>{e(...n)})},schedule:o,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e},setScheduler:e=>{i=e}}}(),wg=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Eg=new class extends wg{#n;#r;#i;constructor(){super(),this.#i=e=>{if("undefined"!==typeof window&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),()=>{window.removeEventListener("visibilitychange",t)}}}}onSubscribe(){this.#r||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(e){this.#i=e,this.#r?.(),this.#r=e(e=>{"boolean"===typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.#n!==e&&(this.#n=e,this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(t=>{t(e)})}isFocused(){return"boolean"===typeof this.#n?this.#n:"hidden"!==globalThis.document?.visibilityState}},jg=new class extends wg{#o=!0;#r;#i;constructor(){super(),this.#i=e=>{if("undefined"!==typeof window&&window.addEventListener){const t=()=>e(!0),n=()=>e(!1);return window.addEventListener("online",t,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#r||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#r?.(),this.#r=void 0)}setEventListener(e){this.#i=e,this.#r?.(),this.#r=e(this.setOnline.bind(this))}setOnline(e){this.#o!==e&&(this.#o=e,this.listeners.forEach(t=>{t(e)}))}isOnline(){return this.#o}};var Sg=(()=>{let e=()=>tg;return{isServer:()=>e(),setIsServer(t){e=t}}})();function Tg(e){return Math.min(1e3*2**e,3e4)}function Ag(e){return"online"!==(e??"online")||jg.isOnline()}var kg=class extends Error{constructor(e){super("CancelledError"),this.revert=e?.revert,this.silent=e?.silent}};function Cg(e){let t,n=!1,r=0;const i=function(){let e,t;const n=new Promise((n,r)=>{e=n,t=r});function r(e){Object.assign(n,e),delete n.resolve,delete n.reject}return n.status="pending",n.catch(()=>{}),n.resolve=t=>{r({status:"fulfilled",value:t}),e(t)},n.reject=e=>{r({status:"rejected",reason:e}),t(e)},n}(),o=()=>"pending"!==i.status,a=()=>Eg.isFocused()&&("always"===e.networkMode||jg.isOnline())&&e.canRun(),l=()=>Ag(e.networkMode)&&e.canRun(),s=e=>{o()||(t?.(),i.resolve(e))},c=e=>{o()||(t?.(),i.reject(e))},d=()=>new Promise(n=>{t=e=>{(o()||a())&&n(e)},e.onPause?.()}).then(()=>{t=void 0,o()||e.onContinue?.()}),u=()=>{if(o())return;let t;const i=0===r?e.initialPromise:void 0;try{t=i??e.fn()}catch(l){t=Promise.reject(l)}Promise.resolve(t).then(s).catch(t=>{if(o())return;const i=e.retry??(Sg.isServer()?0:3),l=e.retryDelay??Tg,s="function"===typeof l?l(r,t):l,h=!0===i||"number"===typeof i&&r<i||"function"===typeof i&&i(r,t);var p;!n&&h?(r++,e.onFail?.(r,t),(p=s,new Promise(e=>{eg.setTimeout(e,p)})).then(()=>a()?void 0:d()).then(()=>{n?c(t):u()})):c(t)})};return{promise:i,status:()=>i.status,cancel:t=>{if(!o()){const n=new kg(t);c(n),e.onCancel?.(n)}},continue:()=>(t?.(),i),cancelRetry:()=>{n=!0},continueRetry:()=>{n=!1},canStart:l,start:()=>(l()?u():d().then(u),i)}}var Lg=class{#a;destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"===typeof(e=this.gcTime)&&e>=0&&e!==1/0&&(this.#a=eg.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Sg.isServer()?1/0:3e5))}clearGcTimeout(){void 0!==this.#a&&(eg.clearTimeout(this.#a),this.#a=void 0)}};function $g(e){return{onFetch:(t,n)=>{const r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,o=t.state.data?.pages||[],a=t.state.data?.pageParams||[];let l={pages:[],pageParams:[]},s=0;const c=async()=>{let n=!1;const c=e=>{!function(e,t,n){let r,i=!1;Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(r??=t(),i||(i=!0,r.aborted?n():r.addEventListener("abort",n,{once:!0})),r)})}(e,()=>t.signal,()=>n=!0)},d=bg(t.options,t.fetchOptions),u=async(e,r,i)=>{if(n)return Promise.reject(t.signal.reason);if(null==r&&e.pages.length)return Promise.resolve(e);const o=(()=>{const e={client:t.client,queryKey:t.queryKey,pageParam:r,direction:i?"backward":"forward",meta:t.options.meta};return c(e),e})(),a=await d(o),{maxPages:l}=t.options,s=i?mg:gg;return{pages:s(e.pages,a,l),pageParams:s(e.pageParams,r,l)}};if(i&&o.length){const e="backward"===i,t={pages:o,pageParams:a},n=(e?Pg:Ig)(r,t);l=await u(t,n,e)}else{const t=e??o.length;do{const e=0===s?a[0]??r.initialPageParam:Ig(r,l);if(s>0&&null==e)break;l=await u(l,e),s++}while(s<t)}return l};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=c}}}function Ig(e,t){let{pages:n,pageParams:r}=t;const i=n.length-1;return n.length>0?e.getNextPageParam(n[i],n,r[i],r):void 0}function Pg(e,t){let{pages:n,pageParams:r}=t;return n.length>0?e.getPreviousPageParam?.(n[0],n,r[0],r):void 0}var Fg=class extends Lg{#l;#s;#c;#d;#u;#h;#p;#f;constructor(e){super(),this.#f=!1,this.#p=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#u=e.client,this.#d=this.#u.getQueryCache(),this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#s=Ng(this.options),this.state=e.state??this.#s,this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return this.#l}get promise(){return this.#h?.promise}setOptions(e){if(this.options={...this.#p,...e},e?._type&&(this.#l=e._type),this.updateGcTime(this.options.gcTime),this.state&&void 0===this.state.data){const e=Ng(this.options);void 0!==e.data&&(this.setState(Og(e.data,e.dataUpdatedAt)),this.#s=e)}}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#d.remove(this)}setData(e,t){const n=fg(this.state.data,e,this.options);return this.#g({data:n,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),n}setState(e){this.#g({type:"setState",state:e})}cancel(e){const t=this.#h?.promise;return this.#h?.cancel(e),t?t.then(ng).catch(ng):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return this.#s}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(e=>{return!1!==(t=e.options.enabled,n=this,"function"===typeof t?t(n):t);var t,n})}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===xg||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0&&this.observers.some(e=>"static"===rg(e.options.staleTime,this))}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data||this.state.isInvalidated}isStaleByTime(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return void 0===this.state.data||"static"!==e&&(!!this.state.isInvalidated||!function(e,t){return Math.max(e+(t||0)-Date.now(),0)}(this.state.dataUpdatedAt,e))}onFocus(){const e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#h?.continue()}onOnline(){const e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#h?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#d.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#h&&(this.#f||this.#m()?this.#h.cancel({revert:!0}):this.#h.cancelRetry()),this.scheduleGc()),this.#d.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}#m(){return"paused"===this.state.fetchStatus&&"pending"===this.state.status}invalidate(){this.state.isInvalidated||this.#g({type:"invalidate"})}async fetch(e,t){if("idle"!==this.state.fetchStatus&&"rejected"!==this.#h?.status())if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#h)return this.#h.continueRetry(),this.#h.promise;if(e&&this.setOptions(e),!this.options.queryFn){const e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}const n=new AbortController,r=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#f=!0,n.signal)})},i=()=>{const e=bg(this.options,t),n=(()=>{const e={client:this.#u,queryKey:this.queryKey,meta:this.meta};return r(e),e})();return this.#f=!1,this.options.persister?this.options.persister(e,n,this):e(n)},o=(()=>{const e={fetchOptions:t,options:this.options,queryKey:this.queryKey,client:this.#u,state:this.state,fetchFn:i};return r(e),e})(),a="infinite"===this.#l?$g(this.options.pages):this.options.behavior;a?.onFetch(o,this),this.#c=this.state,"idle"!==this.state.fetchStatus&&this.state.fetchMeta===o.fetchOptions?.meta||this.#g({type:"fetch",meta:o.fetchOptions?.meta}),this.#h=Cg({initialPromise:t?.initialPromise,fn:o.fetchFn,onCancel:e=>{e instanceof kg&&e.revert&&this.setState({...this.#c,fetchStatus:"idle"}),n.abort()},onFail:(e,t)=>{this.#g({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#g({type:"pause"})},onContinue:()=>{this.#g({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0});try{const e=await this.#h.start();if(void 0===e)throw new Error(`${this.queryHash} data is undefined`);return this.setData(e),this.#d.config.onSuccess?.(e,this),this.#d.config.onSettled?.(e,this.state.error,this),e}catch(l){if(l instanceof kg){if(l.silent)return this.#h.promise;if(l.revert){if(void 0===this.state.data)throw l;return this.state.data}}throw this.#g({type:"error",error:l}),this.#d.config.onError?.(l,this),this.#d.config.onSettled?.(this.state.data,l,this),l}finally{this.scheduleGc()}}#g(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,...Rg(t.data,this.options),fetchMeta:e.meta??null};case"success":const n={...t,...Og(e.data,e.dataUpdatedAt),dataUpdateCount:t.dataUpdateCount+1,...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#c=e.manual?n:void 0,n;case"error":const r=e.error;return{...t,error:r,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),yg.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#d.notify({query:this,type:"updated",action:e})})}};function Rg(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ag(t.networkMode)?"fetching":"paused",...void 0===e&&{error:null,status:"pending"}}}function Og(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Ng(e){const t="function"===typeof e.initialData?e.initialData():e.initialData,n=void 0!==t,r=n?"function"===typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var zg=class extends wg{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.config=e,this.#x=new Map}#x;build(e,t,n){const r=t.queryKey,i=t.queryHash??ag(r,t);let o=this.get(i);return o||(o=new Fg({client:e,queryKey:r,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){this.#x.has(e.queryHash)||(this.#x.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const t=this.#x.get(e.queryHash);t&&(e.destroy(),t===e&&this.#x.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){yg.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#x.get(e)}getAll(){return[...this.#x.values()]}find(e){const t={exact:!0,...e};return this.getAll().find(e=>ig(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=this.getAll();return Object.keys(e).length>0?t.filter(t=>ig(e,t)):t}notify(e){yg.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){yg.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){yg.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Dg=class extends Lg{#u;#b;#v;#h;constructor(e){super(),this.#u=e.client,this.mutationId=e.mutationId,this.#v=e.mutationCache,this.#b=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){this.#b.includes(e)||(this.#b.push(e),this.clearGcTimeout(),this.#v.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.#b=this.#b.filter(t=>t!==e),this.scheduleGc(),this.#v.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.#b.length||("pending"===this.state.status?this.scheduleGc():this.#v.remove(this))}continue(){return this.#h?.continue()??this.execute(this.state.variables)}async execute(e){const t=()=>{this.#g({type:"continue"})},n={client:this.#u,meta:this.options.meta,mutationKey:this.options.mutationKey};this.#h=Cg({fn:()=>this.options.mutationFn?this.options.mutationFn(e,n):Promise.reject(new Error("No mutationFn found")),onFail:(e,t)=>{this.#g({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#g({type:"pause"})},onContinue:t,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#v.canRun(this)});const r="pending"===this.state.status,i=!this.#h.canStart();try{if(r)t();else{this.#g({type:"pending",variables:e,isPaused:i}),this.#v.config.onMutate&&await this.#v.config.onMutate(e,this,n);const t=await(this.options.onMutate?.(e,n));t!==this.state.context&&this.#g({type:"pending",context:t,variables:e,isPaused:i})}const o=await this.#h.start();return await(this.#v.config.onSuccess?.(o,e,this.state.context,this,n)),await(this.options.onSuccess?.(o,e,this.state.context,n)),await(this.#v.config.onSettled?.(o,null,this.state.variables,this.state.context,this,n)),await(this.options.onSettled?.(o,null,e,this.state.context,n)),this.#g({type:"success",data:o}),o}catch(o){try{await(this.#v.config.onError?.(o,e,this.state.context,this,n))}catch(Yg){Promise.reject(Yg)}try{await(this.options.onError?.(o,e,this.state.context,n))}catch(Yg){Promise.reject(Yg)}try{await(this.#v.config.onSettled?.(void 0,o,this.state.variables,this.state.context,this,n))}catch(Yg){Promise.reject(Yg)}try{await(this.options.onSettled?.(void 0,o,e,this.state.context,n))}catch(Yg){Promise.reject(Yg)}throw this.#g({type:"error",error:o}),o}finally{this.#v.runNext(this)}}#g(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),yg.batch(()=>{this.#b.forEach(t=>{t.onMutationUpdate(e)}),this.#v.notify({mutation:this,type:"updated",action:e})})}};var Bg=class extends wg{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this.config=e,this.#y=new Set,this.#w=new Map,this.#E=0}#y;#w;#E;build(e,t,n){const r=new Dg({client:e,mutationCache:this,mutationId:++this.#E,options:e.defaultMutationOptions(t),state:n});return this.add(r),r}add(e){this.#y.add(e);const t=Mg(e);if("string"===typeof t){const n=this.#w.get(t);n?n.push(e):this.#w.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#y.delete(e)){const t=Mg(e);if("string"===typeof t){const n=this.#w.get(t);if(n)if(n.length>1){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}else n[0]===e&&this.#w.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){const t=Mg(e);if("string"===typeof t){const n=this.#w.get(t),r=n?.find(e=>"pending"===e.state.status);return!r||r===e}return!0}runNext(e){const t=Mg(e);if("string"===typeof t){const n=this.#w.get(t)?.find(t=>t!==e&&t.state.isPaused);return n?.continue()??Promise.resolve()}return Promise.resolve()}clear(){yg.batch(()=>{this.#y.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#y.clear(),this.#w.clear()})}getAll(){return Array.from(this.#y)}find(e){const t={exact:!0,...e};return this.getAll().find(e=>og(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.getAll().filter(t=>og(e,t))}notify(e){yg.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){const e=this.getAll().filter(e=>e.state.isPaused);return yg.batch(()=>Promise.all(e.map(e=>e.continue().catch(ng))))}};function Mg(e){return e.options.scope?.id}var Gg=class{#j;#v;#p;#S;#T;#A;#k;#C;constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.#j=e.queryCache||new zg,this.#v=e.mutationCache||new Bg,this.#p=e.defaultOptions||{},this.#S=new Map,this.#T=new Map,this.#A=0}mount(){this.#A++,1===this.#A&&(this.#k=Eg.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#j.onFocus())}),this.#C=jg.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#j.onOnline())}))}unmount(){this.#A--,0===this.#A&&(this.#k?.(),this.#k=void 0,this.#C?.(),this.#C=void 0)}isFetching(e){return this.#j.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#v.findAll({...e,status:"pending"}).length}getQueryData(e){const t=this.defaultQueryOptions({queryKey:e});return this.#j.get(t.queryHash)?.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=this.#j.build(this,t),r=n.state.data;return void 0===r?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(rg(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#j.findAll(e).map(e=>{let{queryKey:t,state:n}=e;return[t,n.data]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=this.#j.get(r.queryHash),o=i?.state.data,a=function(e,t){return"function"===typeof e?e(t):e}(t,o);if(void 0!==a)return this.#j.build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return yg.batch(()=>this.#j.findAll(e).map(e=>{let{queryKey:r}=e;return[r,this.setQueryData(r,t,n)]}))}getQueryState(e){const t=this.defaultQueryOptions({queryKey:e});return this.#j.get(t.queryHash)?.state}removeQueries(e){const t=this.#j;yg.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){const n=this.#j;return yg.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e){const t={revert:!0,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}},n=yg.batch(()=>this.#j.findAll(e).map(e=>e.cancel(t)));return Promise.all(n).then(ng).catch(ng)}invalidateQueries(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return yg.batch(()=>(this.#j.findAll(e).forEach(e=>{e.invalidate()}),"none"===e?.refetchType?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t)))}refetchQueries(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n={...t,cancelRefetch:t.cancelRefetch??!0},r=yg.batch(()=>this.#j.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(ng)),"paused"===e.state.fetchStatus?Promise.resolve():t}));return Promise.all(r).then(ng)}fetchQuery(e){const t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);const n=this.#j.build(this,t);return n.isStaleByTime(rg(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ng).catch(ng)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ng).catch(ng)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return jg.isOnline()?this.#v.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#j}getMutationCache(){return this.#v}getDefaultOptions(){return this.#p}setDefaultOptions(e){this.#p=e}setQueryDefaults(e,t){this.#S.set(lg(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...this.#S.values()],n={};return t.forEach(t=>{sg(e,t.queryKey)&&Object.assign(n,t.defaultOptions)}),n}setMutationDefaults(e,t){this.#T.set(lg(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...this.#T.values()],n={};return t.forEach(t=>{sg(e,t.mutationKey)&&Object.assign(n,t.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...this.#p.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=ag(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===xg&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#p.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#j.clear(),this.#v.clear()}},Hg=r.createContext(void 0),Wg=e=>{let{client:t,children:n}=e;return r.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),(0,yo.jsx)(Hg.Provider,{value:t,children:n})};const Ug=function(){const e=new Gg;return(0,yo.jsx)(yo.Fragment,{children:(0,yo.jsx)(Wg,{client:e,children:(0,yo.jsxs)(Qt,{theme:bn,children:[(0,yo.jsx)(mn,{}),(0,yo.jsx)(eo,{router:Jf})]})})})},_g=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then(t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:o,getTTFB:a}=t;n(e),r(e),i(e),o(e),a(e)})};o.createRoot(document.getElementById("root")).render((0,yo.jsx)(Ug,{})),_g()})();
//# sourceMappingURL=main.e5f0e136.js.map