(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_YTVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4090);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5007);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Dictionary_RPG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4149);
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(307);
/* harmony import */ var next_multilingual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_multilingual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4538);
/* harmony import */ var next_multilingual_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_multilingual_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var next_multilingual_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_multilingual_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
const _messages = {
  "babelified": true,
  "keyValueObjectCollection": {
    "en-us": {
      "siteTitle": "Your First RPG",
      "siteDescriptionPartOne": "In this course I will explain the basics of coding in JavaScript. You will make your own text based ",
      "siteDescriptionPartTwo": "game that you can share with your friends 😃 I hope that I can make learning to code simple for you.",
      "resourceDescription": "Remember to check out the resource section if you get stuck",
      "enticement": "Scared of Coding? Don't be!",
      "talkDescription": "Check out this inspiring talk by Linda Liukas",
      "sectionOne": "👀 Visualizing Logic Models",
      "sectionTwo": "👐 Toying with Logic Models",
      "sectionThree": "💻 Learning to Code",
      "sectionFour": "🎮 Building an RPG"
    },
    "es-mx": {
      "siteTitle": "Tu Primer Juego RPG",
      "siteDescriptionPartOne": "En este curso explicaré los conceptos básicos de la codificación en JavaScript. Harás tu propio juego ",
      "siteDescriptionPartTwo": "basado en texto que podrás compartir con tus amigos 😃 Espero poder hacer que aprender a codificar sea simple para ti.",
      "resourceDescription": "Recuerde consultar la sección de recursos si se queda atascado",
      "enticement": "¿Miedo a la codificación? ¡No lo seas!",
      "talkDescription": "Echa un vistazo a esta inspiradora charla de Linda Liukas",
      "sectionOne": "👀 Visualización de modelos lógicos",
      "sectionTwo": "👐 Jugando con modelos lógicos",
      "sectionThree": "💻 Aprendiendo a codificar",
      "sectionFour": "🎮 Construyendo un juego RPG"
    }
  },
  "sourceFilePath": "pages/index.js"
};






const _useMessagesFunction = next_multilingual_messages__WEBPACK_IMPORTED_MODULE_3__.useMessages.bind(_messages);





async function getServerSideProps(nextPageContext) {
  const {
    req,
    locale,
    locales,
    defaultLocale
  } = nextPageContext;
  const actualLocales = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_2__.getActualLocales)(locales, defaultLocale);
  const actualDefaultLocale = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_2__.getActualDefaultLocale)(locales, defaultLocale);
  const cookieLocale = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_2__.getCookieLocale)(nextPageContext, actualLocales);
  let resolvedLocale = (0,next_multilingual__WEBPACK_IMPORTED_MODULE_2__.getActualLocale)(locale, defaultLocale, locales);

  if (locale === defaultLocale) {
    resolvedLocale = cookieLocale ? cookieLocale : (0,next_multilingual__WEBPACK_IMPORTED_MODULE_2__.getPreferredLocale)(req.headers['accept-language'], actualLocales, actualDefaultLocale).toLowerCase();
  }

  return {
    props: {
      resolvedLocale
    }
  };
}

const Home = ({
  resolvedLocale
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Overwrite the locale with the resolved locale.

  router.locale = resolvedLocale;
  (0,next_multilingual__WEBPACK_IMPORTED_MODULE_2__.setCookieLocale)(router.locale); // Load the messages in the correct locale.

  const messages = _useMessagesFunction();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().home),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
      className: "title",
      children: messages.format('siteTitle')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
      children: [messages.format('siteDescriptionPartOne'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Dictionary_RPG__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), " ", messages.format('siteDescriptionPartTwo')]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
      children: "Sections"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ol", {
      className: "toc sections",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_multilingual_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/vision",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            children: messages.format('sectionOne')
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_multilingual_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/toying",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            children: messages.format('sectionTwo')
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_multilingual_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/coding",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            children: messages.format('sectionThree')
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_multilingual_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/rpg",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
            children: messages.format('sectionFour')
          })
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_multilingual_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: "/resources",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        children: messages.format('resourceDescription')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().extra),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().enticement),
        children: messages.format('enticement')
      }), messages.format('talkDescription'), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_YTVideo__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
        url: "-jRREn6ifEQ",
        thumbnail: "/images/poetry-of-programming.jpg"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 5007:
/***/ ((module) => {

// Exports
module.exports = {
	"home": "styles_home__dTjcX",
	"extra": "styles_extra__UaIQ3"
};


/***/ }),

/***/ 307:
/***/ ((module) => {

"use strict";
module.exports = require("next-multilingual");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next-multilingual/link");

/***/ }),

/***/ 4538:
/***/ ((module) => {

"use strict";
module.exports = require("next-multilingual/messages");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [120,90,149], () => (__webpack_exec__(2748)));
module.exports = __webpack_exports__;

})();