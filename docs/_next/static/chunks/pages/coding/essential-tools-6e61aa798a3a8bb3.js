(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{1914:function(e,t,_){"use strict";var n=_(5671),o=_(3144),s=_(7326),a=_(2531),r=_(245),i=_(1120),l=_(4942),u=_(7294),c=_(5893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var _,n=(0,i.Z)(e);if(t){var o=(0,i.Z)(this).constructor;_=Reflect.construct(n,arguments,o)}else _=n.apply(this,arguments);return(0,r.Z)(this,_)}}function h(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),_.push.apply(_,n)}return _}function E(e){for(var t=1;t<arguments.length;t++){var _=null!=arguments[t]?arguments[t]:{};t%2?h(Object(_),!0).forEach((function(t){(0,l.Z)(e,t,_[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):h(Object(_)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(_,t))}))}return e}var p=function(e){var t=_(4981).ZP;return _(4579),_(2105),(0,c.jsx)(t,E({},e))},m=function(e){(0,a.Z)(_,e);var t=d(_);function _(){var e;(0,n.Z)(this,_);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),(0,l.Z)((0,s.Z)(e),"state",{mounted:!1}),(0,l.Z)((0,s.Z)(e),"render",(function(){return e.state.mounted?(0,c.jsx)(p,E({showGutter:!0===e.props.showGutter},e.props)):null})),e}return(0,o.Z)(_,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}}]),_}(u.Component);t.Z=m},3841:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_AceEditor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1914),_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3228),_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__),util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9539),util__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__),auto_bind__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1042),auto_bind__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_3__),next_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1163),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5893);function CodeSandbox(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_=t[0],n=t[1],o=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),s=o.query.code,a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(o.query.hasOwnProperty(e.codeQueryParam)?o.query[e.codeQueryParam]:e.value||""),r=a[0],i=a[1],l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0===e.disableAutoRun?null:getOutput(r,e.consoleMode)),u=l[0],c=l[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){s&&i(s)}),[s]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sandbox,children:["string"==typeof _?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["share-popup"],children:["Your Sharing URL:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().url,href:_,children:"Right Click and Copy This Link"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close,onClick:function(){n(null)},children:"\u274c"})]}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["main-title"],children:[!0===e.disableAutoRun?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Run",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){c(getOutput(r,e.consoleMode))},children:"\u25b6"}):null,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode,children:["JavaScript ",!0===e.consoleMode?"Terminal":"Evaluator"]}),!0===e.readOnly?" (Read Only)":null,!0!==e.noReset?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Reset",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){i("")},children:"\u274c"}):null,1==e.hasOwnProperty("codeQueryParam")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{title:"Share",className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon,onClick:function(){n("".concat(o.basePath,"/rpg/editor?").concat(e.codeQueryParam,"=").concat(encodeURIComponent(r)))},children:"\u2601\ufe0f"})}):null]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("noscript",{children:"Please Enable JavaScript"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().titles,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title,children:"Code Input"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode,children:!0===e.consoleMode?"Console":"Output"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inner,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{width:"50%",maxLines:1/0,className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"],mode:"javascript",theme:"ambiance",readOnly:!0===e.readOnly,value:r,onChange:function(t){i(t),!0!==e.disableAutoRun&&c(getOutput(t,e.consoleMode))}}),null===u?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Run the program to see your output"}):u]})]})}function getOutput(e,t){return e.length>0?!0===t?getConsoleOutput(e):getEvalOutput(e):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Type something to see the evaluated output"})}function getConsoleOutput(code){var oldLog=console.log,logOutput=[];console.log=function(){for(var e=arguments.length,t=new Array(e),_=0;_<e;_++)t[_]=arguments[_];t.length>1?logOutput.push(t):logOutput.push(t[0])};try{return eval(code),console.log=oldLog,logOutput.length<1?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty,children:"Try logging something to the console to see some output"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{maxLines:1/0,className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"]+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().valid,width:"50%",mode:"javascript",height:"auto",theme:"ambiance",readOnly:!0,value:logOutput.map((function(e){return(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(e)})).join(";\n")})}catch(err){return console.log=oldLog,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error,children:(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)})}}function getEvalOutput(code){try{var output=eval(code),outputSource=(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(output);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AceEditor__WEBPACK_IMPORTED_MODULE_1__.Z,{maxLines:1/0,className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"]+" output valid",width:"50%",mode:"javascript",theme:"ambiance",readOnly:!0,value:outputSource})}catch(err){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output+" "+_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error,children:(0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)})}}__webpack_exports__.Z=(0,next_router__WEBPACK_IMPORTED_MODULE_4__.withRouter)(CodeSandbox)},9734:function(e,t,_){"use strict";_.d(t,{Z:function(){return d}});var n=_(4942);var o=_(181);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var _=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=_){var n,o,s=[],a=!0,r=!1;try{for(_=_.call(e);!(a=(n=_.next()).done)&&(s.push(n.value),!t||s.length!==t);a=!0);}catch(i){r=!0,o=i}finally{try{a||null==_.return||_.return()}finally{if(r)throw o}}return s}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=_(6109),r=_.n(a),i=_(5893);function l(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),_.push.apply(_,n)}return _}function u(e){for(var t=1;t<arguments.length;t++){var _=null!=arguments[t]?arguments[t]:{};t%2?l(Object(_),!0).forEach((function(t){(0,n.Z)(e,t,_[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):l(Object(_)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(_,t))}))}return e}var c=/^[0-9A-Za-z_-]{10}[048AEIMQUYcgkosw]$/i;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{url:url};return function(){var t=e.url,_=e.query,n=void 0===_?{}:_;if(e.hasOwnProperty("query")&&("object"!=typeof n||null===n||Object.keys(n).length<1))throw new Error("Please provide a valid query object");if("string"!==typeof t)return console.warn(new Error("Expected a video url")),null;if(n.autoplay=1,!c.test(t))throw new Error("This url is invalid");var o="https://www.youtube.com/embed/"+t+"?"+Object.entries(n).map((function(e){var t=s(e,2),_=t[0],n=t[1];return"".concat(_,"=").concat(encodeURIComponent(n))})).join("&"),a=u({},e);return delete a.url,delete a.children,(0,i.jsx)("div",u(u({},a),{},{className:r()["youtube-container"]+" youtube-container",children:(0,i.jsx)("iframe",{src:o,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,srcDoc:"<style>*{\n          padding:0;margin:0;overflow:hidden\n          }\n          html,body\n          {\n          height:100%;\n          background-color: black;\n          }\n          img{\n          width:100%;\n          height: 100%;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          }\n          span {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            font: 80px/1.5 sans-serif;\n            color: white;\n            filter: drop-shadow(0 0 5px #000000e6);\n            pointer-events: none;\n            cursor: pointer;\n          }\n          a {\n            display: block;\n          }\n          </style>\n          <a href=".concat(o,">\n          <img src=").concat(e.hasOwnProperty("thumbnail")?e.thumbnail:"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")," alt='Youtube Video'></a><span>\u25b6</span>")})}))}()}},6194:function(e,t,_){"use strict";_.r(t),_.d(t,{default:function(){return d}});var n=_(1664),o=_(3841),s=_(7294),a=_(2962),r=_(9734),i=_(5029),l=_.n(i),u=_(5893);var c=function(){var e=(0,s.useState)(!1),t=e[0],_=e[1];return(0,u.jsxs)("div",{className:l()["checking-example"],children:[(0,u.jsx)("span",{className:l()["app-title"],children:"\ud83c\udf4e Accounting"}),(0,u.jsx)("span",{className:l().balance,children:!0===t?"Balance: Unavailable":(0,u.jsx)("button",{onClick:function(){_(!0)},className:l().enter,children:"View your Balance"})}),(0,u.jsx)("span",{className:l().info,children:!0!==t?null:"Please close the app and wait for your next transaction notification."})]})},d=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(a.PB,{title:"\ud83d\udd28 Essential Tools"}),(0,u.jsx)("h1",{children:"#3.2 \ud83d\udd28 Essential Tools"}),(0,u.jsxs)("span",{children:[(0,u.jsx)(r.Z,{url:"himmatLe7aQ",query:{start:32},thumbnail:"/images/melinda-mae.jpg"}),"How do you swallow a coding lesson? One byte at a time"]}),(0,u.jsxs)("p",{children:["You probably have a lot of information in your head from the last section, try to do your best to connect that information with the upcoming tasks. In this section we will be learning some tools \ud83d\udd28 to help us build logic models in JavaScript more effectively. Once you finish this section you will know basic coding! If you feel overwhelmed consider taking a break.",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),'We will also be using something called "console output" in our editors, so you\'ll be seeing some things that say "console.log(...)", and our program output will be whatever is inside the parenthesis.']}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Variables"}),(0,u.jsx)("p",{children:"We can create variables in order to store (save) data values for later use. In a basic logic model where we only have inputs and outputs it becomes incredibly difficult to deal with data that persists (needs to be saved). Let's say you're writing a checking account app, but you're not allowed to save any data. The user might see a notification saying \"You just spent $10.52\", and yet every time they open the app they're greeted with this (try using the app)"}),(0,u.jsx)(c,{}),(0,u.jsxs)("p",{children:["This would be so annoying! Instead of doing this we store variables in our memory (or in this case the computer's memory) by names, and then retrieve or modify them later.",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"Here we name a variable called balance (note we do not give it any value yet so it defaults to undefined)"]}),(0,u.jsx)(o.Z,{className:"mini",value:"var balance\nconsole.log(balance)",consoleMode:!0}),(0,u.jsx)("p",{children:'We can set a value using the assignment operator "=" and providing a value after it, and once we have done this we can see our variable has a value now :)'}),(0,u.jsx)(o.Z,{className:"mini",value:"var balance = 14.24\nconsole.log(balance)",consoleMode:!0})]}),(0,u.jsxs)("div",{className:"functions",children:[(0,u.jsx)("h2",{children:"Functions"}),(0,u.jsx)("p",{children:"Functions let you section off individual logic models that serve as a utility. Functions have a name, a set of inputs, a code section, and an output. You can re-use your function multiple times with different inputs. Functions use parenthesis to create their inputs, and later after they've been created we use parenthesis again to call it (calling a function means to run it). The \"console.log\" part of our code is an example of a function (in this case to output some data). It's called with parenthesis and is provided with the input of what we want to output (which in the previous example was the balance variable's current value)."}),(0,u.jsx)("h2",{children:"Addition Function"}),(0,u.jsx)("p",{children:"While this function is mostly redundant, you could easily make a function to add two numbers together."}),(0,u.jsx)(o.Z,{consoleMode:!0,value:"function add(a, b){\n    return a + b\n}",className:"short"}),(0,u.jsx)("p",{children:"The output is empty because we didn't log anything to the console."})]}),(0,u.jsxs)("div",{className:"console",children:[(0,u.jsx)("h2",{children:"More about the Console"}),'On the previous page I was using the "JavaScript Expression Evaluator". On the right you would see what output of the JS interpreter evaluating the code on the left side. Normally when we\'re coding we are running our code from a terminal, and we see the output of the console.log function in real-time instead of seeing the output of the JS evaluation. We only need to output things to console.log when we as the developer (or coder) want to know what their values are.']}),(0,u.jsx)(o.Z,{consoleMode:!0,value:"function add(a, b){\n    return a + b\n}\nconsole.log(add(14, 16))",className:"short"}),(0,u.jsxs)("div",{className:"parenthesis",children:[(0,u.jsx)("h2",{children:"Parenthesis"}),"Not only can you use parenthesis to change the ordering of math expressions, but you can also use parenthesis to change the ordering of any other kind of expression. Here are some example of changing the order of code evaluation using parenthesis for math and non-math purposes.",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("h3",{children:"Math Without Parenthesis"}),(0,u.jsx)(o.Z,{consoleMode:!0,value:"console.log(10 * 3 + 4)",className:"mini"}),(0,u.jsx)("h3",{children:"Math With Parenthesis"}),(0,u.jsx)(o.Z,{consoleMode:!0,value:"console.log(10 * (3 + 4))",className:"mini"}),(0,u.jsx)("h3",{children:"Boolean logic without Parenthesis"}),(0,u.jsx)(o.Z,{consoleMode:!0,value:"console.log(false && true || true)",className:"mini"}),(0,u.jsx)("h3",{children:"Boolean logic with Parenthesis"}),(0,u.jsx)(o.Z,{consoleMode:!0,value:"console.log(false && (true || true))",className:"mini"})]}),(0,u.jsx)("br",{}),null,(0,u.jsx)(n.default,{href:"/rpg",children:(0,u.jsx)("a",{className:"next",children:"Next: #4.0 Building your Text RPG"})})]})}},3489:function(e,t,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coding/essential-tools",function(){return _(6194)}])},3228:function(e){e.exports={sandbox:"CodeSandbox_sandbox__2U_Dq",icon:"CodeSandbox_icon__2Q2jQ","ace-editor":"CodeSandbox_ace-editor__3Roms","share-popup":"CodeSandbox_share-popup__1OqMz",close:"CodeSandbox_close__2EM2w",titles:"CodeSandbox_titles__3trrU",mode:"CodeSandbox_mode__7YG5U","main-title":"CodeSandbox_main-title__2fKfR",inner:"CodeSandbox_inner__Mzt0O",output:"CodeSandbox_output__36WQT",valid:"CodeSandbox_valid__WaZPf",error:"CodeSandbox_error__2GZg4"}},5029:function(e){e.exports={"checking-example":"ShittyChecking_checking-example__3TTjk","app-title":"ShittyChecking_app-title__8LD3y",balance:"ShittyChecking_balance__2H3sf",info:"ShittyChecking_info__11wm3"}},6109:function(e){e.exports={"youtube-container":"YTVideo_youtube-container__2yqNy"}},907:function(e,t,_){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var _=0,n=new Array(t);_<t;_++)n[_]=e[_];return n}_.d(t,{Z:function(){return n}})},181:function(e,t,_){"use strict";_.d(t,{Z:function(){return o}});var n=_(907);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var _=Object.prototype.toString.call(e).slice(8,-1);return"Object"===_&&e.constructor&&(_=e.constructor.name),"Map"===_||"Set"===_?Array.from(e):"Arguments"===_||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[281,970,504,389,774,888,179],(function(){return t=3489,e(e.s=t);var t}));var t=e.O();_N_E=t}]);