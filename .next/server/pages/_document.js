"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 5835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(307);
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_multilingual__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__["default"] {
  render() {
    var _props$pageProps;

    const {
      locale,
      locales,
      defaultLocale,
      props
    } = this.props.__NEXT_DATA__;
    const pagePropsActualLocale = props === null || props === void 0 ? void 0 : (_props$pageProps = props.pageProps) === null || _props$pageProps === void 0 ? void 0 : _props$pageProps.resolvedLocale;
    const actualLocale = pagePropsActualLocale ? pagePropsActualLocale : (0,next_multilingual__WEBPACK_IMPORTED_MODULE_1__.getActualLocale)(locale, defaultLocale, locales);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      lang: (0,next_multilingual__WEBPACK_IMPORTED_MODULE_1__.normalizeLocale)(actualLocale),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
          rel: "shortcut icon",
          href: "/images/icons/site-icon.svg"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          httpEquiv: "Content-Security-Policy",
          content: "default-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; frame-src youtube.com www.youtube.com; worker-src 'self';"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
          rel: "preload",
          href: "/fonts/droidSerifRegular.ttf",
          as: "font",
          type: "font/ttf"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "application-name",
          content: "Your First RPG"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
          rel: "manifest",
          href: "/manifest.json"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
          rel: "apple-touch-icon",
          href: "/images/icons/site-icon.svg"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "apple-mobile-web-app-capable",
          content: "yes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "apple-mobile-web-app-status-bar-style",
          content: "default"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "apple-mobile-web-app-title",
          content: "Your First RPG"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "description",
          content: "Learn to code by making a text RPG game"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "mobile-web-app-capable",
          content: "yes"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "msapplication-config",
          content: "none"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "msapplication-TileColor",
          content: "#ffffff"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "msapplication-tap-highlight",
          content: "no"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          name: "theme-color",
          content: "#ffffff"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          property: "og:type",
          content: "website"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          property: "og:title",
          content: "Your First RPG"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          property: "og:description",
          content: "Learn to code by making a text RPG game"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          property: "og:site_name",
          content: "Your First RPG"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          property: "og:url",
          content: "https://yourfirstrpg.com"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("meta", {
          property: "og:image",
          content: "https://yourfirstrpg.com/images/icons/site-icon.svg"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

/***/ }),

/***/ 307:
/***/ ((module) => {

module.exports = require("next-multilingual");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(5835)));
module.exports = __webpack_exports__;

})();