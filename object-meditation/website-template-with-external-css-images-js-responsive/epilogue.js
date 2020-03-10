function words() {
  var text = document.getElementById("input_text").value;

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

  $("#newchpt").css(
    "font-family", a+",cursive"
  );
  $("#sa").css("display","flex");
  $("#info").css("display", "none");
  $("#newchpt").html(text);
  $("#newchpt").css("display","flex");
  $("#myVideo").css("display", "block");
  }
