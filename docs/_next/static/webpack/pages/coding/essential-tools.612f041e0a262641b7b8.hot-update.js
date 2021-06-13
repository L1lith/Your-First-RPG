webpackHotUpdate_N_E("pages/coding/essential-tools",{

/***/ "./pages/coding/essential-tools.js":
/*!*****************************************!*\
  !*** ./pages/coding/essential-tools.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CodeSandbox */ "./components/CodeSandbox.js");
/* harmony import */ var _essential_tools_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./essential-tools.scss */ "./pages/coding/essential-tools.scss");
/* harmony import */ var _essential_tools_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_essential_tools_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");






var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\pages\\coding\\essential-tools.js",
    _this3 = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var ShittyChecking = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ShittyChecking, _Component);

  var _super = _createSuper(ShittyChecking);

  function ShittyChecking(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShittyChecking);

    _this = _super.call(this, props);
    _this.state = {
      opened: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShittyChecking, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "checking-example",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: "app-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, "\uD83C\uDF4E Accounting"), __jsx("span", {
        className: "balance",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, this.state.opened === true ? 'Balance: Unavailable' : __jsx("button", {
        onClick: function onClick() {
          _this2.setState({
            opened: true
          });
        },
        className: "enter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }
      }, "View your Balance")), __jsx("span", {
        className: "info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }, this.state.opened !== true ? null : 'Please close the app and wait for your next transaction notification.'));
    }
  }]);

  return ShittyChecking;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "essential-tools",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_9__["NextSeo"], {
    title: "#3.2 Essential Tools",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx("h1", {
    className: "title",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "#3.2 Essential Tools \uD83D\uDD28"), __jsx("span", {
    className: "intro-card",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "youtube-container",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("iframe", {
    src: "https://www.youtube.com/embed/himmatLe7aQ?start=32",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), "How do you swallow a coding lesson? One byte at a time"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "You probably have a lot of information in your head from the last section, try to do your best to connect that information with the upcoming tasks. In this section we will be learning some tools \uD83D\uDD28 to help us build logic models in JavaScript more effectively. Once you finish this section you will know basic coding! If you feel overwhelmed consider taking a break.", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), "We will also be using something called \"console output\" in our editors, so you'll be seeing some things that say \"console.log(...)\", and our program output will be whatever is inside the parenthesis."), __jsx("div", {
    className: "variables",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "Variables"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "We can create variables in order to store (save) data values for later use. In a basic logic model where we only have inputs and outputs it becomes incredibly difficult to deal with data that persists (needs to be stored). Let's say you're writing a checking account app, but you're not allowed to save any data. The user might see a notification saying \"You just spent $10.52\", and yet every time they open the app they're greeted with this (try using the app)"), __jsx(ShittyChecking, {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Sounds... wonderful. Instead of doing this we store variables in our memory (or in this case the computer's memory) by names, and then retrieve or modify them later.", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), "Here we name a variable called balance (note we do not give it any value yet so it defaults to undefined)"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mini",
    value: 'var balance\nconsole.log(balance)',
    consoleMode: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "We can set a value using the assignment operator \"=\" and providing a value after it, and once we have done this we can see our variable has a value now :)"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mini",
    value: 'var balance = 14.24\nconsole.log(balance)',
    consoleMode: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "functions",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "Functions"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, "Functions let you section off individual logic models that serve as a utility. Functions have a name, a set of inputs, a code section, and an output. You can re-use your function multiple times with different inputs. Functions use parenthesis to create their inputs, and later after they've been created we use parenthesis again to call it (calling a function means to run it). The \"console.log\" part of our code is an example of a function (in this case to output some data). It's called with parenthesis and is provided with the input of what we want to output (which in the previous example was the balance variable's current value)."), __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "Addition Function"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "While this function is mostly redundant, you could easily make a function to add two numbers together."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: 'function add(a, b){\n    return a + b\n}',
    className: "short",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "The output is empty because we didn't log anything to the console.")), __jsx("div", {
    className: "console",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "More about the Console"), "On the previous page I was using the \"JavaScript Expression Evaluator\". On the right you would see what output of the JS interpreter evaluating the code on the left side. Normally when we're programming we are running our code from a terminal, and we see the output of the console.log function in real-time instead of seeing the output of the JS evaluation. We only need to output things to console.log when we as the developer (or coder) want to know what their values are."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: 'function add(a, b){\n    return a + b\n}\nconsole.log(add(14, 16))',
    className: "short",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "parenthesis",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, "Parenthesis"), "Not only can you use parenthesis to change the ordering of math expressions, but you can also use parenthesis to change the ordering of any other kind of expression. Here are some example of changing the order of code evaluation using parenthesis for math and non-math purposes.", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, "Math Without Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(10 * 3 + 4)",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, "Math With Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(10 * (3 + 4))",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, "Boolean logic without Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(false && true || true)",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, "Boolean logic with Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(false && (true || true))",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  })), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }), null
  /*<div className="user-sandbox">
  <h2>Sandbox</h2>
  <p>
  This is an extra editor you can use in case you have work going on in the editors and need
  an empty space to code.
  </p>
  <CodeSandbox />
  </div>*/
  , __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/rpg",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "next",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "Up next: Building your Text RPG")));
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29kaW5nL2Vzc2VudGlhbC10b29scy5qcyJdLCJuYW1lcyI6WyJTaGl0dHlDaGVja2luZyIsInByb3BzIiwic3RhdGUiLCJvcGVuZWQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGM7Ozs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBYjtBQUZpQjtBQUdsQjs7OztXQUNELGtCQUFTO0FBQUE7O0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBTSxpQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsS0FBc0IsSUFBdEIsR0FDQyxzQkFERCxHQUdDO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2IsZ0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELGtCQUFNLEVBQUU7QUFBVixXQUFkO0FBQ0QsU0FISDtBQUlFLGlCQUFTLEVBQUMsT0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpKLENBRkYsRUFlRTtBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUtELEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixJQUF0QixHQUNHLElBREgsR0FFRyx1RUFITixDQWZGLENBREY7QUF1QkQ7Ozs7RUE3QjBCRSwrQzs7QUFnQ2Q7QUFBQSxTQUNiO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVMsU0FBSyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FGRixFQUdFO0FBQU0sYUFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUMsb0RBRE47QUFFRSxTQUFLLEVBQUMsc0JBRlI7QUFHRSxlQUFXLEVBQUMsR0FIZDtBQUlFLFNBQUssRUFBQywwRkFKUjtBQUtFLG1CQUFlLE1BTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLDJEQUhGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnWUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsZ05BZkYsRUEwQkU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdWRBRkYsRUFXRSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4S0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsOEdBYkYsRUFxQkUsTUFBQywrREFBRDtBQUFhLGFBQVMsRUFBQyxNQUF2QjtBQUE4QixTQUFLLEVBQUUsbUNBQXJDO0FBQTBFLGVBQVcsTUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9LQXRCRixFQTBCRSxNQUFDLCtEQUFEO0FBQ0UsYUFBUyxFQUFDLE1BRFo7QUFFRSxTQUFLLEVBQUUsMkNBRlQ7QUFHRSxlQUFXLE1BSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRixDQTFCRixFQTBERTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzb0JBRkYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4R0FiRixFQWlCRSxNQUFDLCtEQUFEO0FBQ0UsZUFBVyxNQURiO0FBRUUsU0FBSyxFQUFFLDBDQUZUO0FBR0UsYUFBUyxFQUFDLE9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQXRCRixDQTFERixFQWtGRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLGllQWxGRixFQTJGRSxNQUFDLCtEQUFEO0FBQ0UsZUFBVyxNQURiO0FBRUUsU0FBSyxFQUFFLG9FQUZUO0FBR0UsYUFBUyxFQUFDLE9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGRixFQWdHRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLDRSQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUEYsRUFRRSxNQUFDLCtEQUFEO0FBQWEsZUFBVyxNQUF4QjtBQUF5QixTQUFLLEVBQUMseUJBQS9CO0FBQXlELGFBQVMsRUFBQyxNQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVRGLEVBVUUsTUFBQywrREFBRDtBQUFhLGVBQVcsTUFBeEI7QUFBeUIsU0FBSyxFQUFDLDJCQUEvQjtBQUEyRCxhQUFTLEVBQUMsTUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FYRixFQVlFLE1BQUMsK0RBQUQ7QUFBYSxlQUFXLE1BQXhCO0FBQXlCLFNBQUssRUFBQyxvQ0FBL0I7QUFBb0UsYUFBUyxFQUFDLE1BQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBYkYsRUFjRSxNQUFDLCtEQUFEO0FBQWEsZUFBVyxNQUF4QjtBQUF5QixTQUFLLEVBQUMsc0NBQS9CO0FBQXNFLGFBQVMsRUFBQyxNQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FoR0YsRUFnSEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhIRixFQWtISTtBQUFLO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6SEUsSUEySEUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsQ0EzSEYsQ0FEYTtBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29kaW5nL2Vzc2VudGlhbC10b29scy42MTJmMDQxZTBhMjYyNjQxYjdiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ29kZVNhbmRib3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2RlU2FuZGJveCdcclxuaW1wb3J0ICcuL2Vzc2VudGlhbC10b29scy5zY3NzJ1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJ1xyXG5cclxuY2xhc3MgU2hpdHR5Q2hlY2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNraW5nLWV4YW1wbGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcHAtdGl0bGVcIj7wn42OIEFjY291bnRpbmc8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFsYW5jZVwiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUub3BlbmVkID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAnQmFsYW5jZTogVW5hdmFpbGFibGUnXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW50ZXJcIj5cclxuICAgICAgICAgICAgICBWaWV3IHlvdXIgQmFsYW5jZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm9wZW5lZCAhPT0gdHJ1ZVxyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiAnUGxlYXNlIGNsb3NlIHRoZSBhcHAgYW5kIHdhaXQgZm9yIHlvdXIgbmV4dCB0cmFuc2FjdGlvbiBub3RpZmljYXRpb24uJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXNzZW50aWFsLXRvb2xzXCI+XHJcbiAgICA8TmV4dFNlbyB0aXRsZT1cIiMzLjIgRXNzZW50aWFsIFRvb2xzXCIgLz5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPiMzLjIgRXNzZW50aWFsIFRvb2xzIPCflKg8L2gxPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiaW50cm8tY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInlvdXR1YmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvaGltbWF0TGU3YVE/c3RhcnQ9MzJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXHJcbiAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBIb3cgZG8geW91IHN3YWxsb3cgYSBjb2RpbmcgbGVzc29uPyBPbmUgYnl0ZSBhdCBhIHRpbWVcclxuICAgIDwvc3Bhbj5cclxuICAgIDxwPlxyXG4gICAgICBZb3UgcHJvYmFibHkgaGF2ZSBhIGxvdCBvZiBpbmZvcm1hdGlvbiBpbiB5b3VyIGhlYWQgZnJvbSB0aGUgbGFzdCBzZWN0aW9uLCB0cnkgdG8gZG8geW91ciBiZXN0XHJcbiAgICAgIHRvIGNvbm5lY3QgdGhhdCBpbmZvcm1hdGlvbiB3aXRoIHRoZSB1cGNvbWluZyB0YXNrcy4gSW4gdGhpcyBzZWN0aW9uIHdlIHdpbGwgYmUgbGVhcm5pbmcgc29tZVxyXG4gICAgICB0b29scyDwn5SoIHRvIGhlbHAgdXMgYnVpbGQgbG9naWMgbW9kZWxzIGluIEphdmFTY3JpcHQgbW9yZSBlZmZlY3RpdmVseS4gT25jZSB5b3UgZmluaXNoIHRoaXNcclxuICAgICAgc2VjdGlvbiB5b3Ugd2lsbCBrbm93IGJhc2ljIGNvZGluZyEgSWYgeW91IGZlZWwgb3ZlcndoZWxtZWQgY29uc2lkZXIgdGFraW5nIGEgYnJlYWsuXHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgV2Ugd2lsbCBhbHNvIGJlIHVzaW5nIHNvbWV0aGluZyBjYWxsZWQgXCJjb25zb2xlIG91dHB1dFwiIGluIG91ciBlZGl0b3JzLCBzbyB5b3UnbGwgYmUgc2VlaW5nXHJcbiAgICAgIHNvbWUgdGhpbmdzIHRoYXQgc2F5IFwiY29uc29sZS5sb2coLi4uKVwiLCBhbmQgb3VyIHByb2dyYW0gb3V0cHV0IHdpbGwgYmUgd2hhdGV2ZXIgaXMgaW5zaWRlIHRoZVxyXG4gICAgICBwYXJlbnRoZXNpcy5cclxuICAgIDwvcD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFibGVzXCI+XHJcbiAgICAgIDxoMj5WYXJpYWJsZXM8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXZSBjYW4gY3JlYXRlIHZhcmlhYmxlcyBpbiBvcmRlciB0byBzdG9yZSAoc2F2ZSkgZGF0YSB2YWx1ZXMgZm9yIGxhdGVyIHVzZS4gSW4gYSBiYXNpYyBsb2dpY1xyXG4gICAgICAgIG1vZGVsIHdoZXJlIHdlIG9ubHkgaGF2ZSBpbnB1dHMgYW5kIG91dHB1dHMgaXQgYmVjb21lcyBpbmNyZWRpYmx5IGRpZmZpY3VsdCB0byBkZWFsIHdpdGhcclxuICAgICAgICBkYXRhIHRoYXQgcGVyc2lzdHMgKG5lZWRzIHRvIGJlIHN0b3JlZCkuIExldCdzIHNheSB5b3UncmUgd3JpdGluZyBhIGNoZWNraW5nIGFjY291bnQgYXBwLFxyXG4gICAgICAgIGJ1dCB5b3UncmUgbm90IGFsbG93ZWQgdG8gc2F2ZSBhbnkgZGF0YS4gVGhlIHVzZXIgbWlnaHQgc2VlIGEgbm90aWZpY2F0aW9uIHNheWluZyBcIllvdSBqdXN0XHJcbiAgICAgICAgc3BlbnQgJDEwLjUyXCIsIGFuZCB5ZXQgZXZlcnkgdGltZSB0aGV5IG9wZW4gdGhlIGFwcCB0aGV5J3JlIGdyZWV0ZWQgd2l0aCB0aGlzICh0cnkgdXNpbmcgdGhlXHJcbiAgICAgICAgYXBwKVxyXG4gICAgICA8L3A+XHJcblxyXG4gICAgICA8U2hpdHR5Q2hlY2tpbmcgLz5cclxuXHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFNvdW5kcy4uLiB3b25kZXJmdWwuIEluc3RlYWQgb2YgZG9pbmcgdGhpcyB3ZSBzdG9yZSB2YXJpYWJsZXMgaW4gb3VyIG1lbW9yeSAob3IgaW4gdGhpcyBjYXNlXHJcbiAgICAgICAgdGhlIGNvbXB1dGVyJ3MgbWVtb3J5KSBieSBuYW1lcywgYW5kIHRoZW4gcmV0cmlldmUgb3IgbW9kaWZ5IHRoZW0gbGF0ZXIuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgSGVyZSB3ZSBuYW1lIGEgdmFyaWFibGUgY2FsbGVkIGJhbGFuY2UgKG5vdGUgd2UgZG8gbm90IGdpdmUgaXQgYW55IHZhbHVlIHlldCBzbyBpdCBkZWZhdWx0c1xyXG4gICAgICAgIHRvIHVuZGVmaW5lZClcclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggY2xhc3NOYW1lPVwibWluaVwiIHZhbHVlPXsndmFyIGJhbGFuY2VcXG5jb25zb2xlLmxvZyhiYWxhbmNlKSd9IGNvbnNvbGVNb2RlIC8+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdlIGNhbiBzZXQgYSB2YWx1ZSB1c2luZyB0aGUgYXNzaWdubWVudCBvcGVyYXRvciBcIj1cIiBhbmQgcHJvdmlkaW5nIGEgdmFsdWUgYWZ0ZXIgaXQsIGFuZFxyXG4gICAgICAgIG9uY2Ugd2UgaGF2ZSBkb25lIHRoaXMgd2UgY2FuIHNlZSBvdXIgdmFyaWFibGUgaGFzIGEgdmFsdWUgbm93IDopXHJcbiAgICAgIDwvcD5cclxuICAgICAgPENvZGVTYW5kYm94XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWluaVwiXHJcbiAgICAgICAgdmFsdWU9eyd2YXIgYmFsYW5jZSA9IDE0LjI0XFxuY29uc29sZS5sb2coYmFsYW5jZSknfVxyXG4gICAgICAgIGNvbnNvbGVNb2RlXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuY3Rpb25zXCI+XHJcbiAgICAgIDxoMj5GdW5jdGlvbnM8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBGdW5jdGlvbnMgbGV0IHlvdSBzZWN0aW9uIG9mZiBpbmRpdmlkdWFsIGxvZ2ljIG1vZGVscyB0aGF0IHNlcnZlIGFzIGEgdXRpbGl0eS4gRnVuY3Rpb25zXHJcbiAgICAgICAgaGF2ZSBhIG5hbWUsIGEgc2V0IG9mIGlucHV0cywgYSBjb2RlIHNlY3Rpb24sIGFuZCBhbiBvdXRwdXQuIFlvdSBjYW4gcmUtdXNlIHlvdXIgZnVuY3Rpb25cclxuICAgICAgICBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBpbnB1dHMuIEZ1bmN0aW9ucyB1c2UgcGFyZW50aGVzaXMgdG8gY3JlYXRlIHRoZWlyIGlucHV0cywgYW5kXHJcbiAgICAgICAgbGF0ZXIgYWZ0ZXIgdGhleSd2ZSBiZWVuIGNyZWF0ZWQgd2UgdXNlIHBhcmVudGhlc2lzIGFnYWluIHRvIGNhbGwgaXQgKGNhbGxpbmcgYSBmdW5jdGlvblxyXG4gICAgICAgIG1lYW5zIHRvIHJ1biBpdCkuIFRoZSBcImNvbnNvbGUubG9nXCIgcGFydCBvZiBvdXIgY29kZSBpcyBhbiBleGFtcGxlIG9mIGEgZnVuY3Rpb24gKGluIHRoaXNcclxuICAgICAgICBjYXNlIHRvIG91dHB1dCBzb21lIGRhdGEpLiBJdCdzIGNhbGxlZCB3aXRoIHBhcmVudGhlc2lzIGFuZCBpcyBwcm92aWRlZCB3aXRoIHRoZSBpbnB1dCBvZlxyXG4gICAgICAgIHdoYXQgd2Ugd2FudCB0byBvdXRwdXQgKHdoaWNoIGluIHRoZSBwcmV2aW91cyBleGFtcGxlIHdhcyB0aGUgYmFsYW5jZSB2YXJpYWJsZSdzIGN1cnJlbnRcclxuICAgICAgICB2YWx1ZSkuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgyPkFkZGl0aW9uIEZ1bmN0aW9uPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2hpbGUgdGhpcyBmdW5jdGlvbiBpcyBtb3N0bHkgcmVkdW5kYW50LCB5b3UgY291bGQgZWFzaWx5IG1ha2UgYSBmdW5jdGlvbiB0byBhZGQgdHdvIG51bWJlcnNcclxuICAgICAgICB0b2dldGhlci5cclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3hcclxuICAgICAgICBjb25zb2xlTW9kZVxyXG4gICAgICAgIHZhbHVlPXsnZnVuY3Rpb24gYWRkKGEsIGIpe1xcbiAgICByZXR1cm4gYSArIGJcXG59J31cclxuICAgICAgICBjbGFzc05hbWU9XCJzaG9ydFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwPlRoZSBvdXRwdXQgaXMgZW1wdHkgYmVjYXVzZSB3ZSBkaWRuJ3QgbG9nIGFueXRoaW5nIHRvIHRoZSBjb25zb2xlLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zb2xlXCI+XHJcbiAgICAgIDxoMj5Nb3JlIGFib3V0IHRoZSBDb25zb2xlPC9oMj5cclxuICAgICAgT24gdGhlIHByZXZpb3VzIHBhZ2UgSSB3YXMgdXNpbmcgdGhlIFwiSmF2YVNjcmlwdCBFeHByZXNzaW9uIEV2YWx1YXRvclwiLiBPbiB0aGUgcmlnaHQgeW91IHdvdWxkXHJcbiAgICAgIHNlZSB3aGF0IG91dHB1dCBvZiB0aGUgSlMgaW50ZXJwcmV0ZXIgZXZhbHVhdGluZyB0aGUgY29kZSBvbiB0aGUgbGVmdCBzaWRlLiBOb3JtYWxseSB3aGVuXHJcbiAgICAgIHdlJ3JlIHByb2dyYW1taW5nIHdlIGFyZSBydW5uaW5nIG91ciBjb2RlIGZyb20gYSB0ZXJtaW5hbCwgYW5kIHdlIHNlZSB0aGUgb3V0cHV0IG9mIHRoZVxyXG4gICAgICBjb25zb2xlLmxvZyBmdW5jdGlvbiBpbiByZWFsLXRpbWUgaW5zdGVhZCBvZiBzZWVpbmcgdGhlIG91dHB1dCBvZiB0aGUgSlMgZXZhbHVhdGlvbi4gV2Ugb25seVxyXG4gICAgICBuZWVkIHRvIG91dHB1dCB0aGluZ3MgdG8gY29uc29sZS5sb2cgd2hlbiB3ZSBhcyB0aGUgZGV2ZWxvcGVyIChvciBjb2Rlcikgd2FudCB0byBrbm93IHdoYXRcclxuICAgICAgdGhlaXIgdmFsdWVzIGFyZS5cclxuICAgIDwvZGl2PlxyXG4gICAgPENvZGVTYW5kYm94XHJcbiAgICAgIGNvbnNvbGVNb2RlXHJcbiAgICAgIHZhbHVlPXsnZnVuY3Rpb24gYWRkKGEsIGIpe1xcbiAgICByZXR1cm4gYSArIGJcXG59XFxuY29uc29sZS5sb2coYWRkKDE0LCAxNikpJ31cclxuICAgICAgY2xhc3NOYW1lPVwic2hvcnRcIlxyXG4gICAgLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50aGVzaXNcIj5cclxuICAgICAgPGgyPlBhcmVudGhlc2lzPC9oMj5cclxuICAgICAgTm90IG9ubHkgY2FuIHlvdSB1c2UgcGFyZW50aGVzaXMgdG8gY2hhbmdlIHRoZSBvcmRlcmluZyBvZiBtYXRoIGV4cHJlc3Npb25zLCBidXQgeW91IGNhbiBhbHNvXHJcbiAgICAgIHVzZSBwYXJlbnRoZXNpcyB0byBjaGFuZ2UgdGhlIG9yZGVyaW5nIG9mIGFueSBvdGhlciBraW5kIG9mIGV4cHJlc3Npb24uIEhlcmUgYXJlIHNvbWUgZXhhbXBsZVxyXG4gICAgICBvZiBjaGFuZ2luZyB0aGUgb3JkZXIgb2YgY29kZSBldmFsdWF0aW9uIHVzaW5nIHBhcmVudGhlc2lzIGZvciBtYXRoIGFuZCBub24tbWF0aCBwdXJwb3Nlcy5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8aDM+TWF0aCBXaXRob3V0IFBhcmVudGhlc2lzPC9oMz5cclxuICAgICAgPENvZGVTYW5kYm94IGNvbnNvbGVNb2RlIHZhbHVlPVwiY29uc29sZS5sb2coMTAgKiAzICsgNClcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPGgzPk1hdGggV2l0aCBQYXJlbnRoZXNpczwvaDM+XHJcbiAgICAgIDxDb2RlU2FuZGJveCBjb25zb2xlTW9kZSB2YWx1ZT1cImNvbnNvbGUubG9nKDEwICogKDMgKyA0KSlcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPGgzPkJvb2xlYW4gbG9naWMgd2l0aG91dCBQYXJlbnRoZXNpczwvaDM+XHJcbiAgICAgIDxDb2RlU2FuZGJveCBjb25zb2xlTW9kZSB2YWx1ZT1cImNvbnNvbGUubG9nKGZhbHNlICYmIHRydWUgfHwgdHJ1ZSlcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPGgzPkJvb2xlYW4gbG9naWMgd2l0aCBQYXJlbnRoZXNpczwvaDM+XHJcbiAgICAgIDxDb2RlU2FuZGJveCBjb25zb2xlTW9kZSB2YWx1ZT1cImNvbnNvbGUubG9nKGZhbHNlICYmICh0cnVlIHx8IHRydWUpKVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnIgLz5cclxuICAgIHtcclxuICAgICAgbnVsbCAvKjxkaXYgY2xhc3NOYW1lPVwidXNlci1zYW5kYm94XCI+XHJcbiAgICAgIDxoMj5TYW5kYm94PC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgVGhpcyBpcyBhbiBleHRyYSBlZGl0b3IgeW91IGNhbiB1c2UgaW4gY2FzZSB5b3UgaGF2ZSB3b3JrIGdvaW5nIG9uIGluIHRoZSBlZGl0b3JzIGFuZCBuZWVkXHJcbiAgICAgICAgYW4gZW1wdHkgc3BhY2UgdG8gY29kZS5cclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggLz5cclxuPC9kaXY+Ki9cclxuICAgIH1cclxuICAgIDxMaW5rIGhyZWY9XCIvcnBnXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5leHRcIj5VcCBuZXh0OiBCdWlsZGluZyB5b3VyIFRleHQgUlBHPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvZGl2PlxyXG4pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=