"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[1171],{2497:function(e,n,t){var r=t(7487),o=t(5007);n.Z=function(e){return o.createElement(r.Z,Object.assign({definition:'"RPG" significa Role Playing Game, que es una especie de juego de aventuras.'},e),e.children||"RPG")}},7487:function(e,n,t){function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return d}});var a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=n.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var n,t=r(o);!(n=t()).done;){var a=n.value;"function"==typeof a?a(e):a&&(a.current=e)}}:null},i=t(5007);var u=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?t(!0):t(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,n]};var l=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useRef)(null),o=function(){return t(!0)},a=function(){return t(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",a),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",a)}}),[r.current]),[r,n]};var c=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),n=e[0],t=e[1],r=l(),o=r[0],c=r[1],s=u(),d=s[0],m=s[1],f=c||m;return f!==n&&t(f),[a(o,d),n]},s=t(5007);var d=function(e){var n=c(),t=n[0],r=n[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:t},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(5007),o=t(5007),a=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var n=(0,r.useState)(!1),t=n[0],i=n[1],u=e,l=u.url,c=u.query,s=void 0===c?{}:c;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof l)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!a.test(l))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+l+"?"+Object.entries(s).map((function(e){var n=e[0],t=e[1];return n+"="+encodeURIComponent(t)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,o.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),t?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+l+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:t?null:"YTVideo-module--disabled--HEa7g",src:t?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},627:function(e,n,t){t.r(n);var r=t(2497),o=t(2472),a=t(71),i=t(1859),u=t(5414),l=t(5007);n.default=function(){return l.createElement("div",{className:i.LE},l.createElement(u.q,null,l.createElement("title",null,"Tu Primer Juego RPG"),l.createElement("meta",{name:"description",content:"¡Aprende a crear tu propio juego de aventuras en línea y compártelo con tus amigos!"})),l.createElement("h1",{className:i.TN},l.createElement("span",{className:i.yG},"Introducción a la codificación:"),l.createElement("br",null)," Tu Primer Juego RPG"),l.createElement("h2",null,"¿Que aprenderás?"),l.createElement("p",null,"En este curso explicaré los conceptos básicos de la codificación en JavaScript. Harás tu propio juego ",l.createElement(r.Z,null)," basado en texto que podrás compartir con tus amigos 😃 Espero poder hacer que aprender a codificar sea simple para ti."),l.createElement("h2",null,"¿Por qué este curso?"),l.createElement("p",null,"Diseñé este curso para que sea fácil de entender y fácil de comenzar. no necesitas para instalar cualquier cosa, y funciona en dispositivos móviles y ordenadores más baratos. yo también he usado juegos y videos para que sea una experiencia más atractiva e interactiva."),l.createElement("h2",null,"Secciones"),l.createElement("ol",{className:"toc sections"},l.createElement("li",null,l.createElement(o.Z,{to:"/vision"},"👀 Visualización de modelos lógicos")),l.createElement("li",null,l.createElement(o.Z,{to:"/toying"},"👐 Jugando con modelos lógicos")),l.createElement("li",null,l.createElement(o.Z,{to:"/coding"},"💻 Aprendiendo a codificar")),l.createElement("li",null,l.createElement(o.Z,{to:"/rpg"},"🎮 Construyendo un juego!"))),l.createElement(o.Z,{to:"/resources"},"Recuerde consultar la sección de recursos si se queda atascado"),l.createElement("div",{className:i.bO},l.createElement("h2",null,"¿Miedo a la codificación? ¡No lo seas!"),"Echa un vistazo a esta inspiradora charla de Linda Liukas",l.createElement(a.Z,{url:"-jRREn6ifEQ",query:{cc_lang_pref:"es",cc_load_policy:"1"},thumbnail:"/images/poetry-of-programming.jpg"})),l.createElement(o.Z,{className:"next",to:"/vision"},"Get Started: 🗺️ Planning it out"))}},1859:function(e,n,t){t.d(n,{LE:function(){return r},LB:function(){return o},hY:function(){return a},TN:function(){return i},bO:function(){return u},yG:function(){return l}});var r="index-module--home--Vytd+",o="index-module--playground--vu58J",a="index-module--play--KTtrw",i="index-module--title--dmrol",u="index-module--extra--4t5rN",l="index-module--small--CNF4P"}}]);
//# sourceMappingURL=component---src-pages-index-es-js-527315da7633792b94c4.js.map