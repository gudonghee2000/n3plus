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

/***/ "./src/client/js/home.js":
/*!*******************************!*\
  !*** ./src/client/js/home.js ***!
  \*******************************/
/***/ (() => {

eval("var typingBool = false;\nvar buttonBool = false;\nvar typingIdx = 0;\nvar liIndex = 1;\nvar liLength = 4;\nvar typingTxt = $(\"#home_\" + liIndex).text();\ntypingTxt = typingTxt.split(\"\");\n$('html, body').css({\n  'overflow': 'hidden',\n  'height': '100%'\n});\n$('#element').on('scroll mousewheel', function (event) {\n  event.preventDefault();\n  event.stopPropagation();\n  return false;\n});\nvar realStart = document.querySelector(\"#realStart\");\nrealStart.addEventListener(\"click\", function () {\n  realStart.style.display = \"none\";\n  setInterval(typing, 100);\n});\n\nfunction typing() {\n  if (typingIdx < typingTxt.length) {\n    $(\".typing\").append(typingTxt[typingIdx]);\n    typingIdx++;\n  } else {\n    if (liIndex >= liLength) {\n      createButton();\n      return;\n    } else {\n      liIndex++;\n    }\n\n    typingIdx = 0;\n    typingTxt = $(\"#home_\" + liIndex).text();\n    $(\".typing\").html('');\n    setTimeout(function () {\n      setInterval(typing, 100);\n    }, 1000);\n  }\n}\n\nfunction createButton() {\n  if (buttonBool === false) {\n    var typing = document.querySelector(\".typing\");\n    typing.style.display = \"none\";\n    var startButton = document.querySelector('#start');\n    startButton.style.display = \"block\";\n    buttonBool = true;\n  }\n}\n\nvar startDiv = document.querySelector('#start');\nstartDiv.addEventListener(\"click\", function () {\n  window.location.href = 'http://34.64.194.130:8080/custom';\n});\n\n//# sourceURL=webpack://project/./src/client/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/home.js"]();
/******/ 	
/******/ })()
;