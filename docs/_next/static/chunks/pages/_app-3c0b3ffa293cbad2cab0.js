_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"1TCz":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r);function u(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(f){return void n(f)}a.done?e(i):Promise.resolve(i).then(r,o)}var c=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),f=n("md7G"),s=n("foSv"),l=n("q1tI"),p=n.n(l),v=n("8Bbg"),d=n.n(v),y=p.a.createElement;function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var b=function(t){Object(i.a)(n,t);var e=h(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return y("header",{id:"main-header"})}}]),n}(l.Component),m=(n("gWIg"),n("YFqc")),g=n.n(m),O=(n("bwZo"),p.a.createElement),w=function(){return O(g.a,{href:"/"},O("a",{className:"home-link"},"\ud83c\udfe0"))},_=(n("g4pe"),n("20a2")),P=n("9ixD"),R=p.a.createElement;function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var I=function(t){Object(i.a)(n,t);var e=j(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r="/"===t.router.route;return R(v.Container,null,R(P.a,{titleTemplate:"%s - Coding Intro",defaultTitle:"Coding Intro"}),R(b,null),R("main",{id:"page"},r?null:R(w,null),R(e,n)))}}],[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark((function t(e){var n,r,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,u={},!n.getInitialProps){t.next=6;break}return t.next=5,n.getInitialProps(r);case 5:u=t.sent;case 6:return t.abrupt("return",{pageProps:u});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){u(c,r,o,a,i,"next",t)}function i(t){u(c,r,o,a,i,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}()}]),n}(d.a);e.default=Object(_.withRouter)(I)},"20a2":function(t,e,n){t.exports=n("nOHt")},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),u=n("W8MJ"),c=n("7W2i"),a=n("a1gu"),i=n("Nsbk"),f=n("yXPU");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=b,e.default=void 0;var p=l(n("q1tI")),v=n("g/15");function d(t){return y.apply(this,arguments)}function y(){return(y=f(r.mark((function t(e){var n,o,u;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,v.loadGetInitialProps)(n,o);case 3:return u=t.sent,t.abrupt("return",{pageProps:u});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=v.AppInitialProps,e.NextWebVitalsMetric=v.NextWebVitalsMetric;var h=function(t){c(n,t);var e=s(n);function n(){return o(this,n),e.apply(this,arguments)}return u(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,u=t.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||u?{}:{url:b(e)}))}}]),n}(p.default.Component);function b(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=h,h.origGetInitialProps=d,h.getInitialProps=d},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("J4zp"),o=n("284h");e.__esModule=!0,e.default=void 0;var u=o(n("q1tI")),c=n("elyg"),a=n("nOHt"),i=n("vNVm"),f={};function s(t,e,n,r){if(t&&(0,c.isLocalURL)(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;f[e+"%"+n+(o?"%"+o:"")]=!0}}var l=function(t){var e=!1!==t.prefetch,n=(0,a.useRouter)(),o=n&&n.asPath||"/",l=u.default.useMemo((function(){var e=(0,c.resolveHref)(o,t.href,!0),n=r(e,2),u=n[0],a=n[1];return{href:u,as:t.as?(0,c.resolveHref)(o,t.as):a||u}}),[o,t.href,t.as]),p=l.href,v=l.as,d=t.children,y=t.replace,h=t.shallow,b=t.scroll,m=t.locale;"string"===typeof d&&(d=u.default.createElement("a",null,d));var g=u.Children.only(d),O=g&&"object"===typeof g&&g.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),_=r(w,2),P=_[0],R=_[1],j=u.default.useCallback((function(t){P(t),O&&("function"===typeof O?O(t):"object"===typeof O&&(O.current=t))}),[O,P]);(0,u.useEffect)((function(){var t=R&&e&&(0,c.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=f[p+"%"+v+(r?"%"+r:"")];t&&!o&&s(n,p,v,{locale:r})}),[v,p,R,m,e,n]);var I={ref:j,onClick:function(t){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,u,a,i){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,c.isLocalURL)(n))&&(t.preventDefault(),null==a&&(a=r.indexOf("#")<0),e[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:a}))}(t,n,p,v,y,h,b,m)},onMouseEnter:function(t){(0,c.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(t),s(n,p,v,{priority:!0}))}};if(t.passHref||"a"===g.type&&!("href"in g.props)){var x="undefined"!==typeof m?m:n&&n.locale,E=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(v,x,n&&n.locales,n&&n.domainLocales);I.href=E||(0,c.addBasePath)((0,c.addLocale)(v,x,n&&n.defaultLocale))}return u.default.cloneElement(g,I)};e.default=l},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return u}));var o=n("JX7q");function u(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?Object(o.a)(t):e}},vNVm:function(t,e,n){"use strict";var r=n("J4zp");e.__esModule=!0,e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!c,i=(0,o.useRef)(),f=(0,o.useState)(!1),s=r(f,2),l=s[0],p=s[1],v=(0,o.useCallback)((function(t){i.current&&(i.current(),i.current=void 0),n||l||t&&t.tagName&&(i.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=a.get(e);if(n)return n;var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return a.set(e,n={id:e,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,c=r.elements;return c.set(t,e),u.observe(t),function(){c.delete(t),u.unobserve(t),0===c.size&&(u.disconnect(),a.delete(o))}}(t,(function(t){return t&&p(t)}),{rootMargin:e}))}),[n,e,l]);return(0,o.useEffect)((function(){if(!c&&!l){var t=(0,u.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,u.cancelIdleCallback)(t)}}}),[l]),[v,l]};var o=n("q1tI"),u=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var a=new Map},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[[0,0,1,2,3,5]]]);