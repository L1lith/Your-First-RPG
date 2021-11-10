(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[314],{502:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coding",function(){return r(2044)}])},6322:function(e,t,r){"use strict";var n=r(5893),i=r(6109),o=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(s){i=!0,o=s}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;t.Z=function(e){var t=void 0===e?{url:url}:e,r=t.url,i=t.query,a=void 0===i?{}:i;if(t.hasOwnProperty("query")&&("object"!=typeof a||null===a||Object.keys(a).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof r)return console.warn(new Error("Expected a video url")),null;if(a.hasOwnProperty("autoplay")||(a.autoplay="1"),!c.test(r))throw new Error("This url is invalid");var u="https://www.youtube.com/embed/"+r+"?"+Object.entries(a).map((function(e){var t=s(e,2),r=t[0],n=t[1];return"".concat(r,"=").concat(encodeURIComponent(n))})).join("&"),d=l({},t);return delete d.url,delete d.children,(0,n.jsx)("div",l({},d,{className:o()["youtube-container"],children:(0,n.jsx)("iframe",{src:u,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(u,"><img src=https://img.youtube.com/vi/").concat(r,"/hqdefault.jpg alt='Youtube Video'><span>\u25b6</span></a>")})}))}},2044:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),i=r(1664),o=r(2962),a=r(6322);function l(){return(0,n.jsxs)("div",{className:"coding-intro",children:[(0,n.jsx)("h1",{className:"title",children:"Chapter 3"}),(0,n.jsx)(o.PB,{title:"\ud83d\udee3\ufe0f Stepping into Coding"}),(0,n.jsxs)("ol",{className:"toc pages",children:[(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:"/coding#lesson",children:(0,n.jsx)("a",{children:"#3.0 \ud83d\udee3\ufe0f Stepping into Coding"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:"/coding/primitives",children:(0,n.jsx)("a",{children:"#3.1 \ud83d\udcca Basic Data Types"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:"/coding/essential-tools",children:(0,n.jsx)("a",{children:"#3.2 \ud83d\udd28 Essential Tools"})})})]}),(0,n.jsx)("h2",{id:"lesson",children:"#3.0 \ud83d\udee3\ufe0f Stepping into Coding"}),(0,n.jsx)("br",{}),(0,n.jsxs)("span",{className:"intro-card",children:[(0,n.jsx)(a.Z,{url:"MAlSjtxy5ak"}),"(this video is a joke)"]}),(0,n.jsxs)("p",{children:['How is JS (JavaScript) code written? JavaScript code is just a series of logical expressions (like little logic models) that are evaluated (run by the JavaScript engine software called the "interpreter") in a particular order. Each line is evaluated one at a time from top to bottom. While individual lines are generally read left-to-right The JS interpreter also understands and applies the rules of'," ",(0,n.jsx)("a",{href:"https://www.mathsisfun.com/operation-order-pemdas.html",children:"PEMDAS"}),". Every line of code you write should combine cohesively in order to form a well functioning program.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Coding doesn't have to be frustrating, let's try to have some fun with it. In this section I hope it will become clear how you can take an approached based on logic models to write basic code. I'm going to be providing many examples, and if you get stuck it's okay to continue on and come back later. Try to get a feel for what is going on overall by toying with the code."]}),(0,n.jsx)(i.default,{href:"/coding/primitives",children:(0,n.jsx)("a",{className:"next",children:"Next: #3.1 \ud83d\udcca Basic Data Types"})})]})}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}}},function(e){e.O(0,[774,888,179],(function(){return t=502,e(e.s=t);var t}));var t=e.O();_N_E=t}]);