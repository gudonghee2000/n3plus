import "../scss/styles.scss";
import html2canvas from "html2canvas";

$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});

const dlBtn = document.querySelector(".new-btn");

dlBtn.addEventListener("click", function () {
    const cap = document.querySelector("#cap");

    const charecter = document.querySelector(".active_base")
    const img = document.createElement("img");
    img.src = charecter.src;
    img.classList.add("capImg_hair");
    cap.appendChild(img);

    const shoes = document.querySelector(".active_shoes")
    const img5 = document.createElement("img");
    img5.src = shoes.src;
    img5.classList.add("capImg_hair");
    cap.appendChild(img5);

    const bottom = document.querySelector(".active_bottom")
    const img4 = document.createElement("img");
    img4.src = bottom.src;
    img4.classList.add("capImg_hair");
    cap.appendChild(img4);
   
    const cloth = document.querySelector(".active_cloth")
    const img3 = document.createElement("img");
    img3.src = cloth.src;
    img3.classList.add("capImg_hair");
    cap.appendChild(img3);

    const hair = document.querySelector(".active_hair");
    const img2 = document.createElement("img");
    img2.src = hair.src;
    img2.classList.add("capImg_hair");
    cap.appendChild(img2);

    const accessory = document.querySelector(".active_accessory")
    const img6 = document.createElement("img");
    img6.src = accessory.src;
    img6.classList.add("capImg_hair");
    cap.appendChild(img6);
    cap.classList.add("result");
    html2canvas(cap, {
        allowTaint:true,
        useCORS:true,
    }).then(canvas => {
        saveAs(canvas);
    })
})

function saveAs(canvas) {
    var imgDataUrl = canvas.toDataURL("image/png");
    var blobBin = atob(imgDataUrl.split(',')[1]);	// base64 데이터 디코딩
    var array = [];
    for (var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
    }
    var file = new Blob([new Uint8Array(array)], { type: 'image/png' });	// Blob 생성
    var formdata = new FormData();	// formData 생성
    formdata.append("file", file);

    var name = $('input[name=characterName]').val();

    $.ajax({
        type: "POST",
        url: "/custom",
        data: {"name": name},
        dataType:"JSON",
    })

    $.ajax({
        type: "POST",
        url: "/custom",
        data: formdata,
        dataType:"JSON",
        processData: false,
        contentType: false,
    });

    setTimeout(function(){
        window.location.href = "http://34.64.194.130:8080/loading";
    }, 500);
}