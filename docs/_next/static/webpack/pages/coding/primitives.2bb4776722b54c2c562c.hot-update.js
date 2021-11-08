webpackHotUpdate_N_E("pages/coding/primitives",{

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
      }, this.sharePopup === true ? __jsx("span", {
        className: "share-popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 37
        }
      }) : null, __jsx("h2", {
        className: "main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, this.props.disableAutoRun === true ? __jsx("span", {
        title: "Run",
        className: "icon play",
        onClick: this.run,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, "\u25B6") : null, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, "JavaScript ", this.props.consoleMode === true ? 'Terminal' : 'Evaluator'), this.props.readOnly === true ? ' (Read Only)' : null, this.props.noReset !== true ? __jsx("span", {
        title: "Reset",
        className: "icon reset",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, "\u274C") : null, this.props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, __jsx("span", {
        title: "Share",
        className: "icon share",
        onClick: this.share,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 15
        }
      }, "\u2601\uFE0F")) : null), __jsx("div", {
        className: "titles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, "Code Input"), __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, this.props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
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
          lineNumber: 47,
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
            lineNumber: 70,
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
            lineNumber: 78,
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
            lineNumber: 97,
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
            lineNumber: 102,
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
            lineNumber: 114,
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
            lineNumber: 123,
            columnNumber: 9
          }
        });
      } catch (err) {
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134,
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
  }, {
    key: "share",
    value: function share() {
      this.setState({
        sharePopup: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwiYXV0b0JpbmQiLCJzdGF0ZSIsInZhbHVlIiwib3V0cHV0IiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWUiLCJzaGFyZVBvcHVwIiwiZGlzYWJsZUF1dG9SdW4iLCJydW4iLCJjb25zb2xlTW9kZSIsInJlYWRPbmx5Iiwibm9SZXNldCIsInJlc2V0Iiwic2hhcmluZyIsInNoYXJlIiwiaGFuZGxlQ2hhbmdlIiwiZ2V0T3V0cHV0Iiwic2tpcEF1dG9SdW4iLCJ0cmltIiwibGVuZ3RoIiwiZ2V0Q29uc29sZU91dHB1dCIsImdldEV2YWxPdXRwdXQiLCJzb3VyY2UiLCJvbGRMb2ciLCJjb25zb2xlIiwibG9nIiwibG9nT3V0cHV0IiwiYXJncyIsInB1c2giLCJldmFsIiwibWFwIiwiaW5zcGVjdCIsImpvaW4iLCJlcnIiLCJvdXRwdXRTb3VyY2UiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFc7Ozs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQUMscURBQVEsQ0FBQyx3R0FBVDtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxXQUFLLEVBQUUsTUFBS0gsS0FBTCxDQUFXRyxLQUFYLElBQW9CLEVBQTdCO0FBQWlDQyxZQUFNLEVBQUU7QUFBekMsS0FBYjtBQUhpQjtBQUlsQjs7OztXQUNELGtCQUFTO0FBQUE7O0FBQ1AsYUFDRTtBQUNFLGlCQUFTLEVBQ1AsYUFBYSxLQUFLSixLQUFMLENBQVdLLGNBQVgsQ0FBMEIsV0FBMUIsSUFBeUMsTUFBTSxLQUFLTCxLQUFMLENBQVdNLFNBQTFELEdBQXNFLEVBQW5GLENB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R0FBUCxFQUFZO0FBQ1osZUFBTztBQUFNLG1CQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFnQ0Ysb0RBQU8sQ0FBQ0UsR0FBRCxDQUF2QyxDQUFQO0FBQ0Q7QUFDRjs7O1dBQ0Qsc0JBQWE5QixNQUFiLEVBQXFCO0FBQ25CLFdBQUtnQyxRQUFMLENBQWM7QUFBRWpDLGFBQUssRUFBRUM7QUFBVCxPQUFkO0FBQ0Q7OztXQUNELGlCQUFRO0FBQ04sV0FBS2dDLFFBQUwsQ0FBYztBQUFFakMsYUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0csS0FBWCxJQUFvQjtBQUE3QixPQUFkO0FBQ0Q7OztXQUNELGVBQU07QUFDSixXQUFLaUMsUUFBTCxDQUFjO0FBQUVoQyxjQUFNLEVBQUUsS0FBS2EsU0FBTCxDQUFlLElBQWY7QUFBVixPQUFkO0FBQ0Q7OztXQUNELGlCQUFRO0FBQ04sV0FBS21CLFFBQUwsQ0FBYztBQUFFN0Isa0JBQVUsRUFBRTtBQUFkLE9BQWQ7QUFDRDs7OztFQTdJdUI4QiwrQzs7QUFnSlh0QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb2RpbmcvcHJpbWl0aXZlcy4yYmI0Nzc2NzIyYjU0YzJjNTYyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yJ1xyXG5pbXBvcnQgJy4vQ29kZVNhbmRib3guc2NzcydcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnXHJcbmltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnXHJcblxyXG5jbGFzcyBDb2RlU2FuZGJveCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgYXV0b0JpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnLCBvdXRwdXQ6IG51bGwgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICdzYW5kYm94JyArICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgfT5cclxuICAgICAgICB7dGhpcy5zaGFyZVBvcHVwID09PSB0cnVlID8gPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj48L3NwYW4+IDogbnVsbH1cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUnVuXCIgY2xhc3NOYW1lPVwiaWNvbiBwbGF5XCIgb25DbGljaz17dGhpcy5ydW59PlxyXG4gICAgICAgICAgICAgIOKWtlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxoMj5KYXZhU2NyaXB0IHt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ1Rlcm1pbmFsJyA6ICdFdmFsdWF0b3InfTwvaDI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLm5vUmVzZXQgIT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUmVzZXRcIiBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCIgb25DbGljaz17dGhpcy5yZXNldH0+XHJcbiAgICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2hhcmluZyA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJTaGFyZVwiIGNsYXNzTmFtZT1cImljb24gc2hhcmVcIiBvbkNsaWNrPXt0aGlzLnNoYXJlfT5cclxuICAgICAgICAgICAgICAgIOKYge+4j1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ0NvbnNvbGUnIDogJ091dHB1dCd9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoLi4uYXJncylcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGhpcy5nZXRPdXRwdXQoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIGdldE91dHB1dChza2lwQXV0b1J1biA9IGZhbHNlKSB7XHJcbiAgICBsZXQgb3V0cHV0ID0gbnVsbFxyXG4gICAgaWYgKHNraXBBdXRvUnVuICE9PSB0cnVlICYmIHRoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUpIHtcclxuICAgICAgb3V0cHV0ID1cclxuICAgICAgICB0aGlzLnN0YXRlLm91dHB1dCAhPT0gbnVsbCA/IChcclxuICAgICAgICAgIHRoaXMuc3RhdGUub3V0cHV0XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG91dHB1dCA9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyB0aGlzLmdldENvbnNvbGVPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgICAgIDogdGhpcy5nZXRFdmFsT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvdXRwdXQgPSA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5UeXBlIHNvbWV0aGluZyB0byBzZWUgdGhlIGV2YWx1YXRlZCBvdXRwdXQ8L3NwYW4+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfVxyXG4gIGdldENvbnNvbGVPdXRwdXQoc291cmNlKSB7XHJcbiAgICBjb25zdCBvbGRMb2cgPSBjb25zb2xlLmxvZ1xyXG4gICAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJnc1swXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgZXZhbChzb3VyY2UpXHJcbiAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+XHJcbiAgICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgdmFsdWU9e2xvZ091dHB1dC5tYXAodmFsdWUgPT4gaW5zcGVjdCh2YWx1ZSkpLmpvaW4oJztcXG4nKX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRFdmFsT3V0cHV0KHNvdXJjZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3V0cHV0ID0gZXZhbChzb3VyY2UpXHJcbiAgICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuICAgICAgLy9jb25zb2xlLmxvZygneCcsIG91dHB1dFNvdXJjZSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShvdXRwdXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogb3V0cHV0IH0pXHJcbiAgfVxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnIH0pXHJcbiAgfVxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvdXRwdXQ6IHRoaXMuZ2V0T3V0cHV0KHRydWUpIH0pXHJcbiAgfVxyXG4gIHNoYXJlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlUG9wdXA6IHRydWUgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVTYW5kYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=