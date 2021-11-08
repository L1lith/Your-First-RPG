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
      setShareURL("".concat(router.basePath, "/rpg/editor?").concat(codeQueryParam, "=").concat(encodeURIComponent(code)));
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
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 100,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
        lineNumber: 128,
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
        lineNumber: 147,
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
        lineNumber: 152,
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
        lineNumber: 164,
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
        lineNumber: 173,
        columnNumber: 7
      }
    });
  } catch (err) {
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvZGVRdWVyeVBhcmFtIiwidmFsdWUiLCJjb2RlIiwic2V0Q29kZSIsImRpc2FibGVBdXRvUnVuIiwiZ2V0T3V0cHV0IiwiY29uc29sZU1vZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJoYXNDaGVja2VkUXVlcnkiLCJ1c2VFZmZlY3QiLCJpc1JlYWR5IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5UGFyYW0iLCJjbGFzc05hbWUiLCJyZWFkT25seSIsIm5vUmVzZXQiLCJiYXNlUGF0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5ld0NvZGUiLCJsZW5ndGgiLCJnZXRDb25zb2xlT3V0cHV0IiwiZ2V0RXZhbE91dHB1dCIsIm9sZExvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUIsa0JBQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsbUJBQXdCSixzREFBUSxDQUM5QkcsTUFBTSxDQUFDRSxLQUFQLENBQWFDLGNBQWIsQ0FBNEJQLEtBQUssQ0FBQ1EsY0FBbEMsSUFDSUosTUFBTSxDQUFDRSxLQUFQLENBQWFOLEtBQUssQ0FB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QixJQUFJLENBQUMxQixJQUFELENBQW5CO0FBQ0EsUUFBSStCLFlBQVksR0FBR0gsb0RBQU8sQ0FBQ3ZCLE1BQUQsQ0FBMUI7QUFDQSxXQUNFLE1BQUMsa0RBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLFdBQUssRUFBQyxLQUZSO0FBR0UsWUFBTSxFQUFDLE1BSFQ7QUFJRSxVQUFJLEVBQUMsWUFKUDtBQUtFLFdBQUssRUFBQyxVQUxSO0FBTUUsY0FBUSxNQU5WO0FBT0UsV0FBSyxFQUFFMEIsWUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQWRELENBY0UsT0FBT0QsR0FBUCxFQUFZO0FBQ1osV0FBTztBQUFNLGVBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDRixvREFBTyxDQUFDRSxHQUFELENBQXZDLENBQVA7QUFDRDtBQUNGOztBQUVjekMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci5jYzhmYTY3YWM5ZGM4ODEyMjEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yJ1xyXG5pbXBvcnQgJy4vQ29kZVNhbmRib3guc2NzcydcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnXHJcbmltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZnVuY3Rpb24gQ29kZVNhbmRib3gocHJvcHMpIHtcclxuICBjb25zdCBbc2hhcmVVUkwsIHNldFNoYXJlVVJMXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcclxuICAgIHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwcm9wcy5jb2RlUXVlcnlQYXJhbSlcclxuICAgICAgPyByb3V0ZXIucXVlcnlbcHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbiAgICAgIDogcHJvcHMudmFsdWUgfHwgJydcclxuICApXHJcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKFxyXG4gICAgcHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyBudWxsIDogZ2V0T3V0cHV0KGNvZGUsIHByb3BzLmNvbnNvbGVNb2RlKVxyXG4gIClcclxuICBsZXQgaGFzQ2hlY2tlZFF1ZXJ5ID0gZmFsc2VcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSB8fCBoYXNDaGVja2VkUXVlcnkpIHJldHVyblxyXG4gICAgaGFzQ2hlY2tlZFF1ZXJ5ID0gdHJ1ZVxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwcm9wcy5jb2RlUXVlcnlQYXJhbSksXHJcbiAgICAgIHJvdXRlci5xdWVyeSxcclxuICAgICAgcHJvcHMuY29kZVF1ZXJ5UGFyYW1cclxuICAgIClcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5UGFyYW0gPSByb3V0ZXIucXVlcnlbcHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbiAgICAgIGlmIChjb2RlICE9PSBxdWVyeVBhcmFtKSB7XHJcbiAgICAgICAgc2V0Q29kZShxdWVyeVBhcmFtKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eydzYW5kYm94JyArIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyAnICcgKyBwcm9wcy5jbGFzc05hbWUgOiAnJyl9PlxyXG4gICAgICB7dHlwZW9mIHNoYXJlVVJMID09ICdzdHJpbmcnID8gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXJlLXBvcHVwXCI+XHJcbiAgICAgICAgICBZb3VyIFNoYXJpbmcgVVJMOlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidXJsXCIgaHJlZj17c2hhcmVVUkx9PlxyXG4gICAgICAgICAgICBSaWdodCBDbGljayBhbmQgQ29weSBUaGlzIExpbmtcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gY2xvc2VcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2hhcmVVUkwobnVsbClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKdjFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XHJcbiAgICAgICAge3Byb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgdGl0bGU9XCJSdW5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHBsYXlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0T3V0cHV0KGdldE91dHB1dChjb2RlLCBwcm9wcy5jb25zb2xlTW9kZSkpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICDilrZcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8aDI+SmF2YVNjcmlwdCB7cHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnVGVybWluYWwnIDogJ0V2YWx1YXRvcid9PC9oMj5cclxuICAgICAgICB7cHJvcHMucmVhZE9ubHkgPT09IHRydWUgPyAnIChSZWFkIE9ubHkpJyA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLm5vUmVzZXQgIT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJlc2V0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiByZXNldFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRDb2RlKFxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnF1ZXJ5Lmhhc093blByb3BlcnR5KHByb3BzLmNvZGVRdWVyeVBhcmFtKVxyXG4gICAgICAgICAgICAgICAgICA/IHJvdXRlci5xdWVyeVtwcm9wcy5jb2RlUXVlcnlQYXJhbV1cclxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLmhhc093blByb3BlcnR5KCdjb2RlUXVlcnlQYXJhbScpID09IHRydWUgPyAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTaGFyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hhcmVVUkwoXHJcbiAgICAgICAgICAgICAgICAgIGAke3JvdXRlci5iYXNlUGF0aH0vcnBnL2VkaXRvcj8ke2NvZGVRdWVyeVBhcmFtfT0ke2VuY29kZVVSSUNvbXBvbmVudChjb2RlKX1gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAg4piB77iPXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdDb25zb2xlJyA6ICdPdXRwdXQnfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5PXtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e25ld0NvZGUgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb2RlKG5ld0NvZGUpXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5kaXNhYmxlQXV0b1J1biAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHNldE91dHB1dChnZXRPdXRwdXQobmV3Q29kZSwgcHJvcHMuY29uc29sZU1vZGUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge291dHB1dCA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIG91dHB1dFxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdXRwdXQoY29kZSwgY29uc29sZU1vZGUpIHtcclxuICBpZiAoY29kZS5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gY29uc29sZU1vZGUgPT09IHRydWUgPyBnZXRDb25zb2xlT3V0cHV0KGNvZGUpIDogZ2V0RXZhbE91dHB1dChjb2RlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+VHlwZSBzb21ldGhpbmcgdG8gc2VlIHRoZSBldmFsdWF0ZWQgb3V0cHV0PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29uc29sZU91dHB1dChjb2RlKSB7XHJcbiAgY29uc3Qgb2xkTG9nID0gY29uc29sZS5sb2dcclxuICBjb25zdCBsb2dPdXRwdXQgPSBbXVxyXG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgbG9nT3V0cHV0LnB1c2goYXJncylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3NbMF0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBldmFsKGNvZGUpXHJcbiAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgaWYgKGxvZ091dHB1dC5sZW5ndGggPCAxKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlxyXG4gICAgICAgICAgVHJ5IGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBjb25zb2xlIHRvIHNlZSBzb21lIG91dHB1dFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICByZWFkT25seVxyXG4gICAgICAgIHZhbHVlPXtsb2dPdXRwdXQubWFwKHZhbHVlID0+IGluc3BlY3QodmFsdWUpKS5qb2luKCc7XFxuJyl9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZhbE91dHB1dChjb2RlKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG91dHB1dCA9IGV2YWwoY29kZSlcclxuICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZVNhbmRib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==