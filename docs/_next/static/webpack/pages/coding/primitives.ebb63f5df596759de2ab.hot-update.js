webpackHotUpdate_N_E("pages/coding/primitives",{

/***/ "./pages/coding/primitives.js":
/*!************************************!*\
  !*** ./pages/coding/primitives.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CodeSandbox */ "./components/CodeSandbox.js");
/* harmony import */ var _primitives_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./primitives.scss */ "./pages/coding/primitives.scss");
/* harmony import */ var _primitives_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_primitives_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var _components_YTVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/YTVideo */ "./components/YTVideo.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\pages\\coding\\primitives.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "primitives",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__["NextSeo"], {
    title: "#3.1 Primitives",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "#3.1 Primitives: Basic Data Types \uD83D\uDCCA"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), __jsx("span", {
    className: "intro-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_components_YTVideo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: "_4TPlwwHM8Q",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "You can read more", ' ', __jsx("a", {
    href: "https://www.aleksandrhovhannisyan.com/blog/binary-for-beginners/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "here"), " if you'd like to learn about how binary values are converted into more complex data types like strings and numbers.")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "In this section we will upgrade from working with just boolean logic to writing functional JavaScript! Primitives are the basic data types in JavaScript. Here are the basic primitives:"), __jsx("ul", {
    className: "primitives-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Boolean"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Number"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "String"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "undefined"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "null")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "I will now detail each type of data and their operators, then in the next page I will provide some more examples of how they can be used together. Additionally, you can edit the input of all the code examples below (note: if your syntax is invalid you will receive an error instead of your output)"), __jsx("div", {
    className: "type boolean",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "Booleans"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "JavaScript has integrated support for boolean values and boolean operations."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "true",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "false",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Or Operations"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "The or operator is written as \"||\" in JavaScript"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "true || false",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "false || true",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "false || false",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Not Operations"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "The not operator is written as \"!\" in JavaScript"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "!true",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "!false",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "And Operations"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "The and operator is written as \"&&\" in JavaScript"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "true && true",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "true && false",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "false && false",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "type numbers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Numbers"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Numbers can be integers (whole numbers like 33) or floats (short for floating point decimals like 45.512). Some basic operations are adding, multiplication, division, and subtraction. Besides changing the numbers you can also compare them (using symbols like >, <, or \u2265) in order to output boolean values."), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "Addition/Subtraction"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "12 + 12",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "30 - 12",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "Greater than/Less than"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, "The greater than and less than operators return boolean values"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "12 > 10",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "12 < 10",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "5 >= 5",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "6 <= 5",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Multiply/Divide"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "32 * 11",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "4 / 12",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "type strings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Strings"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Strings are collections of text (like someones name, an address, etc). They are written by surrounding the text in single or double quotes."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: '"I like chocolate milk"',
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "'my namea borat'",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, "They can also be added together"), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "'beep' + 'bop'",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "'9' + '10'",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "type undefined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, "undefined"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "The value undefined is used to represent a value that has not been assigned anything else. It's basically the universal placeholder value."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "undefined",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "type null",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "null"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, "The value null is used to represent the value \"nothing\". It's different from undefined in that it is intentionally nothing rather than just being missing a value."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: "null",
    className: "mini",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "equality",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, "Equality"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "To check whether two values are the same we can use the strict equality operator \"===\". This will return true", ' ')), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, "In the next section we'll be using these primitive values so you can see a little bit more why they are useful. You can read in greater detail about JS's data types", ' ', __jsx("a", {
    href: "https://javascript.info/types",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "here")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/coding/essential-tools",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "next",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "Next: Essential Tools")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29kaW5nL3ByaW1pdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZTtBQUFBLFNBQ2I7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLFNBQUssRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBUyxPQUFHLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUNvQixHQURwQixFQUVFO0FBQUcsUUFBSSxFQUFDLGtFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRix5SEFGRixDQUpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnTUFkRixFQWtCRTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0U7QUFB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QUE7QUFBQSxJQU5GLENBcEZGLEVBNEZFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEtBRkYsRUFNRSxNQUFDLCtEQUFEO0FBQWEsU0FBSyxFQUFDLE1BQW5CO0FBQTBCLGFBQVMsRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0E1RkYsRUFvR0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0hBRW1CLEdBRm5CLENBRkYsQ0FwR0YsRUEyR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNHRixFQTRHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZLQUV3RSxHQUZ4RSxFQUdFO0FBQUcsUUFBSSxFQUFDLCtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixDQTVHRixFQWlIRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLHlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FqSEYsQ0FEYTtBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29kaW5nL3ByaW1pdGl2ZXMuZWJiNjNmNWRmNTk2NzU5ZGUyYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvZGVTYW5kYm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVNhbmRib3gnXHJcbmltcG9ydCAnLi9wcmltaXRpdmVzLnNjc3MnXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IFlUVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ZVFZpZGVvJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicHJpbWl0aXZlc1wiPlxyXG4gICAgPE5leHRTZW8gdGl0bGU9XCIjMy4xIFByaW1pdGl2ZXNcIiAvPlxyXG4gICAgPGgyPiMzLjEgUHJpbWl0aXZlczogQmFzaWMgRGF0YSBUeXBlcyDwn5OKPC9oMj5cclxuICAgIDxiciAvPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiaW50cm8tY2FyZFwiPlxyXG4gICAgICA8WVRWaWRlbyB1cmw9XCJfNFRQbHd3SE04UVwiIC8+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIFlvdSBjYW4gcmVhZCBtb3JleycgJ31cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYWxla3NhbmRyaG92aGFubmlzeWFuLmNvbS9ibG9nL2JpbmFyeS1mb3ItYmVnaW5uZXJzL1wiPmhlcmU8L2E+IGlmIHlvdSdkXHJcbiAgICAgICAgbGlrZSB0byBsZWFybiBhYm91dCBob3cgYmluYXJ5IHZhbHVlcyBhcmUgY29udmVydGVkIGludG8gbW9yZSBjb21wbGV4IGRhdGEgdHlwZXMgbGlrZVxyXG4gICAgICAgIHN0cmluZ3MgYW5kIG51bWJlcnMuXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxiciAvPlxyXG4gICAgPHA+XHJcbiAgICAgIEluIHRoaXMgc2VjdGlvbiB3ZSB3aWxsIHVwZ3JhZGUgZnJvbSB3b3JraW5nIHdpdGgganVzdCBib29sZWFuIGxvZ2ljIHRvIHdyaXRpbmcgZnVuY3Rpb25hbFxyXG4gICAgICBKYXZhU2NyaXB0ISBQcmltaXRpdmVzIGFyZSB0aGUgYmFzaWMgZGF0YSB0eXBlcyBpbiBKYXZhU2NyaXB0LiBIZXJlIGFyZSB0aGUgYmFzaWMgcHJpbWl0aXZlczpcclxuICAgIDwvcD5cclxuICAgIDx1bCBjbGFzc05hbWU9XCJwcmltaXRpdmVzLWxpc3RcIj5cclxuICAgICAgPGxpPkJvb2xlYW48L2xpPlxyXG4gICAgICA8bGk+TnVtYmVyPC9saT5cclxuICAgICAgPGxpPlN0cmluZzwvbGk+XHJcbiAgICAgIDxsaT51bmRlZmluZWQ8L2xpPlxyXG4gICAgICA8bGk+bnVsbDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHA+XHJcbiAgICAgIEkgd2lsbCBub3cgZGV0YWlsIGVhY2ggdHlwZSBvZiBkYXRhIGFuZCB0aGVpciBvcGVyYXRvcnMsIHRoZW4gaW4gdGhlIG5leHQgcGFnZSBJIHdpbGwgcHJvdmlkZVxyXG4gICAgICBzb21lIG1vcmUgZXhhbXBsZXMgb2YgaG93IHRoZXkgY2FuIGJlIHVzZWQgdG9nZXRoZXIuIEFkZGl0aW9uYWxseSwgeW91IGNhbiBlZGl0IHRoZSBpbnB1dCBvZlxyXG4gICAgICBhbGwgdGhlIGNvZGUgZXhhbXBsZXMgYmVsb3cgKG5vdGU6IGlmIHlvdXIgc3ludGF4IGlzIGludmFsaWQgeW91IHdpbGwgcmVjZWl2ZSBhbiBlcnJvciBpbnN0ZWFkXHJcbiAgICAgIG9mIHlvdXIgb3V0cHV0KVxyXG4gICAgPC9wPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIGJvb2xlYW5cIj5cclxuICAgICAgPGgyPkJvb2xlYW5zPC9oMj5cclxuICAgICAgPHA+SmF2YVNjcmlwdCBoYXMgaW50ZWdyYXRlZCBzdXBwb3J0IGZvciBib29sZWFuIHZhbHVlcyBhbmQgYm9vbGVhbiBvcGVyYXRpb25zLjwvcD5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+T3IgT3BlcmF0aW9uczwvaDM+XHJcbiAgICAgIDxwPlRoZSBvciBvcGVyYXRvciBpcyB3cml0dGVuIGFzIFwifHxcIiBpbiBKYXZhU2NyaXB0PC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCJ0cnVlIHx8IGZhbHNlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cImZhbHNlIHx8IHRydWVcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiZmFsc2UgfHwgZmFsc2VcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPGgzPk5vdCBPcGVyYXRpb25zPC9oMz5cclxuICAgICAgPHA+VGhlIG5vdCBvcGVyYXRvciBpcyB3cml0dGVuIGFzIFwiIVwiIGluIEphdmFTY3JpcHQ8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIiF0cnVlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIiFmYWxzZVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+QW5kIE9wZXJhdGlvbnM8L2gzPlxyXG4gICAgICA8cD5UaGUgYW5kIG9wZXJhdG9yIGlzIHdyaXR0ZW4gYXMgXCImJlwiIGluIEphdmFTY3JpcHQ8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cInRydWUgJiYgdHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCJ0cnVlICYmIGZhbHNlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cImZhbHNlICYmIGZhbHNlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZSBudW1iZXJzXCI+XHJcbiAgICAgIDxoMj5OdW1iZXJzPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgTnVtYmVycyBjYW4gYmUgaW50ZWdlcnMgKHdob2xlIG51bWJlcnMgbGlrZSAzMykgb3IgZmxvYXRzIChzaG9ydCBmb3IgZmxvYXRpbmcgcG9pbnQgZGVjaW1hbHNcclxuICAgICAgICBsaWtlIDQ1LjUxMikuIFNvbWUgYmFzaWMgb3BlcmF0aW9ucyBhcmUgYWRkaW5nLCBtdWx0aXBsaWNhdGlvbiwgZGl2aXNpb24sIGFuZCBzdWJ0cmFjdGlvbi5cclxuICAgICAgICBCZXNpZGVzIGNoYW5naW5nIHRoZSBudW1iZXJzIHlvdSBjYW4gYWxzbyBjb21wYXJlIHRoZW0gKHVzaW5nIHN5bWJvbHMgbGlrZSAmZ3Q7LCAmbHQ7LCBvciDiiaUpXHJcbiAgICAgICAgaW4gb3JkZXIgdG8gb3V0cHV0IGJvb2xlYW4gdmFsdWVzLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxoMz5BZGRpdGlvbi9TdWJ0cmFjdGlvbjwvaDM+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIjEyICsgMTJcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiMzAgLSAxMlwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+R3JlYXRlciB0aGFuL0xlc3MgdGhhbjwvaDM+XHJcbiAgICAgIDxwPlRoZSBncmVhdGVyIHRoYW4gYW5kIGxlc3MgdGhhbiBvcGVyYXRvcnMgcmV0dXJuIGJvb2xlYW4gdmFsdWVzPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCIxMiA+IDEwXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIjEyIDwgMTBcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiNSA+PSA1XCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIjYgPD0gNVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+TXVsdGlwbHkvRGl2aWRlPC9oMz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiMzIgKiAxMVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCI0IC8gMTJcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIHN0cmluZ3NcIj5cclxuICAgICAgPGgyPlN0cmluZ3M8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBTdHJpbmdzIGFyZSBjb2xsZWN0aW9ucyBvZiB0ZXh0IChsaWtlIHNvbWVvbmVzIG5hbWUsIGFuIGFkZHJlc3MsIGV0YykuIFRoZXkgYXJlIHdyaXR0ZW4gYnlcclxuICAgICAgICBzdXJyb3VuZGluZyB0aGUgdGV4dCBpbiBzaW5nbGUgb3IgZG91YmxlIHF1b3Rlcy5cclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9eydcIkkgbGlrZSBjaG9jb2xhdGUgbWlsa1wiJ30gY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT17XCInbXkgbmFtZWEgYm9yYXQnXCJ9IGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8cD5UaGV5IGNhbiBhbHNvIGJlIGFkZGVkIHRvZ2V0aGVyPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9e1wiJ2JlZXAnICsgJ2JvcCdcIn0gY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT17XCInOScgKyAnMTAnXCJ9IGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgdW5kZWZpbmVkXCI+XHJcbiAgICAgIDxoMj51bmRlZmluZWQ8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBUaGUgdmFsdWUgdW5kZWZpbmVkIGlzIHVzZWQgdG8gcmVwcmVzZW50IGEgdmFsdWUgdGhhdCBoYXMgbm90IGJlZW4gYXNzaWduZWQgYW55dGhpbmcgZWxzZS5cclxuICAgICAgICBJdCdzIGJhc2ljYWxseSB0aGUgdW5pdmVyc2FsIHBsYWNlaG9sZGVyIHZhbHVlLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cInVuZGVmaW5lZFwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgbnVsbFwiPlxyXG4gICAgICA8aDI+bnVsbDwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoZSB2YWx1ZSBudWxsIGlzIHVzZWQgdG8gcmVwcmVzZW50IHRoZSB2YWx1ZSBcIm5vdGhpbmdcIi4gSXQncyBkaWZmZXJlbnQgZnJvbSB1bmRlZmluZWQgaW5cclxuICAgICAgICB0aGF0IGl0IGlzIGludGVudGlvbmFsbHkgbm90aGluZyByYXRoZXIgdGhhbiBqdXN0IGJlaW5nIG1pc3NpbmcgYSB2YWx1ZS5cclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCJudWxsXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXF1YWxpdHlcIj5cclxuICAgICAgPGgyPkVxdWFsaXR5PC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgVG8gY2hlY2sgd2hldGhlciB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSB3ZSBjYW4gdXNlIHRoZSBzdHJpY3QgZXF1YWxpdHkgb3BlcmF0b3IgXCI9PT1cIi4gVGhpc1xyXG4gICAgICAgIHdpbGwgcmV0dXJuIHRydWV7JyAnfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPHA+XHJcbiAgICAgIEluIHRoZSBuZXh0IHNlY3Rpb24gd2UnbGwgYmUgdXNpbmcgdGhlc2UgcHJpbWl0aXZlIHZhbHVlcyBzbyB5b3UgY2FuIHNlZSBhIGxpdHRsZSBiaXQgbW9yZSB3aHlcclxuICAgICAgdGhleSBhcmUgdXNlZnVsLiBZb3UgY2FuIHJlYWQgaW4gZ3JlYXRlciBkZXRhaWwgYWJvdXQgSlMncyBkYXRhIHR5cGVzeycgJ31cclxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3R5cGVzXCI+aGVyZTwvYT5cclxuICAgIDwvcD5cclxuICAgIDxMaW5rIGhyZWY9XCIvY29kaW5nL2Vzc2VudGlhbC10b29sc1wiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuZXh0XCI+TmV4dDogRXNzZW50aWFsIFRvb2xzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gIDwvZGl2PlxyXG4pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=