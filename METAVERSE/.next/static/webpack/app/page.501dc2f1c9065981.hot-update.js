"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/WhatsNew.jsx":
/*!*******************************!*\
  !*** ./sections/WhatsNew.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\n\n\nconst WhatsNew = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].innerWidth, \" mx-auto flex lg:flex-row flex-col gap-8\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_5__.planetVariants)(\"left\"),\n                    className: \" flex-1 \".concat(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].flexCenter, \" \"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/get-started.png\",\n                        alt: \"get-started\",\n                        className: \"w-[90%] h-[90%] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_5__.fadeIn)(\"left\", \"tween\", 0.2, 1),\n                    className: \"flex-[0.75]  flex flex-col justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TypingText, {\n                            title: \"| How Metaversus Works\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TitleText, {\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: \"Get Started with just a few Clicks \"\n                            }, void 0, false)\n                        }, void 0, false, {\n                            fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-[31px] flex flex-col max-w-[370px] gap-[24px]\",\n                            children: startingFeatures.map((feature, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.StartSteps, {\n                                    number: index + 1,\n                                    text: feature\n                                }, feature, false, {\n                                    fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 11\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n            lineNumber: 12,\n            columnNumber: 3\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/WhatsNew.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n_c = WhatsNew;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhatsNew);\nvar _c;\n$RefreshReg$(_c, \"WhatsNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9XaGF0c05ldy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDdUM7QUFDTjtBQUMyRDtBQUNqRDtBQUVaO0FBQzRDO0FBRTNFLE1BQU1ZLFdBQVcsa0JBQ2YsOERBQUNDO1FBQVFDLFdBQVcsR0FBbUIsT0FBaEJOLHdEQUFlLEVBQUM7a0JBQ3ZDLDRFQUFDUixxREFBVTtZQUNUaUIsVUFBVVAsMkRBQWdCQTtZQUMxQlEsU0FBUTtZQUNSQyxhQUFZO1lBQ1pDLFVBQVU7Z0JBQUVDLE1BQU0sS0FBSztnQkFBRUMsUUFBUTtZQUFLO1lBQ3RDUixXQUFXLEdBQXFCLE9BQWxCTiwwREFBaUIsRUFBQzs7OEJBRWhDLDhEQUFDUixxREFBVTtvQkFDVGlCLFVBQVVOLDZEQUFjQSxDQUFDO29CQUN6QkcsV0FBVyxXQUE2QixPQUFsQk4sMERBQWlCLEVBQUM7OEJBRXhDLDRFQUFDaUI7d0JBQ0NDLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0piLFdBQVU7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDZCxxREFBVTtvQkFDVGlCLFVBQVVSLHFEQUFNQSxDQUFDLFFBQVEsU0FBUyxLQUFLO29CQUN2Q0ssV0FBWTs7c0NBRVosOERBQUNYLG1EQUFVQTs0QkFBQ3lCLE9BQU07Ozs7OztzQ0FDbEIsOERBQUN2QixrREFBU0E7NEJBQUN1QixxQkFBTzswQ0FBRTs7Ozs7OztzQ0FDcEIsOERBQUNaOzRCQUFJRixXQUFVO3NDQUNaZSxpQkFBaUJDLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDOUIsOERBQUMxQixtREFBVUE7b0NBQWUyQixRQUFRRCxRQUFRO29DQUFHRSxNQUFNSDttQ0FBbENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EzQnJCbkI7QUFtQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvV2hhdHNOZXcuanN4P2NlNjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOZXdGZWF0dXJlcywgVHlwaW5nVGV4dCwgRXhwbG9yZUNhcmQsIFRpdGxlVGV4dCwgU3RhcnRTdGVwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBuZXdGZWF0dXJlcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBmYWRlSW4sIHN0YWdnZXJDb250YWluZXIsIHBsYW5ldFZhcmlhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL21vdGlvblwiO1xuXG5jb25zdCBXaGF0c05ldyA9ICgpID0+IChcbiAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFkZGluZ3N9IHJlbGF0aXZlIHotMTBgfT5cbiAgPG1vdGlvbi5kaXZcbiAgICB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cbiAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgIHZpZXdwb3J0PXt7IG9uY2U6IGZhbHNlLCBhbW91bnQ6IDAuMjUgfX1cbiAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggbGc6ZmxleC1yb3cgZmxleC1jb2wgZ2FwLThgfVxuICA+XG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtwbGFuZXRWYXJpYW50cyhcImxlZnRcIil9XG4gICAgICBjbGFzc05hbWU9e2AgZmxleC0xICR7c3R5bGVzLmZsZXhDZW50ZXJ9IGB9XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvZ2V0LXN0YXJ0ZWQucG5nXCJcbiAgICAgICAgYWx0PVwiZ2V0LXN0YXJ0ZWRcIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LVs5MCVdIGgtWzkwJV0gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtmYWRlSW4oXCJsZWZ0XCIsIFwidHdlZW5cIiwgMC4yLCAxKX1cbiAgICAgIGNsYXNzTmFtZT17YGZsZXgtWzAuNzVdICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyYH1cbiAgICA+XG4gICAgICA8VHlwaW5nVGV4dCB0aXRsZT1cInwgSG93IE1ldGF2ZXJzdXMgV29ya3NcIiAvPlxuICAgICAgPFRpdGxlVGV4dCB0aXRsZT17PD5HZXQgU3RhcnRlZCB3aXRoIGp1c3QgYSBmZXcgQ2xpY2tzIDwvPn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzMxcHhdIGZsZXggZmxleC1jb2wgbWF4LXctWzM3MHB4XSBnYXAtWzI0cHhdXCI+XG4gICAgICAgIHtzdGFydGluZ0ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U3RhcnRTdGVwcyBrZXk9e2ZlYXR1cmV9IG51bWJlcj17aW5kZXggKyAxfSB0ZXh0PXtmZWF0dXJlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9tb3Rpb24uZGl2PlxuPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV2hhdHNOZXc7XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlU3RhdGUiLCJOZXdGZWF0dXJlcyIsIlR5cGluZ1RleHQiLCJFeHBsb3JlQ2FyZCIsIlRpdGxlVGV4dCIsIlN0YXJ0U3RlcHMiLCJuZXdGZWF0dXJlcyIsInN0eWxlcyIsImZhZGVJbiIsInN0YWdnZXJDb250YWluZXIiLCJwbGFuZXRWYXJpYW50cyIsIldoYXRzTmV3Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInBhZGRpbmdzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJpbm5lcldpZHRoIiwiZmxleENlbnRlciIsImltZyIsInNyYyIsImFsdCIsInRpdGxlIiwic3RhcnRpbmdGZWF0dXJlcyIsIm1hcCIsImZlYXR1cmUiLCJpbmRleCIsIm51bWJlciIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/WhatsNew.jsx\n"));

/***/ })

});