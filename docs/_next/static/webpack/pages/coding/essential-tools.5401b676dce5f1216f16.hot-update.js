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
/* harmony import */ var _components_YTVideo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/YTVideo */ "./components/YTVideo.js");






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
          lineNumber: 15,
          columnNumber: 7
        }
      }, __jsx("span", {
        className: "app-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, "\uD83C\uDF4E Accounting"), __jsx("span", {
        className: "balance",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
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
          lineNumber: 21,
          columnNumber: 13
        }
      }, "View your Balance")), __jsx("span", {
        className: "info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
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
      lineNumber: 41,
      columnNumber: 3
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_9__["NextSeo"], {
    title: "#3.2 Essential Tools",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx("h1", {
    className: "title",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "#3.2 Essential Tools \uD83D\uDD28"), __jsx("span", {
    className: "intro-card",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_components_YTVideo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    url: "himmatLe7aQ?start=32",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), "How do you swallow a coding lesson? One byte at a time"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "You probably have a lot of information in your head from the last section, try to do your best to connect that information with the upcoming tasks. In this section we will be learning some tools \uD83D\uDD28 to help us build logic models in JavaScript more effectively. Once you finish this section you will know basic coding! If you feel overwhelmed consider taking a break.", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), "We will also be using something called \"console output\" in our editors, so you'll be seeing some things that say \"console.log(...)\", and our program output will be whatever is inside the parenthesis."), __jsx("div", {
    className: "variables",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Variables"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "We can create variables in order to store (save) data values for later use. In a basic logic model where we only have inputs and outputs it becomes incredibly difficult to deal with data that persists (needs to be stored). Let's say you're writing a checking account app, but you're not allowed to save any data. The user might see a notification saying \"You just spent $10.52\", and yet every time they open the app they're greeted with this (try using the app)"), __jsx(ShittyChecking, {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "Sounds... wonderful. Instead of doing this we store variables in our memory (or in this case the computer's memory) by names, and then retrieve or modify them later.", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), "Here we name a variable called balance (note we do not give it any value yet so it defaults to undefined)"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mini",
    value: 'var balance\nconsole.log(balance)',
    consoleMode: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "We can set a value using the assignment operator \"=\" and providing a value after it, and once we have done this we can see our variable has a value now :)"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mini",
    value: 'var balance = 14.24\nconsole.log(balance)',
    consoleMode: true,
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "functions",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "Functions"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "Functions let you section off individual logic models that serve as a utility. Functions have a name, a set of inputs, a code section, and an output. You can re-use your function multiple times with different inputs. Functions use parenthesis to create their inputs, and later after they've been created we use parenthesis again to call it (calling a function means to run it). The \"console.log\" part of our code is an example of a function (in this case to output some data). It's called with parenthesis and is provided with the input of what we want to output (which in the previous example was the balance variable's current value)."), __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Addition Function"), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "While this function is mostly redundant, you could easily make a function to add two numbers together."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: 'function add(a, b){\n    return a + b\n}',
    className: "short",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, "The output is empty because we didn't log anything to the console.")), __jsx("div", {
    className: "console",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "More about the Console"), "On the previous page I was using the \"JavaScript Expression Evaluator\". On the right you would see what output of the JS interpreter evaluating the code on the left side. Normally when we're programming we are running our code from a terminal, and we see the output of the console.log function in real-time instead of seeing the output of the JS evaluation. We only need to output things to console.log when we as the developer (or coder) want to know what their values are."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: 'function add(a, b){\n    return a + b\n}\nconsole.log(add(14, 16))',
    className: "short",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "parenthesis",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "Parenthesis"), "Not only can you use parenthesis to change the ordering of math expressions, but you can also use parenthesis to change the ordering of any other kind of expression. Here are some example of changing the order of code evaluation using parenthesis for math and non-math purposes.", __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, "Math Without Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(10 * 3 + 4)",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, "Math With Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(10 * (3 + 4))",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, "Boolean logic without Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(false && true || true)",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, "Boolean logic with Parenthesis"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    consoleMode: true,
    value: "console.log(false && (true || true))",
    className: "mini",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  })), __jsx("br", {
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "next",
    __self: _this3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, "Next:: Building your Text RPG")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29kaW5nL2Vzc2VudGlhbC10b29scy5qcyJdLCJuYW1lcyI6WyJTaGl0dHlDaGVja2luZyIsInByb3BzIiwic3RhdGUiLCJvcGVuZWQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGM7Ozs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBYjtBQUZpQjtBQUdsQjs7OztXQUNELGtCQUFTO0FBQUE7O0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLEVBRUU7QUFBTSxpQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLRCxLQUFMLENBQVdDLE1BQVgsS0FBc0IsSUFBdEIsR0FDQyxzQkFERCxHQUdDO0FBQ0UsZUFBTyxFQUFFLG1CQUFNO0FBQ2IsZ0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVELGtCQUFNLEVBQUU7QUFBVixXQUFkO0FBQ0QsU0FISDtBQUlFLGlCQUFTLEVBQUMsT0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpKLENBRkYsRUFlRTtBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUtELEtBQUwsQ0FBV0MsTUFBWCxLQUFzQixJQUF0QixHQUNHLElBREgsR0FFRyx1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QUEsSUF4R0YsRUEwR0k7QUFBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakhFLElBbUhFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLENBbkhGLENBRGE7QUFBQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvZGluZy9lc3NlbnRpYWwtdG9vbHMuNTQwMWI2NzZkY2U1ZjEyMTZmMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvZGVTYW5kYm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVNhbmRib3gnXHJcbmltcG9ydCAnLi9lc3NlbnRpYWwtdG9vbHMuc2NzcydcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IFlUVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ZVFZpZGVvJ1xyXG5cclxuY2xhc3MgU2hpdHR5Q2hlY2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNraW5nLWV4YW1wbGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcHAtdGl0bGVcIj7wn42OIEFjY291bnRpbmc8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFsYW5jZVwiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUub3BlbmVkID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAnQmFsYW5jZTogVW5hdmFpbGFibGUnXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZW50ZXJcIj5cclxuICAgICAgICAgICAgICBWaWV3IHlvdXIgQmFsYW5jZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm9wZW5lZCAhPT0gdHJ1ZVxyXG4gICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgOiAnUGxlYXNlIGNsb3NlIHRoZSBhcHAgYW5kIHdhaXQgZm9yIHlvdXIgbmV4dCB0cmFuc2FjdGlvbiBub3RpZmljYXRpb24uJ31cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXNzZW50aWFsLXRvb2xzXCI+XHJcbiAgICA8TmV4dFNlbyB0aXRsZT1cIiMzLjIgRXNzZW50aWFsIFRvb2xzXCIgLz5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPiMzLjIgRXNzZW50aWFsIFRvb2xzIPCflKg8L2gxPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiaW50cm8tY2FyZFwiPlxyXG4gICAgICA8WVRWaWRlbyB1cmw9XCJoaW1tYXRMZTdhUT9zdGFydD0zMlwiIC8+XHJcbiAgICAgIEhvdyBkbyB5b3Ugc3dhbGxvdyBhIGNvZGluZyBsZXNzb24/IE9uZSBieXRlIGF0IGEgdGltZVxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHA+XHJcbiAgICAgIFlvdSBwcm9iYWJseSBoYXZlIGEgbG90IG9mIGluZm9ybWF0aW9uIGluIHlvdXIgaGVhZCBmcm9tIHRoZSBsYXN0IHNlY3Rpb24sIHRyeSB0byBkbyB5b3VyIGJlc3RcclxuICAgICAgdG8gY29ubmVjdCB0aGF0IGluZm9ybWF0aW9uIHdpdGggdGhlIHVwY29taW5nIHRhc2tzLiBJbiB0aGlzIHNlY3Rpb24gd2Ugd2lsbCBiZSBsZWFybmluZyBzb21lXHJcbiAgICAgIHRvb2xzIPCflKggdG8gaGVscCB1cyBidWlsZCBsb2dpYyBtb2RlbHMgaW4gSmF2YVNjcmlwdCBtb3JlIGVmZmVjdGl2ZWx5LiBPbmNlIHlvdSBmaW5pc2ggdGhpc1xyXG4gICAgICBzZWN0aW9uIHlvdSB3aWxsIGtub3cgYmFzaWMgY29kaW5nISBJZiB5b3UgZmVlbCBvdmVyd2hlbG1lZCBjb25zaWRlciB0YWtpbmcgYSBicmVhay5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICBXZSB3aWxsIGFsc28gYmUgdXNpbmcgc29tZXRoaW5nIGNhbGxlZCBcImNvbnNvbGUgb3V0cHV0XCIgaW4gb3VyIGVkaXRvcnMsIHNvIHlvdSdsbCBiZSBzZWVpbmdcclxuICAgICAgc29tZSB0aGluZ3MgdGhhdCBzYXkgXCJjb25zb2xlLmxvZyguLi4pXCIsIGFuZCBvdXIgcHJvZ3JhbSBvdXRwdXQgd2lsbCBiZSB3aGF0ZXZlciBpcyBpbnNpZGUgdGhlXHJcbiAgICAgIHBhcmVudGhlc2lzLlxyXG4gICAgPC9wPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2YXJpYWJsZXNcIj5cclxuICAgICAgPGgyPlZhcmlhYmxlczwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFdlIGNhbiBjcmVhdGUgdmFyaWFibGVzIGluIG9yZGVyIHRvIHN0b3JlIChzYXZlKSBkYXRhIHZhbHVlcyBmb3IgbGF0ZXIgdXNlLiBJbiBhIGJhc2ljIGxvZ2ljXHJcbiAgICAgICAgbW9kZWwgd2hlcmUgd2Ugb25seSBoYXZlIGlucHV0cyBhbmQgb3V0cHV0cyBpdCBiZWNvbWVzIGluY3JlZGlibHkgZGlmZmljdWx0IHRvIGRlYWwgd2l0aFxyXG4gICAgICAgIGRhdGEgdGhhdCBwZXJzaXN0cyAobmVlZHMgdG8gYmUgc3RvcmVkKS4gTGV0J3Mgc2F5IHlvdSdyZSB3cml0aW5nIGEgY2hlY2tpbmcgYWNjb3VudCBhcHAsXHJcbiAgICAgICAgYnV0IHlvdSdyZSBub3QgYWxsb3dlZCB0byBzYXZlIGFueSBkYXRhLiBUaGUgdXNlciBtaWdodCBzZWUgYSBub3RpZmljYXRpb24gc2F5aW5nIFwiWW91IGp1c3RcclxuICAgICAgICBzcGVudCAkMTAuNTJcIiwgYW5kIHlldCBldmVyeSB0aW1lIHRoZXkgb3BlbiB0aGUgYXBwIHRoZXkncmUgZ3JlZXRlZCB3aXRoIHRoaXMgKHRyeSB1c2luZyB0aGVcclxuICAgICAgICBhcHApXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxTaGl0dHlDaGVja2luZyAvPlxyXG5cclxuICAgICAgPHA+XHJcbiAgICAgICAgU291bmRzLi4uIHdvbmRlcmZ1bC4gSW5zdGVhZCBvZiBkb2luZyB0aGlzIHdlIHN0b3JlIHZhcmlhYmxlcyBpbiBvdXIgbWVtb3J5IChvciBpbiB0aGlzIGNhc2VcclxuICAgICAgICB0aGUgY29tcHV0ZXIncyBtZW1vcnkpIGJ5IG5hbWVzLCBhbmQgdGhlbiByZXRyaWV2ZSBvciBtb2RpZnkgdGhlbSBsYXRlci5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICBIZXJlIHdlIG5hbWUgYSB2YXJpYWJsZSBjYWxsZWQgYmFsYW5jZSAobm90ZSB3ZSBkbyBub3QgZ2l2ZSBpdCBhbnkgdmFsdWUgeWV0IHNvIGl0IGRlZmF1bHRzXHJcbiAgICAgICAgdG8gdW5kZWZpbmVkKVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCBjbGFzc05hbWU9XCJtaW5pXCIgdmFsdWU9eyd2YXIgYmFsYW5jZVxcbmNvbnNvbGUubG9nKGJhbGFuY2UpJ30gY29uc29sZU1vZGUgLz5cclxuICAgICAgPHA+XHJcbiAgICAgICAgV2UgY2FuIHNldCBhIHZhbHVlIHVzaW5nIHRoZSBhc3NpZ25tZW50IG9wZXJhdG9yIFwiPVwiIGFuZCBwcm92aWRpbmcgYSB2YWx1ZSBhZnRlciBpdCwgYW5kXHJcbiAgICAgICAgb25jZSB3ZSBoYXZlIGRvbmUgdGhpcyB3ZSBjYW4gc2VlIG91ciB2YXJpYWJsZSBoYXMgYSB2YWx1ZSBub3cgOilcclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3hcclxuICAgICAgICBjbGFzc05hbWU9XCJtaW5pXCJcclxuICAgICAgICB2YWx1ZT17J3ZhciBiYWxhbmNlID0gMTQuMjRcXG5jb25zb2xlLmxvZyhiYWxhbmNlKSd9XHJcbiAgICAgICAgY29uc29sZU1vZGVcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmdW5jdGlvbnNcIj5cclxuICAgICAgPGgyPkZ1bmN0aW9uczwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEZ1bmN0aW9ucyBsZXQgeW91IHNlY3Rpb24gb2ZmIGluZGl2aWR1YWwgbG9naWMgbW9kZWxzIHRoYXQgc2VydmUgYXMgYSB1dGlsaXR5LiBGdW5jdGlvbnNcclxuICAgICAgICBoYXZlIGEgbmFtZSwgYSBzZXQgb2YgaW5wdXRzLCBhIGNvZGUgc2VjdGlvbiwgYW5kIGFuIG91dHB1dC4gWW91IGNhbiByZS11c2UgeW91ciBmdW5jdGlvblxyXG4gICAgICAgIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IGlucHV0cy4gRnVuY3Rpb25zIHVzZSBwYXJlbnRoZXNpcyB0byBjcmVhdGUgdGhlaXIgaW5wdXRzLCBhbmRcclxuICAgICAgICBsYXRlciBhZnRlciB0aGV5J3ZlIGJlZW4gY3JlYXRlZCB3ZSB1c2UgcGFyZW50aGVzaXMgYWdhaW4gdG8gY2FsbCBpdCAoY2FsbGluZyBhIGZ1bmN0aW9uXHJcbiAgICAgICAgbWVhbnMgdG8gcnVuIGl0KS4gVGhlIFwiY29uc29sZS5sb2dcIiBwYXJ0IG9mIG91ciBjb2RlIGlzIGFuIGV4YW1wbGUgb2YgYSBmdW5jdGlvbiAoaW4gdGhpc1xyXG4gICAgICAgIGNhc2UgdG8gb3V0cHV0IHNvbWUgZGF0YSkuIEl0J3MgY2FsbGVkIHdpdGggcGFyZW50aGVzaXMgYW5kIGlzIHByb3ZpZGVkIHdpdGggdGhlIGlucHV0IG9mXHJcbiAgICAgICAgd2hhdCB3ZSB3YW50IHRvIG91dHB1dCAod2hpY2ggaW4gdGhlIHByZXZpb3VzIGV4YW1wbGUgd2FzIHRoZSBiYWxhbmNlIHZhcmlhYmxlJ3MgY3VycmVudFxyXG4gICAgICAgIHZhbHVlKS5cclxuICAgICAgPC9wPlxyXG4gICAgICA8aDI+QWRkaXRpb24gRnVuY3Rpb248L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBXaGlsZSB0aGlzIGZ1bmN0aW9uIGlzIG1vc3RseSByZWR1bmRhbnQsIHlvdSBjb3VsZCBlYXNpbHkgbWFrZSBhIGZ1bmN0aW9uIHRvIGFkZCB0d28gbnVtYmVyc1xyXG4gICAgICAgIHRvZ2V0aGVyLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveFxyXG4gICAgICAgIGNvbnNvbGVNb2RlXHJcbiAgICAgICAgdmFsdWU9eydmdW5jdGlvbiBhZGQoYSwgYil7XFxuICAgIHJldHVybiBhICsgYlxcbn0nfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNob3J0XCJcclxuICAgICAgLz5cclxuICAgICAgPHA+VGhlIG91dHB1dCBpcyBlbXB0eSBiZWNhdXNlIHdlIGRpZG4ndCBsb2cgYW55dGhpbmcgdG8gdGhlIGNvbnNvbGUuPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnNvbGVcIj5cclxuICAgICAgPGgyPk1vcmUgYWJvdXQgdGhlIENvbnNvbGU8L2gyPlxyXG4gICAgICBPbiB0aGUgcHJldmlvdXMgcGFnZSBJIHdhcyB1c2luZyB0aGUgXCJKYXZhU2NyaXB0IEV4cHJlc3Npb24gRXZhbHVhdG9yXCIuIE9uIHRoZSByaWdodCB5b3Ugd291bGRcclxuICAgICAgc2VlIHdoYXQgb3V0cHV0IG9mIHRoZSBKUyBpbnRlcnByZXRlciBldmFsdWF0aW5nIHRoZSBjb2RlIG9uIHRoZSBsZWZ0IHNpZGUuIE5vcm1hbGx5IHdoZW5cclxuICAgICAgd2UncmUgcHJvZ3JhbW1pbmcgd2UgYXJlIHJ1bm5pbmcgb3VyIGNvZGUgZnJvbSBhIHRlcm1pbmFsLCBhbmQgd2Ugc2VlIHRoZSBvdXRwdXQgb2YgdGhlXHJcbiAgICAgIGNvbnNvbGUubG9nIGZ1bmN0aW9uIGluIHJlYWwtdGltZSBpbnN0ZWFkIG9mIHNlZWluZyB0aGUgb3V0cHV0IG9mIHRoZSBKUyBldmFsdWF0aW9uLiBXZSBvbmx5XHJcbiAgICAgIG5lZWQgdG8gb3V0cHV0IHRoaW5ncyB0byBjb25zb2xlLmxvZyB3aGVuIHdlIGFzIHRoZSBkZXZlbG9wZXIgKG9yIGNvZGVyKSB3YW50IHRvIGtub3cgd2hhdFxyXG4gICAgICB0aGVpciB2YWx1ZXMgYXJlLlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Q29kZVNhbmRib3hcclxuICAgICAgY29uc29sZU1vZGVcclxuICAgICAgdmFsdWU9eydmdW5jdGlvbiBhZGQoYSwgYil7XFxuICAgIHJldHVybiBhICsgYlxcbn1cXG5jb25zb2xlLmxvZyhhZGQoMTQsIDE2KSknfVxyXG4gICAgICBjbGFzc05hbWU9XCJzaG9ydFwiXHJcbiAgICAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXJlbnRoZXNpc1wiPlxyXG4gICAgICA8aDI+UGFyZW50aGVzaXM8L2gyPlxyXG4gICAgICBOb3Qgb25seSBjYW4geW91IHVzZSBwYXJlbnRoZXNpcyB0byBjaGFuZ2UgdGhlIG9yZGVyaW5nIG9mIG1hdGggZXhwcmVzc2lvbnMsIGJ1dCB5b3UgY2FuIGFsc29cclxuICAgICAgdXNlIHBhcmVudGhlc2lzIHRvIGNoYW5nZSB0aGUgb3JkZXJpbmcgb2YgYW55IG90aGVyIGtpbmQgb2YgZXhwcmVzc2lvbi4gSGVyZSBhcmUgc29tZSBleGFtcGxlXHJcbiAgICAgIG9mIGNoYW5naW5nIHRoZSBvcmRlciBvZiBjb2RlIGV2YWx1YXRpb24gdXNpbmcgcGFyZW50aGVzaXMgZm9yIG1hdGggYW5kIG5vbi1tYXRoIHB1cnBvc2VzLlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxoMz5NYXRoIFdpdGhvdXQgUGFyZW50aGVzaXM8L2gzPlxyXG4gICAgICA8Q29kZVNhbmRib3ggY29uc29sZU1vZGUgdmFsdWU9XCJjb25zb2xlLmxvZygxMCAqIDMgKyA0KVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+TWF0aCBXaXRoIFBhcmVudGhlc2lzPC9oMz5cclxuICAgICAgPENvZGVTYW5kYm94IGNvbnNvbGVNb2RlIHZhbHVlPVwiY29uc29sZS5sb2coMTAgKiAoMyArIDQpKVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+Qm9vbGVhbiBsb2dpYyB3aXRob3V0IFBhcmVudGhlc2lzPC9oMz5cclxuICAgICAgPENvZGVTYW5kYm94IGNvbnNvbGVNb2RlIHZhbHVlPVwiY29uc29sZS5sb2coZmFsc2UgJiYgdHJ1ZSB8fCB0cnVlKVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+Qm9vbGVhbiBsb2dpYyB3aXRoIFBhcmVudGhlc2lzPC9oMz5cclxuICAgICAgPENvZGVTYW5kYm94IGNvbnNvbGVNb2RlIHZhbHVlPVwiY29uc29sZS5sb2coZmFsc2UgJiYgKHRydWUgfHwgdHJ1ZSkpXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxiciAvPlxyXG4gICAge1xyXG4gICAgICBudWxsIC8qPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXNhbmRib3hcIj5cclxuICAgICAgPGgyPlNhbmRib3g8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBUaGlzIGlzIGFuIGV4dHJhIGVkaXRvciB5b3UgY2FuIHVzZSBpbiBjYXNlIHlvdSBoYXZlIHdvcmsgZ29pbmcgb24gaW4gdGhlIGVkaXRvcnMgYW5kIG5lZWRcclxuICAgICAgICBhbiBlbXB0eSBzcGFjZSB0byBjb2RlLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCAvPlxyXG48L2Rpdj4qL1xyXG4gICAgfVxyXG4gICAgPExpbmsgaHJlZj1cIi9ycGdcIj5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibmV4dFwiPk5leHQ6OiBCdWlsZGluZyB5b3VyIFRleHQgUlBHPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvZGl2PlxyXG4pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=