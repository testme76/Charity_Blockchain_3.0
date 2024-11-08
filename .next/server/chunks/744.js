"use strict";
exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 5591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BrandOne_BrandOne)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/brandOne.js
const brandOne = [
    "brand-1-1.png",
    "brand-1-2.png",
    "brand-1-3.png",
    "brand-1-4.png",
    "brand-1-5.png", 
];
/* harmony default export */ const data_brandOne = (brandOne);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/BrandOne/BrandOne.js





const TinySlider = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/BrandOne/BrandOne.js -> " + "tiny-slider-react"
        ]
    },
    ssr: false
});
const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    items: 1,
    autoplay: true,
    autoHeight: true,
    controls: false,
    gutter: 0,
    responsive: {
        576: {
            items: 2,
            gutter: 10
        },
        768: {
            items: 3,
            gutter: 15
        },
        992: {
            items: 4,
            gutter: 15
        },
        1200: {
            items: 5,
            gutter: 20
        }
    }
};
const BrandOne = ({ brandClass =""  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `brand-one ${brandClass}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    xl: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(TinySlider, {
                        settings: settings,
                        className: "brand-one__carousel",
                        children: data_brandOne.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        userSelect: "none"
                                    },
                                    className: "brand-one__single",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "brand-one__img",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                            src: __webpack_require__(7516)(`./${image}`).default.src,
                                            alt: ""
                                        })
                                    })
                                })
                            }, index))
                    })
                })
            })
        })
    });
};
/* harmony default export */ const BrandOne_BrandOne = (BrandOne);


/***/ }),

/***/ 6408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


const JarallaxImage = ({ className ="" , alt ="" , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Image, {
        className: `jarallax-img ${className}`,
        alt: alt,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JarallaxImage);


/***/ })

};
;