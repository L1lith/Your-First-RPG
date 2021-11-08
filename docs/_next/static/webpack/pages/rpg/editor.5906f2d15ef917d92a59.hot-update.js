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

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      shareURL = _useState[0],
      setShareURL = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log('x', router);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      output = _useState2[0],
      setOutput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : props.value || ''),
      code = _useState3[0],
      setCode = _useState3[1];

  return __jsx("div", {
    className: 'sandbox' + (props.hasOwnProperty('className') ? ' ' + props.className : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
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
      lineNumber: 200,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
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
      lineNumber: 211,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
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
      lineNumber: 223,
      columnNumber: 11
    }
  }, "\u274C") : null, props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("span", {
    title: "Share",
    className: "icon share",
    onClick: function onClick() {
      setShareURL(router.basePath + '/rpg/editor?code=' + encodeURIComponent(_this.state.value));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
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

_s(CodeSandbox, "PATVYxlrP+7e8XyR8BOo1E0DrUY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsInNldE91dHB1dCIsInF1ZXJ5IiwiaGFzT3duUHJvcGVydHkiLCJjb2RlUXVlcnlQYXJhbSIsInZhbHVlIiwiY29kZSIsInNldENvZGUiLCJjbGFzc05hbWUiLCJkaXNhYmxlQXV0b1J1biIsImdldE91dHB1dCIsImNvbnNvbGVNb2RlIiwicmVhZE9ubHkiLCJub1Jlc2V0IiwiZGVmYXVsdENvZGUiLCJzaGFyaW5nIiwiYmFzZVBhdGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdGF0ZSIsIm5ld0NvZGUiLCJsZW5ndGgiLCJnZXRDb25zb2xlT3V0cHV0IiwiZ2V0RXZhbE91dHB1dCIsIm9sZExvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUIsa0JBQWdDQyxzREFBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksR0FBWixFQUFpQkgsTUFBakI7O0FBQ0EsbUJBQTRCSCxzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFBQSxNQUFPTyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBd0JSLHNEQUFRLENBQzlCRyxNQUFNLENBQUNNLEtBQVAsQ0FBYUMsY0FBYixDQUE0QlgsS0FBSyxDQUFDWSxjQUFsQyxJQUNJUixNQUFNLENBQUNNLEtBQVAsQ0FBYVYsS0FBSyxDQUFDWSxjQUFuQixDQURKLEdBRUlaLEtBQUssQ0FBQ2EsS0FBTixJQUFlLEVBSFcsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFLGFBQWFmLEtBQUssQ0FBQ1csY0FBTixDQUFxQixXQUFyQixJQUFvQyxNQUFNWCxLQUFLLENBQUNnQixTQUFoRCxHQUE0RCxFQUF6RSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csT0FBT2QsUUFBUCxJQUFtQixRQUFuQixHQUNDO0FBQU0sYUFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRUU7QUFBRyxhQUFTLEVBQUMsS0FBYjtBQUFtQixRQUFJLEVBQUVBLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRkYsRUFLRTtBQUNFLGFBQVMsRUFBQyxZQURaO0FBRUUsV0FBTyxFQUFFLG1CQUFNO0FBQ2JDLGlCQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0QsS0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsQ0FERCxHQWNHLElBZk4sRUFnQkU7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILEtBQUssQ0FBQ2lCLGNBQU4sS0FBeUIsSUFBekIsR0FDQztBQUNFLFNBQUssRUFBQyxLQURSO0FBRUUsYUFBUyxFQUFDLFdBRlo7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYlIsZUFBUyxDQUFDUyxTQUFTLENBQUNKLElBQUQsRUFBT2QsS0FBSyxDQUFDbUIsV0FBYixDQUFWLENBQVQ7QUFDRCxLQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxHQVNHLElBVk4sRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFnQm5CLEtBQUssQ0FBQ21CLFdBQU4sS0FBc0IsSUFBdEIsR0FBNkIsVUFBN0IsR0FBMEMsV0FBMUQsQ0FYRixFQVlHbkIsS0FBSyxDQUFDb0IsUUFBTixLQUFtQixJQUFuQixHQUEwQixjQUExQixHQUEyQyxJQVo5QyxFQWFHcEIsS0FBSyxDQUFDcUIsT0FBTixLQUFrQixJQUFsQixHQUNDO0FBQ0UsU0FBSyxFQUFDLE9BRFI7QUFFRSxhQUFTLEVBQUMsWUFGWjtBQUdFLFdBQU8sRUFBRSxtQkFBTTtBQUNiTixhQUFPLENBQ0xYLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxjQUFiLENBQTRCWCxLQUFLLENBQUNZLGNBQWxDLElBQ0lSLE1BQU0sQ0FBQ00sS0FBUCxDQUFhVixLQUFLLENBQUNZLGNBQW5CLENBREosR0FFSVUsV0FIQyxDQUFQO0FBS0QsS0FUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsR0FhRyxJQTFCTixFQTJCR3RCLEtBQUssQ0FBQ3VCLE9BQU4sSUFBaUIsSUFBakIsR0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBQyxPQURSO0FBRUUsYUFBUyxFQUFDLFlBRlo7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYnBCLGlCQUFXLENBQ1RDLE1BQU0sQ0FBQ29CLFFBQVAsR0FBa0IsbUJBQWxCLEdBQXdDQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUNDLEtBQUwsQ0FBV2IsS0FBWixDQURqRCxDQUFYO0FBR0QsS0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREQsR0FhRyxJQXhDTixDQWhCRixFQTJERTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJiLEtBQUssQ0FBQ21CLFdBQU4sS0FBc0IsSUFBdEIsR0FBNkIsU0FBN0IsR0FBeUMsUUFBaEUsQ0FGRixDQTNERixFQStERTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQ0UsU0FBSyxFQUFDLEtBRFI7QUFFRSxVQUFNLEVBQUMsTUFGVDtBQUdFLFFBQUksRUFBQyxZQUhQO0FBSUUsU0FBSyxFQUFDLFVBSlI7QUFLRSxZQUFRLEVBQUVuQixLQUFLLENBQUNvQixRQUFOLEtBQW1CLElBTC9CO0FBTUUsU0FBSyxFQUFFTixJQU5UO0FBT0UsWUFBUSxFQUFFLGtCQUFBYSxPQUFPLEVBQUk7QUFDbkJaLGFBQU8sQ0FBQ1ksT0FBRCxDQUFQOztBQUNBLFVBQUkzQixLQUFLLENBQUNpQixjQUFOLEtBQXlCLElBQTdCLEVBQW1DO0FBQ2pDUixpQkFBUyxDQUFDUyxTQUFTLENBQUNTLE9BQUQsRUFBVTNCLEtBQUssQ0FBQ21CLFdBQWhCLENBQVYsQ0FBVDtBQUNEO0FBQ0YsS0FaSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFlR1gsTUFBTSxLQUFLLElBQVgsR0FDQztBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURELEdBR0NBLE1BbEJKLENBL0RGLENBREY7QUF1RkQ7O0dBakdRVCxXO1VBRVFNLHFEOzs7S0FGUk4sVzs7QUFtR1QsU0FBU21CLFNBQVQsQ0FBbUJKLElBQW5CLEVBQXlCSyxXQUF6QixFQUFzQztBQUNwQyxNQUFJTCxJQUFJLENBQUNjLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQixXQUFPVCxXQUFXLEtBQUssSUFBaEIsR0FBdUJVLGdCQUFnQixDQUFDZixJQUFELENBQXZDLEdBQWdEZ0IsYUFBYSxDQUFDaEIsSUFBRCxDQUFwRTtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU87QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU2UsZ0JBQVQsQ0FBMEJmLElBQTFCLEVBQWdDO0FBQzlCLE1BQU1pQixNQUFNLEdBQUd6QixPQUFPLENBQUNDLEdBQXZCO0FBQ0EsTUFBTXlCLFNBQVMsR0FBRyxFQUFsQjs7QUFDQTFCLFNBQU8sQ0FBQ0MsR0FBUixHQUFjLFlBQWE7QUFBQSxzQ0FBVDBCLElBQVM7QUFBVEEsVUFBUztBQUFBOztBQUN6QixRQUFJQSxJQUFJLENBQUNMLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQkksZUFBUyxDQUFDRSxJQUFWLENBQWVELElBQWY7QUFDRCxLQUZELE1BRU87QUFDTEQsZUFBUyxDQUFDRSxJQUFWLENBQWVELElBQUksQ0FBQyxDQUFELENBQW5CO0FBQ0Q7QUFDRixHQU5EOztBQU9BLE1BQUk7QUFDRkUsUUFBSSxDQUFDckIsSUFBRCxDQUFKO0FBQ0FSLFdBQU8sQ0FBQ0MsR0FBUixHQUFjd0IsTUFBZDtBQUNBLFFBQUlDLFNBQVMsQ0FBQ0osTUFBVixHQUFtQixDQUF2QixFQUNFLE9BQ0U7QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRUFERjtBQUtGLFdBQ0UsTUFBQyxrREFBRDtBQUNFLGVBQVMsRUFBQyxjQURaO0FBRUUsV0FBSyxFQUFDLEtBRlI7QUFHRSxZQUFNLEVBQUMsTUFIVDtBQUlFLFVBQUksRUFBQyxZQUpQO0FBS0UsV0FBSyxFQUFDLFVBTFI7QUFNRSxjQUFRLE1BTlY7QUFPRSxXQUFLLEVBQUVJLFNBQVMsQ0FBQ0ksR0FBVixDQUFjLFVBQUF2QixLQUFLO0FBQUEsZUFBSXdCLG9EQUFPLENBQUN4QixLQUFELENBQVg7QUFBQSxPQUFuQixFQUF1Q3lCLElBQXZDLENBQTRDLEtBQTVDLENBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBV0QsR0FwQkQsQ0FvQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1pqQyxXQUFPLENBQUNDLEdBQVIsR0FBY3dCLE1BQWQ7QUFDQSxXQUFPO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NNLG9EQUFPLENBQUNFLEdBQUQsQ0FBdkMsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1QsYUFBVCxDQUF1QmhCLElBQXZCLEVBQTZCO0FBQzNCLE1BQUk7QUFDRixRQUFNTixNQUFNLEdBQUcyQixJQUFJLENBQUNyQixJQUFELENBQW5CO0FBQ0EsUUFBSTBCLFlBQVksR0FBR0gsb0RBQU8sQ0FBQzdCLE1BQUQsQ0FBMUI7QUFDQSxXQUNFLE1BQUMsa0RBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLFdBQUssRUFBQyxLQUZSO0FBR0UsWUFBTSxFQUFDLE1BSFQ7QUFJRSxVQUFJLEVBQUMsWUFKUDtBQUtFLFdBQUssRUFBQyxVQUxSO0FBTUUsY0FBUSxNQU5WO0FBT0UsV0FBSyxFQUFFZ0MsWUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFXRCxHQWRELENBY0UsT0FBT0QsR0FBUCxFQUFZO0FBQ1osV0FBTztBQUFNLGVBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDRixvREFBTyxDQUFDRSxHQUFELENBQXZDLENBQVA7QUFDRDtBQUNGOztBQUVjeEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci41OTA2ZjJkMTVlZjkxN2Q5MmE1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjZUVkaXRvciBmcm9tICcuL0FjZUVkaXRvcidcclxuaW1wb3J0ICcuL0NvZGVTYW5kYm94LnNjc3MnXHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xyXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbi8vIGNsYXNzIENvZGVTYW5kYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4vLyAgICAgc3VwZXIocHJvcHMpXHJcbi8vICAgfVxyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICA8ZGl2XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPXtcclxuLy8gICAgICAgICAgICdzYW5kYm94JyArICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbi8vICAgICAgICAgfT5cclxuLy8gICAgICAgICB7dHlwZW9mIHRoaXMuc3RhdGUuc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4vLyAgICAgICAgICAgICBZb3VyIFNoYXJpbmcgVVJMOlxyXG4vLyAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXt0aGlzLnN0YXRlLnNoYXJlVVJMfT5cclxuLy8gICAgICAgICAgICAgICBSaWdodCBDbGljayBhbmQgQ29weSBUaGlzIExpbmtcclxuLy8gICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZVNoYXJpbmd9PlxyXG4vLyAgICAgICAgICAgICAgIOKdjFxyXG4vLyAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuLy8gICAgICAgICAgIHt0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gKFxyXG4vLyAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlJ1blwiIGNsYXNzTmFtZT1cImljb24gcGxheVwiIG9uQ2xpY2s9e3RoaXMucnVufT5cclxuLy8gICAgICAgICAgICAgICDilrZcclxuLy8gICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgICA8aDI+SmF2YVNjcmlwdCB7dGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4vLyAgICAgICAgICAge3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWUgPyAnIChSZWFkIE9ubHkpJyA6IG51bGx9XHJcbi8vICAgICAgICAgICB7dGhpcy5wcm9wcy5ub1Jlc2V0ICE9PSB0cnVlID8gKFxyXG4vLyAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlJlc2V0XCIgY2xhc3NOYW1lPVwiaWNvbiByZXNldFwiIG9uQ2xpY2s9e3RoaXMucmVzZXR9PlxyXG4vLyAgICAgICAgICAgICAgIOKdjFxyXG4vLyAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICAgIHt0aGlzLnByb3BzLnNoYXJpbmcgPT0gdHJ1ZSA/IChcclxuLy8gICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4vLyAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiU2hhcmVcIiBjbGFzc05hbWU9XCJpY29uIHNoYXJlXCIgb25DbGljaz17dGhpcy5zaGFyZX0+XHJcbi8vICAgICAgICAgICAgICAgICDimIHvuI9cclxuLy8gICAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbi8vICAgICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICA8L2gyPlxyXG5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4vLyAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29kZSBJbnB1dDwvaDI+XHJcbi8vICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdDb25zb2xlJyA6ICdPdXRwdXQnfTwvaDI+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4vLyAgICAgICAgICAgPEFjZUVkaXRvclxyXG4vLyAgICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbi8vICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4vLyAgICAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbi8vICAgICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4vLyAgICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZX1cclxuLy8gICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4vLyAgICAgICAgICAgICBvbkNoYW5nZT17KC4uLmFyZ3MpID0+IHtcclxuLy8gICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSguLi5hcmdzKVxyXG4vLyAgICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIHt0aGlzLmdldE91dHB1dCgpfVxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gICB9XHJcbi8vICAgZ2V0T3V0cHV0KHNraXBBdXRvUnVuID0gZmFsc2UpIHtcclxuLy8gICAgIGxldCBvdXRwdXQgPSBudWxsXHJcbi8vICAgICBpZiAoc2tpcEF1dG9SdW4gIT09IHRydWUgJiYgdGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSkge1xyXG4vLyAgICAgICBvdXRwdXQgPVxyXG4vLyAgICAgICAgIHRoaXMuc3RhdGUub3V0cHV0ICE9PSBudWxsID8gKFxyXG4vLyAgICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXRcclxuLy8gICAgICAgICApIDogKFxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+UnVuIHRoZSBwcm9ncmFtIHRvIHNlZSB5b3VyIG91dHB1dDwvc3Bhbj5cclxuLy8gICAgICAgICApXHJcbi8vICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuLy8gICAgICAgb3V0cHV0ID1cclxuLy8gICAgICAgICB0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlXHJcbi8vICAgICAgICAgICA/IHRoaXMuZ2V0Q29uc29sZU91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4vLyAgICAgICAgICAgOiB0aGlzLmdldEV2YWxPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIG91dHB1dCA9IDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBvdXRwdXRcclxuLy8gICB9XHJcbi8vICAgZ2V0VmFsdWUoKSB7XHJcbi8vICAgICBsZXQgdmFsdWUgPSAnJ1xyXG4vLyAgICAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuLy8gICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlXHJcbi8vICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNvZGVRdWVyeVBhcmFtID09ICdzdHJpbmcnKSB7XHJcbi8vICAgICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbi8vICAgICAgIGlmIChyb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkodGhpcy5wcm9wcy5jb2RlUXVlcnlQYXJhbSkpIHtcclxuLy8gICAgICAgICB2YWx1ZSA9IHJvdXRlci5xdWVyeVt0aGlzLnByb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiB2YWx1ZVxyXG4vLyAgIH1cclxuLy8gICBnZXRDb25zb2xlT3V0cHV0KHNvdXJjZSkge1xyXG4vLyAgICAgY29uc3Qgb2xkTG9nID0gY29uc29sZS5sb2dcclxuLy8gICAgIGNvbnN0IGxvZ091dHB1dCA9IFtdXHJcbi8vICAgICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XHJcbi8vICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuLy8gICAgICAgICBsb2dPdXRwdXQucHVzaChhcmdzKVxyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3NbMF0pXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGV2YWwoc291cmNlKVxyXG4vLyAgICAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4vLyAgICAgICBpZiAobG9nT3V0cHV0Lmxlbmd0aCA8IDEpXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlxyXG4vLyAgICAgICAgICAgICBUcnkgbG9nZ2luZyBzb21ldGhpbmcgdG8gdGhlIGNvbnNvbGUgdG8gc2VlIHNvbWUgb3V0cHV0XHJcbi8vICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxBY2VFZGl0b3JcclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbi8vICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbi8vICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuLy8gICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuLy8gICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4vLyAgICAgICAgICAgcmVhZE9ubHlcclxuLy8gICAgICAgICAgIHZhbHVlPXtsb2dPdXRwdXQubWFwKHZhbHVlID0+IGluc3BlY3QodmFsdWUpKS5qb2luKCc7XFxuJyl9XHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgKVxyXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbi8vICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgZ2V0RXZhbE91dHB1dChzb3VyY2UpIHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IG91dHB1dCA9IGV2YWwoc291cmNlKVxyXG4vLyAgICAgICBsZXQgb3V0cHV0U291cmNlID0gaW5zcGVjdChvdXRwdXQpXHJcbi8vICAgICAgIC8vY29uc29sZS5sb2coJ3gnLCBvdXRwdXRTb3VyY2UpXHJcbi8vICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEFjZUVkaXRvclxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuLy8gICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuLy8gICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4vLyAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4vLyAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbi8vICAgICAgICAgICByZWFkT25seVxyXG4vLyAgICAgICAgICAgdmFsdWU9e291dHB1dFNvdXJjZX1cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICApXHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBoYW5kbGVDaGFuZ2Uob3V0cHV0KSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG91dHB1dCB9KVxyXG4vLyAgIH1cclxuLy8gICByZXNldCgpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCAnJyB9KVxyXG4vLyAgIH1cclxuLy8gICBydW4oKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgb3V0cHV0OiB0aGlzLmdldE91dHB1dCh0cnVlKSB9KVxyXG4vLyAgIH1cclxuLy8gICBzaGFyZSgpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4vLyAgICAgICBzaGFyZVVSTDogJ2h0dHBzOi8veW91cmZpcnN0cnBnLmNvbS9ycGcvZWRpdG9yP2NvZGU9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4vLyAgICAgfSlcclxuLy8gICB9XHJcbi8vICAgY2xvc2VTaGFyaW5nKCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlVVJMOiBudWxsIH0pXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBDb2RlU2FuZGJveChwcm9wcykge1xyXG4gIGNvbnN0IFtzaGFyZVVSTCwgc2V0U2hhcmVVUkxdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnNvbGUubG9nKCd4Jywgcm91dGVyKVxyXG4gIGNvbnN0IFtvdXRwdXQsIHNldE91dHB1dF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFxyXG4gICAgcm91dGVyLnF1ZXJ5Lmhhc093blByb3BlcnR5KHByb3BzLmNvZGVRdWVyeVBhcmFtKVxyXG4gICAgICA/IHJvdXRlci5xdWVyeVtwcm9wcy5jb2RlUXVlcnlQYXJhbV1cclxuICAgICAgOiBwcm9wcy52YWx1ZSB8fCAnJ1xyXG4gIClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eydzYW5kYm94JyArIChwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyAnICcgKyBwcm9wcy5jbGFzc05hbWUgOiAnJyl9PlxyXG4gICAgICB7dHlwZW9mIHNoYXJlVVJMID09ICdzdHJpbmcnID8gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXJlLXBvcHVwXCI+XHJcbiAgICAgICAgICBZb3VyIFNoYXJpbmcgVVJMOlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidXJsXCIgaHJlZj17c2hhcmVVUkx9PlxyXG4gICAgICAgICAgICBSaWdodCBDbGljayBhbmQgQ29weSBUaGlzIExpbmtcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gY2xvc2VcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0U2hhcmVVUkwobnVsbClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKdjFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XHJcbiAgICAgICAge3Byb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgdGl0bGU9XCJSdW5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHBsYXlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0T3V0cHV0KGdldE91dHB1dChjb2RlLCBwcm9wcy5jb25zb2xlTW9kZSkpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICDilrZcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8aDI+SmF2YVNjcmlwdCB7cHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnVGVybWluYWwnIDogJ0V2YWx1YXRvcid9PC9oMj5cclxuICAgICAgICB7cHJvcHMucmVhZE9ubHkgPT09IHRydWUgPyAnIChSZWFkIE9ubHkpJyA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLm5vUmVzZXQgIT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJlc2V0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiByZXNldFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRDb2RlKFxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnF1ZXJ5Lmhhc093blByb3BlcnR5KHByb3BzLmNvZGVRdWVyeVBhcmFtKVxyXG4gICAgICAgICAgICAgICAgICA/IHJvdXRlci5xdWVyeVtwcm9wcy5jb2RlUXVlcnlQYXJhbV1cclxuICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0Q29kZVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKdjFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy5zaGFyaW5nID09IHRydWUgPyAoXHJcbiAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTaGFyZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hhcmVVUkwoXHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5iYXNlUGF0aCArICcvcnBnL2VkaXRvcj9jb2RlPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICDimIHvuI9cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9oMj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29kZSBJbnB1dDwvaDI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3Byb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ0NvbnNvbGUnIDogJ091dHB1dCd9PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgICAgcmVhZE9ubHk9e3Byb3BzLnJlYWRPbmx5ID09PSB0cnVlfVxyXG4gICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17bmV3Q29kZSA9PiB7XHJcbiAgICAgICAgICAgIHNldENvZGUobmV3Q29kZSlcclxuICAgICAgICAgICAgaWYgKHByb3BzLmRpc2FibGVBdXRvUnVuICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgc2V0T3V0cHV0KGdldE91dHB1dChuZXdDb2RlLCBwcm9wcy5jb25zb2xlTW9kZSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7b3V0cHV0ID09PSBudWxsID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+UnVuIHRoZSBwcm9ncmFtIHRvIHNlZSB5b3VyIG91dHB1dDwvc3Bhbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgb3V0cHV0XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE91dHB1dChjb2RlLCBjb25zb2xlTW9kZSkge1xyXG4gIGlmIChjb2RlLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiBjb25zb2xlTW9kZSA9PT0gdHJ1ZSA/IGdldENvbnNvbGVPdXRwdXQoY29kZSkgOiBnZXRFdmFsT3V0cHV0KGNvZGUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5UeXBlIHNvbWV0aGluZyB0byBzZWUgdGhlIGV2YWx1YXRlZCBvdXRwdXQ8L3NwYW4+XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb25zb2xlT3V0cHV0KGNvZGUpIHtcclxuICBjb25zdCBvbGRMb2cgPSBjb25zb2xlLmxvZ1xyXG4gIGNvbnN0IGxvZ091dHB1dCA9IFtdXHJcbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICBsb2dPdXRwdXQucHVzaChhcmdzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbG9nT3V0cHV0LnB1c2goYXJnc1swXSlcclxuICAgIH1cclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIGV2YWwoY29kZSlcclxuICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICBpZiAobG9nT3V0cHV0Lmxlbmd0aCA8IDEpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+XHJcbiAgICAgICAgICBUcnkgbG9nZ2luZyBzb21ldGhpbmcgdG8gdGhlIGNvbnNvbGUgdG8gc2VlIHNvbWUgb3V0cHV0XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgdmFsdWU9e2xvZ091dHB1dC5tYXAodmFsdWUgPT4gaW5zcGVjdCh2YWx1ZSkpLmpvaW4oJztcXG4nKX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFdmFsT3V0cHV0KGNvZGUpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gZXZhbChjb2RlKVxyXG4gICAgbGV0IG91dHB1dFNvdXJjZSA9IGluc3BlY3Qob3V0cHV0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICByZWFkT25seVxyXG4gICAgICAgIHZhbHVlPXtvdXRwdXRTb3VyY2V9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlU2FuZGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9