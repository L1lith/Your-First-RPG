"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[224],{5485:function(e,t,n){var r=n(7487),o=n(7294);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"docs is short for documentation, which is a site that describes something"},e),e.children||"docs")}},7487:function(e,t,n){function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return d}});var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var t,n=r(o);!(t=n()).done;){var a=t.value;"function"==typeof a?a(e):a&&(a.current=e)}}:null},i=n(7294);var l=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var u=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null),o=function(){return n(!0)},a=function(){return n(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",a),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",a)}}),[r.current]),[r,t]};var c=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),t=e[0],n=e[1],r=u(),o=r[0],c=r[1],s=l(),d=s[0],m=s[1],f=c||m;return f!==t&&n(f),[a(o,d),t]},s=n(7294);var d=function(e){var t=c(),n=t[0],r=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=n(7294),a=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,r.useState)(!1),n=t[0],i=t[1],l=e,u=l.url,c=l.query,s=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof u)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!a.test(u))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+u+"?"+Object.entries(s).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,o.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+u+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:n?null:"YTVideo-module--disabled--HEa7g",src:n?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},9269:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(5485),o=n(2472),a=n(71),i=n(9585),l=n(5414),u=n(7294);function c(){return u.createElement("div",{className:i.b},u.createElement(l.q,null,u.createElement("meta",{name:"description",content:"Getting in the coding mindset"}),u.createElement("title",null,"🗺️ Planning it out")),u.createElement("h1",{className:"title"},"Chapter 1"),u.createElement("ol",{className:"toc pages"},u.createElement("li",null,u.createElement(o.Z,{to:"/vision#lesson"},u.createElement("a",null,"#1.0 🗺️ Planning it out"))),u.createElement("li",null,u.createElement(o.Z,{to:"/vision/logic-models-explained"},u.createElement("a",null,"#1.1 🧠 Logic Models Explained")))),u.createElement("h2",{id:"lesson"},"#1.0 🗺️ Planning it out"),u.createElement("span",{className:"introCard"},u.createElement(a.Z,{url:"wiaamJZ-hHI",thumbnail:"/images/how-to-avoid-burnout.jpg"}),"Take coding at your own pace and take time for yourself"),u.createElement("p",null,'Programmers are great at writing code only they can understand. Many beginners can feel alienated after hearing "just read the ',u.createElement(r.Z,null),"\", and aren't given a proper chance to understand why coders do what they do.",u.createElement("br",null),u.createElement("br",null),"Documentation sites like"," ",u.createElement("a",{target:"_blank",href:"https://nodejs.org/docs/latest-v15.x/api/"},"this one")," ","can be a valuable tool for experienced programmers, but for a beginner it's a total headache. It's important to understand the concepts in simple terms so you can begin to visualize what you are trying to do.",u.createElement("br",null),u.createElement("br",null),"Another key to learning is to practice. In this section I will guide you through basic coding concepts like problem solving, logic rules, and working with data. In the next chapter we will cement these concepts with hands-on activities."),u.createElement(o.Z,{to:"/vision/logic-models-explained"},u.createElement("a",{className:"next"},"Next: #1.1 Logic Models Explained")))}},9585:function(e,t,n){n.d(t,{b:function(){return r}});var r="index-module--visionIntro--QPFlf"}}]);
//# sourceMappingURL=component---src-pages-vision-index-en-js-b49d57f3f3b17dbbe38f.js.map