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
      lineNumber: 192,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 199,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 210,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
      lineNumber: 222,
      columnNumber: 11
    }
  }, "\u274C") : null, props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, __jsx("span", {
    title: "Share",
    className: "icon share",
    onClick: function onClick() {
      setShareURL('https://yourfirstrpg.com/rpg/editor?code=' + encodeURIComponent(_this.state.value));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }, "\u2601\uFE0F")) : null), __jsx("div", {
    className: "titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
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
      lineNumber: 256,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
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
    return consoleMode === true ? this.getConsoleOutput(this.state.value) : this.getEvalOutput(this.state.value);
  } else {
    return __jsx("span", {
      className: "output empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 12
      }
    }, "Type something to see the evaluated output");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwib3V0cHV0Iiwic2V0T3V0cHV0IiwicXVlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsImNvZGVRdWVyeVBhcmFtIiwidmFsdWUiLCJjb2RlIiwic2V0Q29kZSIsImNsYXNzTmFtZSIsImRpc2FibGVBdXRvUnVuIiwiZ2V0T3V0cHV0IiwiY29uc29sZU1vZGUiLCJyZWFkT25seSIsIm5vUmVzZXQiLCJkZWZhdWx0Q29kZSIsInNoYXJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdGF0ZSIsIm5ld0NvZGUiLCJsZW5ndGgiLCJnZXRDb25zb2xlT3V0cHV0IiwiZ2V0RXZhbE91dHB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZWJwYWNrL3BhZ2VzL3JwZy9lZGl0b3IuOTI5MDUyODM4Zjk3ZTBlYzNiMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY2VFZGl0b3IgZnJvbSAnLi9BY2VFZGl0b3InXHJcbmltcG9ydCAnLi9Db2RlU2FuZGJveC5zY3NzJ1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSAndXRpbCdcclxuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ2F1dG8tYmluZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG4vLyBjbGFzcyBDb2RlU2FuZGJveCBleHRlbmRzIENvbXBvbmVudCB7XHJcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuLy8gICAgIHN1cGVyKHByb3BzKVxyXG4vLyAgIH1cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPGRpdlxyXG4vLyAgICAgICAgIGNsYXNzTmFtZT17XHJcbi8vICAgICAgICAgICAnc2FuZGJveCcgKyAodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4vLyAgICAgICAgIH0+XHJcbi8vICAgICAgICAge3R5cGVvZiB0aGlzLnN0YXRlLnNoYXJlVVJMID09ICdzdHJpbmcnID8gKFxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj5cclxuLy8gICAgICAgICAgICAgWW91ciBTaGFyaW5nIFVSTDpcclxuLy8gICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidXJsXCIgaHJlZj17dGhpcy5zdGF0ZS5zaGFyZVVSTH0+XHJcbi8vICAgICAgICAgICAgICAgUmlnaHQgQ2xpY2sgYW5kIENvcHkgVGhpcyBMaW5rXHJcbi8vICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBjbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VTaGFyaW5nfT5cclxuLy8gICAgICAgICAgICAgICDinYxcclxuLy8gICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XHJcbi8vICAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IChcclxuLy8gICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSdW5cIiBjbGFzc05hbWU9XCJpY29uIHBsYXlcIiBvbkNsaWNrPXt0aGlzLnJ1bn0+XHJcbi8vICAgICAgICAgICAgICAg4pa2XHJcbi8vICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgICAgPGgyPkphdmFTY3JpcHQge3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnVGVybWluYWwnIDogJ0V2YWx1YXRvcid9PC9oMj5cclxuLy8gICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gJyAoUmVhZCBPbmx5KScgOiBudWxsfVxyXG4vLyAgICAgICAgICAge3RoaXMucHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuLy8gICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSZXNldFwiIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIiBvbkNsaWNrPXt0aGlzLnJlc2V0fT5cclxuLy8gICAgICAgICAgICAgICDinYxcclxuLy8gICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgICB7dGhpcy5wcm9wcy5zaGFyaW5nID09IHRydWUgPyAoXHJcbi8vICAgICAgICAgICAgIDxGcmFnbWVudD5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlNoYXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiIG9uQ2xpY2s9e3RoaXMuc2hhcmV9PlxyXG4vLyAgICAgICAgICAgICAgICAg4piB77iPXHJcbi8vICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4vLyAgICAgICAgICAgKSA6IG51bGx9XHJcbi8vICAgICAgICAgPC9oMj5cclxuXHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuLy8gICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4vLyAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuLy8gICAgICAgICAgIDxBY2VFZGl0b3JcclxuLy8gICAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4vLyAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuLy8gICAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4vLyAgICAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuLy8gICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbi8vICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuLy8gICAgICAgICAgICAgb25DaGFuZ2U9eyguLi5hcmdzKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoLi4uYXJncylcclxuLy8gICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICB7dGhpcy5nZXRPdXRwdXQoKX1cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vICAgfVxyXG4vLyAgIGdldE91dHB1dChza2lwQXV0b1J1biA9IGZhbHNlKSB7XHJcbi8vICAgICBsZXQgb3V0cHV0ID0gbnVsbFxyXG4vLyAgICAgaWYgKHNraXBBdXRvUnVuICE9PSB0cnVlICYmIHRoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUpIHtcclxuLy8gICAgICAgb3V0cHV0ID1cclxuLy8gICAgICAgICB0aGlzLnN0YXRlLm91dHB1dCAhPT0gbnVsbCA/IChcclxuLy8gICAgICAgICAgIHRoaXMuc3RhdGUub3V0cHV0XHJcbi8vICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbi8vICAgICAgIG91dHB1dCA9XHJcbi8vICAgICAgICAgdGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZVxyXG4vLyAgICAgICAgICAgPyB0aGlzLmdldENvbnNvbGVPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuLy8gICAgICAgICAgIDogdGhpcy5nZXRFdmFsT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICBvdXRwdXQgPSA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5UeXBlIHNvbWV0aGluZyB0byBzZWUgdGhlIGV2YWx1YXRlZCBvdXRwdXQ8L3NwYW4+XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gb3V0cHV0XHJcbi8vICAgfVxyXG4vLyAgIGdldFZhbHVlKCkge1xyXG4vLyAgICAgbGV0IHZhbHVlID0gJydcclxuLy8gICAgIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbi8vICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4vLyAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jb2RlUXVlcnlQYXJhbSA9PSAnc3RyaW5nJykge1xyXG4vLyAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4vLyAgICAgICBpZiAocm91dGVyLnF1ZXJ5Lmhhc093blByb3BlcnR5KHRoaXMucHJvcHMuY29kZVF1ZXJ5UGFyYW0pKSB7XHJcbi8vICAgICAgICAgdmFsdWUgPSByb3V0ZXIucXVlcnlbdGhpcy5wcm9wcy5jb2RlUXVlcnlQYXJhbV1cclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJydcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gdmFsdWVcclxuLy8gICB9XHJcbi8vICAgZ2V0Q29uc29sZU91dHB1dChzb3VyY2UpIHtcclxuLy8gICAgIGNvbnN0IG9sZExvZyA9IGNvbnNvbGUubG9nXHJcbi8vICAgICBjb25zdCBsb2dPdXRwdXQgPSBbXVxyXG4vLyAgICAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xyXG4vLyAgICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbi8vICAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJncylcclxuLy8gICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICBsb2dPdXRwdXQucHVzaChhcmdzWzBdKVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBldmFsKHNvdXJjZSlcclxuLy8gICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuLy8gICAgICAgaWYgKGxvZ091dHB1dC5sZW5ndGggPCAxKVxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5cclxuLy8gICAgICAgICAgICAgVHJ5IGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBjb25zb2xlIHRvIHNlZSBzb21lIG91dHB1dFxyXG4vLyAgICAgICAgICAgPC9zcGFuPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QWNlRWRpdG9yXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4vLyAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4vLyAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbi8vICAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbi8vICAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuLy8gICAgICAgICAgIHJlYWRPbmx5XHJcbi8vICAgICAgICAgICB2YWx1ZT17bG9nT3V0cHV0Lm1hcCh2YWx1ZSA9PiBpbnNwZWN0KHZhbHVlKSkuam9pbignO1xcbicpfVxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgIClcclxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4vLyAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIGdldEV2YWxPdXRwdXQoc291cmNlKSB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCBvdXRwdXQgPSBldmFsKHNvdXJjZSlcclxuLy8gICAgICAgbGV0IG91dHB1dFNvdXJjZSA9IGluc3BlY3Qob3V0cHV0KVxyXG4vLyAgICAgICAvL2NvbnNvbGUubG9nKCd4Jywgb3V0cHV0U291cmNlKVxyXG4vLyAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxBY2VFZGl0b3JcclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbi8vICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbi8vICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuLy8gICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuLy8gICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4vLyAgICAgICAgICAgcmVhZE9ubHlcclxuLy8gICAgICAgICAgIHZhbHVlPXtvdXRwdXRTb3VyY2V9XHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgKVxyXG4vLyAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbi8vICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgaGFuZGxlQ2hhbmdlKG91dHB1dCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBvdXRwdXQgfSlcclxuLy8gICB9XHJcbi8vICAgcmVzZXQoKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJycgfSlcclxuLy8gICB9XHJcbi8vICAgcnVuKCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IG91dHB1dDogdGhpcy5nZXRPdXRwdXQodHJ1ZSkgfSlcclxuLy8gICB9XHJcbi8vICAgc2hhcmUoKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuLy8gICAgICAgc2hhcmVVUkw6ICdodHRwczovL3lvdXJmaXJzdHJwZy5jb20vcnBnL2VkaXRvcj9jb2RlPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZS52YWx1ZSlcclxuLy8gICAgIH0pXHJcbi8vICAgfVxyXG4vLyAgIGNsb3NlU2hhcmluZygpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFyZVVSTDogbnVsbCB9KVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gQ29kZVNhbmRib3gocHJvcHMpIHtcclxuICBjb25zdCBbc2hhcmVVUkwsIHNldFNoYXJlVVJMXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcclxuICAgIHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwcm9wcy5jb2RlUXVlcnlQYXJhbSlcclxuICAgICAgPyByb3V0ZXIucXVlcnlbcHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbiAgICAgIDogcHJvcHMudmFsdWUgfHwgJydcclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXsnc2FuZGJveCcgKyAocHJvcHMuaGFzT3duUHJvcGVydHkoJ2NsYXNzTmFtZScpID8gJyAnICsgcHJvcHMuY2xhc3NOYW1lIDogJycpfT5cclxuICAgICAge3R5cGVvZiBzaGFyZVVSTCA9PSAnc3RyaW5nJyA/IChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4gICAgICAgICAgWW91ciBTaGFyaW5nIFVSTDpcclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVybFwiIGhyZWY9e3NoYXJlVVJMfT5cclxuICAgICAgICAgICAgUmlnaHQgQ2xpY2sgYW5kIENvcHkgVGhpcyBMaW5rXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGNsb3NlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFNoYXJlVVJMKG51bGwpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICDinYxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxyXG4gICAgICAgIHtwcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUnVuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBwbGF5XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE91dHB1dChnZXRPdXRwdXQoY29kZSwgcHJvcHMuY29uc29sZU1vZGUpKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4pa2XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGgyPkphdmFTY3JpcHQge3Byb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ1Rlcm1pbmFsJyA6ICdFdmFsdWF0b3InfTwvaDI+XHJcbiAgICAgICAge3Byb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gJyAoUmVhZCBPbmx5KScgOiBudWxsfVxyXG4gICAgICAgIHtwcm9wcy5ub1Jlc2V0ICE9PSB0cnVlID8gKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgdGl0bGU9XCJSZXNldFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q29kZShcclxuICAgICAgICAgICAgICAgIHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwcm9wcy5jb2RlUXVlcnlQYXJhbSlcclxuICAgICAgICAgICAgICAgICAgPyByb3V0ZXIucXVlcnlbcHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbiAgICAgICAgICAgICAgICAgIDogZGVmYXVsdENvZGVcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICDinYxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7cHJvcHMuc2hhcmluZyA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiU2hhcmVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gc2hhcmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNoYXJlVVJMKFxyXG4gICAgICAgICAgICAgICAgICAnaHR0cHM6Ly95b3VyZmlyc3RycGcuY29tL3JwZy9lZGl0b3I/Y29kZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAg4piB77iPXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdDb25zb2xlJyA6ICdPdXRwdXQnfTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5PXtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e25ld0NvZGUgPT4ge1xyXG4gICAgICAgICAgICBzZXRDb2RlKG5ld0NvZGUpXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5kaXNhYmxlQXV0b1J1biAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHNldE91dHB1dChnZXRPdXRwdXQobmV3Q29kZSwgcHJvcHMuY29uc29sZU1vZGUpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge291dHB1dCA9PT0gbnVsbCA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIG91dHB1dFxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdXRwdXQoY29kZSwgY29uc29sZU1vZGUpIHtcclxuICBpZiAoY29kZS5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gY29uc29sZU1vZGUgPT09IHRydWVcclxuICAgICAgPyB0aGlzLmdldENvbnNvbGVPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgOiB0aGlzLmdldEV2YWxPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVTYW5kYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=