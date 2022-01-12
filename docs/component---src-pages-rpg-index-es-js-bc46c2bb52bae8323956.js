"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[223],{2497:function(e,t,n){var r=n(7487),o=n(7294);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:'"RPG" significa Role Playing Game, que es una especie de juego de aventuras.'},e),e.children||"RPG")}},7487:function(e,t,n){function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return m}});var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var t,n=r(o);!(t=n()).done;){var a=t.value;"function"==typeof a?a(e):a&&(a.current=e)}}:null},u=n(7294);var i=function(){var e=(0,u.useState)(!1),t=e[0],n=e[1],r=(0,u.useRef)(null);return(0,u.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var l=function(){var e=(0,u.useState)(!1),t=e[0],n=e[1],r=(0,u.useRef)(null),o=function(){return n(!0)},a=function(){return n(!1)};return(0,u.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",a),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",a)}}),[r.current]),[r,t]};var c=function(){(0,u.useRef)(null);var e=(0,u.useState)(!1),t=e[0],n=e[1],r=l(),o=r[0],c=r[1],s=i(),m=s[0],d=s[1],f=c||d;return f!==t&&n(f),[a(o,m),t]},s=n(7294);var m=function(e){var t=c(),n=t[0],r=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),o=n(7294),a=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var u=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,r.useState)(!1),n=t[0],u=t[1],i=e,l=i.url,c=i.query,s=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof l)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!a.test(l))throw new Error("This url is invalid");var m="https://www.youtube.com/embed/"+l+"?"+Object.entries(s).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),d=Object.assign({},e);return delete d.url,delete d.children,o.createElement("div",Object.assign({},d,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return u(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+l+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:n?null:"YTVideo-module--disabled--HEa7g",src:n?m:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},1172:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(2497),o=n(2472),a=n(71),u=n(5414),i=n(7294);function l(){return i.createElement("div",{className:"coding-intro"},i.createElement("h1",{className:"title"},"Chapter 4"),i.createElement(u.q,null,i.createElement("title",null,"🎮 Construyendo un juego!")),i.createElement("ol",{className:"toc pages"},i.createElement("li",null,i.createElement(o.Z,{to:"/rpg#lesson"},"#4.0 🎮 Construyendo un juego!")),i.createElement("li",null,i.createElement(o.Z,{to:"/rpg/communication"},"#4.1 🗣️ Comunicarse con el jugador")),i.createElement("li",null,i.createElement(o.Z,{to:"/rpg/publishing"},"#4.2 🏆 Compartiendo tu juego RPG")),i.createElement("li",null,i.createElement(o.Z,{to:"/rpg/editor"},"#4.3 🛠️ La editora de juegos")),i.createElement("li",null,i.createElement(o.Z,{to:"/rpg/summary"},"#4.4 🔭 ¡Ganaste! Otras lecturas"))),i.createElement("h2",{id:"lesson"},"#4.0 🎮 Construyendo un juego!"),i.createElement("br",null),i.createElement("span",{className:"introCard"},i.createElement(a.Z,{url:"eMR6c8xbgpc",thumbnail:"/images/heart-of-the-forest.jpg"}),"¡Diviértete con eso!"),i.createElement("p",null,"En esta sección, repasaré cómo crear su propio juego ",i.createElement(r.Z,null)," basado en texto. He estado enseñándote mucho sobre cómo codificar, y ahora me gustaría que tomes las riendas y seas creativo 😊 ¡Puedes crear cualquier cosa que se te ocurra!"),i.createElement(o.Z,{className:"next",to:"/rpg/communication"},"Next: #4.1 🗣️ Comunicarse con el jugador"))}}}]);
//# sourceMappingURL=component---src-pages-rpg-index-es-js-bc46c2bb52bae8323956.js.map