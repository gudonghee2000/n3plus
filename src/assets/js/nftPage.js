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

/***/ "./src/client/js/nftPage.js":
/*!**********************************!*\
  !*** ./src/client/js/nftPage.js ***!
  \**********************************/
/***/ (() => {

eval("add_div();\n\nfunction add_div() {\n  var datas;\n  $.ajax({\n    type: \"POST\",\n    url: \"/nftpage\",\n    dataType: \"JSON\",\n    processData: false,\n    contentType: false,\n    async: true,\n    success: function success(data) {\n      datas = data.items;\n      console.log(datas);\n\n      for (var i = 0; i < datas.length; i++) {\n        var imgTag = document.getElementById('photo2');\n        imgTag.setAttribute(\"src\", datas[i].url);\n        var imgName = document.getElementById('nft-name');\n        imgName.innerText = datas[i].name;\n        var category = document.getElementById(\"nft_category\");\n\n        if (datas[i].categorys !== null) {\n          category.innerText = datas[i].categorys;\n        }\n\n        var price = document.querySelector(\".fa-brands\");\n        price.innerText = \" \" + datas[i].price + \"worry\";\n        var div = document.createElement('div');\n        div.innerHTML = document.getElementById('room_type').innerHTML;\n        document.getElementById('field').appendChild(div);\n      }\n    }\n  });\n}\n\n$('.nft-card--music').hover(function () {\n  if (audio.paused == false) {\n    audio.pause();\n    $('.fa-play').show();\n    $('.fa-pause').hide();\n    $('.music-card').removeClass('playing');\n  } else {\n    audio.play();\n    $('.fa-pause').show();\n    $('.fa-play').hide();\n    $('.music-card').addClass('playing');\n  }\n});\n\n//# sourceURL=webpack://project/./src/client/js/nftPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/nftPage.js"]();
/******/ 	
/******/ })()
;