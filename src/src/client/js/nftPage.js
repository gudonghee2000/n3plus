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
        var idDiv = document.createElement('div');
        idDiv.style.display = "none";
        idDiv.innerText = datas[i].id;

        var link = document.querySelector(".nft-link");
        link.href = "http://34.64.194.130:8080//nftpage/webcame/" + idDiv.innerText;
        
        var imgTag = document.getElementById('photo2');
        imgTag.setAttribute("src", datas[i].url);
    
        var imgName = document.getElementById('nft-name');
        imgName.innerText = datas[i].name;

        var category = document.getElementById("nft_category");
        if (datas[i].categorys !== null) {
          category.innerText = datas[i].categorys;
        }
       
        var div = document.createElement('div');
        div.innerHTML = document.getElementById('room_type').innerHTML;

        var price = document.querySelector(".fa-brands");
        price.innerHTML = " " + (Math.random() * 0.01).toFixed(4) + "worry";
    
        document.getElementById('field').appendChild(div);
      }
    }
  });
}

// Audio
var audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/Lecrae_-_Anomaly_(Lyric_Video).mp3');
audio.volume = 0.1;
audio.autoplay = true;

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
