"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout/index.tsx":
/*!*************************************!*\
  !*** ./components/Layout/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst items = [\n    {\n        label: \"Navigation One\",\n        key: \"mail\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.MailOutlined, {}, void 0, false, {\n            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 11\n        }, undefined)\n    }\n];\nconst AppMenu = ()=>{\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\");\n    const onClick = (e)=>{\n        console.log(\"click \", e);\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        onClick: onClick,\n        selectedKeys: [\n            current\n        ],\n        mode: \"horizontal\",\n        items: items\n    }, void 0, false, {\n        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AppMenu, \"ZWqTbgp2XvJ+vkPcRX/iShVbotc=\");\n_c = AppMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppMenu);\nvar _c;\n$RefreshReg$(_c, \"AppMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFpQztBQUtOO0FBRUM7QUFFNUIsTUFBTUcsUUFBNEI7SUFDaEM7UUFDRUMsT0FBTztRQUNQQyxLQUFLO1FBQ0xDLG9CQUFNLDhEQUFDTCwyREFBWUE7Ozs7O0lBQ3JCO0NBQ0Q7QUFFRCxNQUFNTSxVQUFvQixJQUFNOztJQUM5QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTVUsVUFBZ0MsQ0FBQ0MsSUFBTTtRQUMzQ0MsUUFBUUMsR0FBRyxDQUFDLFVBQVVGO1FBQ3RCRixXQUFXRSxFQUFFTixHQUFHO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNILHNDQUFJQTtRQUNIUSxTQUFTQTtRQUNUSSxjQUFjO1lBQUNOO1NBQVE7UUFDdkJPLE1BQUs7UUFDTFosT0FBT0E7Ozs7OztBQUdiO0dBaEJNSTtLQUFBQTtBQWtCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3g/NjQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgTWFpbE91dGxpbmVkLFxuICBTZXR0aW5nT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHR5cGUgeyBNZW51UHJvcHMgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IGl0ZW1zOiBNZW51UHJvcHNbXCJpdGVtc1wiXSA9IFtcbiAge1xuICAgIGxhYmVsOiBcIk5hdmlnYXRpb24gT25lXCIsXG4gICAga2V5OiBcIm1haWxcIixcbiAgICBpY29uOiA8TWFpbE91dGxpbmVkIC8+LFxuICB9LFxuXTtcblxuY29uc3QgQXBwTWVudTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwibWFpbFwiKTtcblxuICBjb25zdCBvbkNsaWNrOiBNZW51UHJvcHNbXCJvbkNsaWNrXCJdID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIFwiLCBlKTtcbiAgICBzZXRDdXJyZW50KGUua2V5KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNZW51XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19XG4gICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXG4gICAgICBpdGVtcz17aXRlbXN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcE1lbnU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNYWlsT3V0bGluZWQiLCJNZW51IiwiaXRlbXMiLCJsYWJlbCIsImtleSIsImljb24iLCJBcHBNZW51IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZEtleXMiLCJtb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n"));

/***/ })

});