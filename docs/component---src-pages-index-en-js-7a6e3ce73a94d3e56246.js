"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[9417],{3877:function(e,t,n){var r=n(7487),o=n(5007);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"RPG stand for Role Playing Game, which is a kind of adventure game"},e),e.children||"RPG")}},7487:function(e,t,n){function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return d}});var i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var t,n=r(o);!(t=n()).done;){var i=t.value;"function"==typeof i?i(e):i&&(i.current=e)}}:null},a=n(5007);var l=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var u=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(null),o=function(){return n(!0)},i=function(){return n(!1)};return(0,a.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",i),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",i)}}),[r.current]),[r,t]};var c=function(){(0,a.useRef)(null);var e=(0,a.useState)(!1),t=e[0],n=e[1],r=u(),o=r[0],c=r[1],s=l(),d=s[0],m=s[1],f=c||m;return f!==t&&n(f),[i(o,d),t]},s=n(5007);var d=function(e){var t=c(),n=t[0],r=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5007),o=n(5007),i=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var a=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,r.useState)(!1),n=t[0],a=t[1],l=e,u=l.url,c=l.query,s=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof u)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!i.test(u))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+u+"?"+Object.entries(s).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,o.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return a(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+u+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:n?null:"YTVideo-module--disabled--HEa7g",src:n?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},830:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(3877),o=n(2472),i=n(71),a=n(1859),l=n(5414),u=n(5007);function c(){return u.createElement("div",{className:a.LE},u.createElement(l.q,null,u.createElement("title",null,"Your First RPG"),u.createElement("meta",{name:"description",content:"Learn how to make your own online adventure game and share it with your friends!"})),u.createElement("h1",{className:a.TN},u.createElement("span",{className:a.yG},"Coding Intro:"),u.createElement("br",null),"Your First RPG"),u.createElement("h2",null,"What will you learn?"),u.createElement("p",null,"In this course I will explain the basics of coding in JavaScript. You will make your own text based ",u.createElement(r.Z,null)," game that you can share with your friends 😃 I hope that I can make learning to code simple for you."),u.createElement("h2",null,"Why this course?"),u.createElement("p",null,"I designed this course to be easy to understand, and to be easy to get started. You don't need to install anything, and it works on mobile and cheaper computer devices. I also have used games and videos to make it a more engaging and interactive experience."),u.createElement("h2",null,"Sections"),u.createElement("ol",{className:"toc sections"},u.createElement("li",null,u.createElement(o.Z,{to:"/vision"},"👀 Visualizing Logic Models")),u.createElement("li",null,u.createElement(o.Z,{to:"/toying"},"👐 Toying with Logic Models")),u.createElement("li",null,u.createElement(o.Z,{to:"/coding"},"💻 Learning to Code")),u.createElement("li",null,u.createElement(o.Z,{to:"/rpg"},"🎮 Building an RPG"))),u.createElement(o.Z,{to:"/resources"},"Remember to check out the resource section if you get stuck"),u.createElement("div",{className:a.bO},u.createElement("h2",null,"Scared of Coding? Don't be!"),"Check out this inspiring talk by Linda Liukas",u.createElement(i.Z,{url:"-jRREn6ifEQ",thumbnail:"/images/poetry-of-programming.jpg"})),u.createElement(o.Z,{className:"next",to:"/vision"},"Get Started: 🗺️ Planning it out"))}},1859:function(e,t,n){n.d(t,{LE:function(){return r},TN:function(){return o},bO:function(){return i},yG:function(){return a}});var r="index-module--home--Vytd+",o="index-module--title--dmrol",i="index-module--extra--4t5rN",a="index-module--small--CNF4P"}}]);
//# sourceMappingURL=component---src-pages-index-en-js-7a6e3ce73a94d3e56246.js.map