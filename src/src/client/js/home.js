var typingBool = false;
var buttonBool = false;
var typingIdx = 0;
var liIndex = 1;
var liLength = 4;
var typingTxt = $("#home_" + liIndex).text();
typingTxt = typingTxt.split("");

$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});

const realStart = document.querySelector("#realStart");


realStart.addEventListener("click", function () {
    realStart.style.display = "none";
    setInterval(typing, 100);
})

function typing() {
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        if (liIndex >= liLength) {
            createButton();
            return;
        } else {
            liIndex++;
        }
        typingIdx = 0;
        typingTxt = $("#home_" + liIndex).text();
        $(".typing").html('');
        setTimeout(function () {
            setInterval(typing, 100);
        }, 1000);
    }
}

function createButton() {
    if (buttonBool === false) {
        var typing = document.querySelector(".typing");
        typing.style.display = "none";
        var startButton = document.querySelector('#start');
        startButton.style.display = "block";        
        buttonBool = true;
    }
}

var startDiv = document.querySelector('#start');
startDiv.addEventListener("click", function () {
	window.location.href = 'http://34.64.194.130:8080/custom';
})

