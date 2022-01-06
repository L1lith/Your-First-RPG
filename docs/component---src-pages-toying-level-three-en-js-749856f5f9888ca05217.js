"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[581],{7488:function(e,t,n){var r=n(7487),o=n(7294);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"A boolean is something that is either true or false, like a yes or no question"},e),e.children||"boolean")}},9964:function(e,t,n){var r=n(7487),o=n(7294);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"An expression is a piece of code that can be reduced to a single value, like a math equation"},e),e.children||"expression")}},5185:function(e,t,n){var r=n(7487),o=n(7294);t.Z=function(e){return o.createElement(r.Z,Object.assign({definition:"A coding operator is a tool in the language that inputs and outputs data"},e),e.children||"operator")}},7487:function(e,t,n){function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return m}});var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t.filter(Boolean);return o.length?0===o.length?o[0]:function(e){for(var t,n=r(o);!(t=n()).done;){var a=t.value;"function"==typeof a?a(e):a&&(a.current=e)}}:null},i=n(7294);var l=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[r,t]};var u=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,i.useRef)(null),o=function(){return n(!0)},a=function(){return n(!1)};return(0,i.useEffect)((function(){var e=r.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",a),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",a)}}),[r.current]),[r,t]};var s=function(){(0,i.useRef)(null);var e=(0,i.useState)(!1),t=e[0],n=e[1],r=u(),o=r[0],s=r[1],c=l(),m=c[0],d=c[1],f=s||d;return f!==t&&n(f),[a(o,m),t]},c=n(7294);var m=function(e){var t=s(),n=t[0],r=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return c.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},r?c.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},71:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=n(7294),a=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var i=function(e){return void 0===e&&(e={url:url}),function(){var t=(0,r.useState)(!1),n=t[0],i=t[1],l=e,u=l.url,s=l.query,c=void 0===s?{}:s;if(e.hasOwnProperty("query")&&("object"!=typeof c||null===c||Object.keys(c).length<1))throw new Error("Please provide a valid query object");if("string"!=typeof u)return console.warn(new Error("Expected a video url")),null;if(c.autoplay=1,!a.test(u))throw new Error("This url is invalid");var m="https://www.youtube.com/embed/"+u+"?"+Object.entries(c).map((function(e){var t=e[0],n=e[1];return t+"="+encodeURIComponent(n)})).join("&"),d=Object.assign({},e);return delete d.url,delete d.children,o.createElement("div",Object.assign({},d,{className:"YTVideo-module--youtubeContainer--zCB2A youtube-container"}),n?null:o.createElement(r.Fragment,null,o.createElement("img",{onClick:function(){return i(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/"+u+"/hqdefault.jpg",alt:"Youtube Video"}),o.createElement("span",null,"▶")),o.createElement("iframe",{className:n?null:"YTVideo-module--disabled--HEa7g",src:n?m:null,title:"YouTube video player",frameBorder:"0",sandbox:"allow-scripts allow-same-origin",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}()}},3090:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(7645),o=n(7294),a=function(){var e=Math.random()>.5,t=Math.random()>.5;return o.createElement(r.Z,{shapes:["▢","⧍","○","◊"],colors:["#ffccfb","#00ff00","#0080b3","#fdff80"],title:"Level 3",size:5,rulesOptions:{allowNots:!0,notColors:e,notShapes:t}})},i=n(7488),l=n(9964),u=n(5185),s=n(7487),c=n(7294),m=function(e){return c.createElement(s.Z,Object.assign({definition:"The syntax is the grammer (or rules) of the programming language"},e),e.children||"syntax")},d=n(2472),f=n(71),h=n(5414),g=n(7294);function p(){return g.createElement("div",{className:"level-3"},g.createElement(h.q,null,g.createElement("title",null,"💻 Booleans for Apps")),g.createElement("h2",null,"#2.3 💻 Booleans for coding Apps"),g.createElement("br",null),g.createElement("p",null,"How does ",g.createElement(i.Z,null)," logic tie into coding? When a programmer is coding they write in a special language called a ",g.createElement(m,null),". Every coding language can have different"," ",g.createElement(m,null,"syntaxes"),", but ultimately they are just different ways of representing our logic models using code.",g.createElement("br",null),g.createElement("br",null),"Rather than writing enormous combinations of ORs, NOTs, and other logical"," ",g.createElement(u.Z,null,"operators"),", software engineers conveniently created coding languages packed in with features that allow us to say what we are trying to do more easily. In fact, nearly every coding language has support for ",g.createElement(i.Z,null)," logic built-in, which is an essential part of your toolkit as a coder.",g.createElement("br",null),g.createElement("br",null),"I've prepared one final challenge in case you'd like to test your skills at the matching game one more time before we proceed to talk about coding."),g.createElement(a,null),g.createElement("br",null),g.createElement("p",null,"You might have noticed that when given a NOT ",g.createElement(u.Z,null)," with multiple values, it is sometimes easier to think of it as simply a request for whatever is missing. This is an example of how we can build more complex rules from simplistic systems. Writing good software is about learning to create apps with complex capabilities without making the code itself overly complex or messy.",g.createElement("br",null),g.createElement("br",null),"Like speaking any language (human or machine), learning how to better express yourself (by using clean code and good design practices) allows you to say more while writing less. Spending more time to think about your code from a design perspective will allow you to save countless hours dealing with mind-numbing bugs and other issues."),g.createElement("p",null,"Many coding languages have the capabilities to compare and transform other kinds of data more advanced than ",g.createElement(i.Z,null,"booleans"),", which is very powerful. We can do things like evaluate math ",g.createElement(l.Z,null,"expressions"),", compare text, and more. Watch this video to see this in practice, and to see the relationship between the"," ",g.createElement(i.Z,null)," logic and coding mental models."),g.createElement(f.Z,{url:"_j9nvYKaOVE",thumbnail:"/images/cs-discoveries.jpg"}),g.createElement(d.Z,{to:"/coding"},g.createElement("a",{className:"next"},"Next: #3.0 🛣️ Stepping into Coding")))}}}]);
//# sourceMappingURL=component---src-pages-toying-level-three-en-js-749856f5f9888ca05217.js.map