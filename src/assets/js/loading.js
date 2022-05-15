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

/***/ "./src/client/js/loading.js":
/*!**********************************!*\
  !*** ./src/client/js/loading.js ***!
  \**********************************/
/***/ (() => {

eval("var typingBool = false;\nvar buttonBool = false;\nvar typingIdx = 0;\nvar liIndex = 1;\nvar liLength = 4;\nvar typingTxt = $(\"#loading_\" + liIndex).text();\ntypingTxt = typingTxt.split(\"\");\nvar reStart = document.querySelector(\"#loading_restart\");\nsetInterval(typing, 100);\n\nfunction typing() {\n  if (typingIdx < typingTxt.length) {\n    $(\".loading_typing\").append(typingTxt[typingIdx]);\n    typingIdx++;\n  } else {\n    if (liIndex >= liLength) {\n      createButton();\n      return;\n    } else {\n      liIndex++;\n    }\n\n    typingIdx = 0;\n    typingTxt = $(\"#loading_\" + liIndex).text();\n    $(\".loading_typing\").html('');\n    clearInterval(tyInt);\n    setTimeout(function () {\n      tyInt = setInterval(typing, 100);\n    }, 1000);\n  }\n}\n\nfunction createButton() {\n  if (buttonBool === false) {\n    var typing1 = document.querySelector(\".loading_typing\");\n    typing1.style.display = \"none\";\n    var startButton = document.querySelector('#loading_start');\n    startButton.style.display = \"block\";\n    buttonBool = true;\n  }\n}\n\nvar startDiv = document.querySelector('#loading_start');\nstartDiv.addEventListener(\"click\", function () {\n  window.location.href = 'http://34.64.194.130:8080/question';\n});\n\n//# sourceURL=webpack://project/./src/client/js/loading.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/loading.js"]();
/******/ 	
/******/ })()
;