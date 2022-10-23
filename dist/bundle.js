/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addTask.js":
/*!***********************************!*\
  !*** ./src/components/addTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\nfunction addTask() {\r\n    const titleValue = document.getElementById('task_title').value\r\n    const descValue = document.getElementById('task_description').value\r\n    const dateValue = document.getElementById('task_due-date').value\r\n    const important = document.getElementById('task_importance').value\r\n\r\n    if (titleValue == \"\" || descValue == \"\" || dateValue == \"\") return;\r\n\r\n    let newTodo = {\r\n        title: titleValue,\r\n        description: descValue,\r\n        due_date: dateValue,\r\n        important: important \r\n    }\r\n\r\n    return newTodo\r\n}\n\n//# sourceURL=webpack://todo-list/./src/components/addTask.js?");

/***/ }),

/***/ "./src/components/openModal.js":
/*!*************************************!*\
  !*** ./src/components/openModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(modal) {\r\n    if (modal == null) return;\r\n    modal.classList.add(\"active\");\r\n    overlay.classList.add(\"active\");\r\n}\r\n\r\nfunction closeModal(modal) {\r\n    if (modal == null) return;\r\n    modal.classList.remove(\"active\");\r\n    overlay.classList.remove(\"active\");\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/openModal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_openModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/openModal */ \"./src/components/openModal.js\");\n/* harmony import */ var _components_addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addTask */ \"./src/components/addTask.js\");\n\r\n\r\n\r\n// open and close modal //////////////\r\nconst openModalButtons = document.querySelectorAll(\"[data-modal-target]\");\r\nconst closeModalButtons = document.querySelectorAll(\"[data-close-button]\");\r\nconst overlay = document.getElementById(\"overlay\");\r\nconst alternativeModal = document.querySelector(\".modal\");\r\n\r\nopenModalButtons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n        const modal = document.querySelector(button.dataset.modalTarget);\r\n        (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\r\n    });\r\n});\r\n\r\noverlay.addEventListener(\"click\", () => {\r\n    const modals = document.querySelectorAll(\".modal.active\");\r\n    modals.forEach((modal) => {\r\n        (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n    });\r\n});\r\n\r\ncloseModalButtons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n        const modal = button.closest(\".modal\");\r\n        (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n    });\r\n});\r\n// ADD TASK\r\nconst addTaskButton = document.getElementById(\"add-task\");\r\nconst modalBody = document.querySelector('.modal-body')\r\n\r\nlet tasks = [];\r\n\r\naddTaskButton.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if ((0,_components_addTask__WEBPACK_IMPORTED_MODULE_1__.addTask)() === undefined) {\r\n        const errorMessage = document.createElement('p')\r\n        errorMessage.textContent = \"An error has occured\"\r\n        errorMessage.style.color = \"red\"\r\n        modalBody.appendChild(errorMessage)\r\n        setTimeout(() => {\r\n            errorMessage.remove()\r\n        }, 1000)\r\n        return\r\n    }\r\n    tasks.push((0,_components_addTask__WEBPACK_IMPORTED_MODULE_1__.addTask)());\r\n    console.log(tasks);\r\n    (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(alternativeModal);\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;