(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},2962:function(e,t,r){"use strict";r.d(t,{lX:function(){return c},PB:function(){return u}});var n=r(9008),o=r(7294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},p=function(e,t,r){void 0===t&&(t=[]);var n=void 0===r?{}:r,a=n.defaultWidth,i=n.defaultHeight;return t.reduce((function(t,r,n){return t.push(o.createElement("meta",{key:"og:"+e+":0"+n,property:"og:"+e,content:r.url})),r.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+n,property:"og:"+e+":alt",content:r.alt})),r.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+n,property:"og:"+e+":secure_url",content:r.secureUrl.toString()})),r.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+n,property:"og:"+e+":type",content:r.type.toString()})),r.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:r.width.toString()})):a&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+n,property:"og:"+e+":width",content:a.toString()})),r.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:r.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+n,property:"og:"+e+":height",content:i.toString()})),t}),[])},s=function(e){var t,r,n,i=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var s="";e.title?(s=e.title,l.templateTitle&&(s=l.templateTitle.replace(/%s/g,(function(){return s})))):e.defaultTitle&&(s=e.defaultTitle),s&&i.push(o.createElement("title",{key:"title"},s));var c,u,d=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,f=e.disableGooglebot||l.disableGooglebot||e.dangerouslyDisableGooglebot,m="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,v=g.maxSnippet,b=g.maxImagePreview,k=g.maxVideoPreview,G=g.noarchive,_=g.noimageindex,O=g.notranslate,w=g.unavailableAfter;m=(y?",nosnippet":"")+(v?",max-snippet:"+v:"")+(b?",max-image-preview:"+b:"")+(G?",noarchive":"")+(w?",unavailable_after:"+w:"")+(_?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(O?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(l.disableGooglebot=!0),d||h?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),i.push(o.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(h?"nofollow":"follow")+m})),f||i.push(o.createElement("meta",{key:"googlebot",name:"googlebot",content:(d?"noindex":"index")+","+(h?"nofollow":"follow")+m}))):(i.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),f||i.push(o.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+m}))),e.description&&i.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&i.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){i.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&i.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&i.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&i.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&i.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&i.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(c=e.openGraph)?void 0:c.title)||s}));(null!=(r=e.openGraph)&&r.description||e.description)&&i.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&i.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var E=e.openGraph.type.toLowerCase();i.push(o.createElement("meta",{key:"og:type",property:"og:type",content:E})),"profile"===E&&e.openGraph.profile?(e.openGraph.profile.firstName&&i.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&i.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&i.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&i.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===E&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){i.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&i.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&i.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){i.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===E&&e.openGraph.article?(e.openGraph.article.publishedTime&&i.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&i.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&i.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){i.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&i.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){i.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==E&&"video.episode"!==E&&"video.tv_show"!==E&&"video.other"!==E||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&i.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&i.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){i.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){i.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&i.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&i.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){i.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&i.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&i.push.apply(i,p("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&i.push.apply(i,p("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.locale&&i.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&i.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&i.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,r,n;i.push(o.createElement("meta",a({key:"meta:"+(null!=(t=null!=(r=null!=(n=e.keyOverride)?n:e.name)?r:e.property)?t:e.httpEquiv)},e)))})),null!=(n=e.additionalLinkTags)&&n.length&&e.additionalLinkTags.forEach((function(e){var t;i.push(o.createElement("link",a({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),i},c=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.titleTemplate,a=e.defaultTitle,i=e.dangerouslyDisableGooglebot,l=void 0!==i&&i,p=e.dangerouslySetAllPagesToNoIndex,c=void 0!==p&&p,u=e.dangerouslySetAllPagesToNoFollow,d=void 0!==u&&u,h=e.description,f=e.canonical,m=e.facebook,g=e.openGraph,y=e.additionalMetaTags,v=e.twitter,b=e.defaultOpenGraphImageWidth,k=e.defaultOpenGraphImageHeight,G=e.defaultOpenGraphVideoWidth,_=e.defaultOpenGraphVideoHeight,O=e.mobileAlternate,w=e.languageAlternates,E=e.additionalLinkTags;return o.createElement(n.default,null,s({title:t,titleTemplate:r,defaultTitle:a,dangerouslySetAllPagesToNoIndex:c,dangerouslySetAllPagesToNoFollow:d,description:h,canonical:f,facebook:m,openGraph:g,additionalMetaTags:y,twitter:v,defaultOpenGraphImageWidth:b,defaultOpenGraphImageHeight:k,defaultOpenGraphVideoWidth:G,defaultOpenGraphVideoHeight:_,mobileAlternate:O,languageAlternates:w,additionalLinkTags:E,dangerouslyDisableGooglebot:l}))},t}(o.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.noindex,a=void 0!==r&&r,i=e.nofollow,l=e.robotsProps,p=e.description,c=e.canonical,u=e.openGraph,d=e.facebook,h=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags,b=e.disableGooglebot;return o.createElement(n.default,null,s({title:t,noindex:a,nofollow:i,robotsProps:l,description:p,canonical:c,facebook:d,openGraph:u,additionalMetaTags:f,twitter:h,titleTemplate:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v,disableGooglebot:b}))},t}(o.Component)},7942:function(e,t,r){"use strict";var n=r(3038);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(4957),l=r(9898),p=r(639);var s={};function c(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,o=l.useRouter(),u=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],l=r[1];return{href:a,as:e.as?i.resolveHref(o,e.as):l||a}}),[o,e.href,e.as]),d=u.href,h=u.as,f=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=a.default.createElement("a",null,f));var b=(t=a.default.Children.only(f))&&"object"===typeof t&&t.ref,k=p.useIntersection({rootMargin:"200px"}),G=n(k,2),_=G[0],O=G[1],w=a.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);a.default.useEffect((function(){var e=O&&r&&i.isLocalURL(d),t="undefined"!==typeof v?v:o&&o.locale,n=s[d+"%"+h+(t?"%"+t:"")];e&&!n&&c(o,d,h,{locale:t})}),[h,d,O,v,r,o]);var E={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,p){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:p,scroll:l}))}(e,o,d,h,m,g,y,v)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof v?v:o&&o.locale,j=o&&o.isLocaleDomain&&i.getDomainLocale(h,x,o&&o.locales,o&&o.domainLocales);E.href=j||i.addBasePath(i.addLocale(h,x,o&&o.defaultLocale))}return a.default.cloneElement(t,E)};t.default=u},639:function(e,t,r){"use strict";var n=r(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,p=o.useRef(),s=o.useState(!1),c=n(s,2),u=c[0],d=c[1],h=o.useCallback((function(e){p.current&&(p.current(),p.current=void 0),r||u||e&&e.tagName&&(p.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[h,u]};var o=r(7294),a=r(6286),i="undefined"!==typeof IntersectionObserver;var l=new Map},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},2717:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),l=(a=r(1585))&&a.__esModule?a:{default:a},p=r(8e3),s=r(5850),c=r(5646);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var l=o.key.slice(o.key.indexOf("$")+1);e.has(l)?a=!1:e.add(l)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var p=0,s=h.length;p<s;p++){var c=h[p];if(o.props.hasOwnProperty(c))if("charSet"===c)r.has(c)?a=!1:r.add(c);else{var u=o.props[c],d=n[c]||new Set;"name"===c&&i||!d.has(u)?(d.add(u),n[c]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,i.default.cloneElement(e,l)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,r=i.useContext(p.AmpStateContext),n=i.useContext(s.HeadManagerContext);return i.default.createElement(l.default,{reduceComponentsToState:f,headManager:n,inAmpMode:c.isInAmpMode(r)},t)};t.default=m},1585:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),i=(r(1506),r(2205)),l=r(8585),p=r(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var o=p(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var u=function(e){i(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(c.Component);t.default=u},4010:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(4942),o=r(7294),a=r(8857),i=r.n(a),l=r(1664),p=r(2914),s=r.n(p),c=r(5893),u=function(e){var t=(0,o.useState)(!1),r=t[0],n=t[1],a=("string"==typeof e.className?e.className+" ":"")+" emoji-button "+s()["settings-button"],i=null;return r&&(i=(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)("span",{className:s()["dom-blocker"]}),(0,c.jsxs)("div",{className:s()["settings-menu"],children:[(0,c.jsx)("button",{onClick:function(){n(!1),document.body.classList.remove("disabled")},className:s().close+" emoji-button grayscale",children:"\u274c"}),(0,c.jsx)("button",{children:"Download the App!"})]})]})),(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)("button",{onClick:function(){n(!0),document.body.classList.add("disabled")},className:a,children:"\u2699\ufe0f"}),i]})},d=function(){return(0,c.jsxs)("header",{className:i()["main-header"],children:[(0,c.jsx)(l.default,{href:"/resources",children:(0,c.jsx)("a",{className:i().resources,children:"Stuck?"})}),(0,c.jsx)("h1",{className:"site-title",children:(0,c.jsx)(l.default,{href:"/",children:(0,c.jsx)("a",{className:i()["home-link"],children:"Your First RPG"})})}),(0,c.jsx)("img",{alt:"site logo",type:"image/svg",className:i()["site-icon"],src:"/images/site-icon.svg"}),null,(0,c.jsx)(u,{className:i().settings})]})},h=r(6481),f=r.n(h),m=(r(3972),r(5673),r(2962));function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.Component,r=e.pageProps;return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(m.lX,{titleTemplate:"%s - YFRPG",defaultTitle:"Your First RPG"}),(0,c.jsx)(m.lX,{description:"Learn to make games in JavaScript for beginners"}),(0,c.jsx)(d,{}),(0,c.jsx)("main",{className:"page "+f().page,children:(0,c.jsx)(t,y({},r))})]})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4010)}])},5673:function(){},3972:function(){},2914:function(e){e.exports={"settings-button":"Settings_settings-button__1wgGV","settings-menu":"Settings_settings-menu__3WJK9",close:"Settings_close__1xgc-","dom-blocker":"Settings_dom-blocker__3qWTy"}},6481:function(e){e.exports={page:"_app_page__1Uxjk",title:"_app_title__1mAPh"}},8857:function(e){e.exports={"main-header":"header_main-header__3uhea",resources:"header_resources__3CG5j",settings:"header_settings__KLajV","home-link":"header_home-link__22wiF","site-icon":"header_site-icon__3Xsih"}},9008:function(e,t,r){e.exports=r(2717)},1664:function(e,t,r){e.exports=r(7942)},4942:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(9898)}));var r=e.O();_N_E=r}]);