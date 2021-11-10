(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},6322:function(e,t,n){"use strict";var r=n(5893),i=n(6109),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;t.Z=function(e){var t=void 0===e?{url:url}:e,n=t.url,i=t.query,a=void 0===i?{}:i;if(t.hasOwnProperty("query")&&("object"!=typeof a||null===a||Object.keys(a).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof n)return console.warn(new Error("Expected a video url")),null;if(a.hasOwnProperty("autoplay")||(a.autoplay="1"),!c.test(n))throw new Error("This url is invalid");var u="https://www.youtube.com/embed/"+n+"?"+Object.entries(a).map((function(e){var t=l(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),h=s({},t);return delete h.url,delete h.children,(0,r.jsx)("div",s({},h,{className:o()["youtube-container"],children:(0,r.jsx)("iframe",{src:u,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(u,"><img src=").concat(t.hasOwnProperty("thumbnail")?t.thumbnail:"https://img.youtube.com/vi/".concat(n,"/hqdefault.jpg")," alt='Youtube Video'><span>\u25b6</span></a>")})}))}},3678:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),i=n(1664),o=n(6322),a=n(1312),s=n.n(a),l=n(2962);function c(){return(0,r.jsxs)("div",{className:s().home,children:[(0,r.jsx)(l.PB,{description:"Learn to make games in JavaScript for beginners"}),(0,r.jsxs)("h1",{className:"title",children:[(0,r.jsx)("span",{className:"smaller-text",children:"Coding Intro:"}),(0,r.jsx)("br",{}),"Making a Game"]}),(0,r.jsxs)("span",{className:"intro-card",children:[(0,r.jsx)(o.Z,{url:"-jRREn6ifEQ",thumbnail:"/images/poetry-of-programming.jpg"}),"Coding is a lot like human language, and they both need diversity"]}),(0,r.jsx)("p",{children:"In this course I will explain how to visualize coding & how we can use it to make awesome things. I will teach you the basics of the JavaScript language, and show you how to make your own text based game and share it with your friends :)"}),(0,r.jsx)("h2",{children:"Sections"}),(0,r.jsxs)("ol",{className:"toc sections",children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/vision",children:(0,r.jsx)("a",{children:"\ud83d\udc40 Visualizing Logic Models"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/toying",children:(0,r.jsx)("a",{children:"\ud83d\udc50 Toying with Logic Models"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/coding",children:(0,r.jsx)("a",{children:"\ud83d\udcbb Learning to Code"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:"/rpg",children:(0,r.jsx)("a",{children:"\ud83c\udfae Building an RPG"})})})]}),(0,r.jsxs)("div",{className:"extras",children:[null,(0,r.jsx)(i.default,{href:"/resources",children:(0,r.jsx)("a",{children:"Remember to check out the resource section if you get stuck"})})]})]})}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},1312:function(e){e.exports={home:"styles_home__UFMHZ",extras:"styles_extras__3uRai"}}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);