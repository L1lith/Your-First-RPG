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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AceEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AceEditor */ "./components/AceEditor.js");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CodeSandbox.scss */ "./components/CodeSandbox.scss");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\components\\CodeSandbox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var CodeSandbox = /*#__PURE__*/function (_Component) {
  var _s = $RefreshSig$();

  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CodeSandbox, _Component);

  var _super = _createSuper(CodeSandbox);

  function CodeSandbox(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeSandbox);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeSandbox, [{
    key: "render",
    value: _s(function render() {
      var _this = this;

      _s();

      var value;

      if (this.state.hasOwnProperty('value')) {
        value = this.state.value;
      } else if (typeof this.props.codeQueryParam == 'string') {
        var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

        if (router.query.hasOwnProperty(this.props.codeQueryParam)) {
          value = router.query[this.props.codeQueryParam];
        }
      } else {
        value = this.props.value || '';
      }

      return __jsx("div", {
        className: 'sandbox' + (this.props.hasOwnProperty('className') ? ' ' + this.props.className : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, typeof this.state.shareURL == 'string' ? __jsx("span", {
        className: "share-popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, "Your Sharing URL:", __jsx("a", {
        className: "url",
        href: this.state.shareURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, "Right Click and Copy This Link"), __jsx("span", {
        className: "icon close",
        onClick: this.closeSharing,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, "\u274C")) : null, __jsx("h2", {
        className: "main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, this.props.disableAutoRun === true ? __jsx("span", {
        title: "Run",
        className: "icon play",
        onClick: this.run,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, "\u25B6") : null, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, "JavaScript ", this.props.consoleMode === true ? 'Terminal' : 'Evaluator'), this.props.readOnly === true ? ' (Read Only)' : null, this.props.noReset !== true ? __jsx("span", {
        title: "Reset",
        className: "icon reset",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, "\u274C") : null, this.props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, __jsx("span", {
        title: "Share",
        className: "icon share",
        onClick: this.share,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }, "\u2601\uFE0F")) : null), __jsx("div", {
        className: "titles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, "Code Input"), __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }, this.props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }, __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: "50%",
        height: "100%",
        mode: "javascript",
        theme: "ambiance",
        readOnly: this.props.readOnly === true,
        value: this.state.value,
        onChange: function onChange() {
          _this.handleChange.apply(_this, arguments);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }), this.getOutput()));
    }, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
      return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"]];
    })
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
            lineNumber: 90,
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
            lineNumber: 98,
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
            lineNumber: 117,
            columnNumber: 11
          }
        }, "Try logging something to the console to see some output");
        return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "output valid",
          width: "50%",
          height: "100%",
          mode: "javascript",
          theme: "ambiance",
          readOnly: true,
          value: logOutput.map(function (value) {
            return Object(util__WEBPACK_IMPORTED_MODULE_8__["inspect"])(value);
          }).join(';\n'),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
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
            lineNumber: 134,
            columnNumber: 14
          }
        }, Object(util__WEBPACK_IMPORTED_MODULE_8__["inspect"])(err));
      }
    }
  }, {
    key: "getEvalOutput",
    value: function getEvalOutput(source) {
      try {
        var output = eval(source);
        var outputSource = Object(util__WEBPACK_IMPORTED_MODULE_8__["inspect"])(output); //console.log('x', outputSource)

        return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
            lineNumber: 143,
            columnNumber: 9
          }
        });
      } catch (err) {
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 14
          }
        }, Object(util__WEBPACK_IMPORTED_MODULE_8__["inspect"])(err));
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
    key: "closeSharing",
    value: function closeSharing() {
      this.setState({
        shareURL: null
      });
    }
  }]);

  return CodeSandbox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidmFsdWUiLCJzdGF0ZSIsImhhc093blByb3BlcnR5IiwiY29kZVF1ZXJ5UGFyYW0iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImNsYXNzTmFtZSIsInNoYXJlVVJMIiwiY2xvc2VTaGFyaW5nIiwiZGlzYWJsZUF1dG9SdW4iLCJydW4iLCJjb25zb2xlTW9kZSIsInJlYWRPbmx5Iiwibm9SZXNldCIsInJlc2V0Iiwic2hhcmluZyIsInNoYXJlIiwiaGFuZGxlQ2hhbmdlIiwiZ2V0T3V0cHV0Iiwic2tpcEF1dG9SdW4iLCJvdXRwdXQiLCJ0cmltIiwibGVuZ3RoIiwiZ2V0Q29uc29sZU91dHB1dCIsImdldEV2YWxPdXRwdXQiLCJzb3VyY2UiLCJvbGRMb2ciLCJjb25zb2xlIiwibG9nIiwibG9nT3V0cHV0IiwiYXJncyIsInB1c2giLCJldmFsIiwibWFwIiwiaW5zcGVjdCIsImpvaW4iLCJlcnIiLCJvdXRwdXRTb3VyY2UiLCJzZXRTdGF0ZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1hBLEtBRFc7QUFFbEI7Ozs7Y0FDRCxrQkFBUztBQUFBOztBQUFBOztBQUNQLFVBQUlDLEtBQUo7O0FBQ0EsVUFBSSxLQUFLQyxLQUFMLENBQVdDLGNBQVgsQ0FBMEIsT0FBMUIsQ0FBSixFQUF3QztBQUN0Q0YsYUFBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0QsS0FBbkI7QUFDRCxPQUZELE1BRU8sSUFBSSxPQUFPLEtBQUtELEtBQUwsQ0FBV0ksY0FBbEIsSUFBb0Ms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QW9CO0FBQTdCLE9BQWQ7QUFDRDs7O1dBQ0QsZUFBTTtBQUNKLFdBQUt1QyxRQUFMLENBQWM7QUFBRWxCLGNBQU0sRUFBRSxLQUFLRixTQUFMLENBQWUsSUFBZjtBQUFWLE9BQWQ7QUFDRDs7O1dBQ0QsaUJBQVE7QUFDTixXQUFLb0IsUUFBTCxDQUFjO0FBQ1ovQixnQkFBUSxFQUFFLDhDQUE4Q2dDLGtCQUFrQixDQUFDLEtBQUt2QyxLQUFMLENBQVdELEtBQVo7QUFEOUQsT0FBZDtBQUdEOzs7V0FDRCx3QkFBZTtBQUNiLFdBQUt1QyxRQUFMLENBQWM7QUFBRS9CLGdCQUFRLEVBQUU7QUFBWixPQUFkO0FBQ0Q7Ozs7RUFyS3VCaUMsK0M7O0FBd0tYM0MsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci5hOTQ3YjEwZTdhZjEzNGVkNTQ5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yJ1xyXG5pbXBvcnQgJy4vQ29kZVNhbmRib3guc2NzcydcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnXHJcbmltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY2xhc3MgQ29kZVNhbmRib3ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHZhbHVlXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWVcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMuY29kZVF1ZXJ5UGFyYW0gPT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgICAgaWYgKHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eSh0aGlzLnByb3BzLmNvZGVRdWVyeVBhcmFtKSkge1xyXG4gICAgICAgIHZhbHVlID0gcm91dGVyLnF1ZXJ5W3RoaXMucHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAnc2FuZGJveCcgKyAodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgIH0+XHJcbiAgICAgICAge3R5cGVvZiB0aGlzLnN0YXRlLnNoYXJlVVJMID09ICdzdHJpbmcnID8gKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj5cclxuICAgICAgICAgICAgWW91ciBTaGFyaW5nIFVSTDpcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidXJsXCIgaHJlZj17dGhpcy5zdGF0ZS5zaGFyZVVSTH0+XHJcbiAgICAgICAgICAgICAgUmlnaHQgQ2xpY2sgYW5kIENvcHkgVGhpcyBMaW5rXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBjbG9zZVwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VTaGFyaW5nfT5cclxuICAgICAgICAgICAgICDinYxcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSdW5cIiBjbGFzc05hbWU9XCJpY29uIHBsYXlcIiBvbkNsaWNrPXt0aGlzLnJ1bn0+XHJcbiAgICAgICAgICAgICAg4pa2XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPGgyPkphdmFTY3JpcHQge3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnVGVybWluYWwnIDogJ0V2YWx1YXRvcid9PC9oMj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlID8gJyAoUmVhZCBPbmx5KScgOiBudWxsfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJSZXNldFwiIGNsYXNzTmFtZT1cImljb24gcmVzZXRcIiBvbkNsaWNrPXt0aGlzLnJlc2V0fT5cclxuICAgICAgICAgICAgICDinYxcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaGFyaW5nID09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlNoYXJlXCIgY2xhc3NOYW1lPVwiaWNvbiBzaGFyZVwiIG9uQ2xpY2s9e3RoaXMuc2hhcmV9PlxyXG4gICAgICAgICAgICAgICAg4piB77iPXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvZGUgSW5wdXQ8L2gyPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cclxuICAgICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSguLi5hcmdzKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHt0aGlzLmdldE91dHB1dCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgZ2V0T3V0cHV0KHNraXBBdXRvUnVuID0gZmFsc2UpIHtcclxuICAgIGxldCBvdXRwdXQgPSBudWxsXHJcbiAgICBpZiAoc2tpcEF1dG9SdW4gIT09IHRydWUgJiYgdGhpcy5wcm9wcy5kaXNhYmxlQXV0b1J1biA9PT0gdHJ1ZSkge1xyXG4gICAgICBvdXRwdXQgPVxyXG4gICAgICAgIHRoaXMuc3RhdGUub3V0cHV0ICE9PSBudWxsID8gKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXRcclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+UnVuIHRoZSBwcm9ncmFtIHRvIHNlZSB5b3VyIG91dHB1dDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgb3V0cHV0ID1cclxuICAgICAgICB0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlXHJcbiAgICAgICAgICA/IHRoaXMuZ2V0Q29uc29sZU91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgICAgICAgOiB0aGlzLmdldEV2YWxPdXRwdXQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG91dHB1dCA9IDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRcclxuICB9XHJcbiAgZ2V0Q29uc29sZU91dHB1dChzb3VyY2UpIHtcclxuICAgIGNvbnN0IG9sZExvZyA9IGNvbnNvbGUubG9nXHJcbiAgICBjb25zdCBsb2dPdXRwdXQgPSBbXVxyXG4gICAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJncylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsb2dPdXRwdXQucHVzaChhcmdzWzBdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBldmFsKHNvdXJjZSlcclxuICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgICAgaWYgKGxvZ091dHB1dC5sZW5ndGggPCAxKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5cclxuICAgICAgICAgICAgVHJ5IGxvZ2dpbmcgc29tZXRoaW5nIHRvIHRoZSBjb25zb2xlIHRvIHNlZSBzb21lIG91dHB1dFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICB2YWx1ZT17bG9nT3V0cHV0Lm1hcCh2YWx1ZSA9PiBpbnNwZWN0KHZhbHVlKSkuam9pbignO1xcbicpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEV2YWxPdXRwdXQoc291cmNlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvdXRwdXQgPSBldmFsKHNvdXJjZSlcclxuICAgICAgbGV0IG91dHB1dFNvdXJjZSA9IGluc3BlY3Qob3V0cHV0KVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCd4Jywgb3V0cHV0U291cmNlKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIHZhbHVlPXtvdXRwdXRTb3VyY2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKG91dHB1dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBvdXRwdXQgfSlcclxuICB9XHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgJycgfSlcclxuICB9XHJcbiAgcnVuKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG91dHB1dDogdGhpcy5nZXRPdXRwdXQodHJ1ZSkgfSlcclxuICB9XHJcbiAgc2hhcmUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hhcmVVUkw6ICdodHRwczovL3lvdXJmaXJzdHJwZy5jb20vcnBnL2VkaXRvcj9jb2RlPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZS52YWx1ZSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNsb3NlU2hhcmluZygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFyZVVSTDogbnVsbCB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZVNhbmRib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==