_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"7M32":function(e,t,n){"use strict";var r=n("wx14"),o=n("rePB"),a=n("q1tI"),i=n.n(a),c=(n("zJfx"),i.a.createElement);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){if("string"!==typeof e.url)throw new Error("Expected a video url");var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return delete t.url,delete t.children,console.log(e),c("div",Object(r.a)({},t,{className:"youtube-container"+("string"==typeof e.className?" "+e.className:"")}),c("iframe",{src:"https://www.youtube.com/embed/"+e.url,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}},"A/jV":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),c=n("9ixD"),l=n("7M32"),s=o.a.createElement;t.default=function(){return s("div",{className:"coding-intro"},s("h1",{className:"title"},"Chapter 3"),s(c.b,{title:"\ud83d\udee3\ufe0f Stepping into Coding"}),s("ol",{className:"toc pages"},s("li",null,s(i.a,{href:"/coding#lesson"},s("a",null,"#3.0 \ud83d\udee3\ufe0f Stepping into Coding"))),s("li",null,s(i.a,{href:"/coding/primitives"},s("a",null,"#3.1 \ud83d\udcca Basic Data Types"))),s("li",null,s(i.a,{href:"/coding/essential-tools"},s("a",null,"#3.2 \ud83d\udd28 Essential Tools")))),s("h2",{id:"lesson"},"#3.0 \ud83d\udee3\ufe0f Stepping into Coding"),s("br",null),s("span",{className:"intro-card"},s(l.a,{url:"MAlSjtxy5ak"}),"(this video is a joke)"),s("p",null,'How is JS (JavaScript) code written? JavaScript code is just a series of logical expressions (like little logic models) that are evaluated (run by the JavaScript engine software called the "interpreter") in a particular order. Each line is evaluated one at a time from top to bottom. While individual lines are generally read left-to-right The JS interpreter also understands and applies the rules of'," ",s("a",{href:"https://www.mathsisfun.com/operation-order-pemdas.html"},"PEMDAS"),". Every line of code you write should combine cohesively in order to form a well functioning program.",s("br",null),s("br",null),"Coding doesn't have to be frustrating, let's try to have some fun with it. In this section I hope it will become clear how you can take an approached based on logic models to write basic code. I'm going to be providing many examples, and if you get stuck it's okay to continue on and come back later. Try to get a feel for what is going on overall by toying with the code."),s(i.a,{href:"/coding/primitives"},s("a",{className:"next"},"Next: #3.1 \ud83d\udcca Basic Data Types")))}},A9VQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coding",function(){return n("A/jV")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),c=n("elyg"),l=n("nOHt"),s=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],h=(0,l.useRouter)(),g=h&&h.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(g,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(g,e.as):a||o}}),[g,e.href,e.as]),y=v.href,w=v.as;i.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,c.isLocalURL)(y)&&!f[y+"%"+w])return p(a,(function(){d(h,y,w)}))}),[t,a,y,w,h]);var b=e.children,m=e.replace,O=e.shallow,E=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var j=i.Children.only(b),P={ref:function(e){e&&s(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,w,m,O,E)}};return t&&(P.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(h,y,w,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(P.href=(0,c.addBasePath)((0,c.addLocale)(w,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(j,P)};t.default=h},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zJfx:function(e,t,n){}},[["A9VQ",0,1,2,3,4]]]);