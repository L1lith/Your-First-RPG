"use strict";(self.webpackChunkyour_first_rpg=self.webpackChunkyour_first_rpg||[]).push([[801],{8041:function(e,t,n){var a=n(7645),r=n(7294);t.Z=function(){return r.createElement(a.Z,{title:"Level 1",size:3,rulesOptions:{allowNots:!1,minColors:2,minShapes:2}})}},7488:function(e,t,n){var a=n(7487),r=n(7294);t.Z=function(e){return r.createElement(a.Z,Object.assign({definition:"A boolean is something that is either true or false, like a yes or no question"},e),e.children||"boolean")}},9964:function(e,t,n){var a=n(7487),r=n(7294);t.Z=function(e){return r.createElement(a.Z,Object.assign({definition:"An expression is a piece of code that can be reduced to a single value, like a math equation"},e),e.children||"expression")}},5185:function(e,t,n){var a=n(7487),r=n(7294);t.Z=function(e){return r.createElement(a.Z,Object.assign({definition:"A coding operator is a tool in the language that inputs and outputs data"},e),e.children||"operator")}},7487:function(e,t,n){function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,{Z:function(){return u}});var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(Boolean);return r.length?0===r.length?r[0]:function(e){for(var t,n=a(r);!(t=n()).done;){var l=t.value;"function"==typeof l?l(e):l&&(l.current=e)}}:null},o=n(7294);var m=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e=function(e){!a.current||a.current.contains(e.target)?n(!0):n(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}})),[a,t]};var s=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],a=(0,o.useRef)(null),r=function(){return n(!0)},l=function(){return n(!1)};return(0,o.useEffect)((function(){var e=a.current;if(e)return e.addEventListener("mouseover",r),e.addEventListener("mouseout",l),function(){e.removeEventListener("mouseover",r),e.removeEventListener("mouseout",l)}}),[a.current]),[a,t]};var c=function(){(0,o.useRef)(null);var e=(0,o.useState)(!1),t=e[0],n=e[1],a=s(),r=a[0],c=a[1],i=m(),u=i[0],f=i[1],b=c||f;return b!==t&&n(b),[l(r,u),t]},i=n(7294);var u=function(e){var t=c(),n=t[0],a=t[1];if("string"!=typeof e.children)throw new Error("Expected a text child");if("string"!=typeof e.definition)throw new Error("Expected a definition");return i.createElement("span",{className:"HoverDefinition-module--hover-definition--UaMyO",ref:n},a?i.createElement("span",{className:"HoverDefinition-module--definition--yVWLg HoverDefinition-module--up--SLxoS"},e.definition):null,e.children)}},6736:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(8041),r=n(7488),l=n(9964),o=n(5185),m=n(2472),s=n(7294),c=function(){return s.createElement("table",{className:"BooleanOps-module--booleanOps--rBBIq"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",{className:"table-member"}),s.createElement("th",{className:"table-member"},"A"),s.createElement("th",{className:"table-member"},"B"),s.createElement("th",{className:"table-member"},"A & B (AND)"),s.createElement("th",{className:"table-member"},"A || B (OR)"),s.createElement("th",{className:"table-member"},"NOT A"),s.createElement("th",{className:"table-member"},"NOT B"))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",{className:"table-member"},"#1"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"false")),s.createElement("tr",null,s.createElement("td",{className:"table-member"},"#2"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"true")),s.createElement("tr",null,s.createElement("td",{className:"table-member"},"#3"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"true")),s.createElement("tr",null,s.createElement("td",{className:"table-member"},"#4"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"false"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"true"),s.createElement("td",{className:"table-member"},"false"))))},i=n(5414),u=n(7294);function f(){return u.createElement("div",{className:"level-1"},u.createElement(i.q,null,u.createElement("title",null,'💬 "Or" Expressions')),u.createElement("h2",null,'#2.1 💬 Basic "Or" Expressions'),u.createElement("br",null),u.createElement("span",{className:"introCard"},u.createElement(c,null),"Here you can see a chart of the basic boolean ",u.createElement(o.Z,null,"operations")," (& means AND, || means OR)"),u.createElement("p",null,"In this section we will be playing the Matching Rules game in order to learn about"," ",u.createElement(r.Z,null)," logic. ",u.createElement(r.Z,null,"Boolean")," logic is the fundamental language that both electronic circuitry, and computers themselves are made out of, and it happens to be a great tool for learning how we talk to computers.",u.createElement("br",null),u.createElement("br",null),u.createElement(r.Z,null,"Boolean")," logic contains a set of"," ",u.createElement(l.Z,null,"expressions")," (kind of like coding language) that allow us to perform basic ",u.createElement(o.Z,null,"operations")," on data. True or false statements (boolean values like yes or no) are the main type of ",u.createElement(l.Z,null,"expressions")," handled with"," ",u.createElement(r.Z,null)," logic. This means we can ask the computer yes or no questions using code to tell it what to do."),u.createElement("br",null),u.createElement("h2",null,'The "Or" Operator'),u.createElement("p",null,"Or is a logical ",u.createElement(o.Z,null)," that will only output true if at least one of it's inputs are true. In the first level of the Matching Game we will experiment with the Or ",u.createElement(o.Z,null),". Choose only the tiles whose colors and shapes are allowed to win."),u.createElement(a.Z,null),u.createElement("p",null,"Once you've played the first level of the Matching Game a few times and are confident you understand OR continue on to the next section to learn about NOT"," ",u.createElement(l.Z,null,"expressions")," 😊"),u.createElement(m.Z,{to:"/toying/level-two"},u.createElement("a",{className:"next"},'Next: #2.2 🚫 Whats "Not" Allowed')))}}}]);
//# sourceMappingURL=component---src-pages-toying-level-one-en-js-e0ffd0d999d41dae3908.js.map