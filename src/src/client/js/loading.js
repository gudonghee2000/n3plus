var typingBool = false;
var buttonBool = false;
var typingIdx = 0;
var liIndex = 1;
var liLength = 4;
var typingTxt = $("#loading_" + liIndex).text();
typingTxt = typingTxt.split("");

const reStart = document.querySelector("#loading_restart");

setInterval(typing, 100);

function typing() {
    if (typingIdx < typingTxt.length) {
        $(".loading_typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        if (liIndex >= liLength) {
            createButton();
            return;
        } else {
            liIndex++;
        }

        typingIdx = 0;
        typingTxt = $("#loading_" + liIndex).text();
        $(".loading_typing").html('');
        clearInterval(tyInt);
        setTimeout(function () {
            tyInt = setInterval(typing, 100);
        }, 1000);
    }
}

function createButton() {
    if (buttonBool === false) {
        var typing1 = document.querySelector(".loading_typing");
        typing1.style.display = "none";
        var startButton = document.querySelector('#loading_start');
        startButton.style.display = "block";        
        buttonBool = true;
    }
}

var startDiv = document.querySelector('#loading_start');
startDiv.addEventListener("click", function () {
	window.location.href = 'http://34.64.194.130:8080/question';
})



