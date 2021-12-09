(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{9734:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(4942);var i=n(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||(0,i.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n(6109),s=n.n(a),l=n(7294),c=n(5893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=(0,l.useState)(!1),n=t[0],r=t[1],i=e.url,a=e.query,u=void 0===a?{}:a;if(e.hasOwnProperty("query")&&("object"!=typeof u||null===u||Object.keys(u).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof i)return console.warn(new Error("Expected a video url")),null;if(u.autoplay=1,!h.test(i))throw new Error("This url is invalid");var p="https://www.youtube.com/embed/"+i+"?"+Object.entries(u).map((function(e){var t=o(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),f=d({},e);return delete f.url,delete f.children,(0,c.jsxs)("div",d(d({},f),{},{className:s()["youtube-container"]+" youtube-container",children:[n?null:(0,c.jsxs)(l.Fragment,{children:[(0,c.jsx)("img",{onClick:function(){return r(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(i,"/hqdefault.jpg"),alt:"Youtube Video"}),(0,c.jsx)("span",{className:s().play,children:"\u25b6"})]}),(0,c.jsx)("iframe",{className:n?null:s().disabled,src:n?p:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}))}()}},6238:function(e,t,n){"use strict";n.r(t);var r=n(1664),i=n(8555),o=n.n(i),a=n(2962),s=n(9734),l=n(5893);t.default=function(){return(0,l.jsxs)("div",{className:o()["vision-intro"],children:[(0,l.jsx)(a.PB,{description:"Getting in the coding mindset",title:"\ud83d\uddfa\ufe0f Planning it out"}),(0,l.jsx)("h1",{className:"title",children:"Chapter 1"}),(0,l.jsxs)("ol",{className:"toc pages",children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{href:"/vision#lesson",children:(0,l.jsx)("a",{children:"#1.0 \ud83d\uddfa\ufe0f Planning it out"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{href:"/vision/logic-models-explained",children:(0,l.jsx)("a",{children:"#1.1 \ud83e\udde0 Logic Models Explained"})})})]}),(0,l.jsx)("h2",{id:"lesson",children:"#1.0 \ud83d\uddfa\ufe0f Planning it out"}),(0,l.jsxs)("span",{className:"intro-card",children:[(0,l.jsx)(s.Z,{url:"wiaamJZ-hHI",thumbnail:"/images/how-to-avoid-burnout.jpg"}),"Take coding at your own pace and take time for yourself"]}),(0,l.jsxs)("p",{children:['Programmers are great at writing code only they can understand. Many beginners can feel alienated after hearing "just read the docs" (docs is short for documentation), and aren\'t given a proper chance to understand why coders do what they do.',(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Documentation sites like"," ",(0,l.jsx)(r.default,{href:"https://nodejs.org/docs/latest-v15.x/api/",children:(0,l.jsx)("a",{children:"this one"})})," ","can be a valuable tool for experienced programmers, but for a beginner it's a total headache. It's important to understand the concepts in simple terms so you can begin to visualize what you are trying to do.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Another key to learning is to practice. In this section I will guide you through basic coding concepts like problem solving, logic rules, and working with data. In the next chapter we will cement these concepts with hands-on activities."]}),(0,l.jsx)(r.default,{href:"/vision/logic-models-explained",children:(0,l.jsx)("a",{className:"next",children:"Next: #1.1 Logic Models Explained"})})]})}},4564:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vision",function(){return n(6238)}])},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy",disabled:"YTVideo_disabled__3feH4"}},8555:function(e){e.exports={"vision-intro":"vision_vision-intro__O4-4y",title:"vision_title__q5OC-"}},907:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},181:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(907);function i(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}},function(e){e.O(0,[774,888,179],(function(){return t=4564,e(e.s=t);var t}));var t=e.O();_N_E=t}]);