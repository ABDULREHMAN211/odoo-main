webpackHotUpdate("static\\development\\pages\\Mytestauto.js",{

/***/ "./components/Services/SpSerivces.module.css":
/*!***************************************************!*\
  !*** ./components/Services/SpSerivces.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SpSerivces.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Services/SpSerivces.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SpSerivces.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Services/SpSerivces.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./SpSerivces.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Services/SpSerivces.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Services/SpServices.js":
/*!*******************************************!*\
  !*** ./components/Services/SpServices.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/SpSerivces.module.css */ "./components/Services/SpSerivces.module.css");
/* harmony import */ var _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Hafiz Abdul Rehman\\Desktop\\odoo-main\\components\\Services\\SpServices.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SpServices() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bgcolor, " position-relative"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }, __jsx("img", {
    src: "/fmalefolowbck.png",
    alt: "Picture of the author",
    height: "422",
    width: "422",
    style: {
      top: "850px",
      left: "25px"
    },
    className: "position-absolute translate-middle ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.overflowresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "m-auto col-lg-9 col-sm-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headfirst, " ").concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ten, "  pt-5 m-auto fw-bold text-center mb-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: " m-0 p-0 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ultimatecolor),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Ultimate"), " Place to Buy Instagram Female Followers"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardrespon, " row justify-content-center mt-3"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsizes, " col-sm-2 bg-white rounded text-center position-relative p-0 m-3 my-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/cardfemale.png",
    width: 58,
    height: 58,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), __jsx("h6", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtone, " my-3 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "50 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 20
    }
  }), " Female Followers"), __jsx("hr", {
    className: "mx-4 pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "my-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprttwo, " text-start mx-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "my-2 ms-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), "50 Per Day"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), "Start Time: 0-9 hours"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), "Sustainable Services")), __jsx("div", {
    className: "bg-black mb-5 mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "py-1 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtthi),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, "\xA3 8"))), __jsx("div", {
    className: "position-absolute top-100 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtfou, " btn btn-primary btn-sm rounded-pill"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Buy"))), __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsizes, " col-sm-2 bg-white rounded text-center position-relative p-0 m-3 my-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/cardfemale.png",
    width: 58,
    height: 58,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }), __jsx("h6", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtone, " my-3 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "50 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 20
    }
  }), " Female Followers"), __jsx("hr", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "my-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprttwo, " text-start mx-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }), "50 Per Day"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }), "Start Time: 0-9 hours"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }), "Sustainable Services")), __jsx("div", {
    className: "bg-black mb-5 mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "py-1 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtthi),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }, "\xA3 15"))), __jsx("div", {
    className: "position-absolute top-100 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtfou, " btn btn-primary btn-sm rounded-pill"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "Buy"))), __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsizes, " col-sm-2 bg-white rounded text-center position-relative p-0 m-3 my-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/cardfemale.png",
    width: 58,
    height: 58,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }), __jsx("h6", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtone, " my-3 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "50 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 20
    }
  }), " Female Followers"), __jsx("hr", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "my-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprttwo, " text-start mx-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }), "50 Per Day"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }), "Start Time: 0-9 hours"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }), "Sustainable Services")), __jsx("div", {
    className: "bg-black mb-5 mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "py-1 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtthi),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, "\xA3 35"))), __jsx("div", {
    className: "position-absolute top-100 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtfou, " btn btn-primary btn-sm rounded-pill"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, "Buy"))), __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsizes, " col-sm-2 bg-white rounded text-center position-relative p-0 m-3 my-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/cardfemale.png",
    width: 58,
    height: 58,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }), __jsx("h6", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtone, " my-3 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, "50 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 20
    }
  }), " Female Followers"), __jsx("hr", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "my-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprttwo, " text-start mx-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }), "50 Per Day"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }), "Start Time: 0-9 hours"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }), "Sustainable Services")), __jsx("div", {
    className: "bg-black mb-5 mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "py-1 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtthi),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 19
    }
  }, "\xA3 67"))), __jsx("div", {
    className: "position-absolute top-100 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtfou, " btn btn-primary btn-sm rounded-pill"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, "Buy"))), __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardsizes, " col-sm-2 bg-white rounded text-center position-relative p-0 m-3 my-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/cardfemale.png",
    width: 58,
    height: 58,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }), __jsx("h6", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtone, " my-3 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }, "50 ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 20
    }
  }), " Female Followers"), __jsx("hr", {
    className: "mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "my-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprttwo, " text-start mx-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 21
    }
  }), "50 Per Day"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  }), "Start Time: 0-9 hours"), __jsx("p", {
    className: "my-2 ms-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-arrow-right me-3",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 21
    }
  }), "Sustainable Services")), __jsx("div", {
    className: "bg-black mb-5 mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "py-1 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtthi),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 19
    }
  }, "\xA3 110"))), __jsx("div", {
    className: "position-absolute top-100 start-50 translate-middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardprtfou, " btn btn-primary btn-sm rounded-pill"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }, "Buy"))))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: " d-flex position-absolute top-100 start-50 translate-middle",
    style: {
      paddingInlineEnd: ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 9
    }
  }, __jsx("hr", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dividrrespns, " col border-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/Rectangle 191.png",
    width: 42,
    height: 45,
    alt: "Picture of the author",
    style: {
      marginInline: "37px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 11
    }
  }), __jsx("hr", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dividrrespns, " col border-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }))), __jsx("div", {
    style: {
      backgroundColor: "#FBFBFB"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "pt-5 mb-0 pb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4 col-sm-4 m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/femaleone.png",
    width: 325,
    height: 171,
    alt: "Picture of the author",
    className: "ms-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-4 col-sm-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 15
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.grpcenone, " fw-bold text-primary  ms-3"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, "We Are Provding"), __jsx("div", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.grpcentwo, " fw-bold m-0 mt-1 "),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, "Dozen's Of Instagram"), __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.grpcentwobtm, " fw-bold text-center m-0 me-3"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 19
    }
  }, "Premium Services"))), __jsx("div", {
    className: "col-lg-4 col-sm-4 m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "my-1",
    src: "/femaletwo.png",
    width: 325,
    height: 171,
    alt: "Picture of the author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 17
    }
  }))))), __jsx("div", {
    className: "col-lg-7 col-sm-12 m-auto mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.eleven, " mt-4 gap-1"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "pb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paraque, "  fw-bold m-0 mb-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }, "Why you should buy female followers from Real IG Growth?"), __jsx("p", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paracolorcen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 15
    }
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")), __jsx("div", {
    className: "row\r ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " col-lg-8 col-sm-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paraqone, "  fw-bold m-0 mb-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 17
    }
  }, "Why you should buy female followers from Real IG Growth?"), __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paracolorcen, " m-0 pb-2"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 17
    }
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-lg-3 col-sm-4 ms-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/femalefolowside.png",
    width: 305,
    height: 278,
    alt: "Picture of the author",
    className: "ms-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselbg, " py-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouelhead, " fw-bold text-center"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 9
    }
  }, "What ", __jsx("span", {
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 16
    }
  }, "Real IG Growth "), "Offers:"), __jsx("div", {
    id: "carouselExample",
    className: "carousel slide  px-4 container col-lg-9 col-sm-12 mb-3 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carouselresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 9
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "carousel-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "carousel-item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4 bg-white col-sm position-relative rounded-2 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/crouselfemletwo.png",
    width: 70,
    height: 70,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle  ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemimg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemdivresp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 19
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselitemhead, " mb-1 m-0  mt-1 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 21
    }
  }, "Instant Delivery"), __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselpara, " m-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 21
    }
  }, "Followers Cart provides instant deliveries. However, the size of the package is the main reason for the delay. Yes, with us you will get delivery of the package within 2 to"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselbtn, " btn p-0 text-primary mt-2 mb-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 21
    }
  }, "Read More", __jsx("i", {
    className: "fa fa-arrow-right mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 23
    }
  })))), __jsx("div", {
    className: "col-lg-4 bg-white col-sm position-relative rounded-2 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/crediblefemale.png",
    width: 70,
    height: 70,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle  ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemimg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemdivresp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 19
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselitemhead, " mb-1 m-0  mt-1 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 21
    }
  }, "Credibility and Trust"), __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselpara, " m-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 21
    }
  }, "Since we are veterans and working professionals without any issues for years. We are trustworthy as well as loyal to the clients. That is the reason why most people like to"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselbtn, " btn p-0 text-primary mt-2 mb-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 21
    }
  }, "Read More", __jsx("i", {
    className: "fa fa-arrow-right mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 23
    }
  })))), __jsx("div", {
    className: "col-lg-4 bg-white col-sm position-relative rounded-2 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/crouselfemale.png",
    width: 70,
    height: 70,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle  ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemimg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemdivresp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 19
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselitemhead, " mb-1 m-0  mt-1 fw-bold"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 21
    }
  }, "24/7 Live Support"), __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselpara, " m-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 21
    }
  }, "We don't provide or endorse fake followers. Let it be for English followers or other types; we pledge to give the best Instagram followers. These followers are real"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.crouselbtn, " btn p-0 text-primary mt-2 mb-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 21
    }
  }, "Read More", __jsx("i", {
    className: "fa fa-arrow-right mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 23
    }
  })))))), __jsx("div", {
    "class": "carousel-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex gap-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-4 bg-white col-sm position-relative rounded-2 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/crouselfemletwo.png",
    width: 70,
    height: 70,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle  ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemimg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemdivresp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 19
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 21
    }
  }), __jsx("h6", {
    className: "mb-2  mt-1 fw-bold",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 21
    }
  }, "Instant Delivery"), __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paracolorcen, " m-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 21
    }
  }, "Followers Cart provides instant deliveries. However, the size of the package is the main reason for the delay. Yes, with us you will get delivery of the package within 2 to"), __jsx("button", {
    className: "btn p-0 text-primary mt-1 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 21
    }
  }, "Read More", __jsx("i", {
    className: "fa fa-arrow-right mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 23
    }
  })))), __jsx("div", {
    className: "col-lg-4 bg-white col-sm position-relative rounded-2 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/crediblefemale.png",
    width: 70,
    height: 70,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle  ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemimg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemdivresp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 19
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 21
    }
  }), __jsx("h6", {
    className: "mb-2  mt-1 fw-bold",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 21
    }
  }, "Instant Delivery"), __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paracolorcen, " m-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 21
    }
  }, "Followers Cart provides instant deliveries. However, the size of the package is the main reason for the delay. Yes, with us you will get delivery of the package within 2 to"), __jsx("button", {
    className: "btn p-0 text-primary mt-1 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 21
    }
  }, "Read More", __jsx("i", {
    className: "fa fa-arrow-right mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 23
    }
  })))), __jsx("div", {
    className: "col-lg-4 bg-white col-sm position-relative rounded-2 ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemresp),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/crouselfemale.png",
    width: 70,
    height: 70,
    alt: "Picture of the author",
    className: "position-absolute top-0 start-50 translate-middle  ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemimg),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.carditemdivresp,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 19
    }
  }, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 21
    }
  }), __jsx("h6", {
    className: "mb-2  mt-1 fw-bold",
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 21
    }
  }, "Instant Delivery"), __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paracolorcen, " m-0"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 21
    }
  }, "Followers Cart provides instant deliveries. However, the size of the package is the main reason for the delay. Yes, with us you will get delivery of the package within 2 to"), __jsx("button", {
    className: "btn p-0 text-primary mt-1 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 21
    }
  }, "Read More", __jsx("i", {
    className: "fa fa-arrow-right mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 23
    }
  }))))))), __jsx("button", {
    className: "carousel-control-prev rounded-pill rounded-end ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardbtnrespleft),
    type: "button",
    "data-bs-target": "#carouselExample",
    "data-bs-slide": "prev",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "fa fa-arrow-left text-primary",
    style: {
      transform: "scale(1.6,1.1)"
    },
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "visually-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 13
    }
  }, "Previous")), __jsx("button", {
    className: "carousel-control-next rounded-pill rounded-start ".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardbtnrespright),
    type: "button",
    "data-bs-target": "#carouselExample",
    "data-bs-slide": "next",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "fa fa-arrow-right text-primary",
    style: {
      transform: "scale(1.6,1.1)"
    },
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "visually-hidden",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 13
    }
  }, "Next")))), __jsx("div", {
    style: {
      backgroundColor: "#FBFBFB"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "pt-5 pb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "justify-content-center d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 11
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.twpx, " fw-bold text-primary px-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 15
    }
  }, "FAQ"), __jsx("h4", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nsbhc, " fw-bold px-5"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 15
    }
  }, "Still Have ", __jsx("span", {
    style: {
      color: "#EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 28
    }
  }, "Questions "), "?"), __jsx("p", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nsbkbc, " ").concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.twelve, " fw-bold ms-4"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 15
    }
  }, "Don't worry we are here for your assistance.\xA0"))), __jsx("div", {
    className: "container col-lg-9 col-sm-12 my-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "".concat(_Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nsbbc, " row fw-bold justify-content-around"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-6 col-sm-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 15
    }
  }, __jsx("ul", {
    "class": "list-group list-group-flush gap-3 mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667,
      columnNumber: 17
    }
  }, __jsx("li", {
    "class": "fw-bold d-block",
    style: {
      color: "#1472EC",
      borderLeft: "3px solid #EE1D52 "
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "ps-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 21
    }
  }, "Do I Need To Provide Instagram Password In Order to Avail The Services ?")), __jsx("li", {
    className: "list-unstyled mx-2  ps-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 19
    }
  }, __jsx("small", {
    className: _Services_SpSerivces_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btngrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 21
    }
  }, "No! You really don't need to provide password All you have to do is that you only need to provide instagram username and that all.")), __jsx("hr", {
    style: {
      color: "#1472EC"
    },
    className: "m-2 border-2 opacity-100 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 19
    }
  }), __jsx("li", {
    "class": " list-unstyled fw-bold",
    style: {
      borderLeft: "3px solid #EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "m-0 ps-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 21
    }
  }, "Do You Offer Verification Service (Blue Badge) For Instagram Profile ?")), __jsx("hr", {
    className: "m-0 border-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "col-lg-6 col-sm-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 15
    }
  }, __jsx("ul", {
    "class": "list-group list-group-flush gap-3 mx-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 17
    }
  }, __jsx("li", {
    "class": " list-unstyled fw-bold",
    style: {
      borderLeft: "3px solid #EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "m-0 ps-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 21
    }
  }, "Do You Need My Instagram Password To Process My Order?")), __jsx("hr", {
    className: "m-0 border-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 19
    }
  }), __jsx("li", {
    "class": " list-unstyled fw-bold",
    style: {
      borderLeft: "3px solid #EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "m-0 ps-3 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 21
    }
  }, "Are The Followers Completely UK Based?")), __jsx("hr", {
    className: "m-0 border-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 19
    }
  }), __jsx("li", {
    "class": " list-unstyled fw-bold",
    style: {
      borderLeft: "3px solid #EE1D52"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "m-0 ps-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 21
    }
  }, "Do You Offer Any Special Followers Plan For Businesses?")))))))));
}
_c = SpServices;

var _c;

$RefreshReg$(_c, "SpServices");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/Services/SpSerivces.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/Services/SpSerivces.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".SpSerivces_signupnavback__3tglB{\r\n    background: linear-gradient(\r\n      to right,\r\n      rgba(110,126,177,255),\r\n      rgba(239,142,195,255)\r\n    );\r\n  }\r\n\r\n  \r\n\r\n  .SpSerivces_headfirst__2gDFM{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n    width: 45%;\r\n    height: 86px;\r\n  }\r\n  .SpSerivces_crouselhead__WQZ8H{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n  }\r\n  .SpSerivces_crouselitemhead__3yP31{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 16px;\r\n    color: #EE1D52;\r\n  }\r\n  .SpSerivces_crouselbg__2h6zj{\r\n    background: transparent linear-gradient(251deg, rgba(249, 144, 197, 0.5) 0%, rgba(126, 195, 255, 0.5) 100%) 0% 0% no-repeat padding-box;\r\n  }\r\n  .SpSerivces_cardprtone__290S4{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 16px;\r\n    color: #EE1D52;\r\n    \r\n  }\r\n  .SpSerivces_cardprttwo__2KuW8{\r\n    font-family: bop, sans-serif;\r\n    font-size: 13px;\r\n    color: #2D2D2D;\r\n  }\r\n  .SpSerivces_cardprtthi__12P6b{\r\n    font-family: sublb, sans-serif;\r\n    font-size: 20px;\r\n    color: #FFFFFF;\r\n  }\r\n  .SpSerivces_cardprtfou__ZLIFm{\r\n    font-family: pm, sans-serif;\r\n    font-size: 16px;\r\n    color: #FFFFFF;\r\n    width: 99px;\r\n    height: 36px;\r\n  }\r\n  .SpSerivces_grpcenone__1NN8X{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 14px;\r\n    \r\n  }\r\n\r\n  .SpSerivces_grpcentwo__3ug5c{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n  }\r\n\r\n  .SpSerivces_grpcentwobtm__3206e{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n    color: #EE1D52;\r\n  }\r\n  .SpSerivces_paraque__wwkjc{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 22px;\r\n    \r\n  }\r\n  .SpSerivces_ultimatecolor__3amcB{\r\ncolor: #EE1D52;\r\n  }\r\n\r\n  .SpSerivces_bgcolor__2djll{\r\n    background: url(/FemaleFollowlogo.png) 320px 10px no-repeat, url(/femlefolowbck.png) 1145px 435px no-repeat #F3F3F3;\r\n  }\r\n  .SpSerivces_cardsizes__1RDzK{\r\n    width: 223px;\r\n    height: 280px;\r\n  }\r\n  .SpSerivces_cardsizes__1RDzK:hover{\r\n    border: 2px solid #1472EC;\r\n  }\r\n\r\n  .SpSerivces_paracolorcen__1229w{\r\n    color: #737373;\r\n    font-family: bop, sans-serif;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .SpSerivces_crouselpara__97ZMp{\r\n    color: #737373;\r\n    font-family: pm, sans-serif;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .SpSerivces_crouselbtn__388GR{\r\n    font-family: pm, sans-serif;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .SpSerivces_twpx__3XcHT{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .SpSerivces_nsbhc__3vK7L{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n  }\r\n  .SpSerivces_nsbkbc__1RAvc{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 18px;\r\n    padding: 1px;\r\n  }\r\n  .SpSerivces_nsbbc__2O_ce{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 16px;\r\n  }\r\n  .SpSerivces_btngrop__2sexo{\r\n    font-family: bop, sans-serif;\r\n    font-size: 15px;\r\n    color: #949494;\r\n  }\r\n\r\n\r\n  .SpSerivces_cardrespon__gEOIJ{\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .SpSerivces_cardrespon__gEOIJ{\r\n      margin: 0px;\r\n      justify-content: center;\r\n    }\r\n  }\r\n\r\n  .SpSerivces_dividrrespns__19r29{\r\n    margin-top: 20px;\r\n      width: 403px\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .SpSerivces_dividrrespns__19r29{\r\n      margin-top: 20px;\r\n      width: 75px\r\n    }\r\n  }\r\n\r\n  .SpSerivces_paraimgrespns__2Spdr{\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .SpSerivces_paraimgrespns__2Spdr{\r\n      width: 150px;\r\n      height: 150px;\r\n      -webkit-margin-before: 0px;\r\n              margin-block-start: 0px;\r\n      -webkit-margin-start: 0px;\r\n              margin-inline-start: 0px;\r\n    }\r\n    .SpSerivces_ten__36jOO{\r\n      font-size: 130%;\r\n    }\r\n    .SpSerivces_eleven__3X_yB{\r\n      margin: 20px;\r\n    }\r\n    .SpSerivces_twelve__FuJTP{\r\n      margin-left: -30px;\r\n    }\r\n  }\r\n\r\n  .SpSerivces_carouselresp__rIALK{\r\n    }\r\n\r\n  @media (max-width: 768px){\r\n    .SpSerivces_carouselresp__rIALK{\r\n      width: 375px;\r\n    }\r\n  }\r\n\r\n  /* making card item, card item div, card item image  and buttons responsive */\r\n  .SpSerivces_carditemresp__3nk8q{\r\n    margin-top: 36px;\r\n    height: 266px;\r\n    width: 304px;\r\n  }\r\n  @media (max-width: 768px){\r\n    .SpSerivces_carditemresp__3nk8q{\r\n      margin-top: 36px;\r\n    height: 266px;\r\n    width:  94px;\r\n    }\r\n  }\r\n\r\n  .SpSerivces_carditemdivresp__Fm8g-{\r\n    padding-inline: 26px;\r\n  }\r\n  @media (max-width: 768px){\r\n    .SpSerivces_carditemdivresp__Fm8g-{\r\n      padding-left: 11px;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .SpSerivces_carditemimg__2sFMy{\r\n      width: 49px;\r\n      height: 49px;\r\n    }\r\n  }\r\n\r\n  .SpSerivces_cardbtnrespleft__3lH2o{\r\n              width: 65px;\r\n              height: 40px;\r\n              background-color: white;\r\n              top: calc(59% - 30px);\r\n              opacity: 1;\r\n              margin-left: -38px;\r\n  }\r\n  @media (max-width: 768px){\r\n    .SpSerivces_cardbtnrespleft__3lH2o{\r\n              width: 25px;\r\n              height: 40px;\r\n              background-color: white;\r\n              top: calc(59% - 30px);\r\n              opacity: 1;\r\n              margin-left: -0.5px;\r\n    }\r\n  }\r\n\r\n  .SpSerivces_cardbtnrespright__3T_U7{\r\n    width: 65px;\r\n    height: 40px;\r\n    background-color: white;\r\n    top: calc(59% - 30px);\r\n    opacity: 1;\r\n    margin-right: -38px;\r\n}\r\n@media (max-width: 768px){\r\n.SpSerivces_cardbtnrespright__3T_U7{\r\n    width: 25px;\r\n    height: 40px;\r\n    background-color: white;\r\n    top: calc(59% - 30px);\r\n    opacity: 1;\r\n    margin-right: -0.5px;\r\n}\r\n}\r\n\r\n\r\n  /* complete page overflow removing */\r\n  @media (max-width: 768px){\r\n    .SpSerivces_overflowresp__cFIlH{\r\n      overflow: hidden;\r\n    }\r\n  }", "",{"version":3,"sources":["C:/Users/Hafiz Abdul Rehman/Desktop/odoo-main/components/Services/SpSerivces.module.css"],"names":[],"mappings":"AAAA;IACI;;;;KAIC;EACH;;;;EAIA;IACE,4BAA4B;IAC5B,eAAe;IACf,UAAU;IACV,YAAY;EACd;EACA;IACE,4BAA4B;IAC5B,eAAe;EACjB;EACA;IACE,4BAA4B;IAC5B,eAAe;IACf,cAAc;EAChB;EACA;IACE,uIAAuI;EACzI;EACA;IACE,4BAA4B;IAC5B,eAAe;IACf,cAAc;;EAEhB;EACA;IACE,4BAA4B;IAC5B,eAAe;IACf,cAAc;EAChB;EACA;IACE,8BAA8B;IAC9B,eAAe;IACf,cAAc;EAChB;EACA;IACE,2BAA2B;IAC3B,eAAe;IACf,cAAc;IACd,WAAW;IACX,YAAY;EACd;EACA;IACE,4BAA4B;IAC5B,eAAe;;EAEjB;;EAEA;IACE,4BAA4B;IAC5B,eAAe;EACjB;;EAEA;IACE,4BAA4B;IAC5B,eAAe;IACf,cAAc;EAChB;EACA;IACE,4BAA4B;IAC5B,eAAe;;EAEjB;EACA;AACF,cAAc;EACZ;;EAEA;IACE,mHAAmH;EACrH;EACA;IACE,YAAY;IACZ,aAAa;EACf;EACA;IACE,yBAAyB;EAC3B;;EAEA;IACE,cAAc;IACd,4BAA4B;IAC5B,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,2BAA2B;IAC3B,eAAe;EACjB;;EAEA;IACE,2BAA2B;IAC3B,eAAe;EACjB;;EAEA;IACE,4BAA4B;IAC5B,eAAe;EACjB;;EAEA;IACE,4BAA4B;IAC5B,eAAe;EACjB;EACA;IACE,4BAA4B;IAC5B,eAAe;IACf,YAAY;EACd;EACA;IACE,4BAA4B;IAC5B,eAAe;EACjB;EACA;IACE,4BAA4B;IAC5B,eAAe;IACf,cAAc;EAChB;;;EAGA;EACA;;EAEA;IACE;MACE,WAAW;MACX,uBAAuB;IACzB;EACF;;EAEA;IACE,gBAAgB;MACd;EACJ;;EAEA;IACE;MACE,gBAAgB;MAChB;IACF;EACF;;EAEA;EACA;;EAEA;IACE;MACE,YAAY;MACZ,aAAa;MACb,0BAAuB;cAAvB,uBAAuB;MACvB,yBAAwB;cAAxB,wBAAwB;IAC1B;IACA;MACE,eAAe;IACjB;IACA;MACE,YAAY;IACd;IACA;MACE,kBAAkB;IACpB;EACF;;EAEA;IACE;;EAEF;IACE;MACE,YAAY;IACd;EACF;;EAEA,6EAA6E;EAC7E;IACE,gBAAgB;IAChB,aAAa;IACb,YAAY;EACd;EACA;IACE;MACE,gBAAgB;IAClB,aAAa;IACb,YAAY;IACZ;EACF;;EAEA;IACE,oBAAoB;EACtB;EACA;IACE;MACE,kBAAkB;IACpB;EACF;;EAEA;IACE;MACE,WAAW;MACX,YAAY;IACd;EACF;;EAEA;cACY,WAAW;cACX,YAAY;cACZ,uBAAuB;cACvB,qBAAqB;cACrB,UAAU;cACV,kBAAkB;EAC9B;EACA;IACE;cACU,WAAW;cACX,YAAY;cACZ,uBAAuB;cACvB,qBAAqB;cACrB,UAAU;cACV,mBAAmB;IAC7B;EACF;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;IACV,mBAAmB;AACvB;AACA;AACA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;IACV,oBAAoB;AACxB;AACA;;;EAGE,oCAAoC;EACpC;IACE;MACE,gBAAgB;IAClB;EACF","file":"SpSerivces.module.css","sourcesContent":[".signupnavback{\r\n    background: linear-gradient(\r\n      to right,\r\n      rgba(110,126,177,255),\r\n      rgba(239,142,195,255)\r\n    );\r\n  }\r\n\r\n  \r\n\r\n  .headfirst{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n    width: 45%;\r\n    height: 86px;\r\n  }\r\n  .crouselhead{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n  }\r\n  .crouselitemhead{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 16px;\r\n    color: #EE1D52;\r\n  }\r\n  .crouselbg{\r\n    background: transparent linear-gradient(251deg, rgba(249, 144, 197, 0.5) 0%, rgba(126, 195, 255, 0.5) 100%) 0% 0% no-repeat padding-box;\r\n  }\r\n  .cardprtone{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 16px;\r\n    color: #EE1D52;\r\n    \r\n  }\r\n  .cardprttwo{\r\n    font-family: bop, sans-serif;\r\n    font-size: 13px;\r\n    color: #2D2D2D;\r\n  }\r\n  .cardprtthi{\r\n    font-family: sublb, sans-serif;\r\n    font-size: 20px;\r\n    color: #FFFFFF;\r\n  }\r\n  .cardprtfou{\r\n    font-family: pm, sans-serif;\r\n    font-size: 16px;\r\n    color: #FFFFFF;\r\n    width: 99px;\r\n    height: 36px;\r\n  }\r\n  .grpcenone{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 14px;\r\n    \r\n  }\r\n\r\n  .grpcentwo{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n  }\r\n\r\n  .grpcentwobtm{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n    color: #EE1D52;\r\n  }\r\n  .paraque{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 22px;\r\n    \r\n  }\r\n  .ultimatecolor{\r\ncolor: #EE1D52;\r\n  }\r\n\r\n  .bgcolor{\r\n    background: url(/FemaleFollowlogo.png) 320px 10px no-repeat, url(/femlefolowbck.png) 1145px 435px no-repeat #F3F3F3;\r\n  }\r\n  .cardsizes{\r\n    width: 223px;\r\n    height: 280px;\r\n  }\r\n  .cardsizes:hover{\r\n    border: 2px solid #1472EC;\r\n  }\r\n\r\n  .paracolorcen{\r\n    color: #737373;\r\n    font-family: bop, sans-serif;\r\n    font-size: 15px;\r\n  }\r\n\r\n  .crouselpara{\r\n    color: #737373;\r\n    font-family: pm, sans-serif;\r\n    font-size: 14px;\r\n  }\r\n\r\n  .crouselbtn{\r\n    font-family: pm, sans-serif;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .twpx{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .nsbhc{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 32px;\r\n  }\r\n  .nsbkbc{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 18px;\r\n    padding: 1px;\r\n  }\r\n  .nsbbc{\r\n    font-family: nsb, sans-serif;\r\n    font-size: 16px;\r\n  }\r\n  .btngrop{\r\n    font-family: bop, sans-serif;\r\n    font-size: 15px;\r\n    color: #949494;\r\n  }\r\n\r\n\r\n  .cardrespon{\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .cardrespon{\r\n      margin: 0px;\r\n      justify-content: center;\r\n    }\r\n  }\r\n\r\n  .dividrrespns{\r\n    margin-top: 20px;\r\n      width: 403px\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .dividrrespns{\r\n      margin-top: 20px;\r\n      width: 75px\r\n    }\r\n  }\r\n\r\n  .paraimgrespns{\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .paraimgrespns{\r\n      width: 150px;\r\n      height: 150px;\r\n      margin-block-start: 0px;\r\n      margin-inline-start: 0px;\r\n    }\r\n    .ten{\r\n      font-size: 130%;\r\n    }\r\n    .eleven{\r\n      margin: 20px;\r\n    }\r\n    .twelve{\r\n      margin-left: -30px;\r\n    }\r\n  }\r\n\r\n  .carouselresp{\r\n    }\r\n\r\n  @media (max-width: 768px){\r\n    .carouselresp{\r\n      width: 375px;\r\n    }\r\n  }\r\n\r\n  /* making card item, card item div, card item image  and buttons responsive */\r\n  .carditemresp{\r\n    margin-top: 36px;\r\n    height: 266px;\r\n    width: 304px;\r\n  }\r\n  @media (max-width: 768px){\r\n    .carditemresp{\r\n      margin-top: 36px;\r\n    height: 266px;\r\n    width:  94px;\r\n    }\r\n  }\r\n\r\n  .carditemdivresp{\r\n    padding-inline: 26px;\r\n  }\r\n  @media (max-width: 768px){\r\n    .carditemdivresp{\r\n      padding-left: 11px;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 768px){\r\n    .carditemimg{\r\n      width: 49px;\r\n      height: 49px;\r\n    }\r\n  }\r\n\r\n  .cardbtnrespleft{\r\n              width: 65px;\r\n              height: 40px;\r\n              background-color: white;\r\n              top: calc(59% - 30px);\r\n              opacity: 1;\r\n              margin-left: -38px;\r\n  }\r\n  @media (max-width: 768px){\r\n    .cardbtnrespleft{\r\n              width: 25px;\r\n              height: 40px;\r\n              background-color: white;\r\n              top: calc(59% - 30px);\r\n              opacity: 1;\r\n              margin-left: -0.5px;\r\n    }\r\n  }\r\n\r\n  .cardbtnrespright{\r\n    width: 65px;\r\n    height: 40px;\r\n    background-color: white;\r\n    top: calc(59% - 30px);\r\n    opacity: 1;\r\n    margin-right: -38px;\r\n}\r\n@media (max-width: 768px){\r\n.cardbtnrespright{\r\n    width: 25px;\r\n    height: 40px;\r\n    background-color: white;\r\n    top: calc(59% - 30px);\r\n    opacity: 1;\r\n    margin-right: -0.5px;\r\n}\r\n}\r\n\r\n\r\n  /* complete page overflow removing */\r\n  @media (max-width: 768px){\r\n    .overflowresp{\r\n      overflow: hidden;\r\n    }\r\n  }"]}]);
// Exports
exports.locals = {
	"signupnavback": "SpSerivces_signupnavback__3tglB",
	"headfirst": "SpSerivces_headfirst__2gDFM",
	"crouselhead": "SpSerivces_crouselhead__WQZ8H",
	"crouselitemhead": "SpSerivces_crouselitemhead__3yP31",
	"crouselbg": "SpSerivces_crouselbg__2h6zj",
	"cardprtone": "SpSerivces_cardprtone__290S4",
	"cardprttwo": "SpSerivces_cardprttwo__2KuW8",
	"cardprtthi": "SpSerivces_cardprtthi__12P6b",
	"cardprtfou": "SpSerivces_cardprtfou__ZLIFm",
	"grpcenone": "SpSerivces_grpcenone__1NN8X",
	"grpcentwo": "SpSerivces_grpcentwo__3ug5c",
	"grpcentwobtm": "SpSerivces_grpcentwobtm__3206e",
	"paraque": "SpSerivces_paraque__wwkjc",
	"ultimatecolor": "SpSerivces_ultimatecolor__3amcB",
	"bgcolor": "SpSerivces_bgcolor__2djll",
	"cardsizes": "SpSerivces_cardsizes__1RDzK",
	"paracolorcen": "SpSerivces_paracolorcen__1229w",
	"crouselpara": "SpSerivces_crouselpara__97ZMp",
	"crouselbtn": "SpSerivces_crouselbtn__388GR",
	"twpx": "SpSerivces_twpx__3XcHT",
	"nsbhc": "SpSerivces_nsbhc__3vK7L",
	"nsbkbc": "SpSerivces_nsbkbc__1RAvc",
	"nsbbc": "SpSerivces_nsbbc__2O_ce",
	"btngrop": "SpSerivces_btngrop__2sexo",
	"cardrespon": "SpSerivces_cardrespon__gEOIJ",
	"dividrrespns": "SpSerivces_dividrrespns__19r29",
	"paraimgrespns": "SpSerivces_paraimgrespns__2Spdr",
	"ten": "SpSerivces_ten__36jOO",
	"eleven": "SpSerivces_eleven__3X_yB",
	"twelve": "SpSerivces_twelve__FuJTP",
	"carouselresp": "SpSerivces_carouselresp__rIALK",
	"carditemresp": "SpSerivces_carditemresp__3nk8q",
	"carditemdivresp": "SpSerivces_carditemdivresp__Fm8g-",
	"carditemimg": "SpSerivces_carditemimg__2sFMy",
	"cardbtnrespleft": "SpSerivces_cardbtnrespleft__3lH2o",
	"cardbtnrespright": "SpSerivces_cardbtnrespright__3T_U7",
	"overflowresp": "SpSerivces_overflowresp__cFIlH"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VzL1NwU2VyaXZjZXMubW9kdWxlLmNzcz9kYWEyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VydmljZXMvU3BTZXJ2aWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VzL1NwU2VyaXZjZXMubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJTcFNlcnZpY2VzIiwiU3R5bGVzIiwiYmdjb2xvciIsInRvcCIsImxlZnQiLCJvdmVyZmxvd3Jlc3AiLCJoZWFkZmlyc3QiLCJ0ZW4iLCJ1bHRpbWF0ZWNvbG9yIiwiY2FyZHJlc3BvbiIsImNhcmRzaXplcyIsImNhcmRwcnRvbmUiLCJjYXJkcHJ0dHdvIiwiY29sb3IiLCJjYXJkcHJ0dGhpIiwiY2FyZHBydGZvdSIsInBhZGRpbmdJbmxpbmVFbmQiLCJkaXZpZHJyZXNwbnMiLCJtYXJnaW5JbmxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncnBjZW5vbmUiLCJncnBjZW50d28iLCJncnBjZW50d29idG0iLCJlbGV2ZW4iLCJwYXJhcXVlIiwicGFyYWNvbG9yY2VuIiwicGFyYXFvbmUiLCJjcm91c2VsYmciLCJjcm91ZWxoZWFkIiwiY2Fyb3VzZWxyZXNwIiwiY2FyZGl0ZW1yZXNwIiwiY2FyZGl0ZW1pbWciLCJjYXJkaXRlbWRpdnJlc3AiLCJjcm91c2VsaXRlbWhlYWQiLCJjcm91c2VscGFyYSIsImNyb3VzZWxidG4iLCJjYXJkYnRucmVzcGxlZnQiLCJ0cmFuc2Zvcm0iLCJjYXJkYnRucmVzcHJpZ2h0IiwidHdweCIsIm5zYmhjIiwibnNia2JjIiwidHdlbHZlIiwibnNiYmMiLCJib3JkZXJMZWZ0IiwiYnRuZ3JvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxrVEFBdUs7O0FBRXpNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7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QUE2QixPQUFPLGdDQUFnQyx5QkFBeUIsNkJBQTZCLFNBQVMsT0FBTyxvQ0FBb0MscUJBQXFCLHNCQUFzQix1QkFBdUIsU0FBUyxPQUFPLDJCQUEyQiw4QkFBOEIsK0JBQStCLDBDQUEwQyx3Q0FBd0MsNkJBQTZCLHFDQUFxQyxPQUFPLGdDQUFnQyx5QkFBeUIsOEJBQThCLCtCQUErQiwwQ0FBMEMsd0NBQXdDLDZCQUE2QixzQ0FBc0MsU0FBUyxPQUFPLDRCQUE0QixvQkFBb0IscUJBQXFCLGdDQUFnQyw4QkFBOEIsbUJBQW1CLDRCQUE0QixLQUFLLDhCQUE4QixzQkFBc0Isb0JBQW9CLHFCQUFxQixnQ0FBZ0MsOEJBQThCLG1CQUFtQiw2QkFBNkIsS0FBSyxLQUFLLG1GQUFtRixzQkFBc0IsMkJBQTJCLFNBQVMsT0FBTyxHQUFHO0FBQy9pYTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxNeXRlc3RhdXRvLmpzLmY1OGIxN2MzZTZiNTgyNjcwNjM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9TcFNlcml2Y2VzLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCkvLyBSZW1lbWJlcjogdGhpcyBpcyBkZXZlbG9wbWVudCBvbmx5IGNvZGUuXG4vL1xuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXG4vLyA8c3R5bGU+IHRhZ3MgdGhhdCBzZXQgYGJvZHkgeyBkaXNwbGF5OiBub25lOyB9YC5cbi8vXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcbi8vIHRoaXMgb3BlcmF0aW9uIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBzdHlsZVxuLy8gdGFncy5cbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL1NwU2VyaXZjZXMubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL1NwU2VyaXZjZXMubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnLi4vU2VydmljZXMvU3BTZXJpdmNlcy5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BTZXJ2aWNlcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj48ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmJnY29sb3J9IHBvc2l0aW9uLXJlbGF0aXZlYH0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiL2ZtYWxlZm9sb3diY2sucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCI0MjJcIlxyXG4gICAgICAgICAgd2lkdGg9XCI0MjJcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiBcIjg1MHB4XCIsIGxlZnQ6IFwiMjVweFwiIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Bwb3NpdGlvbi1hYnNvbHV0ZSB0cmFuc2xhdGUtbWlkZGxlICR7U3R5bGVzLm92ZXJmbG93cmVzcH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gY29sLWxnLTkgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5oZWFkZmlyc3R9ICR7U3R5bGVzLnRlbn0gIHB0LTUgbS1hdXRvIGZ3LWJvbGQgdGV4dC1jZW50ZXIgbWItNWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2AgbS0wIHAtMCAke1N0eWxlcy51bHRpbWF0ZWNvbG9yfWB9PlVsdGltYXRlPC9zcGFuPiBQbGFjZSB0byBCdXlcclxuICAgICAgICAgICAgSW5zdGFncmFtIEZlbWFsZSBGb2xsb3dlcnNcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkcmVzcG9ufSByb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zYH0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkc2l6ZXN9IGNvbC1zbS0yIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmUgcC0wIG0tMyBteS01YH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXJkZmVtYWxlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTh9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezU4fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTUwIHRyYW5zbGF0ZS1taWRkbGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmNhcmRwcnRvbmV9IG15LTMgZnctYm9sZGB9PlxyXG4gICAgICAgICAgICAgICAgNTAgPGJyIC8+IEZlbWFsZSBGb2xsb3dlcnNcclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteC00IHB0LTBcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHBydHR3b30gdGV4dC1zdGFydCBteC0yYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgbXMtMSBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctcmlnaHQgbWUtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDUwIFBlciBEYXlcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0yIG1zLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctcmlnaHQgbWUtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0IFRpbWU6IDAtOSBob3Vyc1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgbXMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodCBtZS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VzdGFpbmFibGUgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIG1iLTUgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgcHktMSAke1N0eWxlcy5jYXJkcHJ0dGhpfWB9PsKjIDg8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMTAwIHN0YXJ0LTUwIHRyYW5zbGF0ZS1taWRkbGVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHBydGZvdX0gYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSByb3VuZGVkLXBpbGxgfT5cclxuICAgICAgICAgICAgICAgICAgQnV5XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHNpemVzfSBjb2wtc20tMiBiZy13aGl0ZSByb3VuZGVkIHRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIHAtMCBtLTMgbXktNWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FyZGZlbWFsZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezU4fVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1OH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC01MCB0cmFuc2xhdGUtbWlkZGxlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkcHJ0b25lfSBteS0zIGZ3LWJvbGRgfT5cclxuICAgICAgICAgICAgICAgIDUwIDxiciAvPiBGZW1hbGUgRm9sbG93ZXJzXHJcbiAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXgtNFwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkcHJ0dHdvfSB0ZXh0LXN0YXJ0IG14LTJgfT5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMiBtcy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG1lLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI0VFMUQ1MlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA1MCBQZXIgRGF5XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMiBtcy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG1lLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI0VFMUQ1MlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBTdGFydCBUaW1lOiAwLTkgaG91cnNcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0yIG1zLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctcmlnaHQgbWUtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFN1c3RhaW5hYmxlIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBtYi01IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT17YHB5LTEgJHtTdHlsZXMuY2FyZHBydHRoaX1gfT7CoyAxNTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0xMDAgc3RhcnQtNTAgdHJhbnNsYXRlLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkcHJ0Zm91fSBidG4gYnRuLXByaW1hcnkgYnRuLXNtIHJvdW5kZWQtcGlsbGB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7U3R5bGVzLmNhcmRzaXplc30gY29sLXNtLTIgYmctd2hpdGUgcm91bmRlZCB0ZXh0LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZSBwLTAgbS0zIG15LTVgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2NhcmRmZW1hbGUucG5nXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1OH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTh9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtNTAgdHJhbnNsYXRlLW1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHBydG9uZX0gbXktMyBmdy1ib2xkYH0+XHJcbiAgICAgICAgICAgICAgICA1MCA8YnIgLz4gRmVtYWxlIEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHBydHR3b30gdGV4dC1zdGFydCBteC0yYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgbXMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodCBtZS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgNTAgUGVyIERheVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgbXMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodCBtZS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhcnQgVGltZTogMC05IGhvdXJzXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMiBtcy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG1lLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI0VFMUQ1MlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBTdXN0YWluYWJsZSBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWItNSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9e2BweS0xICR7U3R5bGVzLmNhcmRwcnR0aGl9YH0+wqMgMzU8L2g1PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMTAwIHN0YXJ0LTUwIHRyYW5zbGF0ZS1taWRkbGVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHBydGZvdX0gYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSByb3VuZGVkLXBpbGxgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBCdXlcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkc2l6ZXN9IGNvbC1zbS0yIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmUgcC0wIG0tMyBteS01YH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9jYXJkZmVtYWxlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTh9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezU4fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHN0YXJ0LTUwIHRyYW5zbGF0ZS1taWRkbGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmNhcmRwcnRvbmV9IG15LTMgZnctYm9sZGB9PlxyXG4gICAgICAgICAgICAgICAgNTAgPGJyIC8+IEZlbWFsZSBGb2xsb3dlcnNcclxuICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJteC00XCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTMgXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmNhcmRwcnR0d299IHRleHQtc3RhcnQgbXgtMmB9PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0yIG1zLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctcmlnaHQgbWUtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDUwIFBlciBEYXlcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0yIG1zLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctcmlnaHQgbWUtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXJ0IFRpbWU6IDAtOSBob3Vyc1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgbXMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodCBtZS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgU3VzdGFpbmFibGUgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIG1iLTUgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtgcHktMSAke1N0eWxlcy5jYXJkcHJ0dGhpfWB9PsKjIDY3PC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTEwMCBzdGFydC01MCB0cmFuc2xhdGUtbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7U3R5bGVzLmNhcmRwcnRmb3V9IGJ0biBidG4tcHJpbWFyeSBidG4tc20gcm91bmRlZC1waWxsYH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQnV5XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHNpemVzfSBjb2wtc20tMiBiZy13aGl0ZSByb3VuZGVkIHRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlIHAtMCBtLTMgbXktNWB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvY2FyZGZlbWFsZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezU4fVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1OH1cclxuICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC01MCB0cmFuc2xhdGUtbWlkZGxlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkcHJ0b25lfSBteS0zIGZ3LWJvbGRgfVxyXG4+XHJcbiAgICAgICAgICAgICAgICA1MCA8YnIgLz4gRmVtYWxlIEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm14LTRcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMyBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY2FyZHBydHR3b30gdGV4dC1zdGFydCBteC0yYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgbXMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodCBtZS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgNTAgUGVyIERheVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTIgbXMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodCBtZS0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhcnQgVGltZTogMC05IGhvdXJzXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMiBtcy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG1lLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI0VFMUQ1MlwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBTdXN0YWluYWJsZSBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWItNSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBcclxuY2xhc3NOYW1lPXtgcHktMSAke1N0eWxlcy5jYXJkcHJ0dGhpfWB9PsKjIDExMDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0xMDAgc3RhcnQtNTAgdHJhbnNsYXRlLW1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5jYXJkcHJ0Zm91fSBidG4gYnRuLXByaW1hcnkgYnRuLXNtIHJvdW5kZWQtcGlsbGB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGQtZmxleCBwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMTAwIHN0YXJ0LTUwIHRyYW5zbGF0ZS1taWRkbGVcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0lubGluZUVuZDogXCJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5kaXZpZHJyZXNwbnN9IGNvbCBib3JkZXItMmB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIvUmVjdGFuZ2xlIDE5MS5wbmdcIlxyXG4gICAgICAgICAgICB3aWR0aD17NDJ9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDV9XHJcbiAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbklubGluZTogXCIzN3B4XCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuZGl2aWRycmVzcG5zfSBjb2wgYm9yZGVyLTJgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGQkZCRkJcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgbWItMCBwYi0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS00IG0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvZmVtYWxlb25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMjV9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTcxfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtcy00XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake1N0eWxlcy5ncnBjZW5vbmV9IGZ3LWJvbGQgdGV4dC1wcmltYXJ5ICBtcy0zYH0+XHJcbiAgICAgICAgICAgICAgICAgIFdlIEFyZSBQcm92ZGluZ1xyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake1N0eWxlcy5ncnBjZW50d299IGZ3LWJvbGQgbS0wIG10LTEgYH0+RG96ZW4ncyBPZiBJbnN0YWdyYW08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuZ3JwY2VudHdvYnRtfSBmdy1ib2xkIHRleHQtY2VudGVyIG0tMCBtZS0zYH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZW1pdW0gU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNCBtLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktMVwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9mZW1hbGV0d28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMyNX1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNzF9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLXNtLTEyIG0tYXV0byBtdC00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7U3R5bGVzLmVsZXZlbn0gbXQtNCBnYXAtMWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTNcIj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake1N0eWxlcy5wYXJhcXVlfSAgZnctYm9sZCBtLTAgbWItMmB9PlxyXG4gICAgICAgICAgICAgICAgV2h5IHlvdSBzaG91bGQgYnV5IGZlbWFsZSBmb2xsb3dlcnMgZnJvbSBSZWFsIElHIEdyb3d0aD9cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtTdHlsZXMucGFyYWNvbG9yY2VufT5cclxuICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmdcclxuICAgICAgICAgICAgICAgIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teVxyXG4gICAgICAgICAgICAgICAgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleVxyXG4gICAgICAgICAgICAgICAgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhc1xyXG4gICAgICAgICAgICAgICAgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG9cclxuICAgICAgICAgICAgICAgIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhc1xyXG4gICAgICAgICAgICAgICAgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzXHJcbiAgICAgICAgICAgICAgICBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3BcclxuICAgICAgICAgICAgICAgIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mXHJcbiAgICAgICAgICAgICAgICBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2wtbGctOCBjb2wtc20tOFwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17YCR7U3R5bGVzLnBhcmFxb25lfSAgZnctYm9sZCBtLTAgbWItMmB9PlxyXG4gICAgICAgICAgICAgICAgICBXaHkgeW91IHNob3VsZCBidXkgZmVtYWxlIGZvbGxvd2VycyBmcm9tIFJlYWwgSUcgR3Jvd3RoP1xyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YCR7U3R5bGVzLnBhcmFjb2xvcmNlbn0gbS0wIHBiLTJgfT5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZFxyXG4gICAgICAgICAgICAgICAgICB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3NcclxuICAgICAgICAgICAgICAgICAgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duXHJcbiAgICAgICAgICAgICAgICAgIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGVcclxuICAgICAgICAgICAgICAgICAgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXRcclxuICAgICAgICAgICAgICAgICAgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZ1xyXG4gICAgICAgICAgICAgICAgICBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aFxyXG4gICAgICAgICAgICAgICAgICB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bVxyXG4gICAgICAgICAgICAgICAgICBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmVcclxuICAgICAgICAgICAgICAgICAgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNCBtcy01XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9mZW1hbGVmb2xvd3NpZGUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwNX1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzh9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1zLTRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5jcm91c2VsYmd9IHB5LTVgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY3JvdWVsaGVhZH0gZnctYm9sZCB0ZXh0LWNlbnRlcmB9PlxyXG4gICAgICAgICAgV2hhdCA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX0+UmVhbCBJRyBHcm93dGggPC9zcGFuPk9mZmVyczpcclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPVwiY2Fyb3VzZWxFeGFtcGxlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsIHNsaWRlICBweC00IGNvbnRhaW5lciBjb2wtbGctOSBjb2wtc20tMTIgbWItMyAke1N0eWxlcy5jYXJvdXNlbHJlc3B9YH1cclxuICAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbGctNCBiZy13aGl0ZSBjb2wtc20gcG9zaXRpb24tcmVsYXRpdmUgcm91bmRlZC0yICR7U3R5bGVzLmNhcmRpdGVtcmVzcH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nyb3VzZWxmZW1sZXR3by5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtNTAgdHJhbnNsYXRlLW1pZGRsZSAgJHtTdHlsZXMuY2FyZGl0ZW1pbWd9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2FyZGl0ZW1kaXZyZXNwfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY3JvdXNlbGl0ZW1oZWFkfSBtYi0xIG0tMCAgbXQtMSBmdy1ib2xkYH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSW5zdGFudCBEZWxpdmVyeVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake1N0eWxlcy5jcm91c2VscGFyYX0gbS0wYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGb2xsb3dlcnMgQ2FydCBwcm92aWRlcyBpbnN0YW50IGRlbGl2ZXJpZXMuIEhvd2V2ZXIsIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZSBvZiB0aGUgcGFja2FnZSBpcyB0aGUgbWFpbiByZWFzb24gZm9yIHRoZSBkZWxheS4gWWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aCB1cyB5b3Ugd2lsbCBnZXQgZGVsaXZlcnkgb2YgdGhlIHBhY2thZ2Ugd2l0aGluIDIgdG9cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7U3R5bGVzLmNyb3VzZWxidG59IGJ0biBwLTAgdGV4dC1wcmltYXJ5IG10LTIgbWItNWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG14LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDJuZCBpdGVtICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLWxnLTQgYmctd2hpdGUgY29sLXNtIHBvc2l0aW9uLXJlbGF0aXZlIHJvdW5kZWQtMiAke1N0eWxlcy5jYXJkaXRlbXJlc3B9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9jcmVkaWJsZWZlbWFsZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtNTAgdHJhbnNsYXRlLW1pZGRsZSAgJHtTdHlsZXMuY2FyZGl0ZW1pbWd9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2FyZGl0ZW1kaXZyZXNwfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtTdHlsZXMuY3JvdXNlbGl0ZW1oZWFkfSBtYi0xIG0tMCAgbXQtMSBmdy1ib2xkYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcmVkaWJpbGl0eSBhbmQgVHJ1c3RcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtTdHlsZXMuY3JvdXNlbHBhcmF9IG0tMGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNpbmNlIHdlIGFyZSB2ZXRlcmFucyBhbmQgd29ya2luZyBwcm9mZXNzaW9uYWxzIHdpdGhvdXQgYW55IGlzc3VlcyBmb3IgeWVhcnMuIFdlIGFyZSB0cnVzdHdvcnRoeSBhcyB3ZWxsIGFzIGxveWFsIHRvIHRoZSBjbGllbnRzLiBUaGF0IGlzIHRoZSByZWFzb24gd2h5IG1vc3QgcGVvcGxlIGxpa2UgdG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7U3R5bGVzLmNyb3VzZWxidG59IGJ0biBwLTAgdGV4dC1wcmltYXJ5IG10LTIgbWItNWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG14LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiAzcmQgaXRlbSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLWxnLTQgYmctd2hpdGUgY29sLXNtIHBvc2l0aW9uLXJlbGF0aXZlIHJvdW5kZWQtMiAke1N0eWxlcy5jYXJkaXRlbXJlc3B9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9jcm91c2VsZmVtYWxlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC01MCB0cmFuc2xhdGUtbWlkZGxlICAke1N0eWxlcy5jYXJkaXRlbWltZ31gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jYXJkaXRlbWRpdnJlc3B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1N0eWxlcy5jcm91c2VsaXRlbWhlYWR9IG1iLTEgbS0wICBtdC0xIGZ3LWJvbGRgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDI0LzcgTGl2ZSBTdXBwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7U3R5bGVzLmNyb3VzZWxwYXJhfSBtLTBgfT5cclxuICAgICAgICAgICAgICAgICAgICBXZSBkb24ndCBwcm92aWRlIG9yIGVuZG9yc2UgZmFrZSBmb2xsb3dlcnMuIExldCBpdCBiZSBmb3IgRW5nbGlzaCBmb2xsb3dlcnMgb3Igb3RoZXIgdHlwZXM7IHdlIHBsZWRnZSB0byBnaXZlIHRoZSBiZXN0IEluc3RhZ3JhbSBmb2xsb3dlcnMuIFRoZXNlIGZvbGxvd2VycyBhcmUgcmVhbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtTdHlsZXMuY3JvdXNlbGJ0bn0gYnRuIHAtMCB0ZXh0LXByaW1hcnkgbXQtMiBtYi01YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctcmlnaHQgbXgtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbGctNCBiZy13aGl0ZSBjb2wtc20gcG9zaXRpb24tcmVsYXRpdmUgcm91bmRlZC0yICR7U3R5bGVzLmNhcmRpdGVtcmVzcH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Nyb3VzZWxmZW1sZXR3by5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtNTAgdHJhbnNsYXRlLW1pZGRsZSAgJHtTdHlsZXMuY2FyZGl0ZW1pbWd9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2FyZGl0ZW1kaXZyZXNwfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTIgIG10LTEgZnctYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnN0YW50IERlbGl2ZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake1N0eWxlcy5wYXJhY29sb3JjZW59IG0tMGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9sbG93ZXJzIENhcnQgcHJvdmlkZXMgaW5zdGFudCBkZWxpdmVyaWVzLiBIb3dldmVyLCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemUgb2YgdGhlIHBhY2thZ2UgaXMgdGhlIG1haW4gcmVhc29uIGZvciB0aGUgZGVsYXkuIFllcyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpdGggdXMgeW91IHdpbGwgZ2V0IGRlbGl2ZXJ5IG9mIHRoZSBwYWNrYWdlIHdpdGhpbiAyIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHAtMCB0ZXh0LXByaW1hcnkgbXQtMSBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG14LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDJuZCBpdGVtICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLWxnLTQgYmctd2hpdGUgY29sLXNtIHBvc2l0aW9uLXJlbGF0aXZlIHJvdW5kZWQtMiAke1N0eWxlcy5jYXJkaXRlbXJlc3B9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9jcmVkaWJsZWZlbWFsZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgc3RhcnQtNTAgdHJhbnNsYXRlLW1pZGRsZSAgJHtTdHlsZXMuY2FyZGl0ZW1pbWd9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2FyZGl0ZW1kaXZyZXNwfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTIgIG10LTEgZnctYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbnN0YW50IERlbGl2ZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake1N0eWxlcy5wYXJhY29sb3JjZW59IG0tMGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9sbG93ZXJzIENhcnQgcHJvdmlkZXMgaW5zdGFudCBkZWxpdmVyaWVzLiBIb3dldmVyLCB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemUgb2YgdGhlIHBhY2thZ2UgaXMgdGhlIG1haW4gcmVhc29uIGZvciB0aGUgZGVsYXkuIFllcyxcclxuICAgICAgICAgICAgICAgICAgICAgIHdpdGggdXMgeW91IHdpbGwgZ2V0IGRlbGl2ZXJ5IG9mIHRoZSBwYWNrYWdlIHdpdGhpbiAyIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHAtMCB0ZXh0LXByaW1hcnkgbXQtMSBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LXJpZ2h0IG14LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiAzcmQgaXRlbSAqL31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLWxnLTQgYmctd2hpdGUgY29sLXNtIHBvc2l0aW9uLXJlbGF0aXZlIHJvdW5kZWQtMiAke1N0eWxlcy5jYXJkaXRlbXJlc3B9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9jcm91c2VsZmVtYWxlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCBzdGFydC01MCB0cmFuc2xhdGUtbWlkZGxlICAke1N0eWxlcy5jYXJkaXRlbWltZ31gfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jYXJkaXRlbWRpdnJlc3B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMiAgbXQtMSBmdy1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEluc3RhbnQgRGVsaXZlcnlcclxuICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7U3R5bGVzLnBhcmFjb2xvcmNlbn0gbS0wYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGb2xsb3dlcnMgQ2FydCBwcm92aWRlcyBpbnN0YW50IGRlbGl2ZXJpZXMuIEhvd2V2ZXIsIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZSBvZiB0aGUgcGFja2FnZSBpcyB0aGUgbWFpbiByZWFzb24gZm9yIHRoZSBkZWxheS4gWWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aCB1cyB5b3Ugd2lsbCBnZXQgZGVsaXZlcnkgb2YgdGhlIHBhY2thZ2Ugd2l0aGluIDIgdG9cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gcC0wIHRleHQtcHJpbWFyeSBtdC0xIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctcmlnaHQgbXgtMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsLWNvbnRyb2wtcHJldiByb3VuZGVkLXBpbGwgcm91bmRlZC1lbmQgJHtTdHlsZXMuY2FyZGJ0bnJlc3BsZWZ0fWB9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVcIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXNsaWRlPVwicHJldlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctbGVmdCB0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogXCJzY2FsZSgxLjYsMS4xKVwiIH19XHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+UHJldmlvdXM8L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2Fyb3VzZWwtY29udHJvbC1uZXh0IHJvdW5kZWQtcGlsbCByb3VuZGVkLXN0YXJ0ICR7U3R5bGVzLmNhcmRidG5yZXNwcmlnaHR9YH1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZVwiXHJcbiAgICAgICAgICAgIGRhdGEtYnMtc2xpZGU9XCJuZXh0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodCB0ZXh0LXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogXCJzY2FsZSgxLjYsMS4xKVwiIH19XHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZCRkJGQlwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBwYi00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7U3R5bGVzLnR3cHh9IGZ3LWJvbGQgdGV4dC1wcmltYXJ5IHB4LTVgfT5cclxuICAgICAgICAgICAgICAgIEZBUVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17YCR7U3R5bGVzLm5zYmhjfSBmdy1ib2xkIHB4LTVgfT5cclxuICAgICAgICAgICAgICAgIFN0aWxsIEhhdmUgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VFMUQ1MlwiIH19PlF1ZXN0aW9ucyA8L3NwYW4+P1xyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHtTdHlsZXMubnNia2JjfSAke1N0eWxlcy50d2VsdmV9IGZ3LWJvbGQgbXMtNGB9PlxyXG4gICAgICAgICAgICAgICAgRG9uJ3Qgd29ycnkgd2UgYXJlIGhlcmUgZm9yIHlvdXIgYXNzaXN0YW5jZS4mbmJzcDtcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLWxnLTkgY29sLXNtLTEyIG15LTVcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7U3R5bGVzLm5zYmJjfSByb3cgZnctYm9sZCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBnYXAtMyBteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnctYm9sZCBkLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzE0NzJFQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI0VFMUQ1MiBcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG8gSSBOZWVkIFRvIFByb3ZpZGUgSW5zdGFncmFtIFBhc3N3b3JkIEluIE9yZGVyIHRvIEF2YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICBUaGUgU2VydmljZXMgP1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsaXN0LXVuc3R5bGVkIG14LTIgIHBzLTMnXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtTdHlsZXMuYnRuZ3JvcH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIE5vISBZb3UgcmVhbGx5IGRvbid0IG5lZWQgdG8gcHJvdmlkZSBwYXNzd29yZCBBbGwgeW91IGhhdmVcclxuICAgICAgICAgICAgICAgICAgICB0byBkbyBpcyB0aGF0IHlvdSBvbmx5IG5lZWQgdG8gcHJvdmlkZSBpbnN0YWdyYW0gdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICBhbmQgdGhhdCBhbGwuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzE0NzJFQ1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0yIGJvcmRlci0yIG9wYWNpdHktMTAwIFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiIGxpc3QtdW5zdHlsZWQgZnctYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI0VFMUQ1MlwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG8gWW91IE9mZmVyIFZlcmlmaWNhdGlvbiBTZXJ2aWNlIChCbHVlIEJhZGdlKSBGb3JcclxuICAgICAgICAgICAgICAgICAgICAgIEluc3RhZ3JhbSBQcm9maWxlID9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtLTAgYm9yZGVyLTJcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaCBnYXAtMyBteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiIGxpc3QtdW5zdHlsZWQgZnctYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdDogXCIzcHggc29saWQgI0VFMUQ1MlwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRG8gWW91IE5lZWQgTXkgSW5zdGFncmFtIFBhc3N3b3JkIFRvIFByb2Nlc3MgTXkgT3JkZXI/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibS0wIGJvcmRlci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCIgbGlzdC11bnN0eWxlZCBmdy1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJMZWZ0OiBcIjNweCBzb2xpZCAjRUUxRDUyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwcy0zIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQXJlIFRoZSBGb2xsb3dlcnMgQ29tcGxldGVseSBVSyBCYXNlZD9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtLTAgYm9yZGVyLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIiBsaXN0LXVuc3R5bGVkIGZ3LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckxlZnQ6IFwiM3B4IHNvbGlkICNFRTFENTJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHBzLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERvIFlvdSBPZmZlciBBbnkgU3BlY2lhbCBGb2xsb3dlcnMgUGxhbiBGb3IgQnVzaW5lc3Nlcz9cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj48L2Rpdj5cclxuICApXHJcbn1cclxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlNwU2VyaXZjZXNfc2lnbnVwbmF2YmFja19fM3RnbEJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICB0byByaWdodCxcXHJcXG4gICAgICByZ2JhKDExMCwxMjYsMTc3LDI1NSksXFxyXFxuICAgICAgcmdiYSgyMzksMTQyLDE5NSwyNTUpXFxyXFxuICAgICk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX2hlYWRmaXJzdF9fMmdERk17XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gICAgaGVpZ2h0OiA4NnB4O1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfY3JvdXNlbGhlYWRfX1dRWjhIe1xcclxcbiAgICBmb250LWZhbWlseTogbnNiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICB9XFxyXFxuICAuU3BTZXJpdmNlc19jcm91c2VsaXRlbWhlYWRfXzN5UDMxe1xcclxcbiAgICBmb250LWZhbWlseTogbnNiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiAjRUUxRDUyO1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfY3JvdXNlbGJnX18yaDZ6antcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI1MWRlZywgcmdiYSgyNDksIDE0NCwgMTk3LCAwLjUpIDAlLCByZ2JhKDEyNiwgMTk1LCAyNTUsIDAuNSkgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfY2FyZHBydG9uZV9fMjkwUzR7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY29sb3I6ICNFRTFENTI7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfY2FyZHBydHR3b19fMkt1Vzh7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib3AsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgY29sb3I6ICMyRDJEMkQ7XFxyXFxuICB9XFxyXFxuICAuU3BTZXJpdmNlc19jYXJkcHJ0dGhpX18xMlA2YntcXHJcXG4gICAgZm9udC1mYW1pbHk6IHN1YmxiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfY2FyZHBydGZvdV9fWkxJRm17XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBwbSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgd2lkdGg6IDk5cHg7XFxyXFxuICAgIGhlaWdodDogMzZweDtcXHJcXG4gIH1cXHJcXG4gIC5TcFNlcml2Y2VzX2dycGNlbm9uZV9fMU5OOFh7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU3BTZXJpdmNlc19ncnBjZW50d29fXzN1ZzVje1xcclxcbiAgICBmb250LWZhbWlseTogbnNiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU3BTZXJpdmNlc19ncnBjZW50d29idG1fXzMyMDZle1xcclxcbiAgICBmb250LWZhbWlseTogbnNiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGNvbG9yOiAjRUUxRDUyO1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfcGFyYXF1ZV9fd3dramN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuU3BTZXJpdmNlc191bHRpbWF0ZWNvbG9yX18zYW1jQntcXHJcXG5jb2xvcjogI0VFMUQ1MjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX2JnY29sb3JfXzJkamxse1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL0ZlbWFsZUZvbGxvd2xvZ28ucG5nKSAzMjBweCAxMHB4IG5vLXJlcGVhdCwgdXJsKC9mZW1sZWZvbG93YmNrLnBuZykgMTE0NXB4IDQzNXB4IG5vLXJlcGVhdCAjRjNGM0YzO1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfY2FyZHNpemVzX18xUkR6S3tcXHJcXG4gICAgd2lkdGg6IDIyM3B4O1xcclxcbiAgICBoZWlnaHQ6IDI4MHB4O1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfY2FyZHNpemVzX18xUkR6Szpob3ZlcntcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE0NzJFQztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX3BhcmFjb2xvcmNlbl9fMTIyOXd7XFxyXFxuICAgIGNvbG9yOiAjNzM3MzczO1xcclxcbiAgICBmb250LWZhbWlseTogYm9wLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU3BTZXJpdmNlc19jcm91c2VscGFyYV9fOTdaTXB7XFxyXFxuICAgIGNvbG9yOiAjNzM3MzczO1xcclxcbiAgICBmb250LWZhbWlseTogcG0sIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX2Nyb3VzZWxidG5fXzM4OEdSe1xcclxcbiAgICBmb250LWZhbWlseTogcG0sIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX3R3cHhfXzNYY0hUe1xcclxcbiAgICBmb250LWZhbWlseTogbnNiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU3BTZXJpdmNlc19uc2JoY19fM3ZLN0x7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIH1cXHJcXG4gIC5TcFNlcml2Y2VzX25zYmtiY19fMVJBdmN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgfVxcclxcbiAgLlNwU2VyaXZjZXNfbnNiYmNfXzJPX2Nle1xcclxcbiAgICBmb250LWZhbWlseTogbnNiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB9XFxyXFxuICAuU3BTZXJpdmNlc19idG5ncm9wX18yc2V4b3tcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvcCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogIzk0OTQ5NDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX2NhcmRyZXNwb25fX2dFT0lKe1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLlNwU2VyaXZjZXNfY2FyZHJlc3Bvbl9fZ0VPSUp7XFxyXFxuICAgICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX2RpdmlkcnJlc3Buc19fMTlyMjl7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgd2lkdGg6IDQwM3B4XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuU3BTZXJpdmNlc19kaXZpZHJyZXNwbnNfXzE5cjI5e1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgICAgd2lkdGg6IDc1cHhcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLlNwU2VyaXZjZXNfcGFyYWltZ3Jlc3Buc19fMlNwZHJ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuU3BTZXJpdmNlc19wYXJhaW1ncmVzcG5zX18yU3BkcntcXHJcXG4gICAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDBweDtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xcclxcbiAgICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwcHg7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLlNwU2VyaXZjZXNfdGVuX18zNmpPT3tcXHJcXG4gICAgICBmb250LXNpemU6IDEzMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLlNwU2VyaXZjZXNfZWxldmVuX18zWF95QntcXHJcXG4gICAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLlNwU2VyaXZjZXNfdHdlbHZlX19GdUpUUHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogLTMwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5TcFNlcml2Y2VzX2Nhcm91c2VscmVzcF9fcklBTEt7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5TcFNlcml2Y2VzX2Nhcm91c2VscmVzcF9fcklBTEt7XFxyXFxuICAgICAgd2lkdGg6IDM3NXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBtYWtpbmcgY2FyZCBpdGVtLCBjYXJkIGl0ZW0gZGl2LCBjYXJkIGl0ZW0gaW1hZ2UgIGFuZCBidXR0b25zIHJlc3BvbnNpdmUgKi9cXHJcXG4gIC5TcFNlcml2Y2VzX2NhcmRpdGVtcmVzcF9fM25rOHF7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM2cHg7XFxyXFxuICAgIGhlaWdodDogMjY2cHg7XFxyXFxuICAgIHdpZHRoOiAzMDRweDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5TcFNlcml2Y2VzX2NhcmRpdGVtcmVzcF9fM25rOHF7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAyNjZweDtcXHJcXG4gICAgd2lkdGg6ICA5NHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU3BTZXJpdmNlc19jYXJkaXRlbWRpdnJlc3BfX0ZtOGcte1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMjZweDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5TcFNlcml2Y2VzX2NhcmRpdGVtZGl2cmVzcF9fRm04Zy17XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuU3BTZXJpdmNlc19jYXJkaXRlbWltZ19fMnNGTXl7XFxyXFxuICAgICAgd2lkdGg6IDQ5cHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0OXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU3BTZXJpdmNlc19jYXJkYnRucmVzcGxlZnRfXzNsSDJve1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgIHRvcDogY2FsYyg1OSUgLSAzMHB4KTtcXHJcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTM4cHg7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuU3BTZXJpdmNlc19jYXJkYnRucmVzcGxlZnRfXzNsSDJve1xcclxcbiAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgIHRvcDogY2FsYyg1OSUgLSAzMHB4KTtcXHJcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTAuNXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuU3BTZXJpdmNlc19jYXJkYnRucmVzcHJpZ2h0X18zVF9VN3tcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRvcDogY2FsYyg1OSUgLSAzMHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzhweDtcXHJcXG59XFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4uU3BTZXJpdmNlc19jYXJkYnRucmVzcHJpZ2h0X18zVF9VN3tcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRvcDogY2FsYyg1OSUgLSAzMHB4KTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cHg7XFxyXFxufVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIGNvbXBsZXRlIHBhZ2Ugb3ZlcmZsb3cgcmVtb3ZpbmcgKi9cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5TcFNlcml2Y2VzX292ZXJmbG93cmVzcF9fY0ZJbEh7XFxyXFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL0hhZml6IEFiZHVsIFJlaG1hbi9EZXNrdG9wL29kb28tbWFpbi9jb21wb25lbnRzL1NlcnZpY2VzL1NwU2VyaXZjZXMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJOzs7O0tBSUM7RUFDSDs7OztFQUlBO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSx1SUFBdUk7RUFDekk7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYzs7RUFFaEI7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsZUFBZTs7RUFFakI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7O0VBRWpCO0VBQ0E7QUFDRixjQUFjO0VBQ1o7O0VBRUE7SUFDRSxtSEFBbUg7RUFDckg7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7OztFQUdBO0VBQ0E7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCx1QkFBdUI7SUFDekI7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtNQUNkO0VBQ0o7O0VBRUE7SUFDRTtNQUNFLGdCQUFnQjtNQUNoQjtJQUNGO0VBQ0Y7O0VBRUE7RUFDQTs7RUFFQTtJQUNFO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYiwwQkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLGVBQWU7SUFDakI7SUFDQTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0Usa0JBQWtCO0lBQ3BCO0VBQ0Y7O0VBRUE7SUFDRTs7RUFFRjtJQUNFO01BQ0UsWUFBWTtJQUNkO0VBQ0Y7O0VBRUEsNkVBQTZFO0VBQzdFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1o7RUFDRjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLFlBQVk7SUFDZDtFQUNGOztFQUVBO2NBQ1ksV0FBVztjQUNYLFlBQVk7Y0FDWix1QkFBdUI7Y0FDdkIscUJBQXFCO2NBQ3JCLFVBQVU7Y0FDVixrQkFBa0I7RUFDOUI7RUFDQTtJQUNFO2NBQ1UsV0FBVztjQUNYLFlBQVk7Y0FDWix1QkFBdUI7Y0FDdkIscUJBQXFCO2NBQ3JCLFVBQVU7Y0FDVixtQkFBbUI7SUFDN0I7RUFDRjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7OztFQUdFLG9DQUFvQztFQUNwQztJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0ZcIixcImZpbGVcIjpcIlNwU2VyaXZjZXMubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2lnbnVwbmF2YmFja3tcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIHJpZ2h0LFxcclxcbiAgICAgIHJnYmEoMTEwLDEyNiwxNzcsMjU1KSxcXHJcXG4gICAgICByZ2JhKDIzOSwxNDIsMTk1LDI1NSlcXHJcXG4gICAgKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcblxcclxcbiAgLmhlYWRmaXJzdHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG5zYiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICB3aWR0aDogNDUlO1xcclxcbiAgICBoZWlnaHQ6IDg2cHg7XFxyXFxuICB9XFxyXFxuICAuY3JvdXNlbGhlYWR7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIH1cXHJcXG4gIC5jcm91c2VsaXRlbWhlYWR7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgY29sb3I6ICNFRTFENTI7XFxyXFxuICB9XFxyXFxuICAuY3JvdXNlbGJne1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjUxZGVnLCByZ2JhKDI0OSwgMTQ0LCAxOTcsIDAuNSkgMCUsIHJnYmEoMTI2LCAxOTUsIDI1NSwgMC41KSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XFxyXFxuICB9XFxyXFxuICAuY2FyZHBydG9uZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG5zYiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBjb2xvcjogI0VFMUQ1MjtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuY2FyZHBydHR3b3tcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJvcCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBjb2xvcjogIzJEMkQyRDtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkcHJ0dGhpe1xcclxcbiAgICBmb250LWZhbWlseTogc3VibGIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICB9XFxyXFxuICAuY2FyZHBydGZvdXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHBtLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbiAgICB3aWR0aDogOTlweDtcXHJcXG4gICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgfVxcclxcbiAgLmdycGNlbm9uZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG5zYiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ncnBjZW50d297XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ncnBjZW50d29idG17XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgY29sb3I6ICNFRTFENTI7XFxyXFxuICB9XFxyXFxuICAucGFyYXF1ZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG5zYiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gIC51bHRpbWF0ZWNvbG9ye1xcclxcbmNvbG9yOiAjRUUxRDUyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJnY29sb3J7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgvRmVtYWxlRm9sbG93bG9nby5wbmcpIDMyMHB4IDEwcHggbm8tcmVwZWF0LCB1cmwoL2ZlbWxlZm9sb3diY2sucG5nKSAxMTQ1cHggNDM1cHggbm8tcmVwZWF0ICNGM0YzRjM7XFxyXFxuICB9XFxyXFxuICAuY2FyZHNpemVze1xcclxcbiAgICB3aWR0aDogMjIzcHg7XFxyXFxuICAgIGhlaWdodDogMjgwcHg7XFxyXFxuICB9XFxyXFxuICAuY2FyZHNpemVzOmhvdmVye1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTQ3MkVDO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBhcmFjb2xvcmNlbntcXHJcXG4gICAgY29sb3I6ICM3MzczNzM7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBib3AsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcm91c2VscGFyYXtcXHJcXG4gICAgY29sb3I6ICM3MzczNzM7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBwbSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyb3VzZWxidG57XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBwbSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnR3cHh7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uc2JoY3tcXHJcXG4gICAgZm9udC1mYW1pbHk6IG5zYiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgfVxcclxcbiAgLm5zYmtiY3tcXHJcXG4gICAgZm9udC1mYW1pbHk6IG5zYiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcHg7XFxyXFxuICB9XFxyXFxuICAubnNiYmN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBuc2IsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIH1cXHJcXG4gIC5idG5ncm9we1xcclxcbiAgICBmb250LWZhbWlseTogYm9wLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiAjOTQ5NDk0O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmNhcmRyZXNwb257XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbiAgICAuY2FyZHJlc3BvbntcXHJcXG4gICAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmRpdmlkcnJlc3Buc3tcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICB3aWR0aDogNDAzcHhcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5kaXZpZHJyZXNwbnN7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgICB3aWR0aDogNzVweFxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucGFyYWltZ3Jlc3Buc3tcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5wYXJhaW1ncmVzcG5ze1xcclxcbiAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMHB4O1xcclxcbiAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudGVue1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTMwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZWxldmVue1xcclxcbiAgICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAudHdlbHZle1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcm91c2VscmVzcHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLmNhcm91c2VscmVzcHtcXHJcXG4gICAgICB3aWR0aDogMzc1cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIG1ha2luZyBjYXJkIGl0ZW0sIGNhcmQgaXRlbSBkaXYsIGNhcmQgaXRlbSBpbWFnZSAgYW5kIGJ1dHRvbnMgcmVzcG9uc2l2ZSAqL1xcclxcbiAgLmNhcmRpdGVtcmVzcHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXHJcXG4gICAgaGVpZ2h0OiAyNjZweDtcXHJcXG4gICAgd2lkdGg6IDMwNHB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLmNhcmRpdGVtcmVzcHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAzNnB4O1xcclxcbiAgICBoZWlnaHQ6IDI2NnB4O1xcclxcbiAgICB3aWR0aDogIDk0cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkaXRlbWRpdnJlc3B7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAyNnB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLmNhcmRpdGVtZGl2cmVzcHtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDExcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5jYXJkaXRlbWltZ3tcXHJcXG4gICAgICB3aWR0aDogNDlweDtcXHJcXG4gICAgICBoZWlnaHQ6IDQ5cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkYnRucmVzcGxlZnR7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgdG9wOiBjYWxjKDU5JSAtIDMwcHgpO1xcclxcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzhweDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XFxyXFxuICAgIC5jYXJkYnRucmVzcGxlZnR7XFxyXFxuICAgICAgICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgdG9wOiBjYWxjKDU5JSAtIDMwcHgpO1xcclxcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkYnRucmVzcHJpZ2h0e1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiBjYWxjKDU5JSAtIDMwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0zOHB4O1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xcclxcbi5jYXJkYnRucmVzcHJpZ2h0e1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdG9wOiBjYWxjKDU5JSAtIDMwcHgpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVweDtcXHJcXG59XFxyXFxufVxcclxcblxcclxcblxcclxcbiAgLyogY29tcGxldGUgcGFnZSBvdmVyZmxvdyByZW1vdmluZyAqL1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcXHJcXG4gICAgLm92ZXJmbG93cmVzcHtcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuICB9XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2lnbnVwbmF2YmFja1wiOiBcIlNwU2VyaXZjZXNfc2lnbnVwbmF2YmFja19fM3RnbEJcIixcblx0XCJoZWFkZmlyc3RcIjogXCJTcFNlcml2Y2VzX2hlYWRmaXJzdF9fMmdERk1cIixcblx0XCJjcm91c2VsaGVhZFwiOiBcIlNwU2VyaXZjZXNfY3JvdXNlbGhlYWRfX1dRWjhIXCIsXG5cdFwiY3JvdXNlbGl0ZW1oZWFkXCI6IFwiU3BTZXJpdmNlc19jcm91c2VsaXRlbWhlYWRfXzN5UDMxXCIsXG5cdFwiY3JvdXNlbGJnXCI6IFwiU3BTZXJpdmNlc19jcm91c2VsYmdfXzJoNnpqXCIsXG5cdFwiY2FyZHBydG9uZVwiOiBcIlNwU2VyaXZjZXNfY2FyZHBydG9uZV9fMjkwUzRcIixcblx0XCJjYXJkcHJ0dHdvXCI6IFwiU3BTZXJpdmNlc19jYXJkcHJ0dHdvX18yS3VXOFwiLFxuXHRcImNhcmRwcnR0aGlcIjogXCJTcFNlcml2Y2VzX2NhcmRwcnR0aGlfXzEyUDZiXCIsXG5cdFwiY2FyZHBydGZvdVwiOiBcIlNwU2VyaXZjZXNfY2FyZHBydGZvdV9fWkxJRm1cIixcblx0XCJncnBjZW5vbmVcIjogXCJTcFNlcml2Y2VzX2dycGNlbm9uZV9fMU5OOFhcIixcblx0XCJncnBjZW50d29cIjogXCJTcFNlcml2Y2VzX2dycGNlbnR3b19fM3VnNWNcIixcblx0XCJncnBjZW50d29idG1cIjogXCJTcFNlcml2Y2VzX2dycGNlbnR3b2J0bV9fMzIwNmVcIixcblx0XCJwYXJhcXVlXCI6IFwiU3BTZXJpdmNlc19wYXJhcXVlX193d2tqY1wiLFxuXHRcInVsdGltYXRlY29sb3JcIjogXCJTcFNlcml2Y2VzX3VsdGltYXRlY29sb3JfXzNhbWNCXCIsXG5cdFwiYmdjb2xvclwiOiBcIlNwU2VyaXZjZXNfYmdjb2xvcl9fMmRqbGxcIixcblx0XCJjYXJkc2l6ZXNcIjogXCJTcFNlcml2Y2VzX2NhcmRzaXplc19fMVJEektcIixcblx0XCJwYXJhY29sb3JjZW5cIjogXCJTcFNlcml2Y2VzX3BhcmFjb2xvcmNlbl9fMTIyOXdcIixcblx0XCJjcm91c2VscGFyYVwiOiBcIlNwU2VyaXZjZXNfY3JvdXNlbHBhcmFfXzk3Wk1wXCIsXG5cdFwiY3JvdXNlbGJ0blwiOiBcIlNwU2VyaXZjZXNfY3JvdXNlbGJ0bl9fMzg4R1JcIixcblx0XCJ0d3B4XCI6IFwiU3BTZXJpdmNlc190d3B4X18zWGNIVFwiLFxuXHRcIm5zYmhjXCI6IFwiU3BTZXJpdmNlc19uc2JoY19fM3ZLN0xcIixcblx0XCJuc2JrYmNcIjogXCJTcFNlcml2Y2VzX25zYmtiY19fMVJBdmNcIixcblx0XCJuc2JiY1wiOiBcIlNwU2VyaXZjZXNfbnNiYmNfXzJPX2NlXCIsXG5cdFwiYnRuZ3JvcFwiOiBcIlNwU2VyaXZjZXNfYnRuZ3JvcF9fMnNleG9cIixcblx0XCJjYXJkcmVzcG9uXCI6IFwiU3BTZXJpdmNlc19jYXJkcmVzcG9uX19nRU9JSlwiLFxuXHRcImRpdmlkcnJlc3Buc1wiOiBcIlNwU2VyaXZjZXNfZGl2aWRycmVzcG5zX18xOXIyOVwiLFxuXHRcInBhcmFpbWdyZXNwbnNcIjogXCJTcFNlcml2Y2VzX3BhcmFpbWdyZXNwbnNfXzJTcGRyXCIsXG5cdFwidGVuXCI6IFwiU3BTZXJpdmNlc190ZW5fXzM2ak9PXCIsXG5cdFwiZWxldmVuXCI6IFwiU3BTZXJpdmNlc19lbGV2ZW5fXzNYX3lCXCIsXG5cdFwidHdlbHZlXCI6IFwiU3BTZXJpdmNlc190d2VsdmVfX0Z1SlRQXCIsXG5cdFwiY2Fyb3VzZWxyZXNwXCI6IFwiU3BTZXJpdmNlc19jYXJvdXNlbHJlc3BfX3JJQUxLXCIsXG5cdFwiY2FyZGl0ZW1yZXNwXCI6IFwiU3BTZXJpdmNlc19jYXJkaXRlbXJlc3BfXzNuazhxXCIsXG5cdFwiY2FyZGl0ZW1kaXZyZXNwXCI6IFwiU3BTZXJpdmNlc19jYXJkaXRlbWRpdnJlc3BfX0ZtOGctXCIsXG5cdFwiY2FyZGl0ZW1pbWdcIjogXCJTcFNlcml2Y2VzX2NhcmRpdGVtaW1nX18yc0ZNeVwiLFxuXHRcImNhcmRidG5yZXNwbGVmdFwiOiBcIlNwU2VyaXZjZXNfY2FyZGJ0bnJlc3BsZWZ0X18zbEgyb1wiLFxuXHRcImNhcmRidG5yZXNwcmlnaHRcIjogXCJTcFNlcml2Y2VzX2NhcmRidG5yZXNwcmlnaHRfXzNUX1U3XCIsXG5cdFwib3ZlcmZsb3dyZXNwXCI6IFwiU3BTZXJpdmNlc19vdmVyZmxvd3Jlc3BfX2NGSWxIXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9