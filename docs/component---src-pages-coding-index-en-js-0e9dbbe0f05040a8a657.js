"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[4637],{1444:function(e,t,n){var r=n(7487),o=n(5007);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"An expression is a piece of code that can be reduced to a single value, like a math equation"},e),e.children||"expression")}},4516:function(e,t,n){var r=n(7487),o=n(5007);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"The JavaScript interpreter is the software that runs your code, like the engine"},e),e.children||"interpreter")}},7487:function(e,t,n){function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return d}});var i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var t,n=r(o);!(t=n()).done;){var i=t.value;"function"==typeof i?i(e):i&&(i.current=e)}}:null},a=n(5007);var l=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var u=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(null),o=function(){return n(!0)},i=function(){return n(!1)};return(0,a.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",i),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",i)}}),[r.current]),[r,t]};var c=function(){(0,a.useRef)(null);var e=(0,a.useState)(!1),t=e[0],n=e[1],r=u(),o=r[0],c=r[1],s=l(),d=s[0],m=s[1],f=c||m;return f!==t&&n(f),[i(o,d),t]},s=n(5007);var d=function(e){var t=c(),n=t[0],r=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5007),o=n(5007),i=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var a=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,r.useState)(!1),n=t[0],a=t[1],l=e,u=l.url,c=l.query,s=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof u)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!i.test(u))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+u+"?"+Object.entries(s).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,o.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return a(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+u+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:"YTVideo-module--popout--baHpn"+(n?"":" YTVideo-module--disabled--HEa7g"),src:n?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},3551:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(7487),o=n(5007),i=function(e){return o.createElement(r.Z,Object.assign({definition:"An aha moment is the satisfying feeling when you finally understand something"},e),e.children||"aha moment")},a=n(1444),l=n(4516),u=n(2472),c=n(71),s=n(5414),d=n(5007);function m(){return d.createElement("div",{className:"coding-intro"},d.createElement("h1",{className:"title"},"Chapter 3"),d.createElement(s.q,null,d.createElement("title",null,"🛣️ Stepping into Coding"),d.createElement("meta",{name:"description",content:"An introduction to coding in JavaScript"})),d.createElement("ol",{className:"toc pages"},d.createElement("li",null,d.createElement(u.Z,{to:"/coding#lesson"},"#3.0 🛣️ Stepping into Coding")),d.createElement("li",null,d.createElement(u.Z,{to:"/coding/primitives"},"#3.1 📊 Basic Data Types")),d.createElement("li",null,d.createElement(u.Z,{to:"/coding/essential-tools"},"#3.2 🔨 Essential Tools"))),d.createElement("h2",{id:"lesson"},"#3.0 🛣️ Stepping into Coding"),d.createElement("br",null),d.createElement("span",{className:"introCard"},d.createElement(c.Z,{url:"MAlSjtxy5ak",thumbnail:"/images/coding-tutorial-meme.jpg"}),"(this video is a joke)"),d.createElement("p",null,"How is JS (JavaScript) code written? JavaScript code is just a series of"," ",d.createElement(a.Z,null,"code expressions")," (like putting together a bunch of little logic models like legos) that are run by the ",d.createElement(l.Z,null,"JavaScript Interpreter")," in a particular order. Each line of code is evaluated one at a time from top to bottom and left-to-right like English. The ",d.createElement(l.Z,null)," also understands and applies the rules of"," ",d.createElement("a",{target:"_blank",href:"https://www.mathsisfun.com/operation-order-pemdas.html"},"PEMDAS"),". Your goal should be to write code that is easy to understand, this will help you make awesome programs.",d.createElement("br",null),d.createElement("br",null),"In this section you will learn how to use logic to write your first code, hurray! Take it at your own pace so you don't get overwhelmed, and I promise coding can be fun! I'm going to be providing many examples, and if you get confused it's okay to continue on and come back later. Playing around with code is one of the best ways to have a wonderful"," ",d.createElement(i,null,'"aha moment"'),"."),d.createElement(u.Z,{className:"next",to:"/coding/primitives"},"Next: #3.1 📊 Basic Data Types"))}}}]);
//# sourceMappingURL=component---src-pages-coding-index-en-js-0e9dbbe0f05040a8a657.js.map