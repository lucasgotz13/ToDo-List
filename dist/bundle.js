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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\nfunction addTask() {\n    const titleValue = document.getElementById('task_title').value\n    const descValue = document.getElementById('task_description').value\n    const dateValue = document.getElementById('task_due-date').value\n    const important = document.getElementById('task_importance').value\n\n    if (titleValue == \"\" || dateValue == \"\") return;\n\n    let newTodo = {\n        title: titleValue,\n        description: descValue,\n        due_date: dateValue,\n        important: important \n    }\n\n    return newTodo\n}\n\n//# sourceURL=webpack://todo-list/./src/components/addTask.js?");

/***/ }),

/***/ "./src/components/deleteTask.js":
/*!**************************************!*\
  !*** ./src/components/deleteTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nfunction deleteTask() { \n    const task = e.target.closest('.task');\n    task.remove();\n    console.log(\"delete task\");\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/deleteTask.js?");

/***/ }),

/***/ "./src/components/displayTask.js":
/*!***************************************!*\
  !*** ./src/components/displayTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _assets_trash_can_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/trash-can-svgrepo-com.svg */ \"./src/assets/trash-can-svgrepo-com.svg\");\n\n\nfunction displayTasks(title, description, dueDate, priority) {\n    const tasksBody = document.querySelector(\".tasks-body\");\n    const task = document.createElement(\"div\");\n    task.classList.add(\"task\");\n    task.innerHTML = `<div><h4 class=\"task-title\">${title}</h4><p>${description}</p></div>  <p>Due-date: ${dueDate}</p> <p>Priority: ${priority}</p>`;\n    const trashIcon = document.createElement(\"button\");\n    trashIcon.classList.add(\"trash-can-logo\");\n    trashIcon.innerHTML = `<img src=${_assets_trash_can_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__} width=32px height=32px></img>`;\n    tasksBody.appendChild(task);\n    tasksBody.appendChild(trashIcon);\n}\n\n//# sourceURL=webpack://todo-list/./src/components/displayTask.js?");

/***/ }),

/***/ "./src/components/openModal.js":
/*!*************************************!*\
  !*** ./src/components/openModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(modal) {\n    if (modal == null) return;\n    modal.classList.add(\"active\");\n    overlay.classList.add(\"active\");\n}\n\nfunction closeModal(modal) {\n    if (modal == null) return;\n    modal.classList.remove(\"active\");\n    overlay.classList.remove(\"active\");\n}\n\n\n//# sourceURL=webpack://todo-list/./src/components/openModal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_openModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/openModal */ \"./src/components/openModal.js\");\n/* harmony import */ var _components_addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addTask */ \"./src/components/addTask.js\");\n/* harmony import */ var _components_displayTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/displayTask */ \"./src/components/displayTask.js\");\n/* harmony import */ var _components_deleteTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/deleteTask */ \"./src/components/deleteTask.js\");\n\n\n\n// open and close modal //////////////\nconst openModalButtons = document.querySelectorAll(\"[data-modal-target]\");\nconst closeModalButtons = document.querySelectorAll(\"[data-close-button]\");\nconst overlay = document.getElementById(\"overlay\");\nconst alternativeModal = document.querySelector(\".modal\");\n\nopenModalButtons.forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    const modal = document.querySelector(button.dataset.modalTarget);\n    (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\n  });\n});\n\noverlay.addEventListener(\"click\", () => {\n  const modals = document.querySelectorAll(\".modal.active\");\n  modals.forEach((modal) => {\n    (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\n  });\n});\n\ncloseModalButtons.forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    const modal = button.closest(\".modal\");\n    (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\n  });\n});\n// ADD AND DISPLAY TASK\n\nconst addTaskButton = document.getElementById(\"add-task\");\nconst modalBody = document.querySelector(\".modal-body\");\nconst tasksBody = document.querySelector(\".tasks-body\");\nconst taskTitleInput = document.getElementById(\"task_title\");\nconst taskDescInput = document.getElementById(\"task_description\");\n\nlet tasks = [\n  //   {\n  //     title: \"Task 1\",\n  //     description: \"This is task 1\",\n  //     due_date: \"2021-01-01\",\n  //     important: \"High\",\n  //   },\n  //   {\n  //     title: \"Task 2\",\n  //     description: \"This is task 2\",\n  //     due_date: \"2021-01-02\",\n  //     important: \"Medium\",\n  //   }\n];\n\ntasks.forEach((task) => {\n  (0,_components_displayTask__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(task.title, task.description, task.due_date, task.important);\n});\n\nconsole.log(tasks);\n\naddTaskButton.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  if ((0,_components_addTask__WEBPACK_IMPORTED_MODULE_1__.addTask)() === undefined) {\n    const errorMessage = document.createElement(\"p\");\n    errorMessage.textContent = \"An error has occured\";\n    errorMessage.style.color = \"red\";\n    modalBody.appendChild(errorMessage);\n    setTimeout(() => {\n      errorMessage.remove();\n    }, 1000);\n    return;\n  }\n  tasks.push((0,_components_addTask__WEBPACK_IMPORTED_MODULE_1__.addTask)());\n  console.log(tasks);\n  (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(alternativeModal);\n  // DISPLAY TASKS\n  tasksBody.innerHTML = \"\";\n  taskTitleInput.value = \"\";\n  taskDescInput.value = \"\";\n  tasks.forEach((task) => {\n    (0,_components_displayTask__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(task.title, task.description, task.due_date, task.important);\n  });\n});\n\n// DELETE TASK //////////////\n// use trash can logo to delete task from DOM and from tasks array\ntasksBody.addEventListener(\"click\", (e) => {\n  if (e.target.classList.contains(\"trash-can-logo\")) {\n    (0,_components_deleteTask__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(e);\n    tasks = tasks.filter((task) => {\n      return (\n        task.title !== e.target.closest(\".task\").querySelector(\"h4\").textContent\n      );\n    });\n    console.log(tasks);\n  }\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/assets/trash-can-svgrepo-com.svg":
/*!**********************************************!*\
  !*** ./src/assets/trash-can-svgrepo-com.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f2193089ad4b60ed8b4b.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/trash-can-svgrepo-com.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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