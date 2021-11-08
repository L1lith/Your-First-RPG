webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./components/CodeSandbox.js":
/*!***********************************!*\
  !*** ./components/CodeSandbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AceEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AceEditor */ "./components/AceEditor.js");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CodeSandbox.scss */ "./components/CodeSandbox.scss");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\components\\CodeSandbox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var CodeSandbox = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeSandbox, _Component);

  var _super = _createSuper(CodeSandbox);

  function CodeSandbox(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeSandbox);

    _this = _super.call(this, props);
    auto_bind__WEBPACK_IMPORTED_MODULE_10___default()(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      value: _this.props.value || '',
      output: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeSandbox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: 'sandbox' + (this.props.hasOwnProperty('className') ? ' ' + this.props.className : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }, this.props.disableAutoRun === true ? __jsx("span", {
        className: "icon play",
        onClick: this.run,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, "\u25B6") : null, "JavaScript ", this.props.consoleMode === true ? 'Terminal' : 'Expression Evaluator', this.props.readOnly === true ? ' (Read Only)' : null, this.props.noRefresh !== true ? __jsx("span", {
        className: "icon reset",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, "\u27F3") : null, this.props.allowSharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: "icon save",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }
      }, "\u25B2"), __jsx("span", {
        className: "icon save",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }
      }, "\u27F3")) : null), __jsx("div", {
        className: "titles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, "Code Input"), __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }, this.props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: "50%",
        height: "100%",
        mode: "javascript",
        theme: "ambiance",
        readOnly: this.props.readOnly === true,
        value: this.state.value,
        onChange: function onChange() {
          _this2.handleChange.apply(_this2, arguments);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }), this.getOutput()));
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      var skipAutoRun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var output = null;

      if (skipAutoRun !== true && this.props.disableAutoRun === true) {
        output = this.state.output !== null ? this.state.output : __jsx("span", {
          className: "output empty",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
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
            lineNumber: 81,
            columnNumber: 16
          }
        }, "Type something to see the evaluated output");
      }

      return output;
    }
  }, {
    key: "getConsoleOutput",
    value: function getConsoleOutput(source) {
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
        eval(source);
        console.log = oldLog;
        if (logOutput.length < 1) return __jsx("span", {
          className: "output empty",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }
        }, "Try logging something to the console to see some output");
        return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "output valid",
          width: "50%",
          height: "100%",
          mode: "javascript",
          theme: "ambiance",
          readOnly: true,
          value: logOutput.map(function (value) {
            return Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(value);
          }).join(';\n'),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 9
          }
        });
      } catch (err) {
        console.log = oldLog;
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 14
          }
        }, Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(err));
      }
    }
  }, {
    key: "getEvalOutput",
    value: function getEvalOutput(source) {
      try {
        var output = eval(source);
        var outputSource = Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(output); //console.log('x', outputSource)

        return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
            lineNumber: 126,
            columnNumber: 9
          }
        });
      } catch (err) {
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 14
          }
        }, Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(err));
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(output) {
      this.setState({
        value: output
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        value: this.props.value || ''
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.setState({
        output: this.getOutput(true)
      });
    }
  }]);

  return CodeSandbox;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CodeSandbox);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwiYXV0b0JpbmQiLCJzdGF0ZSIsInZhbHVlIiwib3V0cHV0IiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWUiLCJkaXNhYmxlQXV0b1J1biIsInJ1biIsImNvbnNvbGVNb2RlIiwicmVhZE9ubHkiLCJub1JlZnJlc2giLCJyZXNldCIsImFsbG93U2hhcmluZyIsImhhbmRsZUNoYW5nZSIsImdldE91dHB1dCIsInNraXBBdXRvUnVuIiwidHJpbSIsImxlbmd0aCIsImdldENvbnNvbGVPdXRwdXQiLCJnZXRFdmFsT3V0cHV0Iiwic291cmNlIiwib2xkTG9nIiwiY29uc29sZSIsImxvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0FDLHFEQUFRLENBQUMsd0dBQVQ7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsV0FBSyxFQUFFLE1BQUtILEtBQUwsQ0FBV0csS0FBWCxJQUFvQixFQUE3QjtBQUFpQ0MsWUFBTSxFQUFFO0FBQXpDLEtBQWI7QUFIaUI7QUFJbEI7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNQLGFBQ0U7QUFDRSxpQkFBUyxFQUNQLGFBQWEsS0FBS0osS0FBTCxDQUFXSyxjQUFYLENBQTBCLFdBQTFCLElBQXlDLE1BQU0sS0FBS0wsS0FBTCxDQUFXTSxTQUExRCxHQUFzRSxFQUFuRixDQUZKO0FBQUE7QUFBQTtB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TUFBYixFQUFxQjtBQUNuQixXQUFLOEIsUUFBTCxDQUFjO0FBQUUvQixhQUFLLEVBQUVDO0FBQVQsT0FBZDtBQUNEOzs7V0FDRCxpQkFBUTtBQUNOLFdBQUs4QixRQUFMLENBQWM7QUFBRS9CLGFBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdHLEtBQVgsSUFBb0I7QUFBN0IsT0FBZDtBQUNEOzs7V0FDRCxlQUFNO0FBQ0osV0FBSytCLFFBQUwsQ0FBYztBQUFFOUIsY0FBTSxFQUFFLEtBQUtXLFNBQUwsQ0FBZSxJQUFmO0FBQVYsT0FBZDtBQUNEOzs7O0VBN0l1Qm9CLCtDOztBQWdKWHBDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JwZy9lZGl0b3IuMWFlMDBiZmE3OTA1ODA5NzE5Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjZUVkaXRvciBmcm9tICcuL0FjZUVkaXRvcidcclxuaW1wb3J0ICcuL0NvZGVTYW5kYm94LnNjc3MnXHJcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJ1xyXG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAnYXV0by1iaW5kJ1xyXG5cclxuY2xhc3MgQ29kZVNhbmRib3ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIGF1dG9CaW5kKHRoaXMpXHJcbiAgICB0aGlzLnN0YXRlID0geyB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCAnJywgb3V0cHV0OiBudWxsIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAnc2FuZGJveCcgKyAodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgIH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIHBsYXlcIiBvbkNsaWNrPXt0aGlzLnJ1bn0+XHJcbiAgICAgICAgICAgICAg4pa2XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgSmF2YVNjcmlwdCB7dGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXhwcmVzc2lvbiBFdmFsdWF0b3InfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWUgPyAnIChSZWFkIE9ubHkpJyA6IG51bGx9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5ub1JlZnJlc2ggIT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIiBvbkNsaWNrPXt0aGlzLnJlc2V0fT5cclxuICAgICAgICAgICAgICDin7NcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5hbGxvd1NoYXJpbmcgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gc2F2ZVwiIG9uQ2xpY2s9e3RoaXMucmVzZXR9PlxyXG4gICAgICAgICAgICAgICAg4payXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIHNhdmVcIiBvbkNsaWNrPXt0aGlzLnJlc2V0fT5cclxuICAgICAgICAgICAgICAgIOKfs1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ0NvbnNvbGUnIDogJ091dHB1dCd9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoLi4uYXJncylcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGhpcy5nZXRPdXRwdXQoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIGdldE91dHB1dChza2lwQXV0b1J1biA9IGZhbHNlKSB7XHJcbiAgICBsZXQgb3V0cHV0ID0gbnVsbFxyXG4gICAgaWYgKHNraXBBdXRvUnVuICE9PSB0cnVlICYmIHRoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUpIHtcclxuICAgICAgb3V0cHV0ID1cclxuICAgICAgICB0aGlzLnN0YXRlLm91dHB1dCAhPT0gbnVsbCA/IChcclxuICAgICAgICAgIHRoaXMuc3RhdGUub3V0cHV0XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG91dHB1dCA9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyB0aGlzLmdldENvbnNvbGVPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgICAgIDogdGhpcy5nZXRFdmFsT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvdXRwdXQgPSA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5UeXBlIHNvbWV0aGluZyB0byBzZWUgdGhlIGV2YWx1YXRlZCBvdXRwdXQ8L3NwYW4+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfVxyXG4gIGdldENvbnNvbGVPdXRwdXQoc291cmNlKSB7XHJcbiAgICBjb25zdCBvbGRMb2cgPSBjb25zb2xlLmxvZ1xyXG4gICAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJnc1swXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgZXZhbChzb3VyY2UpXHJcbiAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+XHJcbiAgICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgdmFsdWU9e2xvZ091dHB1dC5tYXAodmFsdWUgPT4gaW5zcGVjdCh2YWx1ZSkpLmpvaW4oJztcXG4nKX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRFdmFsT3V0cHV0KHNvdXJjZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3V0cHV0ID0gZXZhbChzb3VyY2UpXHJcbiAgICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuICAgICAgLy9jb25zb2xlLmxvZygneCcsIG91dHB1dFNvdXJjZSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShvdXRwdXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogb3V0cHV0IH0pXHJcbiAgfVxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnIH0pXHJcbiAgfVxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvdXRwdXQ6IHRoaXMuZ2V0T3V0cHV0KHRydWUpIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlU2FuZGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9