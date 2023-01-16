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

/***/ "./components/Users/index.tsx":
/*!************************************!*\
  !*** ./components/Users/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroll-component */ \"./node_modules/react-infinite-scroll-component/dist/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst App = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const loadMoreData = ()=>{\n        if (loading) {\n            return;\n        }\n        setLoading(true);\n        fetch(\"https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo\").then((res)=>res.json()).then((body)=>{\n            setData([\n                ...data,\n                ...body.results\n            ]);\n            setLoading(false);\n        }).catch(()=>{\n            setLoading(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadMoreData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"scrollableDiv\",\n        style: {\n            height: 400,\n            overflow: \"auto\",\n            padding: \"0 16px\",\n            border: \"1px solid rgba(140, 140, 140, 0.35)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            dataLength: data.length,\n            next: loadMoreData,\n            hasMore: data.length < 50,\n            loader: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                avatar: true,\n                paragraph: {\n                    rows: 1\n                },\n                active: true\n            }, void 0, false, void 0, void 0),\n            endMessage: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Divider, {\n                plain: true,\n                children: \"It is all, nothing more \\uD83E\\uDD10\"\n            }, void 0, false, void 0, void 0),\n            scrollableTarget: \"scrollableDiv\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List, {\n                dataSource: data,\n                renderItem: (item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item, {\n                        actions: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"edit\"\n                            }, \"list-loadmore-edit\", false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: \"more\"\n                            }, \"list-loadmore-more\", false, void 0, void 0)\n                        ],\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item.Meta, {\n                                avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                    src: item.picture.large\n                                }, void 0, false, void 0, void 0),\n                                title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"https://ant.design\",\n                                    children: item.name.last\n                                }, void 0, false, void 0, void 0),\n                                description: item.email\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Content\"\n                            }, void 0, false, void 0, void 0)\n                        ]\n                    }, item.email, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Users/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Users/index.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/serhiivoloshyn/Desktop/cubex/portal/components/Users/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(App, \"gGYstEUzFphqz50KeZWwSPB/q0c=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQW1EO0FBQ0k7QUFDTTtBQWtCN0QsTUFBTVEsTUFBZ0IsSUFBTTs7SUFDMUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFhLEVBQUU7SUFFL0MsTUFBTVcsZUFBZSxJQUFNO1FBQ3pCLElBQUlKLFNBQVM7WUFDWDtRQUNGLENBQUM7UUFDREMsV0FBVyxJQUFJO1FBQ2ZJLE1BQU0sa0ZBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csT0FBUztZQUNkTixRQUFRO21CQUFJRDttQkFBU08sS0FBS0MsT0FBTzthQUFDO1lBQ2xDVCxXQUFXLEtBQUs7UUFDbEIsR0FDQ1UsS0FBSyxDQUFDLElBQU07WUFDWFYsV0FBVyxLQUFLO1FBQ2xCO0lBQ0o7SUFFQVQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUTtRQUNDQyxJQUFHO1FBQ0hDLE9BQU87WUFDTEMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLFNBQVM7WUFDVEMsUUFBUTtRQUNWO2tCQUVBLDRFQUFDcEIsdUVBQWNBO1lBQ2JxQixZQUFZakIsS0FBS2tCLE1BQU07WUFDdkJDLE1BQU1qQjtZQUNOa0IsU0FBU3BCLEtBQUtrQixNQUFNLEdBQUc7WUFDdkJHLHNCQUFRLDhEQUFDMUIsMENBQVFBO2dCQUFDMkIsTUFBTTtnQkFBQ0MsV0FBVztvQkFBRUMsTUFBTTtnQkFBRTtnQkFBR0MsTUFBTTs7WUFDdkRDLDBCQUFZLDhEQUFDakMseUNBQU9BO2dCQUFDa0MsS0FBSzswQkFBQzs7WUFDM0JDLGtCQUFpQjtzQkFFakIsNEVBQUNsQyxzQ0FBSUE7Z0JBQ0htQyxZQUFZN0I7Z0JBQ1o4QixZQUFZLENBQUNDLHFCQUNYLDhEQUFDckMsMkNBQVM7d0JBQWtCdUMsU0FBUzswQ0FBQyw4REFBQ0M7MENBQTJCOytCQUFyQjswQ0FBK0IsOERBQUNBOzBDQUEyQjsrQkFBckI7eUJBQThCOzswQ0FDL0csOERBQUN4QyxnREFBYztnQ0FDYjRCLHNCQUFRLDhEQUFDOUIsd0NBQU1BO29DQUFDNEMsS0FBS0wsS0FBS00sT0FBTyxDQUFDQyxLQUFLOztnQ0FDdkNDLHFCQUFPLDhEQUFDTDtvQ0FBRU0sTUFBSzs4Q0FBc0JULEtBQUtVLElBQUksQ0FBQ0MsSUFBSTs7Z0NBQ25EQyxhQUFhWixLQUFLYSxLQUFLOzswQ0FFekIsOERBQUNsQzswQ0FBSTs7O3VCQU5TcUIsS0FBS2EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQWF0QztHQTFETS9DO0tBQUFBO0FBNEROLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMvaW5kZXgudHN4P2Y0MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIsIERpdmlkZXIsIExpc3QsIFNrZWxldG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudCc7XG5cbmludGVyZmFjZSBEYXRhVHlwZSB7XG4gIGdlbmRlcjogc3RyaW5nO1xuICBuYW1lOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBmaXJzdDogc3RyaW5nO1xuICAgIGxhc3Q6IHN0cmluZztcbiAgfTtcbiAgZW1haWw6IHN0cmluZztcbiAgcGljdHVyZToge1xuICAgIGxhcmdlOiBzdHJpbmc7XG4gICAgbWVkaXVtOiBzdHJpbmc7XG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIH07XG4gIG5hdDogc3RyaW5nO1xufVxuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPERhdGFUeXBlW10+KFtdKTtcblxuICBjb25zdCBsb2FkTW9yZURhdGEgPSAoKSA9PiB7XG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaCgnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8/cmVzdWx0cz0xMCZpbmM9bmFtZSxnZW5kZXIsZW1haWwsbmF0LHBpY3R1cmUmbm9pbmZvJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoYm9keSkgPT4ge1xuICAgICAgICBzZXREYXRhKFsuLi5kYXRhLCAuLi5ib2R5LnJlc3VsdHNdKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRNb3JlRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cInNjcm9sbGFibGVEaXZcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiYSgxNDAsIDE0MCwgMTQwLCAwLjM1KScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICBkYXRhTGVuZ3RoPXtkYXRhLmxlbmd0aH1cbiAgICAgICAgbmV4dD17bG9hZE1vcmVEYXRhfVxuICAgICAgICBoYXNNb3JlPXtkYXRhLmxlbmd0aCA8IDUwfVxuICAgICAgICBsb2FkZXI9ezxTa2VsZXRvbiBhdmF0YXIgcGFyYWdyYXBoPXt7IHJvd3M6IDEgfX0gYWN0aXZlIC8+fVxuICAgICAgICBlbmRNZXNzYWdlPXs8RGl2aWRlciBwbGFpbj5JdCBpcyBhbGwsIG5vdGhpbmcgbW9yZSDwn6SQPC9EaXZpZGVyPn1cbiAgICAgICAgc2Nyb2xsYWJsZVRhcmdldD1cInNjcm9sbGFibGVEaXZcIlxuICAgICAgPlxuICAgICAgICA8TGlzdFxuICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXtpdGVtLmVtYWlsfSBhY3Rpb25zPXtbPGEga2V5PVwibGlzdC1sb2FkbW9yZS1lZGl0XCI+ZWRpdDwvYT4sIDxhIGtleT1cImxpc3QtbG9hZG1vcmUtbW9yZVwiPm1vcmU8L2E+XX0+XG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2l0ZW0ucGljdHVyZS5sYXJnZX0gLz59XG4gICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIj57aXRlbS5uYW1lLmxhc3R9PC9hPn1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5lbWFpbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj5Db250ZW50PC9kaXY+XG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkF2YXRhciIsIkRpdmlkZXIiLCJMaXN0IiwiU2tlbGV0b24iLCJJbmZpbml0ZVNjcm9sbCIsIkFwcCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJsb2FkTW9yZURhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYm9keSIsInJlc3VsdHMiLCJjYXRjaCIsImRpdiIsImlkIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmciLCJib3JkZXIiLCJkYXRhTGVuZ3RoIiwibGVuZ3RoIiwibmV4dCIsImhhc01vcmUiLCJsb2FkZXIiLCJhdmF0YXIiLCJwYXJhZ3JhcGgiLCJyb3dzIiwiYWN0aXZlIiwiZW5kTWVzc2FnZSIsInBsYWluIiwic2Nyb2xsYWJsZVRhcmdldCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiaXRlbSIsIkl0ZW0iLCJhY3Rpb25zIiwiYSIsIk1ldGEiLCJzcmMiLCJwaWN0dXJlIiwibGFyZ2UiLCJ0aXRsZSIsImhyZWYiLCJuYW1lIiwibGFzdCIsImRlc2NyaXB0aW9uIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Users/index.tsx\n"));

/***/ })

});