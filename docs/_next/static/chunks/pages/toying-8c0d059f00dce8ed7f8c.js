_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{GTVY:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toying",function(){return o("f2bO")}])},YFqc:function(e,n,o){e.exports=o("cTJO")},cTJO:function(e,n,o){"use strict";var t=o("J4zp"),l=o("284h");n.__esModule=!0,n.default=void 0;var r,a=l(o("q1tI")),i=o("elyg"),s=o("nOHt"),u=new Map,c=window.IntersectionObserver,f={};var p=function(e,n){var o=r||(c?r=new c((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return o?(o.observe(e),u.set(e,n),function(){try{o.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function d(e,n,o,t){(0,i.isLocalURL)(n)&&(e.prefetch(n,o,t).catch((function(e){0})),f[n+"%"+o]=!0)}var g=function(e){var n=!1!==e.prefetch,o=a.default.useState(),l=t(o,2),r=l[0],u=l[1],g=(0,s.useRouter)(),h=g&&g.pathname||"/",v=a.default.useMemo((function(){var n=(0,i.resolveHref)(h,e.href,!0),o=t(n,2),l=o[0],r=o[1];return{href:l,as:e.as?(0,i.resolveHref)(h,e.as):r||l}}),[h,e.href,e.as]),y=v.href,w=v.as;a.default.useEffect((function(){if(n&&c&&r&&r.tagName&&(0,i.isLocalURL)(y)&&!f[y+"%"+w])return p(r,(function(){d(g,y,w)}))}),[n,r,y,w,g]);var m=e.children,b=e.replace,L=e.shallow,E=e.scroll;"string"===typeof m&&(m=a.default.createElement("a",null,m));var _=a.Children.only(m),N={ref:function(e){e&&u(e),_&&"object"===typeof _&&_.ref&&("function"===typeof _.ref?_.ref(e):"object"===typeof _.ref&&(_.ref.current=e))},onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,o,t,l,r,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(o))&&(e.preventDefault(),null==a&&(a=t.indexOf("#")<0),n[l?"replace":"push"](o,t,{shallow:r}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,g,y,w,b,L,E)}};return n&&(N.onMouseEnter=function(e){(0,i.isLocalURL)(y)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),d(g,y,w,{priority:!0}))}),(e.passHref||"a"===_.type&&!("href"in _.props))&&(N.href=(0,i.addBasePath)((0,i.addLocale)(w,g&&g.locale,g&&g.defaultLocale))),a.default.cloneElement(_,N)};n.default=g},f2bO:function(e,n,o){"use strict";o.r(n);var t=o("q1tI"),l=o.n(t),r=o("YFqc"),a=o.n(r),i=o("9ixD"),s=l.a.createElement;n.default=function(){return s("div",{className:"toying-intro"},s(i.b,{title:"#2.0 Logic Puzzles"}),s("h1",{className:"title"},"Section 2: \ud83d\udc50 Toying with Mental Models"),s("ol",{className:"toc pages"},s("h2",null,"Pages"),s("li",null,s(a.a,{href:"/toying#lesson"},s("a",null,"#2.0 Playing around with Logic Puzzles"))),s("li",null,s(a.a,{href:"/toying/level-one"},s("a",null,'#2.1 Level 1: Basic "Or" Boolean Logic'))),s("li",null,s(a.a,{href:"/toying/level-two"},s("a",null,'#2.2 Level 2: "Not" Expressions'))),s("li",null,s(a.a,{href:"/toying/level-three"},s("a",null,"#2.3 Level 3: Boolean Logic & the Coding Mindset")))),s("br",null),s("br",null),s("h2",{id:"lesson"},"#2.0 Playing around with Logic Puzzles"),s("br",null),s("span",{className:"intro-card"},s("img",{src:"/static/images/milleniumPuzzle.webp"}),s("br",null),"*course not guaranteed to unlock the secrets of any card game universe*"),s("br",null),s("br",null),s("p",null,"Now that you've got a grasp on how to visualize your logic model, you will apply those concepts to build your own logic model while playing a puzzle game. This hands-on problem solving lesson will put you in a coding mindset before reading or writing a single line of code."),s(a.a,{href:"/toying/level-one"},s("a",{className:"next"},'Up next: Level 1: Basic "Or" Boolean Logic')))}}},[["GTVY",0,1,2,3]]]);