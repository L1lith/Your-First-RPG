(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{1914:function(e,t,_){"use strict";var o=_(5671),n=_(3144),r=_(7326),s=_(2531),a=_(245),i=_(1120),u=_(4942),l=_(7294),c=_(5893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var _,o=(0,i.Z)(e);if(t){var n=(0,i.Z)(this).constructor;_=Reflect.construct(o,arguments,n)}else _=o.apply(this,arguments);return(0,a.Z)(this,_)}}function h(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),_.push.apply(_,o)}return _}function p(e){for(var t=1;t<arguments.length;t++){var _=null!=arguments[t]?arguments[t]:{};t%2?h(Object(_),!0).forEach((function(t){(0,u.Z)(e,t,_[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):h(Object(_)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(_,t))}))}return e}var m=function(e){var t=_(4981).ZP;return _(4579),_(2105),(0,c.jsx)(t,p({},e))},E=function(e){(0,s.Z)(_,e);var t=d(_);function _(){var e;(0,o.Z)(this,_);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s)),(0,u.Z)((0,r.Z)(e),"state",{mounted:!1}),(0,u.Z)((0,r.Z)(e),"render",(function(){return e.state.mounted?(0,c.jsx)(m,p({showGutter:!0===e.props.showGutter},e.props)):null})),e}return(0,n.Z)(_,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}}]),_}(l.Component);t.Z=E},3841:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_AceEditor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1914),_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3228),_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__),util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9539),util__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__),auto_bind__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1042),auto_bind__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_3__),next_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1163),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5893);function CodeSandbox(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_=t[0],o=t[1],n=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),r=n.query.code,s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(n.query.hasOwnProperty(e.codeQueryParam)?n.query[e.codeQueryParam]:e.value||""),a=s[0],i=s[1],u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0===e.disableAutoRun?null:getOutput(a,e.consoleMode)),l=u[0],c=u[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){r&&i(r)}),[r]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sandbox,children:["string"==typeof _?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["share-popup"],children:["Your Sharing URL:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().url,href:_,children:"Right Click and Copy This Link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close,onClick:function(){o(null)},children:"\u274c"})]}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["main-title"],children:[!0===e.disableAutoRun?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Run",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){c(getOutput(a,e.consoleMode))},children:"\u25b6"}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode,children:["JavaScript ",!0===e.consoleMode?"Terminal":"Evaluator"]}),!0===e.readOnly?" (Read Only)":null,!0!==e.noReset?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Reset",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){i("")},children:"\u274c"}):null,1==e.hasOwnProperty("codeQueryParam")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Share",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){o("".concat(n.basePath,"/rpg/editor?").concat(e.codeQueryParam,"=").concat(encodeURIComponent(a)))},children:"\u2601\ufe0f"})}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("noscript",{children:"Please Enable JavaScript"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title,children:"Code Input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode,children:!0===e.consoleMode?"Console":"Output"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inner,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{width:"50%",maxLines:1/0,className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"],height:"auto",mode:"javascript",theme:"ambiance",readOnly:!0===e.readOnly,value:a,onChange:function(t){i(t),!0!==e.disableAutoRun&&c(getOutput(t,e.consoleMode))}}),null===l?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Run the program to see your output"}):l]})]})}function getOutput(e,t){return e.length>0?!0===t?getConsoleOutput(e):getEvalOutput(e):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Type something to see the evaluated output"})}function getConsoleOutput(code){var oldLog=console.log,logOutput=[];console.log=function(){for(var e=arguments.length,t=new Array(e),_=0;_<e;_++)t[_]=arguments[_];t.length>1?logOutput.push(t):logOutput.push(t[0])};try{return eval(code),console.log=oldLog,logOutput.length<1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Try logging something to the console to see some output"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().valid,width:"50%",height:"100%",mode:"javascript",theme:"ambiance",readOnly:!0,value:logOutput.map((function(e){return(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(e)})).join(";\n")})}catch(err){return console.log=oldLog,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error,children:(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)})}}function getEvalOutput(code){try{var output=eval(code),outputSource=(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(output);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"output valid",width:"50%",height:"100%",mode:"javascript",theme:"ambiance",readOnly:!0,value:outputSource})}catch(err){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error,children:(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)})}}__webpack_exports__.Z=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(CodeSandbox)},9734:function(e,t,_){"use strict";_.d(t,{Z:function(){return d}});var o=_(4942);var n=_(181);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var _=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=_){var o,n,r=[],s=!0,a=!1;try{for(_=_.call(e);!(s=(o=_.next()).done)&&(r.push(o.value),!t||r.length!==t);s=!0);}catch(i){a=!0,n=i}finally{try{s||null==_.return||_.return()}finally{if(a)throw n}}return r}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=_(6109),a=_.n(s),i=_(5893);function u(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),_.push.apply(_,o)}return _}function l(e){for(var t=1;t<arguments.length;t++){var _=null!=arguments[t]?arguments[t]:{};t%2?u(Object(_),!0).forEach((function(t){(0,o.Z)(e,t,_[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):u(Object(_)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(_,t))}))}return e}var c=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=e.url,_=e.query,o=void 0===_?{}:_;if(e.hasOwnProperty("query")&&("object"!=typeof o||null===o||Object.keys(o).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof t)return console.warn(new Error("Expected a video url")),null;if(o.autoplay=1,!c.test(t))throw new Error("This url is invalid");var n="https://www.youtube.com/embed/"+t+"?"+Object.entries(o).map((function(e){var t=r(e,2),_=t[0],o=t[1];return"".concat(_,"=").concat(encodeURIComponent(o))})).join("&"),s=l({},e);return delete s.url,delete s.children,(0,i.jsx)("div",l(l({},s),{},{className:a()["youtube-container"],children:(0,i.jsx)("iframe",{src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(n,"><img src=").concat(e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")," alt='Youtube Video'><span>\u25b6</span></a>")})}))}()}},9563:function(e,t,_){"use strict";_.r(t);var o=_(1664),n=_(3841),r=_(2962),s=_(9734),a=_(5893);t.default=function(){return(0,a.jsxs)("div",{className:"communication",children:[(0,a.jsx)(r.PB,{title:"\ud83d\udde3\ufe0f Talking to the Player"}),(0,a.jsx)("h2",{children:"#4.1 \ud83d\udde3\ufe0f Talking to the Player"}),(0,a.jsxs)("span",{className:"intro-card",children:[(0,a.jsx)(s.Z,{url:"7yeA7a0uS3A",query:{start:29},thumbnail:"/images/heman-title.jpg"}),"Half-dragon half-tiger sold separately"]}),(0,a.jsx)("p",{children:"Now that we've laid out the basics, let's apply ourselves and have some fun \ud83d\ude0a Before you build your RPG we first must learn how to get input and send messages to the player. There's no use in coding an adventure if there's no way to interact with it."}),(0,a.jsxs)("div",{className:"comments",children:[(0,a.jsx)("h2",{children:"Comments"}),(0,a.jsxs)("p",{children:['Comments allow us to write things in our code that is purely for notation (like writing notes in your math). Anything in the same line that comes after "//" will not be used while your code is running.',(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"We can use comments for things like add a TODO message so you can come back to add something later, or we can use it to help explain how our code works."]}),(0,a.jsx)(n.Z,{value:"alert('aesop rock is awesome')\n// This part doesn't have to be valid JavaScript code",consoleMode:!0,disableAutoRun:!0,className:"mini"})]}),(0,a.jsxs)("div",{className:"js-io",children:[(0,a.jsx)("h2",{children:"Input/Output for Communicating with the Player"}),(0,a.jsx)("p",{children:"While modifying the content of a webpage (done via HTML) is outside of the scope of this project, we can still communicate with the player from inside JavaScript! We can do this using the prompt and alert functions. I've disabled auto-running so it won't spam you with prompts, but from now on you must manually run the code. Try running the examples below:"}),(0,a.jsx)("h3",{children:"Output: Alert"}),(0,a.jsx)(n.Z,{value:"alert('Your princess is in another castle')",consoleMode:!0,disableAutoRun:!0,className:"mini"}),(0,a.jsx)("h3",{children:"Input: Prompt"}),(0,a.jsx)("p",{children:"We can ask a user for input and save it to a variable to use it later"}),(0,a.jsx)(n.Z,{value:"var user = prompt('What is your name?')\nalert('Wishing ' + user + ' good fortune \ud83d\udcb0')",consoleMode:!0,disableAutoRun:!0,className:"mini"}),(0,a.jsx)("p",{children:"Note: In normal web development the use of the alert and prompt functions is discouraged. This is because creating dialogue inside of the page (using HTML) rather than inside of the browsers pop-up boxes is less jarring."})]}),(0,a.jsxs)("div",{className:"flow-control",children:[(0,a.jsx)("h2",{children:"Flow Control"}),(0,a.jsxs)("p",{children:['Flow control allows us to establish branching choices in our logic model using boolean logic. You might say something along the lines of "if x is true then do y, or else do z". It allows us to create flexible code that chooses the appropriate path to take in order to properly complete the task. You can read more about flow control'," ",(0,a.jsx)("a",{href:"https://exploringjs.com/impatient-js/ch_control-flow.html",children:"here."})]}),(0,a.jsx)("h3",{children:"if/else"}),(0,a.jsx)("p",{children:"You can use combinations of if and else to make powerful decision making models. Here we have an example of doing something based on the user's input"}),(0,a.jsx)(n.Z,{value:'// Notice that any spaces or uppercases will cause the equality to fail, so "YES" will give the wrong result\nif(prompt("Do you like oatmeal raisin cookies?") === "yes") { \n    alert("You have good taste in \ud83c\udf6a")\n} else { // They entered anything besides exactly "yes"\n    alert("Maybe \ud83c\udf6a just aren\'t your thing?")\n}',consoleMode:!0,disableAutoRun:!0,className:"short"}),(0,a.jsx)("p",{children:"We can also chain multiple ifs together to have multiple outcomes"}),(0,a.jsx)(n.Z,{value:'var favoriteCookie = prompt("What\'s your favorite kind of cookie?")\nif(favoriteCookie === "oatmeal" || favoriteCookie === "oatmeal raisin") { \n    alert("You have good taste in \ud83c\udf6a")\n} else if (favoriteCookie === "chocolate chip") {\n    alert("Chocolate chip is the second best cookie so that\'s understandable")\n} else {\n    alert("Maybe \ud83c\udf6a just aren\'t your thing?")\n}',consoleMode:!0,disableAutoRun:!0,className:"short"}),(0,a.jsx)("h3",{children:"while"}),(0,a.jsx)("p",{children:"You can use the while loop to keep doing something until the boolean expression returns false. Look here how we can repeatedly ask the user for their name until they return a valid name (if a name is missing it is invalid, if the user exits the prompt the prompt it returns null so we must retry)."}),(0,a.jsx)(n.Z,{disableAutoRun:!0,consoleMode:!0,value:'var name\nwhile(!name) {\n    name = prompt("What is your name adventurer?")\n}\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")',className:"short"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Better text Handling"}),(0,a.jsx)("p",{children:"I've created this function to help you ensure you receive valid input. Strings provide .trim(...) function to remove all spaces from the beginning and end. Here we check that the trimmed string is at least 1 character long (meaning that there's at least 1 non-space character). Then we return the trimmed string as we probably don't care about them and it can make it harder to match strings later (for example \"yes \" === \"yes\" will return false, but if we trim the text we don't have this problem)"}),(0,a.jsx)(n.Z,{disableAutoRun:!0,consoleMode:!0,value:'function smartPrompt(question) {\n    var output = null\n    while(output === null || output.trim().length < 1) {\n        output = prompt(question)\n    }\n    return output.trim()\n}\n\nvar name = smartPrompt("What is your name adventurer?")\n\nalert("You wake up on a strange beach. \'" + name + "\' is written on the inside of your shirt.")'}),(0,a.jsx)("p",{children:"Here we combine the .toLowerCase function (it's available to all strings) and our smartPrompt function. Notice how when we run it it still recognizes a yes input even if it has whitespace around it or isn't lowercase."}),(0,a.jsx)(n.Z,{value:'function smartPrompt(question) {\n    var output = null\n    while(output === null || output.trim().length < 1) {\n        output = prompt(question)\n    }\n    return output.trim()\n}\n// Now it accepts "  yes  ", "YES", "  yEs   ", etc\nif(smartPrompt("Do you like oatmeal raisin cookies?").toLowerCase() === "yes") { \n    alert("You have good taste in \ud83c\udf6a")\n} else {\n    alert("Maybe \ud83c\udf6a just aren\'t your thing?")\n}',consoleMode:!0,disableAutoRun:!0})]}),(0,a.jsx)(o.default,{href:"/rpg/publishing",children:(0,a.jsx)("a",{className:"next",children:"Next: #4.2 \ud83c\udfc6 Sharing your RPG"})})]})}},1609:function(e,t,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rpg/communication",function(){return _(9563)}])},3228:function(e){e.exports={sandbox:"CodeSandbox_sandbox__2U_Dq",icon:"CodeSandbox_icon__2Q2jQ","ace-editor":"CodeSandbox_ace-editor__3Roms","share-popup":"CodeSandbox_share-popup__1OqMz",close:"CodeSandbox_close__2EM2w",titles:"CodeSandbox_titles__3trrU",mode:"CodeSandbox_mode__7YG5U","main-title":"CodeSandbox_main-title__2fKfR",inner:"CodeSandbox_inner__Mzt0O",output:"CodeSandbox_output__36WQT",valid:"CodeSandbox_valid__WaZPf",error:"CodeSandbox_error__2GZg4"}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},907:function(e,t,_){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var _=0,o=new Array(t);_<t;_++)o[_]=e[_];return o}_.d(t,{Z:function(){return o}})},181:function(e,t,_){"use strict";_.d(t,{Z:function(){return n}});var o=_(907);function n(e,t){if(e){if("string"===typeof e)return(0,o.Z)(e,t);var _=Object.prototype.toString.call(e).slice(8,-1);return"Object"===_&&e.constructor&&(_=e.constructor.name),"Map"===_||"Set"===_?Array.from(e):"Arguments"===_||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)?(0,o.Z)(e,t):void 0}}}},function(e){e.O(0,[281,970,504,389,774,888,179],(function(){return t=1609,e(e.s=t);var t}));var t=e.O();_N_E=t}]);