"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "firebase-admin/app":
/*!*************************************!*\
  !*** external "firebase-admin/app" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase-admin/app");;

/***/ }),

/***/ "firebase-admin/firestore":
/*!*******************************************!*\
  !*** external "firebase-admin/firestore" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("firebase-admin/firestore");;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_amanchandra_Documents_Projects_Unified_1_1_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_amanchandra_Documents_Projects_Unified_1_1_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_amanchandra_Documents_Projects_Unified_1_1_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/amanchandra/Documents/Projects/Unified 1.1/src/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _Users_amanchandra_Documents_Projects_Unified_1_1_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFtYW5jaGFuZHJhJTJGRG9jdW1lbnRzJTJGUHJvamVjdHMlMkZVbmlmaWVkJTIwMS4xJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmFtYW5jaGFuZHJhJTJGRG9jdW1lbnRzJTJGUHJvamVjdHMlMkZVbmlmaWVkJTIwMS4xJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN5QztBQUN0SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaWZpZWQtcG9ydGFsLz84YmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hbWFuY2hhbmRyYS9Eb2N1bWVudHMvUHJvamVjdHMvVW5pZmllZCAxLjEvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9hbWFuY2hhbmRyYS9Eb2N1bWVudHMvUHJvamVjdHMvVW5pZmllZCAxLjEvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/firebase-adapter */ \"(rsc)/./node_modules/@auth/firebase-adapter/index.js\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase-admin/firestore */ \"firebase-admin/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__, firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__, firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// src/app/api/auth/[...nextauth]/route.js\n\n\n\n\n\n// Initialize Firebase Admin\nif (!(firebase_admin__WEBPACK_IMPORTED_MODULE_3___default().apps).length) {\n    if (!process.env.FIREBASE_SERVICE_KEY) {\n        throw new Error(\"FIREBASE_SERVICE_KEY is not defined!\");\n    }\n    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);\n    firebase_admin__WEBPACK_IMPORTED_MODULE_3___default().initializeApp({\n        credential: firebase_admin__WEBPACK_IMPORTED_MODULE_3___default().credential.cert(serviceAccount)\n    });\n}\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    adapter: (0,_auth_firebase_adapter__WEBPACK_IMPORTED_MODULE_2__.FirestoreAdapter)((0,firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)()),\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    cookies: {\n        sessionToken: {\n            name: `__Secure-next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: \"lax\",\n                path: \"/\",\n                secure: true,\n                domain: process.env.NEXTAUTH_URL?.replace(/https?:\\/\\//, \"\") || null\n            }\n        }\n    },\n    callbacks: {\n        async signIn ({ profile }) {\n            const email = profile.email;\n            console.log(\"\\uD83D\\uDCE7  Google email:\", email);\n            const ok = email?.endsWith(\"@iitm.ac.in\") || email?.endsWith(\"@ds.study.iitm.ac.in\") || email?.endsWith(\"@iitmparadox.org\");\n            console.log(\"✅  Allowed:\", ok);\n            return ok;\n        },\n        async session ({ session, token }) {\n            session.user.id = token?.sub ?? token?.id ?? null;\n            return session;\n        },\n        async redirect ({ url, baseUrl }) {\n            // Allows relative callback URLs\n            if (url.startsWith(\"/\")) return `${baseUrl}${url}`;\n            else if (new URL(url).origin === baseUrl) return url;\n            return `${baseUrl}/home?success=true`;\n        }\n    },\n    pages: {\n        signIn: \"/\"\n    }\n});\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBQ1Q7QUFDdUI7QUFDRTtBQUN2QjtBQUNxQjtBQUV4RCw0QkFBNEI7QUFDNUIsSUFBSSxDQUFDRyw0REFBVSxDQUFDRyxNQUFNLEVBQUU7SUFDdEIsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLG9CQUFvQixFQUFFO1FBQ3JDLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLE1BQU1DLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDTixRQUFRQyxHQUFHLENBQUNDLG9CQUFvQjtJQUVsRU4sbUVBQW1CLENBQUM7UUFDbEJZLFlBQVlaLGdFQUFnQixDQUFDYSxJQUFJLENBQUNMO0lBQ3BDO0FBQ0Y7QUFFQSxNQUFNTSxVQUFVakIsZ0RBQVFBLENBQUM7SUFDdkJrQixXQUFXO1FBQ1RqQixzRUFBY0EsQ0FBQztZQUNia0IsVUFBVVosUUFBUUMsR0FBRyxDQUFDWSxnQkFBZ0I7WUFDdENDLGNBQWNkLFFBQVFDLEdBQUcsQ0FBQ2Msb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsU0FBU3JCLHdFQUFnQkEsQ0FBQ0Usc0VBQVlBO0lBQ3RDb0IsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQUMsU0FBUztRQUNQQyxjQUFjO1lBQ1pDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztZQUN4Q0MsU0FBUztnQkFDUEMsVUFBVTtnQkFDVkMsVUFBVTtnQkFDVkMsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsUUFBUTVCLFFBQVFDLEdBQUcsQ0FBQzRCLFlBQVksRUFBRUMsUUFBUSxlQUFlLE9BQU87WUFDbEU7UUFDRjtJQUNGO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxRQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUN0QixNQUFNQyxRQUFRRCxRQUFRQyxLQUFLO1lBQzNCQyxRQUFRQyxHQUFHLENBQUMsK0JBQXFCRjtZQUNqQyxNQUFNRyxLQUNKSCxPQUFPSSxTQUFTLGtCQUNoQkosT0FBT0ksU0FBUywyQkFDaEJKLE9BQU9JLFNBQVM7WUFDbEJILFFBQVFDLEdBQUcsQ0FBQyxlQUFlQztZQUMzQixPQUFPQTtRQUNUO1FBQ0EsTUFBTXBCLFNBQVEsRUFBRUEsT0FBTyxFQUFFc0IsS0FBSyxFQUFFO1lBQzlCdEIsUUFBUXVCLElBQUksQ0FBQ0MsRUFBRSxHQUFHRixPQUFPRyxPQUFPSCxPQUFPRSxNQUFNO1lBQzdDLE9BQU94QjtRQUNUO1FBQ0EsTUFBTTBCLFVBQVMsRUFBRUMsR0FBRyxFQUFFQyxPQUFPLEVBQUU7WUFDN0IsZ0NBQWdDO1lBQ2hDLElBQUlELElBQUlFLFVBQVUsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxFQUFFRCxRQUFRLEVBQUVELElBQUksQ0FBQztpQkFFN0MsSUFBSSxJQUFJRyxJQUFJSCxLQUFLSSxNQUFNLEtBQUtILFNBQVMsT0FBT0Q7WUFDakQsT0FBTyxDQUFDLEVBQUVDLFFBQVEsa0JBQWtCLENBQUM7UUFDdkM7SUFDRjtJQUNBSSxPQUFPO1FBQ0xqQixRQUFRO0lBQ1Y7QUFDRjtBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaWZpZWQtcG9ydGFsLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IHsgRmlyZXN0b3JlQWRhcHRlciB9IGZyb20gXCJAYXV0aC9maXJlYmFzZS1hZGFwdGVyXCI7XG5pbXBvcnQgYWRtaW4gZnJvbSBcImZpcmViYXNlLWFkbWluXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vZmlyZXN0b3JlXCI7XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2UgQWRtaW5cbmlmICghYWRtaW4uYXBwcy5sZW5ndGgpIHtcbiAgaWYgKCFwcm9jZXNzLmVudi5GSVJFQkFTRV9TRVJWSUNFX0tFWSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZJUkVCQVNFX1NFUlZJQ0VfS0VZIGlzIG5vdCBkZWZpbmVkIVwiKTtcbiAgfVxuXG4gIGNvbnN0IHNlcnZpY2VBY2NvdW50ID0gSlNPTi5wYXJzZShwcm9jZXNzLmVudi5GSVJFQkFTRV9TRVJWSUNFX0tFWSk7XG5cbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHNlcnZpY2VBY2NvdW50KSxcbiAgfSk7XG59XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICB9KSxcbiAgXSxcbiAgYWRhcHRlcjogRmlyZXN0b3JlQWRhcHRlcihnZXRGaXJlc3RvcmUoKSksXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkYXlzXG4gIH0sXG4gIGNvb2tpZXM6IHtcbiAgICBzZXNzaW9uVG9rZW46IHtcbiAgICAgIG5hbWU6IGBfX1NlY3VyZS1uZXh0LWF1dGguc2Vzc2lvbi10b2tlbmAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdHJ1ZSwgLy8gRW5zdXJlIHRoaXMgaXMgdHJ1ZSBpbiBwcm9kdWN0aW9uXG4gICAgICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMPy5yZXBsYWNlKC9odHRwcz86XFwvXFwvLywgXCJcIikgfHwgbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgcHJvZmlsZSB9KSB7XG4gICAgICBjb25zdCBlbWFpbCA9IHByb2ZpbGUuZW1haWw7XG4gICAgICBjb25zb2xlLmxvZyhcIvCfk6cgIEdvb2dsZSBlbWFpbDpcIiwgZW1haWwpO1xuICAgICAgY29uc3Qgb2sgPVxuICAgICAgICBlbWFpbD8uZW5kc1dpdGgoXCJAaWl0bS5hYy5pblwiKSB8fFxuICAgICAgICBlbWFpbD8uZW5kc1dpdGgoXCJAZHMuc3R1ZHkuaWl0bS5hYy5pblwiKSB8fFxuICAgICAgICBlbWFpbD8uZW5kc1dpdGgoXCJAaWl0bXBhcmFkb3gub3JnXCIpO1xuICAgICAgY29uc29sZS5sb2coXCLinIUgIEFsbG93ZWQ6XCIsIG9rKTtcbiAgICAgIHJldHVybiBvaztcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbj8uc3ViID8/IHRva2VuPy5pZCA/PyBudWxsO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCB9KSB7XG4gICAgICAvLyBBbGxvd3MgcmVsYXRpdmUgY2FsbGJhY2sgVVJMc1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiL1wiKSkgcmV0dXJuIGAke2Jhc2VVcmx9JHt1cmx9YFxuICAgICAgLy8gQWxsb3dzIGNhbGxiYWNrIFVSTHMgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICBlbHNlIGlmIChuZXcgVVJMKHVybCkub3JpZ2luID09PSBiYXNlVXJsKSByZXR1cm4gdXJsXG4gICAgICByZXR1cm4gYCR7YmFzZVVybH0vaG9tZT9zdWNjZXNzPXRydWVgXG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvJywgLy8gU2V0IHlvdXIgbG9naW4gcGFnZSBwYXRoXG4gIH0sXG59KTtcblxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9OyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiRmlyZXN0b3JlQWRhcHRlciIsImFkbWluIiwiZ2V0RmlyZXN0b3JlIiwiYXBwcyIsImxlbmd0aCIsInByb2Nlc3MiLCJlbnYiLCJGSVJFQkFTRV9TRVJWSUNFX0tFWSIsIkVycm9yIiwic2VydmljZUFjY291bnQiLCJKU09OIiwicGFyc2UiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJoYW5kbGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhZGFwdGVyIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY29va2llcyIsInNlc3Npb25Ub2tlbiIsIm5hbWUiLCJvcHRpb25zIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInBhdGgiLCJzZWN1cmUiLCJkb21haW4iLCJORVhUQVVUSF9VUkwiLCJyZXBsYWNlIiwiY2FsbGJhY2tzIiwic2lnbkluIiwicHJvZmlsZSIsImVtYWlsIiwiY29uc29sZSIsImxvZyIsIm9rIiwiZW5kc1dpdGgiLCJ0b2tlbiIsInVzZXIiLCJpZCIsInN1YiIsInJlZGlyZWN0IiwidXJsIiwiYmFzZVVybCIsInN0YXJ0c1dpdGgiLCJVUkwiLCJvcmlnaW4iLCJwYWdlcyIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@opentelemetry","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Famanchandra%2FDocuments%2FProjects%2FUnified%201.1&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();