webpackHotUpdate("static/development/pages/coding/building-blocks.js",{

/***/ "./pages/coding/building-blocks.js":
/*!*****************************************!*\
  !*** ./pages/coding/building-blocks.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CodeSandbox */ "./components/CodeSandbox.js");
/* harmony import */ var _building_blocks_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./building-blocks.scss */ "./pages/coding/building-blocks.scss");
/* harmony import */ var _building_blocks_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_building_blocks_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/lilith/projects/intro-coding-concepts/pages/coding/building-blocks.js";






var ShittyChecking =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ShittyChecking, _Component);

  function ShittyChecking(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShittyChecking);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShittyChecking).call(this, props));
    _this.state = {
      opened: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShittyChecking, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "checking-example",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "app-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "\uD83C\uDF4E Accounting"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "balance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, this.state.opened === true ? 'Please close the app and wait for your next transaction notification.' : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            opened: true
          });
        },
        className: "enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "View your Balance")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.state.opened === true ? 'Please close the app and wait for your next transaction notification.' : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: function onClick() {
          _this2.setState({
            opened: true
          });
        },
        className: "enter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "View your Balance")));
    }
  }]);

  return ShittyChecking;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "building-blocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "#3.2 Coding Building Blocks"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "intro-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "youtube-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/fR-A3BNTUN4",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "How do you swallow a coding lesson? One byte at a time"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "You probably have a lot of information in your head from the last section, try to do your best to connect that information with the upcoming tasks. In this section we will be using our primitive data types to build logic models in JavaScript :) Once you finish this section you will know basic coding! If you feel overwhelmed consider taking a break.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), "We will also be using something called \"console output\" in our editors, so you'll be seeing some things that say \"console.log(...)\", and our program output will be whatever is inside the parenthesis."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "variables",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Variables"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "We can create variables in order to store data values for later use. In a basic logic model where we only have inputs and outputs it becomes incredibly difficult to deal with data that persists (needs to be stored). Let's say you're writing a checking account app, but you're not allowed to save any data. The user might see a notification saying \"You just spent $10.52\", and yet every time they open the app they're greeted with this:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ShittyChecking, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Sounds... wonderful. Instead of doing this we store variables in our memory (or in this case the computer's memory) by names, and then retrieve or modify them later.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), "Here we name a variable called balance (note we do not give it any value yet so it defaults to undefined)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: 'var balance\nconsole.log(balance)',
    consoleMode: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "We can set a value using the assignment operator \"=\" and providing a value after it, and once we have done this we can see our variable has a value now :)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: 'var balance = 14.24\nconsole.log(balance)',
    consoleMode: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "functions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Functions"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Functions let you section off individual logic models that serve as a utility. Functions have a name, a set of inputs, a code section, and an output. You can re-use your function multiple times with different inputs. Functions use parenthesis to create their inputs, and later after they've been created we use parenthesis again to call it (calling a function means to run it). The \"console.log\" part of our code is an example of a function (in this case to output some data). It's called with parenthesis and is provided with the input of what we want to output (which in the previous example was the balance variable's current value)."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Addition Function"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "While this function is mostly redundant, you could easily make a function to add two numbers together."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: 'function add(a, b){\n    return a + b\n}',
    className: "short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "The output is undefined because we made a ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "declaration"), " instead of a ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "statement"), ".", ' ')), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "console",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "More about the Console"), "On the previous page I was using the \"JavaScript Expression Evaluator\". On the right you would see what output of the JS interpreter evaluating the code on the left side. Normally when we're programming we are running our code from a terminal, and we see the output of the console.log function in real-time instead of seeing the output of the JS evaluation. We only need to output things to console.log when we as the developer (or coder) want to know what their values are.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), "In this way"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: 'function add(a, b){\n    return a + b\n}\nconsole.log(add(14, 16))',
    className: "short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "parenthesis",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Parenthesis"), "Not only can you use parenthesis to change the ordering of math expressions, but you can also use parenthesis to change the ordering of any other kind of expression. Here are some example of changing the order of code evaluation using parenthesis for math and non-math purposes.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Math Without Parenthesis"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(10 * 3 + 4)",
    className: "short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Math With Parenthesis"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(10 * (3 + 4))",
    className: "short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Boolean logic without Parenthesis"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(false && true || true)",
    className: "short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Boolean logic with Parenthesis"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(false && (true || true))",
    className: "short",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), null
  /*<div className="user-sandbox">
  <h2>Sandbox</h2>
  <p>
  This is an extra editor you can use in case you have work going on in the editors and need
  an empty space to code.
  </p>
  <CodeSandbox />
  </div>*/
  , react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/coding/text-rpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    className: "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Up next: Completing your Basic Coding Mental Models")));
});

/***/ })

})
//# sourceMappingURL=building-blocks.js.a13701a6134442921421.hot-update.js.map