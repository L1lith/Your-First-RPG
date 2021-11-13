(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{9734:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4942);var o=r(181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=r(6109),c=r.n(a),l=r(5893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=e.url,r=e.query,n=void 0===r?{}:r;if(e.hasOwnProperty("query")&&("object"!=typeof n||null===n||Object.keys(n).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof t)return console.warn(new Error("Expected a video url")),null;if(n.autoplay=1,!h.test(t))throw new Error("This url is invalid");var o="https://www.youtube.com/embed/"+t+"?"+Object.entries(n).map((function(e){var t=i(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(encodeURIComponent(n))})).join("&"),a=s({},e);return delete a.url,delete a.children,(0,l.jsx)("div",s(s({},a),{},{className:c()["youtube-container"],children:(0,l.jsx)("iframe",{src:o,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(o,"><img src=").concat(e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")," alt='Youtube Video'><span>\u25b6</span></a>")})}))}()}},4972:function(e,t,r){"use strict";r.r(t);var n=r(1664),o=r(2962),i=r(9734),a=r(5893);t.default=function(){return(0,a.jsxs)("div",{className:"coding-intro",children:[(0,a.jsx)("h1",{className:"title",children:"Chapter 4"}),(0,a.jsx)(o.PB,{title:"\ud83c\udfae Let's make a Game!"}),(0,a.jsxs)("ol",{className:"toc pages",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"#lesson",children:(0,a.jsx)("a",{children:"#4.0 \ud83c\udfae Let's make a Game!"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/rpg/communication",children:(0,a.jsx)("a",{children:"#4.1 \ud83d\udde3\ufe0f Communicating with the Player"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/rpg/publishing",children:(0,a.jsx)("a",{children:"#4.2 \ud83c\udfc6 Sharing your RPG"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/rpg/editor",children:(0,a.jsx)("a",{children:"#4.3 \ud83d\udee0\ufe0f The Game Editor"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/rpg/summary",children:(0,a.jsx)("a",{children:"#4.4 \ud83d\udd2d Summary & Further Reading"})})})]}),(0,a.jsx)("h2",{id:"lesson",children:"#4.0 Let's make a Game! \ud83c\udfae"}),(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"intro-card",children:[(0,a.jsx)(i.Z,{url:"eMR6c8xbgpc",thumbnail:"/images/heart-of-the-forest.jpg"}),"Have fun with it!"]}),(0,a.jsx)("p",{children:"In this section I'll go over how to create your own text RPG game. I've been teaching you a lot about how to code, and now I'd like you to take the reigns and be creative \ud83d\ude0a You can create anything you can think of!"}),(0,a.jsx)(n.default,{href:"/rpg/communication",children:(0,a.jsx)("a",{className:"next",children:"Next: #4.1 \ud83d\udde3\ufe0f Talking to the Player"})})]})}},2617:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rpg",function(){return r(4972)}])},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},907:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},181:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(907);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=2617,e(e.s=t);var t}));var t=e.O();_N_E=t}]);