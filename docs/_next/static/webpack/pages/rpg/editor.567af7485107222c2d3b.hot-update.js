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





 // class CodeSandbox extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const value = this.getValue()
//     return (
//       <div
//         className={
//           'sandbox' + (this.props.hasOwnProperty('className') ? ' ' + this.props.className : '')
//         }>
//         {typeof this.state.shareURL == 'string' ? (
//           <span className="share-popup">
//             Your Sharing URL:
//             <a className="url" href={this.state.shareURL}>
//               Right Click and Copy This Link
//             </a>
//             <span className="icon close" onClick={this.closeSharing}>
//               ❌
//             </span>
//           </span>
//         ) : null}
//         <h2 className="main-title">
//           {this.props.disableAutoRun === true ? (
//             <span title="Run" className="icon play" onClick={this.run}>
//               ▶
//             </span>
//           ) : null}
//           <h2>JavaScript {this.props.consoleMode === true ? 'Terminal' : 'Evaluator'}</h2>
//           {this.props.readOnly === true ? ' (Read Only)' : null}
//           {this.props.noReset !== true ? (
//             <span title="Reset" className="icon reset" onClick={this.reset}>
//               ❌
//             </span>
//           ) : null}
//           {this.props.sharing == true ? (
//             <Fragment>
//               <span title="Share" className="icon share" onClick={this.share}>
//                 ☁️
//               </span>
//             </Fragment>
//           ) : null}
//         </h2>
//         <div className="titles">
//           <h2 className="title">Code Input</h2>
//           <h2 className="title">{this.props.consoleMode === true ? 'Console' : 'Output'}</h2>
//         </div>
//         <div className="inner">
//           <AceEditor
//             width="50%"
//             height="100%"
//             mode="javascript"
//             theme="ambiance"
//             readOnly={this.props.readOnly === true}
//             value={value}
//             onChange={(...args) => {
//               this.handleChange(...args)
//             }}
//           />
//           {this.getOutput()}
//         </div>
//       </div>
//     )
//   }
//   getOutput(skipAutoRun = false) {
//     let output = null
//     if (skipAutoRun !== true && this.props.disableAutoRun === true) {
//       output =
//         this.state.output !== null ? (
//           this.state.output
//         ) : (
//           <span className="output empty">Run the program to see your output</span>
//         )
//     } else if (this.state.value.trim().length > 0) {
//       output =
//         this.props.consoleMode === true
//           ? this.getConsoleOutput(this.state.value)
//           : this.getEvalOutput(this.state.value)
//     } else {
//       output = <span className="output empty">Type something to see the evaluated output</span>
//     }
//     return output
//   }
//   getValue() {
//     let value = ''
//     if (this.state.hasOwnProperty('value')) {
//       value = this.state.value
//     } else if (typeof this.props.codeQueryParam == 'string') {
//       const router = useRouter()
//       if (router.query.hasOwnProperty(this.props.codeQueryParam)) {
//         value = router.query[this.props.codeQueryParam]
//       } else {
//         value = this.props.value || ''
//       }
//     } else {
//       value = this.props.value || ''
//     }
//     return value
//   }
//   getConsoleOutput(source) {
//     const oldLog = console.log
//     const logOutput = []
//     console.log = (...args) => {
//       if (args.length > 1) {
//         logOutput.push(args)
//       } else {
//         logOutput.push(args[0])
//       }
//     }
//     try {
//       eval(source)
//       console.log = oldLog
//       if (logOutput.length < 1)
//         return (
//           <span className="output empty">
//             Try logging something to the console to see some output
//           </span>
//         )
//       return (
//         <AceEditor
//           className="output valid"
//           width="50%"
//           height="100%"
//           mode="javascript"
//           theme="ambiance"
//           readOnly
//           value={logOutput.map(value => inspect(value)).join(';\n')}
//         />
//       )
//     } catch (err) {
//       console.log = oldLog
//       return <span className="output error">{inspect(err)}</span>
//     }
//   }
//   getEvalOutput(source) {
//     try {
//       const output = eval(source)
//       let outputSource = inspect(output)
//       //console.log('x', outputSource)
//       return (
//         <AceEditor
//           className="output valid"
//           width="50%"
//           height="100%"
//           mode="javascript"
//           theme="ambiance"
//           readOnly
//           value={outputSource}
//         />
//       )
//     } catch (err) {
//       return <span className="output error">{inspect(err)}</span>
//     }
//   }
//   handleChange(output) {
//     this.setState({ value: output })
//   }
//   reset() {
//     this.setState({ value: this.props.value || '' })
//   }
//   run() {
//     this.setState({ output: this.getOutput(true) })
//   }
//   share() {
//     this.setState({
//       shareURL: 'https://yourfirstrpg.com/rpg/editor?code=' + encodeURIComponent(this.state.value)
//     })
//   }
//   closeSharing() {
//     this.setState({ shareURL: null })
//   }
// }

function CodeSandbox(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      shareURL = _useState[0],
      setShareURL = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log('x', router);

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
      lineNumber: 195,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
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
      lineNumber: 202,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 213,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
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
      lineNumber: 225,
      columnNumber: 11
    }
  }, "\u274C") : null, props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
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
      lineNumber: 240,
      columnNumber: 13
    }
  }, "\u2601\uFE0F")) : null), __jsx("div", {
    className: "titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
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
      lineNumber: 257,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
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
        lineNumber: 285,
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
        lineNumber: 304,
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
        lineNumber: 309,
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
        lineNumber: 321,
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
        lineNumber: 330,
        columnNumber: 7
      }
    });
  } catch (err) {
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiaGFzT3duUHJvcGVydHkiLCJjb2RlUXVlcnlQYXJhbSIsInZhbHVlIiwiY29kZSIsInNldENvZGUiLCJkaXNhYmxlQXV0b1J1biIsImdldE91dHB1dCIsImNvbnNvbGVNb2RlIiwib3V0cHV0Iiwic2V0T3V0cHV0IiwiY2xhc3NOYW1lIiwicmVhZE9ubHkiLCJub1Jlc2V0IiwiZGVmYXVsdENvZGUiLCJzaGFyaW5nIiwiYmFzZVBhdGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJuZXdDb2RlIiwibGVuZ3RoIiwiZ2V0Q29uc29sZU91dHB1dCIsImdldEV2YWxPdXRwdXQiLCJvbGRMb2ciLCJsb2dPdXRwdXQiLCJhcmdzIiwicHVzaCIsImV2YWwiLCJtYXAiLCJpbnNwZWN0Iiwiam9pbiIsImVyciIsIm91dHB1dFNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUN6QixLQUFELENBQVg7QUFBQSxPQUFuQixFQUF1QzBCLElBQXZDLENBQTRDLEtBQTVDLENBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBV0QsR0FwQkQsQ0FvQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1poQyxXQUFPLENBQUNDLEdBQVIsR0FBY3VCLE1BQWQ7QUFDQSxXQUFPO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NNLG9EQUFPLENBQUNFLEdBQUQsQ0FBdkMsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1QsYUFBVCxDQUF1QmpCLElBQXZCLEVBQTZCO0FBQzNCLE1BQUk7QUFDRixRQUFNSyxNQUFNLEdBQUdpQixJQUFJLENBQUN0QixJQUFELENBQW5CO0FBQ0EsUUFBSTJCLFlBQVksR0FBR0gsb0RBQU8sQ0FBQ25CLE1BQUQsQ0FBMUI7QUFDQSxXQUNFLE1BQUMsa0RBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLFdBQUssRUFBQyxLQUZSO0FBR0UsWUFBTSxFQUFDLE1BSFQ7QUFJRSxVQUFJLEVBQUMsWUFKUDtBQUtFLFdBQUssRUFBQyxVQUxSO0FBTUUsY0FBUSxNQU5WO0FBT0UsV0FBSyxFQUFFc0IsWUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQWRELENBY0UsT0FBT0QsR0FBUCxFQUFZO0FBQ1osV0FBTztBQUFNLGVBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDRixvREFBTyxDQUFDRSxHQUFELENBQXZDLENBQVA7QUFDRDtBQUNGOztBQUVjdkMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci41NjdhZjc0ODUxMDcyMjJjMmQzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjZUVkaXRvciBmcm9tICcuL0FjZUVkaXRvcidcclxuaW1wb3J0ICcuL0NvZGVTYW5kYm94LnNjc3MnXHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xyXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vIGNsYXNzIENvZGVTYW5kYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4vLyAgICAgc3VwZXIocHJvcHMpXHJcbi8vICAgfVxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPXtcclxuLy8gICAgICAgICAgICdzYW5kYm94JyArICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbi8vICAgICAgICAgfT5cclxuLy8gICAgICAgICB7dHlwZW9mIHRoaXMuc3RhdGUuc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4vLyAgICAgICAgICAgICBZb3VyIFNoYXJpbmcgVVJMOlxyXG4vLyAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXt0aGlzLnN0YXRlLnNoYXJlVVJMfT5cclxuLy8gICAgICAgICAgICAgICBSaWdodCBDbGljayBhbmQgQ29weSBUaGlzIExpbmtcclxuLy8gICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZVNoYXJpbmd9PlxyXG4vLyAgICAgICAgICAgICAgIOKdjFxyXG4vLyAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuLy8gICAgICAgICAgIHt0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gKFxyXG4vLyAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlJ1blwiIGNsYXNzTmFtZT1cImljb24gcGxheVwiIG9uQ2xpY2s9e3RoaXMucnVufT5cclxuLy8gICAgICAgICAgICAgICDilrZcclxuLy8gICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgICA8aDI+SmF2YVNjcmlwdCB7dGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4vLyAgICAgICAgICAge3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWUgPyAnIChSZWFkIE9ubHkpJyA6IG51bGx9XHJcbi8vICAgICAgICAgICB7dGhpcy5wcm9wcy5ub1Jlc2V0ICE9PSB0cnVlID8gKFxyXG4vLyAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlJlc2V0XCIgY2xhc3NOYW1lPVwiaWNvbiByZXNldFwiIG9uQ2xpY2s9e3RoaXMucmVzZXR9PlxyXG4vLyAgICAgICAgICAgICAgIOKdjFxyXG4vLyAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICAgIHt0aGlzLnByb3BzLnNoYXJpbmcgPT0gdHJ1ZSA/IChcclxuLy8gICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4vLyAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiU2hhcmVcIiBjbGFzc05hbWU9XCJpY29uIHNoYXJlXCIgb25DbGljaz17dGhpcy5zaGFyZX0+XHJcbi8vICAgICAgICAgICAgICAgICDimIHvuI9cclxuLy8gICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbi8vICAgICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICA8L2gyPlxyXG5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4vLyAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29kZSBJbnB1dDwvaDI+XHJcbi8vICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdDb25zb2xlJyA6ICdPdXRwdXQnfTwvaDI+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4vLyAgICAgICAgICAgPEFjZUVkaXRvclxyXG4vLyAgICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbi8vICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4vLyAgICAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbi8vICAgICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4vLyAgICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZX1cclxuLy8gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4vLyAgICAgICAgICAgICBvbkNoYW5nZT17KC4uLmFyZ3MpID0+IHtcclxuLy8gICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSguLi5hcmdzKVxyXG4vLyAgICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIHt0aGlzLmdldE91dHB1dCgpfVxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gICB9XHJcbi8vICAgZ2V0T3V0cHV0KHNraXBBdXRvUnVuID0gZmFsc2UpIHtcclxuLy8gICAgIGxldCBvdXRwdXQgPSBudWxsXHJcbi8vICAgICBpZiAoc2tpcEF1dG9SdW4gIT09IHRydWUgJiYgdGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSkge1xyXG4vLyAgICAgICBvdXRwdXQgPVxyXG4vLyAgICAgICAgIHRoaXMuc3RhdGUub3V0cHV0ICE9PSBudWxsID8gKFxyXG4vLyAgICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXRcclxuLy8gICAgICAgICApIDogKFxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+UnVuIHRoZSBwcm9ncmFtIHRvIHNlZSB5b3VyIG91dHB1dDwvc3Bhbj5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgb3V0cHV0ID1cclxuLy8gICAgICAgICB0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlXHJcbi8vICAgICAgICAgICA/IHRoaXMuZ2V0Q29uc29sZU91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4vLyAgICAgICAgICAgOiB0aGlzLmdldEV2YWxPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIG91dHB1dCA9IDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBvdXRwdXRcclxuLy8gICB9XHJcbi8vICAgZ2V0VmFsdWUoKSB7XHJcbi8vICAgICBsZXQgdmFsdWUgPSAnJ1xyXG4vLyAgICAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuLy8gICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlXHJcbi8vICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNvZGVRdWVyeVBhcmFtID09ICdzdHJpbmcnKSB7XHJcbi8vICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbi8vICAgICAgIGlmIChyb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkodGhpcy5wcm9wcy5jb2RlUXVlcnlQYXJhbSkpIHtcclxuLy8gICAgICAgICB2YWx1ZSA9IHJvdXRlci5xdWVyeVt0aGlzLnByb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiB2YWx1ZVxyXG4vLyAgIH1cclxuLy8gICBnZXRDb25zb2xlT3V0cHV0KHNvdXJjZSkge1xyXG4vLyAgICAgY29uc3Qgb2xkTG9nID0gY29uc29sZS5sb2dcclxuLy8gICAgIGNvbnN0IGxvZ091dHB1dCA9IFtdXHJcbi8vICAgICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XHJcbi8vICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuLy8gICAgICAgICBsb2dPdXRwdXQucHVzaChhcmdzKVxyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3NbMF0pXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGV2YWwoc291cmNlKVxyXG4vLyAgICAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4vLyAgICAgICBpZiAobG9nT3V0cHV0Lmxlbmd0aCA8IDEpXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlxyXG4vLyAgICAgICAgICAgICBUcnkgbG9nZ2luZyBzb21ldGhpbmcgdG8gdGhlIGNvbnNvbGUgdG8gc2VlIHNvbWUgb3V0cHV0XHJcbi8vICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxBY2VFZGl0b3JcclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbi8vICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbi8vICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuLy8gICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuLy8gICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4vLyAgICAgICAgICAgcmVhZE9ubHlcclxuLy8gICAgICAgICAgIHZhbHVlPXtsb2dPdXRwdXQubWFwKHZhbHVlID0+IGluc3BlY3QodmFsdWUpKS5qb2luKCc7XFxuJyl9XHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgKVxyXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbi8vICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgZ2V0RXZhbE91dHB1dChzb3VyY2UpIHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IG91dHB1dCA9IGV2YWwoc291cmNlKVxyXG4vLyAgICAgICBsZXQgb3V0cHV0U291cmNlID0gaW5zcGVjdChvdXRwdXQpXHJcbi8vICAgICAgIC8vY29uc29sZS5sb2coJ3gnLCBvdXRwdXRTb3VyY2UpXHJcbi8vICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEFjZUVkaXRvclxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuLy8gICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuLy8gICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4vLyAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4vLyAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbi8vICAgICAgICAgICByZWFkT25seVxyXG4vLyAgICAgICAgICAgdmFsdWU9e291dHB1dFNvdXJjZX1cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICApXHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBoYW5kbGVDaGFuZ2Uob3V0cHV0KSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG91dHB1dCB9KVxyXG4vLyAgIH1cclxuLy8gICByZXNldCgpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCAnJyB9KVxyXG4vLyAgIH1cclxuLy8gICBydW4oKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgb3V0cHV0OiB0aGlzLmdldE91dHB1dCh0cnVlKSB9KVxyXG4vLyAgIH1cclxuLy8gICBzaGFyZSgpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICBzaGFyZVVSTDogJ2h0dHBzOi8veW91cmZpcnN0cnBnLmNvbS9ycGcvZWRpdG9yP2NvZGU9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4vLyAgICAgfSlcclxuLy8gICB9XHJcbi8vICAgY2xvc2VTaGFyaW5nKCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlVVJMOiBudWxsIH0pXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBDb2RlU2FuZGJveChwcm9wcykge1xyXG4gIGNvbnN0IFtzaGFyZVVSTCwgc2V0U2hhcmVVUkxdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnNvbGUubG9nKCd4Jywgcm91dGVyKVxyXG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFxyXG4gICAgcm91dGVyLnF1ZXJ5Lmhhc093blByb3BlcnR5KHByb3BzLmNvZGVRdWVyeVBhcmFtKVxyXG4gICAgICA/IHJvdXRlci5xdWVyeVtwcm9wcy5jb2RlUXVlcnlQYXJhbV1cclxuICAgICAgOiBwcm9wcy52YWx1ZSB8fCAnJ1xyXG4gIClcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IG51bGwgOiBnZXRPdXRwdXQoY29kZSwgcHJvcHMuY29uc29sZU1vZGUpXHJcbiAgKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J3NhbmRib3gnICsgKHByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHByb3BzLmNsYXNzTmFtZSA6ICcnKX0+XHJcbiAgICAgIHt0eXBlb2Ygc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj5cclxuICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXtzaGFyZVVSTH0+XHJcbiAgICAgICAgICAgIFJpZ2h0IENsaWNrIGFuZCBDb3B5IFRoaXMgTGlua1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBjbG9zZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTaGFyZVVSTChudWxsKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICB7cHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJ1blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcGxheVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KGNvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKWtlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMj5KYXZhU2NyaXB0IHtwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4gICAgICAgIHtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuICAgICAgICB7cHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVzZXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvZGUoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgICAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb2RlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLnNoYXJpbmcgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNoYXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHNoYXJlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaGFyZVVSTChyb3V0ZXIuYmFzZVBhdGggKyAnL3JwZy9lZGl0b3I/Y29kZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGNvZGUpKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIOKYge+4j1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seT17cHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbiAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb2RlID0+IHtcclxuICAgICAgICAgICAgc2V0Q29kZShuZXdDb2RlKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuZGlzYWJsZUF1dG9SdW4gIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KG5ld0NvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtvdXRwdXQgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5SdW4gdGhlIHByb2dyYW0gdG8gc2VlIHlvdXIgb3V0cHV0PC9zcGFuPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBvdXRwdXRcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3V0cHV0KGNvZGUsIGNvbnNvbGVNb2RlKSB7XHJcbiAgaWYgKGNvZGUubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGVNb2RlID09PSB0cnVlID8gZ2V0Q29uc29sZU91dHB1dChjb2RlKSA6IGdldEV2YWxPdXRwdXQoY29kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbnNvbGVPdXRwdXQoY29kZSkge1xyXG4gIGNvbnN0IG9sZExvZyA9IGNvbnNvbGUubG9nXHJcbiAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2dPdXRwdXQucHVzaChhcmdzWzBdKVxyXG4gICAgfVxyXG4gIH1cclxuICB0cnkge1xyXG4gICAgZXZhbChjb2RlKVxyXG4gICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5cclxuICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICB2YWx1ZT17bG9nT3V0cHV0Lm1hcCh2YWx1ZSA9PiBpbnNwZWN0KHZhbHVlKSkuam9pbignO1xcbicpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2YWxPdXRwdXQoY29kZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBldmFsKGNvZGUpXHJcbiAgICBsZXQgb3V0cHV0U291cmNlID0gaW5zcGVjdChvdXRwdXQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgdmFsdWU9e291dHB1dFNvdXJjZX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVTYW5kYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=