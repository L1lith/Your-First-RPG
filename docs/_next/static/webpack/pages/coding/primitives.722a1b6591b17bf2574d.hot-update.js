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
    title: "#3.1 Basic Data Types \uD83D\uDCCA",
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
  }, "#3.1 Basic Data Types \uD83D\uDCCA"), __jsx("br", {
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
  }, "Next: #3.2 Essential Tools")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29kaW5nL3ByaW1pdGl2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZTtBQUFBLFNBQ2I7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLFNBQUssRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBUyxPQUFHLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUNvQixHQURwQixFQUVFO0FBQUcsUUFBSSxFQUFDLGtFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRix5SEFGRixDQUpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnTUFkRixFQWtCRTtBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0U7QUFB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QUE7QUFBQSxJQU5GLENBcEZGLEVBNEZFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEtBRkYsRUFNRSxNQUFDLCtEQUFEO0FBQWEsU0FBSyxFQUFDLE1BQW5CO0FBQTBCLGFBQVMsRUFBQyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0E1RkYsRUFvR0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0hBRW1CLEdBRm5CLENBRkYsQ0FwR0YsRUEyR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNHRixFQTRHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZLQUV3RSxHQUZ4RSxFQUdFO0FBQUcsUUFBSSxFQUFDLCtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixDQTVHRixFQWlIRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLHlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FqSEYsQ0FEYTtBQUFBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29kaW5nL3ByaW1pdGl2ZXMuNzIyYTFiNjU5MWIxN2JmMjU3NGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvZGVTYW5kYm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVNhbmRib3gnXHJcbmltcG9ydCAnLi9wcmltaXRpdmVzLnNjc3MnXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IFlUVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ZVFZpZGVvJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicHJpbWl0aXZlc1wiPlxyXG4gICAgPE5leHRTZW8gdGl0bGU9XCIjMy4xIEJhc2ljIERhdGEgVHlwZXMg8J+TilwiIC8+XHJcbiAgICA8aDI+IzMuMSBCYXNpYyBEYXRhIFR5cGVzIPCfk4o8L2gyPlxyXG4gICAgPGJyIC8+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnRyby1jYXJkXCI+XHJcbiAgICAgIDxZVFZpZGVvIHVybD1cIl80VFBsd3dITThRXCIgLz5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAgWW91IGNhbiByZWFkIG1vcmV7JyAnfVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5hbGVrc2FuZHJob3ZoYW5uaXN5YW4uY29tL2Jsb2cvYmluYXJ5LWZvci1iZWdpbm5lcnMvXCI+aGVyZTwvYT4gaWYgeW91J2RcclxuICAgICAgICBsaWtlIHRvIGxlYXJuIGFib3V0IGhvdyBiaW5hcnkgdmFsdWVzIGFyZSBjb252ZXJ0ZWQgaW50byBtb3JlIGNvbXBsZXggZGF0YSB0eXBlcyBsaWtlXHJcbiAgICAgICAgc3RyaW5ncyBhbmQgbnVtYmVycy5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGJyIC8+XHJcbiAgICA8cD5cclxuICAgICAgSW4gdGhpcyBzZWN0aW9uIHdlIHdpbGwgdXBncmFkZSBmcm9tIHdvcmtpbmcgd2l0aCBqdXN0IGJvb2xlYW4gbG9naWMgdG8gd3JpdGluZyBmdW5jdGlvbmFsXHJcbiAgICAgIEphdmFTY3JpcHQhIFByaW1pdGl2ZXMgYXJlIHRoZSBiYXNpYyBkYXRhIHR5cGVzIGluIEphdmFTY3JpcHQuIEhlcmUgYXJlIHRoZSBiYXNpYyBwcmltaXRpdmVzOlxyXG4gICAgPC9wPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInByaW1pdGl2ZXMtbGlzdFwiPlxyXG4gICAgICA8bGk+Qm9vbGVhbjwvbGk+XHJcbiAgICAgIDxsaT5OdW1iZXI8L2xpPlxyXG4gICAgICA8bGk+U3RyaW5nPC9saT5cclxuICAgICAgPGxpPnVuZGVmaW5lZDwvbGk+XHJcbiAgICAgIDxsaT5udWxsPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8cD5cclxuICAgICAgSSB3aWxsIG5vdyBkZXRhaWwgZWFjaCB0eXBlIG9mIGRhdGEgYW5kIHRoZWlyIG9wZXJhdG9ycywgdGhlbiBpbiB0aGUgbmV4dCBwYWdlIEkgd2lsbCBwcm92aWRlXHJcbiAgICAgIHNvbWUgbW9yZSBleGFtcGxlcyBvZiBob3cgdGhleSBjYW4gYmUgdXNlZCB0b2dldGhlci4gQWRkaXRpb25hbGx5LCB5b3UgY2FuIGVkaXQgdGhlIGlucHV0IG9mXHJcbiAgICAgIGFsbCB0aGUgY29kZSBleGFtcGxlcyBiZWxvdyAobm90ZTogaWYgeW91ciBzeW50YXggaXMgaW52YWxpZCB5b3Ugd2lsbCByZWNlaXZlIGFuIGVycm9yIGluc3RlYWRcclxuICAgICAgb2YgeW91ciBvdXRwdXQpXHJcbiAgICA8L3A+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgYm9vbGVhblwiPlxyXG4gICAgICA8aDI+Qm9vbGVhbnM8L2gyPlxyXG4gICAgICA8cD5KYXZhU2NyaXB0IGhhcyBpbnRlZ3JhdGVkIHN1cHBvcnQgZm9yIGJvb2xlYW4gdmFsdWVzIGFuZCBib29sZWFuIG9wZXJhdGlvbnMuPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cImZhbHNlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxoMz5PciBPcGVyYXRpb25zPC9oMz5cclxuICAgICAgPHA+VGhlIG9yIG9wZXJhdG9yIGlzIHdyaXR0ZW4gYXMgXCJ8fFwiIGluIEphdmFTY3JpcHQ8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cInRydWUgfHwgZmFsc2VcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiZmFsc2UgfHwgdHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCJmYWxzZSB8fCBmYWxzZVwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8aDM+Tm90IE9wZXJhdGlvbnM8L2gzPlxyXG4gICAgICA8cD5UaGUgbm90IG9wZXJhdG9yIGlzIHdyaXR0ZW4gYXMgXCIhXCIgaW4gSmF2YVNjcmlwdDwvcD5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiIXRydWVcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiIWZhbHNlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxoMz5BbmQgT3BlcmF0aW9uczwvaDM+XHJcbiAgICAgIDxwPlRoZSBhbmQgb3BlcmF0b3IgaXMgd3JpdHRlbiBhcyBcIiYmXCIgaW4gSmF2YVNjcmlwdDwvcD5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwidHJ1ZSAmJiB0cnVlXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cInRydWUgJiYgZmFsc2VcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiZmFsc2UgJiYgZmFsc2VcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIG51bWJlcnNcIj5cclxuICAgICAgPGgyPk51bWJlcnM8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBOdW1iZXJzIGNhbiBiZSBpbnRlZ2VycyAod2hvbGUgbnVtYmVycyBsaWtlIDMzKSBvciBmbG9hdHMgKHNob3J0IGZvciBmbG9hdGluZyBwb2ludCBkZWNpbWFsc1xyXG4gICAgICAgIGxpa2UgNDUuNTEyKS4gU29tZSBiYXNpYyBvcGVyYXRpb25zIGFyZSBhZGRpbmcsIG11bHRpcGxpY2F0aW9uLCBkaXZpc2lvbiwgYW5kIHN1YnRyYWN0aW9uLlxyXG4gICAgICAgIEJlc2lkZXMgY2hhbmdpbmcgdGhlIG51bWJlcnMgeW91IGNhbiBhbHNvIGNvbXBhcmUgdGhlbSAodXNpbmcgc3ltYm9scyBsaWtlICZndDssICZsdDssIG9yIOKJpSlcclxuICAgICAgICBpbiBvcmRlciB0byBvdXRwdXQgYm9vbGVhbiB2YWx1ZXMuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgzPkFkZGl0aW9uL1N1YnRyYWN0aW9uPC9oMz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiMTIgKyAxMlwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCIzMCAtIDEyXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxoMz5HcmVhdGVyIHRoYW4vTGVzcyB0aGFuPC9oMz5cclxuICAgICAgPHA+VGhlIGdyZWF0ZXIgdGhhbiBhbmQgbGVzcyB0aGFuIG9wZXJhdG9ycyByZXR1cm4gYm9vbGVhbiB2YWx1ZXM8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIjEyID4gMTBcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiMTIgPCAxMFwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCI1ID49IDVcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiNiA8PSA1XCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxoMz5NdWx0aXBseS9EaXZpZGU8L2gzPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9XCIzMiAqIDExXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIjQgLyAxMlwiIGNsYXNzTmFtZT1cIm1pbmlcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgc3RyaW5nc1wiPlxyXG4gICAgICA8aDI+U3RyaW5nczwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFN0cmluZ3MgYXJlIGNvbGxlY3Rpb25zIG9mIHRleHQgKGxpa2Ugc29tZW9uZXMgbmFtZSwgYW4gYWRkcmVzcywgZXRjKS4gVGhleSBhcmUgd3JpdHRlbiBieVxyXG4gICAgICAgIHN1cnJvdW5kaW5nIHRoZSB0ZXh0IGluIHNpbmdsZSBvciBkb3VibGUgcXVvdGVzLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT17J1wiSSBsaWtlIGNob2NvbGF0ZSBtaWxrXCInfSBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPXtcIidteSBuYW1lYSBib3JhdCdcIn0gY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICAgIDxwPlRoZXkgY2FuIGFsc28gYmUgYWRkZWQgdG9nZXRoZXI8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT17XCInYmVlcCcgKyAnYm9wJ1wifSBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPXtcIic5JyArICcxMCdcIn0gY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZSB1bmRlZmluZWRcIj5cclxuICAgICAgPGgyPnVuZGVmaW5lZDwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoZSB2YWx1ZSB1bmRlZmluZWQgaXMgdXNlZCB0byByZXByZXNlbnQgYSB2YWx1ZSB0aGF0IGhhcyBub3QgYmVlbiBhc3NpZ25lZCBhbnl0aGluZyBlbHNlLlxyXG4gICAgICAgIEl0J3MgYmFzaWNhbGx5IHRoZSB1bml2ZXJzYWwgcGxhY2Vob2xkZXIgdmFsdWUuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwidW5kZWZpbmVkXCIgY2xhc3NOYW1lPVwibWluaVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZSBudWxsXCI+XHJcbiAgICAgIDxoMj5udWxsPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgVGhlIHZhbHVlIG51bGwgaXMgdXNlZCB0byByZXByZXNlbnQgdGhlIHZhbHVlIFwibm90aGluZ1wiLiBJdCdzIGRpZmZlcmVudCBmcm9tIHVuZGVmaW5lZCBpblxyXG4gICAgICAgIHRoYXQgaXQgaXMgaW50ZW50aW9uYWxseSBub3RoaW5nIHJhdGhlciB0aGFuIGp1c3QgYmVpbmcgbWlzc2luZyBhIHZhbHVlLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT1cIm51bGxcIiBjbGFzc05hbWU9XCJtaW5pXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcXVhbGl0eVwiPlxyXG4gICAgICA8aDI+RXF1YWxpdHk8L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICBUbyBjaGVjayB3aGV0aGVyIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIHdlIGNhbiB1c2UgdGhlIHN0cmljdCBlcXVhbGl0eSBvcGVyYXRvciBcIj09PVwiLiBUaGlzXHJcbiAgICAgICAgd2lsbCByZXR1cm4gdHJ1ZXsnICd9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8cD5cclxuICAgICAgSW4gdGhlIG5leHQgc2VjdGlvbiB3ZSdsbCBiZSB1c2luZyB0aGVzZSBwcmltaXRpdmUgdmFsdWVzIHNvIHlvdSBjYW4gc2VlIGEgbGl0dGxlIGJpdCBtb3JlIHdoeVxyXG4gICAgICB0aGV5IGFyZSB1c2VmdWwuIFlvdSBjYW4gcmVhZCBpbiBncmVhdGVyIGRldGFpbCBhYm91dCBKUydzIGRhdGEgdHlwZXN7JyAnfVxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vdHlwZXNcIj5oZXJlPC9hPlxyXG4gICAgPC9wPlxyXG4gICAgPExpbmsgaHJlZj1cIi9jb2RpbmcvZXNzZW50aWFsLXRvb2xzXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5leHRcIj5OZXh0OiAjMy4yIEVzc2VudGlhbCBUb29sczwvYT5cclxuICAgIDwvTGluaz5cclxuICA8L2Rpdj5cclxuKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9