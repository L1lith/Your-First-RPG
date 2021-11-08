webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/rpg/editor.js":
/*!*****************************!*\
  !*** ./pages/rpg/editor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/CodeSandbox */ "./components/CodeSandbox.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");


var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\pages\\rpg\\editor.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var defaultGame = "function smartPrompt(question) {\n  var output = null\n  while(output === null || output.trim().length < 1) {\n      output = prompt(question)\n  }\n  return output.trim()\n}\n\nfunction getAction(question, actionList) { \n  // Here we give a list of possible actions and retry until the user provides a valid response\n  let answer = null\n  while (!actionList.includes(answer)) {\n      answer = smartPrompt(question + \" - possible actions: \" + actionList.join(\", \")) // Here we convert the list to a string by joining all of its contents with a comma and a space\n  }\n  return answer\n}\n\n//////////\n// INFO //\n//////////\n// If you get stuck or want to learn how to do more things consider checking out the resources section https://l1lith.github.io/Intro-Coding-Concepts#resources\n// Also, don't be afraid to google it!\n///////////\n\nvar name = smartPrompt(\"What is your name adventurer?\")\n\nalert(\"You wake up on a strange beach. '\" + name + \"' is written on the inside of your shirt.\")\n\nwhile (true) { // We trap the user in this loop until they leave the beach\n  const nextAction = getAction(\"What would you like to do?\", [\"wait\", \"explore the beach\", \"leave the beach\"]) // Lists are surrounded by square brackets and separated by commas\n\n  if (nextAction === \"wait\") {\n      alert(\"You wait around. The barking of the gulls and the lapping of the ocean lulls you into a deep sleep\")\n  } else if (nextAction === \"explore the beach\") {\n      alert(\"You find a large Oyster shell. Years of bombardment by the waves has left it brittle and chipped, but it's curves are still beautiful and pearlescent\")\n  } else { // the only remaining option is to leave the beach so we assume that\n      break // The break keyword exits us out of the current loop\n  }\n}\n\n\nconst direction = getAction(\"As you leave the beach you reach the edge of a divide between a dark forest and a giant cave in the side of the mountain. Which way would you like to go?\", [\"enter the forest\", \"enter the cave\", \"return to the beach\"])\n\n// TODO: Continue the adventure :)";

function Editor() {
  _s();

  var _useState = useState(defaultGame),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      ourCode = _useState2[0],
      setCode = _useState2[1];

  var params = new URLSearchParams(window.location.search);
  var gameCode = params.get('code');
  return __jsx("div", {
    className: "game-editor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "Game Editor",
    description: "Build a game of your own",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Game Editor"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Build your own game! Be sure to press the \u2601\uFE0F button and share your url.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), " Warning: You must save your URL or your game data could be lost."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: gameCode || defaultGame,
    consoleMode: true,
    sharing: true,
    disableAutoRun: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
}

_s(Editor, "yU5JvjLdO2dGp5nUeQKQ56tQXIQ=");

_c = Editor;
/* harmony default export */ __webpack_exports__["default"] = (Editor);

var _c;

$RefreshReg$(_c, "Editor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ycGcvZWRpdG9yLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRHYW1lIiwiRWRpdG9yIiwidXNlU3RhdGUiLCJvdXJDb2RlIiwic2V0Q29kZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2FtZUNvZGUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDWTtBQUNZO0FBQ3RCO0FBQ2pDO0FBQ2YsU0FBUywrREFBYyxTQUFTLHFFQUFvQixZQUFZLDJFQUEwQixZQUFZLGdFQUFlO0FBQ3JILEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFrRDtBQUNuQztBQUNmO0FBQ0Esb0NBQW9DLGlFQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsaUVBQWdCO0FBQ3RHLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyw4akVBQWpCOztBQTZDQSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQ2hCLGtCQUEyQkMsUUFBUSxDQUFDRixXQUFELENBQW5DO0FBQUE7QUFBQSxNQUFPRyxPQUFQO0FBQUEsTUFBZ0JDLE9BQWhCOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxlQUFKLENBQW9CQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQXBDLENBQWY7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLE1BQVgsQ0FBakI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUMsYUFBZjtBQUE2QixlQUFXLEVBQUMsMEJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixzRUFIRixFQU9FLE1BQUMsK0RBQUQ7QUFBYSxTQUFLLEVBQUVELFFBQVEsSUFBSVYsV0FBaEM7QUFBNkMsZUFBVyxNQUF4RDtBQUF5RCxXQUFPLE1BQWhFO0FBQWlFLGtCQUFjLE1BQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGO0FBV0Q7O0dBZlFDLE07O0tBQUFBLE07QUFpQk1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JwZy9lZGl0b3IuNGNkNmI0NzQ2Y2EzODFlMzUyMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgQ29kZVNhbmRib3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2RlU2FuZGJveCdcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJ1xyXG5cclxuY29uc3QgZGVmYXVsdEdhbWUgPSBgZnVuY3Rpb24gc21hcnRQcm9tcHQocXVlc3Rpb24pIHtcclxuICB2YXIgb3V0cHV0ID0gbnVsbFxyXG4gIHdoaWxlKG91dHB1dCA9PT0gbnVsbCB8fCBvdXRwdXQudHJpbSgpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgb3V0cHV0ID0gcHJvbXB0KHF1ZXN0aW9uKVxyXG4gIH1cclxuICByZXR1cm4gb3V0cHV0LnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBY3Rpb24ocXVlc3Rpb24sIGFjdGlvbkxpc3QpIHsgXHJcbiAgLy8gSGVyZSB3ZSBnaXZlIGEgbGlzdCBvZiBwb3NzaWJsZSBhY3Rpb25zIGFuZCByZXRyeSB1bnRpbCB0aGUgdXNlciBwcm92aWRlcyBhIHZhbGlkIHJlc3BvbnNlXHJcbiAgbGV0IGFuc3dlciA9IG51bGxcclxuICB3aGlsZSAoIWFjdGlvbkxpc3QuaW5jbHVkZXMoYW5zd2VyKSkge1xyXG4gICAgICBhbnN3ZXIgPSBzbWFydFByb21wdChxdWVzdGlvbiArIFwiIC0gcG9zc2libGUgYWN0aW9uczogXCIgKyBhY3Rpb25MaXN0LmpvaW4oXCIsIFwiKSkgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBsaXN0IHRvIGEgc3RyaW5nIGJ5IGpvaW5pbmcgYWxsIG9mIGl0cyBjb250ZW50cyB3aXRoIGEgY29tbWEgYW5kIGEgc3BhY2VcclxuICB9XHJcbiAgcmV0dXJuIGFuc3dlclxyXG59XHJcblxyXG4vLy8vLy8vLy8vXHJcbi8vIElORk8gLy9cclxuLy8vLy8vLy8vL1xyXG4vLyBJZiB5b3UgZ2V0IHN0dWNrIG9yIHdhbnQgdG8gbGVhcm4gaG93IHRvIGRvIG1vcmUgdGhpbmdzIGNvbnNpZGVyIGNoZWNraW5nIG91dCB0aGUgcmVzb3VyY2VzIHNlY3Rpb24gaHR0cHM6Ly9sMWxpdGguZ2l0aHViLmlvL0ludHJvLUNvZGluZy1Db25jZXB0cyNyZXNvdXJjZXNcclxuLy8gQWxzbywgZG9uJ3QgYmUgYWZyYWlkIHRvIGdvb2dsZSBpdCFcclxuLy8vLy8vLy8vLy9cclxuXHJcbnZhciBuYW1lID0gc21hcnRQcm9tcHQoXCJXaGF0IGlzIHlvdXIgbmFtZSBhZHZlbnR1cmVyP1wiKVxyXG5cclxuYWxlcnQoXCJZb3Ugd2FrZSB1cCBvbiBhIHN0cmFuZ2UgYmVhY2guICdcIiArIG5hbWUgKyBcIicgaXMgd3JpdHRlbiBvbiB0aGUgaW5zaWRlIG9mIHlvdXIgc2hpcnQuXCIpXHJcblxyXG53aGlsZSAodHJ1ZSkgeyAvLyBXZSB0cmFwIHRoZSB1c2VyIGluIHRoaXMgbG9vcCB1bnRpbCB0aGV5IGxlYXZlIHRoZSBiZWFjaFxyXG4gIGNvbnN0IG5leHRBY3Rpb24gPSBnZXRBY3Rpb24oXCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvP1wiLCBbXCJ3YWl0XCIsIFwiZXhwbG9yZSB0aGUgYmVhY2hcIiwgXCJsZWF2ZSB0aGUgYmVhY2hcIl0pIC8vIExpc3RzIGFyZSBzdXJyb3VuZGVkIGJ5IHNxdWFyZSBicmFja2V0cyBhbmQgc2VwYXJhdGVkIGJ5IGNvbW1hc1xyXG5cclxuICBpZiAobmV4dEFjdGlvbiA9PT0gXCJ3YWl0XCIpIHtcclxuICAgICAgYWxlcnQoXCJZb3Ugd2FpdCBhcm91bmQuIFRoZSBiYXJraW5nIG9mIHRoZSBndWxscyBhbmQgdGhlIGxhcHBpbmcgb2YgdGhlIG9jZWFuIGx1bGxzIHlvdSBpbnRvIGEgZGVlcCBzbGVlcFwiKVxyXG4gIH0gZWxzZSBpZiAobmV4dEFjdGlvbiA9PT0gXCJleHBsb3JlIHRoZSBiZWFjaFwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiWW91IGZpbmQgYSBsYXJnZSBPeXN0ZXIgc2hlbGwuIFllYXJzIG9mIGJvbWJhcmRtZW50IGJ5IHRoZSB3YXZlcyBoYXMgbGVmdCBpdCBicml0dGxlIGFuZCBjaGlwcGVkLCBidXQgaXQncyBjdXJ2ZXMgYXJlIHN0aWxsIGJlYXV0aWZ1bCBhbmQgcGVhcmxlc2NlbnRcIilcclxuICB9IGVsc2UgeyAvLyB0aGUgb25seSByZW1haW5pbmcgb3B0aW9uIGlzIHRvIGxlYXZlIHRoZSBiZWFjaCBzbyB3ZSBhc3N1bWUgdGhhdFxyXG4gICAgICBicmVhayAvLyBUaGUgYnJlYWsga2V5d29yZCBleGl0cyB1cyBvdXQgb2YgdGhlIGN1cnJlbnQgbG9vcFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGRpcmVjdGlvbiA9IGdldEFjdGlvbihcIkFzIHlvdSBsZWF2ZSB0aGUgYmVhY2ggeW91IHJlYWNoIHRoZSBlZGdlIG9mIGEgZGl2aWRlIGJldHdlZW4gYSBkYXJrIGZvcmVzdCBhbmQgYSBnaWFudCBjYXZlIGluIHRoZSBzaWRlIG9mIHRoZSBtb3VudGFpbi4gV2hpY2ggd2F5IHdvdWxkIHlvdSBsaWtlIHRvIGdvP1wiLCBbXCJlbnRlciB0aGUgZm9yZXN0XCIsIFwiZW50ZXIgdGhlIGNhdmVcIiwgXCJyZXR1cm4gdG8gdGhlIGJlYWNoXCJdKVxyXG5cclxuLy8gVE9ETzogQ29udGludWUgdGhlIGFkdmVudHVyZSA6KWBcclxuXHJcbmZ1bmN0aW9uIEVkaXRvcigpIHtcclxuICBjb25zdCBbb3VyQ29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShkZWZhdWx0R2FtZSlcclxuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXHJcbiAgY29uc3QgZ2FtZUNvZGUgPSBwYXJhbXMuZ2V0KCdjb2RlJylcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWVkaXRvclwiPlxyXG4gICAgICA8TmV4dFNlbyB0aXRsZT1cIkdhbWUgRWRpdG9yXCIgZGVzY3JpcHRpb249XCJCdWlsZCBhIGdhbWUgb2YgeW91ciBvd25cIiAvPlxyXG4gICAgICA8aDE+R2FtZSBFZGl0b3I8L2gxPlxyXG4gICAgICA8cD5cclxuICAgICAgICBCdWlsZCB5b3VyIG93biBnYW1lISBCZSBzdXJlIHRvIHByZXNzIHRoZSDimIHvuI8gYnV0dG9uIGFuZCBzaGFyZSB5b3VyIHVybC5cclxuICAgICAgICA8YnIgLz4gV2FybmluZzogWW91IG11c3Qgc2F2ZSB5b3VyIFVSTCBvciB5b3VyIGdhbWUgZGF0YSBjb3VsZCBiZSBsb3N0LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT17Z2FtZUNvZGUgfHwgZGVmYXVsdEdhbWV9IGNvbnNvbGVNb2RlIHNoYXJpbmcgZGlzYWJsZUF1dG9SdW4gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=