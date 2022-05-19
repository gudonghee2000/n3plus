const endButton = document.querySelector("#letter_end");

$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});

endButton.addEventListener("click", function() {
    window.location.href = "http://34.64.194.130:8080";
})