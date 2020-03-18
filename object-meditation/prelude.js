$(document).ready(function() {


  $(".text1").click(function() {

    var k=Math.floor(Math.random() * 9);

    if (k==0){
      var a="Allura";
    }
    else if (k==1){
      var a="Alex Brush";
    }
    else if (k==2){
      var a="Marck Script"
    }
    else if (k==3){
      var a="Sacramento"
    }
    else if (k==4){
      var a="Satisfy"
    }
    else if (k==5){
      var a="Tangerine"
    }
    else if (k==6){
      var a="Arizonia"
    }
    else if (k==7){
      var a="Great Vibes"
    }
    else if (k==8){
      var a="Rouge Script"
    }

    console.log(k);
    console.log(a);

    $(".text1").css(
      "font-family", a+",cursive"
    );

    $(".text2").css(
      "font-family", a+",cursive"
    );

    $(".head").css(
      "font-family", a+",cursive"
    );
  });

  $(".text2").click(function() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  });
});
