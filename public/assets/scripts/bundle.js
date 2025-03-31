/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (() => {

eval("/* global moment */\nconst time = document.getElementById(\"time\");\nconst reduction = document.getElementById(\"reduction\");\nconst augmentation = document.getElementById(\"augmentation\");\nlet count = 0;\nreduction.addEventListener(\"click\", () => {\n  if (count > 0) {\n    count--;\n    time.textContent = count.toString();\n  }\n});\naugmentation.addEventListener(\"click\", () => {\n  count++;\n  time.textContent = count.toString();\n});\nconst blockStart = document.getElementById(\"blockStart\");\nconst blockFinish = document.getElementById(\"blockFinish\");\nconst startButton = document.getElementById(\"start\");\nconst countdown = document.getElementById(\"countdown\");\nconst stopMessage = document.getElementById(\"stopMessage\");\nstartButton.addEventListener(\"click\", () => {\n  let number = parseInt(time.textContent, 10);\n  if (number <= 0) return;\n  blockStart.style.display = \"none\";\n  blockFinish.style.display = \"block\";\n  let secondsNum = moment.duration(number, \"minutes\").asSeconds();\n  countdown.textContent = displayTime(secondsNum);\n  let interval = setInterval(() => {\n    secondsNum--;\n    countdown.textContent = displayTime(secondsNum);\n    if (secondsNum === 0) {\n      clearInterval(interval);\n      countdown.textContent = \"00:00\";\n      stopMessage.style.display = \"block\";\n    }\n  }, 1000);\n});\nfunction displayTime(secondsNum) {\n  let duration = moment.duration(secondsNum, \"seconds\");\n  let minutes = duration.minutes();\n  if (minutes < 10) {\n    minutes = \"0\" + minutes;\n  }\n  let seconds = duration.seconds();\n  if (seconds < 10) {\n    seconds = \"0\" + seconds;\n  }\n  return `${minutes}:${seconds}`;\n}\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://live-reload-vanilla-website-template/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/scripts/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles/main.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;