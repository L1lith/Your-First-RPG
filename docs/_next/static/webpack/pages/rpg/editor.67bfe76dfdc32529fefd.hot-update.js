webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./components/CodeSandbox.js":
/*!***********************************!*\
  !*** ./components/CodeSandbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AceEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AceEditor */ "./components/AceEditor.js");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CodeSandbox.scss */ "./components/CodeSandbox.scss");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\components\\CodeSandbox.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





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

  var _useState = useState(null),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      shareURL = _useState2[0],
      setShareURL = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState3 = useState(null),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      output = _useState4[0],
      setOutput = _useState4[1];

  var _useState5 = useState(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : defaultCode),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      code = _useState6[0],
      setCode = _useState6[1];

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
  }, "\u274C") : null, props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
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
  }, __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }), output));
}

_s(CodeSandbox, "/TM6faLAdX3f90yOby+CK6mTwIA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = CodeSandbox;

function getOutput(code, consoleMode) {
  var output = null;

  if (skipAutoRun !== true && this.props.disableAutoRun === true) {
    output = this.state.output !== null ? this.state.output : __jsx("span", {
      className: "output empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }
    }, "Run the program to see your output");
  } else if (this.state.value.trim().length > 0) {
    output = this.props.consoleMode === true ? this.getConsoleOutput(this.state.value) : this.getEvalOutput(this.state.value);
  } else {
    output = __jsx("span", {
      className: "output empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 14
      }
    }, "Type something to see the evaluated output");
  }

  return output;
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sIm5hbWVzIjpbIkNvZGVTYW5kYm94IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNoYXJlVVJMIiwic2V0U2hhcmVVUkwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJxdWVyeSIsImhhc093blByb3BlcnR5IiwiY29kZVF1ZXJ5UGFyYW0iLCJkZWZhdWx0Q29kZSIsImNvZGUiLCJzZXRDb2RlIiwiY2xhc3NOYW1lIiwiZGlzYWJsZUF1dG9SdW4iLCJnZXRPdXRwdXQiLCJjb25zb2xlTW9kZSIsInJlYWRPbmx5Iiwibm9SZXNldCIsInNoYXJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdGF0ZSIsInZhbHVlIiwibmV3Q29kZSIsInNraXBBdXRvUnVuIiwidHJpbSIsImxlbmd0aCIsImdldENvbnNvbGVPdXRwdXQiLCJnZXRFdmFsT3V0cHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDWTtBQUNZO0FBQ3RCO0FBQ2pDO0FBQ2YsU0FBUywrREFBYyxTQUFTLHFFQUFvQixZQUFZLDJFQUEwQixZQUFZLGdFQUFlO0FBQ3JILEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFrRDtBQUNuQztBQUNmO0FBQ0Esb0NBQW9DLGlFQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsaUVBQWdCO0FBQ3RHLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci42N2JmZTc2ZGZkYzMyNTI5ZmVmZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yJ1xyXG5pbXBvcnQgJy4vQ29kZVNhbmRib3guc2NzcydcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnXHJcbmltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuLy8gY2xhc3MgQ29kZVNhbmRib3ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICBzdXBlcihwcm9wcylcclxuLy8gICB9XHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxkaXZcclxuLy8gICAgICAgICBjbGFzc05hbWU9e1xyXG4vLyAgICAgICAgICAgJ3NhbmRib3gnICsgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NsYXNzTmFtZScpID8gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJylcclxuLy8gICAgICAgICB9PlxyXG4vLyAgICAgICAgIHt0eXBlb2YgdGhpcy5zdGF0ZS5zaGFyZVVSTCA9PSAnc3RyaW5nJyA/IChcclxuLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXJlLXBvcHVwXCI+XHJcbi8vICAgICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbi8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVybFwiIGhyZWY9e3RoaXMuc3RhdGUuc2hhcmVVUkx9PlxyXG4vLyAgICAgICAgICAgICAgIFJpZ2h0IENsaWNrIGFuZCBDb3B5IFRoaXMgTGlua1xyXG4vLyAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gY2xvc2VcIiBvbkNsaWNrPXt0aGlzLmNsb3NlU2hhcmluZ30+XHJcbi8vICAgICAgICAgICAgICAg4p2MXHJcbi8vICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxyXG4vLyAgICAgICAgICAge3RoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbi8vICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUnVuXCIgY2xhc3NOYW1lPVwiaWNvbiBwbGF5XCIgb25DbGljaz17dGhpcy5ydW59PlxyXG4vLyAgICAgICAgICAgICAgIOKWtlxyXG4vLyAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICAgIDxoMj5KYXZhU2NyaXB0IHt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ1Rlcm1pbmFsJyA6ICdFdmFsdWF0b3InfTwvaDI+XHJcbi8vICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuLy8gICAgICAgICAgIHt0aGlzLnByb3BzLm5vUmVzZXQgIT09IHRydWUgPyAoXHJcbi8vICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUmVzZXRcIiBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCIgb25DbGljaz17dGhpcy5yZXNldH0+XHJcbi8vICAgICAgICAgICAgICAg4p2MXHJcbi8vICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgICAge3RoaXMucHJvcHMuc2hhcmluZyA9PSB0cnVlID8gKFxyXG4vLyAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbi8vICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJTaGFyZVwiIGNsYXNzTmFtZT1cImljb24gc2hhcmVcIiBvbkNsaWNrPXt0aGlzLnNoYXJlfT5cclxuLy8gICAgICAgICAgICAgICAgIOKYge+4j1xyXG4vLyAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuLy8gICAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgIDwvaDI+XHJcblxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XHJcbi8vICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuLy8gICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ0NvbnNvbGUnIDogJ091dHB1dCd9PC9oMj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbi8vICAgICAgICAgICA8QWNlRWRpdG9yXHJcbi8vICAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuLy8gICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbi8vICAgICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuLy8gICAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbi8vICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlfVxyXG4vLyAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbi8vICAgICAgICAgICAgIG9uQ2hhbmdlPXsoLi4uYXJncykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKC4uLmFyZ3MpXHJcbi8vICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAge3RoaXMuZ2V0T3V0cHV0KCl9XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKVxyXG4vLyAgIH1cclxuLy8gICBnZXRPdXRwdXQoc2tpcEF1dG9SdW4gPSBmYWxzZSkge1xyXG4vLyAgICAgbGV0IG91dHB1dCA9IG51bGxcclxuLy8gICAgIGlmIChza2lwQXV0b1J1biAhPT0gdHJ1ZSAmJiB0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlKSB7XHJcbi8vICAgICAgIG91dHB1dCA9XHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXQgIT09IG51bGwgPyAoXHJcbi8vICAgICAgICAgICB0aGlzLnN0YXRlLm91dHB1dFxyXG4vLyAgICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5SdW4gdGhlIHByb2dyYW0gdG8gc2VlIHlvdXIgb3V0cHV0PC9zcGFuPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICBvdXRwdXQgPVxyXG4vLyAgICAgICAgIHRoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWVcclxuLy8gICAgICAgICAgID8gdGhpcy5nZXRDb25zb2xlT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbi8vICAgICAgICAgICA6IHRoaXMuZ2V0RXZhbE91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgb3V0cHV0ID0gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+VHlwZSBzb21ldGhpbmcgdG8gc2VlIHRoZSBldmFsdWF0ZWQgb3V0cHV0PC9zcGFuPlxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIG91dHB1dFxyXG4vLyAgIH1cclxuLy8gICBnZXRWYWx1ZSgpIHtcclxuLy8gICAgIGxldCB2YWx1ZSA9ICcnXHJcbi8vICAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4vLyAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWVcclxuLy8gICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMuY29kZVF1ZXJ5UGFyYW0gPT0gJ3N0cmluZycpIHtcclxuLy8gICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuLy8gICAgICAgaWYgKHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eSh0aGlzLnByb3BzLmNvZGVRdWVyeVBhcmFtKSkge1xyXG4vLyAgICAgICAgIHZhbHVlID0gcm91dGVyLnF1ZXJ5W3RoaXMucHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHZhbHVlXHJcbi8vICAgfVxyXG4vLyAgIGdldENvbnNvbGVPdXRwdXQoc291cmNlKSB7XHJcbi8vICAgICBjb25zdCBvbGRMb2cgPSBjb25zb2xlLmxvZ1xyXG4vLyAgICAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuLy8gICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuLy8gICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4vLyAgICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJnc1swXSlcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgZXZhbChzb3VyY2UpXHJcbi8vICAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbi8vICAgICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+XHJcbi8vICAgICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuLy8gICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICApXHJcbi8vICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEFjZUVkaXRvclxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuLy8gICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuLy8gICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4vLyAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4vLyAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbi8vICAgICAgICAgICByZWFkT25seVxyXG4vLyAgICAgICAgICAgdmFsdWU9e2xvZ091dHB1dC5tYXAodmFsdWUgPT4gaW5zcGVjdCh2YWx1ZSkpLmpvaW4oJztcXG4nKX1cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICApXHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuLy8gICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBnZXRFdmFsT3V0cHV0KHNvdXJjZSkge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3Qgb3V0cHV0ID0gZXZhbChzb3VyY2UpXHJcbi8vICAgICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuLy8gICAgICAgLy9jb25zb2xlLmxvZygneCcsIG91dHB1dFNvdXJjZSlcclxuLy8gICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QWNlRWRpdG9yXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4vLyAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4vLyAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbi8vICAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbi8vICAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuLy8gICAgICAgICAgIHJlYWRPbmx5XHJcbi8vICAgICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgIClcclxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIGhhbmRsZUNoYW5nZShvdXRwdXQpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogb3V0cHV0IH0pXHJcbi8vICAgfVxyXG4vLyAgIHJlc2V0KCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnIH0pXHJcbi8vICAgfVxyXG4vLyAgIHJ1bigpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBvdXRwdXQ6IHRoaXMuZ2V0T3V0cHV0KHRydWUpIH0pXHJcbi8vICAgfVxyXG4vLyAgIHNoYXJlKCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgIHNoYXJlVVJMOiAnaHR0cHM6Ly95b3VyZmlyc3RycGcuY29tL3JwZy9lZGl0b3I/Y29kZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3RhdGUudmFsdWUpXHJcbi8vICAgICB9KVxyXG4vLyAgIH1cclxuLy8gICBjbG9zZVNoYXJpbmcoKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVVUkw6IG51bGwgfSlcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIENvZGVTYW5kYm94KHByb3BzKSB7XHJcbiAgY29uc3QgW3NoYXJlVVJMLCBzZXRTaGFyZVVSTF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXHJcbiAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICA6IGRlZmF1bHRDb2RlXHJcbiAgKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J3NhbmRib3gnICsgKHByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHByb3BzLmNsYXNzTmFtZSA6ICcnKX0+XHJcbiAgICAgIHt0eXBlb2Ygc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj5cclxuICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXtzaGFyZVVSTH0+XHJcbiAgICAgICAgICAgIFJpZ2h0IENsaWNrIGFuZCBDb3B5IFRoaXMgTGlua1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBjbG9zZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTaGFyZVVSTChudWxsKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICB7cHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJ1blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcGxheVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KGNvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKWtlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMj5KYXZhU2NyaXB0IHtwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4gICAgICAgIHtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuICAgICAgICB7cHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVzZXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvZGUoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgICAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb2RlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLnNoYXJpbmcgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNoYXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHNoYXJlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaGFyZVVSTChcclxuICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8veW91cmZpcnN0cnBnLmNvbS9ycGcvZWRpdG9yP2NvZGU9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIOKYge+4j1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seT17cHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbiAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb2RlID0+IHtcclxuICAgICAgICAgICAgc2V0Q29kZShuZXdDb2RlKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuZGlzYWJsZUF1dG9SdW4gIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KG5ld0NvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtvdXRwdXR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdXRwdXQoY29kZSwgY29uc29sZU1vZGUpIHtcclxuICBsZXQgb3V0cHV0ID0gbnVsbFxyXG4gIGlmIChza2lwQXV0b1J1biAhPT0gdHJ1ZSAmJiB0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlKSB7XHJcbiAgICBvdXRwdXQgPVxyXG4gICAgICB0aGlzLnN0YXRlLm91dHB1dCAhPT0gbnVsbCA/IChcclxuICAgICAgICB0aGlzLnN0YXRlLm91dHB1dFxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgIClcclxuICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgIG91dHB1dCA9XHJcbiAgICAgIHRoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWVcclxuICAgICAgICA/IHRoaXMuZ2V0Q29uc29sZU91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgIDogdGhpcy5nZXRFdmFsT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIG91dHB1dCA9IDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlU2FuZGJveFxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==