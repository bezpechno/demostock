"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/app",{

/***/ "./pages/app.tsx":
/*!***********************!*\
  !*** ./pages/app.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProtectedRoute */ \"./components/ProtectedRoute.tsx\");\n/* harmony import */ var _components_Dashboard_TickerTape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard/TickerTape */ \"./components/Dashboard/TickerTape.tsx\");\n/* harmony import */ var _components_Dashboard_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Dashboard/PortfolioCard */ \"./components/Dashboard/PortfolioCard.tsx\");\n/* harmony import */ var _components_Dashboard_PortfolioDataWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Dashboard/PortfolioDataWidget */ \"./components/Dashboard/PortfolioDataWidget.tsx\");\n/* harmony import */ var _components_Charts_InstrumentChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Charts/InstrumentChart */ \"./components/Charts/InstrumentChart.tsx\");\n/* harmony import */ var _components_Dashboard_CreatePortfolioForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Dashboard/CreatePortfolioForm */ \"./components/Dashboard/CreatePortfolioForm.tsx\");\n/* harmony import */ var _lib_portfolioContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/portfolioContext */ \"./lib/portfolioContext.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst DashboardContent = ()=>{\n    _s();\n    const [viewingPortfolio, setViewingPortfolio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { portfolios, addPortfolio } = (0,_lib_portfolioContext__WEBPACK_IMPORTED_MODULE_8__.usePortfolio)();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const createPortfolio = (name, type)=>{\n        const id = (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)();\n        const newPortfolio = {\n            id,\n            name,\n            value: 0,\n            gain: 0,\n            type,\n            data: []\n        };\n        addPortfolio(newPortfolio);\n    };\n    const fetchStockData = async (symbol)=>{\n        setLoading(true);\n        setError(null);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(\"/api/stock-price\", {\n                params: {\n                    symbol\n                }\n            });\n            setChartData(response.data);\n        } catch (error) {\n            setError(\"Error fetching stock data\");\n            console.error(\"Error fetching stock data:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const totalValue = portfolios.reduce((acc, portfolio)=>acc + portfolio.value, 0);\n    const totalGain = portfolios.reduce((acc, portfolio)=>acc + portfolio.gain, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen bg-gray-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_TickerTape__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_CreatePortfolioForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                createPortfolio: createPortfolio\n                            }, void 0, false, {\n                                fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4\",\n                            children: portfolios.map((portfolio)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    id: portfolio.id,\n                                    name: portfolio.name,\n                                    value: portfolio.value,\n                                    data: portfolio.data\n                                }, portfolio.id, false, {\n                                    fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Dashboard_PortfolioDataWidget__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            totalValue: totalValue,\n                            totalGain: totalGain\n                        }, void 0, false, {\n                            fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Charts_InstrumentChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    data: chartData\n                                }, void 0, false, {\n                                    fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>fetchStockData(\"AAPL\"),\n                                    className: \"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600\",\n                                    children: loading ? \"Loading...\" : \"Fetch AAPL Data\"\n                                }, void 0, false, {\n                                    fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-red-500\",\n                                    children: error\n                                }, void 0, false, {\n                                    fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DashboardContent, \"HmOOJLJpQ6In8I4VXFY4ZQlYzvE=\", false, function() {\n    return [\n        _lib_portfolioContext__WEBPACK_IMPORTED_MODULE_8__.usePortfolio\n    ];\n});\n_c = DashboardContent;\nconst Dashboard = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardContent, {}, void 0, false, {\n        fileName: \"/home/bezpechno/Desktop/demostock/pages/app.tsx\",\n        lineNumber: 76,\n        columnNumber: 3\n    }, undefined);\n_c1 = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardContent\");\n$RefreshReg$(_c1, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBQcm90ZWN0ZWRSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlJztcbmltcG9ydCBUaWNrZXJUYXBlIGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL1RpY2tlclRhcGUnO1xuaW1wb3J0IFBvcnRmb2xpb0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvUG9ydGZvbGlvQ2FyZCc7XG5pbXBvcnQgUG9ydGZvbGlvRGF0YVdpZGdldCBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9Qb3J0Zm9saW9EYXRhV2lkZ2V0JztcbmltcG9ydCBJbnN0cnVtZW50Q2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFydHMvSW5zdHJ1bWVudENoYXJ0JztcbmltcG9ydCBDcmVhdGVQb3J0Zm9saW9Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NyZWF0ZVBvcnRmb2xpb0Zvcm0nO1xuaW1wb3J0IHsgdXNlUG9ydGZvbGlvIH0gZnJvbSAnLi4vbGliL3BvcnRmb2xpb0NvbnRleHQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgRGFzaGJvYXJkQ29udGVudDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt2aWV3aW5nUG9ydGZvbGlvLCBzZXRWaWV3aW5nUG9ydGZvbGlvXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IHsgcG9ydGZvbGlvcywgYWRkUG9ydGZvbGlvIH0gPSB1c2VQb3J0Zm9saW8oKTtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPHsgZGF0ZTogc3RyaW5nOyBwcmljZTogbnVtYmVyIH1bXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgY3JlYXRlUG9ydGZvbGlvID0gKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaWQgPSB1dWlkdjQoKTtcbiAgICBjb25zdCBuZXdQb3J0Zm9saW8gPSB7IGlkLCBuYW1lLCB2YWx1ZTogMCwgZ2FpbjogMCwgdHlwZSwgZGF0YTogW10gfTtcbiAgICBhZGRQb3J0Zm9saW8obmV3UG9ydGZvbGlvKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFN0b2NrRGF0YSA9IGFzeW5jIChzeW1ib2w6IHN0cmluZykgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3N0b2NrLXByaWNlJywge1xuICAgICAgICBwYXJhbXM6IHsgc3ltYm9sIH0sXG4gICAgICB9KTtcbiAgICAgIHNldENoYXJ0RGF0YShyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoJ0Vycm9yIGZldGNoaW5nIHN0b2NrIGRhdGEnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHN0b2NrIGRhdGE6JywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG90YWxWYWx1ZSA9IHBvcnRmb2xpb3MucmVkdWNlKChhY2MsIHBvcnRmb2xpbykgPT4gYWNjICsgcG9ydGZvbGlvLnZhbHVlLCAwKTtcbiAgY29uc3QgdG90YWxHYWluID0gcG9ydGZvbGlvcy5yZWR1Y2UoKGFjYywgcG9ydGZvbGlvKSA9PiBhY2MgKyBwb3J0Zm9saW8uZ2FpbiwgMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdGVjdGVkUm91dGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgICA8VGlja2VyVGFwZSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5EYXNoYm9hcmQ8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgPENyZWF0ZVBvcnRmb2xpb0Zvcm0gY3JlYXRlUG9ydGZvbGlvPXtjcmVhdGVQb3J0Zm9saW99IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00IG10LTRcIj5cbiAgICAgICAgICAgIHtwb3J0Zm9saW9zLm1hcCgocG9ydGZvbGlvKSA9PiAoXG4gICAgICAgICAgICAgIDxQb3J0Zm9saW9DYXJkIGtleT17cG9ydGZvbGlvLmlkfSBpZD17cG9ydGZvbGlvLmlkfSBuYW1lPXtwb3J0Zm9saW8ubmFtZX0gdmFsdWU9e3BvcnRmb2xpby52YWx1ZX0gZGF0YT17cG9ydGZvbGlvLmRhdGF9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UG9ydGZvbGlvRGF0YVdpZGdldCB0b3RhbFZhbHVlPXt0b3RhbFZhbHVlfSB0b3RhbEdhaW49e3RvdGFsR2Fpbn0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgICAgIDxJbnN0cnVtZW50Q2hhcnQgZGF0YT17Y2hhcnREYXRhfSAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaFN0b2NrRGF0YSgnQUFQTCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IHB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdGZXRjaCBBQVBMIERhdGEnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm90ZWN0ZWRSb3V0ZT5cbiAgKTtcbn07XG5cbmNvbnN0IERhc2hib2FyZDogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxEYXNoYm9hcmRDb250ZW50IC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiUHJvdGVjdGVkUm91dGUiLCJUaWNrZXJUYXBlIiwiUG9ydGZvbGlvQ2FyZCIsIlBvcnRmb2xpb0RhdGFXaWRnZXQiLCJJbnN0cnVtZW50Q2hhcnQiLCJDcmVhdGVQb3J0Zm9saW9Gb3JtIiwidXNlUG9ydGZvbGlvIiwiYXhpb3MiLCJEYXNoYm9hcmRDb250ZW50Iiwidmlld2luZ1BvcnRmb2xpbyIsInNldFZpZXdpbmdQb3J0Zm9saW8iLCJwb3J0Zm9saW9zIiwiYWRkUG9ydGZvbGlvIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiY3JlYXRlUG9ydGZvbGlvIiwibmFtZSIsInR5cGUiLCJpZCIsIm5ld1BvcnRmb2xpbyIsInZhbHVlIiwiZ2FpbiIsImRhdGEiLCJmZXRjaFN0b2NrRGF0YSIsInN5bWJvbCIsInJlc3BvbnNlIiwiZ2V0IiwicGFyYW1zIiwiY29uc29sZSIsInRvdGFsVmFsdWUiLCJyZWR1Y2UiLCJhY2MiLCJwb3J0Zm9saW8iLCJ0b3RhbEdhaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiRGFzaGJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/app.tsx\n"));

/***/ })

});