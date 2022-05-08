var checkIdx = 1;
var typingTxt = "안녕 만나서 반가워😊. \n 내가 널 뭐라고 부르면 될까? \n";
var typingIdx = 0;
const text = document.querySelector(".question_typing");

var tyInt = setInterval(firstTyping, 100);

$.fn.textWidth = function(text, font) {
    
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
    
    return $.fn.textWidth.fakeEl.width();
};

$('.width-dynamic').on('input', function() {
    var inputWidth = $(this).textWidth();
    $(this).css({
        width: inputWidth + 10
    })
}).trigger('input');


function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem)
}

var targetElem = $('.width-dynamic');

inputWidth(targetElem);

function firstTyping() {
    if (checkIdx >= 2) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        setTimeout(function () {
            createNameAnswer();
        }, 1000);
    }
}

var nameAnswerBool = false;
function createNameAnswer() {
    if (nameAnswerBool === false) {
        const name = document.querySelector("#name");
        name.style.display = "inline-block";
        nameAnswerBool = true;
    }
}

var nameResult = "";
var characterName = "";
const nameAnswer = document.querySelector("#name");
nameAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        nameResult = nameAnswer.value;
        characterName = $("#question_character").text();
        nameAnswer.remove();
        const character = document.querySelector(".question_pixelart");
        character.classList.add("question_face-right");
        typingTxt = nameResult + "? 좋아. \n 난 편하게 " + characterName + "(이)라고 불러줘😎 \n 오늘 뭐 타고 왔어? \n";
        typingIdx = 0;
        text.innerHTML = "";
        var tysecond = setInterval(secondTyping, 100);
    }
})

var messageForClient = nameResult + "에게, \n ";


function secondTyping() {
    if (checkIdx >= 3) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        setTimeout(function () {
            createTrafficAnswer();
        }, 1000);
    }
}

var trafficAnswerBool = false;
function createTrafficAnswer() {
    if (trafficAnswerBool === false) {
        const traffic = document.querySelector("#traffic");
        traffic.style.display = "inline-block";
        trafficAnswerBool = true;
    }
}

const trafficAnswer = document.querySelector("#traffic");
trafficAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        trafficAnswer.remove();
        const character = document.querySelector(".question_pixelart");
        character.classList.remove("question_face-right");
        character.classList.add("question_face-left");
        typingTxt = "그랬구나. 와줘서 정말 고마워! 🤲 \n" + nameResult + "! 넌 멘탈이 강한 편이야?"
        typingIdx = 0;
        text.innerHTML = "";
        tythird = setInterval(thirdTyping, 100);
    }
})

function thirdTyping() {
    if (checkIdx >= 4) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        typingTxt = "아무래도 언제나 평온한 상태를 \n" + "유지한다는 건 어려운 일인거 같아...😥 \n" + "어떤게 가장 널 힘들게 만드는 것 같아?";
        typingIdx = 0;

        setTimeout(function () {
            text.innerHTML = "";
            createThirdAnswer();
        }, 1000);
    }
}

var thirdAnswerBool = false;
function createThirdAnswer() {
    if (thirdAnswerBool === false) {
        document.querySelector(".question_typing").style.display = "none";
        const first = document.createElement("p");
        const second = document.createElement("p");
        const third = document.createElement("p");
        first.setAttribute("class", "answer1");
        second.setAttribute("class", "answer1");
        third.setAttribute("class", "answer1");
        first.textContent = "그래도 대체로 강한 편인 것 같아";
        second.textContent = "사실 좀 유리 멘탈인 것 같아..";
        third.textContent = "상황에 따라 되게 달라지는 것 같아";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        controls.appendChild(third);

        first.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient = "누구보다 강인한 멘탈을 가진 " + nameResult + "! 나 " + characterName + "! \n";
            const character = document.querySelector(".question_pixelart");
            character.classList.remove("question_face-left");
            tyfour = setInterval(fourTyping, 100);
        })
        second.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient = "스스로 약한 멘탈을 갖고 있다고 말했지만, 그 속에 강인함을 감추고 있는 " + nameResult + "! 나 " + characterName + "! \n";
            const character = document.querySelector(".question_pixelart");
            character.classList.remove("question_face-left");
            tyfour = setInterval(fourTyping, 100);
        })
        third.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient = "누구보다 상황을 유연하게 맞이하려고 하는 " + nameResult + ". 나 " + characterName + "! \n";
            const character = document.querySelector(".question_pixelart");
            character.classList.remove("question_face-left");
            tyfour = setInterval(fourTyping, 100);
        })
        thirdAnswerBool = true;
    }
}

function fourTyping() {
    if (checkIdx >= 5) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        typingTxt = "그렇지.. \n 그러면서도 복합적인 이유가 있는 것 같아. \n" + "최근에도 힘들거나 우울했던 일들이 있었어? ";
        typingIdx = 0;

        setTimeout(function () {
            text.innerHTML = "";
            createFourAnswer();
        }, 1000);
    }
}

var fourAnswerBool = false;
function createFourAnswer() {
    if (fourAnswerBool === false) {
        messageForClient += "살다보니 참 별일이 다 있지? ";
        document.querySelector(".question_typing").style.display = "none";
        const first = document.createElement("p");
        const second = document.createElement("p");
        const third = document.createElement("p");
        first.setAttribute("class", "answer2");
        second.setAttribute("class", "answer2");
        third.setAttribute("class", "answer2");
        first.textContent = "항상 사람들이 날 힘들게 하는 것 같아";
        second.textContent = "어떤 상황이 날 힘들게 하는 경우가 많았어";
        third.textContent = "복합적인 이유가 있는 것 같아";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        controls.appendChild(third);

        first.addEventListener("click", function () {
            const character = document.querySelector(".question_pixelart");
            character.classList.add("question_face-left");
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient += "사람 때문에 울고 웃기도 하고. \n";
            tyfive = setInterval(fiveTyping, 100);
        })
        second.addEventListener("click", function () {
            const character = document.querySelector(".question_pixelart");
            character.classList.add("question_face-left");
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient += "상황이 마음만큼 따라주지 않을 때가 많고. \n";
            tyfive = setInterval(fiveTyping, 100);
        })
        third.addEventListener("click", function () {
            const character = document.querySelector(".question_pixelart");
            character.classList.add("question_face-left");
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient += "사람도 상황도 내 맘 같지 않을 때가 많고. \n";
            tyfive = setInterval(fiveTyping, 100);
        })
        fourAnswerBool = true;
    }
}

function fiveTyping() {
    if (checkIdx >= 6) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        typingTxt = "그랬구나.. 난 요즘 사람들이 무심코 한 말로 \n" + "괜히 상처를 받기도 하는 것 같아. \n" + "혹시 너도 상처가 됐던 말이 있어?";
        typingIdx = 0;

        setTimeout(function () {
            text.innerHTML = "";
            createFiveAnswer();
        }, 1000);
    }
}

var fiveAnswerBool = false;
function createFiveAnswer() {
    if (fiveAnswerBool === false) {
        document.querySelector(".question_typing").style.display = "none";
        const first = document.createElement("p");
        const second = document.createElement("p");
        first.setAttribute("class", "answer3");
        second.setAttribute("class", "answer3");
        first.textContent = "음.. 있었어 아직도 생생하게 기억나";
        second.textContent = "힘들었던 건 금방 털어버리는 편이라, 잘 생각은 안 나";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);

        var answerDivs = document.querySelectorAll('.answer3');
        answerDivs.forEach((answerDiv) => {
            answerDiv.addEventListener("click", function () {
                controls.removeChild(first);
                controls.removeChild(second);
                document.querySelector(".question_typing").style.display = "inline-block";
                tysix = setInterval(sixTyping, 100);
            })
        })
        thirdAnswerBool = true;
    }
}

function sixTyping() {
    if (checkIdx >= 7) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        typingTxt = nameResult + "! 너는 힘든 일이나 무거운 감정들이 찾아올 때 \n 주변에 이야기를 잘 하는 편이야?";
        typingIdx = 0;

        setTimeout(function () {
            createWorryAnswer();
        }, 1000);
    }
}

var worryAnswerBool = false;
function createWorryAnswer() {
    if (worryAnswerBool === false) {
        const worry = document.querySelector("#worry");
        worry.style.display = "inline-block";
        worryAnswerBool = true;
    }
}

const worryAnswer = document.querySelector("#worry");
worryAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        const middleAnswer = worryAnswer.value; 
        const character = document.querySelector(".question_pixelart");
        character.classList.remove("question_face-left");
        worryAnswer.remove();
        text.innerHTML = "";
        $.ajax({
            type: "POST",
            url: "/question/middleQuestion",
            data: {"middleAnswer": middleAnswer},
            dataType:"JSON",
            async:true,
            success: function(data){
                const emotionName = data.emotion;
                console.log(emotionName);
                tyseven = setInterval(sevenTyping, 100);
            }
        })
    }
})

function sevenTyping() {
    if (checkIdx >= 8) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        setTimeout(function () {
            text.innerHTML = "";
            createNewAnswer();
        }, 1000);
    }
}

var newAnswerBool = false;
function createNewAnswer() {
    if (newAnswerBool === false) {
        messageForClient += "나도 방금 태어났지만, 세상이 마냥 쉽지 않다는 것 정도는 알 것 같아!ㅋ \n ";
        document.querySelector(".question_typing").style.display = "none";
        const first = document.createElement("p");
        const second = document.createElement("p");
        first.setAttribute("class", "answer3");
        second.setAttribute("class", "answer3");
        first.textContent = "아니. 스스로 해결하는 편이 더 낫다고 생각해.";
        second.textContent = "응. 이야기를 하다 보면 마음의 짐이 좀 덜어지는 것 같기도 해.";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);

        first.addEventListener("click", function () {
            const character = document.querySelector(".question_pixelart");
            character.classList.add("question_face-left");
            controls.removeChild(first);
            controls.removeChild(second);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient += "스스로 뭐든 잘 해결하려는 너지만, 가끔은 주변에 이야기도 하고 짐을 좀 나눠졌으면 좋겠다! \n";
            typingIdx = 0;
            typingTxt = "스스로 해결하려는 강인함을 가진 아이구나. \n 그래도 오늘은 한번 작은 고민거리라도 알려줘볼래? \n 나누는 것만으로도 큰 위로가 될 때가 있으니까 🙏";
            tyfive = setInterval(eightTyping, 100);
        })
        second.addEventListener("click", function () {
            const character = document.querySelector(".question_pixelart");
            character.classList.add("question_face-left");
            controls.removeChild(first);
            controls.removeChild(second);
            document.querySelector(".question_typing").style.display = "inline-block";
            messageForClient += "가끔 마음이 어려운 순간이 오더라도,지금처럼 주변에 이야기도 나누면서 마음의 짐도 나눴으면 좋겠다! \n";
            typingIdx = 0;
            typingTxt = "맞아. 가끔은 누군가에게 털어놓는 것만으로도 \n 많은 위로가 되기도 하지. \n 최근에 답답한 일이나 고민이 있었다면 \n 오늘 조금 털어두고 가 🙏";
            tyfive = setInterval(eightTyping, 100);
        })
        newAnswerBool = true;
    }
}

function eightTyping() {
    if (checkIdx >= 9) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        typingIdx = 0;
        typingTxt = "음.. 어디보자...";
        setTimeout(function () {
            createLastAnswer();
        }, 1000);
    }
}

var lastAnswerBool = false;
function createLastAnswer() {
    if (lastAnswerBool === false) {
        const last = document.querySelector("#last");
        last.style.display = "inline-block";
        lastAnswerBool = true;
    }
}

const lastAnswer = document.querySelector("#last");
var lastMessage = ""
lastAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        lastMessage = lastAnswer.value;
        lastAnswer.remove();
        text.innerHTML = "";
        setInterval(waitTyping, 100);
    }
})

function waitTyping() {
    if (checkIdx >= 10) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        setTimeout(function () {
            sendMessageToServer();
        }, 1000);
    }
}

var categoryName = "";
function sendMessageToServer() {
    $.ajax({
        type: "POST",
        url: "/question",
        data: {
            "lastMessage": lastMessage,
        },
        dataType: "JSON",
        async: true,
        success: function(data){
            categoryName = data.name;
            text.innerHTML = "";
            typingIdx = 0;
            typingTxt = "너는 " + categoryName + "에 대해 걱정이 많았구나... \n " + "좋아! " + nameResult + "! \n 짧게나마 이야기 나눌 수 있어서 좋았어. \n 내가 널 위해 편지를 준비했는데 읽어볼래? 😉";
            const character = document.querySelector(".question_pixelart");
            character.classList.remove("question_face-left");
            character.classList.add("question_face-up");
            tyseven = setInterval(nineTyping, 100);
        }
    })
}

function nineTyping() {
    if (checkIdx >= 11) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        let txt = typingTxt[typingIdx];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        typingIdx++;
    } else {
        checkIdx++;
        setTimeout(function () {
            text.innerHTML = "";
            saveClientData()
        }, 1000);
    }
}

function saveClientData() {
    messageForClient += categoryName + "에 관한 걱정은 내가 갖고 사라질게! 마법처럼 모든 일이 사라지거나 해결되지 않더라도, 분명 네 안에 또 한번 맞설 수 있는 힘이 생겼을거야. 널 믿는다 친구!"
    $.ajax({
        type: "POST",
        url: "/question/save",
        data: {
            "clientmessage": messageForClient,
            "userName" : nameResult,
            "name" : characterName,
        },
        dataType: "JSON",
        async: true,
    })
    createTenAnswer();
}

var tenAnswerBool = false;
function createTenAnswer() {
    if (tenAnswerBool === false) {
        document.querySelector(".question_typing").style.display = "none";
        const first = document.createElement("p");
        const second = document.createElement("p");
        first.setAttribute("class", "answer3");
        second.setAttribute("class", "answer3");
        first.textContent = "좋아!";
        second.textContent = "아니 언제 그런걸 준비했어,,^^ 그래!";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);

        first.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            window.location.href = "http://34.64.199.183:8080/letter";
            document.querySelector(".question_typing").style.display = "inline-block";
        })
        second.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            window.location.href = "http://34.64.199.183:8080/letter";
            document.querySelector(".question_typing").style.display = "inline-block";
        })
        newAnswerBool = true;
    }
}