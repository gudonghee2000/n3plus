add_div()

function add_div() {
  var datas;
  $.ajax({
    type: "POST",
    url: "/nftpage",
    dataType: "JSON",
    processData: false,
    contentType: false,
    async: true,
    success: function (data) {
      datas = data.items;
      console.log(datas);
      for (var i = 0; i < datas.length; i++) {
        var imgTag = document.getElementById('photo2');
        imgTag.setAttribute("src", datas[i].url);
    
        var imgName = document.getElementById('nft-name');
        imgName.innerText = datas[i].name;

        var category = document.getElementById("nft_category");
        if (datas[i].categorys !== null) {
          category.innerText = datas[i].categorys;
        }
       
        const price = document.querySelector(".fa-brands");
        price.innerText = " " + datas[i].price + "worry";
        
        var div = document.createElement('div');
        div.innerHTML = document.getElementById('room_type').innerHTML;
    
        document.getElementById('field').appendChild(div);
      }
    }
  });
}

$('.nft-card--music').hover(function () {
  if (audio.paused == false) {
    audio.pause();
    $('.fa-play').show();
    $('.fa-pause').hide();
    $('.music-card').removeClass('playing');
  } else {
    audio.play();
    $('.fa-pause').show();
    $('.fa-play').hide();
    $('.music-card').addClass('playing');
  }
});
