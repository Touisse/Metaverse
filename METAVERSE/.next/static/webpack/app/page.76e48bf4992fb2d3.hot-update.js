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

/***/ "./sections/GetStarted.jsx":
/*!*********************************!*\
  !*** ./sections/GetStarted.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\n\n\nconst GetStarted = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].paddings, \" relative z-10\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_5__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].innerWidth, \" mx-auto flex lg:flex-row flex-col gap-8\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_5__.planetVariants)(),\n                initial: \"hidden\",\n                whileInView: \"show\",\n                viewport: {\n                    once: false,\n                    amount: 0.25\n                },\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].innerWidth, \" mx-auto flex flex-col\")\n            }, void 0, false, {\n                fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/GetStarted.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/GetStarted.jsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ytouisse/Desktop/REACT/METAVERSE/sections/GetStarted.jsx\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n_c = GetStarted;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GetStarted);\nvar _c;\n$RefreshReg$(_c, \"GetStarted\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9HZXRTdGFydGVkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUN1QztBQUNOO0FBQ2tDO0FBQ25CO0FBRWpCO0FBQzRDO0FBRTNFLE1BQU1VLGFBQWEsa0JBQ2pCLDhEQUFDQztRQUFRQyxXQUFXLEdBQW1CLE9BQWhCTix3REFBZSxFQUFDO2tCQUNyQyw0RUFBQ04scURBQVU7WUFDVGUsVUFBVVAsMkRBQWdCQTtZQUMxQlEsU0FBUTtZQUNSQyxhQUFZO1lBQ1pDLFVBQVU7Z0JBQUVDLE1BQU0sS0FBSztnQkFBRUMsUUFBUTtZQUFLO1lBQ3RDUixXQUFXLEdBQXFCLE9BQWxCTiwwREFBaUIsRUFBQztzQkFFaEMsNEVBQUNOLHFEQUFVO2dCQUFDZSxVQUFVTiw2REFBY0E7Z0JBQ3BDTyxTQUFRO2dCQUNSQyxhQUFZO2dCQUNaQyxVQUFVO29CQUFFQyxNQUFNLEtBQUs7b0JBQUVDLFFBQVE7Z0JBQUs7Z0JBQ3RDUixXQUFXLEdBQXFCLE9BQWxCTiwwREFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztLQWJoQ0k7QUFvQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvR2V0U3RhcnRlZC5qc3g/YTY0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwaW5nVGV4dCwgRXhwbG9yZUNhcmQsIFRpdGxlVGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBzdGFydGluZ0ZlYXR1cmVzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXNcIjtcbmltcG9ydCB7IGZhZGVJbiwgc3RhZ2dlckNvbnRhaW5lciwgcGxhbmV0VmFyaWFudHMgfSBmcm9tIFwiLi4vdXRpbHMvbW90aW9uXCI7XG5cbmNvbnN0IEdldFN0YXJ0ZWQgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfSByZWxhdGl2ZSB6LTEwYH0+XG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICAgdmlld3BvcnQ9e3sgb25jZTogZmFsc2UsIGFtb3VudDogMC4yNSB9fVxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaW5uZXJXaWR0aH0gbXgtYXV0byBmbGV4IGxnOmZsZXgtcm93IGZsZXgtY29sIGdhcC04YH1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17cGxhbmV0VmFyaWFudHMoKX1cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgd2hpbGVJblZpZXc9XCJzaG93XCJcbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IGZhbHNlLCBhbW91bnQ6IDAuMjUgfX1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlubmVyV2lkdGh9IG14LWF1dG8gZmxleCBmbGV4LWNvbGB9PlxuXG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHZXRTdGFydGVkO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVN0YXRlIiwiVHlwaW5nVGV4dCIsIkV4cGxvcmVDYXJkIiwiVGl0bGVUZXh0Iiwic3RhcnRpbmdGZWF0dXJlcyIsInN0eWxlcyIsImZhZGVJbiIsInN0YWdnZXJDb250YWluZXIiLCJwbGFuZXRWYXJpYW50cyIsIkdldFN0YXJ0ZWQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFkZGluZ3MiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImlubmVyV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/GetStarted.jsx\n"));

/***/ })

});