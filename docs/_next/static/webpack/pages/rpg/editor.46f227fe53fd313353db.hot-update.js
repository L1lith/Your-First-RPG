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

  var _this = this;

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

  var hasCheckedQuery = false;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!router.isReady || hasCheckedQuery) return;
    hasCheckedQuery = true;
    console.log(router.query.hasOwnProperty(props.codeQueryParam), router.query, props.codeQueryParam);

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
      lineNumber: 36,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 43,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 54,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "JavaScript ", props.consoleMode === true ? 'Terminal' : 'Evaluator'), props.readOnly === true ? ' (Read Only)' : null, props.noReset !== true ? __jsx("span", {
    title: "Reset",
    className: "icon reset",
    onClick: function onClick() {
      setCode(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : _this.props.value || '');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "\u274C") : null, props.hasOwnProperty('codeQueryParam') == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx("span", {
    title: "Share",
    className: "icon share",
    onClick: function onClick() {
      setShareURL("".concat(router.basePath, "/rpg/editor?").concat(props.codeQueryParam, "=").concat(encodeURIComponent(code)));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "\u2601\uFE0F")) : null), __jsx("div", {
    className: "titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
        lineNumber: 130,
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
        lineNumber: 149,
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
        lineNumber: 154,
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
        lineNumber: 166,
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
        lineNumber: 175,
        columnNumber: 7
      }
    });
  } catch (err) {
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvZGVRdWVyeVBhcmFtIiwidmFsdWUiLCJjb2RlIiwic2V0Q29kZSIsImRpc2FibGVBdXRvUnVuIiwiZ2V0T3V0cHV0IiwiY29uc29sZU1vZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJoYXNDaGVja2VkUXVlcnkiLCJ1c2VFZmZlY3QiLCJpc1JlYWR5IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5UGFyYW0iLCJjbGFzc05hbWUiLCJyZWFkT25seSIsIm5vUmVzZXQiLCJiYXNlUGF0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5ld0NvZGUiLCJsZW5ndGgiLCJnZXRDb25zb2xlT3V0cHV0IiwiZ2V0RXZhbE91dHB1dCIsIm9sZExvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUIsa0JBQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsbUJBQXdCSixzREFBUSxDQUM5QkcsTUFBTSxDQUFDRSxLQUFQLENBQWFDLGNBQWIsQ0FBNEJQLEtBQUssQ0FBQ1EsY0FBbEMsSUFDSUosTUFBTSxDQUFDRSxLQUFQLENBQWFOLEtBQUssQ0FB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TUssTUFBTSxHQUFHcUIsSUFBSSxDQUFDMUIsSUFBRCxDQUFuQjtBQUNBLFFBQUkrQixZQUFZLEdBQUdILG9EQUFPLENBQUN2QixNQUFELENBQTFCO0FBQ0EsV0FDRSxNQUFDLGtEQUFEO0FBQ0UsZUFBUyxFQUFDLGNBRFo7QUFFRSxXQUFLLEVBQUMsS0FGUjtBQUdFLFlBQU0sRUFBQyxNQUhUO0FBSUUsVUFBSSxFQUFDLFlBSlA7QUFLRSxXQUFLLEVBQUMsVUFMUjtBQU1FLGNBQVEsTUFOVjtBQU9FLFdBQUssRUFBRTBCLFlBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBV0QsR0FkRCxDQWNFLE9BQU9ELEdBQVAsRUFBWTtBQUNaLFdBQU87QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0Ysb0RBQU8sQ0FBQ0UsR0FBRCxDQUF2QyxDQUFQO0FBQ0Q7QUFDRjs7QUFFY3pDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JwZy9lZGl0b3IuNDZmMjI3ZmU1M2ZkMzEzMzUzZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjZUVkaXRvciBmcm9tICcuL0FjZUVkaXRvcidcclxuaW1wb3J0ICcuL0NvZGVTYW5kYm94LnNjc3MnXHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xyXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIENvZGVTYW5kYm94KHByb3BzKSB7XHJcbiAgY29uc3QgW3NoYXJlVVJMLCBzZXRTaGFyZVVSTF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXHJcbiAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICA6IHByb3BzLnZhbHVlIHx8ICcnXHJcbiAgKVxyXG4gIGNvbnN0IFtvdXRwdXQsIHNldE91dHB1dF0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gbnVsbCA6IGdldE91dHB1dChjb2RlLCBwcm9wcy5jb25zb2xlTW9kZSlcclxuICApXHJcbiAgbGV0IGhhc0NoZWNrZWRRdWVyeSA9IGZhbHNlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcm91dGVyLmlzUmVhZHkgfHwgaGFzQ2hlY2tlZFF1ZXJ5KSByZXR1cm5cclxuICAgIGhhc0NoZWNrZWRRdWVyeSA9IHRydWVcclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pLFxyXG4gICAgICByb3V0ZXIucXVlcnksXHJcbiAgICAgIHByb3BzLmNvZGVRdWVyeVBhcmFtXHJcbiAgICApXHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5Lmhhc093blByb3BlcnR5KHByb3BzLmNvZGVRdWVyeVBhcmFtKSkge1xyXG4gICAgICBjb25zdCBxdWVyeVBhcmFtID0gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICBpZiAoY29kZSAhPT0gcXVlcnlQYXJhbSkge1xyXG4gICAgICAgIHNldENvZGUocXVlcnlQYXJhbSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc2FuZGJveCcgKyAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2NsYXNzTmFtZScpID8gJyAnICsgcHJvcHMuY2xhc3NOYW1lIDogJycpfT5cclxuICAgICAge3R5cGVvZiBzaGFyZVVSTCA9PSAnc3RyaW5nJyA/IChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4gICAgICAgICAgWW91ciBTaGFyaW5nIFVSTDpcclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVybFwiIGhyZWY9e3NoYXJlVVJMfT5cclxuICAgICAgICAgICAgUmlnaHQgQ2xpY2sgYW5kIENvcHkgVGhpcyBMaW5rXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGNsb3NlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNoYXJlVVJMKG51bGwpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICDinYxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxyXG4gICAgICAgIHtwcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUnVuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBwbGF5XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE91dHB1dChnZXRPdXRwdXQoY29kZSwgcHJvcHMuY29uc29sZU1vZGUpKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4pa2XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGgyPkphdmFTY3JpcHQge3Byb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ1Rlcm1pbmFsJyA6ICdFdmFsdWF0b3InfTwvaDI+XHJcbiAgICAgICAge3Byb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gJyAoUmVhZCBPbmx5KScgOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy5ub1Jlc2V0ICE9PSB0cnVlID8gKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgdGl0bGU9XCJSZXNldFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q29kZShcclxuICAgICAgICAgICAgICAgIHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwcm9wcy5jb2RlUXVlcnlQYXJhbSlcclxuICAgICAgICAgICAgICAgICAgPyByb3V0ZXIucXVlcnlbcHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKdjFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29kZVF1ZXJ5UGFyYW0nKSA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiU2hhcmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gc2hhcmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNoYXJlVVJMKFxyXG4gICAgICAgICAgICAgICAgICBgJHtyb3V0ZXIuYmFzZVBhdGh9L3JwZy9lZGl0b3I/JHtwcm9wcy5jb2RlUXVlcnlQYXJhbX09JHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICAgICAgICApfWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICDimIHvuI9cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29kZSBJbnB1dDwvaDI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ0NvbnNvbGUnIDogJ091dHB1dCd9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgICAgcmVhZE9ubHk9e3Byb3BzLnJlYWRPbmx5ID09PSB0cnVlfVxyXG4gICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17bmV3Q29kZSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvZGUobmV3Q29kZSlcclxuICAgICAgICAgICAgaWYgKHByb3BzLmRpc2FibGVBdXRvUnVuICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgc2V0T3V0cHV0KGdldE91dHB1dChuZXdDb2RlLCBwcm9wcy5jb25zb2xlTW9kZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7b3V0cHV0ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+UnVuIHRoZSBwcm9ncmFtIHRvIHNlZSB5b3VyIG91dHB1dDwvc3Bhbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgb3V0cHV0XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE91dHB1dChjb2RlLCBjb25zb2xlTW9kZSkge1xyXG4gIGlmIChjb2RlLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiBjb25zb2xlTW9kZSA9PT0gdHJ1ZSA/IGdldENvbnNvbGVPdXRwdXQoY29kZSkgOiBnZXRFdmFsT3V0cHV0KGNvZGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5UeXBlIHNvbWV0aGluZyB0byBzZWUgdGhlIGV2YWx1YXRlZCBvdXRwdXQ8L3NwYW4+XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb25zb2xlT3V0cHV0KGNvZGUpIHtcclxuICBjb25zdCBvbGRMb2cgPSBjb25zb2xlLmxvZ1xyXG4gIGNvbnN0IGxvZ091dHB1dCA9IFtdXHJcbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICBsb2dPdXRwdXQucHVzaChhcmdzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nT3V0cHV0LnB1c2goYXJnc1swXSlcclxuICAgIH1cclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGV2YWwoY29kZSlcclxuICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICBpZiAobG9nT3V0cHV0Lmxlbmd0aCA8IDEpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+XHJcbiAgICAgICAgICBUcnkgbG9nZ2luZyBzb21ldGhpbmcgdG8gdGhlIGNvbnNvbGUgdG8gc2VlIHNvbWUgb3V0cHV0XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgdmFsdWU9e2xvZ091dHB1dC5tYXAodmFsdWUgPT4gaW5zcGVjdCh2YWx1ZSkpLmpvaW4oJztcXG4nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFdmFsT3V0cHV0KGNvZGUpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gZXZhbChjb2RlKVxyXG4gICAgbGV0IG91dHB1dFNvdXJjZSA9IGluc3BlY3Qob3V0cHV0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICByZWFkT25seVxyXG4gICAgICAgIHZhbHVlPXtvdXRwdXRTb3VyY2V9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlU2FuZGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9