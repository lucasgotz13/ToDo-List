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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\nfunction addTask() {\r\n    const titleValue = document.getElementById('task_title').value\r\n    const descValue = document.getElementById('task_description').value\r\n    const dateValue = document.getElementById('task_due-date').value\r\n    const important = document.getElementById('task_importance').value\r\n\r\n    if (titleValue == \"\" || dateValue == \"\") return;\r\n\r\n    let newTodo = {\r\n        title: titleValue,\r\n        description: descValue,\r\n        due_date: dateValue,\r\n        important: important \r\n    }\r\n\r\n    return newTodo\r\n}\n\n//# sourceURL=webpack://todo-list/./src/components/addTask.js?");

/***/ }),

/***/ "./src/components/deleteTask.js":
/*!**************************************!*\
  !*** ./src/components/deleteTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\nfunction deleteTask(e) { \r\n    const task = e.target.closest('.task');\r\n    task.remove();\r\n    // remove task from tasks arrayk\r\n    const taskTitle = task.querySelector('.task-title').textContent;\r\n    const taskIndex = _index__WEBPACK_IMPORTED_MODULE_0__.tasks.findIndex((task) => task.title === taskTitle);\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(taskIndex, 1);\r\n    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.tasks);\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/deleteTask.js?");

/***/ }),

/***/ "./src/components/displayTask.js":
/*!***************************************!*\
  !*** ./src/components/displayTask.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _assets_trash_can_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/trash-can-svgrepo-com.svg */ \"./src/assets/trash-can-svgrepo-com.svg\");\n/* harmony import */ var _assets_edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/edit-svgrepo-com.svg */ \"./src/assets/edit-svgrepo-com.svg\");\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTask */ \"./src/components/deleteTask.js\");\n/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTask */ \"./src/components/editTask.js\");\n\r\n\r\n\r\n\r\n\r\nfunction displayTasks(title, description, dueDate, priority) {\r\n    const tasksBody = document.querySelector(\".tasks-body\");\r\n    const task = document.createElement(\"div\");\r\n    task.classList.add(\"task\");\r\n    task.innerHTML = `<div><h4 class=\"task-title\">${title}</h4><p>${description}</p></div>  <p>Due-date: ${dueDate}</p> <p>Priority: ${priority}</p>`;\r\n    \r\n    const trashIcon = document.createElement(\"button\");\r\n    trashIcon.classList.add(\"trash-can-logo\");\r\n    trashIcon.innerHTML = `<img src=${_assets_trash_can_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__} width=32px height=32px></img>`; \r\n    trashIcon.addEventListener(\"click\", (e) => (0,_deleteTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e));\r\n\r\n    task.appendChild(trashIcon);\r\n\r\n    const editIcon = document.createElement(\"button\");\r\n    editIcon.classList.add(\"edit-logo\");\r\n    editIcon.innerHTML = `<img src=\"${_assets_edit_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__}\" width=32px height=32px></img>`;\r\n    editIcon.addEventListener(\"click\", (e) => (0,_editTask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e)); \r\n\r\n    task.appendChild(editIcon);\r\n\r\n    tasksBody.appendChild(task);\r\n\r\n    return trashIcon;\r\n}\n\n//# sourceURL=webpack://todo-list/./src/components/displayTask.js?");

/***/ }),

/***/ "./src/components/editTask.js":
/*!************************************!*\
  !*** ./src/components/editTask.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _displayTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTask */ \"./src/components/displayTask.js\");\n\r\n\r\n\r\nconst tasksBody = document.querySelector(\".tasks-body\");\r\n\r\nfunction editTask(e) {\r\n    // edit task title, description, due date, priority\r\n    const task = e.target.closest(\".task\");\r\n    const taskTitle = task.querySelector(\".task-title\").textContent;\r\n    const taskIndex = _index__WEBPACK_IMPORTED_MODULE_0__.tasks.findIndex((task) => task.title === taskTitle);\r\n    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].title);\r\n\r\n    let newTaskTitle = prompt(\"Enter new task title (leave blank to keep current title):\");\r\n    console.log(newTaskTitle)\r\n    let newTaskDesc = prompt(\"Enter new task description (leave blank to keep current description):\");\r\n    console.log(newTaskDesc) \r\n    let newTaskDueDate = prompt(\"Enter new task due date (yyyy-mm-dd) (leave blank to keep current due date):\");\r\n    console.log(newTaskDueDate)\r\n    let newTaskPriority = prompt(\"Enter new task priority (leave blank to keep current priority):\"); \r\n    console.log(newTaskPriority)\r\n\r\n    if (newTaskTitle === \"\" || newTaskTitle === null) {\r\n        newTaskTitle = _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].title;\r\n    }\r\n    \r\n    if (newTaskDesc === \"\" || newTaskDesc === null) {\r\n        newTaskDesc = _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].description;\r\n    }\r\n\r\n    if (newTaskDueDate === \"\" || newTaskDueDate === null) {\r\n        newTaskDueDate = _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].due_date;\r\n    }\r\n\r\n    if (newTaskPriority === \"\" || newTaskPriority === null) {\r\n        newTaskPriority = _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].important;\r\n    }\r\n\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].title = newTaskTitle;\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].description = newTaskDesc;\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].due_date = newTaskDueDate;\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.tasks[taskIndex].important = newTaskPriority;\r\n\r\n    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.tasks);\r\n\r\n    tasksBody.innerHTML = \"\";\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach((task) => {\r\n        (0,_displayTask__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(\r\n            task.title,\r\n            task.description,\r\n            task.due_date,\r\n            task.important\r\n        );\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/components/editTask.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _components_openModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/openModal */ \"./src/components/openModal.js\");\n/* harmony import */ var _components_addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/addTask */ \"./src/components/addTask.js\");\n/* harmony import */ var _components_displayTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/displayTask */ \"./src/components/displayTask.js\");\n\r\n\r\n\r\n// open and close modal //////////////\r\nconst openModalButtons = document.querySelectorAll(\"[data-modal-target]\");\r\nconst closeModalButtons = document.querySelectorAll(\"[data-close-button]\");\r\nconst overlay = document.getElementById(\"overlay\");\r\nconst alternativeModal = document.querySelector(\".modal\");\r\n\r\nopenModalButtons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n        const modal = document.querySelector(button.dataset.modalTarget);\r\n        (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.openModal)(modal);\r\n    });\r\n});\r\n\r\noverlay.addEventListener(\"click\", () => {\r\n    const modals = document.querySelectorAll(\".modal.active\");\r\n    modals.forEach((modal) => {\r\n        (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n    });\r\n});\r\n\r\ncloseModalButtons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n        const modal = button.closest(\".modal\");\r\n        (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(modal);\r\n    });\r\n});\r\n// ADD AND DISPLAY TASK\r\nconst addTaskButton = document.getElementById(\"add-task\");\r\nconst modalBody = document.querySelector(\".modal-body\");\r\nconst tasksBody = document.querySelector(\".tasks-body\");\r\nconst taskTitleInput = document.getElementById(\"task_title\");\r\nconst taskDescInput = document.getElementById(\"task_description\");\r\nlet tasks = [\r\n    {\r\n        title: \"Task 1\",\r\n        description: \"This is task 1\",\r\n        due_date: \"2021-01-01\",\r\n        important: \"High\",\r\n    },\r\n    {\r\n        title: \"Task 2\",\r\n        description: \"This is task 2\",\r\n        due_date: \"2021-01-02\",\r\n        important: \"Medium\",\r\n    },\r\n];\r\n\r\n\r\n\r\ntasks.forEach((task) => {\r\n    (0,_components_displayTask__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(task.title, task.description, task.due_date, task.important);\r\n});\r\n\r\nconsole.log(tasks);\r\n\r\naddTaskButton.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if ((0,_components_addTask__WEBPACK_IMPORTED_MODULE_1__.addTask)() === undefined) {\r\n        const errorMessage = document.createElement(\"p\");\r\n        errorMessage.textContent = \"An error has occured\";\r\n        errorMessage.style.color = \"red\";\r\n        modalBody.appendChild(errorMessage);\r\n        setTimeout(() => {\r\n            errorMessage.remove();\r\n        }, 1000);\r\n        return;\r\n    }\r\n    tasks.push((0,_components_addTask__WEBPACK_IMPORTED_MODULE_1__.addTask)());\r\n    console.log(tasks);\r\n    (0,_components_openModal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(alternativeModal);\r\n    // DISPLAY TASKS\r\n    tasksBody.innerHTML = \"\";\r\n    taskTitleInput.value = \"\";\r\n    taskDescInput.value = \"\";\r\n    tasks.forEach((task) => {\r\n        (0,_components_displayTask__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(\r\n            task.title,\r\n            task.description,\r\n            task.due_date,\r\n            task.important\r\n        );\r\n    }); \r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/assets/edit-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/assets/edit-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd88d38d8684e81c1c58.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/edit-svgrepo-com.svg?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;