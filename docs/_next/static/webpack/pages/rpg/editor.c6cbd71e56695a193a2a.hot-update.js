webpackHotUpdate_N_E("pages/rpg/editor",{

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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var gameCode = params.get('code');
    if (typeof gameCode == 'string' && gameCode.length > 1) setCode(gameCode);
  });
  return __jsx("div", {
    className: "game-editor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "Game Editor",
    description: "Build a game of your own",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Game Editor"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Build your own game! Be sure to press the \u2601\uFE0F button and share your url.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), " Warning: You must save your URL or your game data could be lost."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: ourCode,
    consoleMode: true,
    sharing: true,
    disableAutoRun: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
}

_s(Editor, "sThQh8VMq+vckm8rpeaRQOUxX5U=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcnBnL2VkaXRvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0R2FtZSIsIkVkaXRvciIsInVzZVN0YXRlIiwib3VyQ29kZSIsInNldENvZGUiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInVzZUVmZmVjdCIsImdhbWVDb2RlIiwiZ2V0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsOGpFQUFqQjs7QUE2Q0EsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUNoQixrQkFBMkJDLFFBQVEsQ0FBQ0YsV0FBRCxDQUFuQztBQUFBO0FBQUEsTUFBT0csT0FBUDtBQUFBLE1BQWdCQyxPQUFoQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsZUFBSixDQUFvQkMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFwQyxDQUFmO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR04sTUFBTSxDQUFDTyxHQUFQLENBQVcsTUFBWCxDQUFqQjtBQUNBLFFBQUksT0FBT0QsUUFBUCxJQUFtQixRQUFuQixJQUErQkEsUUFBUSxDQUFDRSxNQUFULEdBQWtCLENBQXJELEVBQXdEVCxPQUFPLENBQUNPLFFBQUQsQ0FBUDtBQUN6RCxHQUhRLENBQVQ7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUMsYUFBZjtBQUE2QixlQUFXLEVBQUMsMEJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixzRUFIRixFQU9FLE1BQUMsK0RBQUQ7QUFBYSxTQUFLLEVBQUVSLE9BQXBCO0FBQTZCLGVBQVcsTUFBeEM7QUFBeUMsV0FBTyxNQUFoRDtBQUFpRCxrQkFBYyxNQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQVdEOztHQWxCUUYsTTs7S0FBQUEsTTtBQW9CTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci5jNmNiZDcxZTU2Njk1YTE5M2EyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvZGVTYW5kYm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVNhbmRib3gnXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBkZWZhdWx0R2FtZSA9IGBmdW5jdGlvbiBzbWFydFByb21wdChxdWVzdGlvbikge1xyXG4gIHZhciBvdXRwdXQgPSBudWxsXHJcbiAgd2hpbGUob3V0cHV0ID09PSBudWxsIHx8IG91dHB1dC50cmltKCkubGVuZ3RoIDwgMSkge1xyXG4gICAgICBvdXRwdXQgPSBwcm9tcHQocXVlc3Rpb24pXHJcbiAgfVxyXG4gIHJldHVybiBvdXRwdXQudHJpbSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFjdGlvbihxdWVzdGlvbiwgYWN0aW9uTGlzdCkgeyBcclxuICAvLyBIZXJlIHdlIGdpdmUgYSBsaXN0IG9mIHBvc3NpYmxlIGFjdGlvbnMgYW5kIHJldHJ5IHVudGlsIHRoZSB1c2VyIHByb3ZpZGVzIGEgdmFsaWQgcmVzcG9uc2VcclxuICBsZXQgYW5zd2VyID0gbnVsbFxyXG4gIHdoaWxlICghYWN0aW9uTGlzdC5pbmNsdWRlcyhhbnN3ZXIpKSB7XHJcbiAgICAgIGFuc3dlciA9IHNtYXJ0UHJvbXB0KHF1ZXN0aW9uICsgXCIgLSBwb3NzaWJsZSBhY3Rpb25zOiBcIiArIGFjdGlvbkxpc3Quam9pbihcIiwgXCIpKSAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIGxpc3QgdG8gYSBzdHJpbmcgYnkgam9pbmluZyBhbGwgb2YgaXRzIGNvbnRlbnRzIHdpdGggYSBjb21tYSBhbmQgYSBzcGFjZVxyXG4gIH1cclxuICByZXR1cm4gYW5zd2VyXHJcbn1cclxuXHJcbi8vLy8vLy8vLy9cclxuLy8gSU5GTyAvL1xyXG4vLy8vLy8vLy8vXHJcbi8vIElmIHlvdSBnZXQgc3R1Y2sgb3Igd2FudCB0byBsZWFybiBob3cgdG8gZG8gbW9yZSB0aGluZ3MgY29uc2lkZXIgY2hlY2tpbmcgb3V0IHRoZSByZXNvdXJjZXMgc2VjdGlvbiBodHRwczovL2wxbGl0aC5naXRodWIuaW8vSW50cm8tQ29kaW5nLUNvbmNlcHRzI3Jlc291cmNlc1xyXG4vLyBBbHNvLCBkb24ndCBiZSBhZnJhaWQgdG8gZ29vZ2xlIGl0IVxyXG4vLy8vLy8vLy8vL1xyXG5cclxudmFyIG5hbWUgPSBzbWFydFByb21wdChcIldoYXQgaXMgeW91ciBuYW1lIGFkdmVudHVyZXI/XCIpXHJcblxyXG5hbGVydChcIllvdSB3YWtlIHVwIG9uIGEgc3RyYW5nZSBiZWFjaC4gJ1wiICsgbmFtZSArIFwiJyBpcyB3cml0dGVuIG9uIHRoZSBpbnNpZGUgb2YgeW91ciBzaGlydC5cIilcclxuXHJcbndoaWxlICh0cnVlKSB7IC8vIFdlIHRyYXAgdGhlIHVzZXIgaW4gdGhpcyBsb29wIHVudGlsIHRoZXkgbGVhdmUgdGhlIGJlYWNoXHJcbiAgY29uc3QgbmV4dEFjdGlvbiA9IGdldEFjdGlvbihcIldoYXQgd291bGQgeW91IGxpa2UgdG8gZG8/XCIsIFtcIndhaXRcIiwgXCJleHBsb3JlIHRoZSBiZWFjaFwiLCBcImxlYXZlIHRoZSBiZWFjaFwiXSkgLy8gTGlzdHMgYXJlIHN1cnJvdW5kZWQgYnkgc3F1YXJlIGJyYWNrZXRzIGFuZCBzZXBhcmF0ZWQgYnkgY29tbWFzXHJcblxyXG4gIGlmIChuZXh0QWN0aW9uID09PSBcIndhaXRcIikge1xyXG4gICAgICBhbGVydChcIllvdSB3YWl0IGFyb3VuZC4gVGhlIGJhcmtpbmcgb2YgdGhlIGd1bGxzIGFuZCB0aGUgbGFwcGluZyBvZiB0aGUgb2NlYW4gbHVsbHMgeW91IGludG8gYSBkZWVwIHNsZWVwXCIpXHJcbiAgfSBlbHNlIGlmIChuZXh0QWN0aW9uID09PSBcImV4cGxvcmUgdGhlIGJlYWNoXCIpIHtcclxuICAgICAgYWxlcnQoXCJZb3UgZmluZCBhIGxhcmdlIE95c3RlciBzaGVsbC4gWWVhcnMgb2YgYm9tYmFyZG1lbnQgYnkgdGhlIHdhdmVzIGhhcyBsZWZ0IGl0IGJyaXR0bGUgYW5kIGNoaXBwZWQsIGJ1dCBpdCdzIGN1cnZlcyBhcmUgc3RpbGwgYmVhdXRpZnVsIGFuZCBwZWFybGVzY2VudFwiKVxyXG4gIH0gZWxzZSB7IC8vIHRoZSBvbmx5IHJlbWFpbmluZyBvcHRpb24gaXMgdG8gbGVhdmUgdGhlIGJlYWNoIHNvIHdlIGFzc3VtZSB0aGF0XHJcbiAgICAgIGJyZWFrIC8vIFRoZSBicmVhayBrZXl3b3JkIGV4aXRzIHVzIG91dCBvZiB0aGUgY3VycmVudCBsb29wXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgZGlyZWN0aW9uID0gZ2V0QWN0aW9uKFwiQXMgeW91IGxlYXZlIHRoZSBiZWFjaCB5b3UgcmVhY2ggdGhlIGVkZ2Ugb2YgYSBkaXZpZGUgYmV0d2VlbiBhIGRhcmsgZm9yZXN0IGFuZCBhIGdpYW50IGNhdmUgaW4gdGhlIHNpZGUgb2YgdGhlIG1vdW50YWluLiBXaGljaCB3YXkgd291bGQgeW91IGxpa2UgdG8gZ28/XCIsIFtcImVudGVyIHRoZSBmb3Jlc3RcIiwgXCJlbnRlciB0aGUgY2F2ZVwiLCBcInJldHVybiB0byB0aGUgYmVhY2hcIl0pXHJcblxyXG4vLyBUT0RPOiBDb250aW51ZSB0aGUgYWR2ZW50dXJlIDopYFxyXG5cclxuZnVuY3Rpb24gRWRpdG9yKCkge1xyXG4gIGNvbnN0IFtvdXJDb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKGRlZmF1bHRHYW1lKVxyXG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FtZUNvZGUgPSBwYXJhbXMuZ2V0KCdjb2RlJylcclxuICAgIGlmICh0eXBlb2YgZ2FtZUNvZGUgPT0gJ3N0cmluZycgJiYgZ2FtZUNvZGUubGVuZ3RoID4gMSkgc2V0Q29kZShnYW1lQ29kZSlcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtZWRpdG9yXCI+XHJcbiAgICAgIDxOZXh0U2VvIHRpdGxlPVwiR2FtZSBFZGl0b3JcIiBkZXNjcmlwdGlvbj1cIkJ1aWxkIGEgZ2FtZSBvZiB5b3VyIG93blwiIC8+XHJcbiAgICAgIDxoMT5HYW1lIEVkaXRvcjwvaDE+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEJ1aWxkIHlvdXIgb3duIGdhbWUhIEJlIHN1cmUgdG8gcHJlc3MgdGhlIOKYge+4jyBidXR0b24gYW5kIHNoYXJlIHlvdXIgdXJsLlxyXG4gICAgICAgIDxiciAvPiBXYXJuaW5nOiBZb3UgbXVzdCBzYXZlIHlvdXIgVVJMIG9yIHlvdXIgZ2FtZSBkYXRhIGNvdWxkIGJlIGxvc3QuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPXtvdXJDb2RlfSBjb25zb2xlTW9kZSBzaGFyaW5nIGRpc2FibGVBdXRvUnVuIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxyXG4iXSwic291cmNlUm9vdCI6IiJ9