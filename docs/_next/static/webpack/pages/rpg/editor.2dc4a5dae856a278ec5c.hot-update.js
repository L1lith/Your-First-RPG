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
      }, typeof this.state.shareURL == 'string' ? __jsx("span", {
        className: "share-popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, "Your Sharing URL:", __jsx("a", {
        className: "url",
        href: this.state.shareURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, "Right Click and Copy This Link")) : null, __jsx("h2", {
        className: "main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }, this.props.disableAutoRun === true ? __jsx("span", {
        title: "Run",
        className: "icon play",
        onClick: this.run,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, "\u25B6") : null, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }, "JavaScript ", this.props.consoleMode === true ? 'Terminal' : 'Evaluator'), this.props.readOnly === true ? ' (Read Only)' : null, this.props.noReset !== true ? __jsx("span", {
        title: "Reset",
        className: "icon reset",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }
      }, "\u274C") : null, this.props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, __jsx("span", {
        title: "Share",
        className: "icon share",
        onClick: this.share,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 15
        }
      }, "\u2601\uFE0F")) : null), __jsx("div", {
        className: "titles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Code Input"), __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, this.props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
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
          lineNumber: 54,
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
            lineNumber: 77,
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
            lineNumber: 85,
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
            lineNumber: 104,
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
            lineNumber: 109,
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
            lineNumber: 121,
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
            lineNumber: 130,
            columnNumber: 9
          }
        });
      } catch (err) {
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
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
        shareURL: 'https://yourfirstrpg.com/rpg/editor?code=' + encodeURIComponent(this.state.value)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwiYXV0b0JpbmQiLCJzdGF0ZSIsInZhbHVlIiwib3V0cHV0IiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWUiLCJzaGFyZVVSTCIsImRpc2FibGVBdXRvUnVuIiwicnVuIiwiY29uc29sZU1vZGUiLCJyZWFkT25seSIsIm5vUmVzZXQiLCJyZXNldCIsInNoYXJpbmciLCJzaGFyZSIsImhhbmRsZUNoYW5nZSIsImdldE91dHB1dCIsInNraXBBdXRvUnVuIiwidHJpbSIsImxlbmd0aCIsImdldENvbnNvbGVPdXRwdXQiLCJnZXRFdmFsT3V0cHV0Iiwic291cmNlIiwib2xkTG9nIiwiY29uc29sZSIsImxvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIiwic2V0U3RhdGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0FDLHFEQUFRLENBQUMsd0dBQVQ7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsV0FBSyxFQUFFLE1BQUtILEtBQUwsQ0FBV0csS0FBWCxJQUFvQixFQUE3QjtBQUFpQ0MsWUFBTSxFQUFFO0FBQXpDLEtBQWI7QUFIaUI7QUFJbEI7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNQLGFBQ0U7QUFDRSxpQkFBUyxFQUNQLGFBQWEsS0FBS0osS0FBTCxDQUFXSyxjQUFYLENBQTBCLFdBQTFCLElBQXlDLE1BQU0sS0FBS0wsS0FBTCxDQUFXTSxT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QUFJRSxjQUFJLEVBQUMsWUFKUDtBQUtFLGVBQUssRUFBQyxVQUxSO0FBTUUsa0JBQVEsTUFOVjtBQU9FLGVBQUssRUFBRStCLFlBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsT0FmRCxDQWVFLE9BQU9ELEdBQVAsRUFBWTtBQUNaLGVBQU87QUFBTSxtQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0NGLG9EQUFPLENBQUNFLEdBQUQsQ0FBdkMsQ0FBUDtBQUNEO0FBQ0Y7OztXQUNELHNCQUFhOUIsTUFBYixFQUFxQjtBQUNuQixXQUFLZ0MsUUFBTCxDQUFjO0FBQUVqQyxhQUFLLEVBQUVDO0FBQVQsT0FBZDtBQUNEOzs7V0FDRCxpQkFBUTtBQUNOLFdBQUtnQyxRQUFMLENBQWM7QUFBRWpDLGFBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdHLEtBQVgsSUFBb0I7QUFBN0IsT0FBZDtBQUNEOzs7V0FDRCxlQUFNO0FBQ0osV0FBS2lDLFFBQUwsQ0FBYztBQUFFaEMsY0FBTSxFQUFFLEtBQUthLFNBQUwsQ0FBZSxJQUFmO0FBQVYsT0FBZDtBQUNEOzs7V0FDRCxpQkFBUTtBQUNOLFdBQUttQixRQUFMLENBQWM7QUFDWjdCLGdCQUFRLEVBQUUsOENBQThDOEIsa0JBQWtCLENBQUMsS0FBS25DLEtBQUwsQ0FBV0MsS0FBWjtBQUQ5RCxPQUFkO0FBR0Q7OztXQUNELHVCQUFjO0FBQ1osYUFBTyxZQUFQO0FBQ0Q7Ozs7RUF6SnVCbUMsK0M7O0FBNEpYdkMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci4yZGM0YTVkYWU4NTZhMjc4ZWM1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yJ1xyXG5pbXBvcnQgJy4vQ29kZVNhbmRib3guc2NzcydcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnXHJcbmltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnXHJcblxyXG5jbGFzcyBDb2RlU2FuZGJveCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgYXV0b0JpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnLCBvdXRwdXQ6IG51bGwgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICdzYW5kYm94JyArICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgfT5cclxuICAgICAgICB7dHlwZW9mIHRoaXMuc3RhdGUuc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4gICAgICAgICAgICBZb3VyIFNoYXJpbmcgVVJMOlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXt0aGlzLnN0YXRlLnNoYXJlVVJMfT5cclxuICAgICAgICAgICAgICBSaWdodCBDbGljayBhbmQgQ29weSBUaGlzIExpbmtcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSdW5cIiBjbGFzc05hbWU9XCJpY29uIHBsYXlcIiBvbkNsaWNrPXt0aGlzLnJ1bn0+XHJcbiAgICAgICAgICAgICAg4pa2XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPGgyPkphdmFTY3JpcHQge3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnVGVybWluYWwnIDogJ0V2YWx1YXRvcid9PC9oMj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gJyAoUmVhZCBPbmx5KScgOiBudWxsfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSZXNldFwiIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIiBvbkNsaWNrPXt0aGlzLnJlc2V0fT5cclxuICAgICAgICAgICAgICDinYxcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaGFyaW5nID09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlNoYXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiIG9uQ2xpY2s9e3RoaXMuc2hhcmV9PlxyXG4gICAgICAgICAgICAgICAg4piB77iPXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSguLi5hcmdzKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0aGlzLmdldE91dHB1dCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgZ2V0T3V0cHV0KHNraXBBdXRvUnVuID0gZmFsc2UpIHtcclxuICAgIGxldCBvdXRwdXQgPSBudWxsXHJcbiAgICBpZiAoc2tpcEF1dG9SdW4gIT09IHRydWUgJiYgdGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSkge1xyXG4gICAgICBvdXRwdXQgPVxyXG4gICAgICAgIHRoaXMuc3RhdGUub3V0cHV0ICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXRcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+UnVuIHRoZSBwcm9ncmFtIHRvIHNlZSB5b3VyIG91dHB1dDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgb3V0cHV0ID1cclxuICAgICAgICB0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlXHJcbiAgICAgICAgICA/IHRoaXMuZ2V0Q29uc29sZU91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgICAgOiB0aGlzLmdldEV2YWxPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG91dHB1dCA9IDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9XHJcbiAgZ2V0Q29uc29sZU91dHB1dChzb3VyY2UpIHtcclxuICAgIGNvbnN0IG9sZExvZyA9IGNvbnNvbGUubG9nXHJcbiAgICBjb25zdCBsb2dPdXRwdXQgPSBbXVxyXG4gICAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJncylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2dPdXRwdXQucHVzaChhcmdzWzBdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBldmFsKHNvdXJjZSlcclxuICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgICAgaWYgKGxvZ091dHB1dC5sZW5ndGggPCAxKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5cclxuICAgICAgICAgICAgVHJ5IGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBjb25zb2xlIHRvIHNlZSBzb21lIG91dHB1dFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICB2YWx1ZT17bG9nT3V0cHV0Lm1hcCh2YWx1ZSA9PiBpbnNwZWN0KHZhbHVlKSkuam9pbignO1xcbicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEV2YWxPdXRwdXQoc291cmNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvdXRwdXQgPSBldmFsKHNvdXJjZSlcclxuICAgICAgbGV0IG91dHB1dFNvdXJjZSA9IGluc3BlY3Qob3V0cHV0KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCd4Jywgb3V0cHV0U291cmNlKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIHZhbHVlPXtvdXRwdXRTb3VyY2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKG91dHB1dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBvdXRwdXQgfSlcclxuICB9XHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJycgfSlcclxuICB9XHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG91dHB1dDogdGhpcy5nZXRPdXRwdXQodHJ1ZSkgfSlcclxuICB9XHJcbiAgc2hhcmUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hhcmVVUkw6ICdodHRwczovL3lvdXJmaXJzdHJwZy5jb20vcnBnL2VkaXRvcj9jb2RlPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGdldFNoYXJlVVJMKCkge1xyXG4gICAgcmV0dXJuICdnb29nbGUuY29tJ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZVNhbmRib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==