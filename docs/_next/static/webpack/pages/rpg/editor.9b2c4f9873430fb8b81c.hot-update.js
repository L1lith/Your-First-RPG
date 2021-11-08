webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./pages/rpg/editor.js":
/*!*****************************!*\
  !*** ./pages/rpg/editor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CodeSandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CodeSandbox */ "./components/CodeSandbox.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\pages\\rpg\\editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var defaultGame = "function smartPrompt(question) {\n  var output = null\n  while(output === null || output.trim().length < 1) {\n      output = prompt(question)\n  }\n  return output.trim()\n}\n\nfunction getAction(question, actionList) { \n  // Here we give a list of possible actions and retry until the user provides a valid response\n  let answer = null\n  while (!actionList.includes(answer)) {\n      answer = smartPrompt(question + \" - possible actions: \" + actionList.join(\", \")) // Here we convert the list to a string by joining all of its contents with a comma and a space\n  }\n  return answer\n}\n\n//////////\n// INFO //\n//////////\n// If you get stuck or want to learn how to do more things consider checking out the resources section https://l1lith.github.io/Intro-Coding-Concepts#resources\n// Also, don't be afraid to google it!\n///////////\n\nvar name = smartPrompt(\"What is your name adventurer?\")\n\nalert(\"You wake up on a strange beach. '\" + name + \"' is written on the inside of your shirt.\")\n\nwhile (true) { // We trap the user in this loop until they leave the beach\n  const nextAction = getAction(\"What would you like to do?\", [\"wait\", \"explore the beach\", \"leave the beach\"]) // Lists are surrounded by square brackets and separated by commas\n\n  if (nextAction === \"wait\") {\n      alert(\"You wait around. The barking of the gulls and the lapping of the ocean lulls you into a deep sleep\")\n  } else if (nextAction === \"explore the beach\") {\n      alert(\"You find a large Oyster shell. Years of bombardment by the waves has left it brittle and chipped, but it's curves are still beautiful and pearlescent\")\n  } else { // the only remaining option is to leave the beach so we assume that\n      break // The break keyword exits us out of the current loop\n  }\n}\n\n\nconst direction = getAction(\"As you leave the beach you reach the edge of a divide between a dark forest and a giant cave in the side of the mountain. Which way would you like to go?\", [\"enter the forest\", \"enter the cave\", \"return to the beach\"])\n\n// TODO: Continue the adventure :)";

function Editor() {
  var params = new URLSearchParams(window.location.search);
  var gameCode = params.get('code');
  return __jsx("div", {
    className: "game-editor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: "Game Editor",
    description: "Build a game of your own",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Game Editor"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "Build your own game! Be sure to press the \u2601\uFE0F button and share your url.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), " Warning: You must save your URL or your game data could be lost."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: gameCode || defaultGame,
    consoleMode: true,
    sharing: true,
    disableAutoRun: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcnBnL2VkaXRvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0R2FtZSIsIkVkaXRvciIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2FtZUNvZGUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLDhqRUFBakI7O0FBNkNBLFNBQVNDLE1BQVQsR0FBa0I7QUFDaEIsTUFBTUMsTUFBTSxHQUFHLElBQUlDLGVBQUosQ0FBb0JDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBcEMsQ0FBZjtBQUNBLE1BQU1DLFFBQVEsR0FBR0wsTUFBTSxDQUFDTSxHQUFQLENBQVcsTUFBWCxDQUFqQjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFTLFNBQUssRUFBQyxhQUFmO0FBQTZCLGVBQVcsRUFBQywwQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEZBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHNFQUhGLEVBT0UsTUFBQywrREFBRDtBQUFhLFNBQUssRUFBRUQsUUFBUSxJQUFJUCxXQUFoQztBQUE2QyxlQUFXLE1BQXhEO0FBQXlELFdBQU8sTUFBaEU7QUFBaUUsa0JBQWMsTUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREY7QUFXRDs7S0FkUUMsTTtBQWdCTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci45YjJjNGY5ODczNDMwZmI4YjgxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvZGVTYW5kYm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVNhbmRib3gnXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuXHJcbmNvbnN0IGRlZmF1bHRHYW1lID0gYGZ1bmN0aW9uIHNtYXJ0UHJvbXB0KHF1ZXN0aW9uKSB7XHJcbiAgdmFyIG91dHB1dCA9IG51bGxcclxuICB3aGlsZShvdXRwdXQgPT09IG51bGwgfHwgb3V0cHV0LnRyaW0oKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgIG91dHB1dCA9IHByb21wdChxdWVzdGlvbilcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dC50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aW9uKHF1ZXN0aW9uLCBhY3Rpb25MaXN0KSB7IFxyXG4gIC8vIEhlcmUgd2UgZ2l2ZSBhIGxpc3Qgb2YgcG9zc2libGUgYWN0aW9ucyBhbmQgcmV0cnkgdW50aWwgdGhlIHVzZXIgcHJvdmlkZXMgYSB2YWxpZCByZXNwb25zZVxyXG4gIGxldCBhbnN3ZXIgPSBudWxsXHJcbiAgd2hpbGUgKCFhY3Rpb25MaXN0LmluY2x1ZGVzKGFuc3dlcikpIHtcclxuICAgICAgYW5zd2VyID0gc21hcnRQcm9tcHQocXVlc3Rpb24gKyBcIiAtIHBvc3NpYmxlIGFjdGlvbnM6IFwiICsgYWN0aW9uTGlzdC5qb2luKFwiLCBcIikpIC8vIEhlcmUgd2UgY29udmVydCB0aGUgbGlzdCB0byBhIHN0cmluZyBieSBqb2luaW5nIGFsbCBvZiBpdHMgY29udGVudHMgd2l0aCBhIGNvbW1hIGFuZCBhIHNwYWNlXHJcbiAgfVxyXG4gIHJldHVybiBhbnN3ZXJcclxufVxyXG5cclxuLy8vLy8vLy8vL1xyXG4vLyBJTkZPIC8vXHJcbi8vLy8vLy8vLy9cclxuLy8gSWYgeW91IGdldCBzdHVjayBvciB3YW50IHRvIGxlYXJuIGhvdyB0byBkbyBtb3JlIHRoaW5ncyBjb25zaWRlciBjaGVja2luZyBvdXQgdGhlIHJlc291cmNlcyBzZWN0aW9uIGh0dHBzOi8vbDFsaXRoLmdpdGh1Yi5pby9JbnRyby1Db2RpbmctQ29uY2VwdHMjcmVzb3VyY2VzXHJcbi8vIEFsc28sIGRvbid0IGJlIGFmcmFpZCB0byBnb29nbGUgaXQhXHJcbi8vLy8vLy8vLy8vXHJcblxyXG52YXIgbmFtZSA9IHNtYXJ0UHJvbXB0KFwiV2hhdCBpcyB5b3VyIG5hbWUgYWR2ZW50dXJlcj9cIilcclxuXHJcbmFsZXJ0KFwiWW91IHdha2UgdXAgb24gYSBzdHJhbmdlIGJlYWNoLiAnXCIgKyBuYW1lICsgXCInIGlzIHdyaXR0ZW4gb24gdGhlIGluc2lkZSBvZiB5b3VyIHNoaXJ0LlwiKVxyXG5cclxud2hpbGUgKHRydWUpIHsgLy8gV2UgdHJhcCB0aGUgdXNlciBpbiB0aGlzIGxvb3AgdW50aWwgdGhleSBsZWF2ZSB0aGUgYmVhY2hcclxuICBjb25zdCBuZXh0QWN0aW9uID0gZ2V0QWN0aW9uKFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBkbz9cIiwgW1wid2FpdFwiLCBcImV4cGxvcmUgdGhlIGJlYWNoXCIsIFwibGVhdmUgdGhlIGJlYWNoXCJdKSAvLyBMaXN0cyBhcmUgc3Vycm91bmRlZCBieSBzcXVhcmUgYnJhY2tldHMgYW5kIHNlcGFyYXRlZCBieSBjb21tYXNcclxuXHJcbiAgaWYgKG5leHRBY3Rpb24gPT09IFwid2FpdFwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiWW91IHdhaXQgYXJvdW5kLiBUaGUgYmFya2luZyBvZiB0aGUgZ3VsbHMgYW5kIHRoZSBsYXBwaW5nIG9mIHRoZSBvY2VhbiBsdWxscyB5b3UgaW50byBhIGRlZXAgc2xlZXBcIilcclxuICB9IGVsc2UgaWYgKG5leHRBY3Rpb24gPT09IFwiZXhwbG9yZSB0aGUgYmVhY2hcIikge1xyXG4gICAgICBhbGVydChcIllvdSBmaW5kIGEgbGFyZ2UgT3lzdGVyIHNoZWxsLiBZZWFycyBvZiBib21iYXJkbWVudCBieSB0aGUgd2F2ZXMgaGFzIGxlZnQgaXQgYnJpdHRsZSBhbmQgY2hpcHBlZCwgYnV0IGl0J3MgY3VydmVzIGFyZSBzdGlsbCBiZWF1dGlmdWwgYW5kIHBlYXJsZXNjZW50XCIpXHJcbiAgfSBlbHNlIHsgLy8gdGhlIG9ubHkgcmVtYWluaW5nIG9wdGlvbiBpcyB0byBsZWF2ZSB0aGUgYmVhY2ggc28gd2UgYXNzdW1lIHRoYXRcclxuICAgICAgYnJlYWsgLy8gVGhlIGJyZWFrIGtleXdvcmQgZXhpdHMgdXMgb3V0IG9mIHRoZSBjdXJyZW50IGxvb3BcclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBkaXJlY3Rpb24gPSBnZXRBY3Rpb24oXCJBcyB5b3UgbGVhdmUgdGhlIGJlYWNoIHlvdSByZWFjaCB0aGUgZWRnZSBvZiBhIGRpdmlkZSBiZXR3ZWVuIGEgZGFyayBmb3Jlc3QgYW5kIGEgZ2lhbnQgY2F2ZSBpbiB0aGUgc2lkZSBvZiB0aGUgbW91bnRhaW4uIFdoaWNoIHdheSB3b3VsZCB5b3UgbGlrZSB0byBnbz9cIiwgW1wiZW50ZXIgdGhlIGZvcmVzdFwiLCBcImVudGVyIHRoZSBjYXZlXCIsIFwicmV0dXJuIHRvIHRoZSBiZWFjaFwiXSlcclxuXHJcbi8vIFRPRE86IENvbnRpbnVlIHRoZSBhZHZlbnR1cmUgOilgXHJcblxyXG5mdW5jdGlvbiBFZGl0b3IoKSB7XHJcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxyXG4gIGNvbnN0IGdhbWVDb2RlID0gcGFyYW1zLmdldCgnY29kZScpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1lZGl0b3JcIj5cclxuICAgICAgPE5leHRTZW8gdGl0bGU9XCJHYW1lIEVkaXRvclwiIGRlc2NyaXB0aW9uPVwiQnVpbGQgYSBnYW1lIG9mIHlvdXIgb3duXCIgLz5cclxuICAgICAgPGgxPkdhbWUgRWRpdG9yPC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgQnVpbGQgeW91ciBvd24gZ2FtZSEgQmUgc3VyZSB0byBwcmVzcyB0aGUg4piB77iPIGJ1dHRvbiBhbmQgc2hhcmUgeW91ciB1cmwuXHJcbiAgICAgICAgPGJyIC8+IFdhcm5pbmc6IFlvdSBtdXN0IHNhdmUgeW91ciBVUkwgb3IgeW91ciBnYW1lIGRhdGEgY291bGQgYmUgbG9zdC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8Q29kZVNhbmRib3ggdmFsdWU9e2dhbWVDb2RlIHx8IGRlZmF1bHRHYW1lfSBjb25zb2xlTW9kZSBzaGFyaW5nIGRpc2FibGVBdXRvUnVuIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxyXG4iXSwic291cmNlUm9vdCI6IiJ9