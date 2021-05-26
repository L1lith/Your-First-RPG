_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{RNiq:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),r=t("YFqc"),l=t.n(r),i=(t("kxKB"),t("9ixD")),s=a.a.createElement;n.default=function(){return s("div",{className:"home"},s(i.b,{title:"Home"}),s("h1",{className:"title"},s("span",{className:"smaller-text"},"Coding Intro:"),s("br",null),"\ud83e\udde0 Mental Modeling for Beginners"),s("p",null,"In this course I will describe mental models to show how & why we apply them to coding and other tasks."),s("ol",{className:"toc sections"},s("h2",null,"Sections"),s("li",null,s(l.a,{href:"/vision"},s("a",null,"\ud83d\udc40 Visioning Mental Models"))),s("li",null,s(l.a,{href:"/toying"},s("a",null,"\ud83d\udc50 Toying with Mental Models"))),s("li",null,s(l.a,{href:"/coding"},s("a",null,"\ud83c\udfc6 Coding with Mental Models")))),s("div",{className:"resources"},s("h2",null,"Resources"),"This course focuses on being palatable for beginners, so if you'd like to learn about a coding and JavaScript I'd recommend the following resources:",s("ul",{className:"resource-list"},s("li",null,"Daniel Shiffman makes hilarious & creative YouTube videos on his channel"," ",s("a",{className:"bold",href:"https://www.youtube.com/c/TheCodingTrain/featured"},"The Coding Train"),". He teaches all kinds of things including web development, 2D game development, and more. I'd highly recommend him if you're looking for an engaging way to learn more about coding."),s("li",null,s("a",{href:" https://stackoverflow.com/"},"StackOverflow")," ","is a little like the yahoo answers of the programming world (but please don't spam silly questions). If you have an issue chances are someones had the exact same one before. If you're stuck and can't figure something out search on there, google it, and if you still can't find the answer feel free to open a new question."),s("li",null,s("a",{href:"https://javascript.info"},"JavaScript.info")," is a great resource JS concepts in greater detail."),s("li",null,s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"MDN")," is the most extensive site for learning about web technologies. It is maintained by the Mozilla foundation, but it can be overly technical or lacking information in certain areas."))),s("div",{className:"extras"},null,s(l.a,{href:"/support"},s("a",null,"Support Me"))))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var o=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var r=a(t("q1tI")),l=t("elyg"),i=t("nOHt"),s=t("vNVm"),c={};function u(e,n,t,o){if(e&&(0,l.isLocalURL)(n)){e.prefetch(n,t,o).catch((function(e){0}));var a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;c[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),a=t&&t.asPath||"/",f=r.default.useMemo((function(){var n=(0,l.resolveHref)(a,e.href,!0),t=o(n,2),r=t[0],i=t[1];return{href:r,as:e.as?(0,l.resolveHref)(a,e.as):i||r}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,g=e.shallow,m=e.scroll,w=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var b=r.Children.only(p),y=b&&"object"===typeof b&&b.ref,M=(0,s.useIntersection)({rootMargin:"200px"}),k=o(M,2),N=k[0],I=k[1],_=r.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);(0,r.useEffect)((function(){var e=I&&n&&(0,l.isLocalURL)(d),o="undefined"!==typeof w?w:t&&t.locale,a=c[d+"%"+h+(o?"%"+o:"")];e&&!a&&u(t,d,h,{locale:o})}),[h,d,I,w,n,t]);var E={ref:_,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,o,a,r,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),n[a?"replace":"push"](t,o,{shallow:r,locale:s,scroll:i}))}(e,t,d,h,v,g,m,w)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(t,d,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var L="undefined"!==typeof w?w:t&&t.locale,T=t&&t.isLocaleDomain&&(0,l.getDomainLocale)(h,L,t&&t.locales,t&&t.domainLocales);E.href=T||(0,l.addBasePath)((0,l.addLocale)(h,L,t&&t.defaultLocale))}return r.default.cloneElement(b,E)};n.default=f},vNVm:function(e,n,t){"use strict";var o=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,s=(0,a.useRef)(),c=(0,a.useState)(!1),u=o(c,2),f=u[0],d=u[1],h=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var o=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:o}),t}(t),a=o.id,r=o.observer,l=o.elements;return l.set(e,n),r.observe(e),function(){l.delete(e),r.unobserve(e),0===l.size&&(r.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!l&&!f){var e=(0,r.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[f]),[h,f]};var a=t("q1tI"),r=t("0G5g"),l="undefined"!==typeof IntersectionObserver;var i=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,2,3,5]]]);