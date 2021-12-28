exports.id = 841;
exports.ids = [841];
exports.modules = {

/***/ 1914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Editor = props => {
  if (false) {}

  return null;
};

class IsomorphicEditor extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      mounted: false
    });

    _defineProperty(this, "render", () => this.state.mounted ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Editor, _objectSpread({
      showGutter: this.props.showGutter !== true ? false : true
    }, this.props)) : null);
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IsomorphicEditor);

/***/ }),

/***/ 3841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AceEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1914);
/* harmony import */ var _styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1539);
/* harmony import */ var _styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6464);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dictionary_Output__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2010);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









function CodeSandbox(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    0: shareAutoPlay,
    1: setShareAutoPlay
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.hasOwnProperty('autoPlay') ? router.query.autoPlay : null);
  const autoPlayInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const queryCode = router.query.code;
  const autoPlayQuery = router.query.autoPlay;
  const {
    0: code,
    1: setCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : props.value || '');
  const shareURL = `${router.basePath}/rpg/editor?${props.codeQueryParam}=${encodeURIComponent(code)}${shareAutoPlay === true ? '&autoPlay=1' : ''}`;
  const vertical = !!props.vertical;
  const {
    0: output,
    1: setOutput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.disableAutoRun === true ? null : getOutput(code, props.consoleMode));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    f;
    if (!queryCode) return;
    setCode(queryCode);
  }, [queryCode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (shareAutoPlay !== null) return;
    if (!autoPlayQuery) return;
    setShareAutoPlay(autoPlayQuery === '1');
  }, [autoPlayQuery]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (autoPlayQuery === '1') {
      setOutput(getOutput(code, props.consoleMode));
    }
  }, [autoPlayQuery]); // let hasAutorun = false
  // useEffect(() => {
  //   if (shareAutoPlay === null || !code) return
  //   setOutput(getOutput(code, props.consoleMode))
  // }, [shareAutoPlay, code])

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (vertical === true ? (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().vertical) + ' ' : '') + (typeof props.className == 'string' ? props.className + ' ' : '') + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sandbox),
    children: [typeof shareURL == 'string' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["share-popup"]),
      children: ["Your Sharing URL:", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
        className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().url),
        href: shareURL,
        children: "Right Click and Copy This Link"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close),
        onClick: () => {
          setShareURL(null);
        },
        children: "\u274C"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().settings),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
          children: "Settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["auto-play"]),
          children: ["Autoplay", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
            ref: autoPlayInput,
            onChange: () => {
              setShareAutoPlay(!shareAutoPlay);
            },
            checked: shareAutoPlay,
            type: "checkbox"
          })]
        })]
      })]
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h2", {
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["main-title"]),
      children: [props.disableAutoRun === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        title: "Run",
        className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
        onClick: () => {
          setOutput(getOutput(code, props.consoleMode));
        },
        children: "\u25B6"
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode),
        children: props.consoleMode === true ? 'Terminal' : 'Expression Evaluator'
      }), props.readOnly === true ? ' (Read Only)' : null, props.noReset !== true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        title: "Reset",
        className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
        onClick: () => {
          setCode('');
        },
        children: "\u274C"
      }) : null, props.hasOwnProperty('codeQueryParam') == true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          title: "Share",
          className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
          children: "\u2601\uFE0F"
        })
      }) : null]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("noscript", {
      children: "Please Enable JavaScript"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (vertical ? (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().vertical) + ' ' : '') + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inner),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: 'section ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().section),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
          className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
          children: "Code Input"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          width: "50%",
          maxLines: Infinity,
          className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"]),
          mode: "javascript",
          theme: "ambiance",
          readOnly: props.readOnly === true,
          value: code,
          onChange: newCode => {
            setCode(newCode);

            if (props.disableAutoRun !== true) {
              setOutput(getOutput(newCode, props.consoleMode));
            }
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: 'section ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().section),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h2", {
          className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mode),
          children: props.consoleMode === true ? 'Console' : 'Output'
        }), output === null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty),
          children: ["Run the program to see your ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_Dictionary_Output__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})]
        }) : output]
      })]
    })]
  });
}

function getOutput(code, consoleMode) {
  if (code.length > 0) {
    return consoleMode === true ? getConsoleOutput(code) : getEvalOutput(code);
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty),
      children: "Type something to see the evaluated output"
    });
  }
}

function getConsoleOutput(code) {
  const oldLog = console.log;
  const logOutput = [];

  console.log = (...args) => {
    if (args.length > 1) {
      logOutput.push(args);
    } else {
      logOutput.push(args[0]);
    }
  };

  try {
    eval(code);
    console.log = oldLog;
    if (logOutput.length < 1) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().empty),
      children: "Try logging something to the console to see some output"
    });
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      maxLines: Infinity,
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"]) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().valid),
      width: "50%",
      mode: "javascript",
      height: "auto",
      theme: "ambiance",
      readOnly: true,
      value: logOutput.map(value => (0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(value)).join(';\n')
    });
  } catch (err) {
    console.log = oldLog;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error),
      children: (0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)
    });
  }
}

function getEvalOutput(code) {
  try {
    const output = eval(code);
    let outputSource = (0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(output);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      maxLines: Infinity,
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["ace-editor"]) + ' output valid',
      width: "50%",
      mode: "javascript",
      theme: "ambiance",
      readOnly: true,
      value: outputSource
    });
  } catch (err) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      className: (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().output) + ' ' + (_styles_CodeSandbox_module_scss__WEBPACK_IMPORTED_MODULE_6___default().error),
      children: (0,util__WEBPACK_IMPORTED_MODULE_2__.inspect)(err)
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(CodeSandbox));

/***/ }),

/***/ 1539:
/***/ ((module) => {

// Exports
module.exports = {
	"sandbox": "CodeSandbox_sandbox__E39JH",
	"icon": "CodeSandbox_icon__HLMDd",
	"settings": "CodeSandbox_settings__2HwF3",
	"auto-play": "CodeSandbox_auto-play__cOXTC",
	"ace-editor": "CodeSandbox_ace-editor__sqNQk",
	"share-popup": "CodeSandbox_share-popup__9nNgC",
	"close": "CodeSandbox_close__D2aFo",
	"titles": "CodeSandbox_titles__gP1M_",
	"main-title": "CodeSandbox_main-title__o2QZU",
	"mode": "CodeSandbox_mode__pnoNv",
	"section": "CodeSandbox_section__3qnaM",
	"inner": "CodeSandbox_inner__WvT_G",
	"vertical": "CodeSandbox_vertical__Wercg",
	"output": "CodeSandbox_output__YhGR0",
	"error": "CodeSandbox_error__momvQ"
};


/***/ })

};
;