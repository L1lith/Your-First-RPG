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
      }, "Your Sharing URL:", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }), __jsx("a", {
        url: this.state.shareURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, this.state.shareURL)) : null, __jsx("h2", {
        className: "main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, this.props.disableAutoRun === true ? __jsx("span", {
        title: "Run",
        className: "icon play",
        onClick: this.run,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, "\u25B6") : null, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, "JavaScript ", this.props.consoleMode === true ? 'Terminal' : 'Evaluator'), this.props.readOnly === true ? ' (Read Only)' : null, this.props.noReset !== true ? __jsx("span", {
        title: "Reset",
        className: "icon reset",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, "\u274C") : null, this.props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, __jsx("span", {
        title: "Share",
        className: "icon share",
        onClick: this.share,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }
      }, "\u2601\uFE0F")) : null), __jsx("div", {
        className: "titles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "Code Input"), __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, this.props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
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
          lineNumber: 53,
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
            lineNumber: 76,
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
            lineNumber: 84,
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
            lineNumber: 103,
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
            lineNumber: 108,
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
            lineNumber: 120,
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
            lineNumber: 129,
            columnNumber: 9
          }
        });
      } catch (err) {
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwiYXV0b0JpbmQiLCJzdGF0ZSIsInZhbHVlIiwib3V0cHV0IiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWUiLCJzaGFyZVVSTCIsImRpc2FibGVBdXRvUnVuIiwicnVuIiwiY29uc29sZU1vZGUiLCJyZWFkT25seSIsIm5vUmVzZXQiLCJyZXNldCIsInNoYXJpbmciLCJzaGFyZSIsImhhbmRsZUNoYW5nZSIsImdldE91dHB1dCIsInNraXBBdXRvUnVuIiwidHJpbSIsImxlbmd0aCIsImdldENvbnNvbGVPdXRwdXQiLCJnZXRFdmFsT3V0cHV0Iiwic291cmNlIiwib2xkTG9nIiwiY29uc29sZSIsImxvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIiwic2V0U3RhdGUiLCJzaGFyZVBvcHVwIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBQyxxREFBUSxDQUFDLHdHQUFUO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLFdBQUssRUFBRSxNQUFLSCxLQUFMLENBQVdHLEtBQVgsSUFBb0IsRUFBN0I7QUFBaUNDLFlBQU0sRUFBRTtBQUF6QyxLQUFiO0FBSGlCO0FBSWxCOzs7O1dBQ0Qsa0JBQVM7QUFBQTs7QUFDUCxhQUNFO0FBQ0UsaUJBQVMsRUFDUCxhQUFhLEtBQUtKLEtBQUwsQ0FBV0ssY0FBWCxDQUEwQixXQUExQixJQUF5QyxNQUFNLEtBQUtMLEtBQUwsQ0FBV00sU0FBMUQsR0FB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WjtBQUVFLGVBQUssRUFBQyxLQUZSO0FBR0UsZ0JBQU0sRUFBQyxNQUhUO0FBSUUsY0FBSSxFQUFDLFlBSlA7QUFLRSxlQUFLLEVBQUMsVUFMUjtBQU1FLGtCQUFRLE1BTlY7QUFPRSxlQUFLLEVBQUUrQixZQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdELE9BZkQsQ0FlRSxPQUFPRCxHQUFQLEVBQVk7QUFDWixlQUFPO0FBQU0sbUJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdDRixvREFBTyxDQUFDRSxHQUFELENBQXZDLENBQVA7QUFDRDtBQUNGOzs7V0FDRCxzQkFBYTlCLE1BQWIsRUFBcUI7QUFDbkIsV0FBS2dDLFFBQUwsQ0FBYztBQUFFakMsYUFBSyxFQUFFQztBQUFULE9BQWQ7QUFDRDs7O1dBQ0QsaUJBQVE7QUFDTixXQUFLZ0MsUUFBTCxDQUFjO0FBQUVqQyxhQUFLLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxLQUFYLElBQW9CO0FBQTdCLE9BQWQ7QUFDRDs7O1dBQ0QsZUFBTTtBQUNKLFdBQUtpQyxRQUFMLENBQWM7QUFBRWhDLGNBQU0sRUFBRSxLQUFLYSxTQUFMLENBQWUsSUFBZjtBQUFWLE9BQWQ7QUFDRDs7O1dBQ0QsaUJBQVE7QUFDTixXQUFLbUIsUUFBTCxDQUFjO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUFkO0FBQ0Q7OztXQUNELHVCQUFjO0FBQ1osYUFBTyxZQUFQO0FBQ0Q7Ozs7RUF0SnVCQywrQzs7QUF5Slh2QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ycGcvZWRpdG9yLjU1YzQ4ZDMzODk3OTM3NmYxYTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY2VFZGl0b3IgZnJvbSAnLi9BY2VFZGl0b3InXHJcbmltcG9ydCAnLi9Db2RlU2FuZGJveC5zY3NzJ1xyXG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSAndXRpbCdcclxuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ2F1dG8tYmluZCdcclxuXHJcbmNsYXNzIENvZGVTYW5kYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBhdXRvQmluZCh0aGlzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJycsIG91dHB1dDogbnVsbCB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgJ3NhbmRib3gnICsgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NsYXNzTmFtZScpID8gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICB9PlxyXG4gICAgICAgIHt0eXBlb2YgdGhpcy5zdGF0ZS5zaGFyZVVSTCA9PSAnc3RyaW5nJyA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXJlLXBvcHVwXCI+XHJcbiAgICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YSB1cmw9e3RoaXMuc3RhdGUuc2hhcmVVUkx9Pnt0aGlzLnN0YXRlLnNoYXJlVVJMfTwvYT5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUnVuXCIgY2xhc3NOYW1lPVwiaWNvbiBwbGF5XCIgb25DbGljaz17dGhpcy5ydW59PlxyXG4gICAgICAgICAgICAgIOKWtlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDxoMj5KYXZhU2NyaXB0IHt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ1Rlcm1pbmFsJyA6ICdFdmFsdWF0b3InfTwvaDI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLm5vUmVzZXQgIT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUmVzZXRcIiBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCIgb25DbGljaz17dGhpcy5yZXNldH0+XHJcbiAgICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2hhcmluZyA9PSB0cnVlID8gKFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJTaGFyZVwiIGNsYXNzTmFtZT1cImljb24gc2hhcmVcIiBvbkNsaWNrPXt0aGlzLnNoYXJlfT5cclxuICAgICAgICAgICAgICAgIOKYge+4j1xyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ0NvbnNvbGUnIDogJ091dHB1dCd9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoLi4uYXJncylcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGhpcy5nZXRPdXRwdXQoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIGdldE91dHB1dChza2lwQXV0b1J1biA9IGZhbHNlKSB7XHJcbiAgICBsZXQgb3V0cHV0ID0gbnVsbFxyXG4gICAgaWYgKHNraXBBdXRvUnVuICE9PSB0cnVlICYmIHRoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUpIHtcclxuICAgICAgb3V0cHV0ID1cclxuICAgICAgICB0aGlzLnN0YXRlLm91dHB1dCAhPT0gbnVsbCA/IChcclxuICAgICAgICAgIHRoaXMuc3RhdGUub3V0cHV0XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlJ1biB0aGUgcHJvZ3JhbSB0byBzZWUgeW91ciBvdXRwdXQ8L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG91dHB1dCA9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyB0aGlzLmdldENvbnNvbGVPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgICAgICAgIDogdGhpcy5nZXRFdmFsT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvdXRwdXQgPSA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5UeXBlIHNvbWV0aGluZyB0byBzZWUgdGhlIGV2YWx1YXRlZCBvdXRwdXQ8L3NwYW4+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0XHJcbiAgfVxyXG4gIGdldENvbnNvbGVPdXRwdXQoc291cmNlKSB7XHJcbiAgICBjb25zdCBvbGRMb2cgPSBjb25zb2xlLmxvZ1xyXG4gICAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJnc1swXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgZXZhbChzb3VyY2UpXHJcbiAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+XHJcbiAgICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgdmFsdWU9e2xvZ091dHB1dC5tYXAodmFsdWUgPT4gaW5zcGVjdCh2YWx1ZSkpLmpvaW4oJztcXG4nKX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gICAgfVxyXG4gIH1cclxuICBnZXRFdmFsT3V0cHV0KHNvdXJjZSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgb3V0cHV0ID0gZXZhbChzb3VyY2UpXHJcbiAgICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuICAgICAgLy9jb25zb2xlLmxvZygneCcsIG91dHB1dFNvdXJjZSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShvdXRwdXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogb3V0cHV0IH0pXHJcbiAgfVxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnIH0pXHJcbiAgfVxyXG4gIHJ1bigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvdXRwdXQ6IHRoaXMuZ2V0T3V0cHV0KHRydWUpIH0pXHJcbiAgfVxyXG4gIHNoYXJlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXJlUG9wdXA6IHRydWUgfSlcclxuICB9XHJcbiAgZ2V0U2hhcmVVUkwoKSB7XHJcbiAgICByZXR1cm4gJ2dvb2dsZS5jb20nXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlU2FuZGJveFxyXG4iXSwic291cmNlUm9vdCI6IiJ9