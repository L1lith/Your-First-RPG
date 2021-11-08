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
  var name = params.get('name');
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
    value: defaultGame,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcnBnL2VkaXRvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0R2FtZSIsIkVkaXRvciIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwibmFtZSIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsOGpFQUFqQjs7QUE2Q0EsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixNQUFNQyxNQUFNLEdBQUcsSUFBSUMsZUFBSixDQUFvQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFwQyxDQUFmO0FBQ0EsTUFBTUMsSUFBSSxHQUFHTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxNQUFYLENBQWI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUMsYUFBZjtBQUE2QixlQUFXLEVBQUMsMEJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixzRUFIRixFQU9FLE1BQUMsK0RBQUQ7QUFBYSxTQUFLLEVBQUVSLFdBQXBCO0FBQWlDLGVBQVcsTUFBNUM7QUFBNkMsV0FBTyxNQUFwRDtBQUFxRCxrQkFBYyxNQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQVdEOztLQWRRQyxNO0FBZ0JNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ycGcvZWRpdG9yLjEyOGE1Y2NhYjQxMjNlZTI3MzE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29kZVNhbmRib3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db2RlU2FuZGJveCdcclxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJ1xyXG5cclxuY29uc3QgZGVmYXVsdEdhbWUgPSBgZnVuY3Rpb24gc21hcnRQcm9tcHQocXVlc3Rpb24pIHtcclxuICB2YXIgb3V0cHV0ID0gbnVsbFxyXG4gIHdoaWxlKG91dHB1dCA9PT0gbnVsbCB8fCBvdXRwdXQudHJpbSgpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgb3V0cHV0ID0gcHJvbXB0KHF1ZXN0aW9uKVxyXG4gIH1cclxuICByZXR1cm4gb3V0cHV0LnRyaW0oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBY3Rpb24ocXVlc3Rpb24sIGFjdGlvbkxpc3QpIHsgXHJcbiAgLy8gSGVyZSB3ZSBnaXZlIGEgbGlzdCBvZiBwb3NzaWJsZSBhY3Rpb25zIGFuZCByZXRyeSB1bnRpbCB0aGUgdXNlciBwcm92aWRlcyBhIHZhbGlkIHJlc3BvbnNlXHJcbiAgbGV0IGFuc3dlciA9IG51bGxcclxuICB3aGlsZSAoIWFjdGlvbkxpc3QuaW5jbHVkZXMoYW5zd2VyKSkge1xyXG4gICAgICBhbnN3ZXIgPSBzbWFydFByb21wdChxdWVzdGlvbiArIFwiIC0gcG9zc2libGUgYWN0aW9uczogXCIgKyBhY3Rpb25MaXN0LmpvaW4oXCIsIFwiKSkgLy8gSGVyZSB3ZSBjb252ZXJ0IHRoZSBsaXN0IHRvIGEgc3RyaW5nIGJ5IGpvaW5pbmcgYWxsIG9mIGl0cyBjb250ZW50cyB3aXRoIGEgY29tbWEgYW5kIGEgc3BhY2VcclxuICB9XHJcbiAgcmV0dXJuIGFuc3dlclxyXG59XHJcblxyXG4vLy8vLy8vLy8vXHJcbi8vIElORk8gLy9cclxuLy8vLy8vLy8vL1xyXG4vLyBJZiB5b3UgZ2V0IHN0dWNrIG9yIHdhbnQgdG8gbGVhcm4gaG93IHRvIGRvIG1vcmUgdGhpbmdzIGNvbnNpZGVyIGNoZWNraW5nIG91dCB0aGUgcmVzb3VyY2VzIHNlY3Rpb24gaHR0cHM6Ly9sMWxpdGguZ2l0aHViLmlvL0ludHJvLUNvZGluZy1Db25jZXB0cyNyZXNvdXJjZXNcclxuLy8gQWxzbywgZG9uJ3QgYmUgYWZyYWlkIHRvIGdvb2dsZSBpdCFcclxuLy8vLy8vLy8vLy9cclxuXHJcbnZhciBuYW1lID0gc21hcnRQcm9tcHQoXCJXaGF0IGlzIHlvdXIgbmFtZSBhZHZlbnR1cmVyP1wiKVxyXG5cclxuYWxlcnQoXCJZb3Ugd2FrZSB1cCBvbiBhIHN0cmFuZ2UgYmVhY2guICdcIiArIG5hbWUgKyBcIicgaXMgd3JpdHRlbiBvbiB0aGUgaW5zaWRlIG9mIHlvdXIgc2hpcnQuXCIpXHJcblxyXG53aGlsZSAodHJ1ZSkgeyAvLyBXZSB0cmFwIHRoZSB1c2VyIGluIHRoaXMgbG9vcCB1bnRpbCB0aGV5IGxlYXZlIHRoZSBiZWFjaFxyXG4gIGNvbnN0IG5leHRBY3Rpb24gPSBnZXRBY3Rpb24oXCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvP1wiLCBbXCJ3YWl0XCIsIFwiZXhwbG9yZSB0aGUgYmVhY2hcIiwgXCJsZWF2ZSB0aGUgYmVhY2hcIl0pIC8vIExpc3RzIGFyZSBzdXJyb3VuZGVkIGJ5IHNxdWFyZSBicmFja2V0cyBhbmQgc2VwYXJhdGVkIGJ5IGNvbW1hc1xyXG5cclxuICBpZiAobmV4dEFjdGlvbiA9PT0gXCJ3YWl0XCIpIHtcclxuICAgICAgYWxlcnQoXCJZb3Ugd2FpdCBhcm91bmQuIFRoZSBiYXJraW5nIG9mIHRoZSBndWxscyBhbmQgdGhlIGxhcHBpbmcgb2YgdGhlIG9jZWFuIGx1bGxzIHlvdSBpbnRvIGEgZGVlcCBzbGVlcFwiKVxyXG4gIH0gZWxzZSBpZiAobmV4dEFjdGlvbiA9PT0gXCJleHBsb3JlIHRoZSBiZWFjaFwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiWW91IGZpbmQgYSBsYXJnZSBPeXN0ZXIgc2hlbGwuIFllYXJzIG9mIGJvbWJhcmRtZW50IGJ5IHRoZSB3YXZlcyBoYXMgbGVmdCBpdCBicml0dGxlIGFuZCBjaGlwcGVkLCBidXQgaXQncyBjdXJ2ZXMgYXJlIHN0aWxsIGJlYXV0aWZ1bCBhbmQgcGVhcmxlc2NlbnRcIilcclxuICB9IGVsc2UgeyAvLyB0aGUgb25seSByZW1haW5pbmcgb3B0aW9uIGlzIHRvIGxlYXZlIHRoZSBiZWFjaCBzbyB3ZSBhc3N1bWUgdGhhdFxyXG4gICAgICBicmVhayAvLyBUaGUgYnJlYWsga2V5d29yZCBleGl0cyB1cyBvdXQgb2YgdGhlIGN1cnJlbnQgbG9vcFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGRpcmVjdGlvbiA9IGdldEFjdGlvbihcIkFzIHlvdSBsZWF2ZSB0aGUgYmVhY2ggeW91IHJlYWNoIHRoZSBlZGdlIG9mIGEgZGl2aWRlIGJldHdlZW4gYSBkYXJrIGZvcmVzdCBhbmQgYSBnaWFudCBjYXZlIGluIHRoZSBzaWRlIG9mIHRoZSBtb3VudGFpbi4gV2hpY2ggd2F5IHdvdWxkIHlvdSBsaWtlIHRvIGdvP1wiLCBbXCJlbnRlciB0aGUgZm9yZXN0XCIsIFwiZW50ZXIgdGhlIGNhdmVcIiwgXCJyZXR1cm4gdG8gdGhlIGJlYWNoXCJdKVxyXG5cclxuLy8gVE9ETzogQ29udGludWUgdGhlIGFkdmVudHVyZSA6KWBcclxuXHJcbmZ1bmN0aW9uIEVkaXRvcigpIHtcclxuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXHJcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy5nZXQoJ25hbWUnKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtZWRpdG9yXCI+XHJcbiAgICAgIDxOZXh0U2VvIHRpdGxlPVwiR2FtZSBFZGl0b3JcIiBkZXNjcmlwdGlvbj1cIkJ1aWxkIGEgZ2FtZSBvZiB5b3VyIG93blwiIC8+XHJcbiAgICAgIDxoMT5HYW1lIEVkaXRvcjwvaDE+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEJ1aWxkIHlvdXIgb3duIGdhbWUhIEJlIHN1cmUgdG8gcHJlc3MgdGhlIOKYge+4jyBidXR0b24gYW5kIHNoYXJlIHlvdXIgdXJsLlxyXG4gICAgICAgIDxiciAvPiBXYXJuaW5nOiBZb3UgbXVzdCBzYXZlIHlvdXIgVVJMIG9yIHlvdXIgZ2FtZSBkYXRhIGNvdWxkIGJlIGxvc3QuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPXtkZWZhdWx0R2FtZX0gY29uc29sZU1vZGUgc2hhcmluZyBkaXNhYmxlQXV0b1J1biAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==