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

  console.log(router.query.hasOwnProperty(props.codeQueryParam), router.query, props.codeQueryParam);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (router.query.hasOwnProperty(props.codeQueryParam)) {
      var queryParam = router.query[props.codeQueryParam];

      if (code !== queryParam) {
        setCode(queryParam);
      }
    }
  });
  return __jsx("div", {
    className: 'sandbox' + (props.hasOwnProperty('className') ? ' ' + props.className : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 36,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 47,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 59,
      columnNumber: 11
    }
  }, "\u274C") : null, props.hasOwnProperty('codeQueryParam') == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("span", {
    title: "Share",
    className: "icon share",
    onClick: function onClick() {
      setShareURL("".concat(router.basePath, "/rpg/editor?").concat(codeQueryParam, "=").concat(encodeURIComponent(code)));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "\u2601\uFE0F")) : null), __jsx("div", {
    className: "titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "Run the program to see your output") : output));
}

_s(CodeSandbox, "GJn2Enmld9ukvt6VHTXecJoV3OI=", false, function () {
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
        lineNumber: 121,
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
        lineNumber: 140,
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
        lineNumber: 145,
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
        lineNumber: 157,
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
        lineNumber: 166,
        columnNumber: 7
      }
    });
  } catch (err) {
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvZGVRdWVyeVBhcmFtIiwidmFsdWUiLCJjb2RlIiwic2V0Q29kZSIsImRpc2FibGVBdXRvUnVuIiwiZ2V0T3V0cHV0IiwiY29uc29sZU1vZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwicXVlcnlQYXJhbSIsImNsYXNzTmFtZSIsInJlYWRPbmx5Iiwibm9SZXNldCIsImRlZmF1bHRDb2RlIiwiYmFzZVBhdGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJuZXdDb2RlIiwibGVuZ3RoIiwiZ2V0Q29uc29sZU91dHB1dCIsImdldEV2YWxPdXRwdXQiLCJvbGRMb2ciLCJsb2dPdXRwdXQiLCJhcmdzIiwicHVzaCIsImV2YWwiLCJtYXAiLCJpbnNwZWN0Iiwiam9pbiIsImVyciIsIm91dHB1dFNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQzFCLGtCQUFnQ0Msc0RBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLG1CQUF3Qkosc0RBQVEsQ0FDOUJHLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxjQUFiLENBQTRCUCxLQUFLLENBQUNRLGNBQWxDLElBQ0lKLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTixLQUFLLENBQUNRLGNBQW5CLENBREosR0FFSVIs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O0FBSUUsVUFBSSxFQUFDLFlBSlA7QUFLRSxXQUFLLEVBQUMsVUFMUjtBQU1FLGNBQVEsTUFOVjtBQU9FLFdBQUssRUFBRXlCLFlBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBV0QsR0FkRCxDQWNFLE9BQU9ELEdBQVAsRUFBWTtBQUNaLFdBQU87QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0Ysb0RBQU8sQ0FBQ0UsR0FBRCxDQUF2QyxDQUFQO0FBQ0Q7QUFDRjs7QUFFY3hDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JwZy9lZGl0b3IuN2ViM2VmZGU0ZTVjOTg1ZTdkMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjZUVkaXRvciBmcm9tICcuL0FjZUVkaXRvcidcclxuaW1wb3J0ICcuL0NvZGVTYW5kYm94LnNjc3MnXHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xyXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIENvZGVTYW5kYm94KHByb3BzKSB7XHJcbiAgY29uc3QgW3NoYXJlVVJMLCBzZXRTaGFyZVVSTF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXHJcbiAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICA6IHByb3BzLnZhbHVlIHx8ICcnXHJcbiAgKVxyXG4gIGNvbnN0IFtvdXRwdXQsIHNldE91dHB1dF0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gbnVsbCA6IGdldE91dHB1dChjb2RlLCBwcm9wcy5jb25zb2xlTW9kZSlcclxuICApXHJcbiAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5Lmhhc093blByb3BlcnR5KHByb3BzLmNvZGVRdWVyeVBhcmFtKSwgcm91dGVyLnF1ZXJ5LCBwcm9wcy5jb2RlUXVlcnlQYXJhbSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwcm9wcy5jb2RlUXVlcnlQYXJhbSkpIHtcclxuICAgICAgY29uc3QgcXVlcnlQYXJhbSA9IHJvdXRlci5xdWVyeVtwcm9wcy5jb2RlUXVlcnlQYXJhbV1cclxuICAgICAgaWYgKGNvZGUgIT09IHF1ZXJ5UGFyYW0pIHtcclxuICAgICAgICBzZXRDb2RlKHF1ZXJ5UGFyYW0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J3NhbmRib3gnICsgKHByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHByb3BzLmNsYXNzTmFtZSA6ICcnKX0+XHJcbiAgICAgIHt0eXBlb2Ygc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj5cclxuICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXtzaGFyZVVSTH0+XHJcbiAgICAgICAgICAgIFJpZ2h0IENsaWNrIGFuZCBDb3B5IFRoaXMgTGlua1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBjbG9zZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTaGFyZVVSTChudWxsKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICB7cHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJ1blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcGxheVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KGNvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKWtlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMj5KYXZhU2NyaXB0IHtwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4gICAgICAgIHtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuICAgICAgICB7cHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVzZXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvZGUoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgICAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb2RlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLmhhc093blByb3BlcnR5KCdjb2RlUXVlcnlQYXJhbScpID09IHRydWUgPyAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTaGFyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hhcmVVUkwoXHJcbiAgICAgICAgICAgICAgICAgIGAke3JvdXRlci5iYXNlUGF0aH0vcnBnL2VkaXRvcj8ke2NvZGVRdWVyeVBhcmFtfT0ke2VuY29kZVVSSUNvbXBvbmVudChjb2RlKX1gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAg4piB77iPXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdDb25zb2xlJyA6ICdPdXRwdXQnfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5PXtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e25ld0NvZGUgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb2RlKG5ld0NvZGUpXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5kaXNhYmxlQXV0b1J1biAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHNldE91dHB1dChnZXRPdXRwdXQobmV3Q29kZSwgcHJvcHMuY29uc29sZU1vZGUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge291dHB1dCA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIG91dHB1dFxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdXRwdXQoY29kZSwgY29uc29sZU1vZGUpIHtcclxuICBpZiAoY29kZS5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gY29uc29sZU1vZGUgPT09IHRydWUgPyBnZXRDb25zb2xlT3V0cHV0KGNvZGUpIDogZ2V0RXZhbE91dHB1dChjb2RlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+VHlwZSBzb21ldGhpbmcgdG8gc2VlIHRoZSBldmFsdWF0ZWQgb3V0cHV0PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29uc29sZU91dHB1dChjb2RlKSB7XHJcbiAgY29uc3Qgb2xkTG9nID0gY29uc29sZS5sb2dcclxuICBjb25zdCBsb2dPdXRwdXQgPSBbXVxyXG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgbG9nT3V0cHV0LnB1c2goYXJncylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3NbMF0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBldmFsKGNvZGUpXHJcbiAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgaWYgKGxvZ091dHB1dC5sZW5ndGggPCAxKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlxyXG4gICAgICAgICAgVHJ5IGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBjb25zb2xlIHRvIHNlZSBzb21lIG91dHB1dFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICByZWFkT25seVxyXG4gICAgICAgIHZhbHVlPXtsb2dPdXRwdXQubWFwKHZhbHVlID0+IGluc3BlY3QodmFsdWUpKS5qb2luKCc7XFxuJyl9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZhbE91dHB1dChjb2RlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG91dHB1dCA9IGV2YWwoY29kZSlcclxuICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZVNhbmRib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==