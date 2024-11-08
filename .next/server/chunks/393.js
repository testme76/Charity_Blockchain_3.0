"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 1211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_backgrounds_join_one_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2012);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Jarallax_JarallaxImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6408);






const Jarallax = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../components/JoinOne/JoinOne.js -> " + "../Jarallax/Jarallax"
        ]
    },
    ssr: false
});
const JoinOne = ({ className =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `join-one ${className}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Jarallax, {
                className: "join-one-bg",
                speed: 0.2,
                imgPosition: "50% 0%",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Jarallax_JarallaxImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    src: _images_backgrounds_join_one_bg_jpg__WEBPACK_IMPORTED_MODULE_1__["default"].src
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        xl: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "join-one__inner",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "join-one__title",
                                    children: [
                                        "Join the community to give ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "education for children"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "#",
                                    className: "join-one__btn thm-btn",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-arrow-circle-right"
                                        }),
                                        "Learn More"
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JoinOne);


/***/ }),

/***/ 3962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TestimonialOne_TestimonialOne)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/testimonial.js
const testimonial = [
    {
        id: 1,
        description: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "testimonial-1-img-1.png",
        name: "Kevin Martin",
        category: "Volunteer"
    },
    {
        id: 2,
        description: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "testimonial-1-img-2.png",
        name: "Jessica Brown",
        category: "Volunteer"
    },
    {
        id: 3,
        description: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "testimonial-1-img-1.png",
        name: "Jessica Brown",
        category: "Volunteer"
    },
    {
        id: 4,
        description: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "testimonial-1-img-2.png",
        name: "Kevin Martin",
        category: "Volunteer"
    }, 
];
/* harmony default export */ const data_testimonial = (testimonial);

// EXTERNAL MODULE: ./src/assets/images/backgrounds/testimonial-1-bg.jpg
var testimonial_1_bg = __webpack_require__(1265);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/TestimonialOne/TestimonialSingle.js



const TestimonialSingle = ({ singleTestimonial  })=>{
    const { name , description , category , image  } = singleTestimonial;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                userSelect: "none"
            },
            className: "testimonial-one__single",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "testimonial-one__text",
                    children: description
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "testimonial-one__client-info",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-one__client-img",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                    alt: "",
                                    src: __webpack_require__(6181)(`./${image}`).default.src
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "testimonial-one__quote"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "testimonial-one__client-name",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: category
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const TestimonialOne_TestimonialSingle = (TestimonialSingle);

;// CONCATENATED MODULE: ./src/components/TestimonialOne/TestimonialOne.js







const TinySlider = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/TestimonialOne/TestimonialOne.js -> " + "tiny-slider-react"
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
    controls: true,
    gutter: 0,
    controlsContainer: "#testimonial-one-carousel-nav",
    responsive: {
        768: {
            items: 2,
            gutter: 30
        }
    }
};
const TestimonialOne = ({ className =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `testimonial-one ${className}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "testimonial-one-bg",
                style: {
                    backgroundImage: `url(${testimonial_1_bg["default"].src})`
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            xl: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "testimonial-one__left",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "section-title text-left",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "section-title__tagline",
                                            children: "Our Testimonials"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "section-title__title",
                                            children: "What they’re talking about charity"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                            xl: 8,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "testimonial-one__right testimonial-one__carousel owl-theme owl-carouse position-relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(TinySlider, {
                                        settings: settings,
                                        children: data_testimonial.map((singleTestimonial)=>/*#__PURE__*/ jsx_runtime_.jsx(TestimonialOne_TestimonialSingle, {
                                                singleTestimonial: singleTestimonial
                                            }, singleTestimonial.id))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        id: "testimonial-one-carousel-nav",
                                        className: "owl-nav",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "owl-prev me-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-right-arrow left"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "owl-next",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-right-arrow"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const TestimonialOne_TestimonialOne = (TestimonialOne);


/***/ })

};
;