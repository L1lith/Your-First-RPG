webpackHotUpdate("static/development/pages/coding/text-rpg.js",{

/***/ "./pages/coding/text-rpg.js":
/*!**********************************!*\
  !*** ./pages/coding/text-rpg.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CodeSandbox */ "./components/CodeSandbox.js");
var _jsxFileName = "/Users/lilith/projects/intro-coding-concepts/pages/coding/text-rpg.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logic-models",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "#3.3 Your first RPG \u2694\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "intro-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "youtube-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/7yeA7a0uS3A?start=29",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), "Half-dragon half-tiger sold separately"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Now that we've laid out the basics, let's apply ourselves and have some fun \uD83D\uDE0A To complete your introduction to coding you will build your own text-based RPG. Before we do that though we must learn a few more features, then we can get started."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "js-io",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Basic Website Input/Output"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "While modifying the content of a webpage (done via HTML) is outside of the scope of this project, we can still communicate with the user from inside JavaScript! We can do this using the prompt and alert functions. I've disabled auto-running so it won't spam you with prompts, but from now on you must manually run the code. Try running the examples below:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Output: Alert"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    readOnly: true,
    value: "alert('Your princess is in another castle')",
    consoleMode: true,
    disableAutoRun: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Input: Prompt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "We can ask a user for input and save it to a variable to use it later"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    readOnly: true,
    value: "var user = prompt('What is your name?')\nalert('Wishing ' + user + ' good fortune 💰')",
    consoleMode: true,
    disableAutoRun: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flow-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Flow Control"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Flow control allows us to establish branching choices in our logic model using boolean logic. You might say something along the lines of \"if x is true then do y, or else do z\". It allows us to create flexible code that chooses the appropriate path to take in order to properly complete the task. You can read more about flow control", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://exploringjs.com/impatient-js/ch_control-flow.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "here.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "if/else"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "You can use combinations of if and else to make powerful decision making models. Here we have an example of doing something")));
});

/***/ })

})
//# sourceMappingURL=text-rpg.js.2c7c3381e94aecac2d30.hot-update.js.map