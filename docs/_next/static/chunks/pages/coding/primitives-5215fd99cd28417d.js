(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{1914:function(e,_,t){"use strict";var s=t(5671),n=t(3144),a=t(7326),r=t(2531),o=t(245),l=t(1120),i=t(4942),u=t(7294),c=t(5893);function d(e){var _=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,l.Z)(e);if(_){var n=(0,l.Z)(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return(0,o.Z)(this,t)}}function E(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);_&&(s=s.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?E(Object(t),!0).forEach((function(_){(0,i.Z)(e,_,t[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))}))}return e}var p=function(e){var _=t(4981).ZP;return t(4579),t(2105),(0,c.jsx)(_,m({},e))},O=function(e){(0,r.Z)(t,e);var _=d(t);function t(){var e;(0,s.Z)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=_.call.apply(_,[this].concat(r)),(0,i.Z)((0,a.Z)(e),"state",{mounted:!1}),(0,i.Z)((0,a.Z)(e),"render",(function(){return e.state.mounted?(0,c.jsx)(p,m({showGutter:!0===e.props.showGutter},e.props)):null})),e}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}}]),t}(u.Component);_.Z=O},3841:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_AceEditor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1914),_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3228),_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__),util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9539),util__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__),auto_bind__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1042),auto_bind__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_3__),next_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1163),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5893);function CodeSandbox(e){var _=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),t=_[0],s=_[1],n=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n.query.hasOwnProperty("autoPlay")?n.query.autoPlay:null),r=a[0],o=a[1],l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),i=n.query.code,u=n.query.autoPlay,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n.query.hasOwnProperty(e.codeQueryParam)?n.query[e.codeQueryParam]:e.value||""),d=c[0],E=c[1],m=!!e.vertical,p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0===e.disableAutoRun?null:getOutput(d,e.consoleMode)),O=p[0],h=p[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){i&&E(i)}),[i]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){null===r&&u&&o("1"===u)}),[u]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:(!0===m?_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().vertical+" ":"")+("string"==typeof e.className?e.className+" ":"")+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sandbox,children:["string"==typeof t?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["share-popup"],children:["Your Sharing URL:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().url,href:t,children:"Right Click and Copy This Link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close,onClick:function(){s(null)},children:"\u274c"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().settings,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{children:"Settings"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["auto-play"],children:["Autoplay"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{ref:l,onChange:function(){o(!r)},checked:r,type:"checkbox"})]})]})]}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["main-title"],children:[!0===e.disableAutoRun?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Run",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){h(getOutput(d,e.consoleMode))},children:"\u25b6"}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode,children:["JavaScript ",!0===e.consoleMode?"Terminal":"Evaluator"]}),!0===e.readOnly?" (Read Only)":null,!0!==e.noReset?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Reset",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){E("")},children:"\u274c"}):null,1==e.hasOwnProperty("codeQueryParam")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Share",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){s("".concat(n.basePath,"/rpg/editor?").concat(e.codeQueryParam,"=").concat(encodeURIComponent(d)).concat(r?"&autoPlay=1":""))},children:"\u2601\ufe0f"})}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("noscript",{children:"Please Enable JavaScript"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:(m?_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().vertical+" ":"")+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inner,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"section "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().section,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title,children:"Code Input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{width:"50%",maxLines:1/0,className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"],mode:"javascript",theme:"ambiance",readOnly:!0===e.readOnly,value:d,onChange:function(_){E(_),!0!==e.disableAutoRun&&h(getOutput(_,e.consoleMode))}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"section "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().section,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode,children:!0===e.consoleMode?"Console":"Output"}),null===O?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Run the program to see your output"}):O]})]})]})}function getOutput(e,_){return e.length>0?!0===_?getConsoleOutput(e):getEvalOutput(e):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Type something to see the evaluated output"})}function getConsoleOutput(code){var oldLog=console.log,logOutput=[];console.log=function(){for(var e=arguments.length,_=new Array(e),t=0;t<e;t++)_[t]=arguments[t];_.length>1?logOutput.push(_):logOutput.push(_[0])};try{return eval(code),console.log=oldLog,logOutput.length<1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Try logging something to the console to see some output"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{maxLines:1/0,className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"]+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().valid,width:"50%",mode:"javascript",height:"auto",theme:"ambiance",readOnly:!0,value:logOutput.map((function(e){return(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(e)})).join(";\n")})}catch(err){return console.log=oldLog,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error,children:(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)})}}function getEvalOutput(code){try{var output=eval(code),outputSource=(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(output);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{maxLines:1/0,className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"]+" output valid",width:"50%",mode:"javascript",theme:"ambiance",readOnly:!0,value:outputSource})}catch(err){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error,children:(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)})}}__webpack_exports__.Z=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(CodeSandbox)},9734:function(e,_,t){"use strict";t.d(_,{Z:function(){return E}});var s=t(4942);var n=t(181);function a(e,_){return function(e){if(Array.isArray(e))return e}(e)||function(e,_){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var s,n,a=[],r=!0,o=!1;try{for(t=t.call(e);!(r=(s=t.next()).done)&&(a.push(s.value),!_||a.length!==_);r=!0);}catch(l){o=!0,n=l}finally{try{r||null==t.return||t.return()}finally{if(o)throw n}}return a}}(e,_)||(0,n.Z)(e,_)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=t(6109),o=t.n(r),l=t(7294),i=t(5893);function u(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);_&&(s=s.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?u(Object(t),!0).forEach((function(_){(0,s.Z)(e,_,t[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))}))}return e}var d=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var _=(0,l.useState)(!1),t=_[0],s=_[1],n=e.url,r=e.query,u=void 0===r?{}:r;if(e.hasOwnProperty("query")&&("object"!=typeof u||null===u||Object.keys(u).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof n)return console.warn(new Error("Expected a video url")),null;if(u.autoplay=1,!d.test(n))throw new Error("This url is invalid");var E="https://www.youtube.com/embed/"+n+"?"+Object.entries(u).map((function(e){var _=a(e,2),t=_[0],s=_[1];return"".concat(t,"=").concat(encodeURIComponent(s))})).join("&"),m=c({},e);return delete m.url,delete m.children,(0,i.jsxs)("div",c(c({},m),{},{className:o()["youtube-container"]+" youtube-container",children:[t?null:(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)("img",{onClick:function(){return s(!0)},src:e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(n,"/hqdefault.jpg"),alt:"Youtube Video"}),(0,i.jsx)("span",{className:o().play,children:"\u25b6"})]}),(0,i.jsx)("iframe",{className:t?null:o().disabled,src:t?E:null,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}))}()}},322:function(e,_,t){"use strict";t.r(_);var s=t(1664),n=t(3841),a=t(3458),r=t.n(a),o=t(2962),l=t(9734),i=t(5893);_.default=function(){return(0,i.jsxs)("div",{className:r().primitives,children:[(0,i.jsx)(o.PB,{title:"\ud83d\udcca Data Types"}),(0,i.jsx)("h2",{children:"#3.1 \ud83d\udcca Basic Data Types"}),(0,i.jsx)("br",{}),(0,i.jsxs)("span",{className:"intro-card",children:[(0,i.jsx)(l.Z,{url:"_4TPlwwHM8Q",thumbnail:"/images/blender-horror.jpg"}),(0,i.jsxs)("span",{children:["You can read more"," ",(0,i.jsx)("a",{href:"https://www.aleksandrhovhannisyan.com/blog/binary-for-beginners/",children:"here"})," if you'd like to learn about how binary values are converted into more complex data types like strings and numbers."]})]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"In this section we will upgrade from working with just boolean logic to writing functional JavaScript! Primitives are the basic data types in JavaScript. Here are the basic primitives:"}),(0,i.jsxs)("ul",{className:r()["primitives-list"],children:[(0,i.jsx)("li",{children:"Boolean"}),(0,i.jsx)("li",{children:"Number"}),(0,i.jsx)("li",{children:"String"}),(0,i.jsx)("li",{children:"undefined"}),(0,i.jsx)("li",{children:"null"})]}),(0,i.jsx)("p",{children:"I will now detail each type of data and their operators, then in the next page I will provide some more examples of how they can be used together. Additionally, you can edit the input of all the code examples below (note: if your syntax is invalid you will receive an error instead of your output)"}),(0,i.jsxs)("div",{className:"type boolean",children:[(0,i.jsx)("h2",{children:"Booleans"}),(0,i.jsx)("p",{children:"JavaScript has integrated support for boolean values and boolean operations."}),(0,i.jsx)(n.Z,{value:"true",className:"mini"}),(0,i.jsx)(n.Z,{value:"false",className:"mini"}),(0,i.jsx)("h3",{children:"Or Operations"}),(0,i.jsx)("p",{children:'The or operator is written as "||" in JavaScript'}),(0,i.jsx)(n.Z,{value:"true || false",className:"mini"}),(0,i.jsx)(n.Z,{value:"false || true",className:"mini"}),(0,i.jsx)(n.Z,{value:"false || false",className:"mini"}),(0,i.jsx)("h3",{children:"Not Operations"}),(0,i.jsx)("p",{children:'The not operator is written as "!" in JavaScript'}),(0,i.jsx)(n.Z,{value:"!true",className:"mini"}),(0,i.jsx)(n.Z,{value:"!false",className:"mini"}),(0,i.jsx)("h3",{children:"And Operations"}),(0,i.jsx)("p",{children:'The and operator is written as "&&" in JavaScript'}),(0,i.jsx)(n.Z,{value:"true && true",className:"mini"}),(0,i.jsx)(n.Z,{value:"true && false",className:"mini"}),(0,i.jsx)(n.Z,{value:"false && false",className:"mini"})]}),(0,i.jsxs)("div",{className:"type numbers",children:[(0,i.jsx)("h2",{children:"Numbers"}),(0,i.jsx)("p",{children:"Numbers can be integers (whole numbers like 33) or floats (short for floating point decimals like 45.512). Some basic operations are adding, multiplication, division, and subtraction. Besides changing the numbers you can also compare them (using symbols like >, <, or \u2265) in order to output boolean values."}),(0,i.jsx)("h3",{children:"Addition/Subtraction"}),(0,i.jsx)(n.Z,{value:"12 + 12",className:"mini"}),(0,i.jsx)(n.Z,{value:"30 - 12",className:"mini"}),(0,i.jsx)("h3",{children:"Greater than/Less than"}),(0,i.jsx)("p",{children:"The greater than and less than operators return boolean values"}),(0,i.jsx)(n.Z,{value:"12 > 10",className:"mini"}),(0,i.jsx)(n.Z,{value:"12 < 10",className:"mini"}),(0,i.jsx)(n.Z,{value:"5 >= 5",className:"mini"}),(0,i.jsx)(n.Z,{value:"6 <= 5",className:"mini"}),(0,i.jsx)("h3",{children:"Multiply/Divide"}),(0,i.jsx)(n.Z,{value:"32 * 11",className:"mini"}),(0,i.jsx)(n.Z,{value:"4 / 12",className:"mini"})]}),(0,i.jsxs)("div",{className:"type strings",children:[(0,i.jsx)("h2",{children:"Strings"}),(0,i.jsx)("p",{children:"Strings are collections of text (like someones name, an address, etc). They are written by surrounding the text in single or double quotes."}),(0,i.jsx)(n.Z,{value:'"I like chocolate milk"',className:"mini"}),(0,i.jsx)(n.Z,{value:"'my namea borat'",className:"mini"}),(0,i.jsx)("p",{children:"They can also be added together"}),(0,i.jsx)(n.Z,{value:"'beep' + 'bop'",className:"mini"}),(0,i.jsx)(n.Z,{value:"'9' + '10'",className:"mini"})]}),(0,i.jsxs)("div",{className:"type undefined",children:[(0,i.jsx)("h2",{children:"undefined"}),(0,i.jsx)("p",{children:"The value undefined is used to represent a value that has not been assigned anything else. It's basically the universal placeholder value."}),(0,i.jsx)(n.Z,{value:"undefined",className:"mini"})]}),(0,i.jsxs)("div",{className:"type null",children:[(0,i.jsx)("h2",{children:"null"}),(0,i.jsx)("p",{children:'The value null is used to represent the value "nothing". It\'s different from undefined in that it is intentionally nothing rather than just being missing a value.'}),(0,i.jsx)(n.Z,{value:"null",className:"mini"})]}),(0,i.jsxs)("div",{className:"equality",children:[(0,i.jsx)("h2",{children:"Equality"}),(0,i.jsx)("p",{children:'To check whether two values are exactly the same we can use the strict equality operator "==="'}),(0,i.jsx)(n.Z,{value:"1 === 1",className:"mini"}),(0,i.jsx)(n.Z,{value:'1 === "1"',className:"mini"}),(0,i.jsx)(n.Z,{value:"1 === 1.1",className:"mini"})]}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:["In the next section we'll be using these primitive values so you can see a little bit more why they are useful. You can read in greater detail about JS's data types"," ",(0,i.jsx)("a",{href:"https://javascript.info/types",children:"here"})]}),(0,i.jsx)(s.default,{href:"/coding/essential-tools",children:(0,i.jsx)("a",{className:"next",children:"Next: #3.2 Essential Tools"})})]})}},6712:function(e,_,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coding/primitives",function(){return t(322)}])},3228:function(e){e.exports={sandbox:"CodeSandbox_sandbox__2U_Dq",icon:"CodeSandbox_icon__2Q2jQ",settings:"CodeSandbox_settings__shTL3","auto-play":"CodeSandbox_auto-play__11zKM","ace-editor":"CodeSandbox_ace-editor__3Roms","share-popup":"CodeSandbox_share-popup__1OqMz",close:"CodeSandbox_close__2EM2w",titles:"CodeSandbox_titles__3trrU","main-title":"CodeSandbox_main-title__2fKfR",mode:"CodeSandbox_mode__7YG5U",section:"CodeSandbox_section__1s3XX",inner:"CodeSandbox_inner__Mzt0O",vertical:"CodeSandbox_vertical__1rh37",output:"CodeSandbox_output__36WQT",error:"CodeSandbox_error__2GZg4"}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy",disabled:"YTVideo_disabled__3feH4"}},3458:function(e){e.exports={primitives:"primitives_primitives__3kroO","primitives-list":"primitives_primitives-list__2Xnb2"}},907:function(e,_,t){"use strict";function s(e,_){(null==_||_>e.length)&&(_=e.length);for(var t=0,s=new Array(_);t<_;t++)s[t]=e[t];return s}t.d(_,{Z:function(){return s}})},181:function(e,_,t){"use strict";t.d(_,{Z:function(){return n}});var s=t(907);function n(e,_){if(e){if("string"===typeof e)return(0,s.Z)(e,_);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,s.Z)(e,_):void 0}}}},function(e){e.O(0,[281,970,186,389,774,888,179],(function(){return _=6712,e(e.s=_);var _}));var _=e.O();_N_E=_}]);