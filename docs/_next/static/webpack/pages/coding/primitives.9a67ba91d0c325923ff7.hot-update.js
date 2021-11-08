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
      }, this.state.sharePopup === true ? __jsx("span", {
        className: "share-popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      }, "Your Sharing URL: ", this.getShareURL())) : null, __jsx("h2", {
        className: "main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, this.props.disableAutoRun === true ? __jsx("span", {
        title: "Run",
        className: "icon play",
        onClick: this.run,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, "\u25B6") : null, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, "JavaScript ", this.props.consoleMode === true ? 'Terminal' : 'Evaluator'), this.props.readOnly === true ? ' (Read Only)' : null, this.props.noReset !== true ? __jsx("span", {
        title: "Reset",
        className: "icon reset",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, "\u274C") : null, this.props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx("span", {
        title: "Share",
        className: "icon share",
        onClick: this.share,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, "\u2601\uFE0F")) : null), __jsx("div", {
        className: "titles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }, "Code Input"), __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, this.props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
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
          lineNumber: 51,
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
            lineNumber: 74,
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
            lineNumber: 82,
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
            lineNumber: 101,
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
            lineNumber: 106,
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
            lineNumber: 118,
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
            lineNumber: 127,
            columnNumber: 9
          }
        });
      } catch (err) {
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
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
  }, {
    key: "getShareURL",
    value: function getShareURL() {
      return 'google.com';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwiYXV0b0JpbmQiLCJzdGF0ZSIsInZhbHVlIiwib3V0cHV0IiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWUiLCJzaGFyZVBvcHVwIiwiZ2V0U2hhcmVVUkwiLCJkaXNhYmxlQXV0b1J1biIsInJ1biIsImNvbnNvbGVNb2RlIiwicmVhZE9ubHkiLCJub1Jlc2V0IiwicmVzZXQiLCJzaGFyaW5nIiwic2hhcmUiLCJoYW5kbGVDaGFuZ2UiLCJnZXRPdXRwdXQiLCJza2lwQXV0b1J1biIsInRyaW0iLCJsZW5ndGgiLCJnZXRDb25zb2xlT3V0cHV0IiwiZ2V0RXZhbE91dHB1dCIsInNvdXJjZSIsIm9sZExvZyIsImNvbnNvbGUiLCJsb2ciLCJsb2dPdXRwdXQiLCJhcmdzIiwicHVzaCIsImV2YWwiLCJtYXAiLCJpbnNwZWN0Iiwiam9pbiIsImVyciIsIm91dHB1dFNvdXJjZSIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBQyxxREFBUSxDQUFDLHdHQUFUO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLFdBQUssRUFBRSxNQUFLSCxLQUFMLENBQVdHLEtBQVgsSUFBb0IsRUFBN0I7QUFBaUNDLFlBQU0sRUFBRTtBQUF6QyxLQUFiO0FBSGlCO0FBSWxCOzs7O1dBQ0Qsa0JBQVM7QUFBQTs7QUFDUCxhQUNFO0FBQ0UsaUJBQVMsRUFDUCxhQUFhLEtBQUtKLEtBQUwsQ0FBV0ssY0FBWCxDQUEwQixXQUExQixJQUF5QyxNQUFNLEtBQUtMLEtBQUwsQ0FBV00sU0FBMUQsR0FBc0UsRUFBbkYsQ0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUcsS0FBS0osS0FBTCxDQUFXSyxVQUFYLEtBQTBCLElBQTFCLEdBQ0M7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLGlCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBMkMsS0FBS0MsV0FBTCxFQUEzQyxDQURGLENBREQsR0FJRyxJQVJOLEVBU0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUtSLEtBQUwsQ0FBV1MsY0FBWCxLQUE4QixJQUE5QixHQUNDO0FBQU0sYUFBSyxFQUFDLEtBQVo7QUFBa0IsaUJBQVMsRUFBQyxXQUE1QjtBQUF3QyxlQUFPLEVBQUUsS0FBS0MsR0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxHQUlHLElBTE4sRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFnQixLQUFLVixLQUFMLENBQVdXLFdBQVgsS0FBMkIsSUFBM0IsR0FBa0MsVUFBbEMsR0FBK0MsV0FBL0QsQ0FORixFQU9HLEtBQUtYLEtBQUwsQ0FBV1ksUUFBWCxLQUF3QixJQUF4QixHQUErQixjQUEvQixHQUFnRCxJQVBuRCxFQVFHLEtBQUtaLEtBQUwsQ0FBV2EsT0FBWCxLQUF1QixJQUF2QixHQUNDO0FBQU0sYUFBSyxFQUFDLE9BQVo7QUFBb0IsaUJBQVMsRUFBQyxZQUE5QjtBQUEyQyxlQUFPLEVBQUUsS0FBS0MsS0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxHQUlHLElBWk4sRUFhRyxLQUFLZCxLQUFMLENBQVdlLE9BQVgsSUFBc0IsSUFBdEIsR0FDQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLGFBQUssRUFBQyxPQUFaO0FBQW9CLGlCQUFTLEVBQUMsWUFBOUI7QUFBMkMsZUFBTyxFQUFFLEtBQUtDLEtBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERCxHQU1HLElBbkJOLENBVEYsRUErQkU7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCLEtBQUtoQixLQUFMLENBQVdXLFdBQVgsS0FBMkIsSUFBM0IsR0FBa0MsU0FBbEMsR0FBOEMsUUFBckUsQ0FGRixDQS9CRixFQW1DRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLGFBQUssRUFBQyxLQURSO0FBRUUsY0FBTSxFQUFDLE1BRlQ7QUFHRSxZQUFJLEVBQUMsWUFIUDtBQUlFLGFBQUssRUFBQyxVQUpSO0FBS0UsZ0JBQVEsRUFBRSxLQUFLWCxLQUFMLENBQVdZLFFBQVgsS0FBd0IsSUFMcEM7QUFNRSxhQUFLLEVBQUUsS0FBS1YsS0FBTCxDQUFXQyxLQU5wQjtBQU9FLGdCQUFRLEVBQUUsb0JBQWE7QUFDckIsZ0JBQUksQ0FBQ2MsWUFBTCxhQUFJLFlBQUo7QUFDRCxTQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVlHLEtBQUtDLFNBQUwsRUFaSCxDQW5DRixDQURGO0FBb0REOzs7V0FDRCxxQkFBK0I7QUFBQSxVQUFyQkMsV0FBcUIsdUVBQVAsS0FBTztBQUM3QixVQUFJZixNQUFNLEdBQUcsSUFBYjs7QUFDQSxVQUFJZSxXQUFXLEtBQUssSUFBaEIsSUFBd0IsS0FBS25CLEtBQUwsQ0FBV1MsY0FBWCxLQUE4QixJQUExRCxFQUFnRTtBQUM5REwsY0FBTSxHQUNKLEtBQUtGLEtBQUwsQ0FBV0UsTUFBWCxLQUFzQixJQUF0QixHQUNFLEtBQUtGLEtBQUwsQ0FBV0UsTUFEYixHQUdFO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUpKO0FBTUQsT0FQRCxNQU9PLElBQUksS0FBS0YsS0FBTCxDQUFXQyxLQUFYLENBQWlCaUIsSUFBakIsR0FBd0JDLE1BQXhCLEdBQWlDLENBQXJDLEVBQXdDO0FBQzdDakIsY0FBTSxHQUNKLEtBQUtKLEtBQUwsQ0FBV1csV0FBWCxLQUEyQixJQUEzQixHQUNJLEtBQUtXLGdCQUFMLENBQXNCLEtBQUtwQixLQUFMLENBQVdDLEtBQWpDLENBREosR0FFSSxLQUFLb0IsYUFBTCxDQUFtQixLQUFLckIsS0FBTCxDQUFXQyxLQUE5QixDQUhOO0FBSUQsT0FMTSxNQUtBO0FBQ0xDLGNBQU0sR0FBRztBQUFNLG1CQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFBVDtBQUNEOztBQUNELGFBQU9BLE1BQVA7QUFDRDs7O1dBQ0QsMEJBQWlCb0IsTUFBakIsRUFBeUI7QUFDdkIsVUFBTUMsTUFBTSxHQUFHQyxPQUFPLENBQUNDLEdBQXZCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHLEVBQWxCOztBQUNBRixhQUFPLENBQUNDLEdBQVIsR0FBYyxZQUFhO0FBQUEsMENBQVRFLElBQVM7QUFBVEEsY0FBUztBQUFBOztBQUN6QixZQUFJQSxJQUFJLENBQUNSLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQk8sbUJBQVMsQ0FBQ0UsSUFBVixDQUFlRCxJQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xELG1CQUFTLENBQUNFLElBQVYsQ0FBZUQsSUFBSSxDQUFDLENBQUQsQ0FBbkI7QUFDRDtBQUNGLE9BTkQ7O0FBT0EsVUFBSTtBQUNGRSxZQUFJLENBQUNQLE1BQUQsQ0FBSjtBQUNBRSxlQUFPLENBQUNDLEdBQVIsR0FBY0YsTUFBZDtBQUNBLFlBQUlHLFNBQVMsQ0FBQ1AsTUFBVixHQUFtQixDQUF2QixFQUNFLE9BQ0U7QUFBTSxtQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREY7QUFLRixlQUNFLE1BQUMsa0RBQUQ7QUFDRSxtQkFBUyxFQUFDLGNBRFo7QUFFRSxlQUFLLEVBQUMsS0FGUjtBQUdFLGdCQUFNLEVBQUMsTUFIVDtBQUlFLGNBQUksRUFBQyxZQUpQO0FBS0UsZUFBSyxFQUFDLFVBTFI7QUFNRSxrQkFBUSxNQU5WO0FBT0UsZUFBSyxFQUFFTyxTQUFTLENBQUNJLEdBQVYsQ0FBYyxVQUFBN0IsS0FBSztBQUFBLG1CQUFJOEIsb0RBQU8sQ0FBQzlCLEtBQUQsQ0FBWDtBQUFBLFdBQW5CLEVBQXVDK0IsSUFBdkMsQ0FBNEMsS0FBNUMsQ0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRCxPQXBCRCxDQW9CRSxPQUFPQyxHQUFQLEVBQVk7QUFDWlQsZUFBTyxDQUFDQyxHQUFSLEdBQWNGLE1BQWQ7QUFDQSxlQUFPO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdDUSxvREFBTyxDQUFDRSxHQUFELENBQXZDLENBQVA7QUFDRDtBQUNGOzs7V0FDRCx1QkFBY1gsTUFBZCxFQUFzQjtBQUNwQixVQUFJO0FBQ0YsWUFBTXBCLE1BQU0sR0FBRzJCLElBQUksQ0FBQ1AsTUFBRCxDQUFuQjtBQUNBLFlBQUlZLFlBQVksR0FBR0gsb0RBQU8sQ0FBQzdCLE1BQUQsQ0FBMUIsQ0FGRSxDQUdGOztBQUNBLGVBQ0UsTUFBQyxrREFBRDtBQUNFLG1CQUFTLEVBQUMsY0FEWjtBQUVFLGVBQUssRUFBQyxLQUZSO0FBR0UsZ0JBQU0sRUFBQyxNQUhUO0FBSUUsY0FBSSxFQUFDLFlBSlA7QUFLRSxlQUFLLEVBQUMsVUFMUjtBQU1FLGtCQUFRLE1BTlY7QUFPRSxlQUFLLEVBQUVnQyxZQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdELE9BZkQsQ0FlRSxPQUFPRCxHQUFQLEVBQVk7QUFDWixlQUFPO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdDRixvREFBTyxDQUFDRSxHQUFELENBQXZDLENBQVA7QUFDRDtBQUNGOzs7V0FDRCxzQkFBYS9CLE1BQWIsRUFBcUI7QUFDbkIsV0FBS2lDLFFBQUwsQ0FBYztBQUFFbEMsYUFBSyxFQUFFQztBQUFULE9BQWQ7QUFDRDs7O1dBQ0QsaUJBQVE7QUFDTixXQUFLaUMsUUFBTCxDQUFjO0FBQUVsQyxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxLQUFYLElBQW9CO0FBQTdCLE9BQWQ7QUFDRDs7O1dBQ0QsZUFBTTtBQUNKLFdBQUtrQyxRQUFMLENBQWM7QUFBRWpDLGNBQU0sRUFBRSxLQUFLYyxTQUFMLENBQWUsSUFBZjtBQUFWLE9BQWQ7QUFDRDs7O1dBQ0QsaUJBQVE7QUFDTixXQUFLbUIsUUFBTCxDQUFjO0FBQUU5QixrQkFBVSxFQUFFO0FBQWQsT0FBZDtBQUNEOzs7V0FDRCx1QkFBYztBQUNaLGFBQU8sWUFBUDtBQUNEOzs7O0VBcEp1QitCLCtDOztBQXVKWHZDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvZGluZy9wcmltaXRpdmVzLjlhNjdiYTkxZDBjMzI1OTIzZmY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY2VFZGl0b3IgZnJvbSAnLi9BY2VFZGl0b3InXHJcbmltcG9ydCAnLi9Db2RlU2FuZGJveC5zY3NzJ1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSAndXRpbCdcclxuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ2F1dG8tYmluZCdcclxuXHJcbmNsYXNzIENvZGVTYW5kYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBhdXRvQmluZCh0aGlzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJycsIG91dHB1dDogbnVsbCB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgJ3NhbmRib3gnICsgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NsYXNzTmFtZScpID8gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICB9PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNoYXJlUG9wdXAgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbm5lclwiPllvdXIgU2hhcmluZyBVUkw6IHt0aGlzLmdldFNoYXJlVVJMKCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSdW5cIiBjbGFzc05hbWU9XCJpY29uIHBsYXlcIiBvbkNsaWNrPXt0aGlzLnJ1bn0+XHJcbiAgICAgICAgICAgICAg4pa2XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPGgyPkphdmFTY3JpcHQge3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnVGVybWluYWwnIDogJ0V2YWx1YXRvcid9PC9oMj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gJyAoUmVhZCBPbmx5KScgOiBudWxsfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSZXNldFwiIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIiBvbkNsaWNrPXt0aGlzLnJlc2V0fT5cclxuICAgICAgICAgICAgICDinYxcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaGFyaW5nID09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlNoYXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiIG9uQ2xpY2s9e3RoaXMuc2hhcmV9PlxyXG4gICAgICAgICAgICAgICAg4piB77iPXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSguLi5hcmdzKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0aGlzLmdldE91dHB1dCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgZ2V0T3V0cHV0KHNraXBBdXRvUnVuID0gZmFsc2UpIHtcclxuICAgIGxldCBvdXRwdXQgPSBudWxsXHJcbiAgICBpZiAoc2tpcEF1dG9SdW4gIT09IHRydWUgJiYgdGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSkge1xyXG4gICAgICBvdXRwdXQgPVxyXG4gICAgICAgIHRoaXMuc3RhdGUub3V0cHV0ICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXRcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+UnVuIHRoZSBwcm9ncmFtIHRvIHNlZSB5b3VyIG91dHB1dDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgb3V0cHV0ID1cclxuICAgICAgICB0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlXHJcbiAgICAgICAgICA/IHRoaXMuZ2V0Q29uc29sZU91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgICAgOiB0aGlzLmdldEV2YWxPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG91dHB1dCA9IDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9XHJcbiAgZ2V0Q29uc29sZU91dHB1dChzb3VyY2UpIHtcclxuICAgIGNvbnN0IG9sZExvZyA9IGNvbnNvbGUubG9nXHJcbiAgICBjb25zdCBsb2dPdXRwdXQgPSBbXVxyXG4gICAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJncylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2dPdXRwdXQucHVzaChhcmdzWzBdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBldmFsKHNvdXJjZSlcclxuICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgICAgaWYgKGxvZ091dHB1dC5sZW5ndGggPCAxKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5cclxuICAgICAgICAgICAgVHJ5IGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBjb25zb2xlIHRvIHNlZSBzb21lIG91dHB1dFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICB2YWx1ZT17bG9nT3V0cHV0Lm1hcCh2YWx1ZSA9PiBpbnNwZWN0KHZhbHVlKSkuam9pbignO1xcbicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEV2YWxPdXRwdXQoc291cmNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvdXRwdXQgPSBldmFsKHNvdXJjZSlcclxuICAgICAgbGV0IG91dHB1dFNvdXJjZSA9IGluc3BlY3Qob3V0cHV0KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCd4Jywgb3V0cHV0U291cmNlKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIHZhbHVlPXtvdXRwdXRTb3VyY2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKG91dHB1dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBvdXRwdXQgfSlcclxuICB9XHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJycgfSlcclxuICB9XHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG91dHB1dDogdGhpcy5nZXRPdXRwdXQodHJ1ZSkgfSlcclxuICB9XHJcbiAgc2hhcmUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVQb3B1cDogdHJ1ZSB9KVxyXG4gIH1cclxuICBnZXRTaGFyZVVSTCgpIHtcclxuICAgIHJldHVybiAnZ29vZ2xlLmNvbSdcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVTYW5kYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=