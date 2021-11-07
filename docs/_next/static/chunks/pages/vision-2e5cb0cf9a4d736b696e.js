_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"7M32":function(e,t,n){"use strict";var r=n("wx14"),o=n("rePB"),a=n("q1tI"),i=n.n(a),c=(n("zJfx"),i.a.createElement);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){if("string"!==typeof e.url)throw new Error("Expected a video url");var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return delete t.url,delete t.children,console.log(e),c("div",Object(r.a)({},t,{className:"youtube-container"+("string"==typeof e.className?" "+e.className:"")}),c("iframe",{src:"https://www.youtube.com/embed/"+e.url,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),l=n("nOHt"),s=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],h=(0,l.useRouter)(),g=h&&h.pathname||"/",y=i.default.useMemo((function(){var t=(0,c.resolveHref)(g,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(g,e.as):a||o}}),[g,e.href,e.as]),m=y.href,b=y.as;i.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,c.isLocalURL)(m)&&!f[m+"%"+b])return p(a,(function(){d(h,m,b)}))}),[t,a,m,b,h]);var v=e.children,w=e.replace,O=e.shallow,E=e.scroll;"string"===typeof v&&(v=i.default.createElement("a",null,v));var P=i.Children.only(v),j={ref:function(e){e&&s(e),P&&"object"===typeof P&&P.ref&&("function"===typeof P.ref?P.ref(e):"object"===typeof P.ref&&(P.ref.current=e))},onClick:function(e){P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,b,w,O,E)}};return t&&(j.onMouseEnter=function(e){(0,c.isLocalURL)(m)&&(P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),d(h,m,b,{priority:!0}))}),(e.passHref||"a"===P.type&&!("href"in P.props))&&(j.href=(0,c.addBasePath)((0,c.addLocale)(b,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(P,j)};t.default=h},cx8c:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=(n("PC/Z"),n("9ixD")),l=n("7M32"),s=o.a.createElement;t.default=function(){return s("div",{className:"vision-intro"},s(c.b,{title:"\ud83d\uddfa\ufe0f Planning it out"}),s("h1",{className:"title"},"Chapter 1"),s("ol",{className:"toc pages"},s("li",null,s(i.a,{href:"/vision#lesson"},s("a",null,"#1.0 \ud83d\uddfa\ufe0f Planning it out"))),s("li",null,s(i.a,{href:"/vision/logic-models-explained"},s("a",null,"#1.1 \ud83e\udde0 Logic Models Explained")))),s("h2",{id:"lesson"},"#1.0 \ud83d\uddfa\ufe0f Planning it out"),s("span",{className:"intro-card"},s(l.a,{url:"wiaamJZ-hHI"}),"Take coding at your own pace and take time for yourself"),s("p",null,'If you believe what you hear on the internet, you might be inclined to believe the modern programmer might be more easily replaced by a gang of monkeys randomly hammering away on type-writers, and sometimes you might be right. Many beginners meet their demise after hearing "just read the docs" (docs is short for documentation), and aren\'t given a proper chance to understand why coders do what they do.',s("br",null),s("br",null),"Documentation sites like"," ",s(i.a,{href:"https://nodejs.org/docs/latest-v15.x/api/"},s("a",null,"this one"))," ","can be a valuable glossary to experienced programmers, but as a learning tool it's the equivalent of throwing a thesaurus at your students' foreheads. This can often leave the reader confused & frustrated, as it fails to explain fundamental programming concepts and why we use them.",s("br",null),s("br",null),"Another barrier to learning is the lack of approachable hands-on work. In this section I will guide you through fundamental coding concepts (like problem solving, logic rules, and working with data)."),s(i.a,{href:"/vision/logic-models-explained"},s("a",{className:"next"},"Next: #1.1 Logic Models Explained")))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},ugP7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vision",function(){return n("cx8c")}])},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zJfx:function(e,t,n){}},[["ugP7",0,1,2,3,4]]]);