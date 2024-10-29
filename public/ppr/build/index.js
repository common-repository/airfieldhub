!function(){var e,n={986:function(e,n,t){"use strict";var i=window.wp.blocks;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}var r=window.wp.element,a=(window.wp.i18n,window.wp.blockEditor),s=window.React,c=t.n(s),u=window.wp.apiFetch,d=t.n(u),l=t(697),f=t.n(l);function m(){return m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},m.apply(this,arguments)}function g(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}var h,p,w=(h=function(e){!function(n){if("undefined"!=typeof window){var t,i=0,o=!1,r=!1,a="message".length,s="[iFrameSizer]",c=s.length,u=null,d=window.requestAnimationFrame,l={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},f={},m=null,g={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){O("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},h={};window.jQuery&&((t=window.jQuery).fn?t.fn.iFrameResize||(t.fn.iFrameResize=function(e){return this.filter("iframe").each((function(n,t){j(t,e)})).end()}):k("","Unable to bind to jQuery, it is not fully loaded.")),e.exports=L(),window.iFrameResize=window.iFrameResize||L()}function p(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function w(e,n,t){e.addEventListener(n,t,!1)}function b(e,n,t){e.removeEventListener(n,t,!1)}function y(e){return f[e]?f[e].log:o}function v(e,n){M("log",e,n,y(e))}function k(e,n){M("info",e,n,y(e))}function O(e,n){M("warn",e,n,!0)}function M(e,n,t,i){!0===i&&"object"==typeof window.console&&console[e](function(e){return s+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}(n),t)}function x(e){function n(){t("Height"),t("Width"),W((function(){P(A),F(_),g("onResized",A)}),A,"init")}function t(e){var n=Number(f[_]["max"+e]),t=Number(f[_]["min"+e]),i=e.toLowerCase(),o=Number(A[i]);v(_,"Checking "+i+" is in range "+t+"-"+n),o<t&&(o=t,v(_,"Set "+i+" to min value")),o>n&&(o=n,v(_,"Set "+i+" to max value")),A[i]=""+o}function i(e){return N.substr(N.indexOf(":")+a+e)}function o(e,n){var t,i;t=function(){var t,i;H("Send Page Info","pageInfo:"+(t=document.body.getBoundingClientRect(),i=A.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:i.height,iframeWidth:i.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(i.top-t.top,10),offsetLeft:parseInt(i.left-t.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},h[i=n]||(h[i]=setTimeout((function(){h[i]=null,t()}),32))}function r(e){var n=e.getBoundingClientRect();return I(_),{x:Math.floor(Number(n.left)+Number(u.x)),y:Math.floor(Number(n.top)+Number(u.y))}}function d(e){var n=e?r(A.iframe):{x:0,y:0},t={x:Number(A.width)+n.x,y:Number(A.height)+n.y};v(_,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):O(_,"Unable to scroll to requested position, window.parentIFrame not found"):(u=t,l(),v(_,"--"))}function l(){!1!==g("onScroll",u)?F(_):T()}function m(e){g(e,{iframe:A.iframe,screenX:A.width,screenY:A.height,type:A.type})}function g(e,n){return z(_,e,n)}var p,y,M,x,R,j,N=e.data,A={},_=null;"[iFrameResizerChild]Ready"===N?function(){for(var e in f)H("iFrame requested init",S(e),f[e].iframe,e)}():s===(""+N).substr(0,c)&&N.substr(c).split(":")[0]in f?(x=(M=N.substr(c).split(":"))[1]?parseInt(M[1],10):0,R=f[M[0]]&&f[M[0]].iframe,j=getComputedStyle(R),A={iframe:R,id:M[0],height:x+function(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}(j)+function(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}(j),width:M[2],type:M[3]},_=A.id,f[_]&&(f[_].loaded=!0),(y=A.type in{true:1,false:1,undefined:1})&&v(_,"Ignoring init message from meta parent page"),!y&&function(e){var n=!0;return f[e]||(n=!1,O(A.type+" No settings for "+e+". Message was: "+N)),n}(_)&&(v(_,"Received: "+N),p=!0,null===A.iframe&&(O(_,"IFrame ("+A.id+") not found"),p=!1),p&&function(){var n,t=e.origin,i=f[_]&&f[_].checkOrigin;if(i&&""+t!="null"&&!(i.constructor===Array?function(){var e=0,n=!1;for(v(_,"Checking connection is from allowed list of origins: "+i);e<i.length;e++)if(i[e]===t){n=!0;break}return n}():(n=f[_]&&f[_].remoteHost,v(_,"Checking connection is from: "+n),t===n)))throw new Error("Unexpected message received from: "+t+" for "+A.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[_]&&f[_].firstRun&&f[_]&&(f[_].firstRun=!1),A.type){case"close":E(A.iframe);break;case"message":c=i(6),v(_,"onMessage passed: {iframe: "+A.iframe.id+", message: "+c+"}"),g("onMessage",{iframe:A.iframe,message:JSON.parse(c)}),v(_,"--");break;case"mouseenter":m("onMouseEnter");break;case"mouseleave":m("onMouseLeave");break;case"autoResize":f[_].autoResize=JSON.parse(i(9));break;case"scrollTo":d(!1);break;case"scrollToOffset":d(!0);break;case"pageInfo":o(f[_]&&f[_].iframe,_),function(){function e(e,i){function r(){f[t]?o(f[t].iframe,t):n()}["scroll","resize"].forEach((function(n){v(t,e+n+" listener for sendPageInfo"),i(window,n,r)}))}function n(){e("Remove ",b)}var t=_;e("Add ",w),f[t]&&(f[t].stopPageInfo=n)}();break;case"pageInfoStop":f[_]&&f[_].stopPageInfo&&(f[_].stopPageInfo(),delete f[_].stopPageInfo);break;case"inPageLink":t=i(9).split("#")[1]||"",a=decodeURIComponent(t),(s=document.getElementById(a)||document.getElementsByName(a)[0])?(e=r(s),v(_,"Moving to in page link (#"+t+") at x: "+e.x+" y: "+e.y),u={x:e.x,y:e.y},l(),v(_,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):v(_,"In page link #"+t+" not found and window.parentIFrame not found"):v(_,"In page link #"+t+" not found");break;case"reset":C(A);break;case"init":n(),g("onInit",A.iframe);break;default:n()}var e,t,a,s,c}())):k(_,"Ignored: "+N)}function z(e,n,t){var i=null,o=null;if(f[e]){if("function"!=typeof(i=f[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=i(t)}return o}function R(e){var n=e.id;delete f[n]}function E(e){var n=e.id;if(!1!==z(n,"onClose",n)){v(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){O(e)}z(n,"onClosed",n),v(n,"--"),R(e)}else v(n,"Close iframe cancelled by onClose event")}function I(e){null===u&&v(e,"Get page position: "+(u={x:window.pageXOffset!==n?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==n?window.pageYOffset:document.documentElement.scrollTop}).x+","+u.y)}function F(e){null!==u&&(window.scrollTo(u.x,u.y),v(e,"Set page position: "+u.x+","+u.y),T())}function T(){u=null}function C(e){v(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),I(e.id),W((function(){P(e),H("reset","reset",e.iframe,e.id)}),e,"reset")}function P(e){function n(n){r||"0"!==e[n]||(r=!0,v(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){Object.keys(f).forEach((function(e){!function(e){function n(n){return"0px"===(f[e]&&f[e].iframe.style[n])}f[e]&&null!==f[e].iframe.offsetParent&&(n("height")||n("width"))&&H("Visibility change","resize",f[e].iframe,e)}(e)}))}function n(n){v("window","Mutation observed: "+n[0].target+" "+n[0].type),N(e,16)}var t,i=p();i&&(t=document.querySelector("body"),new i(n).observe(t,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}))}())}function t(t){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",v(e.id,"IFrame ("+i+") "+n+" set to "+e[n]+"px")):v("undefined","messageData id not set")}(t),n(t)}var i=e.iframe.id;f[i]&&(f[i].sizeHeight&&t("height"),f[i].sizeWidth&&t("width"))}function W(e,n,t){t!==n.type&&d&&!window.jasmine?(v(n.id,"Requesting animation frame"),d(e)):e()}function H(e,n,t,i,o){var r,a=!1;i=i||t.id,f[i]&&(t&&"contentWindow"in t&&null!==t.contentWindow?(r=f[i]&&f[i].targetOrigin,v(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(s+n,r)):O(i,"["+e+"] IFrame("+i+") not found"),o&&f[i]&&f[i].warningTimeout&&(f[i].msgTimeout=setTimeout((function(){!f[i]||f[i].loaded||a||(a=!0,O(i,"IFrame has not responded within "+f[i].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),f[i].warningTimeout)))}function S(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod}function j(e,t){function r(e){var n=e.split("Callback");if(2===n.length){var t="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[t]=this[e],delete this[e],O(c,"Deprecated: '"+e+"' has been renamed '"+t+"'. The old method will be removed in the next major version.")}}var a,s,c=function(n){var r;return""===n&&(e.id=(r=t&&t.id||g.id+i++,null!==document.getElementById(r)&&(r+=i++),n=r),o=(t||{}).log,v(n,"Added missing iframe ID: "+n+" ("+e.src+")")),n}(e.id);c in f&&"iFrameResizer"in e?O(c,"Ignored iFrame, already setup."):(function(n){var t;n=n||{},f[c]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(n),Object.keys(n).forEach(r,n),function(e){for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&(f[c][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:g[n])}(n),f[c]&&(f[c].targetOrigin=!0===f[c].checkOrigin?""===(t=f[c].remoteHost)||null!==t.match(/^(about:blank|javascript:|file:\/\/)/)?"*":t:"*")}(t),function(){switch(v(c,"IFrame scrolling "+(f[c]&&f[c].scrolling?"enabled":"disabled")+" for "+c),e.style.overflow=!1===(f[c]&&f[c].scrolling)?"hidden":"auto",f[c]&&f[c].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=f[c]?f[c].scrolling:"no"}}(),function(){function n(n){1/0!==f[c][n]&&0!==f[c][n]&&(e.style[n]=f[c][n]+"px",v(c,"Set "+n+" = "+f[c][n]+"px"))}function t(e){if(f[c]["min"+e]>f[c]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof(f[c]&&f[c].bodyMargin)&&"0"!==(f[c]&&f[c].bodyMargin)||(f[c].bodyMarginV1=f[c].bodyMargin,f[c].bodyMargin=f[c].bodyMargin+"px"),a=S(c),(s=p())&&function(n){e.parentNode&&new n((function(n){n.forEach((function(n){Array.prototype.slice.call(n.removedNodes).forEach((function(n){n===e&&E(e)}))}))})).observe(e.parentNode,{childList:!0})}(s),w(e,"load",(function(){var t,i;H("iFrame.onload",a,e,n,!0),t=f[c]&&f[c].firstRun,i=f[c]&&f[c].heightCalculationMethod in l,!t&&i&&C({iframe:e,height:0,width:0,type:"init"})})),H("init",a,e,n,!0),f[c]&&(f[c].iframe.iFrameResizer={close:E.bind(null,f[c].iframe),removeListeners:R.bind(null,f[c].iframe),resize:H.bind(null,"Window resize","resize",f[c].iframe),moveToAnchor:function(e){H("Move to anchor","moveToAnchor:"+e,f[c].iframe,c)},sendMessage:function(e){H("Send Message","message:"+(e=JSON.stringify(e)),f[c].iframe,c)}}))}function N(e,n){null===m&&(m=setTimeout((function(){m=null,e()}),n))}function A(){"hidden"!==document.visibilityState&&(v("document","Trigger event: Visiblity change"),N((function(){_("Tab Visable","resize")}),16))}function _(e,n){Object.keys(f).forEach((function(t){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(t)&&H(e,n,f[t].iframe,t)}))}function L(){function e(e,n){n&&(function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),j(n,e),t.push(n))}var t;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!d;e+=1)d=window[n[e]+"RequestAnimationFrame"];d?d=d.bind(window):v("setup","RequestAnimationFrame not supported")}(),w(window,"message",x),w(window,"resize",(function(){v("window","Trigger event: resize"),N((function(){_("Window resize","resize")}),16)})),w(document,"visibilitychange",A),w(document,"-webkit-visibilitychange",A),function(i,o){switch(t=[],function(e){e&&e.enablePublicMethods&&O("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(i),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(n,i));break;case"object":e(i,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return t}}}()},h(p={exports:{}}),p.exports),b=function(){},y=function(e){var n=e.title,t=e.forwardRef,i=g(e,["title","forwardRef"]),o=function(e){return e.autoResize,e.bodyBackground,e.bodyMargin,e.bodyPadding,e.checkOrigin,e.inPageLinks,e.heightCalculationMethod,e.interval,e.log,e.maxHeight,e.maxWidth,e.minHeight,e.minWidth,e.resizeFrom,e.scrolling,e.sizeHeight,e.sizeWidth,e.warningTimeout,e.tolerance,e.widthCalculationMethod,e.onClosed,e.onInit,e.onMessage,e.onMouseEnter,e.onMouseLeave,e.onResized,g(e,["autoResize","bodyBackground","bodyMargin","bodyPadding","checkOrigin","inPageLinks","heightCalculationMethod","interval","log","maxHeight","maxWidth","minHeight","minWidth","resizeFrom","scrolling","sizeHeight","sizeWidth","warningTimeout","tolerance","widthCalculationMethod","onClosed","onInit","onMessage","onMouseEnter","onMouseLeave","onResized"])}(i),r=(0,s.useRef)(null),a=function(){return b(!r.current,"[iframeSizerReact]["+(r&&r.current&&r.current.id)+"] Close event ignored, to remove the iframe update your React component"),!r.current};return(0,s.useEffect)((function(){var e=r.current;return w(m({},i,{onClose:a}),e),function(){return e.iFrameResizer&&e.iFrameResizer.removeListeners()}}),[]),(0,s.useImperativeHandle)(t,(function(){return{resize:function(){return r.current.iFrameResizer.resize()},moveToAnchor:function(e){return r.current.iFrameResizer.moveToAnchor(e)},sendMessage:function(e,n){r.current.iFrameResizer.sendMessage(e,n)}}})),c().createElement("iframe",m({title:n},o,{ref:r}))};y.defaultProps={title:"iframe"},y.propTypes={title:f().string};var v=y,k=function(e){var n=e.airfieldhub_key,t=void 0===n?" ":n;return c().createElement("div",{className:"airfieldhub_wrapper"},c().createElement(v,{frameBorder:"0",src:"https://airfieldhub.com/widget.html/arrival/"+t,style:{width:"1px",minWidth:"100%"}}))};(0,i.registerBlockType)("airfieldhub/ppr",{edit:function(){const[e,n]=(0,s.useState)([]);return(0,s.useEffect)((()=>{!async function(){const e=await d()({path:"/airfieldhub/v1/settings"}),t=await e;n(t)}()}),[]),(0,r.createElement)("div",o({className:"afh_edit"},(0,a.useBlockProps)()),""==e.airfieldhub_key&&(0,r.createElement)("div",{className:"overlay"},(0,r.createElement)("p",{className:"bolder"},"Please go to ",(0,r.createElement)("a",{href:"admin.php?page=airfieldhub_settings"},"your settings page"),", and enter your AirfieldHub API key."),(0,r.createElement)("p",null,"Don't have an API key yet? Just go to: ",(0,r.createElement)("a",{href:"https://airfieldhub.com",target:"_blank"},"https://airfieldhub.com")," - signup for a FREE account. Once done, copy and paste your API key from your AirfieldHub dashboard in your ",(0,r.createElement)("a",{href:"admin.php?page=airfieldhub_settings"},"AirfieldHub settings page")," on your wordpress administration homepage (it should be on the left hand side menu) and you'll be ready to accept PPR, BOOKOUTS and payments for landing fees + parking in no time!")),(0,r.createElement)("div",{className:"grab_me"},(0,r.createElement)(k,{airfieldhub_key:e.airfieldhub_key})))},save:function(){return null}})},703:function(e,n,t){"use strict";var i=t(414);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:o};return t.PropTypes=t,t}},697:function(e,n,t){e.exports=t(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=function(n,t,o,r){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],o=e[d][1],r=e[d][2];for(var s=!0,c=0;c<t.length;c++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](t[c])}))?t.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var u=o();void 0!==u&&(n=u)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,o,r]},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,r,a=t[0],s=t[1],c=t[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(c)var d=c(i)}for(n&&n(t);u<a.length;u++)r=a[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(d)},t=self.webpackChunkairfieldhub_ppr=self.webpackChunkairfieldhub_ppr||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=i.O(void 0,[431],(function(){return i(986)}));o=i.O(o)}();