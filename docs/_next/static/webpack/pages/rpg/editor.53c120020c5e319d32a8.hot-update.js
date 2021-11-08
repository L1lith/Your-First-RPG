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


var defaultGame = "function smartPrompt(question) {\n  var output = null\n  while(output === null || output.trim().length < 1) {\n      output = prompt(question)\n  }\n  return output.trim()\n}\n\nfunction getAction(question, actionList) { \n  // Here we give a list of possible actions and retry until the user provides a valid response\n  let answer = null\n  while (!actionList.includes(answer)) {\n      answer = smartPrompt(question + \" - possible actions: \" + actionList.join(\", \")) // Here we convert the list to a string by joining all of its contents with a comma and a space\n  }\n  return answer\n}\n\n//////////\n// INFO //\n//////////\n// If you get stuck or want to learn how to do more things consider checking out the resources section https://l1lith.github.io/Intro-Coding-Concepts#resources\n// Also, don't be afraid to google it!\n///////////\n\nvar name = smartPrompt(\"What is your name adventurer?\")\n\nalert(\"You wake up on a strange beach. '\" + name + \"' is written on the inside of your shirt.\")\n\nconst firstAction = getAction(\"What would you like to do?\", [\"wait\", \"explore the beach\", \"leave the beach\"]) // Lists are surrounded by square brackets and separated by commas\n\nwhile (true) { // We trap the user in this loop until they leave the beach\n  if (firstAction === \"wait\") {\n      alert(\"You wait around. The barking of the gulls and the lapping of the ocean lulls you into a deep sleep\")\n  } else if (firstAction === \"explore the beach\") {\n      alert(\"You find a large Oyster shell. Years of bombardment by the waves has left it brittle and chipped, but it's curves are still beautiful and pearlescent\")\n  } else { // the only remaining option is to leave the beach so we assume that\n      break // The break keyword exits us out of the current loop\n  }\n}\n\n\nconst direction = getAction(\"As you leave the beach you reach the edge of a divide between a dark forest and a giant cave in the side of the mountain. Which way would you like to go?\", [\"enter the forest\", \"enter the cave\", \"return to the beach\"])\n\n// TODO: Continue the adventure :)";

function Editor() {
  return __jsx("div", {
    className: "game-editor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: "Game Editor",
    description: "Build a game of your own",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Game Editor"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "Build your own game! Be sure to press the \u2601\uFE0F button and share your url.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), " Warning: You must save your URL or your game data could be lost."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: defaultGame,
    consoleMode: true,
    sharing: true,
    disableAutoRun: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcnBnL2VkaXRvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0R2FtZSIsIkVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsK2pFQUFqQjs7QUE2Q0EsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUMsYUFBZjtBQUE2QixlQUFXLEVBQUMsMEJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixzRUFIRixFQU9FLE1BQUMsK0RBQUQ7QUFBYSxTQUFLLEVBQUVELFdBQXBCO0FBQWlDLGVBQVcsTUFBNUM7QUFBNkMsV0FBTyxNQUFwRDtBQUFxRCxrQkFBYyxNQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQVdEOztLQVpRQyxNO0FBY01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JwZy9lZGl0b3IuNTNjMTIwMDIwYzVlMzE5ZDMyYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2RlU2FuZGJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvZGVTYW5kYm94J1xyXG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSAnbmV4dC1zZW8nXHJcblxyXG5jb25zdCBkZWZhdWx0R2FtZSA9IGBmdW5jdGlvbiBzbWFydFByb21wdChxdWVzdGlvbikge1xyXG4gIHZhciBvdXRwdXQgPSBudWxsXHJcbiAgd2hpbGUob3V0cHV0ID09PSBudWxsIHx8IG91dHB1dC50cmltKCkubGVuZ3RoIDwgMSkge1xyXG4gICAgICBvdXRwdXQgPSBwcm9tcHQocXVlc3Rpb24pXHJcbiAgfVxyXG4gIHJldHVybiBvdXRwdXQudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGlvbihxdWVzdGlvbiwgYWN0aW9uTGlzdCkgeyBcclxuICAvLyBIZXJlIHdlIGdpdmUgYSBsaXN0IG9mIHBvc3NpYmxlIGFjdGlvbnMgYW5kIHJldHJ5IHVudGlsIHRoZSB1c2VyIHByb3ZpZGVzIGEgdmFsaWQgcmVzcG9uc2VcclxuICBsZXQgYW5zd2VyID0gbnVsbFxyXG4gIHdoaWxlICghYWN0aW9uTGlzdC5pbmNsdWRlcyhhbnN3ZXIpKSB7XHJcbiAgICAgIGFuc3dlciA9IHNtYXJ0UHJvbXB0KHF1ZXN0aW9uICsgXCIgLSBwb3NzaWJsZSBhY3Rpb25zOiBcIiArIGFjdGlvbkxpc3Quam9pbihcIiwgXCIpKSAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIGxpc3QgdG8gYSBzdHJpbmcgYnkgam9pbmluZyBhbGwgb2YgaXRzIGNvbnRlbnRzIHdpdGggYSBjb21tYSBhbmQgYSBzcGFjZVxyXG4gIH1cclxuICByZXR1cm4gYW5zd2VyXHJcbn1cclxuXHJcbi8vLy8vLy8vLy9cclxuLy8gSU5GTyAvL1xyXG4vLy8vLy8vLy8vXHJcbi8vIElmIHlvdSBnZXQgc3R1Y2sgb3Igd2FudCB0byBsZWFybiBob3cgdG8gZG8gbW9yZSB0aGluZ3MgY29uc2lkZXIgY2hlY2tpbmcgb3V0IHRoZSByZXNvdXJjZXMgc2VjdGlvbiBodHRwczovL2wxbGl0aC5naXRodWIuaW8vSW50cm8tQ29kaW5nLUNvbmNlcHRzI3Jlc291cmNlc1xyXG4vLyBBbHNvLCBkb24ndCBiZSBhZnJhaWQgdG8gZ29vZ2xlIGl0IVxyXG4vLy8vLy8vLy8vL1xyXG5cclxudmFyIG5hbWUgPSBzbWFydFByb21wdChcIldoYXQgaXMgeW91ciBuYW1lIGFkdmVudHVyZXI/XCIpXHJcblxyXG5hbGVydChcIllvdSB3YWtlIHVwIG9uIGEgc3RyYW5nZSBiZWFjaC4gJ1wiICsgbmFtZSArIFwiJyBpcyB3cml0dGVuIG9uIHRoZSBpbnNpZGUgb2YgeW91ciBzaGlydC5cIilcclxuXHJcbmNvbnN0IGZpcnN0QWN0aW9uID0gZ2V0QWN0aW9uKFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBkbz9cIiwgW1wid2FpdFwiLCBcImV4cGxvcmUgdGhlIGJlYWNoXCIsIFwibGVhdmUgdGhlIGJlYWNoXCJdKSAvLyBMaXN0cyBhcmUgc3Vycm91bmRlZCBieSBzcXVhcmUgYnJhY2tldHMgYW5kIHNlcGFyYXRlZCBieSBjb21tYXNcclxuXHJcbndoaWxlICh0cnVlKSB7IC8vIFdlIHRyYXAgdGhlIHVzZXIgaW4gdGhpcyBsb29wIHVudGlsIHRoZXkgbGVhdmUgdGhlIGJlYWNoXHJcbiAgaWYgKGZpcnN0QWN0aW9uID09PSBcIndhaXRcIikge1xyXG4gICAgICBhbGVydChcIllvdSB3YWl0IGFyb3VuZC4gVGhlIGJhcmtpbmcgb2YgdGhlIGd1bGxzIGFuZCB0aGUgbGFwcGluZyBvZiB0aGUgb2NlYW4gbHVsbHMgeW91IGludG8gYSBkZWVwIHNsZWVwXCIpXHJcbiAgfSBlbHNlIGlmIChmaXJzdEFjdGlvbiA9PT0gXCJleHBsb3JlIHRoZSBiZWFjaFwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiWW91IGZpbmQgYSBsYXJnZSBPeXN0ZXIgc2hlbGwuIFllYXJzIG9mIGJvbWJhcmRtZW50IGJ5IHRoZSB3YXZlcyBoYXMgbGVmdCBpdCBicml0dGxlIGFuZCBjaGlwcGVkLCBidXQgaXQncyBjdXJ2ZXMgYXJlIHN0aWxsIGJlYXV0aWZ1bCBhbmQgcGVhcmxlc2NlbnRcIilcclxuICB9IGVsc2UgeyAvLyB0aGUgb25seSByZW1haW5pbmcgb3B0aW9uIGlzIHRvIGxlYXZlIHRoZSBiZWFjaCBzbyB3ZSBhc3N1bWUgdGhhdFxyXG4gICAgICBicmVhayAvLyBUaGUgYnJlYWsga2V5d29yZCBleGl0cyB1cyBvdXQgb2YgdGhlIGN1cnJlbnQgbG9vcFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGRpcmVjdGlvbiA9IGdldEFjdGlvbihcIkFzIHlvdSBsZWF2ZSB0aGUgYmVhY2ggeW91IHJlYWNoIHRoZSBlZGdlIG9mIGEgZGl2aWRlIGJldHdlZW4gYSBkYXJrIGZvcmVzdCBhbmQgYSBnaWFudCBjYXZlIGluIHRoZSBzaWRlIG9mIHRoZSBtb3VudGFpbi4gV2hpY2ggd2F5IHdvdWxkIHlvdSBsaWtlIHRvIGdvP1wiLCBbXCJlbnRlciB0aGUgZm9yZXN0XCIsIFwiZW50ZXIgdGhlIGNhdmVcIiwgXCJyZXR1cm4gdG8gdGhlIGJlYWNoXCJdKVxyXG5cclxuLy8gVE9ETzogQ29udGludWUgdGhlIGFkdmVudHVyZSA6KWBcclxuXHJcbmZ1bmN0aW9uIEVkaXRvcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWVkaXRvclwiPlxyXG4gICAgICA8TmV4dFNlbyB0aXRsZT1cIkdhbWUgRWRpdG9yXCIgZGVzY3JpcHRpb249XCJCdWlsZCBhIGdhbWUgb2YgeW91ciBvd25cIiAvPlxyXG4gICAgICA8aDE+R2FtZSBFZGl0b3I8L2gxPlxyXG4gICAgICA8cD5cclxuICAgICAgICBCdWlsZCB5b3VyIG93biBnYW1lISBCZSBzdXJlIHRvIHByZXNzIHRoZSDimIHvuI8gYnV0dG9uIGFuZCBzaGFyZSB5b3VyIHVybC5cclxuICAgICAgICA8YnIgLz4gV2FybmluZzogWW91IG11c3Qgc2F2ZSB5b3VyIFVSTCBvciB5b3VyIGdhbWUgZGF0YSBjb3VsZCBiZSBsb3N0LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxDb2RlU2FuZGJveCB2YWx1ZT17ZGVmYXVsdEdhbWV9IGNvbnNvbGVNb2RlIHNoYXJpbmcgZGlzYWJsZUF1dG9SdW4gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=