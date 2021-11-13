(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{7189:function(e,r,t){"use strict";var n=t(54),o=t(5893);r.Z=function(){return(0,o.jsx)(n.Z,{title:"Level 1",size:3,rulesOptions:{allowNots:!1,minColors:2,minShapes:2}})}},9734:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(4942);var o=t(181);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(u){s=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}}(e,r)||(0,o.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=t(6109),s=t.n(a),u=t(5893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var r=e.url,t=e.query,n=void 0===t?{}:t;if(e.hasOwnProperty("query")&&("object"!=typeof n||null===n||Object.keys(n).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof r)return console.warn(new Error("Expected a video url")),null;if(n.autoplay=1,!h.test(r))throw new Error("This url is invalid");var o="https://www.youtube.com/embed/"+r+"?"+Object.entries(n).map((function(e){var r=i(e,2),t=r[0],n=r[1];return"".concat(t,"=").concat(encodeURIComponent(n))})).join("&"),a=l({},e);return delete a.url,delete a.children,(0,u.jsx)("div",l(l({},a),{},{className:s()["youtube-container"],children:(0,u.jsx)("iframe",{src:o,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(o,"><img src=").concat(e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(r,"/hqdefault.jpg")," alt='Youtube Video'><span>\u25b6</span></a>")})}))}()}},1773:function(e,r,t){"use strict";t.r(r);t(7189);var n=t(1664),o=t(2962),i=t(9734),a=t(2428),s=t.n(a),u=t(5893);r.default=function(){return(0,u.jsxs)("div",{className:"summary",children:[(0,u.jsx)(o.PB,{title:"\ud83d\udd2d Further Reading"}),(0,u.jsx)("h2",{children:"#4.4 \ud83d\udd2d Summary & Further Reading"}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"intro-card",children:[(0,u.jsx)(i.Z,{url:"videoseries",query:{list:"PLRqwX-V7Uu6ZYJC7L-r6rX6utt6wwJCyi"},thumbnail:"/images/dan-schiff.jpg"}),"Daniel Shiffman has so many good videos"]}),(0,u.jsxs)("p",{className:s().congratulations,children:["\ud83c\udf82 \ud83c\udf70 \ud83e\udd67",(0,u.jsx)("br",{})," Congratulations on finishing the course!!"," "]}),(0,u.jsxs)("div",{className:"stuck",children:[(0,u.jsx)("h2",{children:"Feeling Stuck?"}),"Check out the"," ",(0,u.jsx)(n.default,{href:"/resources",children:(0,u.jsx)("a",{children:"resources page here"})})," ","to find some help"]}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"further-reading",children:[(0,u.jsx)("h2",{children:"Further Reading"}),"Thank you so much for taking my course, I hope you learned something. If you'd like me to make more courses (like going into more advanced JavaScript areas like interactive websites and scripting) consider supporting me below for free :)",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"So where do I go from here? If you'd like to code websites you can read more about that"," ",(0,u.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Learn",children:"here"}),". JavaScript is a great entry point to a lot of different areas, like"," ",(0,u.jsx)("a",{href:"https://www.youtube.com/watch?v=7A-bnPlxj4k&list=PLRqwX-V7Uu6avBYxeBSwF48YhAnSn_sA4",children:"discord bots"}),", ",(0,u.jsx)("a",{href:"https://medium.com/edureka/learn-node-js-b3a9c6fb632c",children:"Node.js"})," scripts (Node.js is how you run JavaScript without a browser, kind of like python, and it has a lot of cool functionality), and more. I've also included a list of resources on the"," ",(0,u.jsx)(n.default,{href:"/#resources",children:"home page"}),".",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"If you'd like to suggest an improvement you can open a ticket"," ",(0,u.jsx)("a",{href:"https://github.com/L1lith/Your-First-RPG/issues/new?assignees=&labels=enhancement&template=improvement-idea.md",children:"here"}),", or you can submit a pull request"," ",(0,u.jsx)("a",{href:"https://github.com/L1lith/Your-First-RPG/pulls",children:"here"}),"."]}),(0,u.jsx)(n.default,{href:"/support",children:(0,u.jsx)("a",{className:"next",children:"Consider supporting me \ud83d\udc9c"})})]})}},1143:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rpg/summary",function(){return t(1773)}])},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},2428:function(e){e.exports={congratulations:"summary_congratulations__3dPo5"}}},function(e){e.O(0,[281,970,504,367,54,774,888,179],(function(){return r=1143,e(e.s=r);var r}));var r=e.O();_N_E=r}]);