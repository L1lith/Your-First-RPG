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

  console.log('f', router, code, props);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.disableAutoRun === true ? null : getOutput(code, props.consoleMode)),
      output = _useState3[0],
      setOutput = _useState3[1];

  return __jsx("div", {
    className: 'sandbox' + (props.hasOwnProperty('className') ? ' ' + props.className : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 28,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 39,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 51,
      columnNumber: 11
    }
  }, "\u274C") : null, props.hasOwnProperty('codeQueryParam') == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 13
    }
  }, "\u2601\uFE0F")) : null), __jsx("div", {
    className: "titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 85,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
        lineNumber: 113,
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
        lineNumber: 132,
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
        lineNumber: 137,
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
        lineNumber: 149,
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
        lineNumber: 158,
        columnNumber: 7
      }
    });
  } catch (err) {
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvZGVRdWVyeVBhcmFtIiwidmFsdWUiLCJjb2RlIiwic2V0Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNhYmxlQXV0b1J1biIsImdldE91dHB1dCIsImNvbnNvbGVNb2RlIiwib3V0cHV0Iiwic2V0T3V0cHV0IiwiY2xhc3NOYW1lIiwicmVhZE9ubHkiLCJub1Jlc2V0IiwiZGVmYXVsdENvZGUiLCJiYXNlUGF0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5ld0NvZGUiLCJsZW5ndGgiLCJnZXRDb25zb2xlT3V0cHV0IiwiZ2V0RXZhbE91dHB1dCIsIm9sZExvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUIsa0JBQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsbUJBQXdCSixzREFBUSxDQUM5QkcsTUFBTSxDQUFDRSxLQUFQLENBQWFDLGNBQWIsQ0FBNEJQLEtBQUssQ0FBQ1EsY0FBbEMsSUFDSUosTUFBTSxDQUFDRSxLQUFQLENBQWFOLEtBQUssQ0FBQ1EsY0FBbkIsQ0FESixHQUVJUixLQUFLLENBQUNTLEtBQU4sSUFBZSxFQUhX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NjBkMDAxNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY2VFZGl0b3IgZnJvbSAnLi9BY2VFZGl0b3InXHJcbmltcG9ydCAnLi9Db2RlU2FuZGJveC5zY3NzJ1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSAndXRpbCdcclxuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ2F1dG8tYmluZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VFZmZlY3QgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIENvZGVTYW5kYm94KHByb3BzKSB7XHJcbiAgY29uc3QgW3NoYXJlVVJMLCBzZXRTaGFyZVVSTF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXHJcbiAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICA6IHByb3BzLnZhbHVlIHx8ICcnXHJcbiAgKVxyXG4gIGNvbnNvbGUubG9nKCdmJywgcm91dGVyLCBjb2RlLCBwcm9wcylcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IG51bGwgOiBnZXRPdXRwdXQoY29kZSwgcHJvcHMuY29uc29sZU1vZGUpXHJcbiAgKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J3NhbmRib3gnICsgKHByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHByb3BzLmNsYXNzTmFtZSA6ICcnKX0+XHJcbiAgICAgIHt0eXBlb2Ygc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj5cclxuICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXtzaGFyZVVSTH0+XHJcbiAgICAgICAgICAgIFJpZ2h0IENsaWNrIGFuZCBDb3B5IFRoaXMgTGlua1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBjbG9zZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTaGFyZVVSTChudWxsKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICB7cHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJ1blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcGxheVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KGNvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKWtlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMj5KYXZhU2NyaXB0IHtwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4gICAgICAgIHtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuICAgICAgICB7cHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVzZXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvZGUoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgICAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb2RlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLmhhc093blByb3BlcnR5KCdjb2RlUXVlcnlQYXJhbScpID09IHRydWUgPyAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTaGFyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hhcmVVUkwoXHJcbiAgICAgICAgICAgICAgICAgIGAke3JvdXRlci5iYXNlUGF0aH0vcnBnL2VkaXRvcj8ke2NvZGVRdWVyeVBhcmFtfT0ke2VuY29kZVVSSUNvbXBvbmVudChjb2RlKX1gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAg4piB77iPXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdDb25zb2xlJyA6ICdPdXRwdXQnfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5PXtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e25ld0NvZGUgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb2RlKG5ld0NvZGUpXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5kaXNhYmxlQXV0b1J1biAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHNldE91dHB1dChnZXRPdXRwdXQobmV3Q29kZSwgcHJvcHMuY29uc29sZU1vZGUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge291dHB1dCA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIG91dHB1dFxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdXRwdXQoY29kZSwgY29uc29sZU1vZGUpIHtcclxuICBpZiAoY29kZS5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gY29uc29sZU1vZGUgPT09IHRydWUgPyBnZXRDb25zb2xlT3V0cHV0KGNvZGUpIDogZ2V0RXZhbE91dHB1dChjb2RlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+VHlwZSBzb21ldGhpbmcgdG8gc2VlIHRoZSBldmFsdWF0ZWQgb3V0cHV0PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29uc29sZU91dHB1dChjb2RlKSB7XHJcbiAgY29uc3Qgb2xkTG9nID0gY29uc29sZS5sb2dcclxuICBjb25zdCBsb2dPdXRwdXQgPSBbXVxyXG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgbG9nT3V0cHV0LnB1c2goYXJncylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3NbMF0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBldmFsKGNvZGUpXHJcbiAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgaWYgKGxvZ091dHB1dC5sZW5ndGggPCAxKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlxyXG4gICAgICAgICAgVHJ5IGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBjb25zb2xlIHRvIHNlZSBzb21lIG91dHB1dFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICByZWFkT25seVxyXG4gICAgICAgIHZhbHVlPXtsb2dPdXRwdXQubWFwKHZhbHVlID0+IGluc3BlY3QodmFsdWUpKS5qb2luKCc7XFxuJyl9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZhbE91dHB1dChjb2RlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG91dHB1dCA9IGV2YWwoY29kZSlcclxuICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZVNhbmRib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==