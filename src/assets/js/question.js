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

/***/ "./src/client/js/question.js":
/*!***********************************!*\
  !*** ./src/client/js/question.js ***!
  \***********************************/
/***/ (() => {

eval("var checkIdx = 1;\nvar typingTxt = \"안녕 만나서 반가워😊. \\n 나는 널 뭐라고 부르면 될까? \\n\";\nvar typingIdx = 0;\nvar text = document.querySelector(\".question_typing\");\nvar tyInt = setInterval(firstTyping, 100);\n\n$.fn.textWidth = function (text, font) {\n  if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);\n  $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));\n  return $.fn.textWidth.fakeEl.width();\n};\n\n$('.width-dynamic').on('input', function () {\n  var inputWidth = $(this).textWidth();\n  $(this).css({\n    width: inputWidth + 15\n  });\n}).trigger('input');\n\nfunction inputWidth(elem, minW, maxW) {\n  elem = $(this);\n  console.log(elem);\n}\n\nvar targetElem = $('.width-dynamic');\ninputWidth(targetElem);\n\nfunction firstTyping() {\n  if (checkIdx >= 2) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    setTimeout(function () {\n      createNameAnswer();\n    }, 1000);\n  }\n}\n\nvar nameAnswerBool = false;\n\nfunction createNameAnswer() {\n  if (nameAnswerBool === false) {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"0px\";\n    document.querySelector(\".question_blank\").style.display = \"block\";\n    var name = document.querySelector(\"#question_name\");\n    name.style.display = \"inline-block\";\n    nameAnswerBool = true;\n  }\n}\n\nvar nameResult = \"\";\nvar characterName = \"\";\nvar nameAnswer = document.querySelector(\"#question_name\");\nnameAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"20px\";\n    document.querySelector(\".question_blank\").style.display = \"none\";\n    nameResult = nameAnswer.value;\n    characterName = $(\"#question_character\").text();\n    nameAnswer.remove();\n    var character = document.querySelector(\".question_pixelart\");\n    character.classList.add(\"question_face-right\");\n    typingTxt = nameResult + \"? 좋아. \\n 난 편하게 \" + characterName + \"(이)라고 불러줘😎 \\n 오늘 뭐 타고 왔어? \\n\";\n    typingIdx = 0;\n    text.innerHTML = \"\";\n    var tysecond = setInterval(secondTyping, 100);\n  }\n});\nvar messageForClient = nameResult + \"에게, \\n \";\n\nfunction secondTyping() {\n  if (checkIdx >= 3) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    setTimeout(function () {\n      createTrafficAnswer();\n    }, 1000);\n  }\n}\n\nvar trafficAnswerBool = false;\n\nfunction createTrafficAnswer() {\n  if (trafficAnswerBool === false) {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"0px\";\n    document.querySelector(\".question_blank\").style.display = \"block\";\n    var traffic = document.querySelector(\"#question_traffic\");\n    traffic.style.display = \"inline-block\";\n    trafficAnswerBool = true;\n  }\n}\n\nvar trafficAnswer = document.querySelector(\"#question_traffic\");\ntrafficAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"20px\";\n    document.querySelector(\".question_blank\").style.display = \"none\";\n    trafficAnswer.remove();\n    var character = document.querySelector(\".question_pixelart\");\n    character.classList.remove(\"question_face-right\");\n    character.classList.add(\"question_face-left\");\n    typingTxt = \"그랬구나. 와줘서 정말 고마워! 🤲 \\n\" + nameResult + \"! 뜬금없지만 평소에 넌 멘탈이 강한 편이야?\";\n    typingIdx = 0;\n    text.innerHTML = \"\";\n    tythird = setInterval(thirdTyping, 100);\n  }\n});\n\nfunction thirdTyping() {\n  if (checkIdx >= 4) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    typingTxt = \"아무래도 언제나 평온한 상태를 \\n\" + \"유지한다는 건 어려운 일인 것 같아...😥 \\n\" + \"어떤게 가장 널 힘들게 만드는 것 같아?\";\n    typingIdx = 0;\n    setTimeout(function () {\n      text.innerHTML = \"\";\n      createThirdAnswer();\n    }, 1000);\n  }\n}\n\nvar thirdAnswerBool = false;\n\nfunction createThirdAnswer() {\n  if (thirdAnswerBool === false) {\n    document.querySelector(\".question_typing\").style.display = \"none\";\n    var first = document.createElement(\"p\");\n    var blank = document.createElement(\"br\");\n    var second = document.createElement(\"p\");\n    var blank2 = document.createElement(\"br\");\n    var third = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer1\");\n    second.setAttribute(\"class\", \"answer1\");\n    third.setAttribute(\"class\", \"answer1\");\n    first.textContent = \"그래도 대체로 강한 편인 것 같아\";\n    second.textContent = \"사실 좀 유리 멘탈인 것 같아..\";\n    third.textContent = \"상황에 따라 되게 달라지는 것 같아\";\n    var controls = document.querySelector(\".question_color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(blank);\n    controls.appendChild(second);\n    controls.appendChild(blank2);\n    controls.appendChild(third);\n    first.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(blank);\n      controls.removeChild(second);\n      controls.removeChild(blank2);\n      controls.removeChild(third);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient = \"누구보다 강인한 멘탈을 가진 \" + nameResult + \"! 나 \" + characterName + \"! \\n\";\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.remove(\"question_face-left\");\n      tyfour = setInterval(fourTyping, 100);\n    });\n    second.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(blank);\n      controls.removeChild(second);\n      controls.removeChild(blank2);\n      controls.removeChild(third);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient = \"스스로 약한 멘탈을 갖고 있다고 말했지만, 그 속에 강인함을 감추고 있는 \" + nameResult + \"! 나 \" + characterName + \"! \\n\";\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.remove(\"question_face-left\");\n      tyfour = setInterval(fourTyping, 100);\n    });\n    third.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(blank);\n      controls.removeChild(second);\n      controls.removeChild(blank2);\n      controls.removeChild(third);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient = \"누구보다 상황을 유연하게 맞이하려고 하는 \" + nameResult + \". 나 \" + characterName + \"! \\n\";\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.remove(\"question_face-left\");\n      tyfour = setInterval(fourTyping, 100);\n    });\n    thirdAnswerBool = true;\n  }\n}\n\nfunction fourTyping() {\n  if (checkIdx >= 5) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    typingTxt = \"그렇지.. \\n 그러면서도 복합적인 이유가 있는 것 같아. \\n\" + \"최근에도 힘들거나 우울했던 일들이 있었어? \";\n    typingIdx = 0;\n    setTimeout(function () {\n      text.innerHTML = \"\";\n      createFourAnswer();\n    }, 1000);\n  }\n}\n\nvar fourAnswerBool = false;\n\nfunction createFourAnswer() {\n  if (fourAnswerBool === false) {\n    messageForClient += \"살다보니 참 별일이 다 있지? \";\n    document.querySelector(\".question_typing\").style.display = \"none\";\n    var first = document.createElement(\"p\");\n    var second = document.createElement(\"p\");\n    var third = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer2\");\n    second.setAttribute(\"class\", \"answer2\");\n    third.setAttribute(\"class\", \"answer2\");\n    first.textContent = \"항상 사람들이 날 힘들게 하는 것 같아\";\n    second.textContent = \"어떤 상황이 날 힘들게 하는 경우가 많았어\";\n    third.textContent = \"복합적인 이유가 있는 것 같아\";\n    var controls = document.querySelector(\".question_color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(second);\n    controls.appendChild(third);\n    first.addEventListener(\"click\", function () {\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.add(\"question_face-left\");\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient += \"사람 때문에 울고 웃기도 하고. \\n\";\n      tyfive = setInterval(fiveTyping, 100);\n    });\n    second.addEventListener(\"click\", function () {\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.add(\"question_face-left\");\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient += \"상황이 마음만큼 따라주지 않을 때가 많고. \\n\";\n      tyfive = setInterval(fiveTyping, 100);\n    });\n    third.addEventListener(\"click\", function () {\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.add(\"question_face-left\");\n      controls.removeChild(first);\n      controls.removeChild(second);\n      controls.removeChild(third);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient += \"사람도 상황도 내 맘 같지 않을 때가 많고. \\n\";\n      tyfive = setInterval(fiveTyping, 100);\n    });\n    fourAnswerBool = true;\n  }\n}\n\nfunction fiveTyping() {\n  if (checkIdx >= 6) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    typingTxt = \"그랬구나.. 난 최근 '나'에 대한 고민을 많이 하는 것 같아. \\n\" + \"몸이든, 마음이든 내가 건강하지 못하면 의미가 사라지잖아. \\n\" + \"넌 스스로를 잘 챙기고, 아껴주고 있어?\";\n    typingIdx = 0;\n    setTimeout(function () {\n      text.innerHTML = \"\";\n      createFiveAnswer();\n    }, 1000);\n  }\n}\n\nvar fiveAnswerBool = false;\n\nfunction createFiveAnswer() {\n  if (fiveAnswerBool === false) {\n    document.querySelector(\".question_typing\").style.display = \"none\";\n    var first = document.createElement(\"p\");\n    var second = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer3\");\n    second.setAttribute(\"class\", \"answer3\");\n    first.textContent = \"음.. 있었어 아직도 생생하게 기억나\";\n    second.textContent = \"힘들었던 건 금방 털어버리는 편이라, 잘 생각은 안 나\";\n    var controls = document.querySelector(\".question_color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(second);\n    var answerDivs = document.querySelectorAll('.answer3');\n    answerDivs.forEach(function (answerDiv) {\n      answerDiv.addEventListener(\"click\", function () {\n        controls.removeChild(first);\n        controls.removeChild(second);\n        document.querySelector(\".question_typing\").style.display = \"inline-block\";\n        tysix = setInterval(sixTyping, 100);\n      });\n    });\n    thirdAnswerBool = true;\n  }\n}\n\nfunction sixTyping() {\n  if (checkIdx >= 7) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    typingTxt = nameResult + \"! 너는 힘든 일이나 무거운 감정들이 찾아올 때 \\n 주변에 이야기를 잘 하는 편이야?\";\n    typingIdx = 0;\n    setTimeout(function () {\n      createWorryAnswer();\n    }, 1000);\n  }\n}\n\nvar worryAnswerBool = false;\n\nfunction createWorryAnswer() {\n  if (worryAnswerBool === false) {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"0px\";\n    document.querySelector(\".question_blank\").style.display = \"block\";\n    var worry = document.querySelector(\"#question_worry\");\n    worry.style.display = \"inline-block\";\n    worryAnswerBool = true;\n  }\n}\n\nvar middleAnswer;\nvar worryAnswer = document.querySelector(\"#question_worry\");\nworryAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"20px\";\n    document.querySelector(\".question_blank\").style.display = \"none\";\n    middleAnswer = worryAnswer.value;\n    worryAnswer.remove();\n    text.innerHTML = \"\";\n    typingTxt = \"음.. 어디보자...\";\n    setInterval(middleTyping, 100);\n  }\n});\n\nfunction middleTyping() {\n  if (checkIdx >= 8) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    setTimeout(function () {\n      sendMiddleAnswerToServer();\n    }, 1000);\n  }\n}\n\nfunction sendMiddleAnswerToServer() {\n  $.ajax({\n    type: \"POST\",\n    url: \"/question/middleQuestion\",\n    data: {\n      \"middleAnswer\": middleAnswer\n    },\n    dataType: \"JSON\",\n    async: true,\n    success: function success(data) {\n      var emotionName = data.emotion;\n      var messageForAdd;\n\n      if (emotionName === \"긍정\") {\n        var character = document.querySelector(\".question_pixelart\");\n        var messageForAdd = \"나름 건강하게 살아가려고 애쓰고 있었구나! \\n고생이 많았네.😊 \\n\";\n      } else if (emotionName === \"부정\") {\n        var _character = document.querySelector(\".question_pixelart\");\n\n        _character.classList.remove(\"question_face-left\");\n\n        _character.classList.add(\"question_face-right\");\n\n        var messageForAdd = \"앞으로는 스스로의 목소리에, \\n 조금 더 귀를 기울여야겠구먼!😜 \\n\";\n      }\n\n      text.innerHTML = \"\";\n      typingIdx = 0;\n      typingTxt = messageForAdd + nameResult + \"! 너는 힘든 일이나 무거운 감정들이 찾아올 때 \\n 주변에 이야기를 잘 하는 편이야?\";\n      tyseven = setInterval(sevenTyping, 100);\n    }\n  });\n}\n\nfunction sevenTyping() {\n  if (checkIdx >= 9) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    setTimeout(function () {\n      text.innerHTML = \"\";\n      createNewAnswer();\n    }, 1000);\n  }\n}\n\nvar newAnswerBool = false;\n\nfunction createNewAnswer() {\n  if (newAnswerBool === false) {\n    messageForClient += \"나도 방금 태어났지만, 세상이 마냥 쉽지 않다는 것 정도는 알 것 같아!ㅋ \\n \";\n    document.querySelector(\".question_typing\").style.display = \"none\";\n    var first = document.createElement(\"p\");\n    var second = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer3\");\n    second.setAttribute(\"class\", \"answer3\");\n    first.textContent = \"아니. 스스로 해결하는 편이 더 낫다고 생각해.\";\n    second.textContent = \"응. 이야기 하다 보면 마음의 짐이 조금 덜어지는 것 같아.\";\n    var controls = document.querySelector(\".question_color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(second);\n    first.addEventListener(\"click\", function () {\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.add(\"question_face-left\");\n      controls.removeChild(first);\n      controls.removeChild(second);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient += \"스스로 뭐든 잘 해결하려는 너지만, 가끔은 주변에 이야기도 하고 짐을 좀 나눠졌으면 좋겠다! \\n\";\n      typingIdx = 0;\n      typingTxt = \"스스로 해결하려는 강인함을 가진 아이구나. \\n 그래도 오늘은 한번 작은 고민거리라도 알려줘볼래? \\n 나누는 것만으로도 큰 위로가 될 때가 있으니까 🙏\";\n      tyfive = setInterval(eightTyping, 100);\n    });\n    second.addEventListener(\"click\", function () {\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.add(\"question_face-left\");\n      controls.removeChild(first);\n      controls.removeChild(second);\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n      messageForClient += \"가끔 마음이 어려운 순간이 오더라도,지금처럼 주변에 이야기도 나누면서 마음의 짐도 나눴으면 좋겠다! \\n\";\n      typingIdx = 0;\n      typingTxt = \"맞아. 가끔은 누군가에게 털어놓는 것만으로도 \\n 많은 위로가 되기도 하지. \\n 최근에 답답한 일이나 고민이 있었다면 \\n 조금이라도 나한테 말해줄래? 🙏\";\n      tyfive = setInterval(eightTyping, 100);\n    });\n    newAnswerBool = true;\n  }\n}\n\nfunction eightTyping() {\n  if (checkIdx >= 10) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    typingIdx = 0;\n    typingTxt = \"음.. 어디보자...\";\n    setTimeout(function () {\n      createLastAnswer();\n    }, 1000);\n  }\n}\n\nvar lastAnswerBool = false;\n\nfunction createLastAnswer() {\n  if (lastAnswerBool === false) {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"0px\";\n    document.querySelector(\".question_blank\").style.display = \"block\";\n    var last = document.querySelector(\"#question_last\");\n    last.style.display = \"inline-block\";\n    lastAnswerBool = true;\n  }\n}\n\nvar lastAnswer = document.querySelector(\"#question_last\");\nvar lastMessage = \"\";\nlastAnswer.addEventListener('keypress', function (key) {\n  if (key.key == 'Enter') {\n    document.querySelector(\".question_typing_div\").style.marginBottom = \"20px\";\n    document.querySelector(\".question_blank\").style.display = \"none\";\n    lastMessage = lastAnswer.value;\n    lastAnswer.remove();\n    text.innerHTML = \"\";\n    setInterval(waitTyping, 100);\n  }\n});\n\nfunction waitTyping() {\n  if (checkIdx >= 11) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    setTimeout(function () {\n      sendMessageToServer();\n    }, 1000);\n  }\n}\n\nvar categoryName = \"\";\n\nfunction sendMessageToServer() {\n  $.ajax({\n    type: \"POST\",\n    url: \"/question\",\n    data: {\n      \"lastMessage\": lastMessage\n    },\n    dataType: \"JSON\",\n    async: true,\n    success: function success(data) {\n      categoryName = data.name;\n      text.innerHTML = \"\";\n      typingIdx = 0;\n      typingTxt = \"너는 \" + categoryName + \"에 대해 걱정이 많았구나... \\n \" + \"좋아! \" + nameResult + \"! \\n 짧게나마 이야기 나눌 수 있어서 좋았어. \\n 내가 널 위해 편지를 준비했는데 읽어볼래? 😉\";\n      var character = document.querySelector(\".question_pixelart\");\n      character.classList.remove(\"question_face-left\");\n      character.classList.add(\"question_face-up\");\n      tyseven = setInterval(nineTyping, 100);\n    }\n  });\n}\n\nfunction nineTyping() {\n  if (checkIdx >= 12) {\n    return;\n  }\n\n  if (typingIdx < typingTxt.length) {\n    var txt = typingTxt[typingIdx];\n    text.innerHTML += txt === \"\\n\" ? \"<br/>\" : txt;\n    typingIdx++;\n  } else {\n    checkIdx++;\n    setTimeout(function () {\n      text.innerHTML = \"\";\n      saveClientData();\n    }, 1000);\n  }\n}\n\nfunction saveClientData() {\n  var onlyid = document.querySelector(\"#onlyid\").innerText;\n  console.log(onlyid);\n  messageForClient += categoryName + \"에 관한 걱정은 내가 갖고 사라질게! 마법처럼 모든 일이 사라지거나 해결되지 않더라도, 분명 네 안에 또 한번 맞설 수 있는 힘이 생겼을거야. 널 믿는다 친구!\";\n  $.ajax({\n    type: \"POST\",\n    url: \"/question/save\",\n    data: {\n      \"id\": onlyid,\n      \"clientmessage\": messageForClient,\n      \"userName\": nameResult,\n      \"name\": characterName,\n      \"catagory\": categoryName\n    },\n    dataType: \"JSON\",\n    async: true\n  });\n  createTenAnswer();\n}\n\nvar tenAnswerBool = false;\n\nfunction createTenAnswer() {\n  if (tenAnswerBool === false) {\n    document.querySelector(\".question_typing\").style.display = \"none\";\n    var first = document.createElement(\"p\");\n    var blank = document.createElement(\"br\");\n    var second = document.createElement(\"p\");\n    first.setAttribute(\"class\", \"answer3\");\n    second.setAttribute(\"class\", \"answer3\");\n    first.textContent = \"좋아!\";\n    second.textContent = \"아니 언제 그런걸 준비했어,,^^ 그래!\";\n    var controls = document.querySelector(\".question_color-controls\");\n    controls.appendChild(first);\n    controls.appendChild(blank);\n    controls.appendChild(second);\n    first.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      window.location.href = \"http://34.64.194.130:8080/letter\";\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n    });\n    second.addEventListener(\"click\", function () {\n      controls.removeChild(first);\n      controls.removeChild(second);\n      window.location.href = \"http://34.64.194.130:8080/letter\";\n      document.querySelector(\".question_typing\").style.display = \"inline-block\";\n    });\n    newAnswerBool = true;\n  }\n}\n\n//# sourceURL=webpack://project/./src/client/js/question.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/question.js"]();
/******/ 	
/******/ })()
;