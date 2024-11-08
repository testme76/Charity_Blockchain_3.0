"use strict";
exports.id = 902;
exports.ids = [902];
exports.modules = {

/***/ 7902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Counters_Counters)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/counter.js
const counter = [
    {
        id: 1,
        count: 870,
        letter: "K",
        text: "Total Donations"
    },
    {
        id: 2,
        count: 480,
        text: "Campaigns Closed"
    },
    {
        id: 3,
        count: 977,
        letter: "K",
        text: "Happy People"
    },
    {
        id: 4,
        count: 63,
        letter: "+",
        text: "Our Volunteers"
    }, 
];
/* harmony default export */ const data_counter = (counter);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Counters/Counters.js






const Counters = ({ className =""  })=>{
    const { 0: countStart , 1: setCountStart  } = (0,external_react_.useState)(false);
    const onVisibilityChange = (isVisible)=>{
        if (isVisible) {
            setCountStart(true);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `counters-one ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "counters-one__box list-unstyled",
                children: data_counter.map(({ id , count , letter , text  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "counter-one__single",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                className: "odometer d-flex align-items-center justify-content-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                                        offset: {
                                            top: 10
                                        },
                                        delayedCall: true,
                                        onChange: onVisibilityChange,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
                                            start: 0,
                                            end: countStart ? count : 0,
                                            duration: 2
                                        })
                                    }),
                                    letter && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "counter-one__letter",
                                        children: letter
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "counter-one__text",
                                children: text
                            })
                        ]
                    }, id))
            })
        })
    });
};
/* harmony default export */ const Counters_Counters = (Counters);


/***/ })

};
;