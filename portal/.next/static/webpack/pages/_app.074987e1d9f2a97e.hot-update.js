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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// import Menu from '../Menu';\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nconst items1 = [\n    \"Calendar\",\n    \"Users\"\n].map((key)=>({\n        key,\n        label: key\n    }));\nconst items2 = [\n    _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined,\n    _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LaptopOutlined,\n    _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.NotificationOutlined\n].map((icon, index)=>{\n    const key = String(index + 1);\n    return {\n        key: \"sub\".concat(key),\n        icon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(icon),\n        label: \"subnav \".concat(key),\n        children: new Array(4).fill(null).map((_, j)=>{\n            const subKey = index * 4 + j + 1;\n            return {\n                key: subKey,\n                label: \"option\".concat(subKey)\n            };\n        })\n    };\n});\nconst App = (param)=>{\n    let { children  } = param;\n    _s();\n    const { token: { colorBgContainer  }  } = antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"dark\",\n                        mode: \"horizontal\",\n                        defaultSelectedKeys: [\n                            \"2\"\n                        ],\n                        items: items1\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {}, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                style: {\n                    padding: \"0 50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                    style: {\n                        padding: \"24px 0\",\n                        background: colorBgContainer\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            padding: \"0 24px\",\n                            minHeight: 280\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Layout/index.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"bv0CbvYGXYMMgN5L/h1ALUvDvmM=\", false, function() {\n    return [\n        antd__WEBPACK_IMPORTED_MODULE_2__.theme.useToken\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQjtBQUM2RDtBQUVoQztBQUN2RCw4QkFBOEI7QUFFOUIsTUFBTSxFQUFFTyxPQUFNLEVBQUVDLFFBQU8sRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR04sd0NBQU1BO0FBRWpELE1BQU1PLFNBQTZCO0lBQUM7SUFBWTtDQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO1FBQ3RFQTtRQUNBQyxPQUFPRDtJQUNUO0FBRUEsTUFBTUUsU0FBNkI7SUFBQ1osMkRBQVlBO0lBQUVGLDZEQUFjQTtJQUFFQyxtRUFBb0JBO0NBQUMsQ0FBQ1UsR0FBRyxDQUN6RixDQUFDSSxNQUFNQyxRQUFVO0lBQ2YsTUFBTUosTUFBTUssT0FBT0QsUUFBUTtJQUUzQixPQUFPO1FBQ0xKLEtBQUssTUFBVSxPQUFKQTtRQUNYRyxvQkFBTWhCLDBEQUFtQixDQUFDZ0I7UUFDMUJGLE9BQU8sVUFBYyxPQUFKRDtRQUVqQk8sVUFBVSxJQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQyxJQUFJLEVBQUVWLEdBQUcsQ0FBQyxDQUFDVyxHQUFHQyxJQUFNO1lBQzlDLE1BQU1DLFNBQVNSLFFBQVEsSUFBSU8sSUFBSTtZQUMvQixPQUFPO2dCQUNMWCxLQUFLWTtnQkFDTFgsT0FBTyxTQUFnQixPQUFQVztZQUNsQjtRQUNGO0lBQ0Y7QUFDRjtBQUdGLE1BQU1DLE1BQWdCLFNBQWdCO1FBQWYsRUFBQ04sU0FBUSxFQUFDOztJQUMvQixNQUFNLEVBQ0pPLE9BQU8sRUFBRUMsaUJBQWdCLEVBQUUsR0FDNUIsR0FBR3RCLGdEQUFjO0lBRWxCLHFCQUNFLDhEQUFDRix3Q0FBTUE7OzBCQUNMLDhEQUFDRztnQkFBT3VCLFdBQVU7O2tDQUNoQiw4REFBQ0M7d0JBQUlELFdBQVU7Ozs7OztrQ0FDZiw4REFBQ3pCLHNDQUFJQTt3QkFBQ0MsT0FBTTt3QkFBTzBCLE1BQUs7d0JBQWFDLHFCQUFxQjs0QkFBQzt5QkFBSTt3QkFBRUMsT0FBT3ZCOzs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDTixzQ0FBSUE7Ozs7OzBCQUNMLDhEQUFDRztnQkFBUTJCLE9BQU87b0JBQUVDLFNBQVM7Z0JBQVM7MEJBQ2xDLDRFQUFDaEMsd0NBQU1BO29CQUFDK0IsT0FBTzt3QkFBRUMsU0FBUzt3QkFBVUMsWUFBWVQ7b0JBQWlCOzhCQUMvRCw0RUFBQ3BCO3dCQUFRMkIsT0FBTzs0QkFBRUMsU0FBUzs0QkFBVUUsV0FBVzt3QkFBSTtrQ0FBSWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xFO0dBbkJNTTs7UUFHQXBCLGdEQUFjdUI7OztLQUhkSDtBQXFCTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3g/NjQ3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGFwdG9wT3V0bGluZWQsIE5vdGlmaWNhdGlvbk91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgdHlwZSB7IE1lbnVQcm9wcyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYiwgTGF5b3V0LCBNZW51LCB0aGVtZSB9IGZyb20gJ2FudGQnO1xuLy8gaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSc7XG5cbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIsIFNpZGVyIH0gPSBMYXlvdXQ7XG5cbmNvbnN0IGl0ZW1zMTogTWVudVByb3BzWydpdGVtcyddID0gWydDYWxlbmRhcicsICdVc2VycycsXS5tYXAoKGtleSkgPT4gKHtcbiAga2V5LFxuICBsYWJlbDoga2V5LFxufSkpO1xuXG5jb25zdCBpdGVtczI6IE1lbnVQcm9wc1snaXRlbXMnXSA9IFtVc2VyT3V0bGluZWQsIExhcHRvcE91dGxpbmVkLCBOb3RpZmljYXRpb25PdXRsaW5lZF0ubWFwKFxuICAoaWNvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBrZXkgPSBTdHJpbmcoaW5kZXggKyAxKTtcblxuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGBzdWIke2tleX1gLFxuICAgICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChpY29uKSxcbiAgICAgIGxhYmVsOiBgc3VibmF2ICR7a2V5fWAsXG5cbiAgICAgIGNoaWxkcmVuOiBuZXcgQXJyYXkoNCkuZmlsbChudWxsKS5tYXAoKF8sIGopID0+IHtcbiAgICAgICAgY29uc3Qgc3ViS2V5ID0gaW5kZXggKiA0ICsgaiArIDE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiBzdWJLZXksXG4gICAgICAgICAgbGFiZWw6IGBvcHRpb24ke3N1YktleX1gLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgfTtcbiAgfSxcbik7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoe2NoaWxkcmVufSkgPT4ge1xuICBjb25zdCB7XG4gICAgdG9rZW46IHsgY29sb3JCZ0NvbnRhaW5lciB9LFxuICB9ID0gdGhlbWUudXNlVG9rZW4oKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuICAgICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaG9yaXpvbnRhbFwiIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMiddfSBpdGVtcz17aXRlbXMxfSAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8TWVudSAvPlxuICAgICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogJzAgNTBweCcgfX0+XG4gICAgICAgIDxMYXlvdXQgc3R5bGU9e3sgcGFkZGluZzogJzI0cHggMCcsIGJhY2tncm91bmQ6IGNvbG9yQmdDb250YWluZXIgfX0+XG4gICAgICAgICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZzogJzAgMjRweCcsIG1pbkhlaWdodDogMjgwIH19PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9Db250ZW50PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxhcHRvcE91dGxpbmVkIiwiTm90aWZpY2F0aW9uT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiU2lkZXIiLCJpdGVtczEiLCJtYXAiLCJrZXkiLCJsYWJlbCIsIml0ZW1zMiIsImljb24iLCJpbmRleCIsIlN0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsIkFycmF5IiwiZmlsbCIsIl8iLCJqIiwic3ViS2V5IiwiQXBwIiwidG9rZW4iLCJjb2xvckJnQ29udGFpbmVyIiwidXNlVG9rZW4iLCJjbGFzc05hbWUiLCJkaXYiLCJtb2RlIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIml0ZW1zIiwic3R5bGUiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout/index.tsx\n"));

/***/ })

});