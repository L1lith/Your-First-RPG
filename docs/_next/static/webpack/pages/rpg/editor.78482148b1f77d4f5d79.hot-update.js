webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./components/CodeSandbox.js":
/*!***********************************!*\
  !*** ./components/CodeSandbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AceEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AceEditor */ "./components/AceEditor.js");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeSandbox.scss */ "./components/CodeSandbox.scss");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\components\\CodeSandbox.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function CodeSandbox(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      shareURL = _useState[0],
      setShareURL = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : props.value || ''),
      code = _useState2[0],
      setCode = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.disableAutoRun === true ? null : getOutput(code, props.consoleMode)),
      output = _useState3[0],
      setOutput = _useState3[1];

  return __jsx("div", {
    className: 'sandbox' + (props.hasOwnProperty('className') ? ' ' + props.className : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Right Click and Copy This Link"), __jsx("span", {
    className: "icon close",
    onClick: function onClick() {
      setShareURL(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, props.disableAutoRun === true ? __jsx("span", {
    title: "Run",
    className: "icon play",
    onClick: function onClick() {
      setOutput(getOutput(code, props.consoleMode));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "JavaScript ", props.consoleMode === true ? 'Terminal' : 'Evaluator'), props.readOnly === true ? ' (Read Only)' : null, props.noReset !== true ? __jsx("span", {
    title: "Reset",
    className: "icon reset",
    onClick: function onClick() {
      setCode(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : defaultCode);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "\u274C") : null, props.hasOwnProperty('codeQueryParam') == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("span", {
    title: "Share",
    className: "icon share",
    onClick: function onClick() {
      setShareURL(router.basePath + '/rpg/editor?code=' + encodeURIComponent(code));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "\u2601\uFE0F")) : null), __jsx("div", {
    className: "titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "50%",
    height: "100%",
    mode: "javascript",
    theme: "ambiance",
    readOnly: props.readOnly === true,
    value: code,
    onChange: function onChange(newCode) {
      setCode(newCode);

      if (props.disableAutoRun !== true) {
        setOutput(getOutput(newCode, props.consoleMode));
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, "Run the program to see your output") : output));
}

_s(CodeSandbox, "IVehoA8mNCFbMaFowQLxNq8ckms=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = CodeSandbox;

function getOutput(code, consoleMode) {
  if (code.length > 0) {
    return consoleMode === true ? getConsoleOutput(code) : getEvalOutput(code);
  } else {
    return __jsx("span", {
      className: "output empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 12
      }
    }, "Type something to see the evaluated output");
  }
}

function getConsoleOutput(code) {
  var oldLog = console.log;
  var logOutput = [];

  console.log = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length > 1) {
      logOutput.push(args);
    } else {
      logOutput.push(args[0]);
    }
  };

  try {
    eval(code);
    console.log = oldLog;
    if (logOutput.length < 1) return __jsx("span", {
      className: "output empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, "Try logging something to the console to see some output");
    return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "output valid",
      width: "50%",
      height: "100%",
      mode: "javascript",
      theme: "ambiance",
      readOnly: true,
      value: logOutput.map(function (value) {
        return Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(value);
      }).join(';\n'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }
    });
  } catch (err) {
    console.log = oldLog;
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 12
      }
    }, Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(err));
  }
}

function getEvalOutput(code) {
  try {
    var output = eval(code);
    var outputSource = Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(output);
    return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "output valid",
      width: "50%",
      height: "100%",
      mode: "javascript",
      theme: "ambiance",
      readOnly: true,
      value: outputSource,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }
    });
  } catch (err) {
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 12
      }
    }, Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(err));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CodeSandbox);

var _c;

$RefreshReg$(_c, "CodeSandbox");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvZGVRdWVyeVBhcmFtIiwidmFsdWUiLCJjb2RlIiwic2V0Q29kZSIsImRpc2FibGVBdXRvUnVuIiwiZ2V0T3V0cHV0IiwiY29uc29sZU1vZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJjbGFzc05hbWUiLCJyZWFkT25seSIsIm5vUmVzZXQiLCJkZWZhdWx0Q29kZSIsImJhc2VQYXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibmV3Q29kZSIsImxlbmd0aCIsImdldENvbnNvbGVPdXRwdXQiLCJnZXRFdmFsT3V0cHV0Iiwib2xkTG9nIiwiY29uc29sZSIsImxvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUIsa0JBQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsbUJBQXdCSixzREFBUSxDQUM5QkcsTUFBTSxDQUFDRSxLQUFQLENBQWFDLGNBQWIsQ0FBNEJQLEtBQUssQ0FBQ1EsY0FBbEMsSUFDSUosTUFBTSxDQUFDRSxLQUFQLENBQWFOLEtBQUssQ0FBQ1EsY0FBbkIsQ0FESixHQUVJUixLQUFLLENBQUNTLEtBQU4sSUFBZSxFQUhX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QUFBLE9BQW5CLEVBQXVDMkIsSUFBdkMsQ0FBNEMsS0FBNUMsQ0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQXBCRCxDQW9CRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlQsV0FBTyxDQUFDQyxHQUFSLEdBQWNGLE1BQWQ7QUFDQSxXQUFPO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NRLG9EQUFPLENBQUNFLEdBQUQsQ0FBdkMsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1gsYUFBVCxDQUF1QmhCLElBQXZCLEVBQTZCO0FBQzNCLE1BQUk7QUFDRixRQUFNSyxNQUFNLEdBQUdrQixJQUFJLENBQUN2QixJQUFELENBQW5CO0FBQ0EsUUFBSTRCLFlBQVksR0FBR0gsb0RBQU8sQ0FBQ3BCLE1BQUQsQ0FBMUI7QUFDQSxXQUNFLE1BQUMsa0RBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLFdBQUssRUFBQyxLQUZSO0FBR0UsWUFBTSxFQUFDLE1BSFQ7QUFJRSxVQUFJLEVBQUMsWUFKUDtBQUtFLFdBQUssRUFBQyxVQUxSO0FBTUUsY0FBUSxNQU5WO0FBT0UsV0FBSyxFQUFFdUIsWUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQWRELENBY0UsT0FBT0QsR0FBUCxFQUFZO0FBQ1osV0FBTztBQUFNLGVBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDRixvREFBTyxDQUFDRSxHQUFELENBQXZDLENBQVA7QUFDRDtBQUNGOztBQUVjdEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci43ODQ4MjE0OGIxZjc3ZDRmNWQ3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjZUVkaXRvciBmcm9tICcuL0FjZUVkaXRvcidcclxuaW1wb3J0ICcuL0NvZGVTYW5kYm94LnNjc3MnXHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xyXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIENvZGVTYW5kYm94KHByb3BzKSB7XHJcbiAgY29uc3QgW3NoYXJlVVJMLCBzZXRTaGFyZVVSTF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXHJcbiAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICA6IHByb3BzLnZhbHVlIHx8ICcnXHJcbiAgKVxyXG4gIGNvbnN0IFtvdXRwdXQsIHNldE91dHB1dF0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gbnVsbCA6IGdldE91dHB1dChjb2RlLCBwcm9wcy5jb25zb2xlTW9kZSlcclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc2FuZGJveCcgKyAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2NsYXNzTmFtZScpID8gJyAnICsgcHJvcHMuY2xhc3NOYW1lIDogJycpfT5cclxuICAgICAge3R5cGVvZiBzaGFyZVVSTCA9PSAnc3RyaW5nJyA/IChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4gICAgICAgICAgWW91ciBTaGFyaW5nIFVSTDpcclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVybFwiIGhyZWY9e3NoYXJlVVJMfT5cclxuICAgICAgICAgICAgUmlnaHQgQ2xpY2sgYW5kIENvcHkgVGhpcyBMaW5rXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGNsb3NlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNoYXJlVVJMKG51bGwpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICDinYxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxyXG4gICAgICAgIHtwcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUnVuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBwbGF5XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE91dHB1dChnZXRPdXRwdXQoY29kZSwgcHJvcHMuY29uc29sZU1vZGUpKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4pa2XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGgyPkphdmFTY3JpcHQge3Byb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ1Rlcm1pbmFsJyA6ICdFdmFsdWF0b3InfTwvaDI+XHJcbiAgICAgICAge3Byb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gJyAoUmVhZCBPbmx5KScgOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy5ub1Jlc2V0ICE9PSB0cnVlID8gKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgdGl0bGU9XCJSZXNldFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q29kZShcclxuICAgICAgICAgICAgICAgIHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwcm9wcy5jb2RlUXVlcnlQYXJhbSlcclxuICAgICAgICAgICAgICAgICAgPyByb3V0ZXIucXVlcnlbcHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbiAgICAgICAgICAgICAgICAgIDogZGVmYXVsdENvZGVcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICDinYxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7cHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvZGVRdWVyeVBhcmFtJykgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNoYXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHNoYXJlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaGFyZVVSTChyb3V0ZXIuYmFzZVBhdGggKyAnL3JwZy9lZGl0b3I/Y29kZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNvZGUpKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIOKYge+4j1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seT17cHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbiAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb2RlID0+IHtcclxuICAgICAgICAgICAgc2V0Q29kZShuZXdDb2RlKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuZGlzYWJsZUF1dG9SdW4gIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KG5ld0NvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtvdXRwdXQgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5SdW4gdGhlIHByb2dyYW0gdG8gc2VlIHlvdXIgb3V0cHV0PC9zcGFuPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBvdXRwdXRcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3V0cHV0KGNvZGUsIGNvbnNvbGVNb2RlKSB7XHJcbiAgaWYgKGNvZGUubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGVNb2RlID09PSB0cnVlID8gZ2V0Q29uc29sZU91dHB1dChjb2RlKSA6IGdldEV2YWxPdXRwdXQoY29kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbnNvbGVPdXRwdXQoY29kZSkge1xyXG4gIGNvbnN0IG9sZExvZyA9IGNvbnNvbGUubG9nXHJcbiAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2dPdXRwdXQucHVzaChhcmdzWzBdKVxyXG4gICAgfVxyXG4gIH1cclxuICB0cnkge1xyXG4gICAgZXZhbChjb2RlKVxyXG4gICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5cclxuICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICB2YWx1ZT17bG9nT3V0cHV0Lm1hcCh2YWx1ZSA9PiBpbnNwZWN0KHZhbHVlKSkuam9pbignO1xcbicpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2YWxPdXRwdXQoY29kZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBldmFsKGNvZGUpXHJcbiAgICBsZXQgb3V0cHV0U291cmNlID0gaW5zcGVjdChvdXRwdXQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgdmFsdWU9e291dHB1dFNvdXJjZX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVTYW5kYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=