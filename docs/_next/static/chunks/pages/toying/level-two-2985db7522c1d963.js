(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946],{9734:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(4942);var o=r(181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=r(6109),l=r.n(a),s=r(5893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=e.url,r=e.query,n=void 0===r?{}:r;if(e.hasOwnProperty("query")&&("object"!=typeof n||null===n||Object.keys(n).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof t)return console.warn(new Error("Expected a video url")),null;if(n.autoplay=1,!h.test(t))throw new Error("This url is invalid");var o="https://www.youtube.com/embed/"+t+"?"+Object.entries(n).map((function(e){var t=i(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(encodeURIComponent(n))})).join("&"),a=c({},e);return delete a.url,delete a.children,(0,s.jsx)("div",c(c({},a),{},{className:l()["youtube-container"],children:(0,s.jsx)("iframe",{src:o,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(o,"><img src=").concat(e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")," alt='Youtube Video'><span>\u25b6</span></a>")})}))}()}},6979:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(54),o=r(5893),i=function(){var e=Math.random()>.5,t=!e;return(0,o.jsx)(n.Z,{title:"Level 2",size:3,rulesOptions:{allowNots:!0,notColors:e,notShapes:t}})},a=r(1664),l=r(2962),s=r(9734),u=function(){return(0,o.jsxs)("div",{className:"level-2",children:[(0,o.jsx)(l.PB,{title:'\ud83d\udeab Whats "Not" Allowed'}),(0,o.jsx)("h2",{children:'#2.2 \ud83d\udeab Whats "Not" Allowed'}),(0,o.jsx)("br",{}),(0,o.jsx)(s.Z,{url:"fhIdbRp6xeg",thumbnail:"/images/borat-not-joke.jpg"}),(0,o.jsx)("br",{}),(0,o.jsx)("h2",{children:'The "Not" Operator'}),(0,o.jsx)("p",{children:"Now that we've learned the most basic expression OR, it's time to move onto NOT. The NOT operator outputs false when it's input is true, and true when it's input is false. You can think of this like an inversion, returning what was NOT specified."}),(0,o.jsx)("p",{children:'When playing the second level, make sure NOT to select any colors or shapes that are prefixed with "not".'}),(0,o.jsx)(i,{}),(0,o.jsx)(a.default,{href:"/toying/level-three",children:(0,o.jsx)("a",{className:"next",children:"Next: #2.3 \ud83d\udcbb Booleans for coding Apps"})})]})}},275:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/toying/level-two",function(){return r(6979)}])},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}}},function(e){e.O(0,[281,970,504,367,54,774,888,179],(function(){return t=275,e(e.s=t);var t}));var t=e.O();_N_E=t}]);