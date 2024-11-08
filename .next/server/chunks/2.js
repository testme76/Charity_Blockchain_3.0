"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 8002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ GalleryOne_GalleryOne)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/galleryData.js
const galleryData = [
    {
        id: 1,
        image: "gallery-1-1.jpg",
        title: "Child Education",
        subTitle: "Charity"
    },
    {
        id: 2,
        image: "gallery-1-2.jpg",
        title: "Child Education",
        subTitle: "Charity"
    },
    {
        id: 3,
        image: "gallery-1-3.jpg",
        title: "Child Education",
        subTitle: "Charity"
    },
    {
        id: 4,
        image: "gallery-1-4.jpg",
        title: "Child Education",
        subTitle: "Charity"
    },
    {
        id: 5,
        image: "gallery-1-5.jpg",
        title: "Child Education",
        subTitle: "Charity"
    },
    {
        id: 6,
        image: "gallery-1-3.jpg",
        title: "Child Education",
        subTitle: "Charity"
    }, 
];
/* harmony default export */ const data_galleryData = (galleryData);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/GalleryOne/GalleryOne.js





const TinySlider = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/GalleryOne/GalleryOne.js -> " + "tiny-slider-react"
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
        768: {
            items: 2,
            gutter: 15
        },
        992: {
            items: 3,
            gutter: 15
        },
        1200: {
            items: 5,
            gutter: 20
        }
    }
};
const GalleryOne = ({ className =""  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `gallery-one ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "gallery-one__container-box clearfix",
            children: /*#__PURE__*/ jsx_runtime_.jsx(TinySlider, {
                settings: settings,
                className: "gallery-one__carousel",
                children: data_galleryData.map(({ id , image , title , subTitle  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                userSelect: "none"
                            },
                            className: "gallery-one__single",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "gallery-one__img-box",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                        src: __webpack_require__(8379)(`./${image}`).default.src,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "gallery-one__hover-content-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                children: title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: subTitle
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }, id))
            })
        })
    });
};
/* harmony default export */ const GalleryOne_GalleryOne = (GalleryOne);


/***/ })

};
;