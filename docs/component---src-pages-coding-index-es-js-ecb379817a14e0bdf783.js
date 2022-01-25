"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[3822],{880:function(e,n,t){var r=t(7487),a=t(5007);n.Z=function(e){return a.createElement(r.Z,Object.assign({definition:'Una "expression" es un fragmento de código que se puede reducir a un solo valor, como una ecuación matemática'},e),e.children||"expression")}},1103:function(e,n,t){var r=t(7487),a=t(5007);n.Z=function(e){return a.createElement(r.Z,Object.assign({definition:'El "JavaScript Interpreter" es el software que ejecuta su código, como el motor'},e),e.children||"interpreter")}},7487:function(e,n,t){function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return d}});var o=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=n.filter(Boolean);return a.length?0===a.length?a[0]:function(e){for(var n,t=r(a);!(n=t()).done;){var o=n.value;"function"==typeof o?o(e):o&&(o.current=e)}}:null},i=t(5007);var c=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?t(!0):t(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,n]};var l=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useRef)(null),a=function(){return t(!0)},o=function(){return t(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",a),e.addEventListener("mouseout",o),function(){e.removeEventListener("mouseover",a),e.removeEventListener("mouseout",o)}}),[r.current]),[r,n]};var u=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),n=e[0],t=e[1],r=l(),a=r[0],u=r[1],s=c(),d=s[0],m=s[1],f=u||m;return f!==n&&t(f),[o(a,d),n]},s=t(5007);var d=function(e){var n=u(),t=n[0],r=n[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return s.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:t},r?s.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(5007),a=t(5007),o=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var n=(0,r.useState)(!1),t=n[0],i=n[1],c=e,l=c.url,u=c.query,s=void 0===u?{}:u;if(e.hasOwnProperty("query")&&("object"!=typeof s||null===s||Object.keys(s).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof l)return console.warn(new Error("Expected a video url")),null;if(s.autoplay=1,!o.test(l))throw new Error("This url is invalid");var d="https://www.youtube.com/embed/"+l+"?"+Object.entries(s).map((function(e){var n=e[0],t=e[1];return n+"="+encodeURIComponent(t)})).join("&"),m=Object.assign({},e);return delete m.url,delete m.children,a.createElement("div",Object.assign({},m,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),t?null:a.createElement(r.Fragment,null,a.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+l+"/hqdefault.jpg",alt:"Youtube Video"}),a.createElement("span",null,"▶")),a.createElement("iframe",{className:t?null:"YTVideo-module--disabled--HEa7g",src:t?d:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},1122:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(880),a=t(1103),o=t(2472),i=t(71),c=t(5414),l=t(5007);function u(){return l.createElement("div",{className:"coding-intro"},l.createElement(c.q,null,l.createElement("title",null,"🛣️ Pasando a la codificación"),l.createElement("meta",{name:"description",content:"Una introducción a la codificación en JavaScript "})),l.createElement("h1",{className:"title"},"Capítulo 3"),l.createElement("ol",{className:"toc pages"},l.createElement("li",null,l.createElement(o.Z,{to:"/coding#lesson"},"#3.0 🛣️ Pasando a la codificación")),l.createElement("li",null,l.createElement(o.Z,{to:"/coding/primitives"},"#3.1 📊 Tipos de datos básicos")),l.createElement("li",null,l.createElement(o.Z,{to:"/coding/essential-tools"},"#3.2 🔨 Herramientas esenciales"))),l.createElement("h2",{id:"lesson"},"#3.0 🛣️ Pasando a la codificación"),l.createElement("br",null),l.createElement("span",{className:"introCard"},l.createElement(i.Z,{url:"O5IgvHdlGqo",thumbnail:"/images/codificación-primera-vez.jpg"}),"(este video es una chiste)"),l.createElement("p",null,"¿Cómo se escribe el código JS (JavaScript)? El código JavaScript es solo una serie de"," ",l.createElement(r.Z,null,"expressions")," lógicas (como pequeños modelos lógicos) que ejecuta el"," ",l.createElement(a.Z,null,"JavaScript Interpreter")," en un orden particular. Cada línea se evalúa una a la vez de arriba a abajo y de izquierda a derecha como en espanol. El"," ",l.createElement(a.Z,null)," también comprende y aplica las reglas de PEMDAS. Cada línea de código que escriba debe combinarse de forma coherente para formar un programa que funcione correctamente.",l.createElement("br",null),l.createElement("br",null),"La codificación no tiene por qué ser frustrante, intentemos divertirnos un poco con ella. En esta sección espero que quede claro cómo se puede adoptar un enfoque basado en modelos lógicos para escribir código básico. Voy a proporcionar muchos ejemplos, y si te quedas atascado, está bien continuar y volver más tarde. Intente tener una idea de lo que está sucediendo en general jugando con el código."),l.createElement(o.Z,{className:"next",to:"/coding/primitives"},"Siguiente: #3.1 📊 Tipos de datos básicos"))}}}]);
//# sourceMappingURL=component---src-pages-coding-index-es-js-ecb379817a14e0bdf783.js.map